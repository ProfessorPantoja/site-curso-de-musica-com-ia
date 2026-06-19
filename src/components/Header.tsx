import Link from "next/link";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#instrutor", label: "Instrutor" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span aria-hidden className="text-xl">🎵</span>
          <span>{site.nome}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.oferta.linkCheckout}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
        >
          Quero me inscrever
        </a>
      </div>
    </header>
  );
}
