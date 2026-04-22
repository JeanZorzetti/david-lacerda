import { getDb } from "@/lib/db";
import { asaasSubscriptions, asaasCustomers } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import AsaasStatusBadge from "@/components/admin/AsaasStatusBadge";
import Link from "next/link";

function formatCurrency(v: number | string) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(v));
}

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Intl.DateTimeFormat("pt-BR").format(new Date(d + "T00:00:00"));
}

const cycleLabels: Record<string, string> = {
  MONTHLY: "Mensal", YEARLY: "Anual", QUARTERLY: "Trimestral",
  SEMIANNUALLY: "Semestral", WEEKLY: "Semanal", BIWEEKLY: "Quinzenal",
};

export default async function AssinaturasPage() {
  let rows: { sub: typeof asaasSubscriptions.$inferSelect; customer: typeof asaasCustomers.$inferSelect | null }[] = [];

  try {
    const db = getDb();
    const data = await db
      .select({ sub: asaasSubscriptions, customer: asaasCustomers })
      .from(asaasSubscriptions)
      .leftJoin(asaasCustomers, eq(asaasSubscriptions.customerId, asaasCustomers.id))
      .orderBy(desc(asaasSubscriptions.createdAt));
    rows = data;
  } catch { /* empty */ }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/financeiro" className="text-[#6b538d] hover:underline text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          Financeiro
        </Link>
        <span className="text-[#7c757e]">/</span>
        <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>Assinaturas</h1>
      </div>

      <div className="bg-white rounded-2xl border border-[#e7e8e9] shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <div className="py-16 text-center text-[#7c757e] text-sm">
            Nenhuma assinatura encontrada. Sincronize o AsaaS primeiro.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7e8e9] bg-[#f3f4f5]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Cliente</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Plano</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Valor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Próx. venc.</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f5]">
                {rows.map(({ sub, customer }) => (
                  <tr key={sub.id} className="hover:bg-[#fafafa] transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#28113e]">{customer?.name ?? "—"}</p>
                      <p className="text-xs text-[#7c757e]">{customer?.email ?? "—"}</p>
                    </td>
                    <td className="px-4 py-3 text-[#4a454e]">{cycleLabels[sub.cycle] ?? sub.cycle}</td>
                    <td className="px-4 py-3 font-semibold text-[#28113e]">{formatCurrency(sub.value)}</td>
                    <td className="px-4 py-3 text-[#4a454e] whitespace-nowrap">{formatDate(sub.nextDueDate)}</td>
                    <td className="px-4 py-3"><AsaasStatusBadge status={sub.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
