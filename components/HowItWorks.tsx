"use client";
import { MessageCircle, Camera, Download } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Chama no WhatsApp",
    desc: "Escolhe o dia e o cenário — Praia do Preá, Ponta, Duna, Lagoa — a gente combina tudo antes.",
  },
  {
    num: "02",
    icon: Camera,
    title: "No dia do ensaio",
    desc: "Chego no horário combinado com orientação de pose em tempo real. Você não precisa saber posar.",
  },
  {
    num: "03",
    icon: Download,
    title: "Recebe as fotos",
    desc: "Fotos tratadas em até 72h, prontas para postar. Alta resolução, sem marca d'água.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Como funciona
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B]">
            Simples assim
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.6%+1rem)] right-[calc(16.6%+1rem)] h-px bg-gradient-to-r from-[#14B8C4]/30 via-[#14B8C4]/60 to-[#14B8C4]/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Número + ícone */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#F5EFE6] flex items-center justify-center border-2 border-[#14B8C4]/20">
                    <Icon size={28} className="text-[#0E7C86]" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#F2913D] text-white text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#2B2B2B] mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Frase de fechamento */}
        <div className="text-center mt-14">
          <p className="font-serif text-xl sm:text-2xl text-[#0E7C86] italic mb-8">
            "Você cuida do passeio. Eu cuido do clique."
          </p>
          <a
            href={waLink(COPY.hero.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F2913D] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#e07f30] active:scale-95 transition-all min-h-[48px]"
          >
            Quero agendar meu ensaio
          </a>
        </div>
      </div>
    </section>
  );
}
