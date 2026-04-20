import Link from "next/link";
import { schemaBreadcrumb } from "@/lib/schema";
import { siteConfig } from "@/lib/seo";

export interface SpecialtyFAQItem {
  q: string;
  a: string;
}

export interface SpecialtyProps {
  slug: string;
  icon: string;
  accentBg: string;
  accentText: string;
  tag: string;
  title: string;
  lead: string;
  aboutTitle: string;
  about: string[];
  whenTitle?: string;
  whenItems: string[];
  howTitle?: string;
  howItems: Array<{ icon: string; title: string; description: string }>;
  casesTitle?: string;
  cases: Array<{ icon: string; label: string }>;
  faq: SpecialtyFAQItem[];
  ctaText?: string;
}

export default function SpecialtyPage({
  slug,
  icon,
  accentBg,
  accentText,
  tag,
  title,
  lead,
  aboutTitle,
  about,
  whenTitle = "Quando buscar ajuda",
  whenItems,
  howTitle = "Como trabalho",
  howItems,
  casesTitle = "Casos comuns que atendo",
  cases,
  faq,
  ctaText = "Agendar Consulta",
}: SpecialtyProps) {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Especialidades", url: `${siteConfig.url}/especialidades` },
    { name: title, url: `${siteConfig.url}/especialidades/${slug}` },
  ]);

  const jsonLdFaq = faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  const jsonLdMedicalSpecialty = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: lead,
    url: `${siteConfig.url}/especialidades/${slug}`,
    about: { "@type": "MedicalCondition", name: title },
    author: {
      "@type": "Organization",
      name: "Santuário Clínico",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMedicalSpecialty) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><Link href="/especialidades" className="hover:text-[#28113e] transition-colors">Especialidades</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">{title}</span></li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block py-1 px-3 rounded-full text-xs uppercase tracking-[0.05em] mb-6" style={{ background: accentBg + "33", color: accentBg }}>
              {tag}
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {title}
            </h1>
            <p className="text-lg md:text-xl text-[#4a454e] mb-8 max-w-xl">{lead}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/agendar"
                className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center"
              >
                {ctaText}
              </Link>
              <Link
                href="/especialidades"
                className="bg-[#e1e3e4] text-[#191c1d] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#edeeef] transition-colors duration-300 text-center"
              >
                Outras Especialidades
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-[0_20px_60px_rgb(0,0,0,0.08)]"
              style={{ background: `linear-gradient(135deg, ${accentBg}22, ${accentBg}44)` }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "7rem", color: accentBg, fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {icon}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre + Quando buscar */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sobre */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                Sobre
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {aboutTitle}
              </h2>
              <div className="space-y-4">
                {about.map((p, i) => (
                  <p key={i} className="text-[#4a454e] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Quando buscar */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">
                {whenTitle}
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Sinais de que é hora de cuidar
              </h2>
              <ul className="space-y-3">
                {whenItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a454e]">
                    <span
                      className="material-symbols-outlined text-base mt-0.5 shrink-0"
                      style={{ color: accentBg, fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como trabalho */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
              {howTitle}
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Minha abordagem para você
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItems.map((item) => (
              <div key={item.title} className="bg-[#f3f4f5] rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: accentBg, color: accentText }}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos comuns */}
      <section className="py-16 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-[#28113e] mb-8 text-center"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {casesTitle}
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cases.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 bg-white border border-[#e7e8e9] rounded-full px-4 py-2 text-sm text-[#4a454e]"
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color: accentBg, fontVariationSettings: "'FILL' 1" }}
                >
                  {c.icon}
                </span>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#28113e]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Perguntas frequentes
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details key={i} className="group bg-[#f3f4f5] rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-[#28113e] pr-4" style={{ fontFamily: "var(--font-headline)" }}>
                      {item.q}
                    </span>
                    <span className="material-symbols-outlined text-[#6b538d] shrink-0 transition-transform duration-200 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-[#4a454e] leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: accentBg + "33" }}
          >
            <span
              className="material-symbols-outlined text-3xl"
              style={{ color: accentText === "#ffffff" ? "#d9bdff" : accentText, fontVariationSettings: "'FILL' 1" }}
            >
              {icon}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Dê o primeiro passo hoje
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-2xl mx-auto">
            Agende sua consulta online de {title.toLowerCase()} pelo Santuário Clínico.
            Sem filas, sem deslocamento, com toda a atenção que você merece.
          </p>
          <Link
            href="/agendar"
            className="inline-block bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </>
  );
}
