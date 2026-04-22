import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyPassword } from "@/lib/auth/password";
import { signAdminToken } from "@/lib/auth/jwt";
import { COOKIE_NAME } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { adminUsers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

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

  let user: { id: string; email: string; passwordHash: string } | undefined;
  try {
    const db = getDb();
    const rows = await db
      .select({ id: adminUsers.id, email: adminUsers.email, passwordHash: adminUsers.passwordHash })
      .from(adminUsers)
      .where(eq(adminUsers.email, email))
      .limit(1);
    user = rows[0];
  } catch {
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }

  const passwordMatch = user ? await verifyPassword(password, user.passwordHash) : false;

  if (!user || !passwordMatch) {
    return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
  }

  const token = await signAdminToken(user.email);
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
