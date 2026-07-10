import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const { themeId } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')} type="button">
          <span className="logo-bracket">[</span>
          <span className="logo-text">AI</span>
          <span className="logo-bracket">]</span>
          <span className="logo-pulse" />
        </button>

        <div className="nav-controls">
          <ThemeSwitcher key={themeId} />
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <li key={link.id}>
            <button onClick={() => scrollTo(link.id)} type="button">
              <span className="nav-index">0{i + 1}</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
