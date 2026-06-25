import { site, checkoutLinkProps } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Oferta() {
  const o = site.oferta;
  return (
    <section id="oferta" className="bg-navy px-6 py-20 sm:py-24 text-[#eef2f8]">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sand">
            Investimento
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-white sm:text-[2.5rem]">
            Uma habilidade para a vida. Um presente sem preço.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          {o.mostrarPreco ? (
            <div className="mt-8 rounded-3xl bg-white px-8 py-9 text-ink shadow-[0_28px_60px_rgba(0,0,0,0.28)]">
              <div className="text-sm font-semibold text-[#a09889] line-through">
                De {o.precoDe}
              </div>
              <div className="my-1 flex items-baseline justify-center gap-1.5">
                <span className="text-lg font-extrabold text-terra">
                  {o.moedaSimbolo}
                </span>
                <span className="font-serif text-6xl font-semibold leading-none text-ink">
                  {o.precoNumeroInteiro}
                </span>
              </div>
              <div className="text-sm font-semibold text-[#7a746a]">
                {o.formaPagamento}
              </div>
              <a
                {...checkoutLinkProps}
                className="mt-6 flex items-center justify-center gap-2.5 rounded-full bg-terra py-4 text-[17px] font-extrabold text-white shadow-[0_14px_30px_rgba(217,154,108,0.4)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
              >
                Quero garantir minha vaga <span aria-hidden>→</span>
              </a>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[13px] font-semibold text-[#a09889]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-terra">⛉</span> Pagamento via Pix
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-terra">↺</span> Acesso imediato
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-white px-8 py-9 text-ink shadow-[0_28px_60px_rgba(0,0,0,0.28)]">
              <p className="font-serif text-lg italic leading-relaxed text-[#43403a]">
                Estou montando a próxima turma. Fale comigo para saber o valor e
                garantir sua vaga.
              </p>
              <a
                {...checkoutLinkProps}
                className="mt-6 flex items-center justify-center gap-2.5 rounded-full bg-terra py-4 text-[17px] font-extrabold text-white transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
              >
                Quero saber o valor e a data <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </Reveal>

        <Reveal delay={180} as="p">
          <span className="mt-5 block text-[13.5px] text-[#9fb0c9]">
            Vagas limitadas por turma para manter o acompanhamento de perto.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
