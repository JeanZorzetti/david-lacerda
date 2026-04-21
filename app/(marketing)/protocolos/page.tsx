import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Protocolos Clínicos",
  description:
    "Conheça os 5 protocolos da David Lacerda Telemedicina: Telemedicina 24/7, NR-1 Saúde Mental Corporativa, Emagrecimento Clínico com Tirzepatida, Acompanhamento TEA e Entrevista Qualificada.",
  path: "/protocolos",
});

const protocolos = [
  {
    numero: "01",
    titulo: "Telemedicina Pro Life",
    subtitulo: "Consultas ilimitadas · 24h/7 dias",
    descricao:
      "Acesso contínuo a consultas médicas online com mais de 32 especialidades, via videochamada, 24 horas por dia, 7 dias por semana — incluindo fins de semana e feriados. Atendimento por fila de pronto-atendimento (PA) com tempo médio de espera de até 15 minutos, ou agendado para especialistas e multiprofissionais.",
    detalhes: [
      "Consultas ilimitadas com clínicos gerais no PA 24h",
      "Mais de 32 especialidades disponíveis para agendamento",
      "Emissão de receitas digitais com assinatura ICP-Brasil (medicamentos comuns, antibióticos e controlados)",
      "Atestados e declarações médicas com validade legal",
      "Encaminhamentos para especialistas e exames",
      "Prontuário eletrônico com histórico completo",
      "App próprio para agendamento e acesso às consultas",
    ],
    sla: [
      { label: "Tempo de espera no PA 24h", valor: "Até 15 minutos" },
      { label: "Uptime da plataforma", valor: "99,5% mensal" },
      { label: "Envio de receita digital", valor: "Até 2h após consulta" },
      { label: "Cancelamento de consulta", valor: "Mínimo 48h de antecedência" },
    ],
    icon: "video_call",
    publico: "Pessoas físicas, famílias e empresas",
  },
  {
    numero: "02",
    titulo: "Programa NR-1 Pro Life",
    subtitulo: "Saúde Mental Corporativa · Conformidade Legal",
    descricao:
      "Programa estruturado para garantir conformidade legal com a NR-1 do MTE — que exige das empresas medidas de prevenção a riscos psicossociais no trabalho. Atendimento psicológico, clínico e psiquiátrico via telemedicina, com relatório mensal de conformidade anonimizado.",
    detalhes: [
      "Pacote 1 — Suporte Psicossocial Inicial: Clínico Geral + Psicólogo (2 ou 4 sessões/mês)",
      "Pacote 2 — Suporte Especializado: Psiquiatra + Psicólogo (2 ou 4 sessões/mês)",
      "Triagem por psicólogo para encaminhamento correto (Pacote 1 ou 2)",
      "Plataforma exclusiva da empresa com link para o colaborador agendar de forma autônoma",
      "Relatório mensal NR-1 anonimizado (LGPD) com CIDs e indicadores de utilização",
      "Documentação para comprovação em fiscalizações do MTE",
      "Implantação gratuita, sem taxa de setup",
    ],
    sla: [
      { label: "Disponibilidade de agendamento", valor: "Até 48h úteis" },
      { label: "Encaminhamento para psiquiatria", valor: "Até 7 dias após triagem" },
      { label: "Relatório mensal NR-1", valor: "Até o 5º dia útil do mês" },
      { label: "Resposta de suporte ao RH", valor: "Até 1 dia útil" },
    ],
    icon: "psychology",
    publico: "Empresas de qualquer porte · RH e Gestão de Pessoas",
  },
  {
    numero: "03",
    titulo: "Programa Mounjaro Pro Life",
    subtitulo: "Emagrecimento Clínico · Tirzepatida · Multidisciplinar",
    descricao:
      "Tratamento médico estruturado para emagrecimento sustentável com Tirzepatida (Mounjaro), com acompanhamento multidisciplinar completo: médico, nutricional e psicológico. Foco na mudança real de comportamento alimentar e prevenção do efeito rebote.",
    detalhes: [
      "Consulta inicial com Clínico Geral para avaliação e definição de dosagem",
      "Emissão de receita médica digital com validade legal",
      "Acompanhamento nutricional para reeducação alimentar e controle metabólico",
      "Acompanhamento psicológico focado em comportamento alimentar e saúde emocional",
      "Ajuste de dosagem e renovação de receita nas consultas de acompanhamento",
      "Gestão de efeitos adversos e suporte clínico durante todo o tratamento",
      "O valor do medicamento (Tirzepatida) não está incluso — adquirido separadamente pelo paciente",
    ],
    sla: [
      { label: "Consulta inicial após cadastro", valor: "Até 48h" },
      { label: "Emissão de receita", valor: "Até 2h após consulta" },
      { label: "Agendamento nutricional", valor: "Até 7 dias" },
      { label: "Renovação de receita", valor: "Até 24h após solicitação" },
    ],
    icon: "monitor_weight",
    publico: "Pacientes com sobrepeso ou obesidade com indicação clínica",
  },
  {
    numero: "04",
    titulo: "Projeto TEA Pro Life",
    subtitulo: "Transtorno do Espectro Autista · Acompanhamento Multidisciplinar",
    descricao:
      "Avaliação, diagnóstico e acompanhamento multidisciplinar estruturado para crianças com suspeita ou diagnóstico de TEA, combinando Psiquiatria Pediátrica, Neuropediatria, Psicologia, Fonoaudiologia e Fisioterapia — 100% digital, com os mesmos especialistas em cada sessão.",
    detalhes: [
      "Plano Mensal (manutenção): 5 atendimentos/mês — 1 Clínico + 1 Psiquiatra/Neuropediatra + 1 Psicologia + 1 Fono + 1 Fisio",
      "Plano Quinzenal (intermediário): 8 atendimentos/mês — equipe completa com sessões duplicadas",
      "Plano Semanal (intensivo): 14 atendimentos/mês — indicado para diagnóstico recente",
      "Continuidade garantida com os mesmos especialistas em 100% dos casos",
      "Relatório mensal de evolução enviado à família",
      "Prontuário eletrônico com histórico completo do desenvolvimento",
      "Contratos de 2, 4 ou 6 meses com renovação automática",
    ],
    sla: [
      { label: "Avaliação inicial após cadastro", valor: "Até 48h" },
      { label: "Disponibilidade de sessões", valor: "Até 7 dias úteis" },
      { label: "Relatório mensal de evolução", valor: "Até o 5º dia útil" },
      { label: "Suporte à família", valor: "Resposta em até 24h úteis" },
    ],
    icon: "child_care",
    publico: "Crianças com TEA · Famílias · Empresas com dependentes",
  },
  {
    numero: "05",
    titulo: "Entrevista Qualificada Pro Life",
    subtitulo: "Triagem Clínica · Declaração de Saúde · Controle de Sinistralidade",
    descricao:
      "Realização da Entrevista Qualificada Gravada de beneficiários de planos de saúde, com finalidade de declaração de saúde. Garante segurança jurídica para a operadora, análise de risco assistencial e conformidade com normas ANS — conduzida por Médico CRM ou Técnico de Enfermagem COREN.",
    detalhes: [
      "Contato ativo da equipe Pro Life para agendamento de cada beneficiário",
      "Entrevista por Médico CRM (Modalidade Padrão) ou Técnico de Enfermagem COREN (Modalidade Técnico)",
      "Gravação obrigatória da entrevista para fins probatórios e de auditoria",
      "Retificação formal em caso de resposta positiva (CID, nome da doença, data do diagnóstico)",
      "Envio do documento de retificação ao beneficiário para assinatura",
      "Dossiê completo encaminhado à operadora para análise técnica (CPT ou carência)",
      "Relatório de produção por data de corte",
    ],
    sla: [
      { label: "Primeiro contato após inclusão", valor: "Até 2 dias úteis" },
      { label: "Realização da entrevista", valor: "Até 5 dias após agendamento" },
      { label: "Envio do documento de retificação", valor: "Até 24h após entrevista" },
      { label: "Relatório de produção", valor: "Até o 3º dia útil após corte" },
    ],
    icon: "assignment_ind",
    publico: "Operadoras de saúde · Corretoras · Empresas com planos coletivos",
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
      "Dados pessoais e de saúde são tratados conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018). Coletamos apenas o necessário, com base legal definida e direitos de acesso, retificação e exclusão garantidos ao paciente.",
  },
  {
    icon: "verified",
    title: "Assinatura Digital ICP-Brasil",
    description:
      "Receitas e documentos médicos possuem assinatura eletrônica qualificada ICP-Brasil, conforme Lei 14.510/2022, RDC ANVISA 471/2021 e Resolução CFM 2.314/2022. Validade jurídica plena em todo o território nacional.",
  },
];

