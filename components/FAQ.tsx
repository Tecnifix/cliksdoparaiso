"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Preciso agendar com antecedência?",
    a: "Sim — recomendo de 3 a 7 dias antes para garantir o horário e o cenário que você quer. Especialmente no fim de semana e na temporada (julho e dezembro), a agenda enche rápido. Quanto antes você entrar em contato, mais opções temos.",
  },
  {
    q: "Onde fazemos o ensaio?",
    a: "Trabalho em 5 cenários principais: Praia do Preá, Ponta de Jeri, Duna das 7 Cores, Lagoa Paraíso e Ilha dos Pássaros. Cada cenário tem um horário ideal de luz. Me conta o que você quer transmitir e eu indico o melhor lugar.",
  },
  {
    q: "Quantas fotos recebo?",
    a: "O número exato depende do pacote escolhido, mas você sempre recebe fotos com tratamento completo — exposição, cores, suavização de pele natural. Sem quantidade mínima engessada: entrego o que ficou incrível, sem fotos de enchimento.",
  },
  {
    q: "As fotos vêm tratadas?",
    a: "Sim, 100% tratadas. Faço o tratamento em Lightroom com uma identidade visual consistente — cores quentes e vibrantes que remetem a Jericoacoara. Você recebe por link de download em alta resolução, em até 72h após o ensaio.",
  },
  {
    q: "Atendo quem vem de outros estados?",
    a: "Sim! A maioria dos meus clientes vem de fora — São Paulo, Rio, Belo Horizonte, Recife. Você agenda antes de viajar, combinamos o dia e o horário pelo WhatsApp, e eu já estou lá quando você chegar em Jeri.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F5EFE6]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#14B8C4] text-sm font-medium tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-100"
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 min-h-[60px]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-[#2B2B2B] text-sm sm:text-base">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                  {open === i ? (
                    <Minus size={14} className="text-[#0E7C86]" />
                  ) : (
                    <Plus size={14} className="text-[#0E7C86]" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64" : "max-h-0"
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 text-zinc-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
