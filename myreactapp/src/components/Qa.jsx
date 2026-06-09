import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function QaItem({ item, index, activeIndex, toggle }) {
  const contentRef = useRef(null);
  const isActive = activeIndex === index;

  return (
    <motion.div
      className={`qa-block ${isActive ? 'is-active' : ''}`}
      variants={faqItemReveal}
    >
      <button type="button" className="qa-trigger" onClick={() => toggle(index)}>
        <span className="qa-question">{item.q}</span>
        <span className="accordion-icon"></span>
      </button>

      <motion.div
        className="qa-answer-wrapper"
        initial={false}
        animate={{
          height: isActive ? contentRef.current?.scrollHeight || 'auto' : 0,
        }}
        transition={{
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="qa-answer" ref={contentRef}>
          {item.a}
        </div>
      </motion.div>
    </motion.div>
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

const faqListReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.2,
    },
  },
};

const faqItemReveal = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Qa() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Can you manage the creative process end to end?",
      a: (
        <>
          <h4>Yes.</h4>
          <p>I do more than generate concepts. I oversee the full creative workflow from research and angle development to scripting, creative direction, production alignment, testing priorities, and iteration.</p>
          <p>My role is to create clarity across the process so teams move faster, decisions become easier, and creative output stays connected to business goals.</p>
        </>
      )
    },
    {
      q: "How do you work with existing teams?",
      a: (
        <>
          <p>I integrate into existing workflows and create alignment across functions.</p>
          <p>Whether your team includes media buyers, editors, designers, creators, or operators, I help connect strategy with execution so everyone works toward the same objective.</p>
          <p>That includes setting priorities, shaping creative direction, organizing testing cycles, and helping teams maintain speed without losing quality.</p>
        </>
      )
    },
    {
      q: "What do you actually deliver?",
      a: (
        <>
          <p>Everything is built to be executed, not presented.</p>
          <p>Depending on the scope, deliverables can include:</p>
          <ul className="qa-bullet-list">
            <li>Customer and competitor research</li>
            <li>Creative strategy</li>
            <li>Messaging architecture</li>
            <li>Creative concepts and testing plans</li>
            <li>Hooks and marketing angles</li>
            <li>Meta, TikTok, and Google ad scripts</li>
            <li>Creative briefs and visual direction</li>
            <li>Performance based iterations and recommendations</li>
          </ul>
          <p>The objective is simple: give your team clear outputs they can launch confidently.</p>
        </>
      )
    },
    {
      q: "How do you decide what to test next?",
      a: (
        <>
          <p>I prioritize based on opportunity and evidence.</p>
          <p>I combine customer psychology, platform behavior, performance signals, and business goals to identify the highest leverage opportunities.</p>
          <p>Every concept should answer a clear hypothesis and every test should create learning that improves the next round of creative.</p>
        </>
      )
    },
    {
      q: "What approach do you follow when building creative strategy?",
      a: (
        <>
          <p className="process-highlight">Research → Positioning → Angles → Creative Development → Launch → Data Analysis → Iteration</p>
          <p>I start by understanding the customer and market, translate those insights into creative concepts, then use real performance data to refine and evolve the strategy.</p>
          <p>The goal is not to create more creative. The goal is to create a system that keeps producing stronger creative over time.</p>
        </>
      )
    }
  ];

  return (
    <motion.section
      className="main-content-section"
      id="qa-part"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.div
        className="qa-heading-block"
        variants={headingGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.55 }}
      >
        <motion.div className="section-label" variants={headingItem}>
          FAQ
        </motion.div>

        <motion.h2 className="section-headline" variants={headingItem}>
          Questions Teams Ask Before Bringing Me Into Creative
        </motion.h2>
      </motion.div>

      <motion.div
        className="qa-container"
        variants={faqListReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        {faqData.map((item, index) => (
          <QaItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggle={toggle}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}