// src/components/MVPDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const mvpSystems = [
  {
    id: 'core-hypothesis',
    number: '07.1',
    title: 'Core Hypothesis Isolation',
    shortTitle: 'Core Hypothesis',
    icon: 'insights',

    description:
      'Reduce the approved concept to the single belief, message, or customer response that must be validated first.',

    questions: [
      'What is the one central hypothesis being tested?',
      'Which angle is the concept attempting to validate?',
      'What belief should change after viewing the creative?',
      'What customer response would indicate interest?',
      'Which elements are essential to the hypothesis?',
      'Which elements are decorative rather than necessary?',
      'What can be removed without weakening the test?',
      'What result would invalidate the hypothesis?',
    ],

    requirements: [
      'One defined persona',
      'One approved angle',
      'One core belief shift',
      'One primary customer response',
      'One clear success condition',
      'One clear failure condition',
    ],

    outputs: [
      'Isolated MVP hypothesis',
      'Minimum message requirement',
      'Primary testing question',
      'Validation and rejection conditions',
    ],

    example:
      'Test whether problem-aware women respond to the belief that topical hair products fail because they never reach the follicle.',

    sops: [
      'MVP Hypothesis SOP',
      'Hypothesis Isolation Checklist',
      'MVP Testing Question SOP',
    ],
  },

  {
    id: 'minimum-assets',
    number: '07.2',
    title: 'Minimum Asset Requirements',
    shortTitle: 'Minimum Assets',
    icon: 'briefing',

    description:
      'Identify the smallest set of visual, audio, copy, proof, and product assets required to communicate the concept credibly.',

    questions: [
      'What is the minimum footage required?',
      'Is a creator necessary?',
      'Can existing footage be reused?',
      'What product shots are essential?',
      'What proof asset must be shown?',
      'Is a voiceover required?',
      'Can text-on-screen carry part of the message?',
      'Which assets can be replaced with stock or AI?',
    ],

    requirements: [
      'Opening visual',
      'Product footage',
      'Core proof asset',
      'Voiceover or dialogue',
      'On-screen text',
      'CTA asset',
      'Brand asset',
      'Music or sound if necessary',
    ],

    outputs: [
      'Minimum asset checklist',
      'Required source footage',
      'Reusable asset list',
      'Missing asset list',
    ],

    example:
      'One shower-drain visual, one creator talking-head clip, one product close-up, one customer result, one CTA screen.',

    sops: [
      'Minimum Asset SOP',
      'MVP Asset Checklist',
      'Asset Reuse SOP',
    ],
  },

  {
    id: 'hook-limit',
    number: '07.3',
    title: 'Hook Variation Limits',
    shortTitle: 'Hook Limits',
    icon: 'angles',

    description:
      'Create enough hook variation to test entry points without turning the MVP into a large and expensive production batch.',

    questions: [
      'How many hook directions are actually necessary?',
      'Are the hook variations meaningfully different?',
      'Does each hook test the same central hypothesis?',
      'Should hooks vary by language, visual, or proof?',
      'Can one body support all hook variations?',
      'Which hook is most direct?',
      'Which hook has the strongest visual interruption?',
      'What is the maximum useful number before complexity increases?',
    ],

    requirements: [
      'One direct hook',
      'One curiosity hook',
      'One visual hook',
      'Shared body where possible',
      'Same offer and CTA',
      'Consistent testing variable',
    ],

    outputs: [
      'Limited hook batch',
      'Hook-variable definition',
      'Shared-body plan',
      'Testing comparison plan',
    ],

    example:
      'Use three hooks only: direct problem, hidden mechanism, and visual shower-drain interruption.',

    sops: [
      'MVP Hook SOP',
      'Hook Variable Control SOP',
      'Hook Batch Limitation SOP',
    ],
  },

  {
    id: 'fast-production',
    number: '07.4',
    title: 'Fast Production Method',
    shortTitle: 'Fast Production',
    icon: 'production',

    description:
      'Choose the fastest production method capable of communicating the idea clearly without unnecessary polish or complexity.',

    questions: [
      'Can the concept be created from existing assets?',
      'Can a simple creator recording validate the idea?',
      'Can a static or motion graphic replace full production?',
      'Can AI generate missing visuals?',
      'Can stock footage support the message?',
      'What level of editing is actually required?',
      'Can the production be completed in one day?',
      'What quality threshold is necessary for credibility?',
    ],

    requirements: [
      'Fast recording process',
      'Simple edit structure',
      'Reusable templates',
      'Limited visual effects',
      'Clear audio',
      'Clear captions',
      'Platform-correct export',
    ],

    outputs: [
      'Fast production plan',
      'Production owner',
      'Expected production time',
      'Minimum quality threshold',
    ],

    example:
      'Creator talking head plus stock B-roll, captions, two proof overlays, and a simple product CTA screen.',

    sops: [
      'Fast Production SOP',
      'One-Day Creative SOP',
      'MVP Editing SOP',
    ],
  },

  {
    id: 'asset-reuse',
    number: '07.5',
    title: 'Existing Asset Reuse',
    shortTitle: 'Asset Reuse',
    icon: 'knowledge',

    description:
      'Reuse validated footage, product shots, testimonials, demonstrations, and brand assets to reduce production time and cost.',

    questions: [
      'Which existing assets already support the concept?',
      'Are there unused creator clips?',
      'Can winner footage be repurposed?',
      'Can customer testimonials be reused?',
      'Are product demonstrations already available?',
      'Can old footage be reframed with new copy?',
      'Does reused footage still feel credible?',
      'Are usage rights and quality sufficient?',
    ],

    requirements: [
      'Existing footage audit',
      'Usage-right confirmation',
      'Quality review',
      'Message relevance',
      'Format compatibility',
      'Brand consistency',
    ],

    outputs: [
      'Reusable asset library',
      'Repurposing plan',
      'New copy requirements',
      'Missing production requirements',
    ],

    example:
      'Reuse the strongest product demonstration and customer result while replacing the hook, voiceover, and CTA.',

    sops: [
      'Asset Reuse SOP',
      'Winning Footage Repurposing SOP',
      'Asset Rights Checklist',
    ],
  },

  {
    id: 'ai-production',
    number: '07.6',
    title: 'AI-Assisted MVP Production',
    shortTitle: 'AI Production',
    icon: 'newConcepts',

    description:
      'Use AI selectively to accelerate voiceover, creator variation, visual generation, animation, copy, and editing support.',

    questions: [
      'Which production bottleneck can AI remove?',
      'Can AI voiceover replace a recording?',
      'Can AI generate missing B-roll?',
      'Can an AI creator validate the concept?',
      'Can AI generate product demonstrations credibly?',
      'Does the asset look believable enough?',
      'Could AI reduce trust for this persona?',
      'What human review is required before launch?',
    ],

    requirements: [
      'AI-use justification',
      'Prompt specification',
      'Brand consistency review',
      'Credibility review',
      'Artifact review',
      'Compliance review',
      'Human final approval',
    ],

    outputs: [
      'AI production plan',
      'Prompt requirements',
      'Generated asset list',
      'Human-review checklist',
    ],

    example:
      'Use ElevenLabs for voiceover and AI-generated supporting B-roll, while retaining real product footage and customer proof.',

    sops: [
      'AI MVP Production SOP',
      'AI Asset QA SOP',
      'AI Credibility Review SOP',
    ],
  },

  {
    id: 'test-design',
    number: '07.7',
    title: 'MVP Test Design',
    shortTitle: 'Test Design',
    icon: 'analysis',

    description:
      'Design the experiment so the result can clearly indicate whether the central creative hypothesis has potential.',

    questions: [
      'What variable is being tested?',
      'What variables must remain controlled?',
      'Which audience should receive the test?',
      'Which placement should be used?',
      'Which landing page and offer remain constant?',
      'How much spend is required for a useful signal?',
      'How long should the test run?',
      'What decision will follow each possible outcome?',
    ],

    requirements: [
      'Defined testing variable',
      'Controlled variables',
      'Audience definition',
      'Placement definition',
      'Landing-page assignment',
      'Offer assignment',
      'Budget',
      'Testing window',
    ],

    outputs: [
      'MVP test plan',
      'Controlled-variable list',
      'Campaign assignment',
      'Decision framework',
    ],

    example:
      'Test three hook variations against the same body, audience, offer, landing page, and budget allocation.',

    sops: [
      'MVP Test Design SOP',
      'Controlled Variables SOP',
      'Creative Experiment SOP',
    ],
  },

  {
    id: 'success-criteria',
    number: '07.8',
    title: 'Success Criteria',
    shortTitle: 'Success Criteria',
    icon: 'validation',

    description:
      'Define the attention, retention, click, conversion, and business signals required for the concept to move forward.',

    questions: [
      'Which metric best indicates the hypothesis worked?',
      'What hook-rate threshold is required?',
      'What hold-rate threshold is required?',
      'What CTR indicates meaningful interest?',
      'What CPA or ROAS range is acceptable?',
      'How much spend is needed before judging?',
      'Which qualitative signals matter?',
      'What result should trigger iteration instead of rejection?',
    ],

    requirements: [
      'Primary KPI',
      'Secondary KPIs',
      'Minimum spend',
      'Minimum sample',
      'Success threshold',
      'Iteration threshold',
      'Failure threshold',
      'Qualitative evidence',
    ],

    outputs: [
      'Success criteria',
      'Iteration criteria',
      'Failure criteria',
      'Escalation criteria',
    ],

    example:
      'Advance if hook rate and CTR exceed baseline and CPA shows promising movement after sufficient spend.',

    sops: [
      'MVP Success Criteria SOP',
      'Creative KPI Threshold SOP',
      'Early Signal SOP',
    ],
  },

  {
    id: 'budget-window',
    number: '07.9',
    title: 'Budget & Testing Window',
    shortTitle: 'Budget & Window',
    icon: 'operations',

    description:
      'Assign enough budget and time to generate a useful signal without wasting spend on an unvalidated concept.',

    questions: [
      'What is the minimum meaningful spend?',
      'How does the target CPA affect the budget?',
      'How many variations are being tested?',
      'Should spend be distributed equally?',
      'How long does the platform need to stabilize?',
      'What daily budget is practical?',
      'When should the test be stopped early?',
      'When should the test be extended?',
    ],

    requirements: [
      'Target CPA',
      'Variation count',
      'Daily budget',
      'Total budget',
      'Minimum testing duration',
      'Maximum testing duration',
      'Early-stop conditions',
      'Extension conditions',
    ],

    outputs: [
      'Budget allocation',
      'Testing schedule',
      'Early-stop rules',
      'Extension rules',
    ],

    example:
      'Allocate equal spend across three hooks for three days, with early stopping only for clearly weak attention signals.',

    sops: [
      'MVP Budget SOP',
      'Testing Window SOP',
      'Early Stop SOP',
    ],
  },

  {
    id: 'mvp-qa',
    number: '07.10',
    title: 'MVP Quality Assurance',
    shortTitle: 'MVP QA',
    icon: 'decision',

    description:
      'Confirm that the fast version is simple but still strategically clear, technically functional, credible, and ready to test.',

    questions: [
      'Is the hypothesis visible in the final creative?',
      'Is the hook clear in the first seconds?',
      'Is the message easy to understand?',
      'Is proof visible enough?',
      'Is the product introduced clearly?',
      'Is the audio understandable?',
      'Are captions accurate?',
      'Does the CTA work?',
    ],

    requirements: [
      'Hypothesis preserved',
      'Clear hook',
      'Clear body',
      'Visible proof',
      'Correct product',
      'Correct offer',
      'Correct CTA',
      'Correct technical export',
    ],

    outputs: [
      'Approved MVP',
      'Revision list',
      'Rejected MVP',
      'Launch readiness status',
    ],

    example:
      'Approve despite simple editing because the hook, mechanism, proof, product, and CTA are all clear and testable.',

    sops: [
      'MVP QA SOP',
      'MVP Launch Checklist',
      'Fast Creative Review SOP',
    ],
  },
];

