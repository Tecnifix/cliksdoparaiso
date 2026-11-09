import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cliques do Paraíso | Fotografia em Jericoacoara",
  description:
    "Fotografia de destino exclusiva em Jericoacoara, Ceará. Retratos, casais e famílias com o pôr do sol de Preá a seu favor. Agende seu ensaio.",
  keywords: ["fotografia jericoacoara", "fotografo jeri", "ensaio casal jericoacoara", "fotografo ceara"],
  openGraph: {
    title: "Cliques do Paraíso | Fotografia em Jericoacoara",
    description: "Fotografia de destino exclusiva em Jericoacoara, Ceará.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
