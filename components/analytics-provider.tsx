"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { hasConsent } from "@/lib/consent";

export function AnalyticsProvider() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    setAnalyticsAllowed(hasConsent("analytics"));

    const handleConsentUpdate = () => {
      setAnalyticsAllowed(hasConsent("analytics"));
    };

    window.addEventListener("consent_updated", handleConsentUpdate);
    return () => window.removeEventListener("consent_updated", handleConsentUpdate);
  }, []);

  if (!analyticsAllowed) return null;

  return <Analytics />;
}
