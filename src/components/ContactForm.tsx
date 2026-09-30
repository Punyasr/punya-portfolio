import { useState, type FormEvent, type InputHTMLAttributes } from 'react'
import { CheckCircle2, Loader2, AlertCircle, Info } from 'lucide-react'
import { Reveal } from './Reveal'
import { toast } from './Toast'
import { email, formEndpoint } from '../data'

const topics = ['Job Opportunity', 'Internship Opportunity', 'Project Collaboration', 'Freelance Work', 'Other']
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const blank = { name: '', email: '', phone: '', topic: topics[0], message: '', _gotcha: '' }
type Status = 'idle' | 'sending' | 'sent' | 'mail' | 'error'
type Key = 'name' | 'email' | 'phone' | 'message'

export default function ContactForm() {
  const [f, setF] = useState(blank)
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const nd = f.phone.replace(/\D/g, '').length
  const err: Record<Key, string> = {
    name: f.name.trim().length < 2 ? 'Please enter your full name.' : '',
    email: emailRe.test(f.email.trim()) ? '' : 'Please enter a valid email address.',
    phone: f.phone.trim() && (!/^\+?[\d\s\-()]+$/.test(f.phone.trim()) || nd < 7 || nd > 15) ? 'Enter a valid phone number, or leave it empty.' : '',
    message: f.message.trim().length < 10 ? 'Please write at least 10 characters.' : ''
  }
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const bad = (k: Key) => !!(touched[k] && err[k])
  const blur = (k: Key) => () => setTouched({ ...touched, [k]: true })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    if (err.name || err.email || err.phone || err.message) return
    if (f._gotcha) { setStatus('sent'); return } // honeypot: only bots fill this
    const data = { name: f.name.trim(), email: f.email.trim(), phone: f.phone.trim(), topic: f.topic, message: f.message.trim() }
    const subject = `Portfolio enquiry: ${data.topic} from ${data.name}`

    if (!formEndpoint) { // not configured yet: open the visitor's email app instead of pretending to send
      const body = `Hi Punya,\n\n${data.message}\n\nTopic: ${data.topic}\nName: ${data.name}\nEmail: ${data.email}${data.phone ? '\nPhone: ' + data.phone : ''}`
      location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mail'); return
    }
    setStatus('sending')
    try {
      const r = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: subject })
      })
      if (!r.ok) throw new Error(String(r.status))
      setF(blank); setTouched({}); setStatus('sent'); toast('✓ Message sent successfully')
    } catch { setStatus('error'); toast('Something went wrong. Please try again.', true) }
  }

  const reset = () => { setF(blank); setTouched({}); setStatus('idle') }

  if (status === 'sent' || status === 'mail') return (
    <Reveal className="fcard done" d={.2}>
      <div className="tick"><CheckCircle2 size={44} /></div>
      {status === 'sent' ? <>
        <h3>Message sent successfully</h3>
        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
      </> : <>
        <h3>Almost there</h3>
        <p>Your email app should have opened with your message ready. Press send there to deliver it. If nothing opened, write to <a href={'mailto:' + email}>{email}</a>.</p>
      </>}
      <button type="button" className="btn" onClick={reset}>Send another message</button>
    </Reveal>
  )

  const field = (k: Key, label: string, extra: InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className={'fld' + (bad(k) ? ' bad' : '')}>
      <input id={'cf-' + k} name={k} placeholder=" " value={f[k]} onChange={set(k)} onBlur={blur(k)}
        aria-invalid={bad(k)} aria-describedby={'cf-' + k + '-e'} {...extra} />
      <label htmlFor={'cf-' + k}>{label}</label>
      <p className="msg" id={'cf-' + k + '-e'} role="alert">{bad(k) ? err[k] : ''}</p>
    </div>
  )

  return (
    <Reveal className="fcard" d={.2}>
      <form onSubmit={submit} noValidate aria-label="Contact form">
        <h3>Send Me a Message</h3>
        <div className="frow">
          {field('name', 'Full Name *', { autoComplete: 'name', required: true })}
          {field('email', 'Email Address *', { type: 'email', inputMode: 'email', autoComplete: 'email', required: true })}
        </div>
        <div className="frow">
          {field('phone', 'Phone Number (optional)', { type: 'tel', inputMode: 'tel', autoComplete: 'tel' })}
          <div className="fld sel">
            <select id="cf-topic" name="topic" value={f.topic} onChange={set('topic')}>{topics.map(t => <option key={t}>{t}</option>)}</select>
            <label htmlFor="cf-topic">Reason / Topic</label>
            <p className="msg" />
          </div>
        </div>
        <div className={'fld' + (bad('message') ? ' bad' : '')}>
          <textarea id="cf-message" name="message" placeholder=" " rows={5} maxLength={1000} required value={f.message} onChange={set('message')}
            onBlur={blur('message')} aria-invalid={bad('message')} aria-describedby="cf-message-e" />
          <label htmlFor="cf-message">Message *</label>
          <p className="msg" id="cf-message-e" role="alert">{bad('message') ? err.message : ''}<span className="count">{f.message.length}/1000</span></p>
        </div>

        <div className="hp" aria-hidden="true"><label>Leave this empty<input tabIndex={-1} autoComplete="off" name="_gotcha" value={f._gotcha} onChange={set('_gotcha')} /></label></div>

        {!formEndpoint && <p className="note"><Info size={16} /><span>Direct sending is not set up yet. This form will open your email app with the message ready to send.</span></p>}
        {status === 'error' && <div className="fail" role="alert"><AlertCircle size={18} /><span>Something went wrong. Please try again, or email <a href={'mailto:' + email}>{email}</a> directly.</span></div>}

        <button className="btn p send" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? <>Sending <Loader2 size={16} className="spin" /></> : <>Send Message <span aria-hidden="true">→</span></>}
        </button>
      </form>
    </Reveal>
  )
}
