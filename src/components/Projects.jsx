import { motion } from 'framer-motion'
import { projectSections } from '../data'
import { getAccent } from '../cardAccents'

function ProjectCard({ name, colorIndex }) {
  const accent = getAccent(colorIndex)
  return (
    <motion.article
      className="colorful-card project-card project-card-name-only"
      style={{ '--card-a': accent.a, '--card-b': accent.b }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: (colorIndex % 8) * 0.03, duration: 0.35 }}
      whileHover={{ y: -3, scale: 1.02 }}
    >
      <div className="card-accent-bar" />
      <h3 className="project-name-only" style={{ color: accent.a }}>{name}</h3>
    </motion.article>
  )
}

export default function Projects() {
  let colorIndex = 0

  return (
    <section id="projects" className="section section-creative section-projects">
      <div className="section-header">
        <span className="section-tag">// 02</span>
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-line" />
      </div>

      {projectSections.map((section, si) => (
        <div key={section.id} className="project-section">
          <motion.div
            className="project-section-header colorful-section-label"
            style={{ '--card-a': getAccent(si).a, '--card-b': getAccent(si + 2).b }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label-emoji">{getAccent(si).emoji}</span>
            <div>
              <h3 className="project-section-title">{section.title}</h3>
              <p className="project-section-subtitle">{section.subtitle}</p>
            </div>
          </motion.div>

          <div className="projects-grid projects-grid-names">
            {section.projects.map((project) => {
              const idx = colorIndex++
              return <ProjectCard key={project.name} name={project.name} colorIndex={idx} />
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
