"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

type Category = "todos" | "individual" | "casal" | "familia";

const photos = [
  { id: 1,  cat: "casal"      as const, label: "Ensaio de casal — Lagoa Paraíso",      src: "/fotos/casal-02.jpg" },
  { id: 2,  cat: "individual" as const, label: "Retrato individual — Duna das 7 Cores", src: "/fotos/individual-01.jpg" },
  { id: 3,  cat: "familia"    as const, label: "Família — Praia do Preá",               src: "/fotos/familia-01.jpg" },
  { id: 4,  cat: "casal"      as const, label: "Casal — Ponta de Jeri",                 src: "/fotos/casal-01.jpg" },
  { id: 5,  cat: "individual" as const, label: "Retrato — Praia de Jericoacoara",       src: "/fotos/individual-02.jpg" },
  { id: 6,  cat: "familia"    as const, label: "Família — Ilha dos Pássaros",           src: "/fotos/familia-02.jpg" },
  { id: 7,  cat: "casal"      as const, label: "Casal — Golden hour Duna",              src: "/fotos/casal-03.jpg" },
  { id: 8,  cat: "individual" as const, label: "Ensaio individual — Lagoa Azul",        src: "/fotos/individual-03.jpg" },
  { id: 9,  cat: "familia"    as const, label: "Família — Pôr do sol Preá",             src: "/fotos/familia-03.jpg" },
  { id: 10, cat: "casal"      as const, label: "Casal — Jeri centro",                   src: "/fotos/casal-04.jpg" },
  { id: 11, cat: "individual" as const, label: "Retrato — Deck de madeira",             src: "/fotos/individual-04.jpg" },
  { id: 12, cat: "individual" as const, label: "Ensaio — Lagoa Paraíso",                src: "/fotos/individual-06.jpg" },
  { id: 13, cat: "individual" as const, label: "Retrato — Praia do Preá",               src: "/fotos/individual-05.jpg" },
  { id: 14, cat: "individual" as const, label: "Retrato — Orla de Jericoacoara",        src: "/fotos/individual-07.jpg" },
];

const tabs: { label: string; value: Category }[] = [
  { label: "Todos",     value: "todos"      },
  { label: "Individual",value: "individual" },
  { label: "Casal",     value: "casal"      },
  { label: "Família",   value: "familia"    },
];

export default function Portfolio() {
  const [active, setActive]   = useState<Category>("todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "todos" ? photos : photos.filter((p) => p.cat === active);

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return;
    const idx  = filtered.findIndex((p) => p.id === lightbox);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  };

  const lightboxPhoto = lightbox !== null ? photos.find((p) => p.id === lightbox) : null;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B]">
            Memórias que ficam
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setActive(t.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                active === t.value
                  ? "bg-[#0E7C86] text-white"
                  : "bg-[#F5EFE6] text-zinc-600 hover:bg-[#0E7C86]/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid masonry simulado */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-3 group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/3" }}
              onClick={() => setLightbox(photo.id)}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Legenda ao hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={waLink(COPY.portfolio.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F2913D] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#e07f30] transition-all min-h-[48px]"
          >
            Quero um ensaio assim →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
          >
            <ChevronLeft size={36} />
          </button>
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxPhoto.src}
              alt={lightboxPhoto.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center px-4">
            {lightboxPhoto.label}
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
