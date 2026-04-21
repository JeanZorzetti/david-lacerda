import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description:
    "Termos e condições de uso dos serviços de telemedicina do Santuário Clínico.",
  path: "/termos",
  noIndex: true,
});

const sections = [
  { id: "aceitacao", label: "Aceitação" },
  { id: "descricao-servicos", label: "Descrição dos Serviços" },
  { id: "elegibilidade", label: "Elegibilidade" },
  { id: "limitacoes", label: "Limitações do Serviço" },
  { id: "responsabilidades-paciente", label: "Responsabilidades do Paciente" },
  { id: "propriedade-intelectual", label: "Propriedade Intelectual" },
  { id: "cancelamento", label: "Cancelamento e Reagendamento" },
  { id: "responsabilidade", label: "Limitação de Responsabilidade" },
  { id: "legislacao", label: "Legislação Aplicável" },
  { id: "contato", label: "Contato" },
];

export default function TermosPage() {
  return (
    <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 items-start">
      {/* TOC */}
      <nav
        aria-label="Índice dos Termos de Uso"
        className="hidden lg:block lg:sticky lg:top-24 bg-[#f3f4f5] rounded-xl p-5"
      >
        <p className="text-xs font-bold text-[#28113e] uppercase tracking-widest mb-3">Seções</p>
        <ol className="space-y-1.5">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-sm text-[#4a454e] hover:text-[#6b538d] transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
            Termos de Uso
          </h1>
          <p className="text-sm text-[#7c757e]">Versão 1.0 — Última atualização: 20 de abril de 2026</p>
        </div>

        {[
          {
            id: "aceitacao",
            title: "1. Aceitação dos Termos",
            content: (
              <>
                <p className="text-[#191c1d] leading-relaxed mb-3">
                  Ao acessar ou utilizar os serviços do <strong>Santuário Clínico</strong> (site, formulário de agendamento, portal do paciente ou consultas de telemedicina), você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, não utilize os serviços.
                </p>
                <p className="text-[#191c1d] leading-relaxed">
                  Estes Termos são regidos pela legislação brasileira, incluindo o Código de Defesa do Consumidor (Lei nº 8.078/1990), o Marco Civil da Internet (Lei nº 12.965/2014) e a LGPD (Lei nº 13.709/2018).
                </p>
              </>
            ),
          },
          {
            id: "descricao-servicos",
            title: "2. Descrição dos Serviços",
            content: (
              <>
                <p className="text-[#191c1d] leading-relaxed mb-3">
                  O Santuário Clínico facilita o acesso a consultas médicas de telemedicina realizadas por médicos parceiros via plataforma Meditele, nas modalidades de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d] mb-3">
                  <li>Saúde Mental e Emocional (acompanhamento psiquiátrico)</li>
                  <li>Clínica Geral (condições agudas e crônicas)</li>
                  <li>Nutrição e Bem-Estar (orientação alimentar)</li>
                  <li>Telemedicina geral e suporte emocional integrado</li>
                </ul>
                <p className="text-sm text-[#4a454e]">
                  Os serviços são prestados em conformidade com a Resolução CFM nº 2.314/2022, que regulamenta a telemedicina no Brasil.
                </p>
              </>
            ),
          },
          {
            id: "elegibilidade",
            title: "3. Elegibilidade",
            content: (
              <>
                <p className="text-[#191c1d] leading-relaxed mb-3">Para utilizar nossos serviços, você deve:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d]">
                  <li>Ter pelo menos 18 anos de idade (menores requerem consentimento e acompanhamento do responsável legal)</li>
                  <li>Ser residente no Brasil</li>
                  <li>Possuir conexão à internet e dispositivo com câmera e microfone funcionais</li>
                  <li>Fornecer informações verídicas no cadastro e durante a consulta</li>
                </ul>
              </>
            ),
          },
          {
            id: "limitacoes",
            title: "4. Limitações do Serviço",
            content: (
              <>
                <p className="text-[#191c1d] leading-relaxed mb-3">
                  A telemedicina <strong>não é adequada</strong> para situações de emergência ou urgência médica. Procure imediatamente o SAMU (192), pronto-socorro ou serviço de emergência mais próximo em casos de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d] mb-3">
                  <li>Dor no peito, suspeita de infarto ou AVC</li>
                  <li>Dificuldade respiratória grave</li>
                  <li>Perda de consciência ou convulsões</li>
                  <li>Trauma físico grave, fraturas ou ferimentos abertos</li>
                  <li>Crise suicida ou risco imediato à vida</li>
                </ul>
                <p className="text-sm text-[#4a454e]">
                  O médico parceiro poderá recusar ou interromper o atendimento via telemedicina quando julgar que a condição do paciente exige presença física.
                </p>
              </>
            ),
          },
          {
            id: "responsabilidades-paciente",
            title: "5. Responsabilidades do Paciente",
            content: (
              <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d]">
                <li>Fornecer informações de saúde completas, precisas e atualizadas</li>
                <li>Informar todos os medicamentos em uso e alergias conhecidas</li>
                <li>Seguir as orientações fornecidas pelo médico durante a consulta</li>
                <li>Manter o link de acesso confidencial e não compartilhá-lo com terceiros</li>
                <li>Comunicar imediatamente qualquer reação adversa a tratamentos prescritos</li>
                <li>Comparecer ao atendimento no horário agendado ou cancelar com antecedência mínima de 24 horas</li>
              </ul>
            ),
          },
          {
            id: "propriedade-intelectual",
            title: "6. Propriedade Intelectual",
            content: (
              <p className="text-[#191c1d] leading-relaxed">
                Todo o conteúdo do site — textos, artigos do blog, logotipos, design e elementos visuais — é de propriedade do Santuário Clínico ou licenciado por seus fornecedores. É vedada a reprodução, distribuição ou uso comercial sem autorização expressa e por escrito. Citações de artigos do blog para fins educativos são permitidas com atribuição clara ao autor.
              </p>
            ),
          },
          {
            id: "cancelamento",
            title: "7. Cancelamento e Reagendamento",
            content: (
              <>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d] mb-3">
                  <li><strong>Cancelamento com mais de 24h de antecedência:</strong> reagendamento sem custo adicional</li>
                  <li><strong>Cancelamento com menos de 24h:</strong> sujeito à política de cobrança da sessão, conforme informado no agendamento</li>
                  <li><strong>Não comparecimento sem aviso:</strong> sessão cobrada integralmente</li>
                  <li><strong>Falha técnica comprovada da plataforma:</strong> consulta reagendada sem custo</li>
                </ul>
                <p className="text-sm text-[#4a454e]">Para cancelamentos, entre em contato via e-mail ou WhatsApp com pelo menos 24 horas de antecedência.</p>
              </>
            ),
          },
          {
            id: "responsabilidade",
            title: "8. Limitação de Responsabilidade",
            content: (
              <>
                <p className="text-[#191c1d] leading-relaxed mb-3">
                  O Santuário Clínico não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#191c1d]">
                  <li>Falhas de conexão à internet do lado do paciente que impeçam a consulta</li>
                  <li>Informações incorretas fornecidas pelo paciente que comprometam a consulta</li>
                  <li>Reações adversas a tratamentos quando a posologia foi seguida corretamente</li>
                  <li>Uso indevido do link de acesso compartilhado pelo paciente com terceiros</li>
                </ul>
                <p className="text-sm text-[#4a454e] mt-3">
                  A responsabilidade civil do médico parceiro é regida pelo Código de Ética Médica do CFM e pela legislação civil brasileira. O Santuário Clínico atua como facilitador de acesso à plataforma de telemedicina.
                </p>
              </>
            ),
          },
          {
            id: "legislacao",
            title: "9. Legislação Aplicável e Foro",
            content: (
              <p className="text-[#191c1d] leading-relaxed">
                Estes Termos são regidos pela lei brasileira. Eventuais disputas serão resolvidas preferencialmente por mediação. Na impossibilidade, fica eleito o foro da Comarca do domicílio do paciente, nos termos do Art. 101, I, do Código de Defesa do Consumidor.
              </p>
            ),
          },
          {
            id: "contato",
            title: "10. Contato",
            content: (
              <div className="bg-[#f3f4f5] rounded-xl p-5">
                <p className="text-sm text-[#4a454e] mb-2">Dúvidas sobre estes Termos:</p>
                <p className="text-sm font-semibold text-[#28113e]">David Lacerda — Santuário Clínico</p>
                <p className="text-sm text-[#4a454e]">
                  E-mail: <a href="mailto:contato@davidlacerda.com.br" className="text-[#6b538d] underline">contato@davidlacerda.com.br</a>
                </p>
                <p className="text-sm text-[#4a454e]">
                  Formulário: <a href="/contato" className="text-[#6b538d] underline">/contato</a>
                </p>
              </div>
            ),
          },
        ].map((section) => (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}

        <p className="text-xs text-[#7c757e] border-t border-[#e7e8e9] pt-6 mt-6">
          Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página com data de atualização indicada no topo.
        </p>
      </div>
    </div>
  );
}
