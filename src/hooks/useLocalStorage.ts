import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

export function useLocalStorage<T extends string>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      return (localStorage.getItem(key) as T | null) ?? initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, value)
    } catch {
      /* stockage indisponible */
    }
  }, [key, value])
  return [value, setValue]
}
