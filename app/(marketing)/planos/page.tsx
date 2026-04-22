import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Planos e Preços",
  description:
    "Telemedicina individual, familiar e corporativa a partir de R$ 47/mês. Além de programas especializados: NR-1 Saúde Mental, Emagrecimento Clínico e Acompanhamento TEA.",
  path: "/planos",
});

const planosTelemedicina = [
  {
    id: "individual",
    nome: "Individual",
    preco: "R$ 47",
    periodo: "/mês",
    descricao: "Consultas ilimitadas para 1 vida, acesso completo a todas as especialidades disponíveis.",
    destaque: false,
    badge: null,
    inclui: [
      "1 vida — acesso completo",
      "Consultas ilimitadas no Pronto-Atendimento",
      "Mais de 32 especialidades",
      "Receita digital ICP-Brasil",
      "Atestados e encaminhamentos",
      "Prontuário eletrônico",
      "App exclusivo da plataforma",
    ],
    cta: "Começar Agora",
    href: "/agendar",
  },
  {
    id: "familiar",
    nome: "Familiar",
    preco: "R$ 147",
    periodo: "/mês · até 4 vidas",
    descricao: "Toda a família coberta — cônjuge, filhos e dependentes, com acesso completo.",
    destaque: true,
    badge: "Mais escolhido",
    inclui: [
      "Até 4 vidas com acesso completo",
      "Consultas ilimitadas no Pronto-Atendimento",
      "Mais de 32 especialidades",
      "Inclui pediatria e ginecologia",
      "Receita digital ICP-Brasil",
      "Atestados e encaminhamentos",
      "Prontuário por membro da família",
      "App exclusivo da plataforma",
    ],
    cta: "Escolher Plano Familiar",
    href: "/agendar",
  },
  {
    id: "familiar-plus",
    nome: "Familiar+",
    preco: "R$ 237",
    periodo: "/mês · até 6 vidas",
    descricao: "Para famílias maiores — até 6 vidas com acesso premium completo.",
    destaque: false,
    badge: null,
    inclui: [
      "Até 6 vidas com acesso completo",
      "Consultas ilimitadas no Pronto-Atendimento",
      "Mais de 32 especialidades",
      "Inclui pediatria e ginecologia",
      "Receita digital ICP-Brasil",
      "Atestados e encaminhamentos",
      "Prontuário por membro da família",
      "App exclusivo da plataforma",
    ],
    cta: "Escolher Plano Familiar+",
    href: "/agendar",
  },
];

const programasEspeciais = [
  {
    id: "nr1",
    icon: "psychology",
    tag: "Corporativo",
    nome: "NR-1 — Saúde Mental Corporativa",
    descricao: "Conformidade com a NR-1 do MTE para empresas de qualquer porte. Suporte psicológico, clínico e psiquiátrico via telemedicina para colaboradores.",
    planos: [
      { label: "Pacote 1 Quinzenal", detalhe: "1 Clínico + 2 Psicólogos/mês" },
      { label: "Pacote 1 Semanal", detalhe: "1 Clínico + 4 Psicólogos/mês" },
      { label: "Pacote 2 Quinzenal", detalhe: "1 Psiquiatra + 2 Psicólogos/mês" },
      { label: "Pacote 2 Semanal", detalhe: "1 Psiquiatra + 4 Psicólogos/mês" },
    ],
    cta: "Solicitar Proposta",
    href: "/empresas",
  },
  {
    id: "mounjaro",
    icon: "monitor_weight",
    tag: "Emagrecimento",
    nome: "Programa Mounjaro — Emagrecimento Clínico",
    descricao: "Tratamento multidisciplinar com Tirzepatida — médico, nutricionista e psicólogo. O valor do medicamento não está incluso.",
    planos: [
      { label: "Programa 2 meses", detalhe: "2 consultas médicas + 2 nutrição + 2 psicologia" },
      { label: "Programa 4 meses ⭐", detalhe: "4 consultas médicas + 4 nutrição + 4 psicologia" },
      { label: "Programa 6 meses", detalhe: "6 consultas médicas + 6 nutrição + 6 psicologia" },
    ],
    cta: "Saber Mais",
    href: "/contato",
  },
  {
    id: "tea",
    icon: "child_care",
    tag: "Infantil",
    nome: "Projeto TEA — Acompanhamento Multidisciplinar",
    descricao: "Avaliação e acompanhamento especializado para crianças com TEA — Psiquiatria Pediátrica, Psicologia, Fonoaudiologia e Fisioterapia, 100% online.",
    planos: [
      { label: "Plano Mensal (manutenção)", detalhe: "5 atendimentos/mês com equipe completa" },
      { label: "Plano Quinzenal ⭐", detalhe: "8 atendimentos/mês com equipe completa" },
      { label: "Plano Semanal (intensivo)", detalhe: "14 atendimentos/mês com equipe completa" },
    ],
    cta: "Saber Mais",
    href: "/contato",
  },
];

