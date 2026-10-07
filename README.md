# Portfolio — Djibril Sarr

Portfolio développeur en **React 18 + TypeScript + Vite**, bilingue FR/EN, thème clair/sombre.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:5173
npm run typecheck # vérifie les types (tsc)
npm run build     # vérifie les types puis génère dist/
npm run preview   # prévisualise le build
```

## Structure

```
public/
  CV_Djibril_Sarr.pdf        CV téléchargé par le bouton « Mon CV »
src/
  main.tsx                   point d'entrée (providers + styles)
  App.tsx                    assemble les sections
  config/site.ts             nom, email, liens (LinkedIn, GitHub), CV
  types/index.ts             types partagés (Lang, Project, Skill, Translations…)
  data/                      contenu : skills, projects, experience, icons (logos SVG)
  i18n/                      textes de l'interface : fr.ts, en.ts
  context/SettingsContext    langue + thème (mémorisés dans localStorage)
  hooks/                     useReveal (apparition au scroll), useCountUp, useLocalStorage
  components/                Navbar, Hero, Skills, Projects, Experience, Contact, Footer…
  styles/                    variables, base, components, animations
```

## Modifier le contenu

- **Coordonnées / liens** : `src/config/site.ts`
- **Projets** : `src/data/projects.ts`. Pour afficher une vraie capture, mets l'image dans
  `public/projects/` et renseigne `image: '/projects/mon-image.png'`.
- **Compétences, parcours, certifications** : `src/data/`
- **Textes (accroche, chiffres clés…)** : `src/i18n/fr.ts` et `en.ts`
- **Couleurs** : `src/styles/variables.css`

## Déployer

Le contenu de `dist/` est statique : Netlify, Vercel, Cloudflare Pages ou GitHub Pages
(dans ce dernier cas, renseigne `base` dans `vite.config.ts`).
