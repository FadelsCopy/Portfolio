import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageReveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.965,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.24,
    },
  },
};

const contentItem = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NotFound() {
  return (
    <motion.main
      className="not-found-page"
      variants={pageReveal}
      initial="hidden"
      animate="visible"
    >
      <div className="not-found-bg-glow not-found-bg-glow-one"></div>
      <div className="not-found-bg-glow not-found-bg-glow-two"></div>

      <motion.section
        className="not-found-card"
        variants={cardReveal}
      >
        <motion.div
          className="not-found-inner"
          variants={contentGroup}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="not-found-kicker" variants={contentItem}>
            404 / PAGE NOT FOUND
          </motion.span>

          <motion.h1 variants={contentItem}>
            This page doesn’t exist.
          </motion.h1>

          <motion.p variants={contentItem}>
            Looks like this link is broken, moved, or never existed in the first place.
            No worries, you’re still in the right place.
          </motion.p>

          <motion.div className="not-found-actions" variants={contentItem}>
            <Link to="/" className="not-found-primary-btn">
              Back to Homepage
            </Link>

            <Link to="/portfolio" className="not-found-secondary-btn">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}