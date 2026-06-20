import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  return (
    <section className="bg-background px-6 py-20 text-center sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.8rem]">
            Alguém que você ama merece ouvir isso.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Daqui a {site.oferta.duracao}, você pode ter criado a música. Daqui a
            uma vida, ela ainda vai estar tocando o coração de quem a recebeu.
          </p>
          <a
            href={site.oferta.linkCheckout}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-terra px-10 py-4 text-[17px] font-extrabold text-white shadow-[0_14px_30px_rgba(217,154,108,0.4)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
          >
            Quero criar minha música <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
