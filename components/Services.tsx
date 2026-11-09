"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const services = [
  {
    id: "individual",
    title: "Retratos Individuais",
    phrase: "Você chega de passageiro, sai de protagonista.",
    description: "O foco total é em você — sua expressão, sua luz, o seu momento.",
    img: "/fotos/individual-04.jpg",
  },
  {
    id: "casal",
    title: "Casais & Namorados",
    phrase: "Memórias que parecem cenas de filme.",
    description: "A conexão de vocês dois, fotografada onde a luz faz o resto.",
    img: "/fotos/casal-02.jpg",
  },
  {
    id: "familia",
    title: "Famílias",
    phrase: "O sorriso deles não vai durar para sempre — a foto vai.",
    description: "Risadas reais, abraços reais, nas praias mais bonitas do Brasil.",
    img: "/fotos/familia-01.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            O que eu faço
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B] leading-tight">
            Cada ensaio conta uma{" "}
            <em className="not-italic text-[#0E7C86]">história diferente</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Foto real */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-white mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm italic mb-4">{s.phrase}</p>
                <p className="text-white/60 text-xs mb-4 hidden group-hover:block transition-all">
                  {s.description}
                </p>
                <a
                  href={waLink(COPY.services.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white text-sm font-medium hover:gap-2 transition-all group/btn"
                >
                  Ver esse ensaio
                  <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
