import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* brilhos de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Novo método com Inteligência Artificial
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Crie suas próprias músicas com{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Inteligência Artificial
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted">
          {site.descricaoCurta}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.oferta.linkCheckout}
            className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105 sm:w-auto"
          >
            Começar agora — {site.oferta.precoPor}
          </a>
          <a
            href="#conteudo"
            className="w-full rounded-full border border-border bg-card px-8 py-4 text-base font-semibold transition-colors hover:border-primary sm:w-auto"
          >
            Ver o conteúdo
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6">
          {site.numeros.map((n) => (
            <div key={n.rotulo} className="text-center">
              <dt className="text-2xl font-bold text-foreground sm:text-3xl">
                {n.valor}
              </dt>
              <dd className="mt-1 text-sm text-muted">{n.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
