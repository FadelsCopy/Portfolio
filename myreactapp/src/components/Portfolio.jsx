import { Link } from 'react-router-dom';
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

const copyGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const copyItem = {
  hidden: {
    opacity: 0,
    y: 20,
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

const tagGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.34,
    },
  },
};

const tagItem = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statsGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const statCard = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Portfolio() {
  const archiveStats = [
    {
      value: "57+",
      label: "Strategic Assets",
      description: "A selected library of ads, emails, video ad scripts, sales assets, and paid media."
    },
    {
      value: "9",
      label: "Creative Formats",
      description: "Static ads, native ads, video ads, VSLs, advertorials, listicles, Google Ads, YouTube Ads, and emails."
    },
    {
      value: "22+",
      label: "Static & Native Ad Concepts",
      description: "Hook-driven image ads and native-style assets built around attention, curiosity, and conversion."
    },
    {
      value: "13",
      label: "Video Ad Examples",
      description: "Performance-focused video concepts shaped around clarity, speed, and buying desire."
    }
  ];

  return (
    <motion.section
      className="portfolio-showcase"
      id="portfolio-part"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="portfolio-content-shell">
        <div className="archive-layout-grid">
          <motion.div
            className="archive-proof-copy"
            variants={copyGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.span className="archive-eyebrow" variants={copyItem}>
              WORK ARCHIVE
            </motion.span>

            <motion.h2 variants={copyItem}>
              Explore the assets behind the strategy.
            </motion.h2>

            <motion.p variants={copyItem}>
              A curated collection of creative work across different formats — from
              static ads, native ads, video ads, VSLs, advertorials, listicles,
              Google Ads, YouTube Ads, and emails.
            </motion.p>

            <motion.div
              className="archive-format-tags"
              variants={tagGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.span variants={tagItem}>Static Ads</motion.span>
              <motion.span variants={tagItem}>Native Ads</motion.span>
              <motion.span variants={tagItem}>Video Ads</motion.span>
              <motion.span variants={tagItem}>VSLs</motion.span>
              <motion.span variants={tagItem}>Advertorials</motion.span>
              <motion.span variants={tagItem}>Listicles</motion.span>
              <motion.span variants={tagItem}>Google Ads</motion.span>
              <motion.span variants={tagItem}>YouTube Ads</motion.span>
              <motion.span variants={tagItem}>Emails</motion.span>
            </motion.div>

            <motion.div variants={copyItem}>
              <Link to="/portfolio" className="archive-main-button">
                Explore Full Archive →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="archive-stats-grid"
            variants={statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {archiveStats.map((stat, index) => (
              <motion.div
                className="archive-stat-card"
                variants={statCard}
                key={index}
              >
                <div className="archive-stat-value">{stat.value}</div>
                <div className="archive-stat-label">{stat.label}</div>
                <p>{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}