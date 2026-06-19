"use client";

import { useEffect, useRef } from "react";

type VisualizerProps = {
  className?: string;
  /** Número de barras do equalizador. */
  bars?: number;
};

/**
 * Equalizador de áudio animado desenhado em canvas. Simula uma faixa tocando,
 * com barras que ondulam e reagem à proximidade do mouse. Puramente visual.
 */
export function Visualizer({ className = "", bars = 56 }: VisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let mouseX = -999;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      mouseX = (e.clientX - canvas.getBoundingClientRect().left) * dpr;
    }
    function onLeave() {
      mouseX = -999;
    }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const seeds = Array.from({ length: bars }, () => Math.random() * Math.PI * 2);

    function draw(t: number) {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const gap = w / bars;
      const barW = gap * 0.5;
      const time = t / 600;

      for (let i = 0; i < bars; i++) {
        const x = i * gap + gap / 2;
        const wave =
          0.5 +
          0.5 *
            Math.sin(time + seeds[i] + i * 0.35) *
            Math.cos(time * 0.6 + i * 0.12);

        // realce perto do mouse
        const dist = Math.abs(x - mouseX);
        const boost = mouseX > 0 ? Math.max(0, 1 - dist / (gap * 5)) * 0.9 : 0;

        const amp = Math.min(1, wave * 0.8 + boost);
        const barH = amp * h * 0.85 + h * 0.05;
        const y = (h - barH) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + barH);
        grad.addColorStop(0, "#22d3ee");
        grad.addColorStop(0.5, "#8b5cf6");
        grad.addColorStop(1, "#ec4899");
        ctx.fillStyle = grad;

        const r = barW / 2;
        ctx.beginPath();
        ctx.roundRect(x - barW / 2, y, barW, barH, r);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [bars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`h-full w-full ${className}`}
    />
  );
}
