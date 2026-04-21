import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como o Santuário Clínico coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
  path: "/privacidade",
  noIndex: true,
});

const sections = [
  { id: "introducao", label: "Introdução" },
  { id: "dados-coletados", label: "Dados Coletados" },
  { id: "finalidade", label: "Finalidade do Tratamento" },
  { id: "base-legal", label: "Base Legal" },
  { id: "compartilhamento", label: "Compartilhamento" },
  { id: "retencao", label: "Retenção e Exclusão" },
  { id: "direitos", label: "Seus Direitos" },
  { id: "seguranca", label: "Segurança" },
  { id: "cookies", label: "Cookies" },
  { id: "contato-dpo", label: "Contato / DPO" },
];

export default function PrivacidadePage() {
  return (
    <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 items-start">
      {/* TOC */}
      <nav
        aria-label="Índice da Política de Privacidade"
        className="hidden lg:block lg:sticky lg:top-24 bg-[#f3f4f5] rounded-xl p-5"
      >
        <p className="text-xs font-bold text-[#28113e] uppercase tracking-widest mb-3">Seções</p>
        <ol className="space-y-1.5">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-[#4a454e] hover:text-[#6b538d] transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="prose-sm max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#7c757e]">
            Versão 1.0 — Última atualização: 20 de abril de 2026
          </p>
        </div>

        <section id="introducao" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            1. Introdução
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            O <strong>Santuário Clínico</strong> (doravante "nós", "nosso" ou "Plataforma"), fundado por David Lacerda,
            está comprometido com a proteção da privacidade e dos dados pessoais de seus
            usuários, em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais
            (LGPD — Lei nº 13.709/2018)</strong> e demais normativas aplicáveis.
          </p>
          <p className="text-[#191c1d] leading-relaxed">
            Esta Política descreve quais dados coletamos, como os utilizamos, com quem os compartilhamos e quais
            são seus direitos como titular de dados. Ao utilizar nossos serviços, você declara ter lido e
            compreendido este documento.
          </p>
        </section>

        <section id="dados-coletados" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            2. Dados Coletados
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">Coletamos as seguintes categorias de dados:</p>
          <div className="space-y-4">
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-[#28113e] text-sm mb-1">Dados de identificação</p>
              <p className="text-sm text-[#4a454e]">Nome completo, CPF, data de nascimento, sexo biológico, telefone, e-mail.</p>
            </div>
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-[#28113e] text-sm mb-1">Dados de saúde (dados sensíveis)</p>
              <p className="text-sm text-[#4a454e]">Informações de saúde fornecidas durante o agendamento e especialidade solicitada. Diagnósticos, prescrições e atestados são gerados pelo médico parceiro na plataforma de atendimento.</p>
            </div>
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-[#28113e] text-sm mb-1">Dados de uso e navegação</p>
              <p className="text-sm text-[#4a454e]">Endereço IP, tipo de dispositivo, navegador, páginas visitadas, tempo de sessão — coletados via cookies analíticos (apenas com consentimento).</p>
            </div>
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-[#28113e] text-sm mb-1">Dados de comunicação</p>
              <p className="text-sm text-[#4a454e]">Mensagens enviadas pelo formulário de contato ou WhatsApp, incluindo assunto e conteúdo da comunicação.</p>
            </div>
          </div>
        </section>

        <section id="finalidade" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            3. Finalidade do Tratamento
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">Seus dados são utilizados para:</p>
          <ul className="list-disc list-inside space-y-2 text-[#191c1d] text-sm">
            <li>Facilitar o acesso a consultas médicas de telemedicina com médicos parceiros credenciados</li>
            <li>Criação e gestão de cadastro no portal de atendimento</li>
            <li>Envio de link de acesso à plataforma de atendimento</li>
            <li>Comunicação sobre agendamentos, confirmações e lembretes</li>
            <li>Emissão de receitas digitais, atestados e pedidos de exame</li>
            <li>Manutenção do prontuário eletrônico, conforme obrigação legal (CFM)</li>
            <li>Resposta a contatos e dúvidas enviados pelo formulário</li>
            <li>Melhoria da experiência no site (analytics, com consentimento)</li>
          </ul>
        </section>

        <section id="base-legal" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            4. Base Legal para o Tratamento
          </h2>
          <div className="space-y-3">
            {[
              { base: "Art. 11, II, f — Tutela da saúde", uso: "Tratamento de dados sensíveis de saúde para facilitar o acesso a consultas médicas." },
              { base: "Art. 7º, II — Cumprimento de obrigação legal", uso: "Manutenção de prontuário eletrônico conforme Resolução CFM 1.821/2007." },
              { base: "Art. 7º, V — Execução de contrato", uso: "Realização da consulta agendada pelo paciente." },
              { base: "Art. 7º, I — Consentimento", uso: "Cookies analíticos e marketing (opcional, revogável a qualquer momento)." },
            ].map((item) => (
              <div key={item.base} className="border border-[#e7e8e9] rounded-xl p-4">
                <p className="font-semibold text-sm text-[#28113e] mb-1">{item.base}</p>
                <p className="text-sm text-[#4a454e]">{item.uso}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="compartilhamento" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            5. Compartilhamento de Dados
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            Seus dados são compartilhados <strong>apenas</strong> com os seguintes parceiros essenciais à prestação do serviço:
          </p>
          <div className="space-y-3">
            {[
              { nome: "Plataforma de telemedicina parceira", motivo: "Criação de cadastro, geração de link de acesso e realização da videoconsulta.", politica: null },
              { nome: "Resend (serviço de e-mail transacional)", motivo: "Envio de confirmações de agendamento e links de acesso.", politica: "resend.com" },
              { nome: "Vercel Analytics (analytics de navegação)", motivo: "Métricas anonimizadas de uso do site (apenas com consentimento).", politica: "vercel.com/analytics" },
            ].map((p) => (
              <div key={p.nome} className="bg-[#f3f4f5] rounded-xl p-4">
                <p className="font-semibold text-sm text-[#28113e] mb-1">{p.nome}</p>
                <p className="text-sm text-[#4a454e]">{p.motivo}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4a454e] mt-4">
            <strong>Não vendemos</strong> seus dados a terceiros e não os compartilhamos para fins de marketing sem seu consentimento explícito.
          </p>
        </section>

        <section id="retencao" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            6. Retenção e Exclusão de Dados
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">Os dados são mantidos pelos seguintes prazos:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d]">
            <li><strong>Prontuário médico:</strong> mínimo de 20 anos, conforme Resolução CFM 1.821/2007</li>
            <li><strong>Dados de contato e agendamento:</strong> 5 anos após o último atendimento</li>
            <li><strong>Cookies analíticos:</strong> conforme configuração do cookie (máximo 13 meses)</li>
            <li><strong>Logs de acesso:</strong> 6 meses, conforme Marco Civil da Internet</li>
          </ul>
          <p className="text-sm text-[#4a454e] mt-4">
            Após o prazo legal, os dados são excluídos ou anonimizados de forma segura e irreversível.
          </p>
        </section>

        <section id="direitos" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            7. Seus Direitos como Titular
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            Nos termos do Art. 18 da LGPD, você tem direito a:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { direito: "Confirmação", desc: "Saber se tratamos seus dados" },
              { direito: "Acesso", desc: "Obter cópia dos dados que temos" },
              { direito: "Correção", desc: "Corrigir dados incompletos ou inexatos" },
              { direito: "Anonimização", desc: "Anonimizar dados desnecessários" },
              { direito: "Portabilidade", desc: "Receber seus dados em formato estruturado" },
              { direito: "Eliminação", desc: "Excluir dados tratados com consentimento" },
              { direito: "Oposição", desc: "Opor-se a tratamento indevido" },
              { direito: "Revogação", desc: "Revogar consentimento a qualquer momento" },
            ].map((d) => (
              <div key={d.direito} className="border border-[#e7e8e9] rounded-lg p-3">
                <p className="font-semibold text-sm text-[#28113e]">{d.direito}</p>
                <p className="text-xs text-[#4a454e]">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4a454e] mt-4">
            Para exercer seus direitos, entre em contato via <a href="/contato" className="text-[#6b538d] underline">formulário de contato</a> ou e-mail:{" "}
            <a href="mailto:privacidade@davidlacerda.com.br" className="text-[#6b538d] underline">privacidade@davidlacerda.com.br</a>.
            Responderemos em até 15 dias úteis.
          </p>
        </section>

        <section id="seguranca" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            8. Segurança dos Dados
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">Adotamos as seguintes medidas técnicas e organizacionais:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d]">
            <li>Transmissão por HTTPS/TLS em todas as comunicações</li>
            <li>Videoconsultas com criptografia de ponta a ponta</li>
            <li>Controle de acesso restrito aos dados de saúde</li>
            <li>Magic links de acesso com expiração (72h para agendamento, 4h para portal)</li>
            <li>Rate limiting nas APIs para prevenção de ataques de força bruta</li>
          </ul>
          <p className="text-sm text-[#4a454e] mt-3">
            Em caso de incidente de segurança que possa afetar seus dados, você será notificado conforme previsto no Art. 48 da LGPD.
          </p>
        </section>

        <section id="cookies" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            9. Cookies
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            Utilizamos cookies para funcionamento do site e, com seu consentimento, para analytics. Consulte nossa{" "}
            <a href="/cookies" className="text-[#6b538d] underline">Política de Cookies</a> para detalhes completos.
            Você pode gerenciar suas preferências a qualquer momento pelo banner de cookies no rodapé do site.
          </p>
        </section>

        <section id="contato-dpo" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            10. Contato e Encarregado de Dados (DPO)
          </h2>
          <div className="bg-[#f3f4f5] rounded-xl p-5">
            <p className="font-semibold text-[#28113e] mb-2">Responsável pelo Tratamento</p>
            <p className="text-sm text-[#4a454e] mb-1">David Lacerda — Fundador, Santuário Clínico</p>
            <p className="text-sm text-[#4a454e] mb-3">
              E-mail: <a href="mailto:privacidade@davidlacerda.com.br" className="text-[#6b538d] underline">privacidade@davidlacerda.com.br</a>
            </p>
            <p className="text-xs text-[#7c757e]">
              Para reclamações junto à autoridade nacional, contate a{" "}
              <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#6b538d] underline">
                ANPD — Autoridade Nacional de Proteção de Dados
              </a>.
            </p>
          </div>
        </section>

        <p className="text-xs text-[#7c757e] border-t border-[#e7e8e9] pt-6 mt-6">
          Esta política pode ser atualizada periodicamente. A data de vigência é indicada no topo do documento.
          Alterações relevantes serão comunicadas por e-mail aos pacientes cadastrados.
        </p>
      </div>
    </div>
  );
}
