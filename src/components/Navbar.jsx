import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data'
import ThemeSwitcher from './ThemeSwitcher'
import LiveClock from './LiveClock'

export default function Navbar() {
  const { themeId } = useTheme()

  useEffect(() => {
    document.body.style.overflow = ''
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
          be asthatic
        </button>

        <LiveClock />

        <div className="nav-controls">
          <button
            type="button"
            className="nav-contact-btn"
            onClick={() => scrollTo('contact')}
          >
            Say hi
          </button>
          <ThemeSwitcher key={themeId} />
        </div>
      </div>

      <ul className="nav-links nav-links-inline">
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
