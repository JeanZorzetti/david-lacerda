import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { CookieBanner } from "@/components/cookie-banner";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidlacerda.com.br";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. David Lacerda — Telemedicina com Propósito",
    template: "%s | Dr. David Lacerda",
  },
  description:
    "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
  keywords: [
    "telemedicina",
    "médico online",
    "saúde mental",
    "clínica geral",
    "nutrição",
    "aconselhamento espiritual",
    "David Lacerda",
    "Santuário Clínico",
  ],
  authors: [{ name: "Dr. David Lacerda" }],
  creator: "Dr. David Lacerda",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Dr. David Lacerda — Telemedicina",
    title: "Dr. David Lacerda — Telemedicina com Propósito",
    description:
      "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
    images: [
      {
        url: `${BASE_URL}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Dr. David Lacerda — Telemedicina com Propósito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. David Lacerda — Telemedicina com Propósito",
    description:
      "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
    images: [`${BASE_URL}/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
