"use client";

import { usePlayer } from "@/components/player/PlayerProvider";
import { Equalizer } from "@/components/ui/Equalizer";

export function PlayerBar() {
  const { tracks, current, isPlaying, toggle, next, prev } = usePlayer();

  // Só aparece depois que a pessoa toca a primeira faixa.
  if (current === null) return null;
  const faixa = tracks[current];

  return (
    <>
      {/* espaçador para a barra fixa não cobrir o rodapé */}
      <div aria-hidden className="h-[72px]" />

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
          {/* selo */}
          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-lg text-white sm:flex">
            ♪
          </span>

          {/* controles */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Faixa anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition-colors hover:bg-beige-2"
            >
              ⏮
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label={isPlaying ? "Pausar" : "Tocar"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-terra text-lg text-white shadow-[0_8px_20px_rgba(217,154,108,0.4)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima faixa"
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition-colors hover:bg-beige-2"
            >
              ⏭
            </button>
          </div>

          {/* faixa atual */}
          <div className="min-w-0 flex-1">
            <div className="truncate text-[14.5px] font-bold text-ink">
              {faixa.nome}
            </div>
            <div className="truncate text-[11.5px] font-semibold uppercase tracking-[0.12em] text-soft">
              A Escritura Cantada
            </div>
          </div>

          {isPlaying && <Equalizer bars={4} className="hidden h-6 w-6 shrink-0 sm:block" />}
        </div>
      </div>
    </>
  );
}
