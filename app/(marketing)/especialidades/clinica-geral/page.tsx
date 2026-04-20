import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SpecialtyPage from "@/components/sections/SpecialtyPage";

export const metadata: Metadata = buildMetadata({
  title: "Clínica Geral Avançada",
  description:
    "Acompanhamento clínico geral via telemedicina: check-up, doenças crônicas, renovação de receitas e segunda opinião com o Dr. David Lacerda.",
  path: "/especialidades/clinica-geral",
});

export default function ClinicaGeralPage() {
  return (
    <SpecialtyPage
      slug="clinica-geral"
      icon="monitor_heart"
      accentBg="#523b74"
      accentText="#ffffff"
      tag="Clínica Geral · Preventivo"
      title="Clínica Geral Avançada"
      lead="Acompanhamento contínuo, check-ups preventivos e manejo de doenças crônicas com visão holística do paciente — corpo, mente e propósito de vida."
      aboutTitle="Medicina de família no século XXI"
      about={[
        "A clínica geral moderna vai muito além de tratar sintomas isolados. O médico de família acompanha o paciente ao longo do tempo, conhece sua história, seu contexto de vida e seus fatores de risco — e age preventivamente antes que as doenças se instalem.",
        "O Santuário Clínico conecta você a médicos que praticam a medicina centrada na pessoa: cada consulta considera não apenas os achados clínicos, mas também o estilo de vida, o suporte social, os hábitos alimentares e a dimensão espiritual do paciente.",
        "Com a telemedicina, é possível oferecer esse acompanhamento longitudinal para pacientes em todo o Brasil, com a mesma qualidade de uma consulta presencial para as condições que se beneficiam do formato digital.",
      ]}
      whenItems={[
        "Check-up anual ou revisão de exames laboratoriais",
        "Controle de hipertensão arterial, diabetes ou dislipidemia",
        "Renovação de receitas de uso contínuo",
        "Queixas inespecíficas como cansaço, dor de cabeça ou mal-estar",
        "Segunda opinião sobre diagnóstico ou tratamento",
        "Orientação sobre sintomas antes de saber qual especialista procurar",
        "Acompanhamento pós-internação ou pós-cirúrgico estável",
        "Prevenção de doenças cardiovasculares e metabólicas",
      ]}
      howItems={[
        {
          icon: "history",
          title: "Anamnese completa",
          description:
            "Coleta detalhada do histórico médico, familiar e social. Revisão de sistemas para não deixar nada passar.",
        },
        {
          icon: "lab_research",
          title: "Interpretação de exames",
          description:
            "Análise integrada de hemograma, bioquímica, perfil lipídico, glicemia e outros exames solicitados ou já realizados.",
        },
        {
          icon: "medication",
          title: "Prescrição e ajuste",
          description:
            "Renovação ou ajuste de medicamentos de uso contínuo, com monitoramento de interações e efeitos colaterais.",
        },
        {
          icon: "reduce_capacity",
          title: "Gestão de crônicas",
          description:
            "Protocolo estruturado para hipertensão, diabetes tipo 2, hipotireoidismo e outras condições crônicas prevalentes.",
        },
        {
          icon: "psychology_alt",
          title: "Visão integral",
          description:
            "Atenção ao impacto da doença na qualidade de vida, no trabalho, nas relações e na dimensão espiritual do paciente.",
        },
        {
          icon: "forward",
          title: "Encaminhamento especializado",
          description:
            "Quando necessário, encaminhamento com carta detalhada para cardiologia, endocrinologia, neurologia e demais especialidades.",
        },
      ]}
      cases={[
        { icon: "favorite", label: "Hipertensão" },
        { icon: "water_drop", label: "Diabetes tipo 2" },
        { icon: "bloodtype", label: "Dislipidemia" },
        { icon: "thyroid", label: "Hipotireoidismo" },
        { icon: "airline_seat_flat", label: "Insônia" },
        { icon: "sick", label: "Infecções respiratórias" },
        { icon: "medical_services", label: "Check-up preventivo" },
        { icon: "pill", label: "Renovação de receitas" },
        { icon: "search_check", label: "Segunda opinião" },
        { icon: "weight", label: "Obesidade/sobrepeso" },
      ]}
      faq={[
        {
          q: "Posso renovar minha receita de uso contínuo por telemedicina?",
          a: "Sim. Para medicamentos de uso contínuo já prescritos por outro médico, o médico parceiro realiza avaliação clínica e, se indicado, emite nova receita digital. Medicamentos controlados requerem avaliação presencial inicial conforme CFM.",
        },
        {
          q: "O médico consegue interpretar exames que já realizei?",
          a: "Sim. Você pode enviar seus exames por e-mail antes da consulta e o médico fará a interpretação integrada ao seu histórico clínico.",
        },
        {
          q: "Consigo atestado médico por telemedicina?",
          a: "Sim, quando a condição for passível de avaliação online e justificar o afastamento. O atestado digital tem validade legal equivalente ao físico.",
        },
        {
          q: "O que acontece se o médico identificar algo que precise de exame presencial?",
          a: "Ele orientará sobre o exame necessário, fornecerá solicitação formal e, se necessário, encaminhamento para especialista presencial com carta detalhada.",
        },
        {
          q: "Posso agendar consulta para um familiar em outra cidade?",
          a: "Sim. A telemedicina não tem fronteiras dentro do território nacional. O paciente precisa estar no Brasil durante a consulta e contar com conexão de internet estável.",
        },
      ]}
      ctaText="Agendar Consulta Clínica"
    />
  );
}
