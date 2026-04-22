import { getDb } from "@/lib/db";
import { submissions } from "@/lib/db/schema";
import { eq, desc, and, sql } from "drizzle-orm";
import Link from "next/link";

const typeLabels: Record<string, string> = {
  contact: "Contato",
  empresas: "Empresa",
  agendar: "Agendamento",
  paciente_acesso: "Acesso Paciente",
};

const statusConfig: Record<string, { label: string; color: string }> = {
  new: { label: "Novo", color: "bg-[#eddcff] text-[#523b74]" },
  read: { label: "Lido", color: "bg-[#d9f3e8] text-[#1a5c3a]" },
  archived: { label: "Arquivado", color: "bg-[#e7e8e9] text-[#4a454e]" },
};

function formatDate(d: Date | string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(d));
}

interface Props {
  searchParams: Promise<{ type?: string; status?: string; page?: string }>;
}

export default async function LeadsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page ?? 1));
  const limit = 25;
  const offset = (page - 1) * limit;

  const db = getDb();

  const conditions = [];
  if (sp.type && ["contact", "empresas", "agendar", "paciente_acesso"].includes(sp.type)) {
    conditions.push(eq(submissions.type, sp.type as "contact" | "empresas" | "agendar" | "paciente_acesso"));
  }
  if (sp.status && ["new", "read", "archived"].includes(sp.status)) {
    conditions.push(eq(submissions.status, sp.status as "new" | "read" | "archived"));
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  let rows: typeof submissions.$inferSelect[] = [];
  let total = 0;

  try {
    const [data, [countRow]] = await Promise.all([
      db.select().from(submissions).where(where).orderBy(desc(submissions.createdAt)).limit(limit).offset(offset),
      db.select({ count: sql<string>`count(*)` }).from(submissions).where(where),
    ]);
    rows = data;
    total = Number(countRow?.count ?? 0);
  } catch {
    // DB not configured — show empty state
  }

  const totalPages = Math.ceil(total / limit);

  function buildUrl(params: Record<string, string | undefined>) {
    const p = new URLSearchParams();
    const merged = { type: sp.type, status: sp.status, ...params };
    Object.entries(merged).forEach(([k, v]) => { if (v) p.set(k, v); });
    return `/admin/leads?${p.toString()}`;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
            Leads
          </h1>
          <p className="text-sm text-[#4a454e] mt-1">{total} registro{total !== 1 ? "s" : ""} encontrado{total !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-[#e7e8e9] shadow-sm flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="filter-type" className="text-xs font-medium text-[#4a454e]">Tipo</label>
          <select
            id="filter-type"
            defaultValue={sp.type ?? ""}
            onChange={(e) => {
              const url = buildUrl({ type: e.target.value || undefined, page: "1" });
              window.location.href = url;
            }}
            className="border border-[#e7e8e9] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b538d]"
          >
            <option value="">Todos</option>
            {Object.entries(typeLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="filter-status" className="text-xs font-medium text-[#4a454e]">Status</label>
          <select
            id="filter-status"
            defaultValue={sp.status ?? ""}
            onChange={(e) => {
              const url = buildUrl({ status: e.target.value || undefined, page: "1" });
              window.location.href = url;
            }}
            className="border border-[#e7e8e9] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b538d]"
          >
            <option value="">Todos</option>
            {Object.entries(statusConfig).map(([v, c]) => <option key={v} value={v}>{c.label}</option>)}
          </select>
        </div>
        {(sp.type || sp.status) && (
          <Link href="/admin/leads" className="text-sm text-[#6b538d] hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">close</span>
            Limpar filtros
          </Link>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#e7e8e9] shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <div className="py-16 text-center text-[#7c757e] text-sm">
            {total === 0 ? "Nenhum lead cadastrado ainda." : "Nenhum resultado para os filtros aplicados."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7e8e9] bg-[#f3f4f5]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Nome / E-mail</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Tipo</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Data</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f5]">
                {rows.map((row) => {
                  const status = statusConfig[row.status] ?? { label: row.status, color: "bg-gray-50 text-gray-600" };
                  return (
                    <tr key={row.id} className="hover:bg-[#fafafa] transition-colors">
                      <td className="px-4 py-3">
                        <p className="font-medium text-[#28113e]">{row.name ?? "—"}</p>
                        <p className="text-xs text-[#7c757e]">{row.email ?? "—"}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#4a454e]">{typeLabels[row.type] ?? row.type}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${status.color}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#7c757e] text-xs whitespace-nowrap">
                        {formatDate(row.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/leads/${row.id}`}
                          className="text-[#6b538d] hover:underline text-xs font-medium"
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-[#4a454e]">
          <span>Página {page} de {totalPages}</span>
          <div className="flex gap-2">
            {page > 1 && (
              <Link href={buildUrl({ page: String(page - 1) })} className="px-4 py-2 rounded-full border border-[#e7e8e9] hover:bg-white transition-colors">
                Anterior
              </Link>
            )}
            {page < totalPages && (
              <Link href={buildUrl({ page: String(page + 1) })} className="px-4 py-2 rounded-full bg-[#28113e] text-white hover:bg-[#3e2755] transition-colors">
                Próxima
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
