import { getDb } from "@/lib/db";
import { asaasCustomers, asaasSubscriptions, asaasPayments } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { listCustomers, listSubscriptions, listPayments } from "./client";

export async function syncAll(): Promise<{ customers: number; subscriptions: number; payments: number }> {
  const db = getDb();
  let customersCount = 0;
  let subscriptionsCount = 0;
  let paymentsCount = 0;

  // Sync customers
  let offset = 0;
  while (true) {
    const page = await listCustomers(offset, 100);
    if (page.data.length === 0) break;
    for (const c of page.data) {
      await db
        .insert(asaasCustomers)
        .values({
          asaasId: c.id,
          name: c.name,
          email: c.email ?? null,
          cpfCnpj: c.cpfCnpj ?? null,
          createdAt: new Date(c.dateCreated),
        })
        .onConflictDoUpdate({
          target: asaasCustomers.asaasId,
          set: { name: c.name, email: c.email ?? null, cpfCnpj: c.cpfCnpj ?? null },
        });
      customersCount++;
    }
    if (!page.hasMore) break;
    offset += 100;
  }

  // Sync subscriptions
  offset = 0;
  while (true) {
    const page = await listSubscriptions(offset, 100);
    if (page.data.length === 0) break;
    for (const s of page.data) {
      const customers = await db
        .select({ id: asaasCustomers.id })
        .from(asaasCustomers)
        .where(eq(asaasCustomers.asaasId, s.customer))
        .limit(1);
      const customer = customers[0];
      if (!customer) continue;

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
      subscriptionsCount++;
    }
    if (!page.hasMore) break;
    offset += 100;
  }

  // Sync payments (last 3 months)
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 3);
  offset = 0;
  while (true) {
    const page = await listPayments({
      startDate: startDate.toISOString().split("T")[0],
      offset,
      limit: 100,
    });
    if (page.data.length === 0) break;
    for (const p of page.data) {
      const customers = await db
        .select({ id: asaasCustomers.id })
        .from(asaasCustomers)
        .where(eq(asaasCustomers.asaasId, p.customer))
        .limit(1);
      const customer = customers[0];
      if (!customer) continue;

      let subscriptionId: string | null = null;
      if (p.subscription) {
        const subs = await db
          .select({ id: asaasSubscriptions.id })
          .from(asaasSubscriptions)
          .where(eq(asaasSubscriptions.asaasId, p.subscription))
          .limit(1);
        subscriptionId = subs[0]?.id ?? null;
      }

      await db
        .insert(asaasPayments)
        .values({
          asaasId: p.id,
          customerId: customer.id,
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
      paymentsCount++;
    }
    if (!page.hasMore) break;
    offset += 100;
  }

  return { customers: customersCount, subscriptions: subscriptionsCount, payments: paymentsCount };
}
