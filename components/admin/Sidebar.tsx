"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/leads", label: "Leads", icon: "group" },
  { href: "/admin/financeiro", label: "Financeiro", icon: "payments" },
  { href: "/admin/configuracoes", label: "Configurações", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 bg-[#28113e] min-h-screen flex flex-col">
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-white font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-headline)" }}>
          Admin
        </p>
        <p className="text-[#aa8ec4] text-xs mt-0.5">David Lacerda Telemedicina</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Menu admin">
        {navItems.map((item) => {
          const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white/15 text-white"
                  : "text-[#aa8ec4] hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#aa8ec4] hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
          Ver site
        </Link>
      </div>
    </aside>
  );
}
