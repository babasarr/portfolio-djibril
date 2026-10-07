import { site } from '../config/site'

export default function Footer() {
  return (
    <footer>
      <div className="w">© {new Date().getFullYear()} {site.name} · Dakar</div>
    </footer>
  )
}
