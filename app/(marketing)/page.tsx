import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import Especialidades from "@/components/marketing/Especialidades";
import CienciaFe from "@/components/marketing/CienciaFe";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaWebSite, schemaPhysician, schemaMedicalOrganization } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Telemedicina com Propósito",
  description:
    "Unindo precisão médica e acolhimento espiritual. Telemedicina de excelência para o seu bem-estar completo. Atendimento nacional 100% online.",
  path: "/",
});

export default function Home() {
  const jsonLdWebSite = schemaWebSite();
  const jsonLdPhysician = schemaPhysician();
  const jsonLdOrg = schemaMedicalOrganization();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPhysician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <Hero />
      <Especialidades />
      <CienciaFe />
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Pronto para ser cuidado por inteiro?
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-8">
            Consultas 100% online para todo o Brasil. Agende agora em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agendar"
              className="bg-white text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors duration-300"
            >
              Agendar Consulta
            </a>
            <a
              href="/telemedicina"
              className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/20 transition-colors duration-300"
            >
              Como Funciona
            </a>
          </div>
          <p className="mt-8 text-xs text-[#7c757e]">
            {siteConfig.doctor.crm} &bull; {siteConfig.doctor.rqe} &bull; Telemedicina regulamentada pelo CFM
          </p>
        </div>
      </section>
    </>
  );
}
