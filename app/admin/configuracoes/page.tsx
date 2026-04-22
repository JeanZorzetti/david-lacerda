export default function ConfiguracoesPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
          Configurações
        </h1>
        <p className="text-sm text-[#4a454e] mt-1">Credenciais e integrações do sistema</p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm space-y-4">
        <h2 className="text-base font-bold text-[#28113e]">AsaaS</h2>
        <p className="text-sm text-[#4a454e]">
          Configure o webhook no painel do AsaaS apontando para:
        </p>
        <code className="block bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#28113e] break-all">
          https://davidlacerda.com.br/api/webhooks/asaas
        </code>
        <p className="text-sm text-[#4a454e]">
          O token configurado em <strong>ASAAS_WEBHOOK_TOKEN</strong> deve coincidir com o token informado no painel AsaaS.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm space-y-4">
        <h2 className="text-base font-bold text-[#28113e]">Variáveis de ambiente necessárias</h2>
        <ul className="text-sm text-[#4a454e] space-y-2 font-mono">
          {[
            "DATABASE_URL",
            "ADMIN_EMAIL",
            "ADMIN_PASSWORD_HASH",
            "JWT_SECRET",
            "ASAAS_API_KEY",
            "ASAAS_BASE_URL",
            "ASAAS_WEBHOOK_TOKEN",
            "RESEND_API_KEY",
            "CONTACT_EMAIL",
            "MEDITELE_API_KEY",
            "MEDITELE_CLINIC_ID",
          ].map((v) => (
            <li key={v} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#6b538d]" aria-hidden="true">key</span>
              {v}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm space-y-3">
        <h2 className="text-base font-bold text-[#28113e]">Gerar hash de senha</h2>
        <p className="text-sm text-[#4a454e]">
          Para atualizar a senha do admin, execute localmente:
        </p>
        <code className="block bg-[#f3f4f5] rounded-xl px-4 py-3 text-xs text-[#28113e]">
          npx tsx scripts/hash-password.ts &quot;nova-senha&quot;
        </code>
        <p className="text-sm text-[#4a454e]">
          Copie o hash gerado para a variável <strong>ADMIN_PASSWORD_HASH</strong> no EasyPanel.
        </p>
      </div>
    </div>
  );
}
