import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import ParticleField from './components/ParticleField'
import Toaster from './components/Toast'
import { About, Education, Skills, Experience, Certifications, Languages } from './components/Sections'
import { Contact, Footer } from './components/Contact'
export default function App() {
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const c = document.getElementById('cur')!; let x = 0, y = 0, cx = 0, cy = 0, id = 0
    const m = (e: MouseEvent) => { x = e.clientX; y = e.clientY; c.style.opacity = '1'; c.classList.toggle('h', !!(e.target as Element).closest('a,button,.card')) }
    const t = () => { cx += (x - cx) * .2; cy += (y - cy) * .2; c.style.left = cx + 'px'; c.style.top = cy + 'px'; id = requestAnimationFrame(t) }
    addEventListener('mousemove', m); t(); return () => { removeEventListener('mousemove', m); cancelAnimationFrame(id) }
  }, [])
  useEffect(() => {
    const spot = (e: PointerEvent) => {
      const card = (e.target as Element).closest<HTMLElement>('.card'); if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', e.clientX - r.left + 'px'); card.style.setProperty('--my', e.clientY - r.top + 'px')
    }
    addEventListener('pointermove', spot, { passive: true }); return () => removeEventListener('pointermove', spot)
  }, [])
  return <><a className="skip" href="#main">Skip to content</a><ParticleField /><Toaster /><ScrollProgress /><div id="cur" /><Navbar /><main id="main"><Hero /><About /><Education /><Skills /><Experience /><Projects /><Certifications  /><Languages /><Contact /></main><Footer /></>
}
