"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    specialty: "Saúde Mental",
    text: "Depois de meses tentando marcar consulta presencialmente, encontrei o Dr. David. A atenção e o cuidado foram além do que esperava. Pela primeira vez senti que minha ansiedade estava sendo tratada de forma integral — não apenas com remédio, mas com compreensão real da minha história.",
    initials: "AS",
  },
  {
    id: 2,
    name: "Marcos T.",
    location: "Recife, PE",
    specialty: "Clínica Geral",
    text: "Moro numa cidade pequena sem especialistas próximos. A telemedicina mudou minha vida. Em 30 minutos de consulta, tive mais clareza sobre minha pressão alta do que em anos de idas ao médico. A receita chegou no mesmo dia por e-mail. Simples e eficiente.",
    initials: "MT",
  },
  {
    id: 3,
    name: "Fernanda L.",
    location: "Belo Horizonte, MG",
    specialty: "Aconselhamento Espiritual",
    text: "Passei por um luto muito difícil e não sabia se precisava de um psicólogo, de um pastor, ou dos dois. O Dr. David conseguiu unir as duas perspectivas de forma natural e respeitosa. Não impôs nada — apenas escutou e me ajudou a encontrar meu próprio caminho de cura.",
    initials: "FL",
  },
  {
    id: 4,
    name: "Roberto C.",
    location: "Manaus, AM",
    specialty: "Saúde Mental",
    text: "Como pastor leigo, estava relutante em procurar ajuda psiquiátrica — pensava que precisava ter mais fé. O Dr. David me mostrou que fé e ciência não são opostos. Hoje estou medicado corretamente, dormindo bem, e minha vida ministerial nunca esteve tão plena.",
    initials: "RC",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Saúde Mental": { bg: "bg-[#eddcff]", text: "text-[#523b74]" },
  "Clínica Geral": { bg: "bg-[#d9f3e8]", text: "text-[#1a5c3a]" },
  "Aconselhamento Espiritual": { bg: "bg-[#fff3cd]", text: "text-[#7c5c00]" },
};

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const t = testimonials[active];
  const colors = categoryColors[t.specialty] ?? { bg: "bg-[#f3f4f5]", text: "text-[#4a454e]" };

  return (
    <section
      className="bg-[#f3f4f5] py-20"
      aria-label="Depoimentos de pacientes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-[#eddcff] text-[#523b74] text-xs uppercase tracking-[0.05em] mb-4">
            Depoimentos
          </span>
          <h2
            className="text-3xl font-extrabold text-[#28113e] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            O que dizem nossos pacientes
          </h2>
          <p className="text-[#4a454e] mt-3 text-sm">
            Depoimentos reais. Nomes abreviados por privacidade (LGPD).
          </p>
        </div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.06)] border border-[#e7e8e9]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-base text-[#f59e0b]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                ))}
              </div>

              <blockquote className="text-[#191c1d] text-base md:text-lg leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#28113e] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#d9bdff]">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-[#7c757e]">{t.location}</p>
                  </div>
                </div>
                <span className={`inline-block py-0.5 px-3 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                  {t.specialty}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="w-10 h-10 rounded-full border border-[#ccc4cf] flex items-center justify-center hover:bg-[#28113e] hover:border-[#28113e] hover:text-white text-[#4a454e] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Depoimento ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#28113e]" : "w-2 bg-[#ccc4cf] hover:bg-[#6b538d]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="w-10 h-10 rounded-full border border-[#ccc4cf] flex items-center justify-center hover:bg-[#28113e] hover:border-[#28113e] hover:text-white text-[#4a454e] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
