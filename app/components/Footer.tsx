import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 bg-slate-50 text-purple-900 text-sm leading-relaxed">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="relative h-12 w-52">
          <Image
            src="/logo-navbar.png"
            alt="David Lacerda Telemedicina"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="text-slate-500 hover:text-purple-700 transition-colors">
            Contato
          </a>
          <a href="#" className="text-slate-500 hover:text-purple-700 transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="text-slate-500 hover:text-purple-700 transition-colors">
            Privacidade
          </a>
          <a href="#" className="text-slate-500 hover:text-purple-700 transition-colors">
            Aviso Legal
          </a>
        </div>

        <div className="text-center md:text-right max-w-md text-xs text-slate-500">
          © 2024 David Lacerda. O Santuário Clínico. Todos os direitos
          reservados. Isenção de responsabilidade: O aconselhamento espiritual
          não substitui o diagnóstico médico profissional.
        </div>
      </div>
    </footer>
  );
}
