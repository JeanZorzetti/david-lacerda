import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Como Funciona",
  description:
    "Passo a passo da consulta online no David Lacerda Telemedicina. Do cadastro à receita digital — entenda tudo antes de agendar.",
  path: "/como-funciona",
});

const etapas = [
  {
    step: "01",
    icon: "person_add",
    title: "Faça seu Cadastro",
    description:
      "Acesse a página de agendamento e preencha seus dados: nome, CPF, data de nascimento, e-mail e telefone. O cadastro é feito uma única vez — nas próximas consultas seus dados já estarão salvos.",
    dica: "Tenha seu CPF em mãos. Ele é usado para criar seu prontuário eletrônico.",
  },
  {
    step: "02",
    icon: "medical_services",
    title: "Escolha a Especialidade",
    description:
      "Selecione a especialidade médica mais adequada para o seu caso. Não tem certeza? Escolha Clínico Geral — ele pode orientar e encaminhar para o especialista correto.",
    dica: "Temos mais de 30 especialidades disponíveis, incluindo saúde mental, cardiologia e pediatria.",
  },
  {
    step: "03",
    icon: "calendar_month",
    title: "Agende o Horário",
    description:
      "Escolha a data e o horário que melhor se encaixam na sua rotina. Atendemos de segunda a sábado, manhã e tarde. Você recebe confirmação instantânea por e-mail.",
    dica: "Reagendamento gratuito nos planos mensais e família, com até 2 horas de antecedência.",
  },
  {
    step: "04",
    icon: "credit_card",
    title: "Realize o Pagamento",
    description:
      "Pague via PIX, cartão de crédito (até 3x) ou débito na plataforma segura. O recibo é emitido automaticamente e pode ser usado para reembolso em planos de saúde.",
    dica: "Pagamento confirmado em segundos via PIX. Cartão de crédito aceito com aprovação instantânea.",
  },
  {
    step: "05",
    icon: "video_call",
    title: "Acesse a Videoconsulta",
    description:
      "No horário agendado, clique no link enviado por e-mail. A consulta acontece em plataforma criptografada — sem necessidade de baixar aplicativo. Apenas um navegador atualizado.",
    dica: "Abra o link alguns minutos antes para testar câmera e microfone.",
  },
];

const requisitos = [
  {
    icon: "wifi",
    title: "Conexão à Internet",
    items: ["Mínimo 5 Mbps de download e upload", "Wi-Fi preferível ao 4G para estabilidade", "Evite conexões públicas (segurança)"],
  },
  {
    icon: "devices",
    title: "Dispositivo",
    items: ["Celular, tablet ou computador", "Câmera frontal funcionando", "Microfone embutido ou fone com microfone", "Navegador atualizado (Chrome, Safari ou Edge)"],
  },
  {
    icon: "location_home",
    title: "Ambiente",
    items: ["Local tranquilo e silencioso", "Boa iluminação (preferencialmente natural)", "Privacidade para falar livremente com o médico"],
  },
];

const durante = [
  "Documento de identidade com foto (RG ou CNH)",
  "Lista dos medicamentos que você toma atualmente",
  "Resultados de exames recentes (se houver)",
  "Anote os sintomas e a duração de cada um",
  "Se for consulta de retorno, relato da evolução desde a última consulta",
  "Cartão de vacinas (para pediatria e clínica geral)",
];

const apos = [
  { icon: "description", label: "Receita digital", desc: "Enviada por e-mail em até 30 minutos após a consulta, com assinatura ICP-Brasil válida em farmácias de todo o Brasil." },
  { icon: "fact_check", label: "Atestado médico", desc: "Se necessário, emitido digitalmente com validade jurídica. Aceito por empregadores e instituições de ensino." },
  { icon: "send", label: "Encaminhamentos", desc: "Solicitação de exames ou encaminhamento para especialistas entregues por e-mail com orientações claras." },
  { icon: "history", label: "Prontuário atualizado", desc: "O resumo da consulta fica registrado no seu histórico eletrônico, acessível em futuras consultas." },
];

export default function ComoFuncionaPage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Como Funciona", url: `${siteConfig.url}/como-funciona` },
  ]);

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como fazer uma consulta de telemedicina no David Lacerda Telemedicina",
    description: "Passo a passo completo para agendar e realizar uma consulta médica online.",
    step: etapas.map((e) => ({
      "@type": "HowToStep",
      name: e.title,
      text: e.description,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Como Funciona</span></li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-[#cce5ff] text-[#004085] text-xs uppercase tracking-[0.05em] mb-6">
            Guia do Paciente
          </span>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Como funciona a consulta online
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] mb-8">
            Em 5 passos simples, do cadastro à receita digital. Sem aplicativo para baixar,
            sem deslocamento, sem fila — tudo pelo navegador do seu celular ou computador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/agendar" className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors text-center">
              Agendar Agora
            </Link>
            <Link href="/especialidades" className="bg-[#f3f4f5] text-[#28113e] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#e7e8e9] transition-colors text-center">
              Ver Especialidades
            </Link>
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Passo a Passo</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              5 etapas para a sua consulta
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {etapas.map((e) => (
              <div key={e.step} className="bg-white rounded-2xl p-6 flex flex-col gap-4 relative">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#aa8ec4] tracking-widest">{e.step}</span>
                  <div className="w-10 h-10 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{e.icon}</span>
                  </div>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{e.title}</h3>
                <p className="text-sm text-[#4a454e] leading-relaxed flex-1">{e.description}</p>
                <div className="flex items-start gap-2 bg-[#f3f0ff] rounded-xl p-3 mt-auto">
                  <span className="material-symbols-outlined text-sm text-[#6b538d] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">tips_and_updates</span>
                  <p className="text-xs text-[#523b74] leading-relaxed">{e.dica}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos técnicos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Preparação</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              O que você precisa para consultar
            </h2>
            <p className="text-[#4a454e] mt-3">Sem downloads, sem instalações — só um navegador atualizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requisitos.map((r) => (
              <div key={r.title} className="bg-[#f3f4f5] rounded-[1.5rem] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-[#28113e] text-[#aa8ec4] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{r.icon}</span>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{r.title}</h3>
                <ul className="space-y-2">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4a454e]">
                      <span className="material-symbols-outlined text-sm text-[#6b538d] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Durante a consulta */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Antes da Consulta</span>
              <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                O que ter em mãos
              </h2>
              <p className="text-[#4a454e] mb-6 leading-relaxed">
                Chegar preparado faz toda a diferença. Quanto mais informações você tiver disponíveis,
                mais preciso e eficiente será o atendimento.
              </p>
              <ul className="space-y-3">
                {durante.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4">
                    <span className="material-symbols-outlined text-[#6b538d] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">check_circle</span>
                    <span className="text-sm text-[#4a454e]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Após a Consulta</span>
              <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                O que você recebe
              </h2>
              <div className="space-y-4">
                {apos.map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#eddcff] text-[#523b74] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#28113e] text-sm mb-1" style={{ fontFamily: "var(--font-headline)" }}>{item.label}</h3>
                      <p className="text-xs text-[#4a454e] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">video_call</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
            Está pronto para sua primeira consulta?
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-xl mx-auto">
            O processo é simples e seguro. Agora que você sabe como funciona, agende em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors">
              Agendar Consulta
            </Link>
            <Link href="/contato" className="border border-white/30 text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-colors">
              Tirar Dúvidas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
