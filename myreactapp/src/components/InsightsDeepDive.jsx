// src/components/InsightsDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const insightSystems = [
  {
    id: 'pain-points',
    number: '02.1',
    title: 'Pain Point Extraction',
    shortTitle: 'Pain Points',
    icon: 'analysis',

    description:
      'Identify the functional, emotional, social, and identity-level problems customers experience before purchasing.',

    questions: [
      'What problem is the customer actively trying to solve?',
      'What frustrates them most about their current situation?',
      'What makes the problem feel urgent?',
      'What does the problem prevent them from doing?',
      'How does the problem affect their confidence or identity?',
      'What happens if they do nothing?',
      'Which pain points appear repeatedly across sources?',
      'Which pain points are emotionally strongest?',
    ],

    evidence: [
      'Direct customer quotes',
      'Review complaints',
      'Reddit discussions',
      'Support tickets',
      'Ad comments',
      'Survey responses',
      'Customer interviews',
      'Competitor complaints',
    ],

    outputs: [
      'Functional pain points',
      'Emotional pain points',
      'Social pain points',
      'Identity pain points',
      'Pain intensity ranking',
      'Urgency indicators',
      'Problem consequences',
      'Pain-point evidence library',
    ],

    sops: [
      'Pain Point Extraction SOP',
      'Pain Intensity Scoring SOP',
      'Customer Quote Collection SOP',
    ],
  },

  {
    id: 'desires',
    number: '02.2',
    title: 'Desire & Outcome Extraction',
    shortTitle: 'Desires',
    icon: 'scaling',

    description:
      'Identify what customers want to achieve functionally, emotionally, socially, and at the identity level.',

    questions: [
      'What result does the customer explicitly want?',
      'What deeper emotional result sits underneath that goal?',
      'How does the customer want to feel?',
      'How do they want others to perceive them?',
      'What version of themselves are they trying to become?',
      'What would success allow them to do?',
      'What dream outcome appears repeatedly?',
      'Which outcome feels most valuable or urgent?',
    ],

    evidence: [
      'Positive reviews',
      'Customer transformation stories',
      'Survey responses',
      'Reddit discussions',
      'Social comments',
      'Testimonials',
      'Customer interviews',
      'Competitor reviews',
    ],

    outputs: [
      'Functional desires',
      'Emotional desires',
      'Social desires',
      'Identity desires',
      'Dream outcomes',
      'Desired transformation',
      'Success language',
      'Outcome priority ranking',
    ],

    sops: [
      'Desire Extraction SOP',
      'Dream Outcome SOP',
      'Identity Desire SOP',
    ],
  },

  {
    id: 'objections',
    number: '02.3',
    title: 'Objection Extraction',
    shortTitle: 'Objections',
    icon: 'decision',

    description:
      'Identify the reasons customers hesitate, delay, distrust, compare, or decide not to purchase.',

    questions: [
      'Why might the customer believe this will not work?',
      'What previous purchases made them skeptical?',
      'What concerns do they have about price?',
      'What concerns do they have about safety or quality?',
      'What feels inconvenient or difficult?',
      'What information is missing before purchase?',
      'Which objections appear before and after purchase?',
      'Which objections are emotional rather than logical?',
    ],

    evidence: [
      'Negative reviews',
      'Refund reasons',
      'Support tickets',
      'Frequently asked questions',
      'Ad comments',
      'Checkout abandonment feedback',
      'Competitor complaints',
      'Customer interviews',
    ],

    outputs: [
      'Price objections',
      'Trust objections',
      'Product objections',
      'Mechanism objections',
      'Usage objections',
      'Risk objections',
      'Timing objections',
      'Objection priority map',
    ],

    sops: [
      'Objection Extraction SOP',
      'Objection Priority SOP',
      'Risk & Trust Objection SOP',
    ],
  },

  {
    id: 'beliefs',
    number: '02.4',
    title: 'Belief Mapping',
    shortTitle: 'Beliefs',
    icon: 'insights',

    description:
      'Map what the customer already believes about the problem, solutions, product category, and their own ability to change.',

    questions: [
      'What does the customer believe causes the problem?',
      'What solutions do they believe should work?',
      'What solutions have they stopped believing in?',
      'What category beliefs influence their purchase?',
      'What false beliefs block action?',
      'What beliefs must be strengthened?',
      'What beliefs must be challenged?',
      'What new belief must the creative create?',
    ],

    evidence: [
      'Customer language',
      'Forum discussions',
      'Reddit comments',
      'Product reviews',
      'Competitor claims',
      'Search queries',
      'Customer interviews',
      'Ad comments',
    ],

    outputs: [
      'Problem beliefs',
      'Solution beliefs',
      'Product beliefs',
      'Category beliefs',
      'False beliefs',
      'Limiting beliefs',
      'Beliefs to strengthen',
      'Required belief shifts',
    ],

    sops: [
      'Belief Mapping SOP',
      'False Belief Extraction SOP',
      'Belief Shift SOP',
    ],
  },

  {
    id: 'motivations',
    number: '02.5',
    title: 'Buying Motivation Analysis',
    shortTitle: 'Motivations',
    icon: 'angles',

    description:
      'Understand why customers decide to act and what value, emotion, or circumstance moves them toward purchase.',

    questions: [
      'What makes the customer actively seek a solution?',
      'What event increases purchase intent?',
      'What emotional state drives the decision?',
      'What benefit matters most at the moment of purchase?',
      'What creates urgency?',
      'What proof reduces hesitation?',
      'What identity is reinforced by purchasing?',
      'What makes the purchase feel justified?',
    ],

    evidence: [
      'Customer interviews',
      'Positive reviews',
      'Post-purchase surveys',
      'Ad comments',
      'Support conversations',
      'Email replies',
      'Purchase-event data',
      'Testimonials',
    ],

    outputs: [
      'Primary buying motivations',
      'Secondary motivations',
      'Emotional motivations',
      'Logical motivations',
      'Purchase triggers',
      'Urgency triggers',
      'Decision justification',
      'Motivation hierarchy',
    ],

    sops: [
      'Buying Motivation SOP',
      'Purchase Trigger SOP',
      'Motivation Hierarchy SOP',
    ],
  },

  {
    id: 'emotional-drivers',
    number: '02.6',
    title: 'Emotional Driver Mapping',
    shortTitle: 'Emotions',
    icon: 'personas',

    description:
      'Identify the emotional forces connected to the customer problem, desired outcome, buying decision, and future identity.',

    questions: [
      'What emotion does the current problem create?',
      'What emotion does the desired outcome promise?',
      'Which fear creates urgency?',
      'Which hope creates possibility?',
      'What causes shame, frustration, anger, or anxiety?',
      'What creates relief, confidence, pride, or freedom?',
      'What emotional transition does the product support?',
      'Which emotions appear most consistently?',
    ],

    evidence: [
      'Emotional customer quotes',
      'Transformation stories',
      'Negative reviews',
      'Positive reviews',
      'Reddit discussions',
      'Customer interviews',
      'Social comments',
      'Testimonials',
    ],

    outputs: [
      'Current emotional state',
      'Desired emotional state',
      'Fear drivers',
      'Hope drivers',
      'Identity emotions',
      'Urgency emotions',
      'Emotional transformation',
      'Emotional priority map',
    ],

    sops: [
      'Emotional Driver SOP',
      'Emotional Transformation SOP',
      'Customer Emotion Scoring SOP',
    ],
  },

  {
    id: 'language',
    number: '02.7',
    title: 'Customer Language Extraction',
    shortTitle: 'Language',
    icon: 'briefing',

    description:
      'Capture the exact phrases, expressions, metaphors, descriptions, and vocabulary customers naturally use.',

    questions: [
      'How does the customer describe the problem?',
      'Which words appear repeatedly?',
      'What emotional phrases feel most vivid?',
      'How does the customer describe failed solutions?',
      'How do they describe the desired result?',
      'Which metaphors or comparisons do they use?',
      'What language signals urgency?',
      'Which phrases could become hooks or headlines?',
    ],

    evidence: [
      'Reddit comments',
      'Product reviews',
      'Customer interviews',
      'Survey responses',
      'Support tickets',
      'Ad comments',
      'YouTube comments',
      'Social discussions',
    ],

    outputs: [
      'Voice-of-customer phrases',
      'Problem language',
      'Desire language',
      'Objection language',
      'Emotional phrases',
      'Metaphors',
      'Hook language',
      'Headline language',
    ],

    sops: [
      'Customer Language SOP',
      'Voice-of-Customer Library SOP',
      'Hook Phrase Extraction SOP',
    ],
  },

  {
    id: 'awareness',
    number: '02.8',
    title: 'Awareness & Sophistication Analysis',
    shortTitle: 'Awareness',
    icon: 'research',

    description:
      'Determine how much the customer knows about the problem, available solutions, the product, and competing claims.',

    questions: [
      'Is the customer unaware, problem-aware, or solution-aware?',
      'Does the customer already know the product category?',
      'How familiar are they with competing products?',
      'Which claims have they already seen repeatedly?',
      'Which mechanisms feel new or familiar?',
      'How skeptical is the market?',
      'How much explanation is required?',
      'What level of proof does the customer expect?',
    ],

    evidence: [
      'Search behavior',
      'Competitor advertising',
      'Customer questions',
      'Review language',
      'Market claims',
      'Social discussions',
      'Support tickets',
      'Landing-page behavior',
    ],

    outputs: [
      'Awareness-stage map',
      'Market sophistication level',
      'Customer knowledge gaps',
      'Required explanation level',
      'Required proof level',
      'Saturated claims',
      'Fresh mechanism opportunities',
      'Messaging recommendations',
    ],

    sops: [
      'Awareness Analysis SOP',
      'Market Sophistication SOP',
      'Messaging-by-Awareness SOP',
    ],
  },

  {
    id: 'alternatives',
    number: '02.9',
    title: 'Failed Alternative Analysis',
    shortTitle: 'Alternatives',
    icon: 'iteration',

    description:
      'Understand what customers have already tried, why it failed, and how those experiences shape expectations and skepticism.',

    questions: [
      'What products or methods has the customer tried?',
      'Why did those alternatives fail?',
      'What did customers dislike about them?',
      'What expectations were not met?',
      'What made them difficult to use consistently?',
      'What side effects or tradeoffs appeared?',
      'What does the customer refuse to try again?',
      'How can the product be positioned as meaningfully different?',
    ],

    evidence: [
      'Negative product reviews',
      'Reddit discussions',
      'Competitor reviews',
      'Customer interviews',
      'Support tickets',
      'Survey responses',
      'Social comments',
      'Comparison content',
    ],

    outputs: [
      'Failed product alternatives',
      'Failed behavioral alternatives',
      'Alternative weaknesses',
      'Customer disappointment patterns',
      'Skepticism sources',
      'Differentiation opportunities',
      'Comparison opportunities',
      'Enemy or contrast opportunities',
    ],

    sops: [
      'Failed Alternatives SOP',
      'Competitor Weakness SOP',
      'Comparison Angle SOP',
    ],
  },

  {
    id: 'transformation',
    number: '02.10',
    title: 'Before & After State Mapping',
    shortTitle: 'Transformation',
    icon: 'scaling',

    description:
      'Map the customer’s current reality, desired future state, and the emotional and practical transformation between them.',

    questions: [
      'What is the customer experiencing before the product?',
      'What does daily life look like before purchase?',
      'What changes after the problem is solved?',
      'How does behavior change?',
      'How does confidence or identity change?',
      'What becomes easier?',
      'What becomes possible?',
      'What visible and invisible outcomes matter?',
    ],

    evidence: [
      'Transformation testimonials',
      'Before-and-after reviews',
      'Customer interviews',
      'User-generated content',
      'Social comments',
      'Survey responses',
      'Case studies',
      'Product reviews',
    ],

    outputs: [
      'Before-state profile',
      'After-state profile',
      'Functional transformation',
      'Emotional transformation',
      'Identity transformation',
      'Lifestyle transformation',
      'Visible outcomes',
      'Invisible outcomes',
    ],

    sops: [
      'Before & After Mapping SOP',
      'Transformation Story SOP',
      'Identity Transformation SOP',
    ],
  },

  {
    id: 'opportunities',
    number: '02.11',
    title: 'Strategic Opportunity Extraction',
    shortTitle: 'Opportunities',
    icon: 'newConcepts',

    description:
      'Combine all extracted insights to identify the strongest messaging, persona, angle, and creative opportunities.',

    questions: [
      'Which insights appear most frequently?',
      'Which insights are emotionally strongest?',
      'Which insights are supported by the most evidence?',
      'Which customer needs are underserved?',
      'Which objections are competitors ignoring?',
      'Which language feels fresh and specific?',
      'Which persona has the strongest urgency?',
      'Which opportunities can produce multiple concepts?',
    ],

    evidence: [
      'Pain-point library',
      'Desire library',
      'Objection library',
      'Belief map',
      'Emotional driver map',
      'Customer language library',
      'Competitor gap analysis',
      'Performance history',
    ],

    outputs: [
      'Strategic opportunity list',
      'Priority insight clusters',
      'Messaging opportunities',
      'Persona opportunities',
      'Angle opportunities',
      'Creative opportunities',
      'Research gaps',
      'Next-stage recommendations',
    ],

    sops: [
      'Strategic Opportunity SOP',
      'Insight Prioritization SOP',
      'Research-to-Strategy SOP',
    ],
  },
];

