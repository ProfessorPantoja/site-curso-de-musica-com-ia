import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Ocasioes } from "@/components/Ocasioes";
import { Metodo } from "@/components/Metodo";
import { Prova } from "@/components/Prova";
import { Oferta } from "@/components/Oferta";
import { Sobre } from "@/components/Sobre";
import { Faq } from "@/components/Faq";
import { CapturaLead } from "@/components/CapturaLead";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <CapturaLead />
        <Ocasioes />
        <Metodo />
        <Prova />
        <Oferta />
        <Sobre />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
