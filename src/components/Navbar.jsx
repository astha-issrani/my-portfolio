import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data'
import ThemeSwitcher from './ThemeSwitcher'
import LiveClock from './LiveClock'

export default function Navbar() {
  const { themeId } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

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
      className="navbar neo-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')} type="button">
          Astha
        </button>

        <LiveClock />

        <div className="nav-controls">
          <button
            type="button"
            className="nav-contact-btn"
            onClick={() => scrollTo('contact')}
          >
            CONTACT
          </button>
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
        {navLinks.map((link) => (
          <li key={link.id}>
            <button onClick={() => scrollTo(link.id)} type="button">
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
