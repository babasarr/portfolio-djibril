import { icons } from '../data/icons'
import type { IconName } from '../types'

interface Props {
  name: IconName
  size?: number
}

export default function SkillIcon({ name, size = 36 }: Props) {
  const [path, color] = icons[name] ?? icons.react
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill={color} />
    </svg>
  )
}
