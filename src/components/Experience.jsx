import { motion } from 'framer-motion'
import { experience } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-tag">// 01</span>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            className="timeline-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="timeline-marker">
              <span className="marker-dot" />
              <span className="marker-line" />
            </div>

            <div className="card terminal-card">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">{job.company.toLowerCase()}.log</span>
              </div>

              <div className="card-body">
                <div className="card-header">
                  <h3>{job.role}</h3>
                  <div className="card-meta">
                    <span className="badge">{job.period}</span>
                    <span className="badge outline">{job.location}</span>
                  </div>
                </div>

                <ul className="card-list">
                  {job.highlights.map((point) => (
                    <li key={point.slice(0, 40)}>
                      <span className="list-prefix">&gt;</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {job.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
