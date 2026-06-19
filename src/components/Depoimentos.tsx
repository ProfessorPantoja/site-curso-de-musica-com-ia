import { DEPOIMENTOS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Depoimentos() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quem já fez, recomenda
            </h2>
            <p className="mt-4 text-muted">
              Resultados reais de alunos que começaram do zero.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={i * 90}>
              <SpotlightCard className="flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-colors duration-300 hover:border-primary/50">
                <div aria-hidden className="text-accent">
                  ★★★★★
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-foreground/90">
                  “{d.texto}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{d.nome}</div>
                    <div className="text-sm text-muted">{d.papel}</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
