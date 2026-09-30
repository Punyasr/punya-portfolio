import type { CSSProperties } from 'react'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { github, linkedin } from '../data'
import { toast } from './Toast'
const d = (s: number) => ({ '--d': s + 's' } as CSSProperties)
export default function Hero() {
  return <section className="hero" id="home"><div className="wrap"><div>
    <div className="badge h0" style={d(.1)}><span className="dot" />Open to Software Development Opportunities</div>
    <h1 className="h0" style={d(.3)}>PUNYA S R</h1>
    <p className="role h0" style={d(.5)}>Computer Science Engineering Student | Software Developer</p>
    <p className="lead h0" style={d(.7)}>Building responsive, intelligent, and user-focused digital solutions with modern web technologies.</p>
    <div className="btns h0" style={d(.9)}><a className="btn p" href="#projects">View My Work <ArrowRight size={16} /></a>
      <a className="btn" href={import.meta.env.BASE_URL + 'resume.pdf'} download="Punya_S_R_Resume.pdf" onClick={() => toast('✓ Resume download started')}>Download Resume <Download size={16} /></a>
      <a className="btn" href="#contact">Let's Connect <ArrowRight size={16} /></a></div>
      <div className="social h0" style={d(1.05)}>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Punya on LinkedIn"><Linkedin size={20} /></a>
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Punya on GitHub"><Github size={20} /></a></div></div>
    <div className="term h0" style={d(1.1)} aria-hidden="true"><div className="bar"><b /><b /><b /></div>
<pre>{`// punya.profile
const developer = {
  name: "Punya S R",
  studying: "B.E. Computer Science",
  languages: ["C", "Java"],
  web: ["HTML", "CSS", "React"],
  data: "MySQL",
  internship: "BEML Limited",
  github: "Punyasr",
  linkedin: "punyasr-gowda"
};`}<span className="caret" /></pre></div></div></section>
}
