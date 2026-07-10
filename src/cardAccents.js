export const cardAccents = [
  { a: '#ec4899', b: '#f472b6', emoji: '✦' },
  { a: '#a855f7', b: '#c084fc', emoji: '◆' },
  { a: '#f59e0b', b: '#fbbf24', emoji: '★' },
  { a: '#06b6d4', b: '#22d3ee', emoji: '●' },
  { a: '#10b981', b: '#34d399', emoji: '▲' },
  { a: '#f43f5e', b: '#fb7185', emoji: '♦' },
  { a: '#6366f1', b: '#818cf8', emoji: '✺' },
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
