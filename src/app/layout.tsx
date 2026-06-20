import type { Metadata } from "next";
import { Newsreader, Mulish } from "next/font/google";
import "./globals.css";
import { site, SITE_URL, SEO_KEYWORDS } from "@/lib/site";

const mulish = Mulish({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const titulo = `${site.marca} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Curso Música como Presente com IA — ${site.marca} | ${site.tagline}`,
    template: `%s | ${site.marca}`,
  },
  description: site.descricaoCurta,
  keywords: SEO_KEYWORDS,
  authors: [{ name: site.instrutor.nome }],
  creator: site.instrutor.nome,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: site.marca,
    title: titulo,
    description: site.descricaoCurta,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: site.descricaoCurta,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${mulish.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
