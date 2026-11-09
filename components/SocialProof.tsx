"use client";
import { useEffect, useRef, useState } from "react";
import { Camera, Users, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section id="prova-social" className="bg-[#2B2B2B] py-5">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 text-sm sm:text-base">
        <a
          href={SITE_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Camera size={16} className="text-[#14B8C4]" />
          <span>@{SITE_CONFIG.instagramHandle}</span>
        </a>

        <div className="flex items-center gap-2">
          <Users size={16} className="text-[#14B8C4]" />
          <span>
            <Counter target={22} suffix="k+" /> seguidores
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Heart size={16} className="text-[#F2913D]" />
          <span>
            <Counter target={145} suffix="+" /> ensaios publicados
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-white/40 text-xs tracking-widest uppercase">
          Jericoacoara · Ceará
        </div>
      </div>
    </section>
  );
}
