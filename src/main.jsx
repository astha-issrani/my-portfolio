import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { applyTheme, DEFAULT_THEME } from './themes'
import App from './App.jsx'
import './index.css'

applyTheme(
  (() => {
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'rose-pink') return DEFAULT_THEME
    return stored || DEFAULT_THEME
  })()
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
