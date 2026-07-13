export const cardAccents = [
  { a: '#ff9fac', b: '#fcd34d', emoji: '✦' },
  { a: '#a78bfa', b: '#60a5fa', emoji: '◆' },
  { a: '#fcd34d', b: '#4ade80', emoji: '★' },
  { a: '#60a5fa', b: '#ff9fac', emoji: '●' },
  { a: '#4ade80', b: '#a78bfa', emoji: '▲' },
  { a: '#f87171', b: '#fcd34d', emoji: '♦' },
  { a: '#ff9fac', b: '#60a5fa', emoji: '✺' },
  { a: '#a78bfa', b: '#4ade80', emoji: '❋' },
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
