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
    summary: { fr: 'Application de niveau production pour piloter un établissement.', en: 'Production-grade app to run a school.' },
    points: {
      fr: ['Facturation automatisée, numérotation AAAA-0001', 'Présences, évaluations et bulletins', 'Tableaux de bord en temps réel', 'Relances de factures par email'],
      en: ['Automated invoicing, AAAA-0001 numbering', 'Attendance, evaluations and report cards', 'Real-time dashboards', 'Invoice reminder emails'],
    },
    stack: ['React', 'TypeScript', 'Firebase', 'RTK Query'],
  },
  {
    id: 'ecoles-au-senegal',
    kind: 'web',
    image: '',
    host: 'ecolesausenegal.org',
    url: 'https://www.ecolesausenegal.org/',
    title: { fr: 'École au Sénégal', en: 'École au Sénégal' },
    summary: { fr: "Site de l'association ecolesausenegal.org, réalisé chez Volkeno.", en: 'Website for the ecolesausenegal.org association, built at Volkeno.' },
    points: {
      fr: ['Environ 90 % du projet développé par mes soins', 'Frontend et backend'],
      en: ['About 90% of the project built by me', 'Frontend and backend'],
    },
    stack: ['Full stack', 'Volkeno'],
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
]
