import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidlacerda.com.br";

const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

interface BuildMetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataParams): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Dr. David Lacerda`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Dr. David Lacerda — Telemedicina",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const siteConfig = {
  name: "Dr. David Lacerda",
  tagline: "Telemedicina com Propósito",
  description:
    "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
  url: BASE_URL,
  doctor: {
    name: "David Lacerda",
    credentials: "Médico & Pastor",
    crm: "CRM-XX/000000",
    rqe: "RQE 00000",
  },
};
