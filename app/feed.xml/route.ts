import { posts } from "@/.velite";
import { siteConfig } from "@/lib/seo";
import { sortedPosts } from "@/lib/blog";

export function GET() {
  const sorted = sortedPosts(posts);
  const baseUrl = siteConfig.url;

  const items = sorted
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>contato@davidlacerda.com.br (${post.author})</author>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.name} — Blog]]></title>
    <description><![CDATA[Artigos sobre saúde, devocionais e bem-estar pelo Santuário Clínico — fundado pelo pastor David Lacerda.]]></description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>contato@davidlacerda.com.br (${siteConfig.founder.name ?? "David Lacerda"})</managingEditor>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
