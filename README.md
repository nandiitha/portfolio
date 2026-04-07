# Nanditha M — Portfolio

Personal portfolio site built with React + Vite. Clean, minimal, fully responsive.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) 
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects Vite
5. Click **Deploy**

Live URL: `https://nanditha-portfolio-lime.vercel.app/`


## Project structure

```
src/
  components/
    Nav.jsx          # Fixed nav with scroll effect + mobile menu
    Nav.module.css
    SectionLabel.jsx # Reusable section heading
    SectionLabel.module.css
    Footer.jsx
    Footer.module.css
  sections/
    Hero.jsx         # Landing section with animated heading
    Skills.jsx       # Skills grid
    <!-- Projects.jsx     # Project cards  -->
    Experience.jsx   # Work history
    Contact.jsx      # Contact links
  App.jsx
  main.jsx
  index.css          # Design tokens + global reset
```

## Tech

- React 18
- Vite 5
- CSS Modules
- Google Fonts: DM Serif Display, DM Mono, Geist
