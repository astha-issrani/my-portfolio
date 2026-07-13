import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GAMES = [
  { id: 'ttt', label: 'Tic-Tac-Toe', emoji: '⭕' },
  { id: 'memory', label: 'Memory', emoji: '🃏' },
  { id: 'whack', label: 'Whack-a-Dot', emoji: '🎯' },
]

const MEMORY_EMOJIS = ['🚀', '🎨', '⚡', '🌈', '🎮', '💎', '🔥', '🎧']

function emptyBoard() {
  return Array(9).fill(null)
}

function calcWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard)
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calcWinner(board)
  const draw = !winner && board.every(Boolean)
  const status = winner
    ? `Winner: ${winner}`
    : draw
      ? "It's a draw!"
      : `Turn: ${xIsNext ? 'X' : 'O'}`

  const play = (i) => {
    if (board[i] || winner) return
    const next = board.slice()
    next[i] = xIsNext ? 'X' : 'O'
    setBoard(next)
    setXIsNext(!xIsNext)
  }

  const reset = () => {
    setBoard(emptyBoard())
    setXIsNext(true)
  }

  return (
    <div className="game-panel">
      <div className="game-status">{status}</div>
      <div className="ttt-grid">
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            className={`ttt-cell ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}`}
            onClick={() => play(i)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button type="button" className="btn btn-outline game-reset" onClick={reset}>
        NEW GAME
      </button>
    </div>
  )
}

function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function MemoryMatch() {
  const deck = useMemo(
    () =>
      shuffle([...MEMORY_EMOJIS, ...MEMORY_EMOJIS]).map((emoji, i) => ({
        id: i,
        emoji,
        matched: false,
      })),
    [],
  )
  const [cards, setCards] = useState(deck)
  const [flipped, setFlipped] = useState([])
  const [lock, setLock] = useState(false)
  const [moves, setMoves] = useState(0)
  const won = cards.every((c) => c.matched)

  const reset = () => {
    setCards(
      shuffle([...MEMORY_EMOJIS, ...MEMORY_EMOJIS]).map((emoji, i) => ({
        id: i,
        emoji,
        matched: false,
      })),
    )
    setFlipped([])
    setLock(false)
    setMoves(0)
  }

  const flip = (id) => {
    if (lock) return
    const card = cards.find((c) => c.id === id)
    if (!card || card.matched || flipped.includes(id)) return

    const nextFlipped = [...flipped, id]
    setFlipped(nextFlipped)

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1)
      setLock(true)
      const [a, b] = nextFlipped
      const cardA = cards.find((c) => c.id === a)
      const cardB = cards.find((c) => c.id === b)

      if (cardA.emoji === cardB.emoji) {
        setCards((prev) =>
          prev.map((c) => (c.id === a || c.id === b ? { ...c, matched: true } : c)),
        )
        setFlipped([])
        setLock(false)
      } else {
        setTimeout(() => {
          setFlipped([])
          setLock(false)
        }, 650)
      }
    }
  }

  return (
    <div className="game-panel">
      <div className="game-status">
        {won ? `You won in ${moves} moves!` : `Moves: ${moves}`}
      </div>
      <div className="memory-grid">
        {cards.map((card) => {
          const isUp = card.matched || flipped.includes(card.id)
          return (
            <button
              key={card.id}
              type="button"
              className={`memory-card ${isUp ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
              onClick={() => flip(card.id)}
              aria-label={isUp ? card.emoji : 'Hidden card'}
            >
              <span className="memory-face front">?</span>
              <span className="memory-face back">{card.emoji}</span>
            </button>
          )
        })}
      </div>
      <button type="button" className="btn btn-outline game-reset" onClick={reset}>
        SHUFFLE
      </button>
    </div>
  )
}

function WhackADot() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20)
  const [active, setActive] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [missFlash, setMissFlash] = useState(false)

  useEffect(() => {
    if (!playing) return undefined
    if (timeLeft <= 0) {
      setPlaying(false)
      setActive(null)
      return undefined
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [playing, timeLeft])

  useEffect(() => {
    if (!playing) return undefined
    const spawn = () => setActive(Math.floor(Math.random() * 9))
    spawn()
    const id = setInterval(spawn, 780)
    return () => clearInterval(id)
  }, [playing])

  const start = () => {
    setScore(0)
    setTimeLeft(20)
    setPlaying(true)
    setActive(null)
  }

  const hit = (i) => {
    if (!playing) return
    if (i === active) {
      setScore((s) => s + 1)
      setActive(null)
    } else {
      setMissFlash(true)
      setTimeout(() => setMissFlash(false), 180)
    }
  }

  return (
    <div className={`game-panel ${missFlash ? 'miss' : ''}`}>
      <div className="game-status">
        {playing
          ? `Score ${score} · ${timeLeft}s`
          : timeLeft === 0
            ? `Time's up! Score: ${score}`
            : 'Hit the glowing dots — 20 seconds'}
      </div>
      <div className="whack-grid">
        {Array.from({ length: 9 }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`whack-hole ${active === i ? 'active' : ''}`}
            onClick={() => hit(i)}
            aria-label={active === i ? 'Hit target' : 'Empty hole'}
          >
            <span className="whack-dot" />
          </button>
        ))}
      </div>
      <button type="button" className="btn btn-primary game-reset" onClick={start}>
        {playing ? 'RESTART' : timeLeft === 0 ? 'PLAY AGAIN' : 'START'}
      </button>
    </div>
  )
}

export default function Games() {
  const [active, setActive] = useState('ttt')

  return (
    <section id="games" className="section section-creative section-games">
      <div className="section-header">
        <span className="section-tag">// 06</span>
        <h2 className="section-title">GAMES</h2>
        <div className="section-line" />
      </div>

      <motion.p
        className="play-intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        Bored of scrolling? Pick a quick game and take a break.
      </motion.p>

      <div className="game-tabs">
        {GAMES.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`game-tab ${active === g.id ? 'active' : ''}`}
            onClick={() => setActive(g.id)}
          >
            <span aria-hidden="true">{g.emoji}</span>
            {g.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
        >
          {active === 'ttt' && <TicTacToe />}
          {active === 'memory' && <MemoryMatch />}
          {active === 'whack' && <WhackADot />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
