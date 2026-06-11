import { motion } from 'framer-motion';

const footerReveal = {
  hidden: {
    opacity: 0,
    y: 28,
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

const footerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const footerItem = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.25,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="minimal-premium-footer"
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <motion.div
        className="footer-container"
        variants={footerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div className="footer-brand-block" variants={footerItem}>
          <span className="footer-logo-text">
            Fadel<span>.</span>
          </span>

          <p>
            Creative strategy, performance assets, and execution systems for scalable DTC growth.
          </p>
        </motion.div>

        <motion.div className="footer-right-block" variants={footerItem}>
          <motion.div className="footer-socials" variants={socialGroup}>
            <motion.a
              href="mailto:fadel@fadelscopy.com"
              className="social-btn"
              aria-label="Contact via Gmail"
              variants={socialItem}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://x.com/fadelscopy"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              variants={socialItem}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/fadelscopy"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              variants={socialItem}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            <motion.a
              href="https://instagram.com/fadelscopy"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              variants={socialItem}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61575146784094"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              variants={socialItem}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </motion.a>
          </motion.div>

          <motion.p className="footer-copyright" variants={footerItem}>
            &copy; 2026 <span>Fadel El Hachimi</span>. All Rights Reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}