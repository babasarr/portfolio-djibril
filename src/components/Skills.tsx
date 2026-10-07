import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'
import SkillIcon from './SkillIcon'

export default function Skills() {
  const { ui, tr } = useSettings()
  const [active, setActive] = useState(0) // 0 = tous
  const tabsRef = useReveal<HTMLDivElement>()

  const categories = [...new Set(skills.map((s) => tr(s.category)))]
  const selected = active === 0 ? null : categories[active - 1]
  const visible = skills.filter((s) => !selected || tr(s.category) === selected)

  return (
    <section id="competences">
      <div className="w">
        <SectionTitle>{ui.skills.title}</SectionTitle>
        <div className="tabs" ref={tabsRef}>
          {[ui.skills.all, ...categories].map((label, i) => (
            <button key={label} className={`tab${i === active ? ' on' : ''}`} onClick={() => setActive(i)}>
              {label}
            </button>
          ))}
        </div>
        <div className="grid">
          {visible.map((s) => (
            <div className="sk" key={s.name}>
              <SkillIcon name={s.icon} />
              <div>
                <b>{s.name}</b>
                <small>{tr(s.description)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
