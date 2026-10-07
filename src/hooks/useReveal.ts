import { useEffect, useRef, type RefObject } from 'react'

// Fait apparaître l'élément quand il entre dans l'écran. Retourne la ref à poser dessus.
// Usage : const ref = useReveal<HTMLDivElement>(90)
export function useReveal<T extends HTMLElement>(delay = 0): RefObject<T> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    el.classList.add('rv')
    el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return ref
}
