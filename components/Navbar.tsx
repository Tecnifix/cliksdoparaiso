"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { SITE_CONFIG, waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const links = [
  { label: "O que faço", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#hero" aria-label="Início">
            <Logo variant={scrolled ? "light" : "dark"} width={140} />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm tracking-wide transition-colors hover:text-teal-600 ${
                    scrolled ? "text-zinc-700" : "text-white/90"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={waLink(COPY.hero.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#F2913D] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#e07f30] transition-colors"
          >
            Agendar ensaio
          </a>

          {/* Mobile burger */}
          <button
            className={`lg:hidden p-2 ${scrolled ? "text-zinc-800" : "text-white"}`}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile off-canvas */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <Logo variant="light" width={130} />
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X size={22} className="text-zinc-600" />
            </button>
          </div>
          <ul className="p-6 space-y-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-zinc-700 text-base font-medium hover:text-teal-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={waLink(COPY.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#F2913D] text-white font-medium py-3 rounded-full hover:bg-[#e07f30] transition-colors"
                onClick={() => setOpen(false)}
              >
                Agendar ensaio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
