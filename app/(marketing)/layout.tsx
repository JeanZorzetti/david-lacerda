import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Toaster } from "sonner";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip navigation — visible on focus, hidden otherwise */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#28113e] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Ir para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content" className="pt-24 md:pt-32">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </>
  );
}
