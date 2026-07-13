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
        <h2 className="about-title">A little about me</h2>
        <p className="about-text">
          I am a{' '}
          <span className="about-highlight">B.Tech CSE student at PSIT, Kanpur</span>. I don&apos;t
          just build products — I build{' '}
          <span className="about-highlight">secure, scalable, and sustainable</span> ones, with a
          focus on real-time systems, APIs, and full-stack craft. I enjoy turning messy problems into
          clean, shippable software.
        </p>
        <p className="about-text">
          Outside coursework I mentor DSA in C++, volunteer with community initiatives, and ship
          things like Meetify and VibeKit Studio — always learning by doing and sharpening my
          problem-solving skills.
        </p>
        <div className="about-banner">Open to internships & full-stack roles</div>
      </motion.div>
    </section>
  )
}
