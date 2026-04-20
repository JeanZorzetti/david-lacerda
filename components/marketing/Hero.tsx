import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-6 z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6">
            Telemedicina Avançada
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            A cura que vem do alto,{" "}
            <br className="hidden md:block" />
            o cuidado que você precisa aqui.
          </h1>
          <p className="text-lg md:text-xl text-[#4a454e] mb-10 max-w-xl">
            Unindo precisão médica e acolhimento espiritual, O Santuário Clínico
            oferece telemedicina de excelência para o seu bem-estar completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              Agendar Consulta Online
            </button>
            <button className="bg-[#e1e3e4] text-[#191c1d] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#edeeef] transition-colors duration-300">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#28113e]/10 to-transparent rounded-[2rem] -rotate-3 scale-105 transform origin-bottom-left z-0" />

          <div className="relative z-10 w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.06)]" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/david-real.jpg"
              alt="David Lacerda sorrindo em ambiente clínico com jaleco branco e estetoscópio"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] z-20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d9bdff] flex items-center justify-center text-[#604982]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                medical_services
              </span>
            </div>
            <div>
              <p
                className="font-bold text-[#28113e] text-lg leading-tight"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Atendimento Nacional
              </p>
              <p className="text-sm text-[#4a454e]">Consultas 100% Online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
