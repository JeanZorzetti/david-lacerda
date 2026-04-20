const BASE_URL = "https://gateway.meditele.com.br";

function getConfig() {
  const apiKey = process.env.MEDITELE_API_KEY;
  const clinicId = process.env.MEDITELE_CLINIC_ID;
  if (!apiKey || !clinicId) {
    throw new Error("MEDITELE_API_KEY e MEDITELE_CLINIC_ID são obrigatórios");
  }
  return { apiKey, clinicId };
}

function headers(apiKey: string) {
  return {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  };
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MeditelePatientInput {
  name: string;
  cpf: string;
  email: string;
  phone?: string;
  birthDate: string; // YYYY-MM-DD
  gender: "male" | "female" | "other";
}

export interface MediteleSpecialty {
  id: string;
  name: string;
}

export interface MediteleProfessional {
  id: string;
  name: string;
  specialtyId?: string;
}

export interface MediteleSchedulingInput {
  patientId: string;
  professionalId: string;
  specialtyId: string;
  scheduleDate: string; // ISO-8601
}

// ─── Patient ──────────────────────────────────────────────────────────────────

export async function criarPaciente(input: MeditelePatientInput): Promise<string> {
  const { apiKey, clinicId } = getConfig();

  const res = await fetch(`${BASE_URL}/clinic/patient`, {
    method: "POST",
    headers: headers(apiKey),
    body: JSON.stringify({
      name: input.name,
      cpf: input.cpf.replace(/\D/g, ""),
      email: input.email,
      phone: input.phone?.replace(/\D/g, ""),
      birthDate: input.birthDate,
      gender: input.gender,
      clinicId,
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      data?.message ?? data?.error ?? `Meditele criarPaciente: HTTP ${res.status}`
    );
  }

  // API returns inconsistent shapes — handle multiple patterns
  const patientId: string | null =
    data?.data?.patient?.id ??
    data?.data?.id ??
    data?.data?.patientId ??
    data?.patient?.id ??
    data?.id ??
    null;

  if (!patientId) {
    throw new Error("Meditele criarPaciente: ID do paciente não encontrado na resposta");
  }

  return patientId;
}

// ─── Magic Link ───────────────────────────────────────────────────────────────

export async function gerarMagicLink(
  patientId: string,
  expiresMinutes = 240
): Promise<string> {
  const { apiKey } = getConfig();

  const res = await fetch(`${BASE_URL}/auth/patients/${patientId}/login-token`, {
    method: "POST",
    headers: headers(apiKey),
    body: JSON.stringify({ expiresInMinutes: expiresMinutes }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      data?.message ?? data?.error ?? `Meditele gerarMagicLink: HTTP ${res.status}`
    );
  }

  const loginUrl: string | null =
    data?.loginUrls?.[0]?.loginUrl ??
    data?.loginUrl ??
    data?.url ??
    null;

  if (!loginUrl) {
    throw new Error("Meditele gerarMagicLink: URL de acesso não encontrada na resposta");
  }

  return loginUrl;
}

// ─── Specialties ──────────────────────────────────────────────────────────────

export async function listarEspecialidades(): Promise<MediteleSpecialty[]> {
  const { apiKey } = getConfig();

  const res = await fetch(`${BASE_URL}/clinic/specialties`, {
    headers: headers(apiKey),
    next: { revalidate: 3600 },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(`Meditele listarEspecialidades: HTTP ${res.status}`);
  }

  const list: unknown[] =
    data?.data ?? data?.specialties ?? data ?? [];

  return (list as MediteleSpecialty[]).map((s) => ({
    id: String(s.id),
    name: String(s.name),
  }));
}

// ─── Professionals ────────────────────────────────────────────────────────────

export async function listarProfissionais(): Promise<MediteleProfessional[]> {
  const { apiKey, clinicId } = getConfig();

  const res = await fetch(`${BASE_URL}/clinic/${clinicId}/professionals`, {
    headers: headers(apiKey),
    next: { revalidate: 3600 },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(`Meditele listarProfissionais: HTTP ${res.status}`);
  }

  const list: unknown[] =
    data?.data ?? data?.professionals ?? data ?? [];

  return (list as MediteleProfessional[]).map((p) => ({
    id: String(p.id),
    name: String(p.name),
    specialtyId: p.specialtyId ? String(p.specialtyId) : undefined,
  }));
}

// ─── Scheduling ───────────────────────────────────────────────────────────────

export async function criarAgendamento(
  input: MediteleSchedulingInput
): Promise<string> {
  const { apiKey } = getConfig();

  const res = await fetch(`${BASE_URL}/scheduling`, {
    method: "POST",
    headers: headers(apiKey),
    body: JSON.stringify(input),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      data?.message ?? data?.error ?? `Meditele criarAgendamento: HTTP ${res.status}`
    );
  }

  const schedulingId: string | null =
    data?.data?.attributes?.id ??
    data?.data?.id ??
    data?.id ??
    null;

  if (!schedulingId) {
    throw new Error("Meditele criarAgendamento: ID do agendamento não encontrado");
  }

  return schedulingId;
}
