"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Inclina levemente o card seguindo o mouse (efeito 3D). */
  tilt?: boolean;
};

/**
 * Card com brilho radial que segue o cursor e leve inclinação 3D no hover.
 */
export function SpotlightCard({
  children,
  className = "",
  tilt = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      const rx = ((y / rect.height) * 2 - 1) * -5;
      const ry = ((x / rect.width) * 2 - 1) * 5;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  }

  function handleLeave() {
    const el = ref.current;
    if (el && tilt) el.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`spotlight transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
