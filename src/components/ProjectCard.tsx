import { useSettings } from '../context/SettingsContext'
import { useReveal } from '../hooks/useReveal'
import ProjectShot from './ProjectShot'
import type { Project } from '../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const { ui, tr, lang } = useSettings()
  const ref = useReveal<HTMLElement>((index % 4) * 90)
  return (
    <article className="pj" ref={ref}>
      <ProjectShot project={project} />
      <h3>{tr(project.title)}</h3>
      <p>{tr(project.summary)}</p>
      <ul>
        {project.points[lang].map((p) => <li key={p}>{p}</li>)}
      </ul>
      <div className="chips">
        {project.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
      </div>
      {project.url && (
        <a className="visit" href={project.url} target="_blank" rel="noopener noreferrer">
          {ui.projects.visit}
        </a>
      )}
    </article>
  )
}
