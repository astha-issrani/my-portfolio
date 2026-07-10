import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { themes } from '../themes'
import { useTheme } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = themes.find((t) => t.id === themeId) ?? themes[0]

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="theme-switcher" ref={ref}>
      <button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
        aria-expanded={open}
      >
        <span className="theme-trigger-icon">{current.emoji}</span>
        <span className="theme-trigger-label">{current.name}</span>
        <svg className={`theme-chevron ${open ? 'open' : ''}`} viewBox="0 0 12 12" width="10" height="10">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <p className="theme-panel-title">SELECT THEME</p>
            <div className="theme-options">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={`theme-option ${themeId === theme.id ? 'active' : ''}`}
                  onClick={() => {
                    setThemeId(theme.id)
                    setOpen(false)
                  }}
                >
                  <span className="theme-option-emoji">{theme.emoji}</span>
                  <span className="theme-option-name">{theme.name}</span>
                  <span className="theme-swatches">
                    {theme.preview.map((color) => (
                      <span key={color} className="theme-swatch" style={{ background: color }} />
                    ))}
                  </span>
                  {themeId === theme.id && <span className="theme-check">✓</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
