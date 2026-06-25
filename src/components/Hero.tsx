import { site, checkoutLinkProps } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Equalizer } from "@/components/ui/Equalizer";

export function Hero() {
  return (
    <section id="topo" className="bg-background px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── Texto ── */}
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-beige px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-terra" />
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-terra-deep">
                Curso intensivo · {site.oferta.duracao} · do zero
              </span>
            </div>
          </Reveal>

          <Reveal delay={80} as="h1">
            <span className="block font-serif text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-[3.6rem]">
              Dê a quem você ama uma música que{" "}
              <em className="italic text-terra-deep">só você</em> poderia criar.
            </span>
          </Reveal>

          <Reveal delay={160} as="p">
            <span className="mt-6 block max-w-xl text-lg leading-relaxed text-muted">
              Na era da inteligência artificial, eu virei produtor musical — e em
              uma única tarde, do zero, você também vai virar. Com o{" "}
              <strong className="font-bold text-navy">{site.marca}</strong>, você
              sai com um presente pronto para a sua mãe, seu pai, um amigo ou a
              sua igreja. Sem teoria, sem instrumento, sem precisar cantar.
            </span>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex items-center gap-3.5 rounded-2xl border-[1.5px] border-terra/45 bg-beige px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-terra text-xl text-white">
                📋
              </span>
              <p className="text-[15.5px] font-bold leading-snug text-ink">
                Você leva o{" "}
                <span className="text-terra-deep">método exato do Pantoja</span>{" "}
                — é só copiar, colar e seguir.
              </p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a
                {...checkoutLinkProps}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(217,154,108,0.36)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
              >
                Quero presentear com música <span aria-hidden>→</span>
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-border px-8 py-4 text-base font-bold text-navy transition-colors hover:bg-beige-2"
              >
                Como funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-soft">
              <span className="inline-flex items-center gap-2">
                <span className="text-terra">✦</span> Sem experiência nenhuma
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-terra">✦</span> Você sai com a música pronta
              </span>
            </div>
          </Reveal>
        </div>

        {/* ── Imagem + card flutuante ── */}
        <Reveal delay={200}>
          <div className="relative">
            <ImageSlot
              src=""
              placeholder="Foto: um momento de presente / família"
              ratio="4/4.4"
              className="shadow-[0_30px_60px_rgba(52,52,46,0.14)]"
            />
            <div className="absolute -left-3 bottom-7 flex max-w-[280px] items-center gap-3.5 rounded-2xl border border-border bg-white p-4 shadow-[0_16px_34px_rgba(52,52,46,0.16)] sm:-left-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                ▶
              </span>
              <div className="min-w-0">
                <div className="font-serif text-[15.5px] font-semibold text-ink">
                  &ldquo;Para a minha mãe&rdquo;
                </div>
                <div className="text-xs font-semibold text-soft">
                  criada em {site.oferta.duracao} no curso
                </div>
              </div>
              <Equalizer bars={4} className="h-6 w-6 shrink-0" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
