import { siteConfig } from "./seo";

const BASE_URL = siteConfig.url;

export function schemaWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function schemaFounder() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: "Fundador",
    description: "Fundador do Santuário Clínico, plataforma de telemedicina com excelência clínica.",
    url: `${BASE_URL}/pastor`,
    image: `${BASE_URL}/david-real.jpg`,
    affiliation: {
      "@type": "Organization",
      name: "Santuário Clínico",
      url: BASE_URL,
    },
  };
}

export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Santuário Clínico",
    url: BASE_URL,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
    },
    serviceType: "Telemedicina",
    areaServed: "BR",
  };
}

export function schemaBreadcrumb(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
