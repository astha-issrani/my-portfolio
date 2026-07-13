export const cardAccents = [
  { a: '#ec4899', b: '#f472b6', emoji: '✦' },
  { a: '#a855f7', b: '#c084fc', emoji: '◆' },
  { a: '#eab308', b: '#facc15', emoji: '★' },
  { a: '#f97316', b: '#fb923c', emoji: '●' },
  { a: '#db2777', b: '#f9a8d4', emoji: '▲' },
  { a: '#9333ea', b: '#e9d5ff', emoji: '♦' },
  { a: '#ea580c', b: '#fdba74', emoji: '✺' },
  { a: '#f59e0b', b: '#fde68a', emoji: '❋' },
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
