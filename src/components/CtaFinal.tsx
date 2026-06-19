import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card/80 to-accent/10 p-10 text-center backdrop-blur-md sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 top-0 h-64 w-64 animate-aurora rounded-full bg-pink/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 animate-aurora rounded-full bg-accent/20 blur-3xl [animation-delay:-8s]"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A sua próxima música começa agora
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Pare de adiar a ideia que está na sua cabeça. Em poucos dias você
              pode ter sua primeira faixa pronta para o mundo ouvir.
            </p>
            <a
              href={site.oferta.linkCheckout}
              className="btn-glow mt-8 inline-block rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
            >
              Quero criar minhas músicas — {site.oferta.precoPor}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
