import { OCASIOES } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Ocasioes() {
  return (
    <section className="bg-background px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
              Para cada pessoa que importa
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.6rem]">
              Um presente para qualquer ocasião do coração
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OCASIOES.map((o, i) => (
            <Reveal key={o.titulo} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(52,52,46,0.10)]">
                <div className="mb-3 text-3xl">{o.emoji}</div>
                <h3 className="mb-1.5 font-serif text-lg font-semibold text-ink">
                  {o.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-[#7a746a]">
                  {o.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
