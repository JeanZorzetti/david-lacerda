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
      <Navbar />
      <main className="pt-24 md:pt-32">{children}</main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </>
  );
}
