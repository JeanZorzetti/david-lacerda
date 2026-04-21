import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Nossa Abordagem",
  description:
    "Conheça a abordagem clínica da David Lacerda Telemedicina: medicina baseada em evidências com cuidado humanizado, rigor técnico e respeito à individualidade de cada paciente.",
  path: "/ciencia-e-fe",
});

const papers = [
  {
    area: "Saúde Mental",
    citation: "Koenig HG (2012). Religion, spirituality, and health: The research and clinical implications. ISRN Psychiatry.",
    finding: "Estudos com mais de 3.000 participantes mostram que suporte social e propósito de vida estão associados a menor prevalência de depressão e ansiedade.",
  },
  {
    area: "Resiliência",
    citation: "Pargament KI (2011). Spiritually integrated psychotherapy. Guilford Press.",
    finding: "Recursos internos e crenças pessoais são preditores consistentes de resiliência psicológica em situações de crise.",
  },
  {
    area: "Inflamação e Estresse",
    citation: "Black DS, Slavich GM (2016). Mindfulness meditation and the immune system. Ann NY Acad Sci.",
    finding: "Práticas contemplativas e de mindfulness reduzem biomarcadores inflamatórios, incluindo IL-6 e cortisol, em populações sob estresse crônico.",
  },
  {
    area: "Propósito de Vida",
    citation: "Kim ES et al. (2019). Purpose in life and reduced incidence of stroke. Psychosomatic Medicine.",
    finding: "Indivíduos com alto senso de propósito têm 44% menos risco de AVC e 19% menos mortalidade por todas as causas.",
  },
];

const principios = [
  {
    icon: "science",
    title: "Rigor Científico",
    description:
      "Diagnósticos baseados em evidências, protocolos atualizados e medicina translacional. A ciência é ferramenta de precisão.",
  },
  {
    icon: "favorite",
    title: "Escuta Profunda",
    description:
      "Cada paciente é uma narrativa única. A escuta ativa vai além dos sintomas — alcança valores, medos e expectativas.",
  },
  {
    icon: "self_improvement",
    title: "Cuidado Integral",
    description:
      "Corpo e mente são inseparáveis. O plano terapêutico considera todas as dimensões do bem-estar do paciente.",
  },
  {
    icon: "volunteer_activism",
    title: "Compaixão Ativa",
    description:
      "Não apenas diagnóstico e prescrição, mas presença genuína. Cuidar é um ato de compromisso com o bem-estar do outro.",
  },
];

export default function AbordagemPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Nossa Abordagem", url: `${siteConfig.url}/ciencia-e-fe` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(217,189,255,0.2) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#aa8ec4]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><span className="text-white font-medium">Nossa Abordagem</span></li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#d9bdff] text-xs uppercase tracking-[0.05em] mb-6">
              Filosofia de Cuidado
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Medicina com excelência{" "}
              <br className="hidden md:block" />
              e cuidado humanizado.
            </h1>
            <p className="text-lg text-[#aa8ec4] max-w-2xl">
              No David Lacerda Telemedicina, cada consulta combina rigor científico com escuta ativa
              e respeito à individualidade do paciente — porque a saúde vai além do sintoma.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl p-2 shadow-[0_20px_60px_rgb(0,0,0,0.04)] border border-slate-100/80">
                <div className="relative w-full rounded-xl bg-[#28113e] overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src="/logo-footer.png"
                    alt="Logotipo David Lacerda Telemedicina"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8 text-lg text-[#4a454e] leading-relaxed">
              <p className="text-2xl font-bold text-[#28113e] leading-snug" style={{ fontFamily: "var(--font-headline)" }}>
                A medicina mais eficaz é aquela que trata o ser humano completo, não apenas o sintoma isolado.
              </p>

              <p>
                A medicina moderna nasceu da observação metódica, do experimento e da evidência. Essa é sua força
                inegável. Mas ao longo do caminho, muitas abordagens descartaram dimensões igualmente reais do
                paciente: o sentido que dá à própria vida, os valores que sustentam suas escolhas, as relações que
                impactam sua saúde.
              </p>

              <p>
                No David Lacerda Telemedicina, acreditamos que o cuidado médico mais eficaz considera o paciente inteiro.
                Que há uma dimensão interior que influencia profundamente como vivemos, adoecemos e nos recuperamos.
                Isso está documentado em décadas de pesquisa em psiconeuroimunologia e medicina integrativa.
              </p>

              <blockquote
                className="border-l-4 border-[#6b538d] pl-6 py-2 my-8 italic text-[#191c1d] text-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                &ldquo;Cuidar com excelência técnica é um dever. Fazê-lo com compaixão e respeito
                à individualidade do paciente é o que diferencia o David Lacerda Telemedicina.&rdquo;
                <footer className="text-base not-italic text-[#4a454e] mt-3">
                  — David Lacerda, Fundador
                </footer>
              </blockquote>

              <p>
                Cada diagnóstico é feito com o rigor que a medicina exige. Cada prescrição segue
                protocolos baseados em evidências. Mas a conversa sobre o que sustenta o paciente —
                seus valores, sua história, seus objetivos de vida — também tem lugar aqui.
              </p>

              <p>
                Porque acreditamos que a recuperação mais duradoura não acontece apenas no corpo.
                Acontece quando corpo e mente encontram equilíbrio. E quando isso ocorre, a medicina
                se torna verdadeiramente poderosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Os 4 Princípios */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
              Nossa Filosofia
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Os pilares do cuidado integral
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#3e2755] text-[#aa8ec4] flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {p.icon}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#28113e] mb-3"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidências científicas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">
              Evidências
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O que a pesquisa científica confirma
            </h2>
            <p className="text-[#4a454e] mt-4">
              O cuidado integral tem base sólida em evidências clínicas e científicas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {papers.map((item) => (
              <div key={item.area} className="bg-[#f3f4f5] rounded-2xl overflow-hidden">
                <div className="bg-[#28113e] px-6 py-3">
                  <span className="text-xs font-bold text-[#aa8ec4] uppercase tracking-widest">{item.area}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#d9bdff] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm text-[#523b74]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        science
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-[#4a454e] leading-relaxed">{item.finding}</p>
                      <p className="text-xs text-[#7c757e] mt-2 italic">{item.citation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#3e2755] flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-2xl text-[#d9bdff]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-[#4a454e] text-lg mb-10 max-w-2xl mx-auto">
            No David Lacerda Telemedicina, sua história é respeitada. Sua saúde é nossa missão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              Agendar Consulta
            </Link>
            <Link
              href="/blog"
              className="bg-white text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#edeeef] transition-colors duration-300 border border-[#ccc4cf]"
            >
              Explorar Artigos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
