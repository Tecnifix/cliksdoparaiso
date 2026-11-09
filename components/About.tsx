"use client";
import Image from "next/image";
import { Camera, Sun, Wind, Award } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const highlights = [
  { icon: Camera, label: "145+ ensaios", sub: "publicados" },
  { icon: Sun,    label: "3 anos",       sub: "fotografando Jeri" },
  { icon: Wind,   label: "5 cenários",   sub: "exclusivos" },
  { icon: Award,  label: "72h",          sub: "entrega garantida" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#F5EFE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto real */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/fotos/individual-05.jpg"
                alt="Fotógrafa Cliques do Paraíso em Jericoacoara"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#F2913D] text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-xs font-medium opacity-80">Jericoacoara</p>
              <p className="font-serif text-lg">Fotógrafa local</p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Sobre
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] leading-tight mb-6">
              Moro em Jeri.{" "}
              <em className="not-italic text-[#0E7C86]">Conheço cada luz.</em>
            </h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
              <p>
                Enquanto você está de passagem por Jericoacoara, eu estou aqui o ano todo — conhecendo cada praia, cada horário de luz, cada vento que faz o véu de noiva voar de um jeito cinematográfico.
              </p>
              <p>
                Já fotografei mais de 145 casais, famílias e viajantes solitários que chegaram querendo só uma foto bonita e saíram com um álbum que parece campanha de viagem.
              </p>
              <p className="font-medium text-[#2B2B2B]">
                "Falo sua língua: sei exatamente onde a luz bate às 17h e onde o vento não bagunça o cabelo."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#0E7C86]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2B2B2B] text-sm">{h.label}</p>
                      <p className="text-zinc-400 text-xs">{h.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={waLink(COPY.about.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0E7C86] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#0a6570] transition-all min-h-[48px]"
            >
              Falar com a fotógrafa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
