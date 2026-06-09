import { motion } from 'framer-motion';

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
};

const heroTextItem = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroVisual = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={heroContainer}
    >
      <div className="hero-section-orb hero-section-orb-one"></div>
      <div className="hero-section-orb hero-section-orb-two"></div>

      <div className="hero-grid">
        <motion.div className="hero-content" variants={heroContainer}>
          <motion.div className="hero-tagline" variants={heroTextItem}>
            CREATIVE STRATEGY // DTC GROWTH
          </motion.div>

          <motion.h1 className="hero-title" variants={heroTextItem}>
            Fadel El Hachimi
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={heroTextItem}>
            Building Predictable Creative Systems For Scalable Growth
          </motion.h2>

          <motion.div className="hero-description" variants={heroTextItem}>
            <p>
              I help DTC brands build stronger creative systems through market intelligence, strategic positioning, AI accelerated execution, and performance driven iteration.
            </p>

            <p>
              From research and angle development to execution and optimization, every decision is built to uncover new opportunities, create more predictable growth, and help brands scale further.
            </p>
          </motion.div>

          <motion.div className="hero-cta-group" variants={heroTextItem}>
            <a
              className="hero-btn-primary"
              href="https://calendly.com/fadelelhachimi20/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book A Discovery Call
            </a>

            <a className="hero-btn-outline" href="mailto:fadel@fadelscopy.com">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual-frame" variants={heroVisual}>
          <div className="premium-portrait-container">
            <div className="portrait-glow-ring"></div>
            <div className="bg-grid-mask premium-profile-bg-smooth"></div>

            <motion.div
              className="photo-bottom-fade-only"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="profile.png"
                alt="Fadel El Hachimi"
                className="profile-image-full-render"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}