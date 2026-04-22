import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { criarPaciente, gerarMagicLink } from "@/lib/meditele";
import { saveSubmission } from "@/lib/db/save-submission";
import {
  emailConfirmacaoAgendamento,
  emailNotificacaoInterna,
} from "@/lib/email-templates";

const schema = z.object({
  nome: z.string().min(2).max(100),
  cpf: z.string().min(11).max(14),
  email: z.string().email(),
  telefone: z.string().max(20).optional(),
  dataNascimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use o formato AAAA-MM-DD"),
  genero: z.enum(["male", "female", "other"]),
  especialidade: z.string().min(1),
  mensagem: z.string().max(1000).optional(),
  honeypot: z.string().max(0),
});

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

const EXPIRES_HOURS = 72;
const EXPIRES_MINUTES = EXPIRES_HOURS * 60;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const lastRequest = rateLimitMap.get(ip);
  if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_MS) {
    return NextResponse.json({ message: "Muitas requisições. Aguarde 1 minuto." }, { status: 429 });
  }
  rateLimitMap.set(ip, Date.now());

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Corpo inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Dados inválidos", errors: parsed.error.flatten() }, { status: 422 });
  }

  const { nome, cpf, email, telefone, dataNascimento, genero, especialidade, mensagem } =
    parsed.data;

  await saveSubmission({ type: "agendar", payload: { nome, email, telefone, dataNascimento, genero, especialidade, mensagem }, name: nome, email, phone: telefone ?? null });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = "David Lacerda Telemedicina <contato@davidlacerda.com.br>";
  const INTERNAL_EMAIL = process.env.CONTACT_EMAIL ?? "contato@davidlacerda.com.br";

  if (!RESEND_API_KEY) {
    return NextResponse.json({ message: "Serviço de e-mail não configurado" }, { status: 503 });
  }

  let meditelePatientId: string;
  let loginUrl: string;

  try {
    meditelePatientId = await criarPaciente({
      name: nome,
      cpf,
      email,
      phone: telefone,
      birthDate: dataNascimento,
      gender: genero,
    });

    loginUrl = await gerarMagicLink(meditelePatientId, EXPIRES_MINUTES);

    // Registrar lead/venda no prolife-site (não bloqueia o fluxo)
    registrarVendaProlife({ nome, email, cpf, telefone, especialidade }).catch((e) =>
      console.error("[agendar] registrarVendaProlife:", e)
    );
  } catch (err) {
    console.error("[agendar] Meditele error:", err);
    const message = err instanceof Error ? err.message : "Erro ao criar acesso";

    const isMissingConfig = message.includes("MEDITELE_API_KEY");
    if (isMissingConfig) {
      return NextResponse.json(
        { message: "Sistema de agendamento em configuração. Entre em contato pelo WhatsApp." },
        { status: 503 }
      );
    }

    return NextResponse.json({ message }, { status: 502 });
  }

  const confirmacaoHtml = emailConfirmacaoAgendamento({
    nome,
    email,
    especialidade,
    loginUrl,
    expiresHours: EXPIRES_HOURS,
  });

  const notificacaoHtml = emailNotificacaoInterna({
    nome,
    email,
    telefone,
    cpf,
    dataNascimento,
    genero,
    especialidade,
    mensagem,
    meditelePatientId,
  });

  async function sendEmail(payload: object) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message ?? `Resend HTTP ${res.status}`);
    }
  }

  try {
    await Promise.all([
      sendEmail({
        from: FROM_EMAIL,
        to: [email],
        subject: "Seu acesso ao portal de telemedicina está pronto — David Lacerda Telemedicina",
        html: confirmacaoHtml,
      }),
      sendEmail({
        from: FROM_EMAIL,
        to: [INTERNAL_EMAIL],
        reply_to: email,
        subject: `[Agendamento] ${especialidade} — ${nome}`,
        html: notificacaoHtml,
      }),
    ]);
  } catch (err) {
    console.error("[agendar] Resend error:", err);
    // Meditele patient was created — don't fail silently; patient can use /paciente to get link
    return NextResponse.json(
      {
        message:
          "Cadastro realizado, mas houve problema ao enviar o e-mail. Acesse /paciente para obter seu link de acesso.",
        meditelePatientId,
      },
      { status: 207 }
    );
  }

  return NextResponse.json(
    { message: "Agendamento realizado! Verifique seu e-mail para o link de acesso." },
    { status: 200 }
  );
}

async function registrarVendaProlife(opts: {
  nome: string;
  email: string;
  cpf: string;
  telefone?: string;
  especialidade: string;
}) {
  const secret = process.env.INTERNAL_SECRET;
  const prolifeUrl = process.env.PROLIFE_INTERNAL_URL ?? "https://prolifemed.com.br";

  if (!secret) {
    console.warn("[agendar] INTERNAL_SECRET não configurado — lead não registrado no prolife-site");
    return;
  }

  const res = await fetch(`${prolifeUrl}/api/internal/b2c-venda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({
      origem: "david",
      nome: opts.nome,
      email: opts.email,
      cpf: opts.cpf,
      telefone: opts.telefone,
      plano: opts.especialidade,
      valor_mensal: 47, // plano base Individual
      observacoes: `Agendamento via David Lacerda Telemedicina — Especialidade: ${opts.especialidade}`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`prolife-site respondeu ${res.status}: ${err}`);
  }
  console.log(`[agendar] Lead registrado no prolife-site para ${opts.email}`);
}
