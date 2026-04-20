import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Telemedicina",
  description:
    "Entenda como funciona a telemedicina do Santuário Clínico — segura, regulamentada pelo CFM, e com a qualidade de uma consulta presencial.",
  path: "/telemedicina",
});

const steps = [
  {
    step: "01",
    icon: "calendar_month",
    title: "Agende Online",
    description:
      "Escolha o tipo de consulta, data e horário diretamente pela plataforma. Você recebe confirmação instantânea por e-mail.",
  },
  {
    step: "02",
    icon: "credit_card",
    title: "Pagamento Seguro",
    description:
      "Pague via PIX, cartão de crédito ou débito. Parcelamento disponível. Emissão de recibo para plano de saúde e imposto de renda.",
  },
  {
    step: "03",
    icon: "video_call",
    title: "Consulta por Vídeo",
    description:
      "Acesse o link enviado por e-mail. A consulta acontece em plataforma criptografada, equivalente ao atendimento presencial em qualidade.",
  },
  {
    step: "04",
    icon: "description",
    title: "Receita & Documentos",
    description:
      "Receitas digitais com assinatura eletrônica qualificada, válidas em todo o Brasil. Atestados e encaminhamentos entregues por e-mail.",
  },
];

const atendemos = [
  "Consultas de saúde mental (ansiedade, depressão, burnout)",
  "Acompanhamento de doenças crônicas estáveis",
  "Check-up clínico geral e revisão de exames",
  "Aconselhamento nutricional e plano alimentar",
  "Renovação de receitas de uso contínuo",
  "Segunda opinião médica",
  "Orientações pré e pós-cirúrgicas",
  "Aconselhamento espiritual e suporte emocional",
];

const naoAtendemos = [
  "Emergências e urgências (ligue 192 SAMU ou vá à UPA)",
  "Consultas que exijam exame físico presencial obrigatório",
  "Internações hospitalares",
  "Procedimentos cirúrgicos",
  "Primeiras consultas de especialidades que exijam exames presenciais",
];

const tecnologia = [
  {
    icon: "lock",
    title: "Criptografia ponta a ponta",
    description: "Todas as videoconsultas são criptografadas com padrão AES-256. Nenhum dado trafega sem proteção.",
  },
  {
    icon: "gavel",
    title: "CFM Res. 2.314/2022",
    description: "Prática regulamentada pelo Conselho Federal de Medicina. Todas as consultas seguem os protocolos legais vigentes.",
  },
  {
    icon: "folder_shared",
    title: "Prontuário eletrônico",
    description: "Histórico seguro de todas as consultas, exames e prescrições, acessível a qualquer momento.",
  },
  {
    icon: "verified_user",
    title: "Receita digital ICP-Brasil",
    description: "Assinatura eletrônica qualificada com validade jurídica. Aceita em farmácias de todo o Brasil.",
  },
];

const faq = [
  {
    q: "Qual é o valor das consultas?",
    a: "Os valores variam por tipo de consulta e duração. Consulta clínica geral (30 min): R$ 180. Saúde mental (50 min): R$ 250. Aconselhamento espiritual (45 min): R$ 150. Consulte a agenda para valores atualizados.",
  },
  {
    q: "Aceita convênio ou plano de saúde?",
    a: "Por ora, atendemos de forma particular. Emitimos recibo detalhado para reembolso em planos que cobrem telemedicina — consulte sua operadora sobre a cobertura.",
  },
  {
    q: "A receita é válida em farmácias?",
    a: "Sim. Emitimos receitas digitais com assinatura eletrônica qualificada (ICP-Brasil), aceitas em todas as farmácias do Brasil conforme a legislação vigente.",
  },
  {
    q: "Posso conseguir atestado médico por telemedicina?",
    a: "Sim, desde que a condição clínica justifique e possa ser avaliada adequadamente por vídeo. O atestado digital tem a mesma validade legal do atestado físico.",
  },
  {
    q: "Precisa de internet rápida?",
    a: "Uma conexão básica de 5 Mbps é suficiente. A plataforma adapta a qualidade do vídeo automaticamente. Celular 4G também funciona bem.",
  },
  {
    q: "O que acontece se houver problema técnico durante a consulta?",
    a: "O médico tentará reconexão. Se o problema persistir por mais de 10 minutos, a consulta é reagendada sem custo adicional.",
  },
  {
    q: "É possível consultar para um familiar?",
    a: "Sim. Na hora do agendamento, informe que a consulta é para um dependente. Para menores de 18 anos, é obrigatória a presença do responsável legal.",
  },
  {
    q: "O aconselhamento espiritual é diferente de sessão de psicologia?",
    a: "Sim. O aconselhamento espiritual é conduzido pelo Dr. David na sua função pastoral, com base bíblica e oração. Não substitui psicoterapia, mas pode ser complementar ao tratamento médico.",
  },
];

