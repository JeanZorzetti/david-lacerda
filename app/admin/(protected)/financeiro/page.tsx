import StatCard from "@/components/admin/StatCard";
import MrrChart from "@/components/admin/MrrChart";
import Link from "next/link";
import { getMrr, getActiveSubscribersCount, getOverdueCount, getChurnRate, getMrrHistory } from "@/lib/asaas/metrics";

async function getFinanceiroStats() {
  try {
    const [mrr, subscribers, overdue, churn, history] = await Promise.all([
      getMrr(), getActiveSubscribersCount(), getOverdueCount(), getChurnRate(), getMrrHistory(),
    ]);
    return { mrr, subscribers, overdue, churn, history, error: false };
  } catch {
    return { mrr: 0, subscribers: 0, overdue: { count: 0, total: 0 }, churn: 0, history: [], error: true };
  }
}

function formatCurrency(v: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 }).format(v);
}

function formatPercent(v: number) {
  return new Intl.NumberFormat("pt-BR", { style: "percent", minimumFractionDigits: 1 }).format(v);
}

export default async function FinanceiroPage() {
  const stats = await getFinanceiroStats();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
            Financeiro
          </h1>
          <p className="text-sm text-[#4a454e] mt-1">Dados sincronizados via AsaaS</p>
        </div>
        <SyncButton />
      </div>

      {stats.error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm px-4 py-3 rounded-xl">
          AsaaS não configurado ou banco indisponível. Configure ASAAS_API_KEY e DATABASE_URL.
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="trending_up" label="MRR" value={formatCurrency(stats.mrr)} sub="Receita mensal recorrente" accent="#1a5c3a" />
        <StatCard icon="group" label="Assinantes ativos" value={String(stats.subscribers)} accent="#28113e" />
        <StatCard icon="person" label="ARPU" value={stats.subscribers > 0 ? formatCurrency(stats.mrr / stats.subscribers) : "—"} sub="Ticket médio por assinante" accent="#6b538d" />
        <StatCard icon="warning" label="Churn" value={formatPercent(stats.churn)} sub={`${stats.overdue.count} cobranças vencidas`} accent="#c0392b" />
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
        <h2 className="text-base font-bold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
          Receita recebida — últimos 12 meses
        </h2>
        <MrrChart data={stats.history} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/financeiro/cobrancas" className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm hover:border-[#6b538d] transition-colors flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">receipt_long</span>
          <div>
            <p className="font-bold text-[#28113e]">Cobranças</p>
            <p className="text-sm text-[#4a454e]">Ver todas as cobranças</p>
          </div>
        </Link>
        <Link href="/admin/financeiro/assinaturas" className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm hover:border-[#6b538d] transition-colors flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">autorenew</span>
          <div>
            <p className="font-bold text-[#28113e]">Assinaturas</p>
            <p className="text-sm text-[#4a454e]">{stats.subscribers} assinante{stats.subscribers !== 1 ? "s" : ""} ativo{stats.subscribers !== 1 ? "s" : ""}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function SyncButton() {
  return (
    <form action={async () => {
      "use server";
      const { syncAll } = await import("@/lib/asaas/sync");
      await syncAll().catch(console.error);
    }}>
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2 bg-white border border-[#e7e8e9] rounded-full text-sm font-medium text-[#28113e] hover:bg-[#f3f4f5] transition-colors"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">sync</span>
        Sincronizar AsaaS
      </button>
    </form>
  );
}
