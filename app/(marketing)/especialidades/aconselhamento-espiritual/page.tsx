import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SpecialtyPage from "@/components/sections/SpecialtyPage";

export const metadata: Metadata = buildMetadata({
  title: "Aconselhamento Espiritual",
  description:
    "Sessões de aconselhamento espiritual pastoral com o David Lacerda — pastor e fundador do Santuário Clínico. Fé, cura interior e propósito de vida com acolhimento real.",
  path: "/especialidades/aconselhamento-espiritual",
});

export default function AconselhamentoEspiritualPage() {
  return (
    <SpecialtyPage
      slug="aconselhamento-espiritual"
      icon="self_improvement"
      accentBg="#28113e"
      accentText="#d9bdff"
      tag="Fé · Cura Interior · Propósito"
      title="Aconselhamento Espiritual"
      lead="Sessões pastorais dedicadas ao alinhamento da fé com o processo de cura, conduzidas por David Lacerda — pastor ordenado e fundador do Santuário Clínico."
      aboutTitle="O cuidado que nenhum fármaco pode oferecer"
      about={[
        "O aconselhamento espiritual é uma das práticas mais antigas de cuidado humano — e uma das mais estudadas atualmente. A psiconeuroimunologia documenta com crescente rigor o impacto positivo da espiritualidade na saúde mental, na resiliência e até na resposta imune.",
        "David Lacerda é pastor ordenado com formação teológica formal. Suas sessões de aconselhamento espiritual não são improvisadas — seguem princípios pastorais consolidados, integrando escuta ativa, orientação bíblica e oração.",
        "Importante: o aconselhamento espiritual é distinto da psicoterapia e não a substitui. É um cuidado complementar que atende a dimensão de fé do ser humano — e que, para quem tem convicções cristãs, pode ser o elemento que faltava no processo de cura.",
      ]}
      whenItems={[
        "Crise de fé ou questionamentos espirituais profundos",
        "Sentimento de vazio, falta de propósito ou sentido de vida",
        "Luto que envolve questões de fé (\"por que Deus permitiu?\")",
        "Conflitos entre diagnóstico médico e crença religiosa",
        "Ansiedade existencial ou medo da morte",
        "Decisões de vida importantes que envolvem valores espirituais",
        "Restauração após pecado, vergonha ou falha moral",
        "Desejo de aprofundar a vida espiritual como suporte à saúde",
      ]}
      howItems={[
        {
          icon: "hearing",
          title: "Escuta pastoral ativa",
          description:
            "Espaço seguro e confidencial para compartilhar o que pesa na alma, sem julgamento e com acolhimento genuíno.",
        },
        {
          icon: "menu_book",
          title: "Orientação bíblica",
          description:
            "Aplicação contextualizada das Escrituras à situação vivida, respeitando a maturidade espiritual de cada pessoa.",
        },
        {
          icon: "volunteer_activism",
          title: "Oração conjunta",
          description:
            "Quando o paciente deseja, a sessão inclui oração — um momento de entrega e conexão com o Criador.",
        },
        {
          icon: "psychology",
          title: "Integração mente-espírito",
          description:
            "Como pastor, David identifica quando questões espirituais e de saúde se entrelaçam, orientando para o cuidado integral adequado.",
        },
        {
          icon: "assignment",
          title: "Plano de crescimento",
          description:
            "Quando aplicável, orientações práticas de leitura, meditação e disciplinas espirituais para o período entre sessões.",
        },
        {
          icon: "group",
          title: "Indicação de comunidade",
          description:
            "Orientação sobre grupos de apoio, comunidades de fé e recursos pastorais locais para suporte contínuo.",
        },
      ]}
      cases={[
        { icon: "question_mark", label: "Crise de fé" },
        { icon: "heart_broken", label: "Luto espiritual" },
        { icon: "track_changes", label: "Propósito de vida" },
        { icon: "healing", label: "Cura interior" },
        { icon: "family_restroom", label: "Conflitos familiares" },
        { icon: "sentiment_sad", label: "Culpa e perdão" },
        { icon: "church", label: "Vida na comunidade de fé" },
        { icon: "spa", label: "Paz interior" },
      ]}
      faq={[
        {
          q: "O aconselhamento espiritual substitui a psicoterapia?",
          a: "Não. São abordagens distintas e complementares. A psicoterapia trata condições psicológicas com técnicas clínicas validadas. O aconselhamento espiritual cuida da dimensão de fé. Em muitos casos, as duas abordagens caminham juntas.",
        },
        {
          q: "Preciso ser cristão para agendar?",
          a: "O aconselhamento no Santuário Clínico é fundamentado na tradição cristã evangélica. Pessoas de outras crenças são bem-vindas a explorar, mas o conteúdo das sessões terá essa base teológica. Para quem busca aconselhamento laico ou de outras tradições, há profissionais mais adequados.",
        },
        {
          q: "O que é dito na sessão fica em sigilo?",
          a: "Sim. O sigilo pastoral é um princípio ético fundamental. As únicas exceções são situações de risco iminente de vida para o próprio paciente ou terceiros — e nesse caso, o encaminhamento para recursos de emergência é imediato.",
        },
        {
          q: "O aconselhamento espiritual tem alguma base científica?",
          a: "O aconselhamento espiritual em si é uma prática pastoral, não uma terapia clínica. Porém, há extensa literatura científica sobre o impacto positivo da espiritualidade na saúde mental e física. O Santuário Clínico une as duas perspectivas com responsabilidade.",
        },
        {
          q: "Com que frequência devo ir às sessões?",
          a: "Depende do objetivo e da situação. Em crises agudas, sessões semanais ou quinzenais. Para crescimento espiritual, mensais são comuns. A frequência ideal será definida na primeira sessão.",
        },
      ]}
      ctaText="Agendar Sessão Espiritual"
    />
  );
}
