const ITENS = [
  "Suno",
  "Udio",
  "ChatGPT",
  "Mixagem",
  "Spotify",
  "Letras com IA",
  "Masterização",
  "YouTube",
  "Distribuição",
];

/**
 * Faixa horizontal em movimento contínuo com os temas/ferramentas do curso.
 * Duplicada para criar loop infinito perfeito.
 */
export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-card/20 py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {[...ITENS, ...ITENS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-muted"
          >
            <span aria-hidden className="text-accent">
              ♪
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
