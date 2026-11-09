"use client";
import { MessageCircle, Instagram } from "lucide-react";
import { SITE_CONFIG, waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0E7C86]">
      {/* Textura de água sutil */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='20' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' stroke='white' stroke-width='1.5' fill='none'/%3E%3Cpath d='M0 16 Q25 6 50 16 Q75 26 100 16' stroke='white' stroke-width='1' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Gradiente de profundidade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14B8C4]/30 via-transparent to-[#0a5f68]/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Pronto para ir?
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
          {COPY.finalCta.headline}
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          A agenda está aberta. Quanto antes você marcar, mais opções de cenário e horário.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink(COPY.finalCta.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#1ebe59] active:scale-95 transition-all min-h-[52px] shadow-lg shadow-black/20"
          >
            <MessageCircle size={20} />
            {COPY.finalCta.ctaLabel}
          </a>

          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white font-medium text-base px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all min-h-[52px]"
          >
            <Instagram size={20} />
            @{SITE_CONFIG.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
