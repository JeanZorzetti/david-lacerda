import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import EmpresasForm from "@/components/forms/EmpresasForm";

export const metadata: Metadata = buildMetadata({
  title: "Para Empresas",
  description:
    "Telemedicina corporativa para sua equipe. Mais de 30 especialidades, planos flexíveis e implantação em 48h. Reduza absenteísmo e cuide da saúde mental dos colaboradores.",
  path: "/empresas",
});

const beneficios = [
  {
    icon: "trending_down",
    title: "Redução do Absenteísmo",
    description:
      "Colaboradores com acesso fácil a cuidados médicos faltam menos. Consultas rápidas e online eliminam o tempo perdido em deslocamentos e filas.",
    accent: "#d9f3e8",
    accentText: "#1a5c3a",
  },
  {
    icon: "psychology",
    title: "Saúde Mental no Foco",
    description:
      "Ansiedade, burnout e esgotamento são as maiores causas de afastamento. Disponibilize psiquiatria e psicologia de qualidade para toda a equipe.",
    accent: "#eddcff",
    accentText: "#523b74",
  },
  {
    icon: "rocket_launch",
    title: "Produtividade Sustentável",
    description:
      "Equipes saudáveis performam melhor. Investir em saúde preventiva reduz custos a médio prazo e aumenta engajamento e retenção de talentos.",
    accent: "#cce5ff",
    accentText: "#004085",
  },
  {
    icon: "attach_money",
    title: "Custo Previsível",
    description:
      "Planos corporativos com mensalidade fixa. Sem surpresas, sem franquias complexas. Orçamento de saúde sob controle do início ao fim.",
    accent: "#ede59f",
    accentText: "#4d4812",
  },
];

const passos = [
  {
    step: "01",
    icon: "handshake",
    title: "Contrato e Onboarding",
    description:
      "Definimos o número de colaboradores, especialidades inclusas e modelo de uso. Contrato simples e sem multa de fidelidade.",
  },
  {
    step: "02",
    icon: "group_add",
    title: "Cadastro da Equipe",
    description:
      "Enviamos o link de cadastro para todos os colaboradores. Em menos de 5 minutos cada um cria sua conta e já pode agendar.",
  },
  {
    step: "03",
    icon: "video_call",
    title: "Colaboradores Consultam",
    description:
      "Cada colaborador agenda conforme sua necessidade — qualquer dia, qualquer horário, de onde estiver.",
  },
];

const perfis = [
  { icon: "computer", label: "Startups e Fintechs" },
  { icon: "business_center", label: "Escritórios e Consultorias" },
  { icon: "storefront", label: "PMEs até 500 colaboradores" },
  { icon: "church", label: "Igrejas e ONGs" },
  { icon: "school", label: "Instituições de Ensino" },
  { icon: "local_hospital", label: "Clínicas e Farmácias" },
];

const especialidadesInclusas = [
  { icon: "psychiatry", label: "Psiquiatria" },
  { icon: "psychology", label: "Psicologia" },
  { icon: "stethoscope", label: "Clínico Geral" },
  { icon: "cardiology", label: "Cardiologia" },
  { icon: "nutrition", label: "Nutrição" },
  { icon: "neurology", label: "Neurologia" },
  { icon: "dermatology", label: "Dermatologia" },
  { icon: "endocrinology", label: "Endocrinologia" },
];

export default function EmpresasPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Para Empresas", url: `${siteConfig.url}/empresas` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Para Empresas</span></li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-[#d9f3e8] text-[#1a5c3a] text-xs uppercase tracking-[0.05em] mb-6">
              Telemedicina Corporativa
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Saúde corporativa que sua equipe vai usar de verdade
            </h1>
            <p className="text-lg md:text-xl text-[#4a454e] mb-8 max-w-xl">
              Benefício de telemedicina com mais de 30 especialidades. Colaboradores consultam online em minutos,
              sem deslocamento, sem burocracia. Implantação em 48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#proposta" className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors text-center">
                Solicitar Proposta
              </a>
              <Link href="/planos" className="bg-[#f3f4f5] text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#e7e8e9] transition-colors text-center">
                Ver Planos
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "business", value: "+200", label: "Empresas atendidas" },
              { icon: "people", value: "+8.000", label: "Colaboradores cobertos" },
              { icon: "thumb_up", value: "94%", label: "Taxa de adoção" },
              { icon: "savings", value: "30%", label: "Redução em afastamentos" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f3f4f5] rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-[#6b538d] mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{stat.icon}</span>
                <p className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{stat.value}</p>
                <p className="text-xs text-[#4a454e] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Benefícios</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              O que a sua empresa ganha
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

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Implantação</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Do contrato ao primeiro atendimento em 48h
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {passos.map((p) => (
              <div key={p.step} className="bg-[#f3f4f5] rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#aa8ec4] tracking-widest">{p.step}</span>
                  <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{p.icon}</span>
                  </div>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{p.title}</h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é + Especialidades */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Perfis Atendidos</span>
              <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                Para empresas de todos os tamanhos
              </h2>
              <p className="text-[#4a454e] mb-8 leading-relaxed">
                Desde startups com 5 colaboradores até PMEs com 500 — planos flexíveis que crescem com o seu negócio.
                Igrejas e organizações sem fins lucrativos têm condições especiais.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {perfis.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                    <span className="material-symbols-outlined text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{p.icon}</span>
                    <span className="text-sm font-medium text-[#28113e]">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">Especialidades Inclusas</span>
              <div className="grid grid-cols-2 gap-3">
                {especialidadesInclusas.map((e) => (
                  <div key={e.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                    <span className="material-symbols-outlined text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{e.icon}</span>
                    <span className="text-sm font-medium text-[#28113e]">{e.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#7c757e] mt-4">
                + 25 especialidades adicionais.{" "}
                <Link href="/especialidades" className="text-[#6b538d] hover:underline">Ver todas</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário B2B */}
      <section id="proposta" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#d9f3e8] text-[#1a5c3a] text-xs uppercase tracking-[0.05em] mb-4">Proposta Comercial</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Solicite uma proposta personalizada
            </h2>
            <p className="text-[#4a454e] mt-3">Retornamos em até 1 dia útil com uma proposta sob medida.</p>
          </div>
          <EmpresasForm />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">corporate_fare</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
            Invista na saúde de quem faz sua empresa crescer
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-xl mx-auto">
            Colaboradores saudáveis são mais produtivos, mais engajados e ficam mais tempo.
            Comece hoje com um plano sem fidelização.
          </p>
          <a href="#proposta" className="inline-block bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors">
            Solicitar Proposta
          </a>
        </div>
      </section>
    </>
  );
}
