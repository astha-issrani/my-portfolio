export const smoothEase = [0.25, 0.46, 0.45, 0.94]

export const viewport = {
  once: true,
  margin: '-80px',
  amount: 0.15,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      delay: i * 0.1,
      ease: smoothEase,
    },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
}

export const slideIn = {
  hidden: (direction = 1) => ({
    opacity: 0,
    x: direction * 40,
    filter: 'blur(6px)',
  }),
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: smoothEase,
    },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: smoothEase,
    },
  }),
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}
