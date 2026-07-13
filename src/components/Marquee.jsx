export default function Marquee() {
  const items = [
    'ASTHA ISSRANI ✨',
    'BACKEND · FULL STACK 💻',
    'NODE · REACT · MONGODB ⚡',
    'DSA MENTOR · BUILDER 🛠️',
    'OPEN TO INTERNSHIPS 🚀',
  ]

  const row = [...items, ...items]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-row">
          {row.map((t, i) => (
            <span key={`a-${i}`} className="marquee-item">{t}</span>
          ))}
        </div>
        <div className="marquee-row" aria-hidden="true">
          {row.map((t, i) => (
            <span key={`b-${i}`} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