const resolucoescfm = [
  {
    codigo: "CFM 2.314/2022",
    descricao:
      "Regulamenta o exercício da medicina por telemedicina no Brasil. Define condições, deveres e responsabilidades do médico no atendimento remoto.",
  },
  {
    codigo: "Lei 14.510/2022",
    descricao:
      "Autoriza e disciplina a prática da telemedicina em todo o território nacional, assegurando ao paciente o direito ao atendimento médico à distância.",
  },
  {
    codigo: "RDC ANVISA 471/2021",
    descricao:
      "Dispõe sobre a prescrição e dispensação de medicamentos por meio de prescrição eletrônica, incluindo assinatura digital e receitas emitidas em telemedicina.",
  },
  {
    codigo: "LGPD — Lei 13.709/2018",
    descricao:
      "Lei Geral de Proteção de Dados. Dados sensíveis de saúde recebem tratamento especial, com base legal, minimização e segurança reforçada.",
  },
  {
    codigo: "NR-1 (MTE) — 2025",
    descricao:
      "Norma Regulamentadora que exige das empresas medidas de prevenção a riscos psicossociais no trabalho. Vigência plena a partir de 2025.",
  },
  {
    codigo: "Res. CFM 1.974/2011",
    descricao:
      "Dispõe sobre publicidade médica. Todo o conteúdo do site cumpre as normas de vedação a promessas de cura, antes/depois e depoimentos com garantias.",
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
    name: "Protocolos Clínicos — David Lacerda Telemedicina",
    description: "5 protocolos clínicos da David Lacerda Telemedicina: Telemedicina, NR-1, Mounjaro, TEA e Entrevista Qualificada.",
    url: `${siteConfig.url}/protocolos`,
    author: { "@type": "Organization", name: "David Lacerda Telemedicina" },
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
            Nossos Protocolos Clínicos
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] max-w-2xl mb-8">
            5 protocolos estruturados — telemedicina, saúde mental corporativa, emagrecimento clínico, acompanhamento TEA e triagem qualificada. Cada um com fluxo definido, SLA publicado e conformidade regulatória.
          </p>
          <div className="flex flex-wrap gap-3">
            {["CFM 2.314/2022", "Lei 14.510/2022", "LGPD", "ICP-Brasil", "NR-1 Compliant"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#28113e] text-[#aa8ec4] text-xs font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">verified</span>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Os 5 Protocolos */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Portfólio</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              5 protocolos. 1 missão.
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Cada protocolo tem escopo, público-alvo, entregáveis e níveis de serviço definidos.
            </p>
          </div>
          <div className="space-y-4">
            {protocolos.map((p) => (
              <details key={p.numero} className="group bg-white rounded-2xl overflow-hidden">
                <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="text-xs font-bold text-[#aa8ec4] tracking-widest w-8 shrink-0">{p.numero}</span>
                  <div className="w-10 h-10 rounded-full bg-[#eddcff] text-[#523b74] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{p.icon}</span>
                  </div>
                  <div className="flex-1 pr-4">
                    <span className="font-semibold text-[#28113e] block" style={{ fontFamily: "var(--font-headline)" }}>{p.titulo}</span>
                    <span className="text-xs text-[#6b538d]">{p.subtitulo}</span>
                  </div>
                  <span className="material-symbols-outlined text-[#6b538d] shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">expand_more</span>
                </summary>
                <div className="px-6 pb-8 pl-24 space-y-6">
                  <div>
                    <p className="text-[#4a454e] leading-relaxed">{p.descricao}</p>
                    <p className="text-xs text-[#6b538d] font-semibold uppercase tracking-wider mt-3">Público-alvo: {p.publico}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>O que está incluso</h4>
                      <ul className="space-y-2">
                        {p.detalhes.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#4a454e]">
                            <span className="material-symbols-outlined text-sm text-[#6b538d] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>SLA — Níveis de Serviço</h4>
                      <div className="space-y-2">
                        {p.sla.map((s) => (
                          <div key={s.label} className="flex items-center justify-between bg-[#f3f4f5] rounded-xl px-4 py-2.5">
                            <span className="text-xs text-[#4a454e]">{s.label}</span>
                            <span className="text-xs font-bold text-[#28113e] ml-4 text-right">{s.valor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

      {/* Compliance regulatório */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Regulamentação</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Conformidade Regulatória
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Operamos dentro do marco regulatório vigente no Brasil, seguindo todas as resoluções e legislações aplicáveis à telemedicina e saúde digital.
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

      {/* Compromisso */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-[1.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">favorite</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                Nosso Compromisso Ético
              </h2>
              <blockquote className="text-[#d9bdff] text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto mb-6">
                &ldquo;Cuidar com excelência técnica é um dever. Fazê-lo com compaixão, respeito e integridade é o que diferencia o David Lacerda Telemedicina. Esses dois compromissos caminham juntos em cada consulta.&rdquo;
              </blockquote>
              <p className="text-[#aa8ec4] text-sm">— David Lacerda, Fundador</p>
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
            <Link href="/empresas" className="border border-[#28113e]/30 text-[#28113e] px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-[#e7e8e9] transition-colors">
              Soluções Corporativas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
