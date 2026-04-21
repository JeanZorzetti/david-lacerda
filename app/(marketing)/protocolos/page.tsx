import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Protocolos Clínicos",
  description:
    "Conheça os protocolos de atendimento, segurança e compliance do Santuário Clínico. Regulamentado pelo CFM, com criptografia ponta a ponta e conformidade LGPD.",
  path: "/protocolos",
});

const protocolosAtendimento = [
  {
    titulo: "Triagem e Elegibilidade",
    descricao:
      "Antes de cada consulta, o paciente é orientado sobre os casos adequados para telemedicina. Situações de emergência ou que exijam exame físico obrigatório são redirecionadas para atendimento presencial ou SAMU (192). A triagem protege o paciente e garante a qualidade do atendimento.",
    icon: "filter_alt",
  },
  {
    titulo: "Protocolo de Consulta",
    descricao:
      "Todas as consultas seguem estrutura padronizada: identificação do paciente, anamnese, avaliação clínica por videochamada, orientação terapêutica e documentação no prontuário eletrônico. Duração mínima conforme tipo: clínica geral (30 min), saúde mental (50 min).",
    icon: "assignment",
  },
  {
    titulo: "Emissão de Receitas e Documentos",
    descricao:
      "Receitas são emitidas com assinatura eletrônica qualificada (ICP-Brasil), conforme Lei 13.787/2018 e Resolução CFF 677/2020. Medicamentos controlados seguem regulação específica da Anvisa. Atestados e encaminhamentos são emitidos quando clinicamente indicados, nunca por conveniência.",
    icon: "description",
  },
  {
    titulo: "Protocolo de Emergência",
    descricao:
      "Caso o médico identifique risco à vida durante a consulta, o protocolo de emergência é ativado: orientação imediata ao paciente para ligar 192 (SAMU), comunicação com familiar se possível, e registro do incidente no prontuário. O médico permanece em linha até confirmação de ajuda externa.",
    icon: "emergency",
  },
  {
    titulo: "Reagendamento e Cancelamento",
    descricao:
      "Cancelamentos devem ser feitos com no mínimo 24 horas de antecedência. Reagendamento é gratuito nos planos mensais e família. Consultas avulsas canceladas com menos de 2 horas de antecedência não são reembolsadas, exceto por comprovação de força maior.",
    icon: "event_busy",
  },
  {
    titulo: "Continuidade do Cuidado",
    descricao:
      "O histórico de consultas, diagnósticos e prescrições fica registrado no prontuário eletrônico do paciente. Médicos de retorno têm acesso ao histórico completo, garantindo continuidade e evitando duplicidade de procedimentos.",
    icon: "history",
  },
];

const seguranca = [
  {
    icon: "lock",
    title: "Criptografia AES-256",
    description:
      "Todas as videoconsultas são criptografadas com padrão AES-256, o mesmo utilizado por bancos e governos. Nenhum dado de consulta trafega sem proteção em nenhum trecho da comunicação.",
  },
  {
    icon: "security",
    title: "Conformidade LGPD",
    description:
      "Dados pessoais e de saúde são tratados conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018). Coletamos apenas o necessário, com base legal definida e direito de acesso, retificação e exclusão garantidos ao paciente.",
  },
  {
    icon: "verified",
    title: "Assinatura Digital ICP-Brasil",
    description:
      "Receitas e documentos médicos possuem assinatura eletrônica qualificada ICP-Brasil, com validade jurídica plena em todo o território nacional. Farmácias e empregadores aceitam esses documentos como equivalentes ao papel.",
  },
];

const resolucoescfm = [
  {
    codigo: "CFM 2.314/2022",
    descricao:
      "Regulamenta o exercício da medicina por telemedicina no Brasil. Define condições, deveres e responsabilidades do médico no atendimento remoto.",
  },
  {
    codigo: "CFM 1.974/2011",
    descricao:
      "Dispõe sobre publicidade médica. Todo o conteúdo do site cumpre as normas de vedação a promessas de cura, antes/depois e depoimentos com garantias.",
  },
  {
    codigo: "Lei 13.787/2018",
    descricao:
      "Dispõe sobre a digitalização e a utilização de sistemas informatizados para guarda e manuseio de prontuário de pacientes.",
  },
  {
    codigo: "LGPD — Lei 13.709/2018",
    descricao:
      "Lei Geral de Proteção de Dados. Dados sensíveis de saúde recebem tratamento especial, com base legal, minimização e segurança reforçada.",
  },
];

