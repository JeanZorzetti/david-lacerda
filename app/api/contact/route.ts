import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { saveSubmission } from "@/lib/db/save-submission";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  subject: z.enum(["consulta", "duvida", "financeiro", "outro"]),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0),
});

const subjectLabels: Record<string, string> = {
  consulta: "Agendamento de consulta",
  duvida: "Dúvida sobre telemedicina",
  financeiro: "Valores e pagamentos",
  outro: "Outro assunto",
};

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

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

  const { name, email, phone, subject, message } = parsed.data;

  await saveSubmission({ type: "contact", payload: { name, email, phone, subject, message }, name, email, phone: phone ?? null });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "contato@davidlacerda.com.br";

  if (!RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY not configured");
    return NextResponse.json({ message: "Serviço de e-mail não configurado" }, { status: 503 });
  }

  const emailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><title>Nova mensagem de contato</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#191c1d;">
  <div style="background:#28113e;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:20px;">Nova mensagem de contato</h1>
    <p style="color:#aa8ec4;margin:4px 0 0;">David Lacerda Telemedicina — davidlacerda.com.br</p>
  </div>
  <div style="background:#f3f4f5;padding:24px;border-radius:0 0 12px 12px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;font-weight:600;width:120px;color:#28113e;">Nome</td><td style="padding:8px 0;">${name}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#28113e;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#6b538d;">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:8px 0;font-weight:600;color:#28113e;">Telefone</td><td style="padding:8px 0;">${phone}</td></tr>` : ""}
      <tr><td style="padding:8px 0;font-weight:600;color:#28113e;">Assunto</td><td style="padding:8px 0;">${subjectLabels[subject] ?? subject}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #ccc4cf;margin:16px 0;" />
    <h3 style="color:#28113e;margin:0 0 8px;">Mensagem</h3>
    <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
  </div>
  <p style="text-align:center;color:#7c757e;font-size:12px;margin-top:16px;">
    Mensagem enviada via formulário de contato do site.
  </p>
</body>
</html>
  `.trim();

  const confirmHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><title>Recebemos sua mensagem</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#191c1d;">
  <div style="background:#28113e;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:20px;">Mensagem recebida!</h1>
    <p style="color:#aa8ec4;margin:4px 0 0;">David Lacerda Telemedicina — davidlacerda.com.br</p>
  </div>
  <div style="background:#f3f4f5;padding:24px;border-radius:0 0 12px 12px;">
    <p>Olá, <strong>${name}</strong>!</p>
    <p>Recebemos sua mensagem sobre <strong>${subjectLabels[subject] ?? subject}</strong> e retornaremos em até <strong>1 dia útil</strong>.</p>
    <p>Enquanto isso, você pode:</p>
    <ul>
      <li>Agendar diretamente em <a href="https://davidlacerda.com.br/agendar" style="color:#6b538d;">davidlacerda.com.br/agendar</a></li>
      <li>Ler nossos artigos em <a href="https://davidlacerda.com.br/blog" style="color:#6b538d;">davidlacerda.com.br/blog</a></li>
    </ul>
    <p style="font-style:italic;color:#4a454e;">
      "O Senhor te abençoe e te guarde." — Números 6:24
    </p>
  </div>
  <p style="text-align:center;color:#7c757e;font-size:12px;margin-top:16px;">
    David Lacerda Telemedicina · davidlacerda.com.br · ${new Date().getFullYear()}
  </p>
</body>
</html>
  `.trim();

  try {
    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "David Lacerda Telemedicina <contato@davidlacerda.com.br>",
          to: [TO_EMAIL],
          reply_to: email,
          subject: `[Contato] ${subjectLabels[subject] ?? subject} — ${name}`,
          html: emailHtml,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "David Lacerda Telemedicina <contato@davidlacerda.com.br>",
          to: [email],
          subject: "Recebemos sua mensagem — David Lacerda Telemedicina",
          html: confirmHtml,
        }),
      }),
    ]);

    return NextResponse.json({ message: "Mensagem enviada com sucesso" }, { status: 200 });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ message: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
