import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Instrutor() {
  const iniciais = site.instrutor.nome
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="instrutor" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <div className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/40" />
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary via-pink to-accent text-5xl font-bold text-white shadow-xl">
              {iniciais}
            </div>
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
      </Reveal>
    </section>
  );
}
