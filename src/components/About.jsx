import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section section-about">
      <motion.div
        className="about-card neo-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="about-title">Hi people!</h2>
        <p className="about-text">
          I am a{' '}
          <span className="about-highlight">B.Tech CSE student at PSIT, Kanpur</span>, building
          real-time systems, APIs, and full-stack products. I define myself as a Woman in STEM
          who loves shipping useful software.
        </p>
        <p className="about-text">
          I bring strong problem-solving, technical depth, and clear communication — from mentoring
          DSA in C++ to volunteering with community drives and building products like Meetify and
          VibeKit Studio.
        </p>
        <div className="about-banner">🚀 Open to Software Internships & Full-Stack Roles</div>
      </motion.div>
    </section>
  )
}
