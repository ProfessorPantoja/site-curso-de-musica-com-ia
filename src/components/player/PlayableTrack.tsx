"use client";

import { usePlayer } from "@/components/player/PlayerProvider";

/** Linha de faixa clicável usada na seção "Prova". Dá play na barra do rodapé. */
export function PlayableTrack({ nome, src }: { nome: string; src: string }) {
  const { tracks, current, isPlaying, playSrc } = usePlayer();
  const isCurrent = current !== null && tracks[current]?.src === src;
  const playingThis = isCurrent && isPlaying;

  return (
    <button
      type="button"
      onClick={() => playSrc(src)}
      aria-label={playingThis ? `Pausar ${nome}` : `Tocar ${nome}`}
      className="flex w-full items-center gap-3.5 border-t border-line py-3 text-left transition-colors hover:bg-beige-2/60"
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] transition-colors ${
          isCurrent ? "bg-terra text-white" : "bg-beige text-terra-deep"
        }`}
      >
        {playingThis ? "⏸" : "▶"}
      </span>
      <span
        className={`flex-1 text-[15px] font-semibold ${
          isCurrent ? "text-terra-deep" : "text-[#43403a]"
        }`}
      >
        {nome}
      </span>
      <span className="font-serif text-xs text-[#a09889]" aria-hidden>
        ♪
      </span>
    </button>
  );
}
