import { useSettings } from '../context/SettingsContext'
import { useReveal } from '../hooks/useReveal'
import { jobs, certifications } from '../data/experience'
import SectionTitle from './SectionTitle'
import type { Certification, Job as JobData } from '../types'

function Job({ job, index }: { job: JobData; index: number }) {
  const { tr } = useSettings()
  const ref = useReveal<HTMLDivElement>(index * 90)
  return (
    <div ref={ref}>
      <b>{tr(job.role)}</b>
      <small>{tr(job.company)}</small>
      <p style={{ margin: '4px 0 0' }}>{tr(job.description)}</p>
    </div>
  )
}

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useReveal<HTMLDivElement>((index % 4) * 90)
  return (
    <div className="ct" ref={ref}>
      <b>{cert.name}</b>
      <small>{cert.issuer}</small>
    </div>
  )
}

export default function Experience() {
  const { ui } = useSettings()
  return (
    <section id="parcours">
      <div className="w">
        <SectionTitle>{ui.experience.title}</SectionTitle>
        <div className="tl">
          {jobs.map((j, i) => <Job key={i} job={j} index={i} />)}
        </div>
        <SectionTitle style={{ marginTop: 48 }}>{ui.experience.certifications}</SectionTitle>
        <div className="certs">
          {certifications.map((c, i) => <CertCard key={c.name} cert={c} index={i} />)}
        </div>
      </div>
    </section>
  )
}
