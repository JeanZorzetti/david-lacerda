"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeInUp, staggerChildren, scaleIn } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          className="lg:col-span-6 z-10"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block py-1 px-3 rounded-full bg-[#e7e8e9] text-[#4a454e] text-xs uppercase tracking-[0.05em] mb-6"
          >
            Telemedicina Avançada
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#28113e] mb-6"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Saúde de qualidade{" "}
            <br className="hidden md:block" />
            onde você estiver.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#4a454e] mb-10 max-w-xl"
          >
            O Santuário Clínico conecta você a médicos qualificados online,
            com excelência clínica e cuidado humanizado.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/agendar"
              className="bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center"
            >
              Agendar Consulta Online
            </Link>
            <Link
              href="/telemedicina"
              className="bg-[#e1e3e4] text-[#191c1d] px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#edeeef] transition-colors duration-300 text-center"
            >
              Saiba Mais
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          className="lg:col-span-6 relative"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#28113e]/10 to-transparent rounded-[2rem] -rotate-3 scale-105 transform origin-bottom-left z-0" />

          <div
            className="relative z-10 w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.06)]"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src="/david-real.jpg"
              alt="David Lacerda, fundador do Santuário Clínico"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] z-20 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
