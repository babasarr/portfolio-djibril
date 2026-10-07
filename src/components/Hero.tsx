import { useSettings } from '../context/SettingsContext'
import { site } from '../config/site'
import CountUp from './CountUp'

export default function Hero() {
  const { ui } = useSettings()
  const { hero } = ui
  return (
    <header className="hero" id="a-propos">
      <div className="w">
        <span className="tag">{hero.tag}</span>
        <h1>
          {hero.title[0]}
          <span>{hero.title[1]}</span>
          {hero.title[2]}
        </h1>
        <p className="lead">{hero.lead}</p>
        <div className="cta">
          <a className="btn p" href="#contact">{hero.contact}</a>
          <a className="btn" href="#projets">{hero.projects}</a>
          <a className="btn" href={site.cv} download={site.cvFilename}>
            <span className="dl" aria-hidden="true">⬇</span> {hero.cv}
          </a>
        </div>
        <div className="stats">
          {hero.stats.map((s, i) => (
            <div className="stat" key={i}>
              <CountUp value={s.value} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
