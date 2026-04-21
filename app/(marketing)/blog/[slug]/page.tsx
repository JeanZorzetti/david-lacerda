import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/.velite";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import { categoryLabels, categoryColors, formatDate, sortedPosts, getReadingTime } from "@/lib/blog";
import { MDXContent } from "@/components/mdx-content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const colors = categoryColors[post.category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };
  const related = sortedPosts(posts)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white pt-16 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(217,189,255,0.3) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#aa8ec4]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><span className="text-white font-medium truncate max-w-[200px]">{post.title}</span></li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
              {categoryLabels[post.category]}
            </span>
            <span className="text-[#aa8ec4] text-sm">{getReadingTime(post)} min de leitura</span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {post.title}
          </h1>

          <p className="text-lg text-[#aa8ec4] mb-8">{post.description}</p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#6b538d] flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-white" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author}</p>
              <time className="text-xs text-[#aa8ec4]" dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
        <article>
          <MDXContent code={post.body as unknown as string} />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#e7e8e9]">
            <p className="text-xs font-bold text-[#28113e] uppercase tracking-widest mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="py-1 px-3 rounded-full bg-[#f3f4f5] text-xs text-[#4a454e]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author bio */}
        <div className="mt-12 bg-[#f3f4f5] rounded-2xl p-6 flex gap-5 items-start">
          <div className="w-14 h-14 rounded-full bg-[#28113e] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl text-[#d9bdff]" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          </div>
          <div>
            <p className="font-bold text-[#28113e] mb-1" style={{ fontFamily: "var(--font-headline)" }}>
              {post.author}
            </p>
            <p className="text-sm text-[#4a454e] leading-relaxed mb-3">
              Fundador do Santuário Clínico. Conecta pessoas a médicos qualificados via telemedicina, com excelência clínica e cuidado humanizado.
            </p>
            <Link href="/pastor" className="text-sm text-[#6b538d] font-medium hover:text-[#28113e] transition-colors inline-flex items-center gap-1">
              Conheça o David
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-2xl p-8 text-center text-white">
          <span
            className="material-symbols-outlined text-3xl text-[#d9bdff] mb-3 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            calendar_month
          </span>
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-headline)" }}>
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-[#aa8ec4] text-sm mb-6">
            Agende uma consulta online e receba cuidado integral — corpo, mente e espírito.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 bg-white text-[#28113e] px-8 py-3 rounded-full font-medium text-sm hover:bg-[#d9bdff] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">calendar_add_on</span>
            Agendar Consulta
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <p className="text-xs font-bold text-[#28113e] uppercase tracking-widest mb-6">Artigos relacionados</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => {
                const c = categoryColors[p.category] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border border-[#e7e8e9] rounded-xl p-5 hover:shadow-md hover:border-[#6b538d]/30 transition-all">
                    <span className={`inline-block py-0.5 px-2 rounded-full text-xs font-semibold ${c.bg} ${c.text} mb-2`}>
                      {categoryLabels[p.category]}
                    </span>
                    <p className="text-sm font-bold text-[#28113e] group-hover:text-[#6b538d] transition-colors leading-snug" style={{ fontFamily: "var(--font-headline)" }}>
                      {p.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
