import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function Callout({ type = "info", children }: { type?: "info" | "warning" | "danger"; children: ReactNode }) {
  const styles = {
    info: { border: "border-[#6b538d]", bg: "bg-[#f3f0f7]", icon: "info", iconColor: "text-[#6b538d]" },
    warning: { border: "border-[#b45309]", bg: "bg-[#fffbeb]", icon: "warning", iconColor: "text-[#b45309]" },
    danger: { border: "border-[#ba1a1a]", bg: "bg-[#fff0f0]", icon: "error", iconColor: "text-[#ba1a1a]" },
  }[type];

  return (
    <div className={`my-6 rounded-xl border-l-4 ${styles.border} ${styles.bg} px-5 py-4 flex gap-3`}>
      <span
        className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${styles.iconColor}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {styles.icon}
      </span>
      <div className="text-sm text-[#28113e] leading-relaxed [&>p]:m-0 [&>strong]:font-bold">{children}</div>
    </div>
  );
}

function VerseCard({ reference, book, children }: { reference: string; book: string; children: ReactNode }) {
  return (
    <figure className="my-8 rounded-2xl bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white p-6 md:p-8">
      <blockquote className="text-base md:text-lg leading-relaxed text-[#e8dff0] italic mb-4 [&>p]:m-0">
        {children}
      </blockquote>
      <figcaption className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-sm text-[#aa8ec4]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          menu_book
        </span>
        <cite className="not-italic text-sm font-semibold text-[#d9bdff]">
          {reference}
        </cite>
        <span className="text-xs text-[#aa8ec4]">— {book}</span>
      </figcaption>
    </figure>
  );
}

function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-[#e7e8e9] bg-[#f3f4f5] px-5 py-4 flex gap-3">
      <span
        className="material-symbols-outlined text-xl shrink-0 mt-0.5 text-[#4a454e]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        gavel
      </span>
      <div className="text-xs text-[#4a454e] leading-relaxed [&>p]:m-0">{children}</div>
    </aside>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className="text-3xl md:text-4xl font-extrabold text-[#28113e] leading-tight tracking-[-0.02em] mt-12 mb-6 first:mt-0"
        style={{ fontFamily: "var(--font-headline)" }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-2xl font-bold text-[#28113e] leading-snug mt-10 mb-4"
        style={{ fontFamily: "var(--font-headline)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-lg font-bold text-[#28113e] mt-8 mb-3"
        style={{ fontFamily: "var(--font-headline)" }}
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[#191c1d] leading-relaxed mb-5 text-base">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-5 space-y-1.5 text-[#191c1d] pl-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-5 space-y-1.5 text-[#191c1d] pl-2">{children}</ol>
    ),
    li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
    strong: ({ children }) => <strong className="font-bold text-[#28113e]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#28113e]">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#6b538d] pl-5 italic text-[#4a454e] [&>p]:mb-0">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#6b538d] underline underline-offset-2 hover:text-[#28113e] transition-colors"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-10 border-[#e7e8e9]" />,
    code: ({ children }) => (
      <code className="text-sm bg-[#f3f4f5] text-[#28113e] rounded px-1.5 py-0.5 font-mono">
        {children}
      </code>
    ),
    Callout,
    VerseCard,
    Disclaimer,
    ...components,
  };
}
