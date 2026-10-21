# carvalhocaio/me

Site pessoal de [Caio Carvalho](https://carvalhocaio.github.io/me/) — engenheiro de dados & IA. Landing page única com identidade visual de terminal (prompt de shell, tema escuro/claro), construída com Next.js.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Export estático (`output: 'export'`) — sem servidor, publicado como site estático
- Fontes IBM Plex Mono / IBM Plex Sans
- Alguns componentes inspirados no [React Bits](https://reactbits.dev) (decrypt-text no hero, spotlight nos cards)

## Estrutura

Cada seção da página é um componente em `app/components/`: `header`, `hero`, `now` (frentes atuais em pipelines/governança de dados, agentes de IA e arquitetura backend), `projects` (os 4 repositórios públicos do GitHub atualizados mais recentemente, buscados no build), `posts` (os 3 artigos mais recentes do [dev.to](https://dev.to/carvalhocaio), buscados no build), `connect` e `footer`. O `Container` centraliza o conteúdo em 8 das 12 colunas do grid a partir do breakpoint `md`, e o currículo atualizado fica em `public/resumee.pdf`.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Gera o export estático em `dist/`.

## Deploy

Publicado no GitHub Pages via GitHub Actions (`.github/workflows/nextjs.yml`), a cada push na `main` e também uma vez por dia (cron), para manter a lista de projetos do GitHub e o feed de posts do dev.to atualizados sem redeploy manual.

Site no ar: **https://carvalhocaio.github.io/me/**
