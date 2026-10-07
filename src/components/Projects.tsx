import { useSettings } from '../context/SettingsContext'
import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { ui } = useSettings()
  return (
    <section id="projets">
      <div className="w">
        <SectionTitle>{ui.projects.title}</SectionTitle>
        <div className="projs">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
