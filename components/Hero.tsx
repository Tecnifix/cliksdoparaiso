"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Foto real de background */}
      <Image
        src="/fotos/individual-01.jpg"
        alt="Fotografia em Jericoacoara — Cliques do Paraíso"
        fill
        className="object-cover object-top"
        priority
        quality={85}
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Gradiente escuro embaixo */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Conteúdo */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[#F2913D] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          📍 Jericoacoara, Ceará
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-6">
          {COPY.hero.headline.split("foto").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <em className="not-italic text-[#14B8C4]">foto</em>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {COPY.hero.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink(COPY.hero.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F2913D] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#e07f30] active:scale-95 transition-all min-h-[48px]"
          >
            {COPY.hero.ctaPrimary}
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all min-h-[48px]"
          >
            {COPY.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#prova-social"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
