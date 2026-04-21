import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/.velite";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import { categoryLabels, categoryColors, formatDate, sortedPosts, getReadingTime } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Artigos sobre saúde mental, bem-estar e telemedicina — pela David Lacerda Telemedicina, fundado por David Lacerda.",
  path: "/blog",
});

const categories = ["saude-mental", "clinica-geral", "devocionais", "ministerio"] as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const jsonLd = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  const activeCategory = categoria ?? "todos";
  const all = sortedPosts(posts);
  const featured = all.find((p) => p.featured);
  const filtered =
    activeCategory === "todos"
      ? all
      : all.filter((p) => p.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white pt-16 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(217,189,255,0.3) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#aa8ec4]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><span className="text-white font-medium">Blog</span></li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#d9bdff] text-xs uppercase tracking-[0.05em] mb-6">
              Conteúdo
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Saúde e bem-estar em palavras
            </h1>
            <p className="text-lg text-[#aa8ec4]">
              Conteúdo sobre saúde, telemedicina e bem-estar para o cuidado integral da pessoa.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Featured post */}
        {featured && activeCategory === "todos" && (
          <div className="mb-14">
            <p className="text-xs font-bold text-[#6b538d] uppercase tracking-widest mb-4">Destaque</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    {(() => {
                      const c = categoryColors[featured.category] ?? { bg: "bg-white/10", text: "text-white" };
                      return (
                        <span className={`inline-block py-0.5 px-3 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                          {categoryLabels[featured.category]}
                        </span>
                      );
                    })()}
                    <span className="text-xs text-[#aa8ec4]">{getReadingTime(featured)} min de leitura</span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold leading-snug mb-3 group-hover:text-[#d9bdff] transition-colors"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#aa8ec4] text-base mb-4 leading-relaxed">{featured.description}</p>
                  <div className="flex items-center gap-3 text-sm text-[#aa8ec4]">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  </div>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-xl text-[#d9bdff]">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "todos"
                ? "bg-[#28113e] text-white"
                : "bg-[#f3f4f5] text-[#4a454e] hover:bg-[#e7e8e9]"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categoria=${cat}`}
              className={`py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#28113e] text-white"
                  : "bg-[#f3f4f5] text-[#4a454e] hover:bg-[#e7e8e9]"
              }`}
            >
              {categoryLabels[cat]}
            </Link>
          ))}
        </div>

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-[#4a454e]">
            <span className="material-symbols-outlined text-4xl text-[#ccc4cf] mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              article
            </span>
            <p className="font-semibold text-[#28113e] mb-2">Nenhum artigo nesta categoria ainda</p>
            <p className="text-sm">Em breve novos conteúdos serão publicados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => {
              const colors = categoryColors[post.category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-white border border-[#e7e8e9] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg hover:border-[#6b538d]/30 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-block py-0.5 px-2.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                        {categoryLabels[post.category]}
                      </span>
                      <span className="text-xs text-[#7c757e]">{getReadingTime(post)} min</span>
                    </div>
                    <h2
                      className="text-base font-bold text-[#28113e] leading-snug mb-2 group-hover:text-[#6b538d] transition-colors flex-1"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#4a454e] leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f3f4f5]">
                      <time className="text-xs text-[#7c757e]" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="material-symbols-outlined text-sm text-[#6b538d] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
