import type { AsaasCustomer, AsaasSubscription, AsaasPayment, AsaasPaginated } from "./types";

function getConfig() {
  const apiKey = process.env.ASAAS_API_KEY;
  const baseUrl = process.env.ASAAS_BASE_URL ?? "https://api-sandbox.asaas.com/v3";
  if (!apiKey) throw new Error("ASAAS_API_KEY is not set");
  return { apiKey, baseUrl };
}

async function asaasFetch<T>(path: string, opts?: RequestInit): Promise<T> {
  const { apiKey, baseUrl } = getConfig();
  const res = await fetch(`${baseUrl}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      access_token: apiKey,
      ...opts?.headers,
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`AsaaS ${res.status}: ${JSON.stringify(err)}`);
  }
  return res.json() as Promise<T>;
}

export async function listCustomers(offset = 0, limit = 100): Promise<AsaasPaginated<AsaasCustomer>> {
  return asaasFetch<AsaasPaginated<AsaasCustomer>>(`/customers?offset=${offset}&limit=${limit}`);
}

export async function listSubscriptions(offset = 0, limit = 100): Promise<AsaasPaginated<AsaasSubscription>> {
  return asaasFetch<AsaasPaginated<AsaasSubscription>>(`/subscriptions?offset=${offset}&limit=${limit}`);
}

export async function listPayments(opts?: { status?: string; startDate?: string; endDate?: string; offset?: number; limit?: number }): Promise<AsaasPaginated<AsaasPayment>> {
  const params = new URLSearchParams();
  if (opts?.status) params.set("status", opts.status);
  if (opts?.startDate) params.set("dateCreated[ge]", opts.startDate);
  if (opts?.endDate) params.set("dateCreated[le]", opts.endDate);
  params.set("offset", String(opts?.offset ?? 0));
  params.set("limit", String(opts?.limit ?? 100));
  return asaasFetch<AsaasPaginated<AsaasPayment>>(`/payments?${params.toString()}`);
}

export async function getCustomer(id: string): Promise<AsaasCustomer> {
  return asaasFetch<AsaasCustomer>(`/customers/${id}`);
}

export async function getSubscription(id: string): Promise<AsaasSubscription> {
  return asaasFetch<AsaasSubscription>(`/subscriptions/${id}`);
}

export async function getPayment(id: string): Promise<AsaasPayment> {
  return asaasFetch<AsaasPayment>(`/payments/${id}`);
}
