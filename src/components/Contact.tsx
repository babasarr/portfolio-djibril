import { useSettings } from '../context/SettingsContext'
import { useReveal } from '../hooks/useReveal'
import { site } from '../config/site'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const { ui } = useSettings()
  const leadRef = useReveal<HTMLParagraphElement>()
  const ctaRef = useReveal<HTMLDivElement>(90)
  return (
    <section id="contact">
      <div className="w">
        <SectionTitle>{ui.contact.title}</SectionTitle>
        <p className="lead" ref={leadRef}>{ui.contact.lead}</p>
        <div className="cta" ref={ctaRef}>
          <a className="btn p" href={`mailto:${site.email}`}>{ui.contact.email}</a>
          <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}
