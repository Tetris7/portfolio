# Frontend Portfolio

A single-page portfolio built with React + TypeScript + Vite, styled as a
developer's code editor — the hero renders your intro as a syntax-highlighted
object literal.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Customize

Almost everything lives in one file: **`src/data/portfolio.ts`**.
Edit your name, role, about text, skills, projects, experience, and
education there — the components will pick it up automatically.

For visual tweaks (colors, fonts, spacing), the design tokens are at the
top of **`src/index.css`** as CSS variables:

```css
--teal: #7ee7c7;      /* primary accent */
--amber: #f0b86e;     /* secondary accent */
--font-display: 'Space Grotesk', ...;
```

## Deploy

Build a production bundle:

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Structure

```
src/
  data/portfolio.ts   ← your content (edit this first)
  components/
    Nav.tsx
    Hero.tsx           ← signature code-window element
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Education.tsx
    Contact.tsx
  App.tsx
  index.css            ← design tokens + base styles
```
