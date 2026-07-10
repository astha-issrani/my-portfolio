import { motion } from 'framer-motion'
import { experience } from '../data'
import { getAccent } from '../cardAccents'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="section section-creative section-experience">
      <div className="section-header">
        <span className="section-tag">// 01</span>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="section-line" />
      </div>

      <div className="timeline">
        {experience.map((job, i) => {
          const accent = getAccent(i)
          return (
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
                <span
                  className="marker-dot"
                  style={{ borderColor: accent.a, background: accent.b, boxShadow: `0 0 14px ${accent.a}` }}
                />
                <span className="marker-line" style={{ background: `linear-gradient(180deg, ${accent.a}, ${accent.b}, transparent)` }} />
              </div>

              <div
                className="colorful-card experience-card"
                style={{ '--card-a': accent.a, '--card-b': accent.b }}
              >
                <span className="card-emoji" aria-hidden="true">{accent.emoji}</span>
                <div className="card-accent-bar" />

                <div className="card-body">
                  <div className="card-header">
                    <div>
                      <p className="card-company" style={{ color: accent.a }}>{job.company}</p>
                      <h3>{job.role}</h3>
                    </div>
                    <div className="card-meta">
                      <span className="badge colorful-badge" style={{ '--badge-c': accent.a }}>{job.period}</span>
                      <span className="badge outline">{job.location}</span>
                    </div>
                  </div>

                  <ul className="card-list">
                    {job.highlights.map((point) => (
                      <li key={point.slice(0, 40)}>
                        <span className="list-prefix" style={{ color: accent.b }}>&gt;</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {job.tech.map((t, ti) => (
                      <span
                        key={t}
                        className="tech-tag"
                        style={{ borderColor: `color-mix(in srgb, ${accent.a} ${40 + ti * 10}%, transparent)`, color: accent.a }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
