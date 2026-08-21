# collection-of-me

My collection about 'how am I', company's, projects, skills.

Portfólio pessoal — React + Tailwind CSS, deploy na Vercel.

## Stack atual

- **React 19** + **Vite 8** (`@vitejs/plugin-react`) como base do app
- **Tailwind CSS v4** via plugin do Vite (`@tailwindcss/vite`), sem `tailwind.config.js` — estilos entram por `@import "tailwindcss"` em [src/index.css](src/index.css)
- **oxlint** para lint
- Deploy pensado para **Vercel**

## Estrutura

- [src/App.jsx](src/App.jsx) — seções do portfólio (Hero, Sobre, Projetos, Contato), ainda com conteúdo placeholder aguardando o design final
- [src/main.jsx](src/main.jsx) — entrypoint React
- [index.html](index.html) / [vite.config.js](vite.config.js) — config do Vite

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
