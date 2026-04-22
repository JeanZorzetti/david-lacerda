import { getDb } from "@/lib/db";
import { asaasSubscriptions, asaasPayments } from "@/lib/db/schema";
import { eq, and, gte, lt, sql } from "drizzle-orm";

export async function getMrr(): Promise<number> {
  const db = getDb();
  const rows = await db
    .select({ cycle: asaasSubscriptions.cycle, value: asaasSubscriptions.value })
    .from(asaasSubscriptions)
    .where(eq(asaasSubscriptions.status, "ACTIVE"));

  return rows.reduce((sum, r) => {
    const v = Number(r.value);
    if (r.cycle === "YEARLY") return sum + v / 12;
    if (r.cycle === "MONTHLY") return sum + v;
    if (r.cycle === "QUARTERLY") return sum + v / 3;
    if (r.cycle === "SEMIANNUALLY") return sum + v / 6;
    if (r.cycle === "WEEKLY") return sum + v * 4.33;
    return sum + v;
  }, 0);
}

export async function getActiveSubscribersCount(): Promise<number> {
  const db = getDb();
  const [row] = await db
    .select({ count: sql<string>`count(*)` })
    .from(asaasSubscriptions)
    .where(eq(asaasSubscriptions.status, "ACTIVE"));
  return Number(row?.count ?? 0);
}

export async function getOverdueCount(): Promise<{ count: number; total: number }> {
  const db = getDb();
  const [row] = await db
    .select({
      count: sql<string>`count(*)`,
      total: sql<string>`coalesce(sum(value::numeric), 0)`,
    })
    .from(asaasPayments)
    .where(eq(asaasPayments.status, "OVERDUE"));
  return { count: Number(row?.count ?? 0), total: Number(row?.total ?? 0) };
}

export async function getMrrHistory(): Promise<{ month: string; mrr: number }[]> {
  const db = getDb();
  const rows = await db.execute(sql`
    SELECT
      to_char(date_trunc('month', created_at), 'YYYY-MM') AS month,
      SUM(CASE WHEN status = 'RECEIVED' OR status = 'RECEIVED_IN_CASH' THEN net_value::numeric ELSE 0 END) AS mrr
    FROM asaas_payments
    WHERE created_at >= now() - interval '12 months'
    GROUP BY 1
    ORDER BY 1
  `);
  return (rows.rows as { month: string; mrr: string }[]).map((r) => ({
    month: r.month,
    mrr: Number(r.mrr),
  }));
}

export async function getChurnRate(): Promise<number> {
  const db = getDb();
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const [cancelled] = await db
    .select({ count: sql<string>`count(*)` })
    .from(asaasSubscriptions)
    .where(
      and(
        eq(asaasSubscriptions.status, "INACTIVE"),
        gte(asaasSubscriptions.updatedAt, startOfMonth)
      )
    );
  const active = await getActiveSubscribersCount();
  const total = active + Number(cancelled?.count ?? 0);
  if (total === 0) return 0;
  return Number(cancelled?.count ?? 0) / total;
}
