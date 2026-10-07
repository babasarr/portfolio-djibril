import { useSettings } from '../context/SettingsContext'
import { site } from '../config/site'
import type { Translations } from '../types'

const links: ReadonlyArray<readonly [id: string, key: keyof Translations['nav']]> = [
  ['a-propos', 'about'],
  ['competences', 'skills'],
  ['projets', 'projects'],
  ['parcours', 'experience'],
  ['contact', 'contact'],
]

export default function Navbar() {
  const { ui, lang, theme, toggleLang, toggleTheme } = useSettings()
  return (
    <nav>
      <div className="w">
        <b>{site.name}</b>
        <div className="l">
          {links.map(([id, key]) => (
            <a key={id} href={`#${id}`}>
              {ui.nav[key]}
            </a>
          ))}
        </div>
        <div className="r">
          <button className="th" onClick={toggleLang} aria-label="Language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button className="th" onClick={toggleTheme} aria-label="Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
