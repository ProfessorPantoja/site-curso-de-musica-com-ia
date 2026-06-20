import { METODO, site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Metodo() {
  return (
    <section id="metodo" className="bg-beige-2 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
              O {site.marca}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.6rem]">
              Quatro caminhos. Você escolhe quanto quer fazer com as próprias
              mãos.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Cada degrau já entrega uma música pronta. Você sobe até onde se
              sentir confortável — do totalmente seu ao quase mágico com a IA.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {METODO.map((m, i) => {
            const destaque = "destaque" in m && m.destaque;
            return (
              <Reveal key={m.numero} delay={i * 80}>
                <div
                  className={`grid grid-cols-[48px_1fr] items-center gap-5 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 sm:grid-cols-[64px_1fr] sm:gap-6 sm:p-7 ${
                    destaque
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-card"
                  }`}
                >
                  <div
                    className={`font-serif text-4xl font-medium leading-none ${
                      destaque ? "text-sand" : "text-terra"
                    }`}
                  >
                    {m.numero}
                  </div>
                  <div>
                    <h3
                      className={`font-serif text-xl font-semibold ${
                        destaque ? "text-white" : "text-ink"
                      }`}
                    >
                      {m.titulo}
                    </h3>
                    <p
                      className={`mt-1.5 leading-relaxed ${
                        destaque ? "text-[#c3cee0]" : "text-muted"
                      }`}
                    >
                      {m.descricao}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
