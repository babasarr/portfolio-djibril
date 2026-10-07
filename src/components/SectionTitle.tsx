import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export default function SectionTitle({ children, style }: Props) {
  const ref = useReveal<HTMLHeadingElement>()
  return (
    <h2 ref={ref} style={style}>
      {children}
    </h2>
  )
}
