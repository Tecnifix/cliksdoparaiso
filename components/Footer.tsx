import { Instagram, MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";
import { SITE_CONFIG, waLink } from "@/lib/site-config";
import { COPY } from "@/lib/copy";

const links = [
  { label: "O que faço", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cenários", href: "#cenarios" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white/70 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <Logo variant="dark" width={150} className="mb-4" />
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-xs text-white/30 mt-2">{SITE_CONFIG.location}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-medium mb-4 tracking-wide uppercase text-xs">
              Navegação
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white text-sm font-medium mb-4 tracking-wide uppercase text-xs">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={waLink(COPY.float.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Instagram size={14} className="text-[#F2913D]" />
                  @{SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#14B8C4]" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Cliques do Paraíso. Todos os direitos reservados.</p>
          <a href="/termos" className="hover:text-white/60 transition-colors">Termos de uso</a>
        </div>
      </div>
    </footer>
  );
}
