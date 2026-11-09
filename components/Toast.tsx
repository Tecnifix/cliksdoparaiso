"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const TOAST_KEY = "cdp_toast_shown";

export default function Toast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só mostrar uma vez por sessão
    if (sessionStorage.getItem(TOAST_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(TOAST_KEY, "1");
    }, 40_000); // 40 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 right-4 sm:left-auto sm:right-24 sm:w-80 z-50 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-4 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <button
        className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600"
        onClick={() => setVisible(false)}
        aria-label="Fechar"
      >
        <X size={16} />
      </button>

      <p className="text-[#2B2B2B] text-sm font-medium pr-6 mb-3">
        {COPY.toast.text}
      </p>

      <a
        href={waLink(COPY.hero.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center bg-[#F2913D] text-white text-sm font-medium py-2.5 rounded-full hover:bg-[#e07f30] transition-colors"
        onClick={() => setVisible(false)}
      >
        Garantir meu horário →
      </a>
    </div>
  );
}
