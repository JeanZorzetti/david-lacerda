import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Especialidades",
  description:
    "Saúde Mental, Clínica Geral, Nutrição e Aconselhamento Espiritual. Conheça as especialidades do Dr. David Lacerda e agende sua consulta online.",
  path: "/especialidades",
});

const especialidades = [
  {
    slug: "saude-mental",
    icon: "psychiatry",
    color: { bg: "#3e2755", text: "#aa8ec4", cardAccent: "#6b538d/5" },
    tagColor: { bg: "#eddcff", text: "#523b74" },
    title: "Saúde Mental e Emocional",
    subtitle: "Ansiedade · Depressão · Burnout",
    description:
      "Tratamento humanizado para ansiedade, depressão e transtornos de humor, integrando suporte clínico e fortalecimento espiritual. Abordagem baseada em evidências com escuta ativa.",
    featured: true,
  },
  {
    slug: "clinica-geral",
    icon: "monitor_heart",
    color: { bg: "#d6bafc", text: "#523b74", cardAccent: "" },
    tagColor: { bg: "#eddcff", text: "#523b74" },
    title: "Clínica Geral Avançada",
    subtitle: "Doenças crônicas · Check-up · Preventivo",
    description:
      "Acompanhamento contínuo, check-ups e manejo de doenças crônicas com visão holística do paciente.",
    featured: false,
  },
  {
    slug: "nutricao",
    icon: "nutrition",
    color: { bg: "#d0c986", text: "#4d4812", cardAccent: "" },
    tagColor: { bg: "#ede59f", text: "#4d4812" },
    title: "Nutrição e Bem-Estar",
    subtitle: "Planos alimentares · Emagrecimento saudável",
    description:
      "Planos alimentares personalizados para vitalidade física, respeitando o templo que é o seu corpo.",
    featured: false,
  },
  {
    slug: "aconselhamento-espiritual",
    icon: "self_improvement",
    color: { bg: "#28113e", text: "#aa8ec4", cardAccent: "" },
    tagColor: { bg: "#28113e", text: "#d9bdff" },
    title: "Aconselhamento Espiritual",
    subtitle: "Fé · Cura interior · Propósito",
    description:
      "Sessões dedicadas ao alinhamento da fé com o processo de cura, guiadas pelos princípios da Palavra.",
    featured: false,
    dark: true,
  },
];

