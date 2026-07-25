# carvalhocaio/me

Site pessoal de [Caio Carvalho](https://carvalhocaio.github.io/me/) — engenheiro de dados & IA. Landing page única com identidade visual de terminal (prompt de shell, cursor piscando, tema dark/light), construída em Next.js.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Export estático (`output: 'export'`) — sem servidor, publicado como site estático
- Fontes IBM Plex Mono / IBM Plex Sans
- Alguns componentes inspirados no [React Bits](https://reactbits.dev) (decrypt-text no hero, spotlight nos cards)

## Estrutura

Cada seção da página é um componente em `app/components/`: `header`, `hero`, `journey` (jornada), `now` (agora), `projects` (projetos), `posts` (feed do [dev.to](https://dev.to/carvalhocaio), buscado em build-time), `connect` (contato) e `footer`. `Container` centraliza o conteúdo em 8 das 12 colunas da grade a partir do breakpoint `sm`.

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

Publicado no GitHub Pages via GitHub Actions (`.github/workflows/nextjs.yml`), a cada push em `main` e também 1x por dia (cron), para manter o feed de posts do dev.to atualizado sem precisar de um redeploy manual.

Site no ar: **https://carvalhocaio.github.io/me/**
