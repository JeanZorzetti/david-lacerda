import type { Metadata } from "next";
import Link from "next/link";
import { Toaster } from "sonner";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";
import { AgendarForm } from "@/components/forms/AgendarForm";

export const metadata: Metadata = buildMetadata({
  title: "Agendar Consulta",
  description:
    "Agende sua consulta de telemedicina com o Dr. David Lacerda. Preencha o formulário e receba seu link de acesso por e-mail em instantes.",
  path: "/agendar",
});

const steps = [
  { icon: "edit_note", label: "Preencha o formulário", description: "Dados básicos + especialidade desejada" },
  { icon: "mark_email_read", label: "Receba o link por e-mail", description: "Link de acesso válido por 72 horas" },
  { icon: "video_call", label: "Acesse o portal Meditele", description: "Entre na plataforma sem precisar de senha" },
  { icon: "medical_services", label: "Realize sua consulta", description: "Receita e documentos entregues por e-mail" },
];

const garantias = [
  { icon: "lock", text: "Dados protegidos (LGPD)" },
  { icon: "verified_user", text: "CFM Res. 2.314/2022" },
  { icon: "receipt_long", text: "Receita digital válida" },
  { icon: "public", text: "Atendimento em todo o Brasil" },
];

export default function AgendarPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Agendar Consulta", url: `${siteConfig.url}/agendar` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Toaster richColors position="top-right" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white pt-16 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(217,189,255,0.3) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#aa8ec4]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
              <li><span className="text-white font-medium">Agendar Consulta</span></li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#d9bdff] text-xs uppercase tracking-[0.05em] mb-6">
              Telemedicina
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Agende sua consulta online em minutos
            </h1>
            <p className="text-lg text-[#aa8ec4] mb-8">
              Preencha o formulário, receba o link de acesso por e-mail e entre na consulta sem
              precisar criar uma conta ou senha.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                    <span
                      className="material-symbols-outlined text-lg text-[#d9bdff]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {step.icon}
                    </span>
                    {i < steps.length - 1 && (
                      <div
                        className="hidden md:block absolute top-1/2 -translate-y-1/2 left-10 w-full h-px bg-white/10"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white leading-tight">{step.label}</p>
                  <p className="text-xs text-[#aa8ec4] leading-tight">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-[#e7e8e9]">
              <h2
                className="text-xl font-bold text-[#28113e] mb-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Dados para agendamento
              </h2>
              <p className="text-sm text-[#4a454e] mb-8">
                Após o envio, você receberá um link de acesso no seu e-mail em instantes.
              </p>
              <AgendarForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            {/* Garantias */}
            <div className="bg-[#f3f4f5] rounded-2xl p-6">
              <h3
                className="text-sm font-bold text-[#28113e] uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Garantias
              </h3>
              <div className="space-y-3">
                {garantias.map((g) => (
                  <div key={g.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {g.icon}
                      </span>
                    </div>
                    <p className="text-sm text-[#4a454e]">{g.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Já tem acesso */}
            <div className="bg-white border border-[#e7e8e9] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#eddcff] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-sm text-[#523b74]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    login
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
                  Já é paciente?
                </h3>
              </div>
              <p className="text-sm text-[#4a454e] mb-4">
                Acesse o portal diretamente usando seu CPF ou e-mail cadastrado.
              </p>
              <Link
                href="/paciente"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b538d] hover:text-[#28113e] transition-colors"
              >
                Acessar portal
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Dúvidas */}
            <div className="bg-white border border-[#e7e8e9] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-sm text-[#4a454e]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    help
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
                  Dúvidas sobre agendamento?
                </h3>
              </div>
              <p className="text-sm text-[#4a454e] mb-4">
                Entenda como funciona a telemedicina antes de agendar.
              </p>
              <Link
                href="/telemedicina"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b538d] hover:text-[#28113e] transition-colors"
              >
                Como funciona
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Credentials footer */}
            <p className="text-xs text-[#7c757e] text-center">
              {siteConfig.doctor.crm} · {siteConfig.doctor.rqe}
              <br />
              Telemedicina regulamentada pelo CFM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
