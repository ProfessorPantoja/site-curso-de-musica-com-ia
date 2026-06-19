import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Beneficios } from "@/components/Beneficios";
import { Modulos } from "@/components/Modulos";
import { Instrutor } from "@/components/Instrutor";
import { Depoimentos } from "@/components/Depoimentos";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
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
        <Marquee />
        <Beneficios />
        <Modulos />
        <Instrutor />
        <Depoimentos />
        <Pricing />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
