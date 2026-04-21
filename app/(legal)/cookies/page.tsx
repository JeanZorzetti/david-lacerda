import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Cookies",
  description:
    "Entenda quais cookies utilizamos no site do David Lacerda Telemedicina, para que servem e como gerenciar suas preferências.",
  path: "/cookies",
  noIndex: true,
});

const cookieTable = [
  {
    categoria: "Necessários",
    descricao: "Essenciais para o funcionamento básico do site. Não podem ser desativados.",
    exemplos: [
      { nome: "__consent", finalidade: "Armazena preferências de cookies do usuário", duracao: "12 meses", origem: "1ª parte" },
    ],
  },
  {
    categoria: "Analíticos",
    descricao: "Nos ajudam a entender como os visitantes interagem com o site (páginas visitadas, tempo de sessão). Ativados somente com consentimento.",
    exemplos: [
      { nome: "_vercel_analytics", finalidade: "Métricas anonimizadas de tráfego via Vercel Analytics", duracao: "Sessão", origem: "3ª parte (Vercel)" },
    ],
  },
  {
    categoria: "Marketing",
    descricao: "Utilizados para rastrear visitantes entre sites e exibir anúncios relevantes. Ativados somente com consentimento explícito.",
    exemplos: [
      { nome: "_ga, _ga_*", finalidade: "Google Analytics 4 — análise de conversão e comportamento", duracao: "13 meses", origem: "3ª parte (Google)" },
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 items-start">
      {/* TOC */}
      <nav
        aria-label="Índice da Política de Cookies"
        className="hidden lg:block lg:sticky lg:top-24 bg-[#f3f4f5] rounded-xl p-5"
      >
        <p className="text-xs font-bold text-[#28113e] uppercase tracking-widest mb-3">Seções</p>
        <ol className="space-y-1.5">
          {[
            { id: "o-que-sao", label: "O que são cookies" },
            { id: "como-usamos", label: "Como usamos" },
            { id: "tabela", label: "Tabela de cookies" },
            { id: "gerenciar", label: "Gerenciar preferências" },
            { id: "terceiros", label: "Cookies de terceiros" },
            { id: "contato", label: "Contato" },
          ].map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-sm text-[#4a454e] hover:text-[#6b538d] transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Content */}
      <div className="max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#28113e] mb-2" style={{ fontFamily: "var(--font-headline)" }}>
            Política de Cookies
          </h1>
          <p className="text-sm text-[#7c757e]">Versão 1.0 — Última atualização: 20 de abril de 2026</p>
        </div>

        <section id="o-que-sao" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            O que são cookies?
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site "lembre" de suas preferências e comportamentos entre visitas, tornando a experiência mais eficiente e personalizada.
          </p>
          <p className="text-[#191c1d] leading-relaxed">
            Cookies de <strong>1ª parte</strong> são definidos por nós diretamente. Cookies de <strong>3ª parte</strong> são definidos por serviços externos que utilizamos (analytics, mapas, etc.).
          </p>
        </section>

        <section id="como-usamos" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            Como usamos cookies
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-4">Utilizamos cookies em três categorias:</p>
          <div className="space-y-4">
            {[
              { icon: "check_circle", color: "text-[#1a5c3a]", bg: "bg-[#d9f3e8]", label: "Necessários", desc: "Sempre ativos. Permitem navegação básica, armazenam preferências de consentimento e são essenciais para segurança." },
              { icon: "bar_chart", color: "text-[#523b74]", bg: "bg-[#eddcff]", label: "Analíticos", desc: "Opcionais. Coletamos dados anonimizados sobre como os usuários navegam no site para melhorar o conteúdo e a experiência." },
              { icon: "campaign", color: "text-[#7c5c00]", bg: "bg-[#fff3cd]", label: "Marketing", desc: "Opcionais. Utilizados para rastrear a eficácia de campanhas e personalizar anúncios. Nunca usados para dados de saúde." },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 items-start p-4 border border-[#e7e8e9] rounded-xl">
                <div className={`w-9 h-9 rounded-full ${c.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined text-sm ${c.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {c.icon}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#28113e] text-sm mb-1">{c.label}</p>
                  <p className="text-sm text-[#4a454e]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tabela" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-4" style={{ fontFamily: "var(--font-headline)" }}>
            Tabela de cookies utilizados
          </h2>
          <div className="space-y-8">
            {cookieTable.map((cat) => (
              <div key={cat.categoria}>
                <h3 className="font-bold text-[#28113e] mb-1">{cat.categoria}</h3>
                <p className="text-sm text-[#4a454e] mb-3">{cat.descricao}</p>
                <div className="overflow-x-auto rounded-xl border border-[#e7e8e9]">
                  <table className="w-full text-sm">
                    <thead className="bg-[#f3f4f5]">
                      <tr>
                        <th className="text-left px-4 py-2 text-xs font-bold text-[#28113e] uppercase tracking-wider">Cookie</th>
                        <th className="text-left px-4 py-2 text-xs font-bold text-[#28113e] uppercase tracking-wider">Finalidade</th>
                        <th className="text-left px-4 py-2 text-xs font-bold text-[#28113e] uppercase tracking-wider">Duração</th>
                        <th className="text-left px-4 py-2 text-xs font-bold text-[#28113e] uppercase tracking-wider">Origem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.exemplos.map((c) => (
                        <tr key={c.nome} className="border-t border-[#e7e8e9]">
                          <td className="px-4 py-3 font-mono text-xs text-[#28113e]">{c.nome}</td>
                          <td className="px-4 py-3 text-[#4a454e]">{c.finalidade}</td>
                          <td className="px-4 py-3 text-[#4a454e] whitespace-nowrap">{c.duracao}</td>
                          <td className="px-4 py-3 text-[#4a454e] whitespace-nowrap">{c.origem}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gerenciar" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            Como gerenciar suas preferências
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-4">
            Você pode alterar suas preferências de cookies a qualquer momento de três formas:
          </p>
          <div className="space-y-3">
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-sm text-[#28113e] mb-1">Pelo banner de cookies do site</p>
              <p className="text-sm text-[#4a454e]">Clique em "Gerenciar preferências" no banner que aparece na primeira visita, ou acesse as configurações no rodapé do site.</p>
            </div>
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-sm text-[#28113e] mb-1">Pelas configurações do navegador</p>
              <p className="text-sm text-[#4a454e]">Todos os navegadores modernos permitem bloquear ou excluir cookies. Consulte a documentação do seu navegador: Chrome, Firefox, Safari, Edge.</p>
            </div>
            <div className="bg-[#f3f4f5] rounded-xl p-4">
              <p className="font-semibold text-sm text-[#28113e] mb-1">Por ferramentas de opt-out de terceiros</p>
              <p className="text-sm text-[#4a454e]">
                Google Analytics:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#6b538d] underline">
                  tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </div>
          </div>
          <p className="text-sm text-[#4a454e] mt-4 bg-[#fff3cd] border border-[#b45309]/20 rounded-lg p-3">
            <strong>Atenção:</strong> Desativar cookies necessários pode impedir o funcionamento correto do site, incluindo o armazenamento das suas preferências de consentimento.
          </p>
        </section>

        <section id="terceiros" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            Cookies de terceiros
          </h2>
          <p className="text-[#191c1d] leading-relaxed mb-3">
            Os serviços de terceiros que utilizamos possuem suas próprias políticas de privacidade e cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-[#4a454e]">
            <li>Vercel Analytics — <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#6b538d] underline">política de privacidade</a></li>
            <li>Google Analytics — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6b538d] underline">política de privacidade</a></li>
          </ul>
          <p className="text-sm text-[#4a454e] mt-3">
            Cookies de saúde nunca são compartilhados com serviços de marketing ou publicidade de terceiros.
          </p>
        </section>

        <section id="contato" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#28113e] mb-3" style={{ fontFamily: "var(--font-headline)" }}>
            Dúvidas sobre cookies
          </h2>
          <div className="bg-[#f3f4f5] rounded-xl p-5">
            <p className="text-sm text-[#4a454e]">
              Entre em contato pelo{" "}
              <a href="/contato" className="text-[#6b538d] underline">formulário de contato</a> ou pelo e-mail{" "}
              <a href="mailto:privacidade@davidlacerda.com.br" className="text-[#6b538d] underline">
                privacidade@davidlacerda.com.br
              </a>.
            </p>
          </div>
        </section>

        <p className="text-xs text-[#7c757e] border-t border-[#e7e8e9] pt-6 mt-6">
          Esta política pode ser atualizada quando novos cookies forem introduzidos ou removidos. A data de vigência é indicada no topo do documento.
        </p>
      </div>
    </div>
  );
}
