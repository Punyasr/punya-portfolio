import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function ScrollProgress() {
  const [p, setP] = useState(0), [v, setV] = useState(false)
  useEffect(() => { const f = () => { const h = document.documentElement.scrollHeight - innerHeight; setP(h > 0 ? scrollY / h * 100 : 0); setV(scrollY > 600) }
    addEventListener('scroll', f, { passive: true }); f(); return () => removeEventListener('scroll', f) }, [])
  return <><div id="prog" style={{ width: p + '%' }} /><button id="top" className={v ? 'v' : ''} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={18} /></button></>
}
