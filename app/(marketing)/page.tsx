import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/marketing/Hero";
import Especialidades from "@/components/marketing/Especialidades";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatCounter } from "@/components/sections/StatCounter";
import { Reveal } from "@/components/reveal";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaWebSite, schemaFounder, schemaOrganization } from "@/lib/schema";
import { posts } from "@/.velite";
import { sortedPosts, categoryLabels, categoryColors, formatDate, getReadingTime } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Telemedicina com Propósito",
  description:
    "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo. Atendimento nacional 100% online.",
  path: "/",
});

const stats = [
  { value: 10, suffix: "+", label: "Anos de ministério", description: "Cuidado pastoral e espiritual integrados", icon: "workspace_premium" },
  { value: 98, suffix: "%", label: "Satisfação dos pacientes", description: "Baseado em feedback pós-consulta", icon: "favorite" },
  { value: 4, label: "Especialidades", description: "Saúde mental, clínica geral, nutrição e aconselhamento", icon: "medical_services" },
  { value: 50, suffix: "+", label: "Cidades atendidas", description: "Telemedicina em todo o Brasil", icon: "public" },
];

export default function Home() {
  const jsonLdWebSite = schemaWebSite();
  const jsonLdFounder = schemaFounder();
  const jsonLdOrg = schemaOrganization();

  const recentPosts = sortedPosts(posts).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFounder) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Especialidades (bento) */}
      <Especialidades />

      {/* 3. Como funciona — resumo telemedicina */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                Telemedicina
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#28113e] tracking-[-0.02em] mb-4"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Consulta com médico em 4 passos simples
              </h2>
              <p className="text-[#4a454e] max-w-xl mx-auto">
                Do agendamento ao atendimento com médico, tudo acontece online. Sem deslocamento, sem fila.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "edit_note", title: "Preencha o formulário", desc: "Nome, CPF, e-mail e especialidade desejada — leva menos de 2 minutos." },
              { step: "02", icon: "mark_email_read", title: "Receba o link", desc: "Um link de acesso chega ao seu e-mail em instantes. Válido por 72h." },
              { step: "03", icon: "video_call", title: "Entre na consulta", desc: "Acesse o portal de consulta sem precisar criar senha ou instalar nada." },
              { step: "04", icon: "receipt_long", title: "Receita por e-mail", desc: "Receita digital assinada, atestado e pedido de exame — tudo em minutos." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="bg-[#f3f4f5] rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#28113e] flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-sm text-[#d9bdff]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#7c757e]">{item.step}</span>
                  </div>
                  <h3
                    className="font-bold text-[#28113e] mb-2"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a454e] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/telemedicina"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b538d] hover:text-[#28113e] transition-colors"
              >
                Saiba mais sobre telemedicina
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Em Números */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755]" aria-label="Números do Santuário Clínico">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#d9bdff] text-xs uppercase tracking-[0.05em] mb-4">
                Em números
              </span>
              <h2
                className="text-3xl font-extrabold text-white tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Cuidado que se mede em resultados
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="[&_.w-14]:bg-white/10 [&_.text-4xl]:text-white [&_.text-sm]:text-[#d9bdff] [&_.text-xs]:text-[#aa8ec4] [&_.material-symbols-outlined]:text-[#d9bdff]">
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    description={stat.description}
                    icon={stat.icon}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sobre Dr. David — teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-2xl p-8 md:p-10 text-white flex flex-col gap-6 min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-2xl text-[#d9bdff]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#aa8ec4] uppercase tracking-widest mb-2">
                    David Lacerda
                  </p>
                  <h3
                    className="text-2xl font-extrabold text-white mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Pastor e fundador — fé e acesso à saúde, juntos.
                  </h3>
                  <p className="text-[#aa8ec4] text-sm leading-relaxed">
                    Ordenado pastor e fundador do Santuário Clínico, David Lacerda criou uma plataforma
                    onde sua comunidade acessa médicos online com o acolhimento espiritual de quem cuida da alma.
                  </p>
                </div>
                <Link
                  href="/pastor"
                  className="self-start inline-flex items-center gap-2 text-sm font-medium text-[#d9bdff] hover:text-white transition-colors"
                >
                  Conhecer o David
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em]">
                  Ciência &amp; Fé
                </span>
                <h2
                  className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em] leading-tight"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Saúde acessível com acolhimento espiritual
                </h2>
                <p className="text-[#4a454e] leading-relaxed">
                  O Santuário Clínico conecta você a médicos qualificados via telemedicina,
                  em um ambiente criado por um pastor que entende que corpo e alma precisam
                  de cuidado integral — sem abrir mão de nenhum dos dois.
                </p>
                <div className="space-y-3">
                  {[
                    "Abordagem biopsicossocial e espiritual",
                    "Respeito às crenças e valores do paciente",
                    "Medicina baseada em evidências",
                    "Atendimento humanizado, sem julgamento",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#eddcff] flex items-center justify-center shrink-0 mt-0.5">
                        <span
                          className="material-symbols-outlined text-xs text-[#6b538d]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check
                        </span>
                      </div>
                      <p className="text-sm text-[#4a454e]">{item}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ciencia-e-fe"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#6b538d] hover:text-[#28113e] transition-colors"
                >
                  Nossa filosofia de cuidado
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Últimos do Blog */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                    Blog
                  </span>
                  <h2
                    className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Últimos artigos
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#6b538d] hover:text-[#28113e] transition-colors"
                >
                  Ver todos
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post, i) => {
                const colors = categoryColors[post.category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };
                return (
                  <Reveal key={post.slug} delay={i * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="bg-[#f3f4f5] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`inline-block py-0.5 px-2.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                            {categoryLabels[post.category]}
                          </span>
                          <span className="text-xs text-[#7c757e]">{getReadingTime(post)} min</span>
                        </div>
                        <h3
                          className="font-bold text-[#28113e] mb-2 group-hover:text-[#6b538d] transition-colors flex-1 leading-snug"
                          style={{ fontFamily: "var(--font-headline)" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#4a454e] leading-relaxed mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e7e8e9]">
                          <time className="text-xs text-[#7c757e]" dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                          <span className="material-symbols-outlined text-sm text-[#6b538d] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <>
              <span
                className="material-symbols-outlined text-4xl text-[#d9bdff] mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calendar_add_on
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-4 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Pronto para ser cuidado por inteiro?
              </h2>
              <p className="text-[#aa8ec4] text-lg mb-8">
                Consultas 100% online para todo o Brasil. Agende agora em minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/agendar"
                  className="bg-white text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors"
                >
                  Agendar Consulta
                </Link>
                <Link
                  href="/telemedicina"
                  className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  Como Funciona
                </Link>
              </div>
              <p className="mt-8 text-xs text-[#7c757e]">
                Telemedicina com médicos qualificados &bull; Atendimento nacional &bull; 100% online
              </p>
            </>
          </Reveal>
        </div>
      </section>
    </>
  );
}
