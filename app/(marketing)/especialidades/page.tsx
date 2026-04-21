import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Especialidades",
  description:
    "Mais de 30 especialidades médicas disponíveis por telemedicina: Cardiologia, Psiquiatria, Dermatologia, Pediatria e muito mais. Consulte online com receita digital.",
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
      "Tratamento humanizado para ansiedade, depressão e transtornos de humor, integrando suporte clínico e acompanhamento multidisciplinar. Abordagem baseada em evidências com escuta ativa.",
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
      "Planos alimentares personalizados para vitalidade física, respeitando suas preferências e estilo de vida.",
    featured: false,
  },
  {
    slug: "telemedicina",
    icon: "video_call",
    color: { bg: "#28113e", text: "#aa8ec4", cardAccent: "" },
    tagColor: { bg: "#28113e", text: "#d9bdff" },
    title: "Telemedicina",
    subtitle: "Online · Seguro · CFM",
    description:
      "Consultas médicas 100% online, regulamentadas pelo CFM, com receita digital válida em todo o Brasil. Sem sair de casa.",
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

            {/* Card Telemedicina — dark, full width */}
            {(() => {
              const esp = especialidades[3];
              return (
                <Link
                  key={esp.slug}
                  href={`/telemedicina`}
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
                    Saiba Mais
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

      {/* Especialidades para Adultos */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
              Adultos
            </span>
            <h2
              className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Especialidades Médicas para Adultos
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Atendimento 100% online com médicos especialistas. Receita digital com validade nacional emitida na mesma consulta.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { icon: "cardiology", label: "Cardiologia" },
              { icon: "psychiatry", label: "Psiquiatria" },
              { icon: "dermatology", label: "Dermatologia" },
              { icon: "neurology", label: "Neurologia" },
              { icon: "endocrinology", label: "Endocrinologia" },
              { icon: "gastroenterology", label: "Gastroenterologia" },
              { icon: "pulmonology", label: "Pneumologia" },
              { icon: "nephrology", label: "Nefrologia" },
              { icon: "orthopedics", label: "Ortopedia" },
              { icon: "hematology", label: "Hematologia" },
              { icon: "rheumatology", label: "Reumatologia" },
              { icon: "urology", label: "Urologia" },
              { icon: "gynecology", label: "Ginecologia" },
              { icon: "allergy", label: "Alergologia" },
              { icon: "blood_pressure", label: "Angiologia" },
              { icon: "elderly", label: "Geriatria" },
              { icon: "coronavirus", label: "Infectologia" },
              { icon: "hearing", label: "Otorrinolaringologia" },
              { icon: "physical_therapy", label: "Fisiatria" },
              { icon: "stethoscope", label: "Clínica Médica" },
              { icon: "medical_services", label: "Clínico Geral" },
              { icon: "family_restroom", label: "Médico da Família" },
            ].map(({ icon, label }) => (
              <Link
                key={label}
                href="/agendar"
                className="bg-white rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-[#e7e8e9] hover:border-[#6b538d]/40 hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] transition-all duration-200 group"
                aria-label={`Agendar consulta de ${label}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#f3f0ff] text-[#6b538d] flex items-center justify-center group-hover:bg-[#6b538d] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#28113e] leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades Infantis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#d9f3e8] text-[#1a5c3a] text-xs uppercase tracking-[0.05em] mb-4">
              Pediatria & Infantil
            </span>
            <h2
              className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Especialistas Dedicados à Saúde das Crianças
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Cuidado pediátrico online com especialistas. Atendimento seguro, acolhedor e regulamentado pelo CFM.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { icon: "pediatrics", label: "Pediatria" },
              { icon: "allergy", label: "Alergologia Infantil" },
              { icon: "endocrinology", label: "Endocrinologia Infantil" },
              { icon: "gastroenterology", label: "Gastroenterologia Infantil" },
              { icon: "neurology", label: "Neurologia Infantil" },
              { icon: "orthopedics", label: "Ortopedia Infantil" },
              { icon: "pulmonology", label: "Pneumologia Infantil" },
              { icon: "psychiatry", label: "Psiquiatria Infantil" },
              { icon: "rheumatology", label: "Reumatologia Infantil" },
              { icon: "psychology", label: "Psicologia Infantil" },
            ].map(({ icon, label }) => (
              <Link
                key={label}
                href="/agendar"
                className="bg-[#f3f4f5] rounded-xl p-4 flex flex-col items-center gap-3 text-center border border-transparent hover:border-[#1a5c3a]/30 hover:bg-white hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] transition-all duration-200 group"
                aria-label={`Agendar consulta de ${label}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#d9f3e8] text-[#1a5c3a] flex items-center justify-center group-hover:bg-[#1a5c3a] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#28113e] leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Terapias */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#ede59f] text-[#4d4812] text-xs uppercase tracking-[0.05em] mb-4">
              Terapias & Bem-Estar
            </span>
            <h2
              className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Cuidado Além da Consulta Médica
            </h2>
            <p className="text-[#4a454e] mt-3 max-w-2xl">
              Psicologia, Fisioterapia e Nutrição online para um cuidado integral — corpo, mente e emoções.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: "psychology",
                label: "Psicologia",
                description: "Acompanhamento psicológico online para adultos. Ansiedade, depressão, relacionamentos e desenvolvimento pessoal.",
                color: { bg: "#eddcff", text: "#523b74", hover: "#6b538d" },
              },
              {
                icon: "psychology",
                label: "Psicologia Infantil",
                description: "Suporte psicológico especializado para crianças e adolescentes, com abordagem lúdica e acolhedora.",
                color: { bg: "#d9f3e8", text: "#1a5c3a", hover: "#1a5c3a" },
              },
              {
                icon: "sports_gymnastics",
                label: "Fisioterapia",
                description: "Reabilitação, exercícios e orientações posturais conduzidos por fisioterapeutas qualificados online.",
                color: { bg: "#cce5ff", text: "#004085", hover: "#004085" },
              },
              {
                icon: "nutrition",
                label: "Nutrição",
                description: "Planos alimentares personalizados com nutricionistas. Emagrecimento, saúde metabólica e bem-estar.",
                color: { bg: "#ede59f", text: "#4d4812", hover: "#4d4812" },
              },
            ].map(({ icon, label, description, color }) => (
              <Link
                key={label}
                href="/agendar"
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[#e7e8e9] hover:shadow-[0_12px_32px_rgb(0,0,0,0.07)] hover:border-transparent transition-all duration-200 group"
                aria-label={`Agendar sessão de ${label}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: color.bg, color: color.text }}
                >
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#28113e] mb-1" style={{ fontFamily: "var(--font-headline)" }}>
                    {label}
                  </h3>
                  <p className="text-sm text-[#4a454e] leading-relaxed">{description}</p>
                </div>
                <div className="mt-auto flex items-center text-xs font-semibold uppercase tracking-wider transition-colors" style={{ color: color.text }}>
                  Agendar
                  <span className="material-symbols-outlined ml-1 text-xs transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold mb-4 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Não encontrou sua especialidade?
          </h2>
          <p className="text-[#aa8ec4] mb-8 max-w-xl mx-auto">
            Nossa equipe pode te orientar sobre qual especialista é o mais indicado para o seu caso e confirmar a disponibilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="bg-white text-[#28113e] px-8 py-3 rounded-full font-medium uppercase tracking-wider text-sm hover:bg-[#f3f4f5] transition-colors"
            >
              Agendar Consulta
            </Link>
            <Link
              href="/contato"
              className="border border-white/30 text-white px-8 py-3 rounded-full font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors"
            >
              Falar com Equipe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
