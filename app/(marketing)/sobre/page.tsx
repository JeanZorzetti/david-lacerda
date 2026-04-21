import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { schemaBreadcrumb, schemaOrganization } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sobre o David Lacerda Telemedicina",
  description:
    "Conheça o David Lacerda Telemedicina — plataforma de telemedicina fundada por David Lacerda, com missão de democratizar o acesso a cuidados médicos de qualidade no Brasil.",
  path: "/sobre",
});

const valores = [
  {
    icon: "favorite",
    titulo: "Cuidado Integral",
    descricao:
      "Acreditamos que saúde vai além do corpo — envolve mente e emoções. Cada consulta considera o paciente como um ser completo, não apenas um conjunto de sintomas.",
  },
  {
    icon: "verified",
    titulo: "Excelência Técnica",
    descricao:
      "Todos os médicos parceiros são registrados no CRM, com especialização reconhecida. Seguimos os protocolos mais rigorosos regulamentados pelo CFM, sem concessões.",
  },
  {
    icon: "handshake",
    titulo: "Transparência",
    descricao:
      "Protocolos, preços e políticas são públicos e acessíveis. Nunca prometemos o que não podemos cumprir. Você sabe exatamente o que está contratando antes de agendar.",
  },
  {
    icon: "accessibility",
    titulo: "Acessibilidade",
    descricao:
      "Telemedicina de qualidade para quem vive longe de grandes centros, para quem tem mobilidade reduzida, para quem não pode tirar horas do trabalho para ir a um consultório.",
  },
  {
    icon: "psychology",
    titulo: "Humanização",
    descricao:
      "Somos movidos pela convicção de que cuidar bem é mais do que uma profissão — é um compromisso com a dignidade e o bem-estar de cada paciente que atendemos.",
  },
  {
    icon: "lock",
    titulo: "Privacidade",
    descricao:
      "Dados de saúde são dos mais sensíveis que existem. Tratamos cada informação com máximo cuidado, em conformidade com a LGPD, com criptografia e controle de acesso rígidos.",
  },
];

const time = [
  {
    nome: "David Lacerda",
    cargo: "Fundador",
    descricao:
      "Fundador do David Lacerda Telemedicina, David concebeu a plataforma a partir da convicção de que o acesso a cuidados médicos de qualidade deve ser universal, humanizado e sem barreiras geográficas.",
    icon: "person",
    href: "/sobre",
  },
  {
    nome: "Médicos Parceiros",
    cargo: "Especialistas Credenciados",
    descricao:
      "Rede de médicos especialistas com registro ativo no CRM, selecionados por experiência, reputação e alinhamento com a proposta de cuidado integral do David Lacerda Telemedicina.",
    icon: "medical_services",
    href: "/especialidades",
  },
  {
    nome: "Plataforma de Telemedicina",
    cargo: "Infraestrutura Tecnológica",
    descricao:
      "A infraestrutura de agendamento, videoconsulta e prontuário eletrônico é fornecida por parceiro tecnológico certificado, regulamentado pelo CFM. As consultas são realizadas por médicos parceiros credenciados.",
    icon: "devices",
    href: "/telemedicina",
  },
];

