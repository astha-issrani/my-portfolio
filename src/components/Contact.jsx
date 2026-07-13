import { motion } from 'framer-motion'
import { profile } from '../data'
import { getAccent } from '../cardAccents'

const contactItems = [
  { label: 'Name', value: profile.name, emoji: '👤' },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, emoji: '✉️' },
  { label: 'Reach Me', value: 'You can reach me through email — feel free to get in touch!', emoji: '💬' },
  { label: 'Location', value: profile.location, emoji: '📍' },
]

export default function Contact() {
  const panelAccent = getAccent(6)

  return (
    <section id="contact" className="section section-creative contact-section">
      <div className="section-header">
        <span className="section-tag">// 07</span>
        <h2 className="section-title">CONTACT</h2>
        <div className="section-line" />
      </div>

      <motion.div
        className="colorful-card contact-panel"
        style={{ '--card-a': panelAccent.a, '--card-b': panelAccent.b }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="card-emoji" aria-hidden="true">📬</span>
        <div className="card-accent-bar" />

        <div className="contact-details">
          {contactItems.map((item, i) => {
            const accent = getAccent(i)
            return (
              <div
                key={item.label}
                className="contact-row colorful-contact-row"
                style={{ '--card-a': accent.a, '--card-b': accent.b }}
              >
                <span className="contact-label">
                  <span className="contact-emoji">{item.emoji}</span>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} className="contact-value link" style={{ color: accent.a }}>
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value">{item.value}</span>
                )}
              </div>
            )
          })}
        </div>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <span className="btn-glow" />
            SEND EMAIL
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
            LINKEDIN
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            GITHUB
          </a>
        </div>
      </motion.div>

      <footer className="footer">
        <p>
          <span className="footer-bracket">[</span>
          BUILT WITH REACT + VITE
          <span className="footer-bracket">]</span>
          <span className="footer-sep">·</span>
          © 2026 {profile.name}
        </p>
        <p className="footer-sub">SYSTEM STATUS: ALL MODULES OPERATIONAL</p>
      </footer>
    </section>
  )
}
