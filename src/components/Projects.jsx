import { motion } from 'framer-motion'
import { projectSections } from '../data'
import { getAccent } from '../cardAccents'

function ProjectCard({ project, colorIndex }) {
  const accent = getAccent(colorIndex)
  return (
    <motion.article
      className="colorful-card project-card project-card-minimal"
      style={{ '--card-a': accent.a, '--card-b': accent.b }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: (colorIndex % 8) * 0.04, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <span className="card-emoji card-emoji-sm" aria-hidden="true">{accent.emoji}</span>
      <div className="card-accent-bar" />
      <h3 className="project-name-minimal" style={{ color: accent.a }}>{project.name}</h3>
      <p className="project-line">
        {project.description}
        {project.demo && (
          <>
            {' · '}
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
              style={{ color: accent.b }}
            >
              Live Demo →
            </a>
          </>
        )}
      </p>
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

          <div className="projects-grid projects-grid-minimal">
            {section.projects.map((project) => {
              const idx = colorIndex++
              return <ProjectCard key={project.name} project={project} colorIndex={idx} />
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
