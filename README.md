# carvalhocaio/me

Personal site of [Caio Carvalho](https://carvalhocaio.github.io/me/) — data & AI engineer. Single-page landing with a terminal visual identity (shell prompt, blinking cursor, dark/light theme), built with Next.js.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Static export (`output: 'export'`) — no server, published as a static site
- IBM Plex Mono / IBM Plex Sans fonts
- Some components inspired by [React Bits](https://reactbits.dev) (decrypt-text in the hero, spotlight on the cards)

## Structure

Each page section is a component in `app/components/`: `header`, `hero`, `now`, `projects` (the 4 most recently updated public GitHub repos, fetched at build time), `posts` (feed from [dev.to](https://dev.to/carvalhocaio), fetched at build time), `connect`, and `footer`. `Container` centers content in 8 of the grid's 12 columns from the `sm` breakpoint up.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Generates the static export in `dist/`.

## Deploy

Published to GitHub Pages via GitHub Actions (`.github/workflows/nextjs.yml`), on every push to `main` and also once a day (cron), to keep the dev.to posts feed fresh without a manual redeploy.

Live site: **https://carvalhocaio.github.io/me/**
