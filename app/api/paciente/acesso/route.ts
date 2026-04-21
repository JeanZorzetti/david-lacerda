import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { gerarMagicLink } from "@/lib/meditele";
import { emailAcessoPaciente } from "@/lib/email-templates";

const schema = z.object({
  identificador: z
    .string()
    .min(3, "Informe um CPF ou e-mail válido")
    .max(100),
});

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

const EXPIRES_HOURS = 4;
const EXPIRES_MINUTES = EXPIRES_HOURS * 60;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const lastRequest = rateLimitMap.get(ip);
  if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_MS) {
    return NextResponse.json(
      { message: "Muitas tentativas. Aguarde 30 segundos." },
      { status: 429 }
    );
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
    return NextResponse.json(
      { message: "Dados inválidos", errors: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { identificador } = parsed.data;
  const isEmail = identificador.includes("@");
  const cpfClean = identificador.replace(/\D/g, "");

  const MEDITELE_API_KEY = process.env.MEDITELE_API_KEY;
  const MEDITELE_CLINIC_ID = process.env.MEDITELE_CLINIC_ID;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = "David Lacerda Telemedicina <contato@davidlacerda.com.br>";

  if (!MEDITELE_API_KEY || !MEDITELE_CLINIC_ID) {
    return NextResponse.json(
      { message: "Sistema em configuração. Entre em contato pelo WhatsApp." },
      { status: 503 }
    );
  }

  // Search patient in Meditele by CPF or email
  const searchParam = isEmail
    ? `email=${encodeURIComponent(identificador)}`
    : `cpf=${cpfClean}`;

  const searchRes = await fetch(
    `https://gateway.meditele.com.br/clinic/patient?${searchParam}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MEDITELE_API_KEY,
      },
    }
  );

  const searchData = await searchRes.json().catch(() => ({}));

  const patient =
    searchData?.data?.[0] ??
    searchData?.data?.patient ??
    searchData?.patient ??
    null;

  if (!patient?.id) {
    return NextResponse.json(
      {
        message:
          "Cadastro não encontrado. Verifique o CPF/e-mail ou solicite um novo acesso pelo formulário de agendamento.",
        notFound: true,
      },
      { status: 404 }
    );
  }

  const patientId = String(patient.id);
  const patientName: string = patient?.name ?? patient?.nome ?? "Paciente";
  const patientEmail: string = patient?.email ?? identificador;

  let loginUrl: string;
  try {
    loginUrl = await gerarMagicLink(patientId, EXPIRES_MINUTES);
  } catch (err) {
    console.error("[paciente/acesso] gerarMagicLink error:", err);
    return NextResponse.json(
      { message: "Erro ao gerar link de acesso. Tente novamente em instantes." },
      { status: 502 }
    );
  }

  // Send email if Resend is configured and we have a valid email
  if (RESEND_API_KEY && patientEmail.includes("@")) {
    const html = emailAcessoPaciente({
      nome: patientName,
      loginUrl,
      expiresHours: EXPIRES_HOURS,
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [patientEmail],
        subject: "Seu link de acesso ao portal — David Lacerda Telemedicina",
        html,
      }),
    }).catch((e) => console.error("[paciente/acesso] Resend error:", e));
  }

  return NextResponse.json(
    {
      message: "Link enviado para o seu e-mail.",
      redirectUrl: loginUrl,
    },
    { status: 200 }
  );
}
