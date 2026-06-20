import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Sobre() {
  return (
    <section className="bg-background px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <Reveal>
          <ImageSlot
            src=""
            placeholder="Foto do Fábio Pantoja"
            ratio="4/5"
          />
        </Reveal>
        <Reveal delay={120}>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
              Quem te ensina
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.2rem]">
              {site.instrutor.nome}
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
              {site.instrutor.bio}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
