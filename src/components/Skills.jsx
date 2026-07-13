import { motion } from 'framer-motion'
import { skills } from '../data'
import { getAccent, skillIcons } from '../cardAccents'

export default function Skills() {
  return (
    <section id="skills" className="section section-creative section-skills">
      <div className="section-header">
        <span className="section-tag">// 03</span>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => {
          const accent = getAccent(i)
          return (
            <motion.div
              key={category}
              className="colorful-card skill-module"
              style={{ '--card-a': accent.a, '--card-b': accent.b }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -5 }}
            >
              <span className="card-emoji" aria-hidden="true">{skillIcons[category] || accent.emoji}</span>
              <div className="card-accent-bar" />
              <div className="skill-module-header">
                <h3>{category}</h3>
              </div>
              <div className="skill-chips">
                {items.map((skill, si) => (
                  <span
                    key={skill}
                    className="skill-chip colorful-chip"
                    style={{
                      '--chip-c': si % 2 === 0 ? accent.a : accent.b,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
