import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { submissions } from "@/lib/db/schema";
import { eq, desc, and, ilike, sql } from "drizzle-orm";
import { z } from "zod";

const querySchema = z.object({
  type: z.enum(["contact", "empresas", "agendar", "paciente_acesso"]).optional(),
  status: z.enum(["new", "read", "archived"]).optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const parsed = querySchema.safeParse(Object.fromEntries(searchParams));
  if (!parsed.success) {
    return NextResponse.json({ message: "Parâmetros inválidos" }, { status: 422 });
  }

  const { type, status, search, page, limit } = parsed.data;
  const offset = (page - 1) * limit;

  const db = getDb();
  const conditions = [];
  if (type) conditions.push(eq(submissions.type, type));
  if (status) conditions.push(eq(submissions.status, status));
  if (search) {
    conditions.push(
      sql`(${submissions.name} ilike ${"%" + search + "%"} OR ${submissions.email} ilike ${"%" + search + "%"})`
    );
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  const [rows, [countRow]] = await Promise.all([
    db
      .select()
      .from(submissions)
      .where(where)
      .orderBy(desc(submissions.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<string>`count(*)` })
      .from(submissions)
      .where(where),
  ]);

  return NextResponse.json({
    data: rows,
    total: Number(countRow?.count ?? 0),
    page,
    limit,
  });
}