export default function EspecialidadesPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Especialidades", url: `${siteConfig.url}/especialidades` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li>
              <Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Especialidades</span></li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
            Áreas de Atendimento
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Cuidado integral para cada dimensão da sua saúde
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] max-w-2xl">
            Cada especialidade é conduzida com rigor científico e atenção à sua história,
            suas crenças e seus objetivos de vida.
          </p>
        </div>
      </section>

      {/* Grid de especialidades */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card grande — Saúde Mental */}
            {(() => {
              const esp = especialidades[0];
              return (
                <Link
                  key={esp.slug}
                  href={`/especialidades/${esp.slug}`}
                  className="md:col-span-2 bg-white border border-[#e7e8e9] rounded-[1.5rem] p-8 md:p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#6b538d]/30 transition-all duration-300 relative overflow-hidden group flex flex-col"
                  aria-label={`Ver ${esp.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6b538d]/5 to-transparent z-0" />
                  <div className="relative z-10 flex-1">
                    <span
                      className="inline-block py-0.5 px-2.5 rounded-full text-xs font-medium mb-6"
                      style={{ background: esp.tagColor.bg, color: esp.tagColor.text }}
                    >
                      {esp.subtitle}
                    </span>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                      style={{ background: esp.color.bg, color: esp.color.text }}
                    >
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {esp.icon}
                      </span>
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#28113e] mb-3"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {esp.title}
                    </h2>
                    <p className="text-[#4a454e] mb-8 max-w-md">{esp.description}</p>
                  </div>
                  <div className="relative z-10 flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-sm group-hover:text-[#28113e] transition-colors">
                    Conhecer Especialidade
                    <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                  <span
                    className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-[#e1e3e4]/50 z-0 rotate-12 group-hover:scale-110 transition-transform duration-700"
                    aria-hidden="true"
                  >
                    {esp.icon}
                  </span>
                </Link>
              );
            })()}

            {/* Card Clínica Geral */}
            {(() => {
              const esp = especialidades[1];
              return (
                <Link
                  key={esp.slug}
                  href={`/especialidades/${esp.slug}`}
                  className="bg-white border border-[#e7e8e9] rounded-[1.5rem] p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#6b538d]/30 transition-all duration-300 flex flex-col group"
                  aria-label={`Ver ${esp.title}`}
                >
                  <span
                    className="inline-block py-0.5 px-2.5 rounded-full text-xs font-medium mb-6 self-start"
                    style={{ background: esp.tagColor.bg, color: esp.tagColor.text }}
                  >
                    {esp.subtitle}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ background: esp.color.bg, color: esp.color.text }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {esp.icon}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold text-[#28113e] mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {esp.title}
                  </h2>
                  <p className="text-[#4a454e] text-sm mb-6 flex-1">{esp.description}</p>
                  <div className="flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-xs group-hover:text-[#28113e] transition-colors">
                    Saiba Mais
                    <span className="material-symbols-outlined ml-1 text-xs transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </Link>
              );
            })()}

            {/* Card Nutrição */}
            {(() => {
              const esp = especialidades[2];
              return (
                <Link
                  key={esp.slug}
                  href={`/especialidades/${esp.slug}`}
                  className="bg-white border border-[#e7e8e9] rounded-[1.5rem] p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#6b538d]/30 transition-all duration-300 flex flex-col group"
                  aria-label={`Ver ${esp.title}`}
                >
                  <span
                    className="inline-block py-0.5 px-2.5 rounded-full text-xs font-medium mb-6 self-start"
                    style={{ background: esp.tagColor.bg, color: esp.tagColor.text }}
                  >
                    {esp.subtitle}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ background: esp.color.bg, color: esp.color.text }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {esp.icon}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-bold text-[#28113e] mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {esp.title}
                  </h2>
                  <p className="text-[#4a454e] text-sm mb-6 flex-1">{esp.description}</p>
                  <div className="flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-xs group-hover:text-[#28113e] transition-colors">
                    Saiba Mais
                    <span className="material-symbols-outlined ml-1 text-xs transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </Link>
              );
            })()}

            {/* Card Aconselhamento Espiritual — dark, full width */}
            {(() => {
              const esp = especialidades[3];
              return (
                <Link
                  key={esp.slug}
                  href={`/especialidades/${esp.slug}`}
                  className="md:col-span-2 bg-gradient-to-r from-[#28113e] to-[#3e2755] rounded-[1.5rem] p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden group hover:opacity-95 transition-opacity"
                  aria-label={`Ver ${esp.title}`}
                >
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=\")",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 max-w-lg">
                    <span className="inline-block py-0.5 px-2.5 rounded-full text-xs font-medium bg-white/10 text-[#d9bdff] mb-4">
                      {esp.subtitle}
                    </span>
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {esp.title}
                    </h2>
                    <p className="text-[#aa8ec4]">{esp.description}</p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 bg-white text-[#28113e] px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm whitespace-nowrap group-hover:bg-[#f3f4f5] transition-colors w-full md:w-auto justify-center">
                    Solicitar Sessão
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </Link>
              );
            })()}
          </div>

          {/* Não encontrou? */}
          <div className="mt-12 bg-[#f3f4f5] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
              </div>
              <div>
                <p className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
                  Não encontrou o que procurava?
                </p>
                <p className="text-sm text-[#4a454e]">
                  Entre em contato. Podemos orientar se a telemedicina é adequada para o seu caso.
                </p>
              </div>
            </div>
            <Link
              href="/contato"
              className="shrink-0 bg-[#28113e] text-white px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm hover:bg-[#3e2755] transition-colors"
            >
              Falar com Equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
