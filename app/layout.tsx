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
    default: "Santuário Clínico — Telemedicina com Propósito",
    template: "%s | Santuário Clínico",
  },
  description:
    "Acesso a médicos online com acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
  keywords: [
    "telemedicina",
    "consulta médica online",
    "saúde mental",
    "clínica geral",
    "nutrição",
    "aconselhamento espiritual",
    "David Lacerda",
    "Santuário Clínico",
  ],
  authors: [{ name: "Santuário Clínico" }],
  creator: "Santuário Clínico",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Santuário Clínico — Telemedicina",
    title: "Santuário Clínico — Telemedicina com Propósito",
    description:
      "Acesso a médicos online com acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
    images: [
      {
        url: `${BASE_URL}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Santuário Clínico — Telemedicina com Propósito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santuário Clínico — Telemedicina com Propósito",
    description:
      "Acesso a médicos online com acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Santuário Clínico — Blog RSS"
          href={`${BASE_URL}/feed.xml`}
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
