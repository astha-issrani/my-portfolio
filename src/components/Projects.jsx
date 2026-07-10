import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-tag">// 02</span>
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-glow" />
            <div className="project-header">
              <h3>{project.name}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} Live Demo`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc">{project.description}</p>

            <ul className="card-list compact">
              {project.highlights.map((h) => (
                <li key={h.slice(0, 40)}>
                  <span className="list-prefix">$</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag accent">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
