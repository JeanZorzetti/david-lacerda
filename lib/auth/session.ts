import { cookies } from "next/headers";
import { verifyAdminToken, type AdminPayload } from "./jwt";

export const COOKIE_NAME = "admin_session";

export async function getSession(): Promise<AdminPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}
