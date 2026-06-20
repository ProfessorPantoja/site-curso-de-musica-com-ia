type EqualizerProps = {
  bars?: number;
  className?: string;
  /** Cor das barras (classe Tailwind de background). */
  barClassName?: string;
};

/**
 * Mini equalizador com barras animadas (pura CSS). Dá a sensação de música
 * tocando, no tom calmo do design. Decorativo.
 */
export function Equalizer({
  bars = 5,
  className = "",
  barClassName = "bg-terra",
}: EqualizerProps) {
  return (
    <div
      aria-hidden
      className={`flex items-end gap-[3px] ${className}`}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className={`eq-bar w-[3px] flex-1 rounded-full ${barClassName}`}
          style={{
            height: "100%",
            animationDelay: `${(i % bars) * 0.18}s`,
            animationDuration: `${0.9 + (i % 3) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}
