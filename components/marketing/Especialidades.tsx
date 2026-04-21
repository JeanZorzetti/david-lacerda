export default function Especialidades() {
  return (
    <section className="py-24 bg-[#f3f4f5]" id="especialidades">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#28113e] mb-4 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Nossas Especialidades
          </h2>
          <p className="text-lg text-[#4a454e]">
            Abordagem integral para a sua saúde física e emocional, com
            profissionais de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Large */}
          <div className="md:col-span-2 bg-white rounded-[1.5rem] p-8 md:p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6b538d]/5 to-transparent z-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#3e2755] text-[#aa8ec4] flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  psychiatry
                </span>
              </div>
              <h3
                className="text-2xl font-bold text-[#28113e] mb-3"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Saúde Mental e Emocional
              </h3>
              <p className="text-[#4a454e] mb-6 max-w-md">
                Tratamento humanizado para ansiedade, depressão e transtornos de
                humor, integrando suporte clínico e acompanhamento multidisciplinar.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-sm hover:text-[#28113e] transition-colors"
              >
                Agendar Avaliação{" "}
                <span className="material-symbols-outlined ml-2 text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-[#e1e3e4]/50 z-0 rotate-12 group-hover:scale-110 transition-transform duration-700">
              psychiatry
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[1.5rem] p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-shadow duration-300 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#d6bafc] text-[#523b74] flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                monitor_heart
              </span>
            </div>
            <h3
              className="text-xl font-bold text-[#28113e] mb-3"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Clínica Geral Avançada
            </h3>
            <p className="text-[#4a454e] text-sm mb-6 flex-1">
              Acompanhamento contínuo, check-ups e manejo de doenças crônicas
              com visão holística do paciente.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-xs hover:text-[#28113e] transition-colors"
            >
              Saiba Mais{" "}
              <span className="material-symbols-outlined ml-1 text-xs">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[1.5rem] p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] transition-shadow duration-300 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#d0c986] text-[#4d4812] flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                nutrition
              </span>
            </div>
            <h3
              className="text-xl font-bold text-[#28113e] mb-3"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Nutrição e Bem-Estar
            </h3>
            <p className="text-[#4a454e] text-sm mb-6 flex-1">
              Planos alimentares personalizados para vitalidade física,
              respeitando suas necessidades e estilo de vida.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#6b538d] font-medium uppercase tracking-wider text-xs hover:text-[#28113e] transition-colors"
            >
              Saiba Mais{" "}
              <span className="material-symbols-outlined ml-1 text-xs">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Card 4 — Horizontal highlight */}
          <a href="/telemedicina" className="md:col-span-2 bg-gradient-to-r from-[#28113e] to-[#3e2755] rounded-[1.5rem] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden hover:opacity-95 transition-opacity">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=\")",
              }}
            />
            <div className="relative z-10 max-w-lg">
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Telemedicina — Consulta Online
              </h3>
              <p className="text-[#aa8ec4]">
                Consultas médicas 100% online, regulamentadas pelo CFM, com receita digital válida em todo o Brasil. Sem sair de casa.
              </p>
            </div>
            <span className="relative z-10 whitespace-nowrap bg-white text-[#28113e] px-6 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-[#f3f4f5] transition-colors w-full md:w-auto text-center">
              Saiba Mais
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
