// icon = clé dans data/icons.js
import type { Skill } from '../types'

export const skills: Skill[] = [
  { icon: 'react', category: { fr: 'Frontend', en: 'Frontend' }, name: 'React', description: { fr: 'Hooks, Suspense, useTransition', en: 'Hooks, Suspense, useTransition' } },
  { icon: 'ts', category: { fr: 'Frontend', en: 'Frontend' }, name: 'TypeScript', description: { fr: 'Typage strict, composants réutilisables', en: 'Strict typing, reusable components' } },
  { icon: 'redux', category: { fr: 'Frontend', en: 'Frontend' }, name: 'Redux', description: { fr: 'Cache, optimistic UI, temps réel', en: 'Caching, optimistic UI, real time' } },
  { icon: 'js', category: { fr: 'Données', en: 'Frontend' }, name: 'JavaScript', description: { fr: 'Langage de programmation', en: 'Programming language' } },
  { icon: 'bootstrap', category: { fr: 'Données', en: 'Frontend' }, name: 'Bootstrap', description: { fr: 'Framework CSS', en: 'CSS framework' } },
  { icon: 'html', category: { fr: 'Données', en: 'Frontend' }, name: 'HTML', description: { fr: 'Langage de balisage', en: 'Markup language' } },
  { icon: 'css', category: { fr: 'Données', en: 'Frontend' }, name: 'CSS', description: { fr: 'Style Sheets', en: 'Style Sheets' } },
  { icon: 'laravel', category: { fr: 'Backend', en: 'Backend' }, name: 'Laravel', description: { fr: 'API REST, Eloquent, Laravel 9', en: 'REST APIs, Eloquent, Laravel 9' } },
  { icon: 'php', category: { fr: 'Backend', en: 'Backend' }, name: 'PHP', description: { fr: 'Applications web côté serveur', en: 'Server-side web applications' } },
  { icon: 'node', category: { fr: 'Backend', en: 'Backend' }, name: 'Node.js', description: { fr: 'APIs, Cloud Functions, Nodemailer', en: 'APIs, Cloud Functions, Nodemailer' } },
  { icon: 'fb', category: { fr: 'Données', en: 'Data' }, name: 'Firebase / Firestore', description: { fr: 'onSnapshot, index composites, migrations', en: 'onSnapshot, composite indexes, migrations' } },
  { icon: 'sql', category: { fr: 'Données', en: 'Data' }, name: 'MySQL', description: { fr: 'Modélisation et requêtes', en: 'Modelling and queries' } },
  { icon: 'python', category: { fr: 'Données', en: 'Data' }, name: 'Python', description: { fr: 'Analyse de données, automatisation', en: 'Data analysis, automation' } },
  { icon: 'git', category: { fr: 'Données', en: 'Data' }, name: 'Git', description: { fr: 'Contrôle de version', en: 'Version control' } },
  { icon: 'docker', category: { fr: 'Données', en: 'Data' }, name: 'Docker', description: { fr: 'Conteneurisation, déploiement', en: 'Containerization, deployment' } },
 

]
