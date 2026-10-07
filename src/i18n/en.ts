import type { Translations } from '../types'

const en: Translations = {
  nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
  hero: {
    tag: 'Available · Dakar, Senegal',
    title: ['I build ', 'reliable, fast', ' web applications.'],
    lead: 'Senior Full Stack developer specialised in React/TypeScript on the frontend and Laravel or Node.js on the backend. About 8 years of experience.',
    contact: 'Get in touch',
    projects: 'See my work',
    cv: 'My CV (FR)',
    stats: [
      { value: '8 yrs', label: 'of experience' },
      { value: '25+', label: 'projects delivered' },
      { value: '50+', label: 'people coached' },
    ],
  },
  skills: { title: 'Skills', all: 'All' },
  projects: { title: 'Projects', visit: 'Visit the site →' },
  experience: { title: 'Experience', certifications: 'Certifications' },
  contact: { title: "Let's work together", lead: 'A project, a freelance mission or an opportunity? Drop me a line.', email: 'Send an email' },
}

export default en
