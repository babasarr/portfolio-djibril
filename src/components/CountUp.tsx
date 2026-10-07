import { useCountUp } from '../hooks/useCountUp'

// "8 ans" -> anime le 8 puis garde " ans" ; "25+" -> 25 puis "+"
export default function CountUp({ value }: { value: string }) {
  const match = /^(\d+)(.*)$/.exec(value)
  const n = useCountUp(match ? Number(match[1]) : 0)
  return <b>{match ? `${n}${match[2]}` : value}</b>
}
