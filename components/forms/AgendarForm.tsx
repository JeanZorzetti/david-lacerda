"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  cpf: z
    .string()
    .min(11, "CPF inválido")
    .max(14, "CPF inválido")
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length === 11, "CPF deve ter 11 dígitos"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().optional(),
  dataNascimento: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use o formato AAAA-MM-DD")
    .refine((v) => {
      const d = new Date(v);
      return !isNaN(d.getTime()) && d < new Date();
    }, "Data de nascimento inválida"),
  genero: z.enum(["male", "female", "other"], "Selecione o sexo biológico"),
  especialidade: z.string().min(1, "Selecione uma especialidade"),
  mensagem: z.string().max(1000).optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const especialidades = [
  { value: "Saúde Mental e Emocional", label: "Saúde Mental e Emocional" },
  { value: "Clínica Geral", label: "Clínica Geral" },
  { value: "Nutrição e Bem-Estar", label: "Nutrição e Bem-Estar" },
  { value: "Aconselhamento Espiritual", label: "Aconselhamento Espiritual" },
];

const generoOptions = [
  { value: "female", label: "Feminino" },
  { value: "male", label: "Masculino" },
  { value: "other", label: "Prefiro não informar" },
];

export function AgendarForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.status === 503) {
        toast.info("Sistema em configuração", {
          description: json.message ?? "Entre em contato pelo WhatsApp.",
        });
        return;
      }

      if (!res.ok && res.status !== 207) {
        throw new Error(json.message ?? "Erro ao processar agendamento");
      }

      if (res.status === 207) {
        toast.warning("Cadastro realizado", {
          description: json.message,
          duration: 8000,
        });
      } else {
        toast.success("Agendamento realizado!", {
          description: "Verifique seu e-mail — enviamos o link de acesso.",
          duration: 8000,
        });
      }

      setSuccess(true);
      reset();
    } catch (err) {
      toast.error("Erro ao agendar", {
        description: err instanceof Error ? err.message : "Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#d9bdff] flex items-center justify-center mx-auto mb-6">
          <span
            className="material-symbols-outlined text-3xl text-[#28113e]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            mark_email_read
          </span>
        </div>
        <h2
          className="text-2xl font-bold text-[#28113e] mb-3"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          E-mail enviado!
        </h2>
        <p className="text-[#4a454e] mb-6 max-w-sm mx-auto">
          Seu link de acesso ao portal de telemedicina foi enviado para o seu e-mail.
          O link é válido por 72 horas.
        </p>
        <p className="text-sm text-[#4a454e] mb-8">
          Não recebeu?{" "}
          <button
            onClick={() => setSuccess(false)}
            className="text-[#6b538d] underline hover:text-[#28113e] transition-colors"
          >
            Tente novamente
          </button>{" "}
          ou acesse{" "}
          <a href="/paciente" className="text-[#6b538d] underline hover:text-[#28113e] transition-colors">
            /paciente
          </a>{" "}
          para obter um novo link.
        </p>
      </div>
    );
  }

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] bg-white focus:outline-none focus:ring-2 transition-shadow ${
      hasError
        ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
        : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="hidden">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {/* Nome */}
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-[#28113e] mb-1.5">
          Nome completo <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="nome"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "nome-error" : undefined}
          className={fieldClass(!!errors.nome)}
          placeholder="Seu nome completo"
          {...register("nome")}
        />
        {errors.nome && (
          <p id="nome-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
            {errors.nome.message}
          </p>
        )}
      </div>

      {/* CPF + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-[#28113e] mb-1.5">
            CPF <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="cpf"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            aria-required="true"
            aria-invalid={!!errors.cpf}
            aria-describedby={errors.cpf ? "cpf-error" : undefined}
            className={fieldClass(!!errors.cpf)}
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          {errors.cpf && (
            <p id="cpf-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.cpf.message}
            </p>
          )}
        </div>

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
            className={fieldClass(!!errors.email)}
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Telefone + Data de nascimento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-[#28113e] mb-1.5">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            type="tel"
            autoComplete="tel"
            className={fieldClass(false)}
            placeholder="(00) 00000-0000"
            {...register("telefone")}
          />
        </div>

        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-[#28113e] mb-1.5">
            Data de nascimento <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
          </label>
          <input
            id="dataNascimento"
            type="date"
            autoComplete="bday"
            aria-required="true"
            aria-invalid={!!errors.dataNascimento}
            aria-describedby={errors.dataNascimento ? "dob-error" : undefined}
            className={fieldClass(!!errors.dataNascimento)}
            {...register("dataNascimento")}
          />
          {errors.dataNascimento && (
            <p id="dob-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.dataNascimento.message}
            </p>
          )}
        </div>
      </div>

      {/* Gênero + Especialidade */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="genero" className="block text-sm font-medium text-[#28113e] mb-1.5">
            Sexo biológico <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
          </label>
          <select
            id="genero"
            aria-required="true"
            aria-invalid={!!errors.genero}
            aria-describedby={errors.genero ? "genero-error" : undefined}
            className={fieldClass(!!errors.genero) + " appearance-none"}
            defaultValue=""
            {...register("genero")}
          >
            <option value="" disabled>Selecione</option>
            {generoOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.genero && (
            <p id="genero-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.genero.message}
            </p>
          )}
          <p className="mt-1 text-xs text-[#7c757e]">Exigido pela plataforma de telemedicina</p>
        </div>

        <div>
          <label htmlFor="especialidade" className="block text-sm font-medium text-[#28113e] mb-1.5">
            Especialidade <span aria-hidden="true" className="text-[#ba1a1a]">*</span>
          </label>
          <select
            id="especialidade"
            aria-required="true"
            aria-invalid={!!errors.especialidade}
            aria-describedby={errors.especialidade ? "esp-error" : undefined}
            className={fieldClass(!!errors.especialidade) + " appearance-none"}
            defaultValue=""
            {...register("especialidade")}
          >
            <option value="" disabled>Selecione</option>
            {especialidades.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.especialidade && (
            <p id="esp-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
              {errors.especialidade.message}
            </p>
          )}
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-[#28113e] mb-1.5">
          Conta-nos brevemente o motivo da consulta{" "}
          <span className="text-[#7c757e] font-normal">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          rows={4}
          className={fieldClass(false) + " resize-none"}
          placeholder="Ex.: Tenho sentido muita ansiedade nos últimos meses e gostaria de orientação..."
          {...register("mensagem")}
        />
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
            Processando...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-base">send</span>
            Solicitar Acesso
          </>
        )}
      </button>

      <p className="text-xs text-[#7c757e] text-center">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacidade" className="underline hover:text-[#28113e] transition-colors">
          Política de Privacidade
        </a>{" "}
        e com o tratamento de dados necessários ao atendimento médico (LGPD, Art. 11, II, f).
      </p>
    </form>
  );
}
