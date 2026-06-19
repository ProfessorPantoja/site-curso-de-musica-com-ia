import { BENEFICIOS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Beneficios() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Por que aprender com a gente
          </h2>
          <p className="mt-4 text-muted">
            Um caminho direto e sem enrolação para você sair do zero e publicar
            suas primeiras músicas.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFICIOS.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 70}>
            <SpotlightCard
              tilt
              className="h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/60"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted">{b.descricao}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
