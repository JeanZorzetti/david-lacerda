import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Para Pacientes",
  description:
    "Cuidado médico online sem sair de casa. Entenda como funciona a jornada do paciente na David Lacerda Telemedicina — do agendamento à receita digital.",
  path: "/pacientes",
});

const beneficios = [
  {
    icon: "favorite",
    title: "Acolhimento com Propósito",
    description:
      "Mais do que uma consulta médica — uma experiência de cuidado integral que respeita sua história, suas crenças e sua saúde emocional.",
    accent: "#eddcff",
    accentText: "#523b74",
  },
  {
    icon: "verified",
    title: "Especialistas Certificados",
    description:
      "Todos os médicos são registrados no CRM, com especialização reconhecida pelo CFM. Atendimento regulamentado pela Resolução CFM 2.314/2022.",
    accent: "#d9f3e8",
    accentText: "#1a5c3a",
  },
  {
    icon: "home",
    title: "Sem Deslocamento",
    description:
      "Consulte do seu sofá, do trabalho ou de qualquer lugar do Brasil. Tudo que você precisa é um celular ou computador com câmera.",
    accent: "#cce5ff",
    accentText: "#004085",
  },
  {
    icon: "schedule",
    title: "Agendamento Flexível",
    description:
      "Horários disponíveis de segunda a sábado, incluindo manhã e tarde. Confirme em minutos e receba lembrete por e-mail.",
    accent: "#ede59f",
    accentText: "#4d4812",
  },
];

const jornada = [
  {
    step: "01",
    icon: "calendar_month",
    title: "Agende Online",
    description:
      "Escolha a especialidade, selecione data e horário. Preencha seus dados uma única vez — o cadastro fica salvo para futuras consultas.",
  },
  {
    step: "02",
    icon: "credit_card",
    title: "Pagamento Seguro",
    description:
      "PIX, cartão de crédito ou débito. Emissão automática de recibo para reembolso em planos de saúde e declaração de imposto de renda.",
  },
  {
    step: "03",
    icon: "video_call",
    title: "Consulta por Vídeo",
    description:
      "Acesse o link enviado por e-mail. A videoconsulta acontece em plataforma criptografada, com a mesma qualidade de um atendimento presencial.",
  },
  {
    step: "04",
    icon: "description",
    title: "Receita Digital",
    description:
      "Receitas com assinatura eletrônica ICP-Brasil, válidas em qualquer farmácia do Brasil. Atestados e encaminhamentos por e-mail no mesmo dia.",
  },
  {
    step: "05",
    icon: "history",
    title: "Acompanhamento",
    description:
      "Histórico completo de consultas, exames e prescrições acessível pelo portal do paciente. Reagendamento sem custo em caso de imprevisto.",
  },
];

const inclusos = [
  "Consulta com médico especialista credenciado",
  "Receita digital ICP-Brasil (aceita em farmácias de todo o Brasil)",
  "Atestado médico digital com validade jurídica",
  "Encaminhamento para especialistas (quando necessário)",
  "Prontuário eletrônico com histórico de consultas",
  "Orientações pós-consulta por escrito",
  "Reagendamento gratuito em caso de imprevisto",
  "Suporte por e-mail em até 24 horas",
];

