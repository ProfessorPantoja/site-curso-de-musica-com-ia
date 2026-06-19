"use client";

import { useEffect, useRef } from "react";

/**
 * Brilho suave fixo que segue o cursor pela página inteira, dando a sensação
 * de que o fundo "reage" ao mouse. Desativado para quem prefere menos movimento
 * e em telas touch (onde não há cursor).
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    el.style.opacity = "1";
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[600px] w-[600px] opacity-0 transition-opacity duration-700 mix-blend-screen"
      style={{
        marginLeft: "-300px",
        marginTop: "-300px",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.13), rgba(34,211,238,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
