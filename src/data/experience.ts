import type { Certification, Job } from '../types'

export const jobs: Job[] = [
  {
  role: { fr: 'Développeur Full Stack Senior', en: 'Senior Full Stack Developer' },
  company: 'Volkeno',
  period: { fr: '2021 – juil. 2026', en: '2021 – Jul 2026' },
  description: {
    fr: "Plus de 25 projets web et applications métier (React/TypeScript, Laravel ou Django). Conception et déploiement d'une application de gestion scolaire temps réel (Firebase/Firestore, RTK Query).",
    en: 'Worked on 25+ web projects and business applications (React/TypeScript, Laravel or Django). Designed and deployed a real-time school management app (Firebase/Firestore, RTK Query).',
  },
  },
  {
    role: { fr: 'Développeur Web & Coach en Développement', en: 'Web Developer & Coding Coach' },
    company: 'Volkeno / Bakeli',
    period: { fr: '2018 – 2021', en: '2018 – 2021' },
    description: {
      fr: "Développement d'applications et de sites web pour des clients variés, du cahier des charges à la mise en ligne. Coaching de plus de 50 étudiants en développement web.",
      en: 'Built web applications and websites for various clients, from requirements to launch. Coached over 50 students in web development.',
    },
  },
  {
    role: { fr: 'Coach en Programmation Web', en: 'Web Programming Coach' },
    company: 'Bakeli',
    period: { fr: '2017 – 2018', en: '2017 – 2018' },
    description: {
      fr: 'Encadrement d\'étudiants en développement web, animation de sessions pratiques et suivi de leur progression.',
      en: 'Mentored web development students, led hands-on sessions and tracked their progress.',
    },
  },
]

export const certifications: Certification[] = [
  { name: 'Full Stack Development', issuer: 'ALX-T / Udacity' },
  { name: 'React.js', issuer: 'LinkedIn Learning' },
  { name: 'Laravel ', issuer: 'LinkedIn Learning' },
  { name: 'OpenAI / GPT', issuer: 'LinkedIn Learning' },
  { name: 'Claude Academy: Claude 101', issuer: 'Anthropic' },
]
