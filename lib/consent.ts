"use client";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = "cookie_consent";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function setConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("consent_updated"));
}

export function hasConsent(category: ConsentCategory): boolean {
  const state = getConsent();
  if (!state) return false;
  return state[category] === true;
}

export function acceptAll(): void {
  setConsent({ necessary: true, analytics: true, marketing: true });
}

export function acceptNecessaryOnly(): void {
  setConsent({ necessary: true, analytics: false, marketing: false });
}
