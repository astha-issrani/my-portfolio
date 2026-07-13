import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PENS = [
  { id: 'chalk-white', label: 'White', color: '#f5f5f4' },
  { id: 'chalk-yellow', label: 'Yellow', color: '#fde047' },
  { id: 'chalk-pink', label: 'Pink', color: '#fb7185' },
  { id: 'chalk-blue', label: 'Blue', color: '#38bdf8' },
  { id: 'chalk-green', label: 'Green', color: '#4ade80' },
  { id: 'chalk-orange', label: 'Orange', color: '#fb923c' },
  { id: 'chalk-violet', label: 'Violet', color: '#c084fc' },
]

export default function Blackboard() {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const drawing = useRef(false)
  const last = useRef(null)
  const [pen, setPen] = useState(PENS[0].color)
  const [size, setSize] = useState(4)
  const [eraser, setEraser] = useState(false)

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = wrap.getBoundingClientRect()
    const snapshot = canvas.toDataURL()

    canvas.width = Math.floor(width * ratio)
    canvas.height = Math.floor(height * ratio)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    ctx.fillStyle = '#1a3d2e'
    ctx.fillRect(0, 0, width, height)

    const img = new Image()
    img.onload = () => ctx.drawImage(img, 0, 0, width, height)
    img.src = snapshot
  }, [])

  useEffect(() => {
    resizeCanvas()
    const onResize = () => resizeCanvas()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [resizeCanvas])

  const getPoint = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const source = e.touches ? e.touches[0] : e
    return {
      x: source.clientX - rect.left,
      y: source.clientY - rect.top,
    }
  }

  const stroke = (from, to) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !from || !to) return
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = size
    if (eraser) {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = '#1a3d2e'
      ctx.lineWidth = size * 3
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = pen
    }
    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.stroke()
  }

  const startDraw = (e) => {
    e.preventDefault()
    drawing.current = true
    last.current = getPoint(e)
  }

  const moveDraw = (e) => {
    if (!drawing.current) return
    e.preventDefault()
    const point = getPoint(e)
    stroke(last.current, point)
    last.current = point
  }

  const endDraw = () => {
    drawing.current = false
    last.current = null
  }

  const clearBoard = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const { width, height } = canvas.getBoundingClientRect()
    ctx.fillStyle = '#1a3d2e'
    ctx.fillRect(0, 0, width, height)
  }

  return (
    <section id="blackboard" className="section section-creative section-blackboard">
      <div className="section-header">
        <span className="section-tag">// doodle</span>
        <h2 className="section-title">DRAW HERE!</h2>
        <div className="section-line" />
      </div>

      <motion.p
        className="play-intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        ✨ Bored? Doodle something cool!
      </motion.p>

      <motion.div
        className="blackboard-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="blackboard-toolbar">
          <div className="pen-row" role="listbox" aria-label="Pen colours">
            {PENS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`pen-swatch ${!eraser && pen === p.color ? 'active' : ''}`}
                style={{ '--pen': p.color }}
                aria-label={p.label}
                title={p.label}
                onClick={() => {
                  setPen(p.color)
                  setEraser(false)
                }}
              />
            ))}
          </div>

          <label className="brush-size">
            <span>Size</span>
            <input
              type="range"
              min="2"
              max="18"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </label>

          <div className="blackboard-actions">
            <button
              type="button"
              className={`btn btn-outline board-tool ${eraser ? 'active' : ''}`}
              onClick={() => setEraser((v) => !v)}
            >
              ERASER
            </button>
            <button type="button" className="btn btn-primary board-tool" onClick={clearBoard}>
              CLEAR
            </button>
          </div>
        </div>

        <div className="blackboard-frame" ref={wrapRef}>
          <canvas
            ref={canvasRef}
            className="blackboard-canvas"
            onMouseDown={startDraw}
            onMouseMove={moveDraw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={moveDraw}
            onTouchEnd={endDraw}
          />
          <div className="blackboard-ledge" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  )
}
