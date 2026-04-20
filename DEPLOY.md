# Deploy Runbook — EasyPanel VPS

## Pré-requisitos

- Acesso ao EasyPanel com permissão de criar apps
- Repositório GitHub conectado ao EasyPanel (ou push manual via SSH)
- Domínio apontando para o IP do VPS (registro A no DNS)
- Conta Resend com domínio verificado para SPF/DKIM

---

## 1. Configurar App no EasyPanel

1. No EasyPanel, criar novo app → **Docker**
2. Source: **GitHub** → selecionar `JeanZorzetti/david-lacerda`
3. Branch: `main`
4. Build method: **Dockerfile** (auto-detecta o `Dockerfile` na raiz)
5. Port: `3000`

---

## 2. Variáveis de Ambiente (EasyPanel → App → Environment)

Configurar **todas** antes do primeiro deploy:

| Variável | Valor | Obrigatório |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://davidlacerda.com.br` | Sim |
| `MEDITELE_API_KEY` | `<chave-meditele>` | Sim |
| `MEDITELE_CLINIC_ID` | `<id-clinica-meditele>` | Sim |
| `RESEND_API_KEY` | `re_<chave-resend>` | Sim |
| `CONTACT_EMAIL` | `contato@davidlacerda.com.br` | Sim |
| `SENTRY_DSN` | `https://...@sentry.io/...` | Recomendado |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Opcional |

> **Atenção:** Variáveis com prefixo `NEXT_PUBLIC_` são embutidas em tempo de build. Alterar após o deploy exige um novo build.

---

## 3. DNS — Domínio e SSL

### Registro A
```
davidlacerda.com.br   A   <IP-do-VPS>   TTL 300
www.davidlacerda.com.br  A   <IP-do-VPS>   TTL 300
```

### SSL (Let's Encrypt)
No EasyPanel → App → Domains:
1. Adicionar `davidlacerda.com.br` e `www.davidlacerda.com.br`
2. Habilitar **HTTPS** → EasyPanel provisiona Let's Encrypt automaticamente
3. Habilitar **Redirect HTTP → HTTPS**

---

## 4. DNS — Email (Resend SPF/DKIM/DMARC)

Após verificar o domínio no painel do Resend ([resend.com/domains](https://resend.com/domains)), adicionar os registros DNS fornecidos:

```
# SPF
@   TXT   "v=spf1 include:amazonses.com ~all"

# DKIM (o Resend fornece os valores exatos)
resend._domainkey   TXT   "v=DKIM1; k=rsa; p=<chave-publica>"

# DMARC
_dmarc   TXT   "v=DMARC1; p=quarantine; rua=mailto:dmarc@davidlacerda.com.br"
```

> Propagar DNS pode levar até 48h. Verificar em [mxtoolbox.com](https://mxtoolbox.com).

---

## 5. Primeiro Deploy

1. No EasyPanel, clicar em **Deploy** (ou fazer push para `main`)
2. Acompanhar logs do build — deve mostrar:
   - `velite build` compilando os posts MDX
   - `next build` gerando 32+ rotas
   - Build concluído em 2-4 minutos
3. Verificar que o container subiu na aba **Logs**

---

## 6. Smoke Test Pós-Deploy

Executar manualmente após cada deploy:

- [ ] `https://davidlacerda.com.br` — home carrega com imagem do Dr. David
- [ ] `https://davidlacerda.com.br/agendar` — formulário de agendamento visível
- [ ] `https://davidlacerda.com.br/blog` — lista de posts carrega
- [ ] `https://davidlacerda.com.br/blog/saude-mental-e-fe` — post individual carrega
- [ ] `https://davidlacerda.com.br/contato` — formulário de contato visível
- [ ] `https://davidlacerda.com.br/paciente` — portal do paciente visível
- [ ] `https://davidlacerda.com.br/privacidade` — política de privacidade carrega
- [ ] `https://davidlacerda.com.br/sitemap.xml` — sitemap com todas as URLs
- [ ] `https://davidlacerda.com.br/feed.xml` — RSS feed válido
- [ ] Testar envio do formulário de contato (verificar email chegou)
- [ ] Cookie banner aparece na primeira visita (aba anônima)
- [ ] HTTPS com cadeado verde

---

## 7. Deploy Subsequente (Rollout)

A cada push para `main`, o EasyPanel dispara rebuild automático se configurado com webhook.

Para trigger manual:
1. EasyPanel → App → **Deploy**

Para rollback:
1. EasyPanel → App → **Deployments** → selecionar versão anterior → **Rollback**

---

## 8. Monitoramento

| Serviço | URL | Propósito |
|---------|-----|-----------|
| Sentry | [sentry.io](https://sentry.io) | Erros e performance |
| EasyPanel | Painel interno | Logs, uptime, CPU/RAM |
| Resend | [resend.com/emails](https://resend.com/emails) | Entrega de emails |
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) | Indexação SEO |

### Configurar alertas Sentry

Em Sentry → Project → Alerts → criar regra:
- Trigger: `Number of errors > 5 in 1 hour`
- Action: Email para `agileleiloes@gmail.com`

---

## 9. Publicar Novo Post no Blog

Ver `CONTENT.md` para o guia completo de publicação.

Resumo:
```bash
# 1. Criar arquivo MDX
content/posts/meu-novo-artigo.mdx

# 2. Commit e push
git add content/posts/meu-novo-artigo.mdx
git commit -m "feat(blog): add new post about [topic]"
git push

# 3. EasyPanel faz rebuild automático (inclui velite build)
```

---

## 10. Atualizar Dependências

```bash
# Verificar outdated
npm outdated

# Atualizar com cautela (testar localmente antes)
npm update

# Atualizar shadcn components
npx shadcn@latest add [component]

# Após qualquer atualização
npm run build  # verificar que não quebrou
```
