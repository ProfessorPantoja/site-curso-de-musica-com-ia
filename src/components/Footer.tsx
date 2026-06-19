import { site } from "@/lib/site";

export function Footer() {
  const ano = new Date().getFullYear();
  const social = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="mt-auto border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <span aria-hidden className="text-xl">🎵</span>
            {site.nome}
          </div>

          <div className="flex flex-col items-center gap-1 text-sm text-muted sm:items-end">
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            {social.length > 0 && (
              <div className="mt-2 flex gap-4">
                {social.map(([rede, url]) => (
                  <a
                    key={rede}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize transition-colors hover:text-foreground"
                  >
                    {rede}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted">
          © {ano} {site.nome}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
