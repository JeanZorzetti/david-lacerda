import { pgTable, uuid, text, jsonb, timestamp, boolean, numeric, date, pgEnum } from "drizzle-orm/pg-core";

export const submissionTypeEnum = pgEnum("submission_type", ["contact", "empresas", "agendar", "paciente_acesso"]);
export const submissionStatusEnum = pgEnum("submission_status", ["new", "read", "archived"]);

export const submissions = pgTable("submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  type: submissionTypeEnum("type").notNull(),
  payload: jsonb("payload").notNull(),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  status: submissionStatusEnum("status").notNull().default("new"),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  readAt: timestamp("read_at", { withTimezone: true }),
});

export const asaasCustomers = pgTable("asaas_customers", {
  id: uuid("id").defaultRandom().primaryKey(),
  asaasId: text("asaas_id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email"),
  cpfCnpj: text("cpf_cnpj"),
  submissionId: uuid("submission_id").references(() => submissions.id),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const asaasSubscriptions = pgTable("asaas_subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  asaasId: text("asaas_id").notNull().unique(),
  customerId: uuid("customer_id").notNull().references(() => asaasCustomers.id),
  value: numeric("value", { precision: 10, scale: 2 }).notNull(),
  cycle: text("cycle").notNull(),
  status: text("status").notNull(),
  nextDueDate: date("next_due_date"),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const asaasPayments = pgTable("asaas_payments", {
  id: uuid("id").defaultRandom().primaryKey(),
  asaasId: text("asaas_id").notNull().unique(),
  customerId: uuid("customer_id").notNull().references(() => asaasCustomers.id),
  subscriptionId: uuid("subscription_id").references(() => asaasSubscriptions.id),
  value: numeric("value", { precision: 10, scale: 2 }).notNull(),
  netValue: numeric("net_value", { precision: 10, scale: 2 }),
  status: text("status").notNull(),
  billingType: text("billing_type").notNull(),
  dueDate: date("due_date").notNull(),
  paymentDate: date("payment_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const asaasWebhookEvents = pgTable("asaas_webhook_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventType: text("event_type").notNull(),
  payload: jsonb("payload").notNull(),
  processed: boolean("processed").notNull().default(false),
  error: text("error"),
  receivedAt: timestamp("received_at", { withTimezone: true }).notNull().defaultNow(),
});