const mvpOutcomes = [
  {
    id: 'launch',
    title: 'Ready to Launch',
    description:
      'The creative clearly communicates the hypothesis and meets the minimum technical and credibility requirements.',
    icon: 'launch',
  },
  {
    id: 'revise',
    title: 'Quick Revision',
    description:
      'The hypothesis is strong, but a small issue must be fixed before launch.',
    icon: 'iteration',
  },
  {
    id: 'rebuild',
    title: 'Rebuild MVP',
    description:
      'The execution no longer communicates the approved concept clearly enough to produce useful learning.',
    icon: 'production',
  },
  {
    id: 'stop',
    title: 'Stop Before Spend',
    description:
      'The test has a strategic, compliance, credibility, or production problem that makes launch unjustified.',
    icon: 'close',
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

function MVPDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-mvp-data-card">
      <div className="creative-op-mvp-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-mvp-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function MVPDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('core-hypothesis');

  const [activeOutcome, setActiveOutcome] =
    useState('launch');

  const selectedSystem =
    mvpSystems.find(
      (system) => system.id === selectedSystemId
    ) || mvpSystems[0];

  return (
    <motion.section
      className="creative-op-mvp-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-mvp-topbar">
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

            <strong>Minimum Viable Creative</strong>
          </div>
        </div>

        <div className="creative-op-mvp-heading">
          <span>STAGE 07 / TESTING</span>

          <h1>Minimum Viable Creative</h1>

          <p>
            Build the fastest credible version of an approved concept
            capable of validating the central hypothesis before
            committing to larger production.
          </p>
        </div>

        <div className="creative-op-mvp-counter">
          <strong>{mvpSystems.length}</strong>
          <span>MVP systems</span>
        </div>
      </header>

      <div className="creative-op-mvp-layout">
        <aside className="creative-op-mvp-navigation">
          <div className="creative-op-mvp-navigation-intro">
            <span>MVP SYSTEMS</span>
            <h2>Build the fastest useful test</h2>
          </div>

          <nav>
            {mvpSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-mvp-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-mvp-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-mvp-nav-icon">
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

        <main className="creative-op-mvp-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-mvp-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-mvp-selected-header">
                <div className="creative-op-mvp-selected-icon">
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

              <section className="creative-op-mvp-question-card">
                <div className="creative-op-mvp-question-heading">
                  <div>
                    <span>MVP DEVELOPMENT FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-mvp-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-mvp-question-item"
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

              <section className="creative-op-mvp-example-card">
                <div className="creative-op-mvp-example-icon">
                  <CreativeStrategyOPIcon
                    type="mvp"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE MVP DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-mvp-bottom-grid">
                <MVPDataCard
                  title="Minimum Requirements"
                  items={selectedSystem.requirements}
                  icon="briefing"
                />

                <MVPDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-mvp-sop-panel">
          <span className="creative-op-mvp-sop-eyebrow">
            TESTING DECISION LAYER
          </span>

          <h2>MVP Outcomes</h2>

          <p>
            The MVP must create useful learning without unnecessary
            production cost or complexity.
          </p>

          <div className="creative-op-mvp-outcome-list">
            {mvpOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-mvp-outcome-card ${
                  activeOutcome === outcome.id
                    ? 'is-active'
                    : ''
                }`}
                onClick={() =>
                  setActiveOutcome(outcome.id)
                }
              >
                <span>
                  <CreativeStrategyOPIcon
                    type={outcome.icon}
                    size={18}
                  />
                </span>

                <div>
                  <strong>{outcome.title}</strong>
                  <p>{outcome.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="creative-op-mvp-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-mvp-sop-card"
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
          </div>

          <div className="creative-op-mvp-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Minimum Viable Creative Test</h3>

            <p>
              A fast, credible, controlled creative test with a
              documented hypothesis, asset plan, budget, testing
              window, and success criteria.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}