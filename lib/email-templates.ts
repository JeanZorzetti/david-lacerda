import { siteConfig } from "./seo";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidlacerda.com.br";

const brand = {
  primary: "#28113e",
  accent: "#6b538d",
  light: "#aa8ec4",
  bg: "#f3f4f5",
  text: "#4a454e",
};

function layout(content: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>David Lacerda Telemedicina</title>
</head>
<body style="margin:0;padding:0;background:#f8f9fa;font-family:sans-serif;color:${brand.text};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr>
          <td style="background:${brand.primary};padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <p style="margin:0;color:${brand.light};font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">David Lacerda Telemedicina</p>
            <p style="margin:4px 0 0;color:#fff;font-size:11px;">Telemedicina com Propósito</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#fff;padding:32px;border-radius:0 0 12px 12px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 0;text-align:center;">
            <p style="margin:0;font-size:11px;color:#7c757e;">
              © ${new Date().getFullYear()} ${siteConfig.name} — David Lacerda Telemedicina<br />
              Telemedicina regulamentada pelo CFM · Res. 2.314/2022<br />
              <a href="${BASE}/privacidade" style="color:${brand.accent};">Política de Privacidade</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Confirmação de agendamento (para o paciente) ─────────────────────────────

export interface ConfirmacaoAgendamentoParams {
  nome: string;
  email: string;
  especialidade: string;
  loginUrl: string;
  expiresHours: number;
}

export function emailConfirmacaoAgendamento(p: ConfirmacaoAgendamentoParams): string {
  const body = `
    <h1 style="margin:0 0 8px;color:${brand.primary};font-size:22px;font-weight:800;">
      Seu acesso está pronto! 🎉
    </h1>
    <p style="margin:0 0 24px;color:${brand.text};">
      Olá, <strong>${p.nome}</strong>! Recebemos sua solicitação de consulta de
      <strong>${p.especialidade}</strong>. Seu link de acesso ao portal de consulta está pronto.
    </p>

    <!-- CTA principal -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
      <tr>
        <td align="center" style="background:${brand.bg};border-radius:12px;padding:24px;">
          <p style="margin:0 0 16px;font-size:14px;color:${brand.text};">
            Clique no botão abaixo para entrar no portal de telemedicina — sem precisar de senha:
          </p>
          <a href="${p.loginUrl}"
             style="display:inline-block;background:${brand.primary};color:#fff;padding:14px 32px;border-radius:9999px;font-weight:700;text-decoration:none;font-size:15px;letter-spacing:0.05em;text-transform:uppercase;">
            Acessar Minha Consulta
          </a>
          <p style="margin:16px 0 0;font-size:12px;color:#7c757e;">
            Link válido por ${p.expiresHours} horas. Após expirar, solicite um novo em
            <a href="${BASE}/paciente" style="color:${brand.accent};">${BASE}/paciente</a>
          </p>
        </td>
      </tr>
    </table>

    <!-- Instruções pré-consulta -->
    <h2 style="margin:0 0 12px;color:${brand.primary};font-size:16px;font-weight:700;">
      Antes da sua consulta
    </h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${[
        ["wifi", "Conexão estável", "Use Wi-Fi ou 4G. Evite locais com sinal fraco."],
        ["volume_up", "Ambiente tranquilo", "Escolha um local silencioso e privativo."],
        ["videocam", "Câmera e microfone", "Teste antes da consulta. Ative as permissões no navegador."],
        ["description", "Exames e documentos", "Tenha em mãos exames recentes e lista de medicamentos em uso."],
      ]
        .map(
          ([, label, desc]) => `
        <tr>
          <td style="padding:8px 0;vertical-align:top;">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="width:28px;vertical-align:top;padding-top:2px;">
                <div style="width:20px;height:20px;background:${brand.primary};border-radius:50%;"></div>
              </td>
              <td style="padding-left:10px;">
                <strong style="color:${brand.primary};font-size:13px;">${label}</strong>
                <br/><span style="font-size:12px;color:${brand.text};">${desc}</span>
              </td>
            </tr></table>
          </td>
        </tr>`
        )
        .join("")}
    </table>

    <!-- Cancelamento -->
    <div style="border-left:3px solid ${brand.accent};padding:12px 16px;background:${brand.bg};border-radius:0 8px 8px 0;margin-bottom:24px;">
      <p style="margin:0;font-size:12px;color:${brand.text};">
        <strong>Cancelamento:</strong> Para cancelar ou reagendar, entre em contato com até
        24 horas de antecedência pelo e-mail
        <a href="mailto:contato@davidlacerda.com.br" style="color:${brand.accent};">contato@davidlacerda.com.br</a>
        ou WhatsApp.
      </p>
    </div>

    <!-- Versículo -->
    <p style="margin:0;font-style:italic;color:${brand.accent};font-size:13px;text-align:center;border-top:1px solid #e7e8e9;padding-top:20px;">
      "O Senhor te abençoe e te guarde." — Números 6:24
    </p>
  `;
  return layout(body);
}

// ─── Notificação interna (para o Dr. David) ───────────────────────────────────

export interface NotificacaoInternaParams {
  nome: string;
  email: string;
  telefone?: string;
  cpf: string;
  dataNascimento: string;
  genero: string;
  especialidade: string;
  mensagem?: string;
  meditelePatientId: string;
}

export function emailNotificacaoInterna(p: NotificacaoInternaParams): string {
  const generoLabel: Record<string, string> = {
    male: "Masculino",
    female: "Feminino",
    other: "Outro/Não informado",
  };

  const rows = [
    ["Nome", p.nome],
    ["E-mail", p.email],
    ["Telefone", p.telefone ?? "—"],
    ["CPF", p.cpf],
    ["Data de nascimento", p.dataNascimento],
    ["Gênero", generoLabel[p.genero] ?? p.genero],
    ["Especialidade solicitada", p.especialidade],
    ["ID Paciente", p.meditelePatientId],
  ];

  const body = `
    <h1 style="margin:0 0 4px;color:${brand.primary};font-size:20px;font-weight:800;">
      Novo agendamento recebido
    </h1>
    <p style="margin:0 0 24px;font-size:13px;color:#7c757e;">
      ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;background:${brand.bg};font-weight:600;font-size:13px;color:${brand.primary};width:40%;border-bottom:1px solid #e7e8e9;">
            ${label}
          </td>
          <td style="padding:10px 12px;font-size:13px;color:${brand.text};border-bottom:1px solid #e7e8e9;">
            ${value}
          </td>
        </tr>`
        )
        .join("")}
    </table>

    ${
      p.mensagem
        ? `<div style="background:${brand.bg};border-radius:8px;padding:16px;margin-bottom:24px;">
        <p style="margin:0 0 6px;font-weight:700;font-size:13px;color:${brand.primary};">Mensagem do paciente:</p>
        <p style="margin:0;font-size:13px;color:${brand.text};white-space:pre-wrap;">${p.mensagem.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      </div>`
        : ""
    }

    <a href="${BASE}/paciente"
       style="display:inline-block;background:${brand.primary};color:#fff;padding:12px 24px;border-radius:9999px;font-weight:700;text-decoration:none;font-size:13px;">
      Acessar Portal de Consulta
    </a>
  `;
  return layout(body);
}

// ─── Acesso do paciente (re-login) ────────────────────────────────────────────

export interface AcessoPacienteParams {
  nome: string;
  loginUrl: string;
  expiresHours: number;
}

export function emailAcessoPaciente(p: AcessoPacienteParams): string {
  const body = `
    <h1 style="margin:0 0 8px;color:${brand.primary};font-size:22px;font-weight:800;">
      Seu link de acesso chegou
    </h1>
    <p style="margin:0 0 24px;color:${brand.text};">
      Olá, <strong>${p.nome}</strong>! Aqui está seu link de acesso ao portal de telemedicina.
      Não precisa de senha — clique e acesse diretamente.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
      <tr>
        <td align="center" style="background:${brand.bg};border-radius:12px;padding:24px;">
          <a href="${p.loginUrl}"
             style="display:inline-block;background:${brand.primary};color:#fff;padding:14px 32px;border-radius:9999px;font-weight:700;text-decoration:none;font-size:15px;text-transform:uppercase;">
            Entrar no Portal
          </a>
          <p style="margin:16px 0 0;font-size:12px;color:#7c757e;">
            Link válido por ${p.expiresHours} horas. Para um novo link, acesse
            <a href="${BASE}/paciente" style="color:${brand.accent};">${BASE}/paciente</a>
          </p>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:13px;color:${brand.text};">
      Se você não solicitou este link, ignore este e-mail. Nenhuma ação é necessária.
    </p>
  `;
  return layout(body);
}
