import Link from "next/link";
import { site, checkoutLinkProps } from "@/lib/site";

const navLinks = [
  { href: "#historia", label: "A ideia" },
  { href: "#metodo", label: "O método" },
  { href: "#oferta", label: "Investimento" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#topo" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-serif text-lg text-white">
            ♪
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-navy">
              {site.marca}
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-terra-deep">
              {site.sobrescrita}
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm font-semibold text-muted transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            {...checkoutLinkProps}
            className="inline-flex items-center rounded-full bg-terra px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(217,154,108,0.34)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
          >
            Quero criar
          </a>
        </nav>
      </div>
    </header>
  );
}