const comparativo = [
  { feature: "Consultas ilimitadas no Pronto-Atendimento", individual: true, familiar: true, familiarPlus: true },
  { feature: "Especialidades disponíveis", individual: "+32", familiar: "+32", familiarPlus: "+32" },
  { feature: "Receita digital ICP-Brasil", individual: true, familiar: true, familiarPlus: true },
  { feature: "Atestados e encaminhamentos", individual: true, familiar: true, familiarPlus: true },
  { feature: "Prontuário eletrônico", individual: true, familiar: true, familiarPlus: true },
  { feature: "App exclusivo da plataforma", individual: true, familiar: true, familiarPlus: true },
  { feature: "Vidas cobertas", individual: "1", familiar: "até 4", familiarPlus: "até 6" },
  { feature: "Cancelamento a qualquer momento", individual: true, familiar: true, familiarPlus: true },
];

const faq = [
  {
    q: "Posso cancelar o plano quando quiser?",
    a: "Sim. Não há fidelidade nem multa de cancelamento. Basta solicitar o cancelamento com antecedência mínima de 48h antes do próximo ciclo de faturamento.",
  },
  {
    q: "Como funciona o Pronto-Atendimento?",
    a: "Você acessa o app da plataforma, entra na fila de pronto-atendimento e é atendido pelo próximo Clínico Geral disponível. O tempo médio de espera é de até 15 minutos — inclusive fins de semana e feriados.",
  },
  {
    q: "A receita digital é aceita em farmácias?",
    a: "Sim. As receitas são emitidas com assinatura eletrônica qualificada ICP-Brasil, conforme Lei 14.510/2022 e RDC ANVISA 471/2021. São aceitas em qualquer farmácia do Brasil, incluindo medicamentos controlados.",
  },
  {
    q: "O plano empresarial é diferente?",
    a: "Sim. Para empresas, o plano Empresarial cobre colaboradores por vida/mês, com relatório de utilização para o RH. Consulte nossa página Para Empresas para solicitar proposta corporativa.",
  },
  {
    q: "Os programas especiais (NR-1, Mounjaro, TEA) são separados da telemedicina?",
    a: "Sim. São programas independentes com equipes multidisciplinares e protocolos próprios. Podem ser contratados de forma avulsa ou combinados com o plano de telemedicina.",
  },
];

function Check() {
  return (
    <span className="material-symbols-outlined text-[#1a5c3a] text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
      check_circle
    </span>
  );
}

function Cross() {
  return (
    <span className="material-symbols-outlined text-[#ccc4cf] text-lg" aria-hidden="true">
      cancel
    </span>
  );
}