export default function ProtocolosPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Protocolos", url: `${siteConfig.url}/protocolos` },
  ]);

  const jsonLdMedical = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Protocolos Clínicos — Santuário Clínico",
    description: "Protocolos de atendimento, segurança e compliance do Santuário Clínico.",
    url: `${siteConfig.url}/protocolos`,
    author: { "@type": "Organization", name: "Santuário Clínico" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMedical) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Protocolos</span></li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
            Transparência Clínica
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Protocolos Clínicos e de Segurança
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] max-w-2xl mb-8">
            Transparência é parte do cuidado. Aqui você encontra como operamos, quais resoluções seguimos
            e como seus dados e sua consulta são protegidos em cada etapa.
          </p>
          <div className="flex flex-wrap gap-3">
            {["CFM 2.314/2022", "LGPD Compliant", "ICP-Brasil", "CRM Verificado"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#28113e] text-[#aa8ec4] text-xs font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">verified</span>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Protocolos de Atendimento */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Atendimento</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Protocolos de Atendimento
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Cada consulta segue procedimentos definidos para garantir segurança, qualidade e conformidade regulatória.
            </p>
          </div>
          <div className="space-y-4">
            {protocolosAtendimento.map((p, i) => (
              <details key={i} className="group bg-white rounded-2xl overflow-hidden">
                <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer list-none">
                  <div className="w-10 h-10 rounded-full bg-[#eddcff] text-[#523b74] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{p.icon}</span>
                  </div>
                  <span className="font-semibold text-[#28113e] flex-1 pr-4" style={{ fontFamily: "var(--font-headline)" }}>{p.titulo}</span>
                  <span className="material-symbols-outlined text-[#6b538d] shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">expand_more</span>
                </summary>
                <div className="px-6 pb-6 pl-20">
                  <p className="text-[#4a454e] leading-relaxed">{p.descricao}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança e Privacidade */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Segurança</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Segurança e Privacidade dos Dados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seguranca.map((s) => (
              <div key={s.title} className="bg-[#f3f4f5] rounded-[1.5rem] p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{s.icon}</span>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{s.title}</h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance CFM */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Regulamentação</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Conformidade Regulatória
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Operamos dentro do marco regulatório vigente no Brasil, seguindo as principais resoluções e legislações aplicáveis à telemedicina.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resolucoescfm.map((r) => (
              <div key={r.codigo} className="bg-white rounded-2xl p-6 flex gap-4">
                <div className="shrink-0">
                  <span className="inline-block py-0.5 px-2.5 rounded-full bg-[#28113e] text-[#aa8ec4] text-xs font-bold whitespace-nowrap">
                    {r.codigo}
                  </span>
                </div>
                <p className="text-sm text-[#4a454e] leading-relaxed">{r.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Código de Ética */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-[1.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==\")" }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">favorite</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                Nosso Compromisso Ético
              </h2>
              <blockquote className="text-[#d9bdff] text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto mb-6">
                &ldquo;Cuidar com excelência técnica é um dever. Fazê-lo com compaixão, respeito e integridade é um chamado. No Santuário Clínico, esses dois compromissos caminham juntos em cada consulta.&rdquo;
              </blockquote>
              <p className="text-[#aa8ec4] text-sm">— David Lacerda, Pastor & Fundador</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#f3f4f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
            Dúvidas sobre nossos protocolos?
          </h2>
          <p className="text-[#4a454e] mb-8">Nossa equipe responde em até 1 dia útil.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="bg-[#28113e] text-white px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors">
              Falar com Equipe
            </Link>
            <Link href="/privacidade" className="border border-[#28113e]/30 text-[#28113e] px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-[#e7e8e9] transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
