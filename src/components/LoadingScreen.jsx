import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id)
          setTimeout(() => setDone(true), 280)
          return 100
        }
        return p + Math.floor(Math.random() * 12) + 6
      })
    }, 120)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="loading-title">LOADING...</h1>
          <div className="loading-bar-track">
            <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <p className="loading-pct">{Math.min(progress, 100)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
