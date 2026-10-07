import type { Certification, Job } from '../types'

export const jobs: Job[] = [
  {
    role: { fr: 'Développeur senior & coach de code', en: 'Senior developer & coding coach' },
    company: 'Volkeno / Bakeli',
    description: { fr: 'Livraison de projets clients, accompagnement de plus de 50 personnes.', en: 'Delivered client projects and coached over 50 people.' },
  },
  {
    role: { fr: 'Développeur Full Stack', en: 'Full Stack developer' },
    company: { fr: 'Indépendant & missions', en: 'Freelance & contracts' },
    description: { fr: 'Plus de 25 projets livrés, de la conception à la mise en production.', en: '25+ projects shipped, from design to production.' },
  },
]

export const certifications: Certification[] = [
  { name: 'Full Stack Development', issuer: 'ALX-T / Udacity' },
  { name: 'React.js', issuer: 'LinkedIn Learning' },
  { name: 'Laravel 9', issuer: 'LinkedIn Learning' },
  { name: 'OpenAI / GPT', issuer: 'LinkedIn Learning' },
]
