import { NextResponse } from "next/server";
import { syncAll } from "@/lib/asaas/sync";

export async function POST() {
  try {
    const result = await syncAll();
    return NextResponse.json({ message: "Sincronização concluída", ...result });
  } catch (err) {
    console.error("[asaas/sync]", err);
    const msg = err instanceof Error ? err.message : "Erro ao sincronizar";
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
