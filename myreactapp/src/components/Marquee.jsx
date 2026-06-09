// src/components/Marquee.jsx

import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const headerItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tickerReveal = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Marquee() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const renderCards = () =>
    cards.map((num) => (
      <div key={num} className="ticker-card">
        <div className="ticker-media-9-16">
          <img
            src={`display${num}.jpg`}
            className="ticker-preview-image"
            alt="Creative preview"
          />
        </div>
      </div>
    ));

  return (
    <motion.section
      className="ticker-showcase-section"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <motion.div
        className="ticker-header"
        variants={headerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.span className="ticker-pre-title" variants={headerItem}>
          // LIVE MARKET INSIGHTS
        </motion.span>

        <motion.h2 className="ticker-main-title" variants={headerItem}>
          FIND THE NEXT CREATIVE OPPORTUNITY BEFORE YOUR COMPETITORS
        </motion.h2>
      </motion.div>

      <motion.div
        className="ticker-viewport"
        variants={tickerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="ticker-group">
          {renderCards()}
        </div>

        <div className="ticker-group" aria-hidden="true">
          {renderCards()}
        </div>
      </motion.div>
    </motion.section>
  );
}