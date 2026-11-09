"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={waLink(COPY.float.waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={COPY.float.label}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label */}
      <span
        className={`bg-white text-zinc-700 text-sm font-medium px-4 py-2 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        {COPY.float.label}
      </span>

      {/* Botão principal */}
      <div className="relative">
        {/* Badge pulsante */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F2913D] rounded-full">
          <span className="absolute inset-0 rounded-full bg-[#F2913D] animate-ping opacity-75" />
        </span>

        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 hover:scale-110 active:scale-95 transition-transform">
          <MessageCircle size={26} className="text-white" fill="white" strokeWidth={0} />
        </div>
      </div>
    </a>
  );
}
