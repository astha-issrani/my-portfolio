import { motion } from 'framer-motion'
import { profile } from '../data'
import Typewriter from './Typewriter'
import profilePhoto from '../assets/profile.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-frame">
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
          <motion.div className="hero-status" variants={item}>
            <span className="status-dot" />
            SYSTEM ONLINE — NODE v22.0 · REACT v19.0 · STATUS: READY
          </motion.div>

          <motion.p className="hero-greeting" variants={item}>
            &gt; initializing developer profile...
          </motion.p>

          <motion.h1 className="hero-name glitch" data-text={profile.name} variants={item}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero-tagline" variants={item}>
            <Typewriter
              texts={[
                'Building real-time systems & REST APIs',
                'Engineering sub-100ms WebRTC platforms',
                'Automating workflows with Chrome Extensions',
                'Deploying serverless & multi-tenant architectures',
              ]}
            />
          </motion.p>

          <motion.div className="hero-meta" variants={item}>
            <span>{profile.location}</span>
            <span className="meta-sep">//</span>
            <span>{profile.tagline}</span>
          </motion.div>

          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              <span className="btn-glow" />
              VIEW PROJECTS
            </a>
            <a href="#contact" className="btn btn-outline">
              INIT_CONTACT()
            </a>
          </motion.div>

          <motion.div className="hero-links" variants={item}>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-avatar"
          variants={item}
          initial="hidden"
          animate="show"
        >
          <div className="avatar-ring" />
          <div className="avatar-frame">
            <img
              src={profilePhoto}
              alt={profile.name}
              className="avatar-image"
            />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
