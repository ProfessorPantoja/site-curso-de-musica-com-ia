"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valor a exibir, ex: "+1.200", "4,9/5", "+40". O número é animado, o resto é mantido. */
  value: string;
  className?: string;
};

/**
 * Anima a contagem do(s) número(s) de uma string quando entra na tela,
 * preservando prefixos/sufixos (+, /5, etc.) e o formato pt-BR.
 */
export function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const match = value.match(/[\d.,]+/);
    if (reduce || !match) {
      setDisplay(value);
      return;
    }

    const raw = match[0];
    const target = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    const decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
    const useThousands = raw.includes(".");

    const format = (n: number) => {
      const fixed = n.toFixed(decimals).replace(".", ",");
      if (!useThousands) return value.replace(raw, fixed);
      const [int, dec] = fixed.split(",");
      const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return value.replace(raw, dec ? `${grouped},${dec}` : grouped);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(format(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
