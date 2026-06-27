"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em ms para encadear animações em sequência. */
  delay?: number;
  /** Tag HTML a renderizar (padrão: div). */
  as?: ElementType;
  className?: string;
};

/**
 * Anima a entrada do conteúdo quando ele aparece na viewport.
 * Importante p/ SEO: o conteúdo só fica "escondido" depois que o JS monta —
 * sem JS (ou para crawlers), ele já vem visível.
 */
export function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Só "esconde" para animar depois que o JS monta — sem JS (crawlers),
    // o conteúdo já vem visível. Aplicado via classList p/ evitar setState no efeito.
    el.classList.add("reveal");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
