import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SpecialtyPage from "@/components/sections/SpecialtyPage";

export const metadata: Metadata = buildMetadata({
  title: "Nutrição e Bem-Estar",
  description:
    "Planos alimentares personalizados via telemedicina com base em evidências. Médicos parceiros do Santuário Clínico integram nutrição clínica e cuidado integral.",
  path: "/especialidades/nutricao",
});

export default function NutricaoPage() {
  return (
    <SpecialtyPage
      slug="nutricao"
      icon="nutrition"
      accentBg="#4d4812"
      accentText="#ffffff"
      tag="Nutrição · Bem-Estar"
      title="Nutrição e Bem-Estar"
      lead="Planos alimentares personalizados para vitalidade física, baseados em evidências e no respeito ao seu estilo de vida — sem dietas restritivas e sem promessas impossíveis."
      aboutTitle="Comer bem é um ato de cuidado com você mesmo"
      about={[
        "A nutrição clínica moderna vai muito além de contar calorias. Ela investiga a relação do paciente com o alimento, identifica deficiências nutricionais, trata condições metabólicas e constrói estratégias alimentares que cabem na vida real da pessoa.",
        "Os médicos do Santuário Clínico abordam a nutrição como parte do cuidado integral: o que comemos afeta não apenas o peso corporal, mas o humor, a disposição, a imunidade e a saúde mental como um todo.",
        "O plano é construído junto com o paciente, respeitando preferências, cultura alimentar, rotina e condições de vida. Sem fórmulas genéricas. Sem proibições absolutas. Com foco em sustentabilidade e bem-estar duradouro.",
      ]}
      whenItems={[
        "Sobrepeso ou obesidade com impacto na saúde ou qualidade de vida",
        "Dificuldade de emagrecimento mesmo com dietas anteriores",
        "Diabetes tipo 2 ou pré-diabetes que necessite ajuste alimentar",
        "Colesterol alto, triglicerídeos elevados ou síndrome metabólica",
        "Hipotireoidismo com necessidade de ajuste nutricional",
        "Intestino irritável, intolerâncias ou alergias alimentares",
        "Deficiências nutricionais (ferro, vitamina D, B12)",
        "Desejo de melhorar disposição, imunidade ou performance",
      ]}
      howItems={[
        {
          icon: "person_search",
          title: "Avaliação individualizada",
          description:
            "Anamnese alimentar detalhada, histórico de dietas anteriores, exames laboratoriais e objetivos do paciente.",
        },
        {
          icon: "restaurant_menu",
          title: "Plano alimentar personalizado",
          description:
            "Cardápio baseado em preferências reais, cultura alimentar e rotina. Praticável, não apenas ideal.",
        },
        {
          icon: "science",
          title: "Base em evidências",
          description:
            "Protocolos atualizados: dieta mediterrânea, Low FODMAP, abordagem DASH, cetogênica quando indicada.",
        },
        {
          icon: "psychology",
          title: "Relação com o alimento",
          description:
            "Identificação de padrões emocionais de alimentação (compulsão, restrição, culpa) e estratégias para ressignificação.",
        },
        {
          icon: "monitor_weight",
          title: "Acompanhamento de resultados",
          description:
            "Retornos para ajuste do plano conforme evolução clínica, laboratorial e de peso.",
        },
        {
          icon: "spa",
          title: "Visão integral",
          description:
            "Nutrição como parte do cuidado completo com a saúde — física, mental e emocional.",
        },
      ]}
      cases={[
        { icon: "weight", label: "Emagrecimento saudável" },
        { icon: "water_drop", label: "Diabetes e pré-diabetes" },
        { icon: "bloodtype", label: "Colesterol e triglicerídeos" },
        { icon: "fitness_center", label: "Performance esportiva" },
        { icon: "eco", label: "Alimentação plant-based" },
        { icon: "no_meals", label: "Intolerâncias alimentares" },
        { icon: "medication", label: "Deficiências nutricionais" },
        { icon: "pregnant_woman", label: "Nutrição na gestação" },
        { icon: "elderly", label: "Nutrição no envelhecimento" },
        { icon: "local_fire_department", label: "Síndrome metabólica" },
      ]}
      faq={[
        {
          q: "A consulta de nutrição por telemedicina é eficaz?",
          a: "Sim. Estudos demonstram que o acompanhamento nutricional remoto alcança resultados comparáveis ao presencial para a maioria dos objetivos. A única limitação é a impossibilidade de realizar bioimpedância ou medidas antropométricas — que podem ser feitas em farmácias ou academias e enviadas para análise.",
        },
        {
          q: "O médico prescreve suplementos alimentares?",
          a: "Quando há indicação clínica e/ou laboratorial, sim. A prescrição de suplementos e fitoterápicos é feita com base em evidências, evitando gastos desnecessários.",
        },
        {
          q: "Preciso fazer exames antes da consulta?",
          a: "Não obrigatoriamente, mas hemograma completo, glicemia de jejum, perfil lipídico, TSH e vitamina D ajudam muito na personalização do plano. Se não tiver exames recentes, o médico pode solicitá-los na própria consulta.",
        },
        {
          q: "O plano alimentar considera minhas restrições religiosas ou culturais?",
          a: "Absolutamente. Restrições alimentares por convicção religiosa, ética ou cultural são sempre respeitadas. O plano é construído dentro dos seus valores.",
        },
        {
          q: "Com que frequência devo retornar?",
          a: "Para emagrecimento, recomendamos retornos a cada 30-45 dias. Para ajuste metabólico ou doenças crônicas, a frequência varia conforme evolução. O médico estabelecerá um plano de acompanhamento na primeira consulta.",
        },
      ]}
      ctaText="Agendar Consulta de Nutrição"
    />
  );
}