export default function SobrePage() {
  const jsonLdBreadcrumb = schemaBreadcrumb([
    { name: "Home", url: siteConfig.url },
    { name: "Sobre", url: `${siteConfig.url}/sobre` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization()) }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#4a454e]">
            <li><Link href="/" className="hover:text-[#28113e] transition-colors">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-sm">chevron_right</span></li>
            <li><span className="text-[#28113e] font-medium">Sobre</span></li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-6">
              Nossa História
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Saúde de qualidade para todos
            </h1>
            <p className="text-lg md:text-xl text-[#4a454e] max-w-xl">
              O David Lacerda Telemedicina nasceu da convicção de que o cuidado com a saúde deve ser acessível,
              humanizado e integral — alcançando corpo e mente de cada paciente, onde quer que esteja.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "favorite", value: "+5.000", label: "Consultas realizadas" },
              { icon: "star", value: "4.9/5", label: "Satisfação média" },
              { icon: "medical_services", value: "+30", label: "Especialidades" },
              { icon: "public", value: "Brasil", label: "Atendimento nacional" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f3f4f5] rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-[#6b538d] mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{stat.icon}</span>
                <p className="text-2xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{stat.value}</p>
                <p className="text-xs text-[#4a454e] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Origem</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Como o David Lacerda Telemedicina nasceu
            </h2>
          </div>
          <div className="space-y-6 text-[#4a454e] leading-relaxed">
            <p>
              O David Lacerda Telemedicina foi fundado por David Lacerda a partir de uma percepção simples mas urgente: milhões de brasileiros não têm acesso a cuidados médicos de qualidade — seja por distância geográfica, custo ou falta de tempo.
            </p>
            <p>
              A visão que deu origem ao David Lacerda Telemedicina é que o cuidado mais eficaz é aquele que considera o ser humano inteiro — não apenas o sintoma. Uma plataforma de telemedicina que, além de conectar pacientes a médicos competentes, seja permeada por acolhimento, compaixão e respeito pela história de cada pessoa.
            </p>
            <p>
              Com infraestrutura de telemedicina regulamentada pelo CFM, o David Lacerda Telemedicina tornou isso possível: consultas com especialistas certificados, do celular, sem sair de casa, com receita digital válida em todo o Brasil.
            </p>
            <p>
              Hoje, atendemos pacientes em todo o Brasil, em mais de 30 especialidades. Mas o que não mudou desde o primeiro dia é o propósito: cuidar bem, cuidar de verdade, cuidar do ser humano inteiro.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                label: "Missão",
                icon: "flag",
                text: "Democratizar o acesso a cuidados médicos de qualidade no Brasil, por meio da telemedicina, com acolhimento integral que respeita a pessoa em todas as suas dimensões.",
              },
              {
                label: "Visão",
                icon: "visibility",
                text: "Ser a referência em telemedicina humanizada no Brasil — reconhecida não apenas pela excelência técnica, mas pela profundidade do cuidado que oferece a cada paciente.",
              },
              {
                label: "Propósito",
                icon: "favorite",
                text: "Que nenhuma pessoa, independentemente de onde mora ou quanto tem, deixe de receber o cuidado médico que precisa e merece.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#28113e] text-white rounded-[1.5rem] p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl text-[#aa8ec4]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-headline)" }}>{item.label}</h3>
                <p className="text-[#aa8ec4] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Valores */}
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">Valores</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              O que nos orienta
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-[#f3f4f5] rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#eddcff] text-[#523b74] flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{v.icon}</span>
                </div>
                <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{v.titulo}</h3>
                <p className="text-sm text-[#4a454e] leading-relaxed">{v.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Time */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-4">Equipe</span>
            <h2 className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]" style={{ fontFamily: "var(--font-headline)" }}>
              Quem faz o David Lacerda Telemedicina
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {time.map((membro) => (
              <div key={membro.nome} className="bg-white rounded-[1.5rem] p-8 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#eddcff] text-[#523b74] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">{membro.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>{membro.nome}</h3>
                  <p className="text-xs text-[#6b538d] font-semibold uppercase tracking-wider mt-0.5">{membro.cargo}</p>
                </div>
                <p className="text-sm text-[#4a454e] leading-relaxed flex-1">{membro.descricao}</p>
                <Link href={membro.href} className="flex items-center text-xs font-semibold text-[#6b538d] uppercase tracking-wider hover:text-[#28113e] transition-colors">
                  Saiba Mais
                  <span className="material-symbols-outlined ml-1 text-sm" aria-hidden="true">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#28113e] to-[#3e2755] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#aa8ec4] mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">medical_services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
            Faça parte desta história
          </h2>
          <p className="text-[#aa8ec4] text-lg mb-10 max-w-xl mx-auto">
            Cada consulta agendada é um passo em direção a uma saúde mais acessível e humanizada no Brasil.
            Comece hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar" className="bg-white text-[#28113e] px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors">
              Agendar Consulta
            </Link>
            <Link href="/especialidades" className="border border-white/30 text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-colors">
              Ver Especialidades
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
