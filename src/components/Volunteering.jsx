import { motion } from 'framer-motion'
import { volunteering } from '../data'
import { getAccent } from '../cardAccents'
import ecell1 from '../assets/volunteering/ecell-1.png'
import ecell2 from '../assets/volunteering/ecell-2.png'
import rha1 from '../assets/volunteering/rha-1.png'
import rha2 from '../assets/volunteering/rha-2.png'

const photoMap = {
  ecell: [
    { src: ecell1, alt: 'Volunteering at E-Cell in white shirt' },
    { src: ecell2, alt: 'E-Cell team moment during volunteering' },
  ],
  rha: [
    { src: rha1, alt: 'RHA Foundation meal distribution in maroon top' },
    { src: rha2, alt: 'Donating meals with RHA Foundation at night' },
  ],
}

export default function Volunteering() {
  return (
    <section id="volunteering" className="section section-creative section-volunteering">
      <div className="section-header">
        <span className="section-tag">// 05</span>
        <h2 className="section-title">VOLUNTEERING</h2>
        <div className="section-line" />
      </div>

      <motion.p
        className="play-intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        Giving back through tech and community — mentoring DSA, building truth-first media, and serving meals where it matters.
      </motion.p>

      <div className="volunteer-list">
        {volunteering.map((item, i) => {
          const accent = getAccent(i + 2)
          const photos = photoMap[item.id] || []
          return (
            <motion.article
              key={item.id}
              className="colorful-card volunteer-card"
              style={{ '--card-a': accent.a, '--card-b': accent.b }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="card-emoji" aria-hidden="true">{item.emoji}</span>
              <div className="card-accent-bar" />

              <div className="volunteer-body">
                <div className="volunteer-copy">
                  <p className="volunteer-role" style={{ color: accent.a }}>{item.role}</p>
                  <h3 className="volunteer-org">{item.org}</h3>
                  {item.project && (
                    <p className="volunteer-project">
                      Project: <span style={{ color: accent.b }}>{item.project}</span>
                    </p>
                  )}
                  <p className="volunteer-desc">{item.description}</p>
                  {item.highlights && (
                    <ul className="card-list volunteer-highlights">
                      {item.highlights.map((line) => (
                        <li key={line}>
                          <span className="list-prefix" style={{ color: accent.b }}>&gt;</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tags && (
                    <div className="tech-tags">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tech-tag"
                          style={{
                            borderColor: `color-mix(in srgb, ${accent.a} 40%, transparent)`,
                            color: accent.a,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {photos.length > 0 && (
                  <div className="volunteer-photos">
                    {photos.map((photo) => (
                      <figure key={photo.alt} className="volunteer-photo">
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
