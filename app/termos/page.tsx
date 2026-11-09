import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export default function TermosPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <Link href="/" className="text-sm text-[#0E7C86] hover:underline mb-8 block">
        ← Voltar ao site
      </Link>
      <h1 className="font-serif text-3xl text-[#2B2B2B] mb-6">Termos de Uso</h1>
      <div className="prose prose-zinc max-w-none text-sm leading-relaxed space-y-4 text-zinc-600">
        <p><strong>Cliques do Paraíso</strong> — {SITE_CONFIG.location}</p>
        <p>
          As fotografias produzidas são para uso pessoal do contratante. A divulgação em redes sociais é encorajada, com crédito <strong>@{SITE_CONFIG.instagramHandle}</strong>.
        </p>
        <p>
          Uso comercial das imagens (publicidade, editorial, campanhas pagas) requer autorização prévia por escrito.
        </p>
        <p>
          O agendamento é confirmado mediante pagamento de sinal. Cancelamentos com menos de 24h de antecedência não são reembolsáveis.
        </p>
        <p>
          Para dúvidas: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#0E7C86]">{SITE_CONFIG.email}</a>
        </p>
      </div>
    </main>
  );
}
