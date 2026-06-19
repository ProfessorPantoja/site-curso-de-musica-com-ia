import { DEPOIMENTOS } from "@/lib/site";

export function Depoimentos() {
  return (
    <section className="border-y border-border/60 bg-card/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quem já fez, recomenda
          </h2>
          <p className="mt-4 text-muted">
            Resultados reais de alunos que começaram do zero.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div aria-hidden className="text-accent">
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-foreground/90">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold">{d.nome}</div>
                <div className="text-sm text-muted">{d.papel}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
