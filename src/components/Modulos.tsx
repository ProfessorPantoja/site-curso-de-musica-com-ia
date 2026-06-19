import { MODULOS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Modulos() {
  return (
    <section
      id="conteudo"
      className="scroll-mt-20 border-y border-border/60 bg-card/30 py-24 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              O que você vai aprender
            </h2>
            <p className="mt-4 text-muted">
              Um passo a passo completo, da primeira ideia até a sua música
              publicada e monetizada.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-5">
          {MODULOS.map((m, i) => (
            <Reveal key={m.numero} delay={i * 80}>
              <SpotlightCard className="rounded-2xl border border-border bg-card/70 p-6 transition-colors duration-300 hover:border-primary/50 sm:p-8 md:flex md:gap-8">
                <div className="mb-4 md:mb-0">
                  <span className="text-gradient text-5xl font-extrabold">
                    {m.numero}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{m.titulo}</h3>
                  <p className="mt-2 text-muted">{m.descricao}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {m.topicos.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <span aria-hidden className="mt-0.5 text-accent">
                          ♪
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
