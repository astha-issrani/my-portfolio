import { useEffect, useState } from 'react'

function formatClock(date) {
  const day = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  const fullDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase()
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  return { day, fullDate, time }
}

export default function LiveClock() {
  const [now, setNow] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const id = setInterval(() => setNow(formatClock(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="live-clock" aria-live="polite" title="Local date and time">
      <span className="live-clock-day">{now.day}</span>
      <span className="live-clock-sep" aria-hidden="true">·</span>
      <span className="live-clock-date">{now.fullDate}</span>
      <span className="live-clock-sep" aria-hidden="true">·</span>
      <span className="live-clock-time">{now.time}</span>
    </div>
  )
}
