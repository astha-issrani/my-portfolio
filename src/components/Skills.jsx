import { motion } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-tag">// 03</span>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            className="skill-module"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className="skill-module-header">
              <span className="module-icon">◈</span>
              <h3>{category}</h3>
            </div>
            <div className="skill-chips">
              {items.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
