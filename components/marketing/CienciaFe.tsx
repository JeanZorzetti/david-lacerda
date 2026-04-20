import Image from "next/image";

export default function CienciaFe() {
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
              A Ciência e a Fé em Sintonia
            </h2>
            <div className="space-y-6 text-lg text-[#4a454e]">
              <p>
                Acreditamos que a medicina moderna é um instrumento divino para a
                preservação da vida. No Santuário Clínico, não separamos o
                cuidado do corpo do cuidado da alma.
              </p>
              <p>
                Nossos protocolos clínicos seguem o rigor científico mais
                atualizado, aliados a uma escuta ativa e empática que reconhece a
                dimensão espiritual do ser humano.
              </p>
              <blockquote
                className="border-l-4 border-[#6b538d] pl-6 py-2 my-8 italic text-[#191c1d] text-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                &ldquo;O médico trata, mas quem cura é Deus. Nossa missão é ser o
                melhor instrumento possível nessa jornada.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
