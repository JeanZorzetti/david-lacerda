import { getDb } from "@/lib/db";
import { asaasPayments, asaasCustomers } from "@/lib/db/schema";
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

const billingLabels: Record<string, string> = {
  BOLETO: "Boleto", CREDIT_CARD: "Cartão", PIX: "PIX", UNDEFINED: "—",
};

interface Props {
  searchParams: Promise<{ status?: string; page?: string }>;
}

export default async function CobrancasPage({ searchParams }: Props) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page ?? 1));
  const limit = 30;
  const offset = (page - 1) * limit;

  let rows: { payment: typeof asaasPayments.$inferSelect; customer: typeof asaasCustomers.$inferSelect | null }[] = [];
  let total = 0;

  try {
    const db = getDb();
    const where = sp.status ? eq(asaasPayments.status, sp.status) : undefined;
    const data = await db
      .select({ payment: asaasPayments, customer: asaasCustomers })
      .from(asaasPayments)
      .leftJoin(asaasCustomers, eq(asaasPayments.customerId, asaasCustomers.id))
      .where(where)
      .orderBy(desc(asaasPayments.dueDate))
      .limit(limit)
      .offset(offset);
    rows = data;
    total = rows.length; // simplified for now
  } catch { /* empty */ }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/financeiro" className="text-[#6b538d] hover:underline text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          Financeiro
        </Link>
        <span className="text-[#7c757e]">/</span>
        <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>Cobranças</h1>
      </div>

      <div className="bg-white rounded-2xl border border-[#e7e8e9] shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <div className="py-16 text-center text-[#7c757e] text-sm">
            Nenhuma cobrança encontrada. Sincronize o AsaaS primeiro.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e7e8e9] bg-[#f3f4f5]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Cliente</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Valor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Pagamento</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Vencimento</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#4a454e] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f5]">
                {rows.map(({ payment, customer }) => (
                  <tr key={payment.id} className="hover:bg-[#fafafa] transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#28113e]">{customer?.name ?? "—"}</p>
                      <p className="text-xs text-[#7c757e]">{customer?.email ?? "—"}</p>
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#28113e]">{formatCurrency(payment.value)}</td>
                    <td className="px-4 py-3 text-[#4a454e]">{billingLabels[payment.billingType] ?? payment.billingType}</td>
                    <td className="px-4 py-3 text-[#4a454e] whitespace-nowrap">{formatDate(payment.dueDate)}</td>
                    <td className="px-4 py-3"><AsaasStatusBadge status={payment.status} /></td>
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
