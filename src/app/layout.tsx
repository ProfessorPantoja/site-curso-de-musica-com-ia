import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site, SITE_URL, SEO_KEYWORDS } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.nome} — ${site.tagline}`,
    template: `%s | ${site.nome}`,
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
    siteName: site.nome,
    title: `${site.nome} — ${site.tagline}`,
    description: site.descricaoCurta,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — ${site.tagline}`,
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
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