const deepDiveReveal = {
  hidden: {
    opacity: 0,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: {
      duration: 0.2,
    },
  },
};

const contentReveal = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.16,
    },
  },
};

function InsightList({ title, items, icon }) {
  return (
    <section className="creative-op-insight-list-card">
      <div className="creative-op-insight-list-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <span />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function InsightsDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('pain-points');

  const selectedSystem =
    insightSystems.find(
      (system) => system.id === selectedSystemId
    ) || insightSystems[0];

  return (
    <motion.section
      className="creative-op-insights-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-insights-topbar">
        <div>
          <button
            type="button"
            className="creative-op-deep-back-button"
            onClick={onBack}
          >
            <span aria-hidden="true">←</span>
            Back to Full System
          </button>

          <div className="creative-op-breadcrumbs">
            <button type="button" onClick={onBack}>
              Creative Strategy OP
            </button>

            <span>/</span>

            <strong>Insight Extraction</strong>
          </div>
        </div>

        <div className="creative-op-insights-heading">
          <span>STAGE 02 / STRATEGY</span>

          <h1>Insight Extraction</h1>

          <p>
            Transform raw research into structured customer
            intelligence that can support personas, messaging,
            angles, concepts, and creative hypotheses.
          </p>
        </div>

        <div className="creative-op-insights-counter">
          <strong>{insightSystems.length}</strong>
          <span>Insight systems</span>
        </div>
      </header>

      <div className="creative-op-insights-layout">
        <aside className="creative-op-insights-navigation">
          <div className="creative-op-insights-navigation-intro">
            <span>EXTRACTION SYSTEMS</span>
            <h2>Choose an insight layer</h2>
          </div>

          <nav>
            {insightSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-insight-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-insight-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-insight-nav-icon">
                    <CreativeStrategyOPIcon
                      type={system.icon}
                      size={18}
                    />
                  </span>

                  <span>{system.shortTitle}</span>

                  <CreativeStrategyOPIcon
                    type="arrowRight"
                    size={15}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="creative-op-insights-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-insights-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-insights-selected-header">
                <div className="creative-op-insights-selected-icon">
                  <CreativeStrategyOPIcon
                    type={selectedSystem.icon}
                    size={30}
                  />
                </div>

                <div>
                  <span>{selectedSystem.number}</span>
                  <h2>{selectedSystem.title}</h2>
                  <p>{selectedSystem.description}</p>
                </div>
              </section>

              <section className="creative-op-insight-question-card">
                <div className="creative-op-insight-question-heading">
                  <div>
                    <span>ANALYSIS FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-insight-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-insight-question-item"
                        key={question}
                      >
                        <span>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <p>{question}</p>
                      </div>
                    )
                  )}
                </div>
              </section>

              <div className="creative-op-insights-bottom-grid">
                <InsightList
                  title="Evidence Sources"
                  items={selectedSystem.evidence}
                  icon="research"
                />

                <InsightList
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-insights-sop-panel">
          <span className="creative-op-insights-sop-eyebrow">
            DOCUMENTATION LAYER
          </span>

          <h2>SOP Library</h2>

          <p>
            Each extraction system will connect to its own
            checklist, template, evidence requirements, examples,
            and AI prompts.
          </p>

          <div className="creative-op-insights-sop-list">
            {selectedSystem.sops.map((sop) => (
              <div
                className="creative-op-insights-sop-card"
                key={sop}
              >
                <span>
                  <CreativeStrategyOPIcon
                    type="knowledge"
                    size={18}
                  />
                </span>

                <div>
                  <strong>{sop}</strong>
                  <small>Document coming soon</small>
                </div>

                <em>PLANNED</em>
              </div>
            ))}
          </div>

          <div className="creative-op-insights-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Customer Insight Library</h3>

            <p>
              Validated evidence is organized into reusable
              customer truths, messaging opportunities, persona
              inputs, angle inputs, and creative hypotheses.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}