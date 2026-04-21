import type { Metadata } from "next";
import Link from "next/link";
import { Toaster } from "sonner";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Entre em contato com o Santuário Clínico. Dúvidas sobre telemedicina, agendamentos ou informações — respondemos em até 1 dia útil.",
  path: "/contato",
});

const infoItems = [
  {
    icon: "mail",
    label: "E-mail",
    value: "contato@davidlacerda.com.br",
    href: "mailto:contato@davidlacerda.com.br",
  },
  {
    icon: "schedule",
    label: "Horários de atendimento",
    value: "Seg–Sex: 8h–18h · Sáb: 8h–12h",
    href: null,
  },
  {
    icon: "public",
    label: "Atendimento",
    value: "Todo o território nacional (telemedicina)",
    href: null,
  },
  {
    icon: "verified",
    label: "Plataforma",
    value: "Telemedicina — médicos qualificados e credenciados",
    href: null,
  },
];

export default function ContatoPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Contato", url: `${siteConfig.url}/contato` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Toaster richColors position="top-right" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Contato</span></li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
            Fale Conosco
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Estamos aqui para ajudar.
          </h1>
          <p className="text-lg text-[#4a454e]">
            Dúvidas sobre telemedicina, especialidades ou agendamento? Nossa equipe responde em até{" "}
            <strong>1 dia útil</strong>. Para consultas, você também pode agendar diretamente.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.04)] border border-[#e7e8e9]">
                <h2
                  className="text-xl font-bold text-[#28113e] mb-6"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Envie uma mensagem
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Info cards */}
              <div className="bg-[#f3f4f5] rounded-2xl p-8 space-y-5">
                <h2
                  className="text-lg font-bold text-[#28113e]"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Informações de contato
                </h2>
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#6b538d] uppercase tracking-widest mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[#4a454e] hover:text-[#28113e] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#4a454e]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Agendar direto */}
              <div className="bg-gradient-to-br from-[#28113e] to-[#3e2755] rounded-2xl p-8 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#d9bdff]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    calendar_month
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Prefere agendar direto?
                </h3>
                <p className="text-[#aa8ec4] text-sm mb-6">
                  Marque sua consulta online sem esperar resposta. Confirmação imediata.
                </p>
                <Link
                  href="/agendar"
                  className="inline-block bg-white text-[#28113e] px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm hover:bg-[#f3f4f5] transition-colors"
                >
                  Agendar Agora
                </Link>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#191c1d] text-sm mb-1">Prefere o WhatsApp?</p>
                  <p className="text-xs text-[#4a454e] mb-3">
                    Chame no WhatsApp para dúvidas rápidas. Atendimento em horário comercial.
                  </p>
                  <a
                    href="https://wa.me/5500000000000?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20do%20Dr.%20David%20Lacerda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#128C7E] hover:text-[#075E54] transition-colors"
                  >
                    Abrir WhatsApp
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
