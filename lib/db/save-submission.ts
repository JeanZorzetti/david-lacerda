import type { InferInsertModel } from "drizzle-orm";
import type { submissions } from "./schema";

type SubmissionInsert = InferInsertModel<typeof submissions>;

export async function saveSubmission(data: Omit<SubmissionInsert, "id" | "createdAt">): Promise<void> {
  try {
    const { getDb } = await import("./index");
    const { submissions: table } = await import("./schema");
    const db = getDb();
    await db.insert(table).values(data);
  } catch (err) {
    console.error("[saveSubmission] DB write failed (non-blocking):", err instanceof Error ? err.message : err);
  }
}
