import type { Post } from "@/.velite";

export const categoryLabels: Record<string, string> = {
  "saude-mental": "Saúde Mental",
  "clinica-geral": "Clínica Geral",
  "devocionais": "Bem-Estar",
  "ministerio": "Saúde e Sociedade",
};

export const categoryColors: Record<string, { bg: string; text: string }> = {
  "saude-mental": { bg: "bg-[#eddcff]", text: "text-[#523b74]" },
  "clinica-geral": { bg: "bg-[#d9f3e8]", text: "text-[#1a5c3a]" },
  "devocionais": { bg: "bg-[#fff3cd]", text: "text-[#7c5c00]" },
  "ministerio": { bg: "bg-[#fde8e8]", text: "text-[#8c1a1a]" },
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function sortedPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getReadingTime(post: Post): number {
  const words = post.rawContent.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
