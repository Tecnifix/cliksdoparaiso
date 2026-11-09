# Cliques do Paraíso — Site Institucional

## Como rodar

Abra o terminal (PowerShell ou CMD) **dentro da pasta do projeto** e rode:

```bash
npm run dev
```

Acesse: http://localhost:3000

## Configuração rápida

Antes de lançar, edite **apenas estes dois arquivos**:

### `lib/site-config.ts`
- Troque `"5588900000000"` pelo número real de WhatsApp (só dígitos, com DDI 55)
- O link do Instagram já está correto: `@clicksdoparaiso`

### `lib/copy.ts`
- Ajuste qualquer texto de CTA ou mensagem pré-preenchida do WhatsApp

## Estrutura

```
components/
  Logo.tsx          → logo SVG (ícone + wordmark)
  Navbar.tsx        → navbar sticky com off-canvas mobile
  Hero.tsx          → tela cheia com headline + CTAs
  SocialProof.tsx   → faixa de prova social com contadores
  Services.tsx      → 3 cards (Individual / Casal / Família)
  HowItWorks.tsx    → 3 passos numerados
  Scenarios.tsx     → carrossel de cenários de Jeri
  Portfolio.tsx     → grid masonry com filtros e lightbox
  About.tsx         → sobre a fotógrafa
  Testimonials.tsx  → 4 depoimentos
  FAQ.tsx           → acordeão de 5 perguntas
  FinalCTA.tsx      → faixa turquesa com CTA WhatsApp
  Footer.tsx        → rodapé com links e redes
  WhatsAppFloat.tsx → botão flutuante fixo (inferior direito)
  Toast.tsx         → toast que aparece após 40s (uma vez/sessão)

lib/
  site-config.ts    → ⚠️ TROQUE O NÚMERO DE WHATSAPP AQUI
  copy.ts           → todos os textos e mensagens do site

public/
  logo.svg          → logo fundo claro
  logo-dark.svg     → logo fundo escuro
  favicon.svg       → ícone 64×64
```

## Para adicionar fotos reais

Substitua os gradientes de cor nos componentes por `<Image src="..." />` do Next.js.
Coloque as fotos em `public/fotos/` e referencie como `/fotos/nome-da-foto.jpg`.

## Deploy recomendado

Vercel (gratuito): https://vercel.com/new — conecta ao GitHub, deploy automático.
