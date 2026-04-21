import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/pacientes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/empresas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/planos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/especialidades`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/como-funciona`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/protocolos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/telemedicina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pastor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ciencia-e-fe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agendar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/especialidades/saude-mental`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/especialidades/clinica-geral`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/especialidades/nutricao`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/especialidades/telemedicina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes;
}
