"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";

const typeLabels: Record<string, string> = {
  contact: "Contato",
  empresas: "Empresa",
  agendar: "Agendamento",
  paciente_acesso: "Acesso Paciente",
};

const statusOptions = [
  { value: "new", label: "Novo" },
  { value: "read", label: "Lido" },
  { value: "archived", label: "Arquivado" },
];

interface Submission {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  name: string | null;
  email: string | null;
  phone: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
  readAt: string | null;
}

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [lead, setLead] = useState<Submission | null>(null);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/leads/${id}`)
      .then((r) => r.json())
      .then((data: Submission) => {
        setLead(data);
        setNotes(data.notes ?? "");
        setStatus(data.status);
      })
      .catch(console.error);
  }, [id]);

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      if (res.ok) {
        const updated: Submission = await res.json();
        setLead(updated);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } finally {
      setSaving(false);
    }
  }

  if (!lead) {
    return (
      <div className="flex items-center justify-center py-24 text-[#7c757e] text-sm">
        Carregando...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/leads" className="text-[#6b538d] hover:underline text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          Leads
        </Link>
        <span className="text-[#7c757e]">/</span>
        <span className="text-sm text-[#28113e] font-medium">{lead.name ?? lead.email ?? lead.id.slice(0, 8)}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
            <h1 className="text-lg font-extrabold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
              {lead.name ?? "Lead sem nome"}
            </h1>
            <dl className="space-y-3 text-sm">
              {lead.email && (
                <div className="flex gap-3">
                  <dt className="w-24 text-[#7c757e] shrink-0">E-mail</dt>
                  <dd><a href={`mailto:${lead.email}`} className="text-[#6b538d] hover:underline">{lead.email}</a></dd>
                </div>
              )}
              {lead.phone && (
                <div className="flex gap-3">
                  <dt className="w-24 text-[#7c757e] shrink-0">Telefone</dt>
                  <dd>{lead.phone}</dd>
                </div>
              )}
              <div className="flex gap-3">
                <dt className="w-24 text-[#7c757e] shrink-0">Tipo</dt>
                <dd>{typeLabels[lead.type] ?? lead.type}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 text-[#7c757e] shrink-0">Data</dt>
                <dd>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "full", timeStyle: "short" }).format(new Date(lead.createdAt))}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
            <h2 className="text-sm font-bold text-[#28113e] mb-3">Dados do formulário</h2>
            <pre className="text-xs text-[#4a454e] bg-[#f3f4f5] rounded-xl p-4 overflow-auto whitespace-pre-wrap">
              {JSON.stringify(lead.payload, null, 2)}
            </pre>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-[#e7e8e9] shadow-sm space-y-4">
            <div>
              <label htmlFor="status-select" className="block text-xs font-semibold text-[#28113e] mb-1.5 uppercase tracking-wider">Status</label>
              <select
                id="status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-[#e7e8e9] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b538d]"
              >
                {statusOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="notes-textarea" className="block text-xs font-semibold text-[#28113e] mb-1.5 uppercase tracking-wider">Observações</label>
              <textarea
                id="notes-textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={5}
                className="w-full border border-[#e7e8e9] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b538d] resize-none"
                placeholder="Anotações internas..."
              />
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full bg-[#28113e] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#3e2755] transition-colors disabled:opacity-60"
            >
              {saved ? "Salvo!" : saving ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
