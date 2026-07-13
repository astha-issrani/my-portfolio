export const cardAccents = [
  { a: '#ff9fac', b: '#fda4af', emoji: '✦' },
  { a: '#a78bfa', b: '#c4b5fd', emoji: '◆' },
  { a: '#fcd34d', b: '#fde68a', emoji: '★' },
  { a: '#60a5fa', b: '#93c5fd', emoji: '●' },
  { a: '#4ade80', b: '#86efac', emoji: '▲' },
  { a: '#f87171', b: '#fca5a5', emoji: '♦' },
  { a: '#fb923c', b: '#fdba74', emoji: '✺' },
  { a: '#e879f9', b: '#f0abfc', emoji: '❋' },
]

export function getAccent(index) {
  return cardAccents[index % cardAccents.length]
}

export const skillIcons = {
  Languages: '💻',
  Frontend: '🎨',
  Backend: '⚙️',
  'DevOps/Tools': '🚀',
  Databases: '🗄️',
  'Soft Skills': '🤝',
}
