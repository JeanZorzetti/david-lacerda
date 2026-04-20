import Link from "next/link";
import Image from "next/image";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-outline-variant/30 py-4 px-8">
        <Link href="/" aria-label="Voltar para a home">
          <Image
            src="/logo-navbar.png"
            alt="David Lacerda Telemedicina"
            width={160}
            height={40}
            className="object-contain"
            style={{ height: "40px", width: "auto" }}
          />
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
      <footer className="border-t border-outline-variant/30 py-6 px-8 text-center text-sm text-on-surface-variant">
        <Link href="/" className="hover:text-primary transition-colors">
          ← Voltar para o site
        </Link>
      </footer>
    </>
  );
}
