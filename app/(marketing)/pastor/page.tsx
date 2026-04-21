import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaFounder, schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "O Fundador",
  description:
    "Conheça David Lacerda — fundador da David Lacerda Telemedicina. Uma história de compromisso com o acesso à saúde de qualidade para todos os brasileiros.",
  path: "/pastor",
});

const timeline = [
  {
    year: "2010",
    icon: "school",
    title: "Formação e Liderança Comunitária",
    description:
      "Início da atuação em grupos comunitários, aconselhamento e apoio emocional a pessoas em situação de vulnerabilidade.",
  },
  {
    year: "2014",
    icon: "groups",
    title: "Atuação Comunitária",
    description:
      "Liderança ativa em comunidades de São Luís, MA. Grupos de apoio emocional e identificação das lacunas no acesso à saúde.",
  },
  {
    year: "2018",
    icon: "volunteer_activism",
    title: "Mobilização Social",
    description:
      "Atuação em comunidades carentes do Maranhão e Pará, mobilizando acesso a serviços de saúde para populações distantes de grandes centros.",
  },
  {
    year: "2020",
    icon: "local_hospital",
    title: "Fundação da David Lacerda Telemedicina",
    description:
      "Criação da plataforma de telemedicina para democratizar o acesso a médicos qualificados em todo o Brasil.",
  },
  {
    year: "2024",
    icon: "public",
    title: "Expansão Nacional",
    description:
      "Pacientes de todos os estados brasileiros acessando médicos pela David Lacerda Telemedicina. Plataforma em crescimento contínuo.",
  },
];

const atuacao = [
  {
    icon: "location_city",
    label: "Base",
    value: "São Luís, Maranhão",
  },
  {
    icon: "medical_services",
    label: "Iniciativa",
    value: "David Lacerda Telemedicina — Telemedicina de qualidade para todos",
  },
  {
    icon: "article",
    label: "Publicações",
    value: "Artigos sobre saúde e bem-estar no Blog da David Lacerda Telemedicina",
  },
  {
    icon: "group",
    label: "Comunidade",
    value: "Grupos de suporte emocional e orientação em saúde (online)",
  },
];

export default function PastorPage() {
  const jsonLdFounder = schemaFounder();
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "O Fundador", url: `${siteConfig.url}/pastor` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFounder) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
                <li>
                  <Link href="/" className="hover:text-[#28113e] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </li>
                <li>
                  <span className="text-[#28113e] font-medium">O Fundador</span>
                </li>
              </ol>
            </nav>

            <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
              Fundador
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Um propósito:{" "}
              <br className="hidden md:block" />
              levar saúde{" "}
              <br className="hidden md:block" />
              a quem precisa.
            </h1>
            <p className="text-lg md:text-xl text-[#4a454e] mb-10 max-w-xl">
              David Lacerda acredita que acesso à saúde de qualidade é um direito, não um
              privilégio — e criou o David Lacerda Telemedicina para tornar isso real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/agendar"
                className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center"
              >
                Agendar Consulta
              </Link>
              <Link
                href="/blog"
                className="bg-[#e1e3e4] text-[#191c1d] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#edeeef] transition-colors duration-300 text-center"
              >
                Ler Artigos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#28113e]/10 to-transparent rounded-[2rem] -rotate-3 scale-105 transform origin-bottom-left z-0" />
            <div
              className="relative z-10 w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.06)]"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/david-real.jpg"
                alt="David Lacerda, fundador da David Lacerda Telemedicina"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d9bdff] flex items-center justify-center text-[#604982]">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div>
                <p className="font-bold text-[#28113e] text-sm leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
                  David Lacerda
                </p>
                <p className="text-xs text-[#4a454e]">Fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                Biografia
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Comprometido com o cuidado humano
              </h2>
              <div className="w-16 h-1 bg-[#6b538d] rounded-full" />
            </div>

            <div className="lg:col-span-8 space-y-6 text-lg text-[#4a454e] leading-relaxed">
              <p>
                Nascido em São Luís do Maranhão, David Lacerda cresceu vendo de perto as
                lacunas do sistema de saúde: pessoas sem acesso a atendimento de qualidade,
                tratadas como números em um sistema sobrecarregado.
              </p>
              <p>
                Atuando durante anos em comunidades carentes, David percebeu algo urgente:
                saúde mental, bem-estar emocional e acesso a médicos estão profundamente
                interligados. Era preciso criar uma solução que quebrasse as barreiras geográficas
                e econômicas que impediam tantos brasileiros de receber cuidado adequado.
              </p>
              <p>
                Após anos de atuação comunitária no Maranhão e no Pará, David encontrou na
                telemedicina a ferramenta que precisava: conectar pessoas a médicos qualificados,
                de qualquer lugar do Brasil, sem burocracia nem deslocamento.
              </p>
              <p>
                Em 2020, fundou o <strong className="text-[#28113e]">David Lacerda Telemedicina</strong> —
                uma plataforma onde acesso a médicos online e cuidado humanizado coexistem.
                Hoje, pacientes em todo o Brasil agendam consultas com médicos especializados
                pelo portal, com a segurança de um ambiente criado por alguém comprometido com o bem-estar humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">
              Trajetória
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Uma jornada de formação e impacto
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#ccc4cf] -translate-x-px hidden sm:block" aria-hidden="true" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-start ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-12 h-12 rounded-full bg-[#28113e] text-white items-center justify-center z-10 shadow-md">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>

                  <div className={`sm:w-[calc(50%-3rem)] bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] ${i % 2 === 0 ? "sm:ml-auto sm:text-left" : "sm:mr-auto sm:text-left"}`}>
                    <span className="inline-block text-xs font-bold text-[#6b538d] uppercase tracking-widest mb-2">
                      {item.year}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#28113e] mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4a454e] text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="sm:hidden flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-[#28113e] text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#6b538d] uppercase tracking-widest">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                Atuação
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Além da plataforma: impacto comunitário
              </h2>
              <p className="text-lg text-[#4a454e] leading-relaxed">
                David mantém envolvimento ativo com comunidades e iniciativas sociais,
                sempre com o mesmo propósito: levar cuidado de qualidade a quem mais precisa.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {atuacao.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#f3f4f5] rounded-2xl p-6 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6b538d] uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#4a454e] leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visão */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl text-[#d9bdff]" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
          </div>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-[1.3] mb-8 text-white"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            &ldquo;O acesso a cuidados médicos de qualidade não deveria depender de onde você mora
            ou quanto você tem. A David Lacerda Telemedicina existe para mudar essa realidade.&rdquo;
          </blockquote>
          <p className="text-[#aa8ec4] mb-10 text-lg">— David Lacerda, fundador da David Lacerda Telemedicina</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors duration-300 text-center"
            >
              Ler Artigos
            </Link>
            <Link
              href="/agendar"
              className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/20 transition-colors duration-300 text-center"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
