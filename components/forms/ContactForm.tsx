"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  subject: z.enum(["consulta", "duvida", "financeiro", "outro"], "Selecione um assunto"),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres").max(2000),
  honeypot: z.string().max(0, "Bot detectado"),
});

type FormData = z.infer<typeof schema>;

const subjectOptions = [
  { value: "consulta", label: "Agendamento de consulta" },
  { value: "duvida", label: "Dúvida sobre telemedicina" },
  { value: "financeiro", label: "Valores e pagamentos" },
  { value: "outro", label: "Outro assunto" },
];

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message ?? "Erro ao enviar mensagem");
      }

      toast.success("Mensagem enviada!", {
        description: "Retornaremos em até 1 dia útil.",
      });
      reset();
    } catch (err) {
      toast.error("Erro ao enviar", {
        description: err instanceof Error ? err.message : "Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#28113e] mb-1.5">
          Nome completo <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full rounded-xl border px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 transition-shadow ${
            errors.name
              ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
              : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
          }`}
          placeholder="Seu nome"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#28113e] mb-1.5">
            E-mail <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 transition-shadow ${
              errors.email
                ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
                : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
            }`}
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#28113e] mb-1.5">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-[#ccc4cf] px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 focus:ring-[#6b538d]/20 focus:border-[#6b538d] transition-shadow"
            placeholder="(00) 00000-0000"
            {...register("phone")}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#28113e] mb-1.5">
          Assunto <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
        </label>
        <select
          id="subject"
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={`w-full rounded-xl border px-4 py-3 text-[#191c1d] bg-white focus:outline-none focus:ring-2 transition-shadow appearance-none ${
            errors.subject
              ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
              : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
          }`}
          defaultValue=""
          {...register("subject")}
        >
          <option value="" disabled>Selecione um assunto</option>
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#28113e] mb-1.5">
          Mensagem <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full rounded-xl border px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 transition-shadow resize-none ${
            errors.message
              ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
              : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
          }`}
          placeholder="Descreva sua dúvida ou necessidade..."
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
            Enviando...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-base">send</span>
            Enviar Mensagem
          </>
        )}
      </button>

      <p className="text-xs text-[#7c757e] text-center">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacidade" className="underline hover:text-[#28113e] transition-colors">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
}
