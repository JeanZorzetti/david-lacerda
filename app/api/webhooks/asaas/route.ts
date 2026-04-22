import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { asaasWebhookEvents, asaasCustomers, asaasSubscriptions, asaasPayments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import type { AsaasWebhookEvent } from "@/lib/asaas/types";

export async function POST(req: NextRequest) {
  const token = req.headers.get("asaas-access-token");
  const expected = process.env.ASAAS_WEBHOOK_TOKEN;
  if (!expected || token !== expected) {
    return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
  }

  let payload: AsaasWebhookEvent;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ message: "Corpo inválido" }, { status: 400 });
  }

  const db = getDb();
  const [event] = await db
    .insert(asaasWebhookEvents)
    .values({ eventType: payload.event, payload: payload as unknown as Record<string, unknown> })
    .returning();

  try {
    const eventType = payload.event ?? "";

    if (eventType.startsWith("PAYMENT_") && payload.payment) {
      const p = payload.payment;
      let customerId: string | null = null;

      const [existingCustomer] = await db
        .select({ id: asaasCustomers.id })
        .from(asaasCustomers)
        .where(eq(asaasCustomers.asaasId, p.customer))
        .limit(1);

      if (existingCustomer) {
        customerId = existingCustomer.id;
      }

      if (customerId) {
        let subscriptionId: string | null = null;
        if (p.subscription) {
          const [sub] = await db
            .select({ id: asaasSubscriptions.id })
            .from(asaasSubscriptions)
            .where(eq(asaasSubscriptions.asaasId, p.subscription))
            .limit(1);
          subscriptionId = sub?.id ?? null;
        }

        await db
          .insert(asaasPayments)
          .values({
            asaasId: p.id,
            customerId,
            subscriptionId,
            value: String(p.value),
            netValue: p.netValue != null ? String(p.netValue) : null,
            status: p.status,
            billingType: p.billingType,
            dueDate: p.dueDate,
            paymentDate: p.paymentDate ?? null,
            createdAt: new Date(p.dateCreated),
            updatedAt: new Date(),
          })
          .onConflictDoUpdate({
            target: asaasPayments.asaasId,
            set: { status: p.status, paymentDate: p.paymentDate ?? null, netValue: p.netValue != null ? String(p.netValue) : null, updatedAt: new Date() },
          });
      }
    }

    if (eventType.startsWith("SUBSCRIPTION_") && payload.subscription) {
      const s = payload.subscription;
      const [customer] = await db
        .select({ id: asaasCustomers.id })
        .from(asaasCustomers)
        .where(eq(asaasCustomers.asaasId, s.customer))
        .limit(1);

      if (customer) {
        await db
          .insert(asaasSubscriptions)
          .values({
            asaasId: s.id,
            customerId: customer.id,
            value: String(s.value),
            cycle: s.cycle,
            status: s.status,
            nextDueDate: s.nextDueDate ?? null,
            description: s.description ?? null,
            createdAt: new Date(s.dateCreated),
            updatedAt: new Date(),
          })
          .onConflictDoUpdate({
            target: asaasSubscriptions.asaasId,
            set: { status: s.status, nextDueDate: s.nextDueDate ?? null, value: String(s.value), updatedAt: new Date() },
          });
      }
    }

    await db
      .update(asaasWebhookEvents)
      .set({ processed: true })
      .where(eq(asaasWebhookEvents.id, event.id));

    return NextResponse.json({ received: true });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    await db
      .update(asaasWebhookEvents)
      .set({ error: errorMsg })
      .where(eq(asaasWebhookEvents.id, event.id));
    console.error("[webhook/asaas]", err);
    return NextResponse.json({ message: "Erro ao processar webhook" }, { status: 500 });
  }
}
