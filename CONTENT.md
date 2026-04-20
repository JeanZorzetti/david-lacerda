# Guia de Publicação — Blog do Santuário Clínico

Guia para o Dr. David Lacerda publicar artigos no blog sem precisar de suporte técnico.

---

## Fluxo Rápido

1. Criar arquivo `.mdx` em `content/posts/`
2. Preencher o frontmatter (cabeçalho)
3. Escrever o conteúdo
4. Commit + push para `main` — o site atualiza automaticamente em ~3 minutos

---

## 1. Criar o Arquivo

O nome do arquivo vira a URL do post. Use letras minúsculas, hífens no lugar de espaços, sem acentos:

```
content/posts/como-orar-com-saude-mental.mdx
→ URL: /blog/como-orar-com-saude-mental
```

---

## 2. Frontmatter (Cabeçalho Obrigatório)

Todo post começa com este bloco entre `---`:

```mdx
---
title: "Título do artigo (máx 120 caracteres)"
slug: meu-slug-unico
description: "Descrição para SEO e preview nas redes sociais (máx 300 caracteres)"
date: "2026-05-01"
author: "Dr. David Lacerda"
category: saude-mental
tags: ["ansiedade", "fé", "meditação"]
featured: false
---
```

### Categorias disponíveis

| Valor | Exibição no Site |
|-------|-----------------|
| `saude-mental` | Saúde Mental |
| `clinica-geral` | Clínica Geral |
| `devocionais` | Devocionais |
| `ministerio` | Ministério |

### Featured

Definir `featured: true` para destacar o post no topo do blog (máx 1 post featured por vez).

---

## 3. Escrever o Conteúdo

Após o frontmatter, escreva o artigo normalmente em Markdown:

```mdx
---
(frontmatter acima)
---

## Introdução

Escreva parágrafos normais assim. O texto vira parágrafo automaticamente.

## Segunda Seção

- Item de lista
- Outro item
- Mais um

### Subseção

**Texto em negrito** e *texto em itálico*.

> Citação ou pensamento destacado.

---

## Conclusão

Finalize com um chamado à reflexão ou à ação.
```

---

## 4. Componentes Especiais

### Callout — Destaque Informativo

```mdx
<Callout type="info">
Informação importante para o leitor.
</Callout>

<Callout type="warning">
Atenção: consulte sempre um médico antes de tomar decisões.
</Callout>

<Callout type="danger">
Aviso crítico de segurança ou urgência.
</Callout>
```

**Quando usar:**
- `info` → dicas, informações adicionais
- `warning` → cuidados, contraindicações
- `danger` → emergências, avisos críticos

---

### VerseCard — Versículo Bíblico

```mdx
<VerseCard reference="Filipenses 4:6-7" book="Filipenses">
Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos
conhecidos diante de Deus pela oração e súplica, com ações de graças.
</VerseCard>
```

---

### Disclaimer — Aviso Médico/Legal

Use no final de posts sobre saúde para conformidade com o CFM:

```mdx
<Disclaimer>
Este artigo tem caráter educativo e não substitui consulta médica. 
Para avaliação individualizada, agende uma consulta com o Dr. David Lacerda.
</Disclaimer>
```

---

## 5. Exemplo de Post Completo

```mdx
---
title: "Ansiedade e Fé: O que a ciência e as escrituras nos ensinam"
slug: ansiedade-e-fe
description: "Uma análise integrativa sobre ansiedade: perspectivas da psiquiatria moderna e da espiritualidade cristã, com orientações práticas para o dia a dia."
date: "2026-05-10"
author: "Dr. David Lacerda"
category: saude-mental
tags: ["ansiedade", "fé", "saúde mental", "espiritualidade"]
featured: false
---

A ansiedade afeta **1 em cada 4 brasileiros** ao longo da vida, segundo dados do
Ministério da Saúde. Como médico e pastor, tenho acompanhado pessoas que buscam
respostas tanto na clínica quanto na fé — e a boa notícia é que essas perspectivas
se complementam.

## O que diz a ciência

A ansiedade é uma resposta natural do nosso sistema nervoso a situações percebidas
como ameaça. Quando crônica, afeta o sono, o sistema imunológico e a qualidade
de vida...

<Callout type="info">
O Transtorno de Ansiedade Generalizada (TAG) é tratável com psicoterapia,
mudanças de estilo de vida e, quando necessário, medicação.
</Callout>

## O que dizem as escrituras

<VerseCard reference="Filipenses 4:6-7" book="Filipenses">
Não andeis ansiosos por coisa alguma; antes em tudo sejam os vossos pedidos
conhecidos diante de Deus pela oração e súplica, com ações de graças.
</VerseCard>

Paulo escreveu essas palavras de dentro de uma prisão. Não é ingenuidade —
é uma prática espiritual fundamentada que hoje a neurociência começa a validar...

## Práticas que integram as duas perspectivas

1. **Oração contemplativa** — reduz cortisol (estudo da Universidade de Michigan, 2019)
2. **Mindfulness cristão** — presença plena orientada à gratidão
3. **Comunidade** — suporte social como protetor da saúde mental
4. **Sono** — cuidado do templo do Espírito Santo

<Disclaimer>
Este artigo tem caráter educativo e não substitui avaliação médica. 
Se você sofre com ansiedade persistente, agende uma consulta.
</Disclaimer>
```

---

## 6. Publicar o Post

### Opção A — GitHub (recomendado)

1. Acesse [github.com/JeanZorzetti/david-lacerda](https://github.com/JeanZorzetti/david-lacerda)
2. Navegue até `content/posts/`
3. Clique em **Add file → Create new file**
4. Nome: `meu-slug.mdx`
5. Cole o conteúdo
6. Em **Commit changes**: escreva uma descrição breve
7. Clique em **Commit changes** → site atualiza em ~3 minutos

### Opção B — Localmente (para quem usa VS Code)

```bash
# 1. Criar o arquivo
# 2. Verificar localmente
npm run dev
# Abrir http://localhost:3000/blog/meu-slug

# 3. Publicar
git add content/posts/meu-slug.mdx
git commit -m "feat(blog): add post about [assunto]"
git push
```

---

## 7. Boas Práticas de Conteúdo Médico (CFM)

Conforme Resolução CFM 1.974/2011 sobre publicidade médica:

**Evitar:**
- Expressões como "curo", "garanto", "o melhor tratamento"
- Comparações com outros profissionais
- Depoimentos de pacientes prometendo resultados
- Divulgação de preços de procedimentos
- Fotos de "antes e depois"

**Usar:**
- "pode ajudar", "em muitos casos", "com acompanhamento médico"
- Referências a estudos e evidências científicas
- Sempre incluir `<Disclaimer>` em posts sobre condições de saúde

---

## 8. Checklist Antes de Publicar

- [ ] Título claro e descritivo (máx 120 caracteres)
- [ ] Description útil para quem vê no Google (máx 300 caracteres)
- [ ] Slug sem acentos, espaços ou caracteres especiais
- [ ] Data correta no formato `YYYY-MM-DD`
- [ ] Categoria correta (ver tabela acima)
- [ ] Conteúdo revisado — sem erros de português
- [ ] `<Disclaimer>` ao final de posts sobre saúde
- [ ] Versículos com referência correta no `<VerseCard>`
