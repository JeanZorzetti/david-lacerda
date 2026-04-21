import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Planos",
  description:
    "Escolha o plano de telemedicina ideal para você. Consultas avulsas, plano mensal ou plano família. Receita digital inclusa, sem fidelidade.",
  path: "/planos",
});

/* REVISAR VALORES COM DR. DAVID antes do lançamento */
const planos = [
  {
    id: "avulso",
    nome: "Avulso",
    preco: "R$ 180",
    periodo: "por consulta",
    descricao: "Ideal para quem precisa de atendimento pontual, sem compromisso mensal.",
    destaque: false,
    badge: null,
    inclui: [
      "1 consulta com especialista",
      "Receita digital ICP-Brasil",
      "Atestado médico (se necessário)",
      "Prontuário eletrônico",
      "Suporte por e-mail",
    ],
    naoInclui: ["Consultas ilimitadas", "Reagendamento gratuito", "Desconto em exames parceiros"],
    cta: "Consultar Agora",
    href: "/agendar",
  },
  {
    id: "mensal",
    nome: "Mensal",
    preco: "R$ 120",
    periodo: "/mês · 2 consultas",
    descricao: "Acompanhamento contínuo para quem cuida da saúde com regularidade.",
    destaque: true,
    badge: "Mais escolhido",
    inclui: [
      "2 consultas/mês com qualquer especialidade",
      "Receita digital ICP-Brasil",
      "Atestados e encaminhamentos",
      "Prontuário eletrônico completo",
      "Reagendamento gratuito",
      "Suporte prioritário por e-mail",
      "10% de desconto em exames parceiros",
    ],
    naoInclui: [],
    cta: "Escolher Plano Mensal",
    href: "/agendar",
  },
  {
    id: "familia",
    nome: "Família",
    preco: "R$ 280",
    periodo: "/mês · até 4 pessoas",
    descricao: "Toda a família cuidada — inclui cônjuge, filhos e dependentes.",
    destaque: false,
    badge: null,
    inclui: [
      "4 consultas/mês para até 4 titulares",
      "Inclui pediatria e psiquiatria infantil",
      "Receita digital ICP-Brasil",
      "Atestados e encaminhamentos",
      "Prontuário por membro",
      "Reagendamento gratuito",
      "Suporte prioritário por e-mail",
      "15% de desconto em exames parceiros",
    ],
    naoInclui: [],
    cta: "Escolher Plano Família",
    href: "/agendar",
  },
];

const comparativo = [
  { feature: "Consultas incluídas", avulso: "1 consulta", mensal: "2/mês", familia: "4/mês" },
  { feature: "Especialidades disponíveis", avulso: "Todas", mensal: "Todas", familia: "Todas + Pediatria" },
  { feature: "Receita digital ICP-Brasil", avulso: true, mensal: true, familia: true },
  { feature: "Atestados e encaminhamentos", avulso: true, mensal: true, familia: true },
  { feature: "Prontuário eletrônico", avulso: true, mensal: true, familia: true },
  { feature: "Reagendamento gratuito", avulso: false, mensal: true, familia: true },
  { feature: "Desconto em exames parceiros", avulso: false, mensal: "10%", familia: "15%" },
  { feature: "Membros cobertos", avulso: "1", mensal: "1", familia: "até 4" },
  { feature: "Cancelamento a qualquer momento", avulso: "N/A", mensal: true, familia: true },
];

