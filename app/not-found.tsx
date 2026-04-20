import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | Santuário Clínico",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-[#eddcff] flex items-center justify-center mx-auto mb-8">
          <span
            className="material-symbols-outlined text-4xl text-[#28113e]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            search_off
          </span>
        </div>
        <h1
          className="text-5xl font-extrabold text-[#28113e] mb-3"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          404
        </h1>
        <h2
          className="text-xl font-bold text-[#28113e] mb-4"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Página não encontrada
        </h2>
        <p className="text-[#4a454e] mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte à página inicial.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#28113e] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-[#3e2755] transition-colors"
          >
            Voltar para home
          </Link>
          <Link
            href="/agendar"
            className="border border-[#28113e] text-[#28113e] px-8 py-3 rounded-full font-medium text-sm hover:bg-[#f3f4f5] transition-colors"
          >
            Agendar consulta
          </Link>
        </div>
      </div>
    </main>
  );
}
