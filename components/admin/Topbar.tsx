"use client";

import { useRouter } from "next/navigation";

interface TopbarProps {
  email: string;
}

export default function Topbar({ email }: TopbarProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="h-14 bg-white border-b border-[#e7e8e9] flex items-center justify-end px-6 gap-4">
      <span className="text-sm text-[#4a454e]">{email}</span>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 text-sm text-[#4a454e] hover:text-[#28113e] transition-colors"
        aria-label="Sair do admin"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">logout</span>
        Sair
      </button>
    </header>
  );
}
