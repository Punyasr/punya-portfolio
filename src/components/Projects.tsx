import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import ProjectModal from './ProjectModal'
import { projects } from '../data'
import { vz } from '../viz'

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal as="h2">Featured Projects</Reveal>
        <p className="sub">Select a project to see what it does.</p>
        <div className="grid pgrid">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.t} className="card proj" d={(i % 2) * .12}>
              <div className="viz"><svg viewBox="0 0 400 165" aria-hidden="true" dangerouslySetInnerHTML={{ __html: vz[i] ?? '' }} /></div>
              <div className="pb">
                <div className="pn">{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="chips">{p.tech.map(t => <span className="chip" key={t}>{t}</span>)}</div>
                <button className="more" aria-haspopup="dialog" aria-label={'View details of ' + p.t} onClick={() => setOpen(i)}>View Details <ArrowRight size={15} style={{ verticalAlign: '-2px' }} /></button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {open !== null && <ProjectModal p={projects[open]} n={open} svg={vz[open]} onClose={() => setOpen(null)} />}
    </section>
  )
}
