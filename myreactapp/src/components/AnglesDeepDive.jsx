// src/components/AnglesDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const angleSystems = [
  {
    id: 'problem',
    number: '04.1',
    title: 'Problem Angles',
    shortTitle: 'Problem',
    icon: 'analysis',

    description:
      'Frame the customer’s problem in a specific, emotionally relevant, and attention-grabbing way.',

    questions: [
      'Which problem is most urgent for this persona?',
      'How does the customer naturally describe the problem?',
      'What consequence makes the problem feel serious?',
      'What hidden cause could make the problem feel newly understood?',
      'What part of the problem is competitors ignoring?',
      'Can the problem be made more specific?',
      'Can the problem be reframed around identity or lifestyle?',
      'What visual could immediately communicate the problem?',
    ],

    anglePatterns: [
      'The hidden reason',
      'The overlooked cause',
      'The daily frustration',
      'The cost of waiting',
      'The symptom nobody explains',
      'The problem behind the problem',
      'The mistake making it worse',
      'The moment the problem becomes visible',
    ],

    evidence: [
      'Pain-point library',
      'Customer quotes',
      'Support tickets',
      'Negative reviews',
      'Reddit discussions',
      'Ad comments',
      'Search questions',
      'Competitor complaints',
    ],

    outputs: [
      'Problem angle candidates',
      'Problem-based hooks',
      'Problem visual directions',
      'Problem hypotheses',
    ],

    sops: [
      'Problem Angle SOP',
      'Problem Reframing SOP',
      'Problem Hook SOP',
    ],
  },

  {
    id: 'desire',
    number: '04.2',
    title: 'Desire Angles',
    shortTitle: 'Desire',
    icon: 'scaling',

    description:
      'Frame the product around the outcome, feeling, experience, or future state the customer wants most.',

    questions: [
      'What outcome does the customer want most?',
      'What emotional result sits underneath that outcome?',
      'What would success allow them to do?',
      'How would they feel after the transformation?',
      'How would others see them differently?',
      'Which desire is strongest and most specific?',
      'Can the desire be visualized immediately?',
      'What makes the desired future feel believable?',
    ],

    anglePatterns: [
      'Finally achieve',
      'Imagine waking up with',
      'Get back to',
      'Become the version of yourself who',
      'The easiest path to',
      'What changes when',
      'More confidence without',
      'The result they thought was impossible',
    ],

    evidence: [
      'Desire library',
      'Positive reviews',
      'Testimonials',
      'Transformation stories',
      'Customer interviews',
      'Survey responses',
      'Social comments',
      'Dream outcomes',
    ],

    outputs: [
      'Desire angle candidates',
      'Outcome-based hooks',
      'Future-state visual directions',
      'Desire hypotheses',
    ],

    sops: [
      'Desire Angle SOP',
      'Dream Outcome SOP',
      'Future-State Hook SOP',
    ],
  },

  {
    id: 'identity',
    number: '04.3',
    title: 'Identity Angles',
    shortTitle: 'Identity',
    icon: 'personas',

    description:
      'Connect the product to who the customer believes they are, who they want to become, or what they refuse to accept.',

    questions: [
      'Who does the customer want to become?',
      'What identity are they trying to protect?',
      'What identity does the problem threaten?',
      'What does purchasing the product say about them?',
      'What type of person refuses to accept the current situation?',
      'What identity does the product reinforce?',
      'What community or tribe could the message speak to?',
      'What statement would make the customer say, “That is me”?',
    ],

    anglePatterns: [
      'For people who refuse to',
      'You are not the kind of person who',
      'Bring back the version of you who',
      'Built for people who',
      'This is for the customer who',
      'Protect what makes you feel like yourself',
      'Become the person who',
      'Your problem does not define you',
    ],

    evidence: [
      'Identity desires',
      'Customer stories',
      'Emotional driver map',
      'Persona cards',
      'Social language',
      'Testimonials',
      'Transformation reviews',
      'Community discussions',
    ],

    outputs: [
      'Identity angle candidates',
      'Identity-based hooks',
      'Persona-specific positioning',
      'Identity hypotheses',
    ],

    sops: [
      'Identity Angle SOP',
      'Identity Desire SOP',
      'Identity-Based Hook SOP',
    ],
  },

  {
    id: 'transformation',
    number: '04.4',
    title: 'Transformation Angles',
    shortTitle: 'Transformation',
    icon: 'newConcepts',

    description:
      'Show the contrast between the customer’s current state and the future state created by the product.',

    questions: [
      'What clearly changes before and after use?',
      'Which visible change is most compelling?',
      'Which emotional change matters most?',
      'What daily behavior becomes easier?',
      'What moment proves the transformation?',
      'How quickly can the transformation be understood?',
      'What evidence supports the transformation?',
      'Which transformation can become a repeatable creative structure?',
    ],

    anglePatterns: [
      'Before versus after',
      'From this to this',
      'The moment everything changed',
      'What happened after 30 days',
      'Same person, different outcome',
      'The routine that changed',
      'What life looks like after',
      'The transformation nobody expected',
    ],

    evidence: [
      'Before-and-after states',
      'Customer testimonials',
      'Case studies',
      'UGC transformations',
      'Product reviews',
      'Progress photos',
      'Customer interviews',
      'Performance history',
    ],

    outputs: [
      'Transformation angle candidates',
      'Before-and-after concepts',
      'Transformation hooks',
      'Proof requirements',
    ],

    sops: [
      'Transformation Angle SOP',
      'Before-and-After SOP',
      'Transformation Proof SOP',
    ],
  },

  {
    id: 'mechanism',
    number: '04.5',
    title: 'Mechanism Angles',
    shortTitle: 'Mechanism',
    icon: 'research',

    description:
      'Explain why the problem happens and why the product works through a clear, differentiated mechanism.',

    questions: [
      'What causes the problem at a deeper level?',
      'What mechanism explains why alternatives failed?',
      'What does the product do differently?',
      'Can the mechanism be expressed simply?',
      'Is the mechanism believable?',
      'What proof supports it?',
      'Does the mechanism feel new to the customer?',
      'Can it become a strong visual or demonstration?',
    ],

    anglePatterns: [
      'The real reason',
      'It is not X, it is Y',
      'What is happening underneath',
      'Why surface solutions fail',
      'The missing piece',
      'The mechanism nobody explains',
      'How the product works differently',
      'The inside-out solution',
    ],

    evidence: [
      'Product research',
      'Scientific evidence',
      'Founder interviews',
      'Customer results',
      'Competitor claims',
      'Failed alternatives',
      'Mechanism beliefs',
      'Product documentation',
    ],

    outputs: [
      'Mechanism angle candidates',
      'Mechanism explanations',
      'Educational hooks',
      'Demonstration concepts',
    ],

    sops: [
      'Mechanism Angle SOP',
      'Mechanism Simplification SOP',
      'Mechanism Proof SOP',
    ],
  },

  {
    id: 'objection',
    number: '04.6',
    title: 'Objection Angles',
    shortTitle: 'Objection',
    icon: 'decision',

    description:
      'Turn customer skepticism, hesitation, and resistance into the central message of the creative.',

    questions: [
      'What is the strongest reason not to buy?',
      'Which objection appears most frequently?',
      'Which objection prevents immediate action?',
      'Can the objection be acknowledged directly?',
      'What proof resolves it?',
      'What comparison makes the answer clearer?',
      'Can risk reversal remove the hesitation?',
      'What customer story disproves the objection?',
    ],

    anglePatterns: [
      'You have probably tried',
      'Why this is different',
      'Before you say it will not work',
      'No, you do not need',
      'What skeptical customers discovered',
      'The reason previous solutions failed',
      'Try it without the risk',
      'The objection everyone has',
    ],

    evidence: [
      'Objection library',
      'Negative reviews',
      'Refund reasons',
      'Support tickets',
      'Ad comments',
      'Customer interviews',
      'Frequently asked questions',
      'Competitor complaints',
    ],

    outputs: [
      'Objection angle candidates',
      'Objection-breaking hooks',
      'Proof recommendations',
      'Risk-reversal concepts',
    ],

    sops: [
      'Objection Angle SOP',
      'Objection Reversal SOP',
      'Risk-Reversal Angle SOP',
    ],
  },

  {
    id: 'proof',
    number: '04.7',
    title: 'Proof Angles',
    shortTitle: 'Proof',
    icon: 'validation',

    description:
      'Lead with evidence, customer results, authority, demonstration, data, or social validation.',

    questions: [
      'What is the strongest proof available?',
      'Which proof matters most to the persona?',
      'Is the proof specific and credible?',
      'Can the result be visually demonstrated?',
      'Can the claim be quantified?',
      'Is there a strong customer quote?',
      'Can authority increase trust?',
      'What proof makes the product difficult to ignore?',
    ],

    anglePatterns: [
      'Thousands of customers',
      'Clinical or consumer study',
      'What happened in 30 days',
      'The review that changed everything',
      'Recommended by',
      'Watch the demonstration',
      'The numbers speak for themselves',
      'Why customers keep reordering',
    ],

    evidence: [
      'Testimonials',
      'Reviews',
      'Study results',
      'Before-and-after assets',
      'Expert endorsement',
      'Sales data',
      'Repeat-purchase data',
      'Demonstrations',
    ],

    outputs: [
      'Proof angle candidates',
      'Testimonial concepts',
      'Demonstration concepts',
      'Authority concepts',
    ],

    sops: [
      'Proof Angle SOP',
      'Testimonial Angle SOP',
      'Demonstration Angle SOP',
    ],
  },

  {
    id: 'contrarian',
    number: '04.8',
    title: 'Contrarian & Myth-Busting Angles',
    shortTitle: 'Contrarian',
    icon: 'angles',

    description:
      'Challenge common assumptions, category beliefs, or popular advice to create curiosity and differentiation.',

    questions: [
      'What does the market commonly believe?',
      'Which belief is incomplete or misleading?',
      'What advice does the customer keep hearing?',
      'What alternative explanation is more useful?',
      'Can the product support the new belief?',
      'Is the contrarian claim credible?',
      'Will the message create curiosity without confusion?',
      'What proof is needed to support the challenge?',
    ],

    anglePatterns: [
      'Stop doing this',
      'The advice making it worse',
      'Why the common solution fails',
      'What nobody tells you',
      'The truth about',
      'It is not what you think',
      'The unpopular reason',
      'The myth customers still believe',
    ],

    evidence: [
      'False-belief map',
      'Market sophistication',
      'Competitor messaging',
      'Scientific evidence',
      'Customer confusion',
      'Failed alternatives',
      'Search behavior',
      'Expert commentary',
    ],

    outputs: [
      'Contrarian angle candidates',
      'Myth-busting hooks',
      'Belief-shift concepts',
      'Required proof',
    ],

    sops: [
      'Contrarian Angle SOP',
      'Myth-Busting SOP',
      'Belief Shift Angle SOP',
    ],
  },

  {
    id: 'comparison',
    number: '04.9',
    title: 'Comparison & Enemy Angles',
    shortTitle: 'Comparison',
    icon: 'iteration',

    description:
      'Create contrast between the product and alternatives, old behaviors, common mistakes, or an identifiable enemy.',

    questions: [
      'What is the customer currently using instead?',
      'Why is the alternative inadequate?',
      'What tradeoff does the product remove?',
      'What enemy represents the customer’s frustration?',
      'Can the contrast be shown visually?',
      'Is the comparison fair and supportable?',
      'Which difference matters most to the customer?',
      'What makes switching feel obvious?',
    ],

    anglePatterns: [
      'This versus that',
      'Stop settling for',
      'Why the old method fails',
      'The two-ingredient difference',
      'Surface solution versus root solution',
      'What competitors leave out',
      'Replace your entire routine',
      'The enemy causing the problem',
    ],

    evidence: [
      'Failed alternatives',
      'Competitor weaknesses',
      'Product differentiation',
      'Customer complaints',
      'Feature-benefit map',
      'Product mechanism',
      'Comparison reviews',
      'Support questions',
    ],

    outputs: [
      'Comparison angle candidates',
      'Enemy angle candidates',
      'Product contrast concepts',
      'Switching hooks',
    ],

    sops: [
      'Comparison Angle SOP',
      'Enemy Angle SOP',
      'Product Contrast SOP',
    ],
  },

  {
    id: 'story',
    number: '04.10',
    title: 'Story Angles',
    shortTitle: 'Story',
    icon: 'briefing',

    description:
      'Use customer, founder, discovery, failure, or transformation stories to communicate the message through narrative.',

    questions: [
      'Is there a customer story that represents the persona?',
      'What moment created the need for change?',
      'What alternatives were tried first?',
      'What discovery changed the outcome?',
      'What emotional conflict makes the story engaging?',
      'What proof exists inside the story?',
      'Can the story be understood quickly?',
      'What lesson or belief shift should the story create?',
    ],

    anglePatterns: [
      'I tried everything',
      'She was told to accept it',
      'The founder discovered',
      'The day everything changed',
      'Three years of failure',
      'What one customer found',
      'The unexpected turning point',
      'Why they almost gave up',
    ],

    evidence: [
      'Customer interviews',
      'Testimonials',
      'Founder story',
      'Product origin',
      'Transformation reviews',
      'Support conversations',
      'Case studies',
      'UGC stories',
    ],

    outputs: [
      'Story angle candidates',
      'Customer-story concepts',
      'Founder-story concepts',
      'Narrative hooks',
    ],

    sops: [
      'Story Angle SOP',
      'Customer Story SOP',
      'Founder Story SOP',
    ],
  },

  {
    id: 'prioritization',
    number: '04.11',
    title: 'Angle Prioritization',
    shortTitle: 'Prioritization',
    icon: 'validation',

    description:
      'Score and rank angle candidates based on evidence, relevance, novelty, emotion, visual potential, and scalability.',

    questions: [
      'How much research evidence supports the angle?',
      'How relevant is it to the selected persona?',
      'How emotionally strong is it?',
      'How specific is the message?',
      'How different is it from competitor messaging?',
      'Can it support strong hooks?',
      'Can it be executed visually?',
      'Can it expand into multiple concepts?',
    ],

    anglePatterns: [
      'Research evidence score',
      'Persona relevance score',
      'Emotional strength score',
      'Specificity score',
      'Novelty score',
      'Visual potential score',
      'Hook potential score',
      'Scalability score',
    ],

    evidence: [
      'Research database',
      'Persona cards',
      'Competitor intelligence',
      'Creative history',
      'Customer language',
      'Performance benchmarks',
      'Production constraints',
      'Compliance requirements',
    ],

    outputs: [
      'Prioritized angle backlog',
      'Angles approved for concept development',
      'Angles requiring refinement',
      'Angles parked for later',
    ],

    sops: [
      'Angle Prioritization SOP',
      'Angle Scoring Template',
      'Angle Backlog SOP',
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

function AngleDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-angle-data-card">
      <div className="creative-op-angle-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-angle-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function AnglesDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('problem');

  const selectedSystem =
    angleSystems.find(
      (system) => system.id === selectedSystemId
    ) || angleSystems[0];

  return (
    <motion.section
      className="creative-op-angles-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-angles-topbar">
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

            <strong>Angle Engine</strong>
          </div>
        </div>

        <div className="creative-op-angles-heading">
          <span>STAGE 04 / STRATEGY</span>

          <h1>Angle Engine</h1>

          <p>
            Translate customer intelligence and persona insights
            into persuasive, differentiated, and testable marketing
            angles.
          </p>
        </div>

        <div className="creative-op-angles-counter">
          <strong>{angleSystems.length}</strong>
          <span>Angle systems</span>
        </div>
      </header>

      <div className="creative-op-angles-layout">
        <aside className="creative-op-angles-navigation">
          <div className="creative-op-angles-navigation-intro">
            <span>ANGLE SYSTEMS</span>
            <h2>Choose an angle family</h2>
          </div>

          <nav>
            {angleSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-angle-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-angle-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-angle-nav-icon">
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

        <main className="creative-op-angles-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-angles-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-angles-selected-header">
                <div className="creative-op-angles-selected-icon">
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

              <section className="creative-op-angle-question-card">
                <div className="creative-op-angle-question-heading">
                  <div>
                    <span>ANGLE DEVELOPMENT FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-angle-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-angle-question-item"
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

              <div className="creative-op-angles-middle-grid">
                <AngleDataCard
                  title="Angle Patterns"
                  items={selectedSystem.anglePatterns}
                  icon="angles"
                />

                <AngleDataCard
                  title="Evidence Sources"
                  items={selectedSystem.evidence}
                  icon="research"
                />
              </div>

              <AngleDataCard
                title="Expected Outputs"
                items={selectedSystem.outputs}
                icon="validation"
              />
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-angles-sop-panel">
          <span className="creative-op-angles-sop-eyebrow">
            DOCUMENTATION LAYER
          </span>

          <h2>SOP Library</h2>

          <p>
            Each angle family will connect to its own framework,
            examples, scoring criteria, research requirements, and
            AI prompt library.
          </p>

          <div className="creative-op-angles-sop-list">
            {selectedSystem.sops.map((sop) => (
              <div
                className="creative-op-angles-sop-card"
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

          <div className="creative-op-angles-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Prioritized Angle Backlog</h3>

            <p>
              Research-backed angles are organized by persona,
              awareness level, emotional strength, evidence,
              differentiation, and creative potential.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}