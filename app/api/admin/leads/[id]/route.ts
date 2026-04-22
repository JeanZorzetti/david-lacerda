import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { submissions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const patchSchema = z.object({
  status: z.enum(["new", "read", "archived"]).optional(),
  notes: z.string().max(2000).optional(),
});

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getDb();
  const [row] = await db.select().from(submissions).where(eq(submissions.id, id));
  if (!row) return NextResponse.json({ message: "Não encontrado" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ message: "Corpo inválido" }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Dados inválidos", errors: parsed.error.flatten() }, { status: 422 });
  }

  const db = getDb();
  const updates: Record<string, unknown> = {};
  if (parsed.data.status) {
    updates.status = parsed.data.status;
    if (parsed.data.status === "read") updates.readAt = new Date();
  }
  if (parsed.data.notes !== undefined) updates.notes = parsed.data.notes;

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ message: "Nada para atualizar" }, { status: 400 });
  }

  const [updated] = await db
    .update(submissions)
    .set(updates)
    .where(eq(submissions.id, id))
    .returning();

  if (!updated) return NextResponse.json({ message: "Não encontrado" }, { status: 404 });
  return NextResponse.json(updated);
}