const faq = [
  {
    q: "Preciso ter plano de saúde para consultar?",
    a: "Não. Atendemos de forma particular, sem necessidade de plano de saúde. Emitimos recibo detalhado que pode ser usado para reembolso em operadoras que cobrem telemedicina — consulte a sua.",
  },
  {
    q: "Qual é o valor de uma consulta?",
    a: "Os valores variam por especialidade e duração. Clínica geral (30 min): a partir de R$ 180. Saúde mental (50 min): a partir de R$ 250. Consulte a grade completa na página de Planos ou ao agendar.",
  },
  {
    q: "Como faço para pagar?",
    a: "Aceitamos PIX, cartão de crédito (até 3x sem juros) e cartão de débito. O pagamento é feito pela plataforma segura antes da consulta.",
  },
  {
    q: "É minha primeira consulta — o que preciso levar?",
    a: "Tenha em mãos seus documentos (RG, CPF), lista de medicamentos em uso, resultados de exames recentes (se houver) e um ambiente tranquilo com boa iluminação. A câmera e o microfone do dispositivo precisam estar funcionando.",
  },
  {
    q: "A receita realmente funciona na farmácia?",
    a: "Sim. Emitimos receitas digitais com assinatura eletrônica qualificada (ICP-Brasil), aceitas em todas as farmácias do Brasil conforme legislação vigente (Lei 13.787/2018 e Resolução CFF 677/2020).",
  },
  {
    q: "E se eu precisar de um exame presencial?",
    a: "O médico emite o pedido de exame por e-mail. Caso seja necessário atendimento presencial (emergências, exame físico obrigatório), o médico orienta o encaminhamento adequado.",
  },
];

export default function PacientesPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Para Pacientes", url: `${siteConfig.url}/pacientes` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Telemedicina para Pacientes — David Lacerda Telemedicina",
    description:
      "Consultas médicas online para pacientes em todo o Brasil. Especialidades diversas, receita digital, acolhimento integral.",
    provider: { "@type": "Organization", name: "David Lacerda Telemedicina", url: siteConfig.url },
    serviceType: "Telemedicina",
    areaServed: "BR",
    url: `${siteConfig.url}/pacientes`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Para Pacientes</span></li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-6">
              Para Pacientes
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Cuidado médico de excelência sem sair de casa
            </h1>
            <p className="text-lg md:text-xl text-[#4a454e] mb-8 max-w-xl">
              Conectamos você a médicos especialistas certificados pelo CFM em minutos. Consulta completa,
              receita digital e acompanhamento — tudo online, para todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/agendar"
                className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors text-center"
              >
                Agendar Consulta
              </Link>
              <Link
                href="/especialidades"
                className="bg-[#f3f4f5] text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#e7e8e9] transition-colors text-center"
              >
                Ver Especialidades
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "groups", value: "+5.000", label: "Consultas realizadas" },
              { icon: "star", value: "4.9/5", label: "Satisfação dos pacientes" },
              { icon: "timer", value: "< 24h", label: "Agenda disponível" },
              { icon: "verified_user", value: "CFM", label: "Regulamentado" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f3f4f5] rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-[#6b538d] mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  {stat.icon}
                </span>
                <p className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{stat.value}</p>
                <p className="text-xs text-[#4a454e] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">
              Diferenciais
            </span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Por que pacientes escolhem o David Lacerda Telemedicina
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beneficios.map((b) => (
              <div key={b.title} className="bg-white rounded-[1.5rem] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: b.accent, color: b.accentText }}>
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{b.icon}</span>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{b.title}</h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sua Jornada */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
              Passo a Passo
            </span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Sua jornada de cuidado
            </h2>
            <p className="text-[#4a454e] mt-3">Da consulta à receita, tudo em um único lugar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {jornada.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-[#f3f4f5] rounded-2xl p-6 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#aa8ec4] tracking-widest">{step.step}</span>
                    <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{step.title}</h3>
                  <p className="text-sm text-[#4a454e] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que está incluído */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Incluso</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              O que está incluído em cada consulta
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inclusos.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <span className="material-symbols-outlined text-[#6b538d] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                <span className="text-sm text-[#4a454e] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Dúvidas frequentes dos pacientes
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-[#f3f4f5] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-[#28113e] pr-4" style={{ fontFamily: "var(--font-headline)" }}>{item.q}</span>
                  <span className="material-symbols-outlined text-[#6b538d] shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">expand_more</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[#4a454e] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">health_and_safety</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
            Seu cuidado começa agora
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-xl mx-auto">
            Agende sua consulta em minutos. Sem filas, sem deslocamento —
            com toda a atenção e cuidado que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors">
              Agendar Consulta
            </Link>
            <Link href="/especialidades" className="border border-white/30 text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-colors">
              Ver Especialidades
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
