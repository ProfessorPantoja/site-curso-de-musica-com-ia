import { site } from "@/lib/site";

export function Footer() {
  const ano = new Date().getFullYear();
  const social = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="mt-auto bg-navy-deep px-6 py-10 text-[#aebbd0]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terra font-serif text-[15px] text-white">
            ♪
          </span>
          <span className="font-serif text-base font-semibold text-[#eef2f8]">
            {site.marca}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[13px]">
          {social.map(([rede, url]) => (
            <a
              key={rede}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize transition-colors hover:text-white"
            >
              {rede}
            </a>
          ))}
          <span>
            © {ano} {site.instrutor.nome} · Curso intensivo de criação musical
          </span>
        </div>
      </div>
    </footer>
  );
}
