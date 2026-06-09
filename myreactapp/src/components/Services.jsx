// src/components/Services.jsx

import { motion } from 'framer-motion';

function ServiceIcon({ type }) {
  const icons = {
    research: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l4.5 4.5" />
        <path d="M8.5 10.5h4" />
        <path d="M10.5 8.5v4" />
      </svg>
    ),
    messaging: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7.5h14" />
        <path d="M5 12h10" />
        <path d="M5 16.5h7" />
        <path d="M4 4h16v13H9l-5 4V4z" />
      </svg>
    ),
    creative: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z" />
      </svg>
    ),
    operations: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8.3 7.2l2.8 7.8" />
        <path d="M15.7 7.2l-2.8 7.8" />
        <path d="M8.5 6h7" />
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 3 5-7" />
        <path d="M18 8h-4" />
        <path d="M18 8v4" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9.5 12h5" />
        <path d="M12 9.5v5" />
        <path d="M9 2v3" />
        <path d="M15 2v3" />
        <path d="M9 19v3" />
        <path d="M15 19v3" />
        <path d="M2 9h3" />
        <path d="M2 15h3" />
        <path d="M19 9h3" />
        <path d="M19 15h3" />
      </svg>
    ),
  };

  return (
    <div className="service-icon" aria-hidden="true">
      {icons[type]}
    </div>
  );
}

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

const headingGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const headingItem = {
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

const gridReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 26,
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

const services = [
  {
    icon: 'research',
    number: '01 / MARKET INTELLIGENCE',
    title: 'Research and Strategic Direction',
    description:
      'Studying customer psychology, competitor ecosystems, market sophistication, awareness levels, buying triggers, and behavioral patterns to identify opportunities and define the highest leverage creative direction.',
  },
  {
    icon: 'messaging',
    number: '02 / POSITIONING SYSTEMS',
    title: 'Messaging and Creative Angles',
    description:
      'Translating research into positioning frameworks, emotional drivers, concepts, hooks, narratives, and differentiated angles designed to create attention and increase conversion potential.',
  },
  {
    icon: 'creative',
    number: '03 / CREATIVE DEVELOPMENT',
    title: 'Asset and Campaign Creation',
    description:
      'Building concepts and execution systems across Meta, TikTok, landing experiences, static ads, video ads, UGC, AI UGC, native formats, scripts, visuals, and performance-focused creative assets.',
  },
  {
    icon: 'operations',
    number: '04 / CREATIVE OPERATIONS',
    title: 'Execution and Team Alignment',
    description:
      'Leading creative workflows from concept to delivery while coordinating editors, designers, creators, and production systems to maintain quality, speed, and strategic consistency.',
  },
  {
    icon: 'performance',
    number: '05 / PERFORMANCE INTELLIGENCE',
    title: 'Analysis and Optimization',
    description:
      'Reviewing performance data, identifying creative patterns, analyzing feedback loops, generating new hypotheses, improving weak assets, and continuously evolving the next generation of creative.',
  },
  {
    icon: 'ai',
    number: '06 / AI ACCELERATION',
    title: 'AI Powered Creative Systems',
    description:
      'Using advanced AI workflows across ideation, visual generation, voice synthesis, animation, and production with tools such as Claude Code, Higgsfield, ElevenLabs, Runway, Midjourney, Veo... and specialized prompting systems to increase speed without compromising quality.',
  },
];

export default function Services() {
  return (
    <motion.section
      className="services-section"
      id="services-part"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="main-content-section">
        <motion.div
          className="services-heading-block"
          variants={headingGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
        >
          <motion.div className="section-label" variants={headingItem}>
            CREATIVE OPERATING SYSTEM
          </motion.div>

          <motion.h2 className="section-headline" variants={headingItem}>
            How I Build Performance Creative
          </motion.h2>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={gridReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {services.map((service) => (
            <motion.div
              className="service-card"
              variants={cardReveal}
              key={service.number}
            >
              <ServiceIcon type={service.icon} />
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}