const faq = [
  {
    q: "Posso cancelar o plano quando quiser?",
    a: "Sim. Não há fidelidade nem multa de cancelamento. Basta solicitar o cancelamento por e-mail até 3 dias antes da renovação mensal e ele não será cobrado no próximo ciclo.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "PIX, cartão de crédito (até 3x sem juros) e cartão de débito. Para planos mensais, a cobrança é recorrente automática no cartão de crédito.",
  },
  {
    q: "Posso mudar de plano?",
    a: "Sim. Você pode fazer upgrade ou downgrade a qualquer momento. A mudança entra em vigor no próximo ciclo de faturamento.",
  },
  {
    q: "O plano emite nota fiscal?",
    a: "Sim. Emitimos recibo eletrônico com todos os dados do serviço, que pode ser usado para reembolso em plano de saúde e declaração de imposto de renda.",
  },
  {
    q: "E se eu não usar todas as consultas do mês?",
    a: "Consultas não utilizadas não acumulam para o mês seguinte. Recomendamos usar para consultas preventivas de acompanhamento, mesmo quando não há sintomas.",
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
        <p className="text-lg md:text-xl text-[#4a454e] max-w-xl mx-auto">
          Sem fidelidade, sem burocracia. Escolha o plano ideal e comece a cuidar da sua saúde ainda hoje.
        </p>
      </section>

      {/* Cards de Planos */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planos.map((plano) => (
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
                  <h2
                    className={`text-xl font-bold mb-1 ${plano.destaque ? "text-white" : "text-[#28113e]"}`}
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {plano.nome}
                  </h2>
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
                  {plano.naoInclui.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm opacity-40">
                      <span className="material-symbols-outlined text-base mt-0.5 shrink-0 text-[#ccc4cf]" aria-hidden="true">cancel</span>
                      <span className={plano.destaque ? "text-[#aa8ec4]" : "text-[#7c757e]"}>{item}</span>
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
            {/* REVISAR VALORES COM DR. DAVID */}
            Valores sujeitos a alteração. Consulte a tabela atualizada ao agendar.
          </p>
        </div>
      </section>

      {/* Comparativo desktop */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Comparativo completo
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-[#28113e] text-white">
                  <th className="text-left px-6 py-4 font-semibold w-1/2">Recurso</th>
                  <th className="text-center px-4 py-4 font-semibold">Avulso</th>
                  <th className="text-center px-4 py-4 font-semibold bg-[#3e2755]">Mensal</th>
                  <th className="text-center px-4 py-4 font-semibold">Família</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f8fa]"}>
                    <td className="px-6 py-4 text-[#28113e] font-medium">{row.feature}</td>
                    <td className="px-4 py-4 text-center">
                      {row.avulso === true ? <Check /> : row.avulso === false ? <Cross /> : <span className="text-[#4a454e]">{row.avulso}</span>}
                    </td>
                    <td className="px-4 py-4 text-center bg-[#f3f0ff]/30">
                      {row.mensal === true ? <Check /> : row.mensal === false ? <Cross /> : <span className="text-[#4a454e]">{row.mensal}</span>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.familia === true ? <Check /> : row.familia === false ? <Cross /> : <span className="text-[#4a454e]">{row.familia}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Incluído em todos */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Sem exceções</span>
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Incluído em todos os planos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "verified_user", title: "CFM Regulamentado", desc: "Todos os médicos são registrados no CRM, seguindo a Resolução CFM 2.314/2022." },
              { icon: "lock", title: "Criptografia Ponta a Ponta", desc: "Videoconsultas com criptografia AES-256. Seus dados nunca trafegam sem proteção." },
              { icon: "receipt_long", title: "Receita com Validade Nacional", desc: "Assinatura eletrônica ICP-Brasil aceita em qualquer farmácia do Brasil." },
              { icon: "support_agent", title: "Suporte por E-mail", desc: "Equipe de suporte disponível para dúvidas sobre agendamento, receitas e documentos." },
            ].map((item) => (
              <div key={item.title} className="bg-[#f3f4f5] rounded-2xl p-6 flex flex-col gap-3">
                <span className="material-symbols-outlined text-3xl text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-[#28113e] text-sm" style={{ fontFamily: "var(--font-headline)" }}>{item.title}</h3>
                <p className="text-xs text-[#4a454e] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Perguntas frequentes sobre os planos
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl overflow-hidden">
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
