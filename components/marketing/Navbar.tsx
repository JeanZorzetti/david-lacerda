"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/telemedicina", label: "Telemedicina" },
  { href: "/pastor", label: "O Pastor" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-xl"
      }`}
      aria-label="Navegação principal"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" aria-label="Voltar para a home" className="shrink-0">
          <Image
            src="/logo-navbar.png"
            alt="David Lacerda Telemedicina"
            width={600}
            height={600}
            className="object-contain"
            style={{ height: "80px", width: "auto", transform: "scale(1.8)", transformOrigin: "left center" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex space-x-6 items-center tracking-tight font-medium"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all text-sm ${
                  isActive
                    ? "text-[#28113e] font-bold border-b-2 border-[#28113e] pb-0.5"
                    : "text-[#4a454e] hover:text-[#28113e]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/agendar"
            className="bg-[#28113e] text-white px-6 py-2 rounded-full font-medium uppercase tracking-wider hover:opacity-80 transition-opacity duration-300 active:scale-95 text-sm"
          >
            Agendar
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#28113e] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white/95 backdrop-blur-xl px-6 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-3 pt-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 font-medium text-sm ${
                  isActive ? "text-[#28113e] font-bold" : "text-[#4a454e]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/agendar"
            className="bg-[#28113e] text-white px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm text-center mt-2"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100/10" aria-hidden="true" />
    </nav>
  );
}
