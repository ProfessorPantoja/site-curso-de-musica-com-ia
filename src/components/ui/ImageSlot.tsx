import Image from "next/image";

type ImageSlotProps = {
  /** Caminho da imagem (ex: "/fotos/hero.jpg"). Se vazio, mostra um placeholder. */
  src?: string;
  alt?: string;
  /** Texto de orientação exibido enquanto não há imagem. */
  placeholder?: string;
  /** Proporção da área, ex: "4/5", "4/4.4". */
  ratio?: string;
  className?: string;
};

/**
 * Espaço reservado para imagem. Enquanto você não coloca a foto real, mostra um
 * placeholder elegante com a orientação do que vai ali. Para usar a foto, basta
 * passar `src` (coloque o arquivo na pasta /public).
 */
export function ImageSlot({
  src,
  alt = "",
  placeholder = "Foto",
  ratio = "4/5",
  className = "",
}: ImageSlotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-beige-2 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-terra shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-soft">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