export default function TelemedicinaPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Telemedicina", url: `${siteConfig.url}/telemedicina` },
  ]);

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li>
              <Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Telemedicina</span></li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
            Como Funciona
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Medicina de qualidade,{" "}
            <br className="hidden md:block" />
            de onde você estiver.
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] mb-8 max-w-2xl">
            A telemedicina do Santuário Clínico é regulamentada pelo CFM, segura e tão eficaz
            quanto uma consulta presencial para a grande maioria das condições de saúde.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-[#f3f4f5] rounded-full px-4 py-2 text-sm text-[#4a454e]">
              <span className="material-symbols-outlined text-base text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Regulamentado pelo CFM
            </div>
            <div className="flex items-center gap-2 bg-[#f3f4f5] rounded-full px-4 py-2 text-sm text-[#4a454e]">
              <span className="material-symbols-outlined text-base text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Receita digital válida
            </div>
            <div className="flex items-center gap-2 bg-[#f3f4f5] rounded-full px-4 py-2 text-sm text-[#4a454e]">
              <span className="material-symbols-outlined text-base text-[#6b538d]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Atendimento nacional
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona — 4 steps */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Do agendamento à receita: 4 passos simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="relative bg-white rounded-2xl p-8">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-[#ccc4cf]" aria-hidden="true" />
                )}
                <div className="text-xs font-bold text-[#6b538d] uppercase tracking-widest mb-4">{step.step}</div>
                <div className="w-12 h-12 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {step.icon}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#28113e] mb-3"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/agendar"
              className="inline-block bg-[#28113e] text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              Agendar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Tecnologia & Segurança */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
                Tecnologia & Segurança
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Sua saúde protegida em cada detalhe
              </h2>
              <p className="text-[#4a454e] leading-relaxed">
                Usamos tecnologia de ponta para garantir que cada consulta seja tão segura
                quanto confidencial — do login à entrega da receita.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tecnologia.map((item) => (
                <div key={item.title} className="bg-[#f3f4f5] rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#28113e] text-sm mb-1" style={{ fontFamily: "var(--font-headline)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4a454e] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que Atendemos / Não Atendemos */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O que podemos cuidar juntos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Atendemos */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#d9bdff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#523b74]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#28113e]"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  O que atendemos
                </h3>
              </div>
              <ul className="space-y-3">
                {atendemos.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a454e] text-sm">
                    <span className="material-symbols-outlined text-[#6b538d] text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      done
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Não Atendemos */}
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#93000a]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cancel
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#28113e]"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  O que NÃO atendemos
                </h3>
              </div>
              <ul className="space-y-3">
                {naoAtendemos.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4a454e] text-sm">
                    <span className="material-symbols-outlined text-[#ba1a1a] text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      close
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#ffdad6]/40 rounded-xl">
                <p className="text-xs text-[#93000a] font-medium">
                  Emergência médica? Ligue imediatamente para o{" "}
                  <strong>SAMU: 192</strong> ou dirija-se à UPA mais próxima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">
              Perguntas Frequentes
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Tudo que você precisa saber
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-[#f3f4f5] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span
                    className="font-semibold text-[#28113e] pr-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.q}
                  </span>
                  <span className="material-symbols-outlined text-[#6b538d] shrink-0 transition-transform duration-200 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[#4a454e] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#4a454e] mb-4">Ainda tem dúvidas?</p>
            <Link
              href="/contato"
              className="inline-block bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-2xl mx-auto">
            Agende sua primeira consulta em menos de 2 minutos. Sem filas, sem deslocamento,
            com toda a atenção que você merece.
          </p>
          <Link
            href="/agendar"
            className="inline-block bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            Agendar Minha Consulta
          </Link>
        </div>
      </section>
    </>
  );
}
