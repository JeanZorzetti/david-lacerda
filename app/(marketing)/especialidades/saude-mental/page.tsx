import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SpecialtyPage from "@/components/sections/SpecialtyPage";

export const metadata: Metadata = buildMetadata({
  title: "Saúde Mental e Emocional",
  description:
    "Tratamento humanizado para ansiedade, depressão e burnout via telemedicina. O Santuário Clínico integra suporte clínico baseado em evidências e acolhimento espiritual.",
  path: "/especialidades/saude-mental",
});

export default function SaudeMentalPage() {
  return (
    <SpecialtyPage
      slug="saude-mental"
      icon="psychiatry"
      accentBg="#6b538d"
      accentText="#ffffff"
      tag="Saúde Mental · Emocional"
      title="Saúde Mental e Emocional"
      lead="Tratamento humanizado para ansiedade, depressão e transtornos de humor, integrando suporte clínico baseado em evidências e fortalecimento espiritual."
      aboutTitle="Saúde mental é saúde — ponto final"
      about={[
        "Transtornos mentais afetam 1 em cada 4 pessoas ao longo da vida. Ansiedade, depressão, burnout e TDAH não são fraqueza de caráter — são condições clínicas reais, com causa, evolução e tratamento bem documentados.",
        "Os médicos do Santuário Clínico combinam avaliação cuidadosa, psicoeducação e, quando necessário, farmacoterapia baseada em evidências. E vão além: a plataforma foi criada por um pastor que entende que a dimensão espiritual do paciente é um recurso genuíno no processo de cura.",
        "Pesquisas como as de Koenig et al. (2012) demonstram que espiritualidade está associada a menor prevalência de depressão e ansiedade. No Santuário Clínico, essa dimensão é integrada ao plano terapêutico — nunca como substituto, sempre como complemento.",
      ]}
      whenItems={[
        "Ansiedade excessiva que interfere no trabalho, relações ou sono",
        "Tristeza persistente por mais de duas semanas",
        "Esgotamento emocional e físico (burnout)",
        "Dificuldade de concentração, impulsividade ou hiperatividade (TDAH)",
        "Pensamentos negativos recorrentes ou desesperança",
        "Crises de pânico ou fobias limitantes",
        "Luto complicado ou trauma não processado",
        "Dependência de álcool, substâncias ou comportamentos",
      ]}
      howItems={[
        {
          icon: "search",
          title: "Avaliação diagnóstica completa",
          description:
            "Anamnese detalhada, escalas validadas (PHQ-9, GAD-7, AUDIT) e histórico biopsicossocial para diagnóstico preciso.",
        },
        {
          icon: "science",
          title: "Tratamento baseado em evidências",
          description:
            "Quando indicada, farmacoterapia seguindo diretrizes do DSM-5 e protocolos nacionais. Sem prescrição desnecessária.",
        },
        {
          icon: "self_improvement",
          title: "Integração mente-espírito",
          description:
            "Técnicas de atenção plena, reestruturação cognitiva e, quando o paciente desejar, práticas espirituais como recurso de coping.",
        },
        {
          icon: "groups",
          title: "Rede de suporte",
          description:
            "Orientação para familiares, encaminhamento para psicoterapia complementar e grupos de apoio quando indicado.",
        },
        {
          icon: "timeline",
          title: "Acompanhamento longitudinal",
          description:
            "Consultas de retorno para ajuste do plano, reavaliação diagnóstica e prevenção de recaídas.",
        },
        {
          icon: "favorite",
          title: "Escuta sem julgamento",
          description:
            "Ambiente seguro onde sua fé, seus valores e sua história são respeitados como parte do processo terapêutico.",
        },
      ]}
      cases={[
        { icon: "sentiment_very_dissatisfied", label: "Depressão" },
        { icon: "crisis_alert", label: "Ansiedade Generalizada" },
        { icon: "local_fire_department", label: "Burnout" },
        { icon: "psychology", label: "TDAH adulto" },
        { icon: "bolt", label: "Transtorno do Pânico" },
        { icon: "nights_stay", label: "Insônia" },
        { icon: "mood_bad", label: "Fobia social" },
        { icon: "healing", label: "TEPT" },
        { icon: "heart_broken", label: "Luto complicado" },
        { icon: "no_drinks", label: "Dependência química" },
      ]}
      faq={[
        {
          q: "A consulta de saúde mental por telemedicina é tão eficaz quanto presencial?",
          a: "Sim. Múltiplos estudos (incluindo revisões sistemáticas da Cochrane) demonstram eficácia equivalente da telepsiquiatria para avaliação e acompanhamento de ansiedade, depressão e outros transtornos. A única limitação é para casos que exijam exame físico neurológico detalhado.",
        },
        {
          q: "Posso receber prescrição de antidepressivos ou ansiolíticos na consulta?",
          a: "Sim, quando clinicamente indicado. A prescrição é emitida digitalmente com assinatura eletrônica qualificada ICP-Brasil, válida em todo o Brasil. Medicamentos controlados (Portaria 344) requerem receita especial — também emitida digitalmente conforme legislação vigente.",
        },
        {
          q: "A consulta substitui psicoterapia?",
          a: "Não e nem pretende. A consulta médica e a psicoterapia são complementares. O médico pode indicar e encaminhar para psicólogos parceiros quando a psicoterapia for indicada como parte do plano terapêutico.",
        },
        {
          q: "O tratamento espiritual substitui o tratamento médico?",
          a: "Nunca. O acolhimento espiritual é integrado ao plano clínico como recurso complementar, nunca como substituto. O tratamento médico segue protocolos baseados em evidências independentemente das crenças do paciente.",
        },
        {
          q: "Quanto tempo leva para ver resultados?",
          a: "Depende do diagnóstico e da resposta individual. Ansiedade leve a moderada pode melhorar significativamente em 4 a 8 semanas com tratamento adequado. O médico estabelecerá expectativas realistas na primeira consulta.",
        },
      ]}
      ctaText="Agendar Avaliação de Saúde Mental"
    />
  );
}
