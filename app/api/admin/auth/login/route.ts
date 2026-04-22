import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyPassword } from "@/lib/auth/password";
import { signAdminToken } from "@/lib/auth/jwt";
import { COOKIE_NAME } from "@/lib/auth/session";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const rateLimitMap = new Map<string, { count: number; firstAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 5 * 60 * 1000;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry) {
    if (now - entry.firstAt < WINDOW_MS) {
      if (entry.count >= MAX_ATTEMPTS) {
        return NextResponse.json({ message: "Muitas tentativas. Aguarde 5 minutos." }, { status: 429 });
      }
      entry.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, firstAt: now });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, firstAt: now });
  }

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ message: "Corpo inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Dados inválidos" }, { status: 422 });
  }

  const { email, password } = parsed.data;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_HASH = process.env.ADMIN_PASSWORD_HASH;

  if (!ADMIN_EMAIL || !ADMIN_HASH) {
    return NextResponse.json({ message: "Admin não configurado" }, { status: 503 });
  }

  const emailMatch = email === ADMIN_EMAIL;
  const passwordMatch = emailMatch ? await verifyPassword(password, ADMIN_HASH) : false;

  if (!emailMatch || !passwordMatch) {
    return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
  }

  const token = await signAdminToken(email);
  const isProduction = process.env.NODE_ENV === "production";

  const response = NextResponse.json({ message: "ok" }, { status: 200 });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
