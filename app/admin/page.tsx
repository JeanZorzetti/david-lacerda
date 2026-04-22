import { getDb } from "@/lib/db";
import { submissions, asaasSubscriptions, asaasPayments } from "@/lib/db/schema";
import { eq, gte, sql } from "drizzle-orm";
import StatCard from "@/components/admin/StatCard";
import MrrChart from "@/components/admin/MrrChart";
import Link from "next/link";

async function getStats() {
  try {
    const db = getDb();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [leadsToday, leadsNew, activeSubscribers, overduePayments, mrrHistory] = await Promise.all([
      db.select({ count: sql<string>`count(*)` }).from(submissions).where(gte(submissions.createdAt, today)),
      db.select({ count: sql<string>`count(*)` }).from(submissions).where(eq(submissions.status, "new")),
      db.select({ count: sql<string>`count(*)` }).from(asaasSubscriptions).where(eq(asaasSubscriptions.status, "ACTIVE")),
      db.select({ count: sql<string>`count(*)`, total: sql<string>`coalesce(sum(value::numeric),0)` }).from(asaasPayments).where(eq(asaasPayments.status, "OVERDUE")),
      db.execute(sql`
        SELECT to_char(date_trunc('month', created_at), 'YYYY-MM') AS month,
               SUM(CASE WHEN status IN ('RECEIVED','RECEIVED_IN_CASH') THEN COALESCE(net_value::numeric, value::numeric) ELSE 0 END) AS mrr
        FROM asaas_payments
        WHERE created_at >= now() - interval '12 months'
        GROUP BY 1 ORDER BY 1
      `),
    ]);

    return {
      leadsToday: Number(leadsToday[0]?.count ?? 0),
      leadsNew: Number(leadsNew[0]?.count ?? 0),
      activeSubscribers: Number(activeSubscribers[0]?.count ?? 0),
      overdueCount: Number(overduePayments[0]?.count ?? 0),
      overdueTotal: Number(overduePayments[0]?.total ?? 0),
      mrrHistory: (mrrHistory.rows as { month: string; mrr: string }[]).map((r) => ({ month: r.month, mrr: Number(r.mrr) })),
    };
  } catch {
    return { leadsToday: 0, leadsNew: 0, activeSubscribers: 0, overdueCount: 0, overdueTotal: 0, mrrHistory: [] };
  }
}

function formatCurrency(v: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 }).format(v);
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
          Dashboard
        </h1>
        <p className="text-sm text-[#4a454e] mt-1">Visão geral do negócio</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="today" label="Leads hoje" value={String(stats.leadsToday)} accent="#28113e" />
        <StatCard icon="mark_email_unread" label="Leads não lidos" value={String(stats.leadsNew)} sub="Aguardando resposta" accent="#6b538d" />
        <StatCard icon="group" label="Assinantes ativos" value={String(stats.activeSubscribers)} accent="#1a5c3a" />
        <StatCard icon="warning" label="Inadimplentes" value={String(stats.overdueCount)} sub={stats.overdueTotal > 0 ? formatCurrency(stats.overdueTotal) : undefined} accent="#c0392b" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
          <h2 className="text-base font-bold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
            Receita recebida — últimos 12 meses
          </h2>
          <MrrChart data={stats.mrrHistory} />
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
          <h2 className="text-base font-bold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
            Ações rápidas
          </h2>
          <div className="space-y-2">
            {[
              { href: "/admin/leads?status=new", icon: "inbox", label: `Ver ${stats.leadsNew} leads novos` },
              { href: "/admin/financeiro", icon: "payments", label: "Ver financeiro" },
              { href: "/admin/financeiro/cobrancas", icon: "warning", label: `${stats.overdueCount} cobranças vencidas` },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#4a454e] hover:bg-[#f3f4f5] hover:text-[#28113e] transition-colors"
              >
                <span className="material-symbols-outlined text-base text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
