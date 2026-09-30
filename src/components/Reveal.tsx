import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'
import { GraduationCap, Code2, Bot, Database, Globe, Wrench, Award } from 'lucide-react'
export const icons: Record<string, typeof Code2> = { cap: GraduationCap, code: Code2, ai: Bot, db: Database, web: Globe, tool: Wrench, cert: Award }
export function Icon({ n }: { n: string }) { const I = icons[n]; return <div className="ico"><I /></div> }
export function Reveal({ children, d = 0, className = '', style, as: T = 'div' }: { children: ReactNode; d?: number; className?: string; style?: CSSProperties; as?: any }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <T ref={ref} className={`r ${className}`} style={{ '--d': `${d}s`, ...style }}>{children}</T>
}
