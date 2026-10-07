import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import translations from '../i18n'
import type { Lang, Localized, Theme, Translations } from '../types'

interface Settings {
  theme: Theme
  lang: Lang
  /** Textes de l'interface dans la langue courante. */
  ui: Translations
  /** tr({fr, en}) -> texte dans la langue courante (les chaînes simples passent telles quelles). */
  tr: (value: Localized | string) => string
  toggleTheme: () => void
  toggleLang: () => void
}

const SettingsContext = createContext<Settings | null>(null)

const systemTheme = (): Theme => (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
const browserLang = (): Lang => ((navigator.language || 'fr').startsWith('en') ? 'en' : 'fr')

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', systemTheme())
  const [lang, setLang] = useLocalStorage<Lang>('lang', browserLang())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const tr = useCallback((v: Localized | string) => (typeof v === 'string' ? v : v[lang]), [lang])

  const value = useMemo<Settings>(
    () => ({
      theme,
      lang,
      ui: translations[lang],
      tr,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      toggleLang: () => setLang(lang === 'fr' ? 'en' : 'fr'),
    }),
    [theme, lang, tr, setTheme, setLang],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings doit être utilisé dans <SettingsProvider>')
  return ctx
}
