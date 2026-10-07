import { useEffect, useState } from 'react'

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Compte de 0 à `end` en `duration` ms (easing out cubique).
export function useCountUp(end: number, duration = 1300): number {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (reduced()) {
      setN(end)
      return
    }
    let start: number | null = null
    let id = 0
    const tick = (ts: number) => {
      start ??= ts
      const k = Math.min((ts - start) / duration, 1)
      setN(Math.round(end * (1 - (1 - k) ** 3)))
      if (k < 1) id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [end, duration])
  return n
}
