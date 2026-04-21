"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/pacientes", label: "Para Pacientes" },
  { href: "/empresas", label: "Para Empresas" },
  { href: "/protocolos", label: "Protocolos" },
  { href: "/planos", label: "Planos" },
];

const maisLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [maisOpen, setMaisOpen] = useState(false);
  const [mobileMaisOpen, setMobileMaisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const maisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMaisOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (maisRef.current && !maisRef.current.contains(e.target as Node)) {
        setMaisOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-xl"
      }`}
      aria-label="Navegação principal"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-2.5 max-w-7xl mx-auto">
        <Link href="/" aria-label="Voltar para a home" className="shrink-0">
          <Image
            src="/3.png"
            alt="David Lacerda Telemedicina"
            width={2000}
            height={624}
            className="object-contain"
            style={{ height: "48px", width: "auto" }}
            unoptimized
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center gap-1 tracking-tight font-medium"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {mainLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  isActive
                    ? "bg-[#28113e] text-white font-bold"
                    : "text-[#4a454e] hover:text-[#28113e] hover:bg-[#f3f0ff]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Dropdown Mais */}
          <div className="relative" ref={maisRef}>
            <button
              onClick={() => setMaisOpen((o) => !o)}
              aria-expanded={maisOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                maisOpen
                  ? "bg-[#f3f0ff] text-[#28113e]"
                  : "text-[#4a454e] hover:text-[#28113e] hover:bg-[#f3f0ff]"
              }`}
            >
              Mais
              <span
                className="material-symbols-outlined text-base transition-transform duration-200"
                style={{ transform: maisOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-[0_16px_48px_rgb(0,0,0,0.12)] border border-[#e7e8e9] overflow-hidden transition-all duration-200 origin-top-right ${
                maisOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}
              role="menu"
            >
              {maisLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#f3f0ff] text-[#28113e]"
                        : "text-[#4a454e] hover:bg-[#f3f0ff] hover:text-[#28113e]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
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
          mobileOpen ? "max-h-[32rem] pb-6" : "max-h-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 pt-2">
          {mainLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`py-2.5 px-3 rounded-xl font-medium text-sm ${
                  isActive ? "bg-[#f3f0ff] text-[#28113e] font-bold" : "text-[#4a454e]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mais — expandable mobile */}
          <button
            onClick={() => setMobileMaisOpen((o) => !o)}
            className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-[#4a454e] w-full"
            aria-expanded={mobileMaisOpen}
          >
            <span>Mais</span>
            <span
              className="material-symbols-outlined text-base transition-transform duration-200"
              style={{ transform: mobileMaisOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            >
              expand_more
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              mobileMaisOpen ? "max-h-60" : "max-h-0"
            }`}
          >
            {maisLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 py-2.5 pl-6 pr-3 text-sm text-[#4a454e] font-medium hover:text-[#28113e]"
              >
                <span className="material-symbols-outlined text-sm text-[#6b538d]" aria-hidden="true">
                  chevron_right
                </span>
                {link.label}
              </Link>
            ))}
          </div>

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
