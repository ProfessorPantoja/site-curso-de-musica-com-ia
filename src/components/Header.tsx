"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#instrutor", label: "Instrutor" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span aria-hidden className="text-xl">🎵</span>
          <span>{site.nome}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.oferta.linkCheckout}
          className="btn-glow rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
        >
          Quero me inscrever
        </a>
      </div>
    </header>
  );
}
