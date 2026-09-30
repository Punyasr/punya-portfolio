import { useEffect, useState } from 'react'

type T = { id: number; msg: string; err: boolean }
const EV = 'app-toast'

/** Show a small notification from anywhere: toast('✓ Email copied') */
export const toast = (msg: string, err = false) =>
  window.dispatchEvent(new CustomEvent(EV, { detail: { msg, err } }))

export default function Toaster() {
  const [items, setItems] = useState<T[]>([])
  useEffect(() => {
    let n = 0
    const on = (e: Event) => {
      const { msg, err } = (e as CustomEvent).detail
      const t = { id: ++n, msg, err }
      setItems(s => [...s.slice(-2), t])
      setTimeout(() => setItems(s => s.filter(x => x.id !== t.id)), 3200)
    }
    addEventListener(EV, on)
    return () => removeEventListener(EV, on)
  }, [])
  return (
    <div className="toasts" role="status" aria-live="polite">
      {items.map(t => <div key={t.id} className={'toast' + (t.err ? ' err' : '')}>{t.msg}</div>)}
    </div>
  )
}
