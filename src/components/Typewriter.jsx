import { useEffect, useState } from 'react'

export default function Typewriter({ texts, speed = 45, pause = 2200 }) {
  const [display, setDisplay] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, speed)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setTextIndex((i) => (i + 1) % texts.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [texts, textIndex, charIndex, deleting, speed, pause])

  return (
    <span className="typewriter">
      {display}
      <span className="cursor-blink">█</span>
    </span>
  )
}
