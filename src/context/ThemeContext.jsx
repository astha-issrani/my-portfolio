import { createContext, useContext, useEffect, useState } from 'react'
import { DEFAULT_THEME, applyTheme } from '../themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'rose-pink') return DEFAULT_THEME
    return stored || DEFAULT_THEME
  })

  useEffect(() => {
    applyTheme(themeId)
    localStorage.setItem('portfolio-theme', themeId)
  }, [themeId])

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
