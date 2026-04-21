import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

const columns = [
  {
    title: "Institucional",
    links: [
      { href: "/sobre", label: "Sobre o Santuário" },
      { href: "/pastor", label: "O Pastor" },
      { href: "/ciencia-e-fe", label: "Ciência & Fé" },
      { href: "/protocolos", label: "Protocolos Clínicos" },
      { href: "/blog", label: "Blog & Devocionais" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "/pacientes", label: "Para Pacientes" },
      { href: "/empresas", label: "Para Empresas" },
      { href: "/planos", label: "Planos e Preços" },
      { href: "/especialidades", label: "Especialidades" },
      { href: "/como-funciona", label: "Como Funciona" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidade", label: "Política de Privacidade" },
      { href: "/termos", label: "Termos de Uso" },
      { href: "/cookies", label: "Política de Cookies" },
      { href: "/contato", label: "Fale Conosco" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#191c1d] text-[#ccc4cf]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Voltar para a home">
              <div className="relative h-14 w-52 mb-6">
                <Image
                  src="/logo-navbar.png"
                  alt="David Lacerda Telemedicina"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-[#7c757e] leading-relaxed max-w-xs mb-6">
              Acesso a médicos online com acolhimento espiritual para o seu bem-estar completo.
              Atendimento 100% online para todo o Brasil.
            </p>
            <div className="space-y-1 text-xs text-[#7c757e]">
              <p>Fundado por David Lacerda — Pastor</p>
              <p>Telemedicina regulamentada pelo CFM</p>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3
                className="text-sm font-bold text-white uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#7c757e] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA column */}
          <div className="lg:col-span-2">
            <h3
              className="text-sm font-bold text-white uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Consulta Online
            </h3>
            <p className="text-sm text-[#7c757e] mb-4 leading-relaxed">
              Agende sua consulta em minutos. Sem filas, sem deslocamento.
            </p>
            <Link
              href="/agendar"
              className="inline-block bg-[#6b538d] text-white px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#523b74] transition-colors duration-200"
            >
              Agendar Agora
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#7c757e] text-center md:text-left">
            © {year} Santuário Clínico. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#7c757e] text-center md:text-right max-w-md">
            As consultas são realizadas por médicos parceiros credenciados.
            O Santuário Clínico não presta serviços médicos diretamente.
          </p>
        </div>
      </div>
    </footer>
  );
}