export default function PlanosPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Planos", url: `${siteConfig.url}/planos` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 text-center">
        <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Planos</span></li>
          </ol>
        </nav>
        <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-6">
          Planos & Preços
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Planos que cabem no seu cuidado
        </h1>
        <p className="text-lg md:text-xl text-[#4a454e] max-w-2xl mx-auto">
          Telemedicina ilimitada, saúde mental corporativa NR-1, emagrecimento clínico e acompanhamento TEA. Sem fidelidade, sem burocracia.
        </p>
      </section>

      {/* Telemedicina */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-3">Telemedicina</span>
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Consultas ilimitadas · Pronto-Atendimento
            </h2>
            <p className="text-[#4a454e] mt-2 text-sm">Mais de 32 especialidades disponíveis via app da plataforma</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planosTelemedicina.map((plano) => (
              <div
                key={plano.id}
                className={`rounded-[1.5rem] p-8 flex flex-col border-2 relative ${
                  plano.destaque
                    ? "bg-[#28113e] text-white border-[#6b538d]"
                    : "bg-white border-[#e7e8e9]"
                }`}
              >
                {plano.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#6b538d] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                      {plano.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${plano.destaque ? "text-white" : "text-[#28113e]"}`}
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {plano.nome}
                  </h3>
                  <p className={`text-sm mb-4 ${plano.destaque ? "text-[#aa8ec4]" : "text-[#4a454e]"}`}>
                    {plano.descricao}
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-4xl font-extrabold ${plano.destaque ? "text-white" : "text-[#28113e]"}`}
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {plano.preco}
                    </span>
                    <span className={`text-sm mb-1 ${plano.destaque ? "text-[#aa8ec4]" : "text-[#4a454e]"}`}>
                      {plano.periodo}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plano.inclui.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`material-symbols-outlined text-base mt-0.5 shrink-0 ${plano.destaque ? "text-[#aa8ec4]" : "text-[#6b538d]"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <span className={plano.destaque ? "text-[#e7e8e9]" : "text-[#4a454e]"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plano.href}
                  className={`block text-center px-6 py-3.5 rounded-full font-medium uppercase tracking-wider text-sm transition-colors ${
                    plano.destaque
                      ? "bg-white text-[#28113e] hover:bg-[#f3f4f5]"
                      : "bg-[#28113e] text-white hover:bg-[#3e2755]"
                  }`}
                >
                  {plano.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#7c757e] mt-6">
            Plano Empresarial disponível para equipes ·{" "}
            <Link href="/empresas" className="underline hover:text-[#28113e]">Solicitar proposta corporativa</Link>
          </p>
        </div>
      </section>

      {/* Comparativo desktop */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Comparativo dos planos de telemedicina
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-[#28113e] text-white">
                  <th className="text-left px-6 py-4 font-semibold w-1/2">Recurso</th>
                  <th className="text-center px-4 py-4 font-semibold">Individual</th>
                  <th className="text-center px-4 py-4 font-semibold bg-[#3e2755]">Familiar</th>
                  <th className="text-center px-4 py-4 font-semibold">Familiar+</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f8fa]"}>
                    <td className="px-6 py-4 text-[#28113e] font-medium">{row.feature}</td>
                    <td className="px-4 py-4 text-center">
                      {row.individual === true ? <Check /> : row.individual === false ? <Cross /> : <span className="text-[#4a454e]">{row.individual}</span>}
                    </td>
                    <td className="px-4 py-4 text-center bg-[#f3f0ff]/30">
                      {row.familiar === true ? <Check /> : row.familiar === false ? <Cross /> : <span className="text-[#4a454e]">{row.familiar}</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.familiarPlus === true ? <Check /> : row.familiarPlus === false ? <Cross /> : <span className="text-[#4a454e]">{row.familiarPlus}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programas Especializados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Programas Especializados</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Além da telemedicina
            </h2>
            <p className="text-[#4a454e] mt-3">Programas multidisciplinares para necessidades específicas — corporativo, emagrecimento e neurodiversidade.</p>
          </div>
          <div className="space-y-6">
            {programasEspeciais.map((prog) => (
              <div key={prog.id} className="bg-[#f3f4f5] rounded-[1.5rem] p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{prog.icon}</span>
                  </div>
                  <div>
                    <span className="inline-block py-0.5 px-2.5 rounded-full bg-[#28113e] text-[#aa8ec4] text-xs font-bold mb-2">{prog.tag}</span>
                    <h3 className="text-lg font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{prog.nome}</h3>
                    <p className="text-sm text-[#4a454e] mt-1 max-w-2xl">{prog.descricao}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  {prog.planos.map((p) => (
                    <div key={p.label} className="bg-white rounded-2xl p-4 flex flex-col gap-1">
                      <span className="text-xs font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{p.label}</span>
                      <span className="text-xs text-[#6b538d]">{p.detalhe}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={prog.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b538d] uppercase tracking-wider hover:text-[#28113e] transition-colors"
                >
                  {prog.cta}
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incluído em todos */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Sem exceções</span>
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Incluído em todos os planos de telemedicina
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "verified_user", title: "CFM Regulamentado", desc: "Médicos com registro ativo no CRM, seguindo a Resolução CFM 2.314/2022 e Lei 14.510/2022." },
              { icon: "lock", title: "Criptografia Ponta a Ponta", desc: "Videoconsultas criptografadas. Seus dados nunca trafegam sem proteção." },
              { icon: "receipt_long", title: "Receita com Validade Nacional", desc: "Assinatura eletrônica ICP-Brasil aceita em qualquer farmácia do Brasil." },
              { icon: "phone_android", title: "App da Plataforma", desc: "Agendamento, fila de atendimento e histórico de consultas no seu celular." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
                <span className="material-symbols-outlined text-3xl text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-[#28113e] text-sm" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</h3>
                <p className="text-xs text-[#4a454e] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Perguntas frequentes sobre os planos
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
            Pronto para começar?
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-xl mx-auto">
            Escolha o plano e agende sua primeira consulta em minutos. Cancele quando quiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors">
              Agendar Agora
            </Link>
            <Link href="/empresas" className="border border-white/30 text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-colors">
              Plano Corporativo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
