import type { MetadataRoute } from "next";
import { posts } from "@/.velite";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidlacerda.com.br";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/telemedicina", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pastor", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/especialidades", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/especialidades/saude-mental", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/especialidades/clinica-geral", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/especialidades/nutricao", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/especialidades/aconselhamento-espiritual", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/ciencia-e-fe", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contato", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/agendar", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/termos", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const postEntries = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
