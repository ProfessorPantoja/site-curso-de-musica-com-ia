import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Equalizer } from "@/components/ui/Equalizer";
import { PlayableTrack } from "@/components/player/PlayableTrack";

export function Prova() {
  const ec = site.escrituraCantada;
  return (
    <section className="bg-background px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* texto */}
        <Reveal>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
              A prova viva do método
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.3rem]">
              {ec.titulo}: um projeto inteiro nascido deste mesmo método.
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
              Em {ec.titulo} eu transformei os Salmos e passagens da Bíblia em
              canção — tudo com o método que você vai aprender. Não é teoria: são
              músicas reais, que você pode ouvir agora — é só tocar play — e que
              já emocionaram muita gente.
            </p>
            <a
              href={ec.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[15.5px] font-extrabold text-navy transition-colors hover:text-terra"
            >
              Conhecer o projeto completo <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        {/* card do player */}
        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_44px_rgba(52,52,46,0.08)]">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-lg text-white">
                ♪
              </span>
              <div className="flex-1">
                <div className="font-serif text-[17px] font-semibold text-ink">
                  {ec.titulo}
                </div>
                <div className="text-xs font-semibold text-soft">
                  {ec.subtitulo}
                </div>
              </div>
              <Equalizer bars={4} className="h-7 w-7" />
            </div>

            {ec.faixas.map((faixa) => (
              <PlayableTrack key={faixa.src} nome={faixa.nome} src={faixa.src} />
            ))}

            <a
              href={ec.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-t border-line pt-4 text-sm font-extrabold text-navy transition-colors hover:text-terra"
            >
              Ver o projeto completo <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
