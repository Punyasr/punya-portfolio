import { useEffect, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { nav } from '../data'
import { toast } from './Toast'

const alias: Record<string, string> = { languages: 'certifications' }

export default function Navbar() {
  const [s, setS] = useState(false), [o, setO] = useState(false), [cur, setCur] = useState('home')
  const btn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const f = () => {
      setS(scrollY > 20)
      let c = 'home'
      document.querySelectorAll('main section').forEach(x => { if (scrollY + 140 >= (x as HTMLElement).offsetTop) c = x.id })
      setCur(alias[c] || c)
    }
    addEventListener('scroll', f, { passive: true }); f()
    return () => removeEventListener('scroll', f)
  }, [])

  // Mobile menu: lock page scroll, close on Escape or when the window grows to desktop size
  useEffect(() => {
    if (!o) return
    document.body.style.overflow = 'hidden'
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { setO(false); btn.current?.focus() } }
    const r = () => { if (innerWidth > 980) setO(false) }
    addEventListener('keydown', k); addEventListener('resize', r)
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', k); removeEventListener('resize', r) }
  }, [o])

  return (
    <nav id="nav" className={s ? 's' : ''} aria-label="Main">
      <div className="wrap">
        <a className="logo" href="#home">PUNYA S R</a>
        <button ref={btn} className="burger" aria-label="Toggle menu" aria-expanded={o} aria-controls="menu" onClick={() => setO(!o)}><i /></button>
        <ul id="menu" className={'links' + (o ? ' o' : '')}>
          {nav.map(n => (
            <li key={n}><a href={'#' + n.toLowerCase()} className={cur === n.toLowerCase() ? 'on' : ''} aria-current={cur === n.toLowerCase() ? 'true' : undefined} onClick={() => setO(false)}>{n}</a></li>
          ))}
          <li><a className="nav-cta" href={import.meta.env.BASE_URL + 'resume.pdf'} download="Punya_S_R_Resume.pdf" onClick={() => { setO(false); toast('✓ Resume download started') }}>Resume <Download size={14} /></a></li>
        </ul>
      </div>
    </nav>
  )
}
