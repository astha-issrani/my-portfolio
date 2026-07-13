import { motion } from 'framer-motion'
import { profile } from '../data'
import profilePhoto from '../assets/profile.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <motion.div className="hero-card neo-card" variants={container} initial="hidden" animate="show">
        <motion.div className="hero-stickers" variants={item}>
          <span className="sticker sticker-pink">APIs · Systems · Web</span>
          <span className="sticker sticker-yellow">Available for internships</span>
        </motion.div>

        <div className="hero-layout">
          <motion.div className="hero-content" variants={item}>
            <p className="hero-kicker">portfolio.exe</p>
            <h1 className="hero-name">
              <span className="hero-name-line">ASTHA</span>
              <span className="hero-name-line">ISSRANI</span>
            </h1>
            <div className="hero-role-badge">backend + full-stack engineer</div>

            <div className="hero-meta-list">
              <div>
                <span className="meta-tag tag-yellow">based in</span>
                {profile.location}
              </div>
              <div>
                <span className="meta-tag tag-green">studying</span>
                B.Tech CSE · 2022–2026
              </div>
              <div>
                <span className="meta-tag tag-blue">currently</span>
                Building products & mentoring DSA
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="neo-btn neo-btn-green">See projects</a>
              <a href="#contact" className="neo-btn neo-btn-red">Get in touch</a>
            </div>

            <div className="hero-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </motion.div>

          <motion.div className="hero-avatar" variants={item}>
            <div className="avatar-frame">
              <img src={profilePhoto} alt={profile.name} className="avatar-image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
