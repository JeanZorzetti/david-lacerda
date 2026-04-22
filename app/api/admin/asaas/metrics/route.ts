import { NextResponse } from "next/server";
import { getMrr, getActiveSubscribersCount, getOverdueCount, getChurnRate, getMrrHistory } from "@/lib/asaas/metrics";

export async function GET() {
  try {
    const [mrr, subscribers, overdue, churn, history] = await Promise.all([
      getMrr(),
      getActiveSubscribersCount(),
      getOverdueCount(),
      getChurnRate(),
      getMrrHistory(),
    ]);

    return NextResponse.json({
      mrr,
      subscribers,
      arpu: subscribers > 0 ? mrr / subscribers : 0,
      overdue,
      churnRate: churn,
      history,
    });
  } catch (err) {
    console.error("[asaas/metrics]", err);
    return NextResponse.json({ message: "Erro ao carregar métricas" }, { status: 500 });
  }
}
