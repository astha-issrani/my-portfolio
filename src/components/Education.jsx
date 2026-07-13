import { motion } from 'framer-motion'
import { education, achievements, extracurricular } from '../data'
import { getAccent } from '../cardAccents'

export default function Education() {
  const achieveAccent = getAccent(3)
  const extraAccent = getAccent(5)

  return (
    <section id="education" className="section section-creative section-education">
      <div className="section-header">
        <span className="section-tag">// 04</span>
        <h2 className="section-title">EDUCATION & ACHIEVEMENTS</h2>
        <div className="section-line" />
      </div>

      <div className="edu-grid">
        {education.map((entry, i) => {
          const accent = getAccent(i)
          return (
            <motion.div
              key={entry.institution}
              className="colorful-card edu-card"
              style={{ '--card-a': accent.a, '--card-b': accent.b }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="card-emoji" aria-hidden="true">{i === 0 ? '🎓' : '📚'}</span>
              <div className="card-accent-bar" />
              <div className="card-body">
                <h3>{entry.degree}</h3>
                <p className="edu-institution">{entry.institution}</p>
                {entry.note && <p className="edu-note" style={{ color: accent.b }}>{entry.note}</p>}
                {entry.period && (
                  <span className="badge colorful-badge" style={{ '--badge-c': accent.a }}>{entry.period}</span>
                )}
                {entry.scores && (
                  <div className="edu-scores">
                    {entry.scores.map((s) => (
                      <span key={s.label} className="badge score colorful-badge" style={{ '--badge-c': accent.b }}>
                        {s.label}: {s.value}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}

        <motion.div
          className="colorful-card edu-card"
          style={{ '--card-a': achieveAccent.a, '--card-b': achieveAccent.b }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <span className="card-emoji" aria-hidden="true">🏆</span>
          <div className="card-accent-bar" />
          <h3 className="sub-title">ACHIEVEMENTS & CERTIFICATIONS</h3>
          <ul className="card-list">
            {achievements.map((a) => (
              <li key={a}>
                <span className="list-prefix" style={{ color: achieveAccent.b }}>★</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="colorful-card edu-card full-width"
          style={{ '--card-a': extraAccent.a, '--card-b': extraAccent.b }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
        >
          <span className="card-emoji" aria-hidden="true">🌟</span>
          <div className="card-accent-bar" />
          <h3 className="sub-title">EXTRA-CURRICULAR ACTIVITIES</h3>
          <ul className="card-list edu-list-columns">
            {extracurricular.map((a) => (
              <li key={a.slice(0, 40)}>
                <span className="list-prefix" style={{ color: extraAccent.b }}>→</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
