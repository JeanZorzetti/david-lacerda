import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/.velite";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import { categoryLabels, categoryColors, formatDate, sortedPosts, getReadingTime } from "@/lib/blog";

const validCategories = ["saude-mental", "clinica-geral", "devocionais", "ministerio"] as const;
type Category = (typeof validCategories)[number];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category];
  if (!label) return {};
  return buildMetadata({
    title: `Blog — ${label}`,
    description: `Artigos sobre ${label} pelo David Lacerda Telemedicina — saúde integral e acesso a médicos qualificados via telemedicina.`,
    path: `/blog/categoria/${category}`,
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: rawCategory } = await params;
  if (!validCategories.includes(rawCategory as Category)) notFound();

  const category = rawCategory as Category;
  const label = categoryLabels[category];
  const filtered = sortedPosts(posts).filter((p) => p.category === category);
  const colors = categoryColors[category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };

  const jsonLd = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: label, url: `${siteConfig.url}/blog/categoria/${category}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><span className="text-white font-medium">{label}</span></li>
            </ol>
          </nav>
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-6 ${colors.bg} ${colors.text}`}>
            {label}
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-4"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Artigos: {label}
          </h1>
          <p className="text-[#aa8ec4]">{filtered.length} {filtered.length === 1 ? "artigo publicado" : "artigos publicados"}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-5xl text-[#ccc4cf] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
            <p className="font-semibold text-[#28113e] mb-2">Nenhum artigo nesta categoria ainda</p>
            <Link href="/blog" className="text-sm text-[#6b538d] underline hover:text-[#28113e] transition-colors">Ver todos os artigos</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => {
              const c = categoryColors[post.category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="bg-white border border-[#e7e8e9] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg hover:border-[#6b538d]/30 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-block py-0.5 px-2.5 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
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
                    <p className="text-sm text-[#4a454e] leading-relaxed mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f3f4f5]">
                      <time className="text-xs text-[#7c757e]" dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="material-symbols-outlined text-sm text-[#6b538d] group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
