import { FAQ } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-beige-2 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
              Dúvidas comuns
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-[2.3rem]">
              Antes de você decidir
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <Reveal key={item.pergunta} delay={i * 60}>
              <details className="group rounded-2xl border border-border bg-card px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-serif text-[18.5px] font-semibold text-ink">
                  {item.pergunta}
                  <span className="text-2xl text-terra transition-transform duration-300 group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="pb-5 text-[15.5px] leading-relaxed text-muted">
                  {item.resposta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
