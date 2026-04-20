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

export function schemaPhysician() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteConfig.doctor.name,
    description: siteConfig.description,
    url: BASE_URL,
    image: `${BASE_URL}/david-real.jpg`,
    medicalSpecialty: [
      "https://schema.org/MentalHealth",
      "https://schema.org/GeneralPractice",
      "https://schema.org/Nutrition",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Saúde Mental",
      },
      {
        "@type": "MedicalTherapy",
        name: "Clínica Geral",
      },
      {
        "@type": "MedicalTherapy",
        name: "Nutrição",
      },
      {
        "@type": "MedicalTherapy",
        name: "Aconselhamento Espiritual",
      },
    ],
  };
}

export function schemaMedicalOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Santuário Clínico",
    url: BASE_URL,
    description: siteConfig.description,
    medicalSpecialty: "https://schema.org/GeneralPractice",
    employee: {
      "@type": "Physician",
      name: siteConfig.doctor.name,
    },
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
