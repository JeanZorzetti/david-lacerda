"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Image
          src="/logo-navbar.png"
          alt="David Lacerda Telemedicina"
          width={600}
          height={600}
          className="object-contain"
          style={{ height: "80px", width: "auto", transform: "scale(1.8)", transformOrigin: "left center" }}
          priority
        />

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center tracking-tight font-medium" style={{ fontFamily: "var(--font-headline)" }}>
          <a
            href="#especialidades"
            className="text-purple-700 font-bold border-b-2 border-purple-700 pb-1"
          >
            Especialidades
          </a>
          <a
            href="#telemedicina"
            className="text-slate-600 hover:text-purple-900 transition-all"
          >
            Telemedicina
          </a>
          <a
            href="#pastor"
            className="text-slate-600 hover:text-purple-900 transition-all"
          >
            O Pastor
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="bg-[#28113e] text-white px-6 py-2 rounded-full font-medium uppercase tracking-wider hover:opacity-80 transition-opacity duration-300 active:scale-95 text-sm">
            Agendar
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#28113e]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-8 pb-6 flex flex-col gap-4">
          <a href="#especialidades" className="text-purple-700 font-bold" onClick={() => setMobileOpen(false)}>
            Especialidades
          </a>
          <a href="#telemedicina" className="text-slate-600" onClick={() => setMobileOpen(false)}>
            Telemedicina
          </a>
          <a href="#pastor" className="text-slate-600" onClick={() => setMobileOpen(false)}>
            O Pastor
          </a>
          <button className="bg-[#28113e] text-white px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm w-full">
            Agendar
          </button>
        </div>
      )}

      <div className="w-full h-px bg-slate-100/10"></div>
    </nav>
  );
}
