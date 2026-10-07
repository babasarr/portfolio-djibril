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
]
