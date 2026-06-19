import { site } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card to-accent/10 p-10 text-center sm:p-16">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          A sua próxima música começa agora
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Pare de adiar a ideia que está na sua cabeça. Em poucos dias você pode
          ter sua primeira faixa pronta para o mundo ouvir.
        </p>
        <a
          href={site.oferta.linkCheckout}
          className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
        >
          Quero criar minhas músicas — {site.oferta.precoPor}
        </a>
      </div>
    </section>
  );
}
