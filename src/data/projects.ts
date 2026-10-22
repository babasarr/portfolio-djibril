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
    stack: ['React', 'TypeScript', 'Firebase', 'RTK Query'],
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
      fr: ['J’ai développé environ 90 % du projet', 'Frontend et backend'],
      en: ['About 90% of the project built by me', 'Frontend and backend'],
    },
    stack: ['Laravel', 'PHP'],
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
      fr: ['J’ai développé environ 30 % du projet', 'Frontend et backend'],
      en: ['About 30% of the project built by me', 'Frontend and backend'],
    },
    stack: ['React', 'TypeScript', 'Laravel'],
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
    stack: ['React', 'TypeScript', 'Laravel'],
  },
  {
    id: 'cfmpl',
    kind: 'dash',
    image: '',
    host: 'cfmpl',
    title: { fr: 'CFMPL', en: 'CFMPL' },
    summary: { fr: 'Ce projet est une plateforme de dématérialisation des process de CFMLP . Réalisé chez Volkeno.', 
               en: 'This project is a platform for digitalizing the CFMLP processes . Built at Volkeno.' },
    points: {
      fr: ['Gestion des elèves', 'Gestion des enseignants', 'Gestion des cours', 'Gestion des examens','Gestion des notes', 'Génération des bulletins'],
      en: ['Student management', 'Teacher management', 'Course management', 'Exam management','Grade management', 'Report card generation'],
    },
    stack: ['React', 'TypeScript', 'Laravel'],
  },
  {
    id: 'EasyMarket',
    kind: 'dash',
    image: 'projects/easyMarket.png',
    host: 'EasyMarket',
    url: 'https://easymarket.sn/',
    title: { fr: 'EasyMarket', en: 'EasyMarket' },
    summary: { fr: 'EasyMarket est une boîte à outils des vendeurs qui permet de disposer d’un site e-commerce en moins de 2 semaines et un outil de gestion performant. . Réalisé chez Volkeno.', 
               en: 'EasyMarket is a toolkit for sellers that allows them to have an e-commerce site in less than 2 weeks and a powerful management tool. Built at Volkeno.' },
    points: {
      fr: ['Suivi des ventes et dépenses', 'Gestion du stock', 'Factures et tickets de caisse', 'Tableau de bord','Gestion d\'équipe', 'Import de produits'],
      en: ['Sales and expense tracking', 'Inventory management', 'Invoice and receipt management', 'Dashboard','Team management', 'Product import'],
    },
    stack: ['React', 'TypeScript', 'Django', 'Python'],
  },
]
