"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina & Rafael",
    city: "São Paulo, SP",
    text: "Foi a melhor decisão da nossa viagem. Chegamos sem saber posar e saímos com fotos que parecem de campanha de moda. As amigas não acreditaram que fomos nós mesmos!",
    type: "Casal",
    color: "from-[#0E7C86] to-[#14B8C4]",
  },
  {
    name: "Ana Claudia",
    city: "Belo Horizonte, MG",
    text: "Nunca fiz um ensaio na vida e fiquei apavorada. Em 10 minutos eu nem lembrava mais que tinha uma câmera na minha frente. As fotos ficaram incríveis.",
    type: "Individual",
    color: "from-[#c47030] to-[#F2913D]",
  },
  {
    name: "Família Carvalho",
    city: "Recife, PE",
    text: "Viemos com três filhos pequenos — a fotógrafa é incrível com crianças! Conseguiu as fotos mais lindas sem que eles precisassem ficar parados. Recomendo demais.",
    type: "Família",
    color: "from-[#1a3a4a] to-[#0E7C86]",
  },
  {
    name: "Juliana & Paulo",
    city: "Rio de Janeiro, RJ",
    text: "Escolhemos o pôr do sol na Ponta e foi mágico. A luz, o lugar, a direção de pose — tudo perfeito. As fotos já têm 2 mil curtidas e contando.",
    type: "Casal",
    color: "from-[#0a5f68] to-[#14B8C4]",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2B2B]">
            O que falam quem já estava{" "}
            <em className="not-italic text-[#0E7C86]">no paraíso</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F5EFE6] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Miniatura do ensaio */}
              <div className={`h-24 bg-gradient-to-br ${t.color} relative`}>
                <span className="absolute bottom-2 right-3 text-white/20 text-xs font-medium tracking-widest uppercase">
                  {t.type}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#F2913D] text-[#F2913D]" />
                  ))}
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed flex-1 mb-4 italic">
                  "{t.text}"
                </p>

                <div>
                  <p className="font-semibold text-[#2B2B2B] text-sm">{t.name}</p>
                  <p className="text-zinc-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
