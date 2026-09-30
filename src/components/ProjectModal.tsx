import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

type Project = { t: string; d: string; tech: string[]; f: string[] }

/** Accessible project details dialog (native <dialog>: focus trap, Escape, top layer). */
export default function ProjectModal({ p, n, svg, onClose }: { p: Project; n: number; svg?: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [out, setOut] = useState(false)

  const close = () => {
    if (out) return
    const still = matchMedia('(prefers-reduced-motion:reduce)').matches
    setOut(true)
    setTimeout(() => { ref.current?.close(); onClose() }, still ? 0 : 240) // close() returns focus to the trigger button
  }

  useEffect(() => {
    ref.current?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <dialog
      ref={ref}
      className={'modal' + (out ? ' out' : '')}
      aria-labelledby="pm-title"
      onCancel={e => { e.preventDefault(); close() }}
      onClick={e => { if (e.target === ref.current) close() }}
    >
      <button className="mx" aria-label="Close project details" onClick={close} autoFocus><X size={20} /></button>
      <div className="mbox">
        {svg && <div className="viz"><svg viewBox="0 0 400 165" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} /></div>}
        <div className="mbody">
          <div className="pn">Project {String(n + 1).padStart(2, '0')}</div>
          <h3 id="pm-title">{p.t}</h3>
          <p className="mdesc">{p.d}</p>
          <h4>Technologies</h4>
          <div className="chips">{p.tech.map(t => <span className="chip" key={t}>{t}</span>)}</div>
          <h4>Key features</h4>
          <ul className="feat">{p.f.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </dialog>
  )
}
