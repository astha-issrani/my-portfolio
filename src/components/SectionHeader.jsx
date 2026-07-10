import { motion } from 'framer-motion'
import { fadeIn, viewport } from '../animations'

export default function SectionHeader({ tag, title }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeIn}
    >
      <motion.span
        className="section-tag"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
        }}
      >
        {tag}
      </motion.span>
      <motion.h2
        className="section-title"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.15 } },
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="section-line"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, delay: 0.25 } },
        }}
        style={{ transformOrigin: 'left center' }}
      />
    </motion.div>
  )
}
