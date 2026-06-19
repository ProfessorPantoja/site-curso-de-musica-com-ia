/**
 * Fundo decorativo da página: aurora em movimento + grade sutil.
 * Fica fixo atrás de todo o conteúdo. Server component (sem JS).
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* grade sutil */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 80%)",
        }}
      />
      {/* auroras */}
      <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] animate-aurora rounded-full bg-primary/30 blur-[130px]" />
      <div className="absolute top-1/3 -right-20 h-[420px] w-[420px] animate-aurora rounded-full bg-accent/20 blur-[130px] [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[460px] w-[460px] animate-aurora rounded-full bg-pink/15 blur-[140px] [animation-delay:-12s]" />
    </div>
  );
}
