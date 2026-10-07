import type { Translations } from '../types'

const fr: Translations = {
  nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Parcours', contact: 'Contact' },
  hero: {
    tag: 'Disponible · Dakar, Sénégal',
    title: ['Je conçois des applications web ', 'fiables et rapides', '.'],
    lead: "Développeur Full Stack senior, spécialisé en React/TypeScript côté frontend et Laravel ou Node.js côté backend. Environ 8 ans d'expérience.",
    contact: 'Me contacter',
    projects: 'Voir mes projets',
    cv: 'Mon CV',
    stats: [
      { value: '8 ans', label: "d'expérience" },
      { value: '25+', label: 'projets livrés' },
      { value: '50+', label: 'personnes coachées' },
    ],
  },
  skills: { title: 'Compétences', all: 'Tous' },
  projects: { title: 'Projets', visit: 'Voir le site →' },
  experience: { title: 'Parcours', certifications: 'Certifications' },
  contact: { title: 'Travaillons ensemble', lead: 'Un projet, une mission freelance ou une opportunité ? Écrivez-moi.', email: 'Envoyer un email' },
}

export default fr
