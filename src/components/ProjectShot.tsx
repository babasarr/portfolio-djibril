import { useSettings } from '../context/SettingsContext'
import type { Project } from '../types'

// Capture du projet : vraie image si `project.image` est renseignée, sinon une maquette dessinée en CSS.
export default function ProjectShot({ project }: { project: Project }) {
  const { tr } = useSettings()
  const title = tr(project.title)

  if (project.image) {
    return (
      <div className="shot">
        <img src={project.image} alt={title} loading="lazy" />
      </div>
    )
  }

  return (
    <div className="shot">
      <div className="bar">
        <i /><i /><i />
        <em>{project.host}</em>
      </div>
      <div className="ui" aria-label={title}>
        {project.kind === 'dash' ? <DashboardMock /> : <WebsiteMock />}
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <>
      <div className="sd">{[0, 1, 2, 3, 4].map((i) => <i key={i} />)}</div>
      <div className="mn">
        <div className="kp">{[0, 1, 2].map((i) => <i key={i} />)}</div>
        <div className="ch">
          {[40, 65, 50, 80, 60, 90, 70].map((v, i) => <i key={i} style={{ height: `${v}%` }} />)}
        </div>
        <div className="rw">
          {[0, 1, 2].map((i) => <i key={i} style={{ width: `${100 - i * 12}%` }} />)}
        </div>
      </div>
    </>
  )
}

function WebsiteMock() {
  return (
    <div className="web">
      <div className="hb"><i /><i /><u /></div>
      <div className="cd">{[0, 1, 2].map((i) => <i key={i} />)}</div>
    </div>
  )
}
