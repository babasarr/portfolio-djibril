// icon = clé dans data/icons.js
import type { Skill } from '../types'

export const skills: Skill[] = [
  { icon: 'react', category: { fr: 'Frontend', en: 'Frontend' }, name: 'React', description: { fr: 'Hooks, Suspense, useTransition', en: 'Hooks, Suspense, useTransition' } },
  { icon: 'ts', category: { fr: 'Frontend', en: 'Frontend' }, name: 'TypeScript', description: { fr: 'Typage strict, composants réutilisables', en: 'Strict typing, reusable components' } },
  { icon: 'rtk', category: { fr: 'Frontend', en: 'Frontend' }, name: 'RTK Query', description: { fr: 'Cache, optimistic UI, temps réel', en: 'Caching, optimistic UI, real time' } },
  { icon: 'laravel', category: { fr: 'Backend', en: 'Backend' }, name: 'Laravel', description: { fr: 'API REST, Eloquent, Laravel 9', en: 'REST APIs, Eloquent, Laravel 9' } },
  { icon: 'php', category: { fr: 'Backend', en: 'Backend' }, name: 'PHP', description: { fr: 'Applications web côté serveur', en: 'Server-side web applications' } },
  { icon: 'node', category: { fr: 'Backend', en: 'Backend' }, name: 'Node.js', description: { fr: 'APIs, Cloud Functions, Nodemailer', en: 'APIs, Cloud Functions, Nodemailer' } },
  { icon: 'fb', category: { fr: 'Données', en: 'Data' }, name: 'Firebase / Firestore', description: { fr: 'onSnapshot, index composites, migrations', en: 'onSnapshot, composite indexes, migrations' } },
  { icon: 'sql', category: { fr: 'Données', en: 'Data' }, name: 'MySQL', description: { fr: 'Modélisation et requêtes', en: 'Modelling and queries' } },
]
