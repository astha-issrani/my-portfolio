import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

function readColors() {
  const style = getComputedStyle(document.documentElement)
  return {
    bgRgb: style.getPropertyValue('--bg-rgb').trim() || '16, 8, 16',
    primary: style.getPropertyValue('--grid-primary').trim() || '255, 107, 157',
    accent: style.getPropertyValue('--grid-accent').trim() || '255, 179, 217',
  }
}

export default function CyberGrid() {
  const canvasRef = useRef(null)
  const { themeId } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.0003 + Math.random() * 0.001,
      size: 1 + Math.random() * 2.5,
      opacity: 0.35 + Math.random() * 0.55,
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      const { bgRgb, primary, accent } = readColors()
      const { width, height } = canvas

      ctx.fillStyle = `rgba(${bgRgb}, 0.35)`
      ctx.fillRect(0, 0, width, height)

      const horizon = height * 0.62
      const gridColor = `rgba(${primary}, 0.14)`
      const accentColor = `rgba(${accent}, 0.18)`

      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1

      const vanishX = width / 2
      const vanishY = horizon * 0.35
      const lines = 24

      for (let i = -lines; i <= lines; i++) {
        ctx.beginPath()
        ctx.moveTo(vanishX + i * 40, vanishY)
        ctx.lineTo(vanishX + i * 180, height)
        ctx.stroke()
      }

      for (let j = 0; j < 14; j++) {
        const y = vanishY + ((height - vanishY) / 14) * j + (time * 0.4) % ((height - vanishY) / 14)
        const spread = (y - vanishY) / (height - vanishY)
        const left = vanishX - spread * width * 0.55
        const right = vanishX + spread * width * 0.55
        ctx.beginPath()
        ctx.moveTo(left, y)
        ctx.lineTo(right, y)
        ctx.strokeStyle = j % 3 === 0 ? accentColor : gridColor
        ctx.stroke()
      }

      particles.forEach((p) => {
        p.y -= p.speed
        if (p.y < 0) p.y = 1
        const px = p.x * width
        const py = p.y * height
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${primary}, ${p.opacity})`
        ctx.fill()
      })

      const scanY = (time * 1.2) % height
      const gradient = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      gradient.addColorStop(0, `rgba(${primary}, 0)`)
      gradient.addColorStop(0.5, `rgba(${primary}, 0.12)`)
      gradient.addColorStop(1, `rgba(${primary}, 0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanY - 40, width, 80)

      time += 1
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [themeId])

  return <canvas ref={canvasRef} className="cyber-grid" aria-hidden="true" />
}
