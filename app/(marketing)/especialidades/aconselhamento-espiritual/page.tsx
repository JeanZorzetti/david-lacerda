import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SpecialtyPage from "@/components/sections/SpecialtyPage";

export const metadata: Metadata = buildMetadata({
  title: "Aconselhamento Terapêutico",
  description:
    "Sessões de aconselhamento terapêutico para suporte emocional, propósito de vida e bem-estar. Atendimento humanizado, confidencial e baseado em evidências.",
  path: "/especialidades/aconselhamento-espiritual",
});

export default function AconselhamentoEspiritualPage() {
  return (
    <SpecialtyPage
      slug="aconselhamento-espiritual"
      icon="self_improvement"
      accentBg="#28113e"
      accentText="#d9bdff"
      tag="Bem-estar · Propósito · Suporte Emocional"
      title="Aconselhamento Terapêutico"
      lead="Sessões de suporte emocional dedicadas ao equilíbrio psicológico, propósito de vida e bem-estar integral — com escuta ativa, sigilo e cuidado genuíno."
      aboutTitle="Cuidado que vai além do diagnóstico"
      about={[
        "O aconselhamento terapêutico é uma das práticas de cuidado humano mais estudadas atualmente. A psiconeuroimunologia documenta com crescente rigor o impacto positivo do suporte emocional, do senso de propósito e dos vínculos relacionais na saúde mental e física.",
        "As sessões de aconselhamento do David Lacerda Telemedicina seguem princípios consolidados de escuta ativa, orientação e suporte, integrando os valores e a história de vida do paciente ao processo de cuidado.",
        "Importante: o aconselhamento terapêutico é distinto da psicoterapia clínica e não a substitui. É um cuidado complementar que atende a dimensão emocional e existencial do ser humano — e que pode ser o apoio que faltava no processo de recuperação.",
      ]}
      whenItems={[
        "Sentimento de vazio, falta de propósito ou sentido de vida",
        "Luto e dificuldade de elaborar perdas significativas",
        "Ansiedade existencial ou medo do futuro",
        "Decisões de vida importantes que envolvem valores pessoais",
        "Conflitos relacionais e dificuldades de comunicação",
        "Baixa autoestima ou padrões emocionais negativos recorrentes",
        "Desejo de desenvolver maior equilíbrio emocional e bem-estar",
        "Necessidade de suporte durante tratamento médico ou recuperação",
      ]}
      howItems={[
        {
          icon: "hearing",
          title: "Escuta ativa",
          description:
            "Espaço seguro e confidencial para compartilhar o que pesa, sem julgamento e com acolhimento genuíno.",
        },
        {
          icon: "psychology",
          title: "Orientação baseada em valores",
          description:
            "Aplicação contextualizada de princípios de bem-estar à situação vivida, respeitando os valores de cada pessoa.",
        },
        {
          icon: "volunteer_activism",
          title: "Técnicas de regulação emocional",
          description:
            "Estratégias práticas de gestão emocional, mindfulness e desenvolvimento de recursos internos.",
        },
        {
          icon: "assignment",
          title: "Integração mente-corpo",
          description:
            "Identificação de como questões emocionais e de saúde se entrelaçam, orientando para o cuidado integral adequado.",
        },
        {
          icon: "track_changes",
          title: "Plano de desenvolvimento",
          description:
            "Orientações práticas e recursos para trabalho contínuo entre as sessões.",
        },
        {
          icon: "group",
          title: "Rede de suporte",
          description:
            "Orientação sobre grupos de apoio e recursos comunitários para suporte contínuo.",
        },
      ]}
      cases={[
        { icon: "track_changes", label: "Propósito de vida" },
        { icon: "heart_broken", label: "Luto e perdas" },
        { icon: "healing", label: "Bem-estar emocional" },
        { icon: "family_restroom", label: "Conflitos relacionais" },
        { icon: "sentiment_sad", label: "Autoestima" },
        { icon: "crisis_alert", label: "Ansiedade existencial" },
        { icon: "psychology", label: "Regulação emocional" },
        { icon: "spa", label: "Equilíbrio e paz interior" },
      ]}
      faq={[
        {
          q: "O aconselhamento terapêutico substitui a psicoterapia?",
          a: "Não. São abordagens distintas e complementares. A psicoterapia trata condições psicológicas com técnicas clínicas validadas por profissional de saúde mental. O aconselhamento terapêutico cuida da dimensão emocional e existencial. Em muitos casos, as duas abordagens caminham juntas.",
        },
        {
          q: "O que é dito na sessão fica em sigilo?",
          a: "Sim. O sigilo é um princípio ético fundamental. As únicas exceções são situações de risco iminente de vida para o próprio paciente ou terceiros — e nesse caso, o encaminhamento para recursos de emergência é imediato.",
        },
        {
          q: "O aconselhamento terapêutico tem base científica?",
          a: "Há extensa literatura científica sobre o impacto positivo do suporte emocional, do senso de propósito e dos vínculos sociais na saúde mental e física. O David Lacerda Telemedicina integra essas perspectivas com responsabilidade.",
        },
        {
          q: "Com que frequência devo participar das sessões?",
          a: "Depende do objetivo e da situação. Em momentos de crise, sessões semanais ou quinzenais. Para desenvolvimento contínuo, mensais são comuns. A frequência ideal será definida na primeira sessão.",
        },
        {
          q: "Posso fazer aconselhamento junto com acompanhamento médico?",
          a: "Sim. O aconselhamento é complementar ao tratamento médico. Muitos pacientes se beneficiam do suporte emocional ao mesmo tempo em que realizam acompanhamento clínico.",
        },
      ]}
      ctaText="Agendar Sessão de Aconselhamento"
    />
  );
}
