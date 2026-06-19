import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Visualizer } from "@/components/ui/Visualizer";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* ── Coluna de texto ── */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Novo método com Inteligência Artificial
            </span>
          </Reveal>

          <Reveal delay={80} as="h1">
            <span className="block text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Crie suas próprias músicas com{" "}
              <span className="text-gradient">Inteligência Artificial</span>
            </span>
          </Reveal>

          <Reveal delay={160} as="p">
            <span className="mx-auto mt-6 block max-w-xl text-pretty text-lg text-muted lg:mx-0">
              {site.descricaoCurta}
            </span>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={site.oferta.linkCheckout}
                className="btn-glow group w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 sm:w-auto"
              >
                Começar agora
                <span className="ml-2 inline-block text-primary-foreground/80 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#conteudo"
                className="w-full rounded-full border border-border bg-card/60 px-8 py-4 text-base font-semibold backdrop-blur transition-colors hover:border-primary sm:w-auto"
              >
                Ver o conteúdo
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 lg:mx-0">
              {site.numeros.map((n) => (
                <div key={n.rotulo} className="text-center lg:text-left">
                  <dt className="text-2xl font-bold sm:text-3xl">
                    <CountUp value={n.valor} />
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{n.rotulo}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ── Player animado (elemento visual principal) ── */}
        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-sm animate-float">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-pink/20 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-card/70 p-5 shadow-2xl backdrop-blur-xl">
              {/* capa */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[#5b21b6] to-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-lg" aria-hidden>
                    🎧
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* infos */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Minha primeira faixa</p>
                  <p className="text-sm text-muted">Feita com IA · por você</p>
                </div>
                <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
                  ao vivo
                </span>
              </div>

              {/* equalizador animado */}
              <div className="mt-4 h-16 w-full">
                <Visualizer />
              </div>

              {/* controles */}
              <div className="mt-2 flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Reproduzir"
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                >
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                  <span className="relative ml-0.5 text-lg" aria-hidden>
                    ▶
                  </span>
                </button>
                <div className="flex-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-accent to-primary" />
                  </div>
                  <div className="mt-1.5 flex justify-between text-xs text-muted">
                    <span>1:18</span>
                    <span>3:02</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
