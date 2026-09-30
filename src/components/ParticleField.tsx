import { useEffect, useRef } from 'react'

type P = { x: number; y: number; vx: number; vy: number }

/** Drifting constellation of dots. Lines connect nearby dots and reach out to the cursor. */
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv?.getContext('2d')
    if (!cv || !ctx) return
    const still = matchMedia('(prefers-reduced-motion:reduce)').matches
    let w = 0, h = 0, id = 0, mx = -999, my = -999
    let ps: P[] = []

    const size = () => {
      const r = Math.min(window.devicePixelRatio || 1, 2)
      w = innerWidth; h = innerHeight
      cv.width = w * r; cv.height = h * r
      ctx.setTransform(r, 0, 0, r, 0, 0)
      const n = Math.min(90, Math.round((w * h) / 16000))
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
      }))
      if (still) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of ps) {
        if (!still) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
        ctx.fillStyle = 'rgba(103,232,249,.7)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill()
      }
      ctx.lineWidth = 1
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i]
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.strokeStyle = `rgba(96,140,255,${(1 - d / 120) * .35})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my)
        if (dm < 170) {
          ctx.strokeStyle = `rgba(103,232,249,${(1 - dm / 170) * .6})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx, my); ctx.stroke()
        }
      }
    }

    const loop = () => { draw(); id = requestAnimationFrame(loop) }
    const move = (e: PointerEvent) => { mx = e.clientX; my = e.clientY }
    const leave = () => { mx = -999; my = -999 }

    size()
    if (!still) loop()
    addEventListener('resize', size)
    addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(id)
      removeEventListener('resize', size)
      removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <canvas id="fx" ref={ref} aria-hidden="true" />
}
