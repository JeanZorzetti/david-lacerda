"use client";

import { useState } from "react";

export default function EmpresasForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      colaboradores: (form.elements.namedItem("colaboradores") as HTMLSelectElement).value,
      honeypot: (form.elements.namedItem("honeypot") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/empresas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Não foi possível enviar. Tente novamente ou escreva para contato@davidlacerda.com.br");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-[#d9f3e8] rounded-2xl p-10 text-center">
        <span
          className="material-symbols-outlined text-5xl text-[#1a5c3a] mb-4 block"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          check_circle
        </span>
        <h3 className="text-xl font-bold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
          Proposta solicitada!
        </h3>
        <p className="text-[#4a454e]">Retornaremos com uma proposta personalizada em até 1 dia útil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#f3f4f5] rounded-2xl p-8 space-y-5">
      <input type="text" name="honeypot" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="empresa" className="block text-sm font-semibold text-[#28113e] mb-1.5">
            Nome da Empresa *
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            placeholder="Ex: Empresa XYZ Ltda"
            className="w-full bg-white border border-[#e7e8e9] rounded-xl px-4 py-3 text-sm text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 focus:ring-[#6b538d]/40"
          />
        </div>
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-[#28113e] mb-1.5">
            Seu Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Nome do responsável"
            className="w-full bg-white border border-[#e7e8e9] rounded-xl px-4 py-3 text-sm text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 focus:ring-[#6b538d]/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#28113e] mb-1.5">
            E-mail corporativo *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="voce@empresa.com.br"
            className="w-full bg-white border border-[#e7e8e9] rounded-xl px-4 py-3 text-sm text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 focus:ring-[#6b538d]/40"
          />
        </div>
        <div>
          <label htmlFor="colaboradores" className="block text-sm font-semibold text-[#28113e] mb-1.5">
            Nº de colaboradores *
          </label>
          <select
            id="colaboradores"
            name="colaboradores"
            required
            className="w-full bg-white border border-[#e7e8e9] rounded-xl px-4 py-3 text-sm text-[#191c1d] focus:outline-none focus:ring-2 focus:ring-[#6b538d]/40"
          >
            <option value="">Selecione</option>
            <option value="1-10">1 a 10</option>
            <option value="11-50">11 a 50</option>
            <option value="51-200">51 a 200</option>
            <option value="201-500">201 a 500</option>
            <option value="500+">Mais de 500</option>
          </select>
        </div>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Solicitar Proposta Gratuita"}
      </button>
    </form>
  );
}
