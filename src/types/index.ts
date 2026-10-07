export type Lang = 'fr' | 'en'
export type Theme = 'light' | 'dark'

/** Un texte disponible dans les deux langues. */
export type Localized<T = string> = Record<Lang, T>

export type IconName = 'react' | 'ts' | 'rtk' | 'laravel' | 'php' | 'node' | 'fb' | 'sql'

export interface Skill {
  icon: IconName
  category: Localized
  name: string
  description: Localized
}

export interface Project {
  id: string
  kind: 'dash' | 'web'
  /** Chemin d'une vraie capture dans /public ; vide = maquette dessinée. */
  image: string
  host: string
  url?: string
  title: Localized
  summary: Localized
  points: Localized<string[]>
  stack: string[]
}

export interface Job {
  role: Localized
  company: string | Localized
  description: Localized
}

export interface Certification {
  name: string
  issuer: string
}

export interface Translations {
  nav: { about: string; skills: string; projects: string; experience: string; contact: string }
  hero: {
    tag: string
    title: [string, string, string]
    lead: string
    contact: string
    projects: string
    cv: string
    stats: { value: string; label: string }[]
  }
  skills: { title: string; all: string }
  projects: { title: string; visit: string }
  experience: { title: string; certifications: string }
  contact: { title: string; lead: string; email: string }
}
