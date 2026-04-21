import Image from "next/image";

export default function AbordagemClinica() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#f8f9fa]" id="telemedicina">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#e7e8e9] to-white rounded-[2rem] -z-10 blur-xl" />
            <div className="bg-white rounded-[2rem] p-2 md:p-4 shadow-[0_20px_60px_rgb(0,0,0,0.04)]">
              <div className="relative w-full rounded-xl bg-[#28113e] overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/logo-footer.png"
                  alt="Logotipo David Lacerda Telemedicina"
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#28113e] mb-6 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Medicina com excelência e humanização
            </h2>
            <div className="space-y-6 text-lg text-[#4a454e]">
              <p>
                No David Lacerda Telemedicina, acreditamos que uma consulta médica de qualidade vai além do diagnóstico.
                Nossos profissionais combinam rigor clínico com escuta ativa e atendimento humanizado.
              </p>
              <p>
                Nossos protocolos seguem as diretrizes do CFM e as melhores práticas da medicina baseada
                em evidências, garantindo segurança e eficácia em cada atendimento.
              </p>
              <blockquote
                className="border-l-4 border-[#6b538d] pl-6 py-2 my-8 italic text-[#191c1d] text-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                &ldquo;Cuidado médico de qualidade deve ser acessível a todos, onde quer que estejam.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
