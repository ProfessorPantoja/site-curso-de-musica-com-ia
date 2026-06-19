import { site, BENEFICIOS } from "@/lib/site";

export function Pricing() {
  return (
    <section id="inscricao" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Comece hoje mesmo
        </h2>
        <p className="mt-4 text-muted">
          Acesso vitalício, atualizações incluídas e garantia de{" "}
          {site.oferta.garantiaDias} dias.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Curso completo {site.nome}
          </p>

          <div className="mt-6">
            <p className="text-muted">
              de <span className="line-through">{site.oferta.precoDe}</span> por
            </p>
            <p className="mt-1 text-5xl font-extrabold">
              {site.oferta.precoPor}
            </p>
            <p className="mt-2 text-muted">
              ou {site.oferta.parcelas}
            </p>
          </div>

          <a
            href={site.oferta.linkCheckout}
            className="mt-8 inline-block w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
          >
            Garantir minha vaga
          </a>

          <p className="mt-4 text-xs text-muted">
            Pagamento 100% seguro · Garantia incondicional de{" "}
            {site.oferta.garantiaDias} dias
          </p>
        </div>

        <ul className="relative mt-10 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
          {BENEFICIOS.map((b) => (
            <li key={b.titulo} className="flex items-start gap-2 text-sm">
              <span aria-hidden className="mt-0.5 text-accent">
                ✓
              </span>
              {b.titulo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
