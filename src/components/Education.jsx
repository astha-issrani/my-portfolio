import { motion } from 'framer-motion'
import { education, achievements, extracurricular } from '../data'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <span className="section-tag">// 04</span>
        <h2 className="section-title">EDUCATION & ACHIEVEMENTS</h2>
        <div className="section-line" />
      </div>

      <div className="edu-grid">
        {education.map((entry, i) => (
          <motion.div
            key={entry.institution}
            className="edu-card terminal-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">
                {i === 0 ? 'education.json' : 'schooling.json'}
              </span>
            </div>
            <div className="card-body">
              <h3>{entry.degree}</h3>
              <p className="edu-institution">{entry.institution}</p>
              {entry.note && <p className="edu-note">{entry.note}</p>}
              {entry.period && <span className="badge">{entry.period}</span>}
              {entry.scores && (
                <div className="edu-scores">
                  {entry.scores.map((s) => (
                    <span key={s.label} className="badge score">
                      {s.label}: {s.value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="sub-title">ACHIEVEMENTS & CERTIFICATIONS</h3>
          <ul className="card-list">
            {achievements.map((a) => (
              <li key={a}>
                <span className="list-prefix">★</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="edu-card full-width"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="sub-title">EXTRA-CURRICULAR ACTIVITIES</h3>
          <ul className="card-list">
            {extracurricular.map((a) => (
              <li key={a.slice(0, 40)}>
                <span className="list-prefix">→</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
