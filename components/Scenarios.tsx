"use client";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const scenarios = [
  {
    name: "Praia do Preá",
    desc: "Águas rasas turquesa, catamarãs ao fundo, vento constante.",
    bestTime: "Pôr do sol 17h30",
    mood: "Romântico · Casal · Individual",
    img: "/fotos/individual-02.jpg",
  },
  {
    name: "Ponta de Jeri",
    desc: "O encontro do oceano com a lagoa — paisagem de outro mundo.",
    bestTime: "Golden hour 17h00",
    mood: "Dramático · Família · Casal",
    img: "/fotos/casal-04.jpg",
  },
  {
    name: "Duna das 7 Cores",
    desc: "Tons de terra e luz lateral que esculpem qualquer pose.",
    bestTime: "Tarde 15h–16h",
    mood: "Editorial · Individual",
    img: "/fotos/individual-07.jpg",
  },
  {
    name: "Lagoa Paraíso",
    desc: "Transparência cristalina, dunas ao fundo, leveza absoluta.",
    bestTime: "Manhã 09h–11h",
    mood: "Leve · Família · Casal",
    img: "/fotos/casal-02.jpg",
  },
  {
    name: "Ilha dos Pássaros",
    desc: "Isolada na maré baixa, exclusiva, fora do roteiro comum.",
    bestTime: "Maré baixa (variável)",
    mood: "Exclusivo · Individual",
    img: "/fotos/individual-06.jpg",
  },
];

export default function Scenarios() {
  return (
    <section id="cenarios" className="py-24 bg-[#F5EFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Cenários de Jeri
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B]">
            Eu conheço cada{" "}
            <em className="not-italic text-[#0E7C86]">ângulo de luz</em>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Sei exatamente onde a luz bate às 17h e onde o vento não bagunça o cabelo.
          </p>
        </div>
      </div>

      {/* Carrossel scroll horizontal */}
      <div className="pl-4 sm:pl-[max(1rem,calc((100vw-80rem)/2))]">
        <div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden snap-start bg-[#2B2B2B]"
            >
              {/* Foto real */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl text-white mb-1">{s.name}</h3>
                <p className="text-white/60 text-sm mb-3">{s.desc}</p>
                <div className="flex items-center gap-2 text-[#14B8C4] text-xs mb-2">
                  <Clock size={12} />
                  <span>{s.bestTime}</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <MapPin size={12} />
                  <span>{s.mood}</span>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden snap-start bg-[#F2913D] flex flex-col items-center justify-center p-8 text-center min-h-[320px]">
            <p className="font-serif text-2xl text-white mb-3">Qual cenário é o seu?</p>
            <p className="text-white/80 text-sm mb-6">Conta no WhatsApp — eu indico o melhor para o seu estilo.</p>
            <a
              href={waLink(COPY.scenarios.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#F2913D] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#F5EFE6] transition-colors min-h-[48px] flex items-center"
            >
              Escolher cenário
            </a>
          </div>

          {/* Spacer */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>
    </section>
  );
}
