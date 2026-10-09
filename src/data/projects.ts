// kind : 'dash' (maquette tableau de bord) ou 'web' (maquette site).
// image : chemin d'une vraie capture placée dans /public/projects (ex: '/projects/ecole.png').
//         Si renseigné, la capture remplace la maquette.
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'school-app',
    kind: 'dash',
    image: '',
    host: 'app.ecole',
    title: { fr: 'Application de gestion scolaire', en: 'School management app' },
    summary: { fr: 'Application de niveau production pour piloter un établissement. Réalisé chez Volkeno.', en: 'Production-grade app to run a school. Built at Volkeno.' },
    points: {
      fr: ['Facturation automatisée, numérotation AAAA-0001', 'Présences, évaluations et bulletins', 'Tableaux de bord en temps réel', 'Relances de factures par email'],
      en: ['Automated invoicing, AAAA-0001 numbering', 'Attendance, evaluations and report cards', 'Real-time dashboards', 'Invoice reminder emails'],
    },
    stack: ['React', 'TypeScript', 'Firebase', 'RTK Query','Volkeno'],
  },
  {
    id: 'ecoles-au-senegal',
    kind: 'web',
    image: 'projects/eas.png',
    host: 'ecolesausenegal.org',
    url: 'https://www.ecolesausenegal.org/',
    title: { fr: 'École au Sénégal', en: 'École au Sénégal' },
    summary: { fr: "Écoles au Sénégal (EAS) est une plateforme innovante qui vise à réduire les inégalités en matière d'accès à une éducation de qualité. Elle s'engage à promouvoir les matières scientifiques tout en encourageant la représentativité féminine dans le secteur de l'éducation. Réalisé chez Volkeno.", 
               en: 'Schools in Senegal (EAS) is an innovative platform that aims to reduce inequalities in access to quality education. It is committed to promoting science subjects while encouraging greater representation of women in the education sector. Built at Volkeno.' },
    points: {
      fr: ['Environ 90 % du projet développé par mes soins', 'Frontend et backend'],
      en: ['About 90% of the project built by me', 'Frontend and backend'],
    },
    stack: ['Laravel', 'PHP', 'Volkeno'],
  },
  {
    id: 'pitch-palabre',
    kind: 'web',
    image: 'projects/pitch_palabre.png',
    host: 'pitchPalabre.org',
    title: { fr: 'Pitch Palabre', en: 'Pitch Palabre' },
    summary: { fr: "PitchPalabre accompagne les entrepreneur.e.s d’afrique francophone dans le 0 to 1 pour les aider à mieux vendre, lever leur 1er fonds et trouver l’adéquation produit marché. Ils conçoivent et implémentent des programmes d’accompagnement en Afrique francophone., réalisé chez Volkeno.", 
              en: 'PitchPalabre supports entrepreneurs in French-speaking Africa during the 0-to-1 phase to help them sell more effectively, raise their first round of funding, and achieve product-market fit. They design and implement support programs in French-speaking Africa., built at Volkeno.' },
    points: {
      fr: ['Environ 30 % du projet développé par mes soins', 'Frontend et backend'],
      en: ['About 30% of the project built by me', 'Frontend and backend'],
    },
    stack: ['React', 'TypeScript', 'Laravel', 'Volkeno'],
  },
  {
    id: 'piyti',
    kind: 'web',
    image: '',
    host: 'piyeti.volkeno.com',
    url: 'https://piyeti.volkeno.com/',
    title: { fr: 'Piyeti', en: 'Piyti' },
    summary: { fr: 'Piyeti est un plateforme de gestion d\'événements et de réservation . Réalisé chez Volkeno.', 
               en: 'Piyeti is an event management and booking platform . Built at Volkeno.' },
    points: {
      fr: ['Création d\'événement facile', 'Billetterie flexible', 'Analyses détaillées', 'Gestion des participants'],
      en: ['Easy event creation', 'Flexible ticketing', 'Detailed analytics', 'Participant management'],
    },
    stack: ['React', 'TypeScript', 'Laravel', 'Volkeno'],
  },
]
