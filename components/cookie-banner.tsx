"use client";

import { useEffect, useState } from "react";
import { acceptAll, acceptNecessaryOnly, getConsent, setConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(true);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function handleAcceptAll() {
    acceptAll();
    setVisible(false);
  }

  function handleNecessaryOnly() {
    acceptNecessaryOnly();
    setVisible(false);
  }

  function handleSavePreferences() {
    setConsent({
      necessary: true,
      analytics: analyticsChecked,
      marketing: marketingChecked,
    });
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-outline-variant/40 shadow-[0_-8px_30px_rgb(0,0,0,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1">
              <p className="font-semibold text-on-surface mb-1" style={{ fontFamily: "var(--font-headline)" }}>
                🍪 Usamos cookies
              </p>
              <p className="text-sm text-on-surface-variant max-w-2xl">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo.
                Você pode escolher quais aceita. Saiba mais em nossa{" "}
                <a href="/cookies" className="underline hover:text-primary transition-colors">
                  Política de Cookies
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 rounded-full text-sm font-medium border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
              >
                Gerenciar
              </button>
              <button
                onClick={handleNecessaryOnly}
                className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                Apenas Necessários
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-on-primary hover:opacity-90 transition-opacity"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="font-semibold text-on-surface" style={{ fontFamily: "var(--font-headline)" }}>
              Gerenciar preferências de cookies
            </p>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
                <input type="checkbox" checked disabled className="mt-0.5 accent-primary" aria-label="Cookies necessários (sempre ativos)" />
                <div>
                  <p className="text-sm font-medium text-on-surface">Necessários (sempre ativos)</p>
                  <p className="text-xs text-on-surface-variant">Essenciais para o funcionamento do site.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsChecked}
                  onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  className="mt-0.5 accent-primary"
                  aria-label="Cookies de análise"
                />
                <div>
                  <p className="text-sm font-medium text-on-surface">Análise de desempenho</p>
                  <p className="text-xs text-on-surface-variant">
                    Nos ajudam a entender como você usa o site (Google Analytics, Vercel Analytics).
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingChecked}
                  onChange={(e) => setMarketingChecked(e.target.checked)}
                  className="mt-0.5 accent-primary"
                  aria-label="Cookies de marketing"
                />
                <div>
                  <p className="text-sm font-medium text-on-surface">Marketing</p>
                  <p className="text-xs text-on-surface-variant">
                    Permitem anúncios relevantes em outras plataformas.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 rounded-full text-sm font-medium border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-on-primary hover:opacity-90 transition-opacity"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
