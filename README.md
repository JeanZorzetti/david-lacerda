# David Lacerda — Site Institucional de Telemedicina

Site institucional do Dr. David Lacerda, médico e pastor, fundador do Santuário Clínico. Plataforma completa de telemedicina com agendamento integrado ao Meditele, blog MDX, LGPD compliance e design premium.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16.2.4 (App Router, standalone output) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Tipografia | Manrope (headline) + Inter (body) + Material Symbols |
| Forms | React Hook Form + Zod v4 |
| Blog | Velite (MDX local, type-safe) |
| Email | Resend (fetch-based, sem SDK) |
| Telemedicina | Meditele API (magic link flow) |
| Analytics | Vercel Analytics (gated por LGPD consent) |
| Motion | Motion (ex-framer-motion) |
| Toasts | Sonner |
| Erros | Sentry (prod only) |
| Deploy | Docker multi-stage → EasyPanel VPS |

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Copiar env vars
cp .env.example .env.local
# Preencher as variáveis (ver seção abaixo)

# 3. Dev server
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Obrigatório | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Sim | URL pública do site (ex: `https://davidlacerda.com.br`) |
| `MEDITELE_API_KEY` | Sim | Chave de autenticação da API Meditele (header `x-api-key`) |
| `MEDITELE_CLINIC_ID` | Sim | ID da clínica do Dr. David na plataforma Meditele |
| `RESEND_API_KEY` | Sim | Chave da API Resend para e-mails transacionais |
| `CONTACT_EMAIL` | Sim | E-mail do Dr. David para receber notificações de contato/agendamento |
| `SENTRY_DSN` | Recomendado | DSN do Sentry para monitoramento de erros em produção |
| `NEXT_PUBLIC_GA_ID` | Opcional | ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`) |

## Scripts

```bash
npm run dev      # Dev server com Turbopack
npm run build    # velite build && next build
npm run start    # Servidor de produção local
npm run lint     # ESLint + jsx-a11y
```

## Estrutura de pastas

```
app/
  (marketing)/     # Páginas públicas com Navbar + Footer
    page.tsx        # Home (8 seções)
    agendar/        # Formulário de agendamento Meditele
    paciente/       # Portal do paciente (magic link)
    especialidades/ # Hub + 4 páginas de especialidade
    telemedicina/   # Como funciona
    pastor/         # Biografia + timeline
    ciencia-e-fe/   # Manifesto integração ciência+fé
    blog/           # Hub, [slug], categoria/[category]
    contato/        # Formulário de contato
  (legal)/         # Páginas legais (layout minimalista)
    privacidade/
    termos/
    cookies/
  api/
    agendar/        # POST — cria paciente Meditele + magic link + email
    contact/        # POST — formulário de contato via Resend
    paciente/acesso/ # POST — busca paciente + magic link
  feed.xml/         # RSS 2.0
  sitemap.ts        # Sitemap dinâmico (inclui posts do blog)
  robots.ts
components/
  marketing/        # Navbar, Footer, Hero, Especialidades, CienciaFe
  forms/            # AgendarForm, ContactForm, PacienteAcessoForm
  sections/         # Testimonials, StatCounter, SpecialtyPage
  ui/               # shadcn primitives
  reveal.tsx        # Wrapper de animação viewport-triggered
  mdx-content.tsx   # Renderer de MDX compilado pelo Velite
  whatsapp-button.tsx
  cookie-banner.tsx
  analytics-provider.tsx
lib/
  seo.ts            # buildMetadata() + siteConfig
  schema.ts         # JSON-LD generators (Physician, MedicalOrg, Breadcrumb...)
  meditele.ts       # Client Meditele (criarPaciente, gerarMagicLink...)
  email-templates.ts # Templates HTML de email
  blog.ts           # Helpers do blog (formatDate, getReadingTime...)
  motion.ts         # Variants Motion (fadeInUp, scaleIn, stagger...)
  consent.ts        # LGPD consent (getConsent, setConsent...)
  utils.ts          # cn() utility
content/
  posts/            # Arquivos .mdx do blog
    saude-mental-e-fe.mdx
    como-funciona-consulta-online.mdx
    devocional-ansiedade.mdx
```

## Blog — publicar novo post

Ver `CONTENT.md` para guia completo. Resumo:

1. Criar arquivo em `content/posts/seu-slug.mdx`
2. Preencher o frontmatter (ver exemplo abaixo)
3. Escrever o conteúdo em MDX
4. Commit + push — o build no EasyPanel executa `velite build` automaticamente

```mdx
---
title: "Título do artigo"
slug: seu-slug
description: "Descrição para SEO (máx 300 chars)"
date: "2026-05-01"
author: "Dr. David Lacerda"
category: saude-mental  # ou: clinica-geral | devocionais | ministerio
tags: ["tag1", "tag2"]
featured: false
---

Conteúdo aqui...
```

## Componentes MDX disponíveis

```mdx
<Callout type="info">Informação destacada</Callout>
<Callout type="warning">Atenção</Callout>
<Callout type="danger">Aviso crítico</Callout>

<VerseCard reference="João 3:16" book="João">
Texto do versículo aqui.
</VerseCard>

<Disclaimer>
Aviso legal ou médico.
</Disclaimer>
```

## Deploy (EasyPanel)

Ver `DEPLOY.md` para o runbook completo.
