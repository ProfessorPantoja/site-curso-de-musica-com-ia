"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { site } from "@/lib/site";

export type Track = { nome: string; src: string };

/** Faixas vêm da configuração central (site.ts). */
const TRACKS: Track[] = site.escrituraCantada.faixas.map((f) => ({
  nome: f.nome,
  src: f.src,
}));

type PlayerContextValue = {
  tracks: Track[];
  current: number | null;
  isPlaying: boolean;
  /** Toca uma faixa pelo src (ou pausa/retoma se já for a atual). */
  playSrc: (src: string) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer precisa estar dentro de <PlayerProvider>");
  return ctx;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sempre que a faixa atual muda, carrega e dá play.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || current === null) return;
    audio.src = TRACKS[current].src;
    audio.play().catch(() => setIsPlaying(false));
  }, [current]);

  const playSrc = useCallback(
    (src: string) => {
      const idx = TRACKS.findIndex((t) => t.src === src);
      if (idx < 0) return;
      const audio = audioRef.current;
      if (idx === current && audio) {
        if (audio.paused) audio.play().catch(() => setIsPlaying(false));
        else audio.pause();
        return;
      }
      setCurrent(idx);
    },
    [current],
  );

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || current === null) return;
    if (audio.paused) audio.play().catch(() => setIsPlaying(false));
    else audio.pause();
  }, [current]);

  const step = useCallback((delta: number) => {
    setCurrent((c) => {
      const base = c ?? 0;
      return (base + delta + TRACKS.length) % TRACKS.length;
    });
  }, []);

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  return (
    <PlayerContext.Provider
      value={{ tracks: TRACKS, current, isPlaying, playSrc, toggle, next, prev }}
    >
      {children}
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={next}
      />
    </PlayerContext.Provider>
  );
}
