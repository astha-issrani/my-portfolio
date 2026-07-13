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
          <span className="sticker sticker-pink">Backend + Full Stack</span>
          <span className="sticker sticker-yellow">Open to roles 🚀</span>
        </motion.div>

        <div className="hero-layout">
          <motion.div className="hero-content" variants={item}>
            <h1 className="hero-name">{profile.name.split(' ')[0]}</h1>
            <div className="hero-role-badge">FULL_STACK_DEVELOPER()</div>

            <div className="hero-meta-list">
              <div>
                <span className="meta-tag tag-yellow">[LOCATION]</span>
                {profile.location.toUpperCase()}
              </div>
              <div>
                <span className="meta-tag tag-green">[STATUS]</span>
                B.TECH CSE · 2022–2026
              </div>
              <div>
                <span className="meta-tag tag-blue">[MISSION]</span>
                Code. Build. Ship.
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="neo-btn neo-btn-green">VIEW_PROJECTS</a>
              <a href="#contact" className="neo-btn neo-btn-red">CONTACT ME</a>
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
