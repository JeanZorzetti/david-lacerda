import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    slug: s.slug("posts"),
    description: s.string().max(300),
    date: s.isodate(),
    author: s.string().default("Dr. David Lacerda"),
    category: s.enum(["saude-mental", "clinica-geral", "devocionais", "ministerio"]),
    tags: s.array(s.string()).default([]),
    cover: s.string().optional(),
    featured: s.boolean().default(false),
    rawContent: s.raw(),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6][ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
