import type { Metadata } from "next";
import Link from "next/link";
import { Toaster } from "sonner";
import { buildMetadata } from "@/lib/seo";
import { PacienteAcessoForm } from "@/components/forms/PacienteAcessoForm";

export const metadata: Metadata = buildMetadata({
  title: "Área do Paciente",
  description:
    "Acesse o portal de telemedicina do Santuário Clínico com seu CPF ou e-mail. Sem senha — link direto enviado para você.",
  path: "/paciente",
  noIndex: true,
});

const steps = [
  {
    icon: "badge",
    label: "Informe seu CPF ou e-mail",
    description: "Use os dados do seu cadastro.",
  },
  {
    icon: "mail",
    label: "Receba o link por e-mail",
    description: "Enviamos um link direto de acesso.",
  },
  {
    icon: "video_call",
    label: "Acesse o portal",
    description: "Entre na consulta sem senha.",
  },
];

export default function PacientePage() {
  return (
    <>
      <Toaster richColors position="top-right" />

      <section className="min-h-[80vh] flex items-center py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — info */}
            <div className="lg:col-span-5">
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-6">
                Área do Paciente
              </span>
              <h1
                className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Acesse seu portal de telemedicina
              </h1>
              <p className="text-[#4a454e] mb-8 leading-relaxed">
                Informe o CPF ou e-mail cadastrado e receba um link direto de acesso ao
                portal Meditele — sem precisar criar senha.
              </p>

              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0 relative">
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {step.icon}
                      </span>
                      {i < steps.length - 1 && (
                        <div
                          className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-4 bg-[#ccc4cf]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <p className="font-semibold text-[#28113e] text-sm" style={{ fontFamily: "var(--font-headline)" }}>
                        {step.label}
                      </p>
                      <p className="text-xs text-[#4a454e]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.06)] border border-[#e7e8e9]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      lock_open
                    </span>
                  </div>
                  <h2
                    className="text-lg font-bold text-[#28113e]"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Entrar no portal
                  </h2>
                </div>

                <PacienteAcessoForm />
              </div>

              <p className="text-center text-xs text-[#7c757e] mt-4">
                Problemas de acesso?{" "}
                <Link href="/contato" className="text-[#6b538d] underline hover:text-[#28113e] transition-colors">
                  Fale com a equipe
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
