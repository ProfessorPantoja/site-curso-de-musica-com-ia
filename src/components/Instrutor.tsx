import { site } from "@/lib/site";

export function Instrutor() {
  const iniciais = site.instrutor.nome
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="instrutor" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 md:grid-cols-[auto_1fr]">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl font-bold text-white">
          {iniciais}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Seu instrutor
          </p>
          <h2 className="mt-2 text-3xl font-bold">{site.instrutor.nome}</h2>
          <p className="mt-1 text-muted">{site.instrutor.titulo}</p>
          <p className="mt-5 text-pretty leading-relaxed text-foreground/90">
            {site.instrutor.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
