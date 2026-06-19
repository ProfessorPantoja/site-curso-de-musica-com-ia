"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site";

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-4 text-muted">
          Ainda com dúvidas? Aqui estão as respostas mais comuns.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {FAQ.map((item, i) => {
          const ativo = aberto === i;
          return (
            <div
              key={item.pergunta}
              className={`overflow-hidden rounded-2xl border bg-card/70 backdrop-blur-sm transition-colors duration-300 ${
                ativo ? "border-primary/50" : "border-border"
              }`}
            >
              <button
                type="button"
                onClick={() => setAberto(ativo ? null : i)}
                aria-expanded={ativo}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium"
              >
                {item.pergunta}
                <span
                  aria-hidden
                  className={`shrink-0 text-xl text-accent transition-transform duration-300 ${
                    ativo ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {/* transição de altura suave via grid-rows */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  ativo
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-pretty text-muted">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
