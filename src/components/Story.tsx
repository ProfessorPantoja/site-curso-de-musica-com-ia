import { Reveal } from "@/components/ui/Reveal";

export function Story() {
  return (
    <section id="historia" className="bg-navy px-6 py-20 sm:py-24 text-[#eef2f8]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sand">
            Por que uma música
          </span>
        </Reveal>
        <Reveal delay={100} as="p">
          <span className="mt-5 block font-serif text-2xl italic leading-snug text-white sm:text-[2rem]">
            &ldquo;Flores murcham. Cartões se perdem. Mas uma música feita com o
            nome e a história de quem você ama toca para sempre.&rdquo;
          </span>
        </Reveal>
        <Reveal delay={180} as="p">
          <span className="mx-auto mt-6 block max-w-2xl text-lg leading-relaxed text-[#c3cee0]">
            O problema nunca foi falta de amor — foi não saber por onde começar.
            Você sente o que quer dizer, mas não sabe transformar isso em uma
            canção. É exatamente essa ponte que o curso constrói com você, em uma
            única tarde.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
