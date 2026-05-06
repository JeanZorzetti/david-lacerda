const API_KEY = process.env.PROLIFE_API_KEY;
const BASE_URL = process.env.PROLIFE_URL ?? "https://prolifemed.com.br";

export interface ProLifeLeadPayload {
  nome: string;
  email: string;
  telefone?: string;
  tipo?: string;
  assunto?: string;
  mensagem?: string;
  origem?: string;
  empresa?: string;
  colaboradores?: string;
}

export async function registrarLeadProlife(payload: ProLifeLeadPayload): Promise<void> {
  if (!API_KEY) return;
  await fetch(`${BASE_URL}/api/external/leads`, {
    method: "POST",
    headers: {
      "X-Api-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
