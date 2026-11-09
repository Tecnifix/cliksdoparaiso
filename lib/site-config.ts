// ============================================================
// CONFIGURAÇÃO CENTRAL DO SITE — edite aqui para atualizar
// em todos os lugares ao mesmo tempo.
// ============================================================

export const SITE_CONFIG = {
  // ⚠️ Troque pelo número real (apenas dígitos, com código do país)
  whatsapp: "5588900000000",

  // Handle do Instagram (sem @)
  instagramHandle: "clicksdoparaiso",
  instagramUrl: "https://www.instagram.com/clicksdoparaiso",

  // Email
  email: "contato@clicksdoparaiso.com.br",

  // Nome e subtítulo
  name: "Cliques do Paraíso",
  tagline: "Fotografia exclusiva em Jericoacoara",

  // Localização
  location: "Jericoacoara · Ceará · Brasil",
};

/** Gera link do WhatsApp com mensagem pré-preenchida */
export function waLink(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
