import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  empresa: z.string().min(2).max(200),
  nome: z.string().min(2).max(100),
  email: z.string().email(),
  colaboradores: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]),
  honeypot: z.string().max(0),
});

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

  const { empresa, nome, email, colaboradores } = parsed.data;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "contato@davidlacerda.com.br";

  if (!RESEND_API_KEY) {
    console.error("[empresas] RESEND_API_KEY not configured");
    return NextResponse.json({ message: "Serviço de e-mail não configurado" }, { status: 503 });
  }

  const internalHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><title>Nova proposta corporativa</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#191c1d;">
  <div style="background:#28113e;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:20px;">Nova Solicitação — Plano Empresas</h1>
    <p style="color:#aa8ec4;margin:4px 0 0;">David Lacerda Telemedicina — davidlacerda.com.br</p>
  </div>
  <div style="background:#f3f4f5;padding:24px;border-radius:0 0 12px 12px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;font-weight:600;width:140px;color:#28113e;">Empresa</td><td style="padding:8px 0;">${empresa}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#28113e;">Responsável</td><td style="padding:8px 0;">${nome}</td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#28113e;">E-mail</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#6b538d;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;font-weight:600;color:#28113e;">Colaboradores</td><td style="padding:8px 0;">${colaboradores}</td></tr>
    </table>
  </div>
  <p style="text-align:center;color:#7c757e;font-size:12px;margin-top:16px;">
    Solicitação enviada via formulário corporativo do site.
  </p>
</body>
</html>
  `.trim();

  const confirmHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /><title>Proposta solicitada</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#191c1d;">
  <div style="background:#28113e;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
    <h1 style="color:#fff;margin:0;font-size:20px;">Proposta recebida!</h1>
    <p style="color:#aa8ec4;margin:4px 0 0;">David Lacerda Telemedicina — davidlacerda.com.br</p>
  </div>
  <div style="background:#f3f4f5;padding:24px;border-radius:0 0 12px 12px;">
    <p>Olá, <strong>${nome}</strong>!</p>
    <p>Recebemos a solicitação de proposta para <strong>${empresa}</strong> (${colaboradores} colaboradores).</p>
    <p>Nossa equipe entrará em contato em até <strong>1 dia útil</strong> com uma proposta personalizada.</p>
    <p>Enquanto isso, você pode conhecer mais sobre nossos planos em:</p>
    <p style="text-align:center;margin:20px 0;">
      <a href="https://davidlacerda.com.br/planos" style="background:#28113e;color:#fff;padding:12px 24px;border-radius:50px;text-decoration:none;font-weight:600;">Ver Planos</a>
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
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "David Lacerda Telemedicina <contato@davidlacerda.com.br>",
          to: [TO_EMAIL],
          reply_to: email,
          subject: `[Empresas] Proposta — ${empresa} (${colaboradores} colaboradores)`,
          html: internalHtml,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "David Lacerda Telemedicina <contato@davidlacerda.com.br>",
          to: [email],
          subject: "Proposta recebida — David Lacerda Telemedicina Empresas",
          html: confirmHtml,
        }),
      }),
    ]);
    return NextResponse.json({ message: "Proposta enviada com sucesso" }, { status: 200 });
  } catch (err) {
    console.error("[empresas] Resend error:", err);
    return NextResponse.json({ message: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
