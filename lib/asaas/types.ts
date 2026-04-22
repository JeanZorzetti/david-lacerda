export interface AsaasCustomer {
  id: string;
  name: string;
  email?: string;
  cpfCnpj?: string;
  dateCreated: string;
}

export interface AsaasSubscription {
  id: string;
  customer: string;
  value: number;
  cycle: "WEEKLY" | "BIWEEKLY" | "MONTHLY" | "QUARTERLY" | "SEMIANNUALLY" | "YEARLY";
  status: "ACTIVE" | "INACTIVE" | "EXPIRED";
  nextDueDate?: string;
  description?: string;
  dateCreated: string;
}

export interface AsaasPayment {
  id: string;
  customer: string;
  subscription?: string;
  value: number;
  netValue?: number;
  status: "PENDING" | "RECEIVED" | "CONFIRMED" | "OVERDUE" | "REFUNDED" | "RECEIVED_IN_CASH" | "REFUND_REQUESTED" | "CHARGEBACK_REQUESTED" | "CHARGEBACK_DISPUTE" | "AWAITING_CHARGEBACK_REVERSAL" | "DUNNING_REQUESTED" | "DUNNING_RECEIVED" | "AWAITING_RISK_ANALYSIS";
  billingType: "BOLETO" | "CREDIT_CARD" | "PIX" | "UNDEFINED";
  dueDate: string;
  paymentDate?: string;
  dateCreated: string;
}

export interface AsaasWebhookEvent {
  event: string;
  payment?: AsaasPayment;
  subscription?: AsaasSubscription;
}

export interface AsaasPaginated<T> {
  object: "list";
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: T[];
}
