import { useState } from 'react'
import { Mail, Phone, MapPin, Download, Github, Linkedin, Copy, Check } from 'lucide-react'
import { Reveal } from './Reveal'
import ContactForm from './ContactForm'
import { toast } from './Toast'
import { email, phone, linkedin, linkedinLabel, github, githubLabel } from '../data'
function CopyEmail() {
  const [ok, setOk] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(email); setOk(true); toast('✓ Email copied'); setTimeout(() => setOk(false), 1800) } catch { location.href = 'mailto:' + email } }
  return <button type="button" className="copy" onClick={copy} aria-label={ok ? 'Email copied' : 'Copy email address'}>{ok ? <Check size={18} /> : <Copy size={18} />}</button>
}
const row = { display: 'flex', alignItems: 'center', gap: 14 } as const
export function Contact() { return <section id="contact"><div className="wrap"><Reveal as="h2">Let's Connect</Reveal>
  <p className="sub">Have a role, a project or a question? Send a message here, or use any of the links.</p>
  <div className="contact-grid"><div className="cl">
    <Reveal className="card"><a href={'mailto:' + email} style={{ ...row, paddingRight: 60 }}><span className="ico" style={{ margin: 0 }}><Mail /></span><span><small>Email</small>{email}</span></a><CopyEmail /></Reveal>
    <Reveal className="card" d={.1}><a href={'tel:' + phone.replace(/\s/g, '')} style={row}><span className="ico" style={{ margin: 0 }}><Phone /></span><span><small>Phone</small>{phone}</span></a></Reveal>
    <Reveal className="card" d={.2}><a href={linkedin} target="_blank" rel="noopener noreferrer" style={row}><span className="ico" style={{ margin: 0 }}><Linkedin /></span><span><small>LinkedIn</small>{linkedinLabel}</span></a></Reveal>
    <Reveal className="card" d={.3}><a href={github} target="_blank" rel="noopener noreferrer" style={row}><span className="ico" style={{ margin: 0 }}><Github /></span><span><small>GitHub</small>{githubLabel}</span></a></Reveal>
    <Reveal className="card" d={.4} style={row}><span className="ico" style={{ margin: 0 }}><MapPin /></span><span><small>Location</small>Mysuru, Karnataka, India</span></Reveal>
    <Reveal className="card" d={.5} style={{ ...row, justifyContent: 'space-between', flexWrap: 'wrap' }}><span><small>Resume</small>Full details on one page</span>
      <a className="btn p" href={import.meta.env.BASE_URL + 'resume.pdf'} download="Punya_S_R_Resume.pdf" onClick={() => toast('✓ Resume download started')}>Download Resume <Download size={16} /></a></Reveal></div><ContactForm /></div></div></section> }
export function Footer() { return <footer><div className="wrap"><div><strong>PUNYA S R</strong>Computer Science Engineering | Software Development<br />© 2026 Punya S R. All rights reserved.</div>
  <nav aria-label="Footer">{['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map(n => <a key={n} href={'#' + n.toLowerCase()}>{n}</a>)}<a href={'mailto:' + email}>Email</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></nav></div></footer> }
