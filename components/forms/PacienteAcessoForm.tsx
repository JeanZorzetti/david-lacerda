"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";

const schema = z.object({
  identificador: z.string().min(3, "Informe um CPF ou e-mail válido"),
});

type FormData = z.infer<typeof schema>;

type State = "idle" | "loading" | "success" | "not_found";

export function PacienteAcessoForm() {
  const [state, setState] = useState<State>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setState("loading");
    try {
      const res = await fetch("/api/paciente/acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.status === 404 && json.notFound) {
        setState("not_found");
        return;
      }

      if (!res.ok) {
        throw new Error(json.message ?? "Erro ao buscar acesso");
      }

      // Redirect directly to magic link
      if (json.redirectUrl) {
        setState("success");
        // Small delay so user sees feedback before redirect
        setTimeout(() => {
          window.location.href = json.redirectUrl;
        }, 1500);
      } else {
        setState("success");
        toast.success("Link enviado!", {
          description: json.message ?? "Verifique seu e-mail.",
        });
      }
    } catch (err) {
      setState("idle");
      toast.error("Erro ao buscar acesso", {
        description: err instanceof Error ? err.message : "Tente novamente.",
      });
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#d9bdff] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-2xl text-[#28113e]" style={{ fontVariationSettings: "'FILL' 1" }}>
            open_in_new
          </span>
        </div>
        <p className="font-bold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
          Redirecionando para o portal...
        </p>
        <p className="text-sm text-[#4a454e]">Se não redirecionar automaticamente, verifique seu e-mail.</p>
      </div>
    );
  }

  if (state === "not_found") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#ffdad6] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-2xl text-[#93000a]" style={{ fontVariationSettings: "'FILL' 1" }}>
            person_off
          </span>
        </div>
        <p className="font-bold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
          Cadastro não encontrado
        </p>
        <p className="text-sm text-[#4a454e] mb-6 max-w-xs mx-auto">
          Não encontramos um cadastro com esse CPF ou e-mail. Você já realizou um agendamento conosco?
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/agendar"
            className="bg-[#28113e] text-white px-6 py-3 rounded-full font-medium uppercase tracking-wider text-sm hover:bg-[#3e2755] transition-colors text-center"
          >
            Fazer Primeiro Agendamento
          </Link>
          <button
            onClick={() => setState("idle")}
            className="text-sm text-[#6b538d] underline hover:text-[#28113e] transition-colors"
          >
            Tentar com outro CPF/e-mail
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label htmlFor="identificador" className="block text-sm font-medium text-[#28113e] mb-1.5">
          CPF ou e-mail cadastrado
        </label>
        <input
          id="identificador"
          type="text"
          autoComplete="off"
          aria-required="true"
          aria-invalid={!!errors.identificador}
          aria-describedby={errors.identificador ? "id-error" : "id-hint"}
          className={`w-full rounded-xl border px-4 py-3 text-[#191c1d] placeholder:text-[#7c757e] focus:outline-none focus:ring-2 transition-shadow ${
            errors.identificador
              ? "border-[#ba1a1a] focus:ring-[#ba1a1a]/20"
              : "border-[#ccc4cf] focus:ring-[#6b538d]/20 focus:border-[#6b538d]"
          }`}
          placeholder="000.000.000-00 ou seu@email.com"
          {...register("identificador")}
        />
        {errors.identificador ? (
          <p id="id-error" role="alert" className="mt-1 text-xs text-[#ba1a1a]">
            {errors.identificador.message}
          </p>
        ) : (
          <p id="id-hint" className="mt-1 text-xs text-[#7c757e]">
            Use o mesmo CPF ou e-mail informado no agendamento.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-[#28113e] text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-[#3e2755] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        aria-busy={state === "loading"}
      >
        {state === "loading" ? (
          <>
            <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
            Buscando...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-base">login</span>
            Acessar Portal
          </>
        )}
      </button>

      <p className="text-xs text-[#7c757e] text-center">
        Não tem cadastro?{" "}
        <Link href="/agendar" className="text-[#6b538d] underline hover:text-[#28113e] transition-colors">
          Faça seu primeiro agendamento
        </Link>
      </p>
    </form>
  );
}
