// src/components/IterationDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const iterationSystems = [
  {
    id: 'winning-elements',
    number: '12.1',
    title: 'Winning-Element Isolation',
    shortTitle: 'Winning Elements',
    icon: 'validation',

    description:
      'Identify the specific hook, message, visual, creator, proof, structure, or offer element that generated the strongest signal.',

    questions: [
      'Which element clearly outperformed the baseline?',
      'Did the hook create attention?',
      'Did the body maintain interest?',
      'Did the message generate qualified clicks?',
      'Did proof increase conversion confidence?',
      'Did one creator outperform the others?',
      'Which element should remain controlled?',
      'How confident are we that this element caused the result?',
    ],

    variables: [
      'Hook',
      'Opening visual',
      'Creator',
      'Angle',
      'Core message',
      'Mechanism',
      'Narrative structure',
      'Proof',
      'Offer',
      'CTA',
      'Editing style',
      'Landing page',
    ],

    outputs: [
      'Protected winning elements',
      'Controlled variables',
      'Confidence level',
      'Iteration boundaries',
    ],

    example:
      'Keep the hidden-mechanism hook and customer proof because both generated strong attention and click signals. Change only the slow middle section.',

    sops: [
      'Winning Element Isolation SOP',
      'Controlled Variable SOP',
      'Creative Learning Protection SOP',
    ],
  },

  {
    id: 'failure-point',
    number: '12.2',
    title: 'Failure-Point Diagnosis',
    shortTitle: 'Failure Point',
    icon: 'analysis',

    description:
      'Locate the exact stage where performance weakened instead of treating the entire creative as a failure.',

    questions: [
      'Did the creative fail to stop attention?',
      'Did viewers leave after the hook?',
      'Did clicks fail to reach the landing page?',
      'Did traffic fail to convert?',
      'Did CPA weaken because of media costs?',
      'Did the offer create friction?',
      'Did the landing page break message continuity?',
      'Which metric best identifies the failure point?',
    ],

    variables: [
      'Attention failure',
      'Retention failure',
      'Click failure',
      'Traffic-quality failure',
      'Landing-page failure',
      'Conversion failure',
      'Offer failure',
      'Economic failure',
      'Tracking failure',
      'Sample-size problem',
    ],

    outputs: [
      'Failure-point diagnosis',
      'Root-cause hypothesis',
      'Evidence summary',
      'Recommended iteration category',
    ],

    example:
      'The concept created strong attention and clicks, but conversion weakened after the click. Prioritize message match and landing-page alignment instead of replacing the hook.',

    sops: [
      'Failure-Point Diagnosis SOP',
      'Creative Funnel Diagnosis SOP',
      'Root-Cause Analysis SOP',
    ],
  },

  {
    id: 'hook',
    number: '12.3',
    title: 'Hook Iteration',
    shortTitle: 'Hook Iteration',
    icon: 'angles',

    description:
      'Improve the opening while preserving the validated body, offer, audience, and landing-page experience.',

    questions: [
      'Was hook rate below baseline?',
      'Was the first visual understandable?',
      'Did the first line identify the persona?',
      'Was curiosity too vague?',
      'Could proof lead the opening?',
      'Could the problem be shown faster?',
      'Would a different creator improve attention?',
      'How many hook variations should be tested?',
    ],

    variables: [
      'Opening line',
      'Opening visual',
      'Creator delivery',
      'Problem framing',
      'Desire framing',
      'Proof-led opening',
      'Contrarian opening',
      'Customer quote',
      'Pattern interrupt',
      'On-screen headline',
    ],

    outputs: [
      'Hook iteration batch',
      'Shared-body structure',
      'Hook testing variable',
      'Hook success criteria',
    ],

    example:
      'Keep the same body and create three new openings: direct problem, visible demonstration, and customer-proof hook.',

    sops: [
      'Hook Iteration SOP',
      'Hook Batch SOP',
      'Shared Body Testing SOP',
    ],
  },

  {
    id: 'retention',
    number: '12.4',
    title: 'Retention Iteration',
    shortTitle: 'Retention',
    icon: 'production',

    description:
      'Improve pacing, structure, message order, visual variety, and product timing where viewers lose attention.',

    questions: [
      'Where does the largest retention drop occur?',
      'Is the explanation too long?',
      'Does the product appear too late?',
      'Is proof introduced after viewers leave?',
      'Are visuals repeating?',
      'Can a section be shortened?',
      'Can the sequence be reordered?',
      'Can the same idea be explained more visually?',
    ],

    variables: [
      'Pacing',
      'Scene duration',
      'Message order',
      'Product reveal',
      'Proof timing',
      'Visual variety',
      'Caption emphasis',
      'Voiceover speed',
      'Video length',
      'Narrative compression',
    ],

    outputs: [
      'Revised narrative sequence',
      'Shortened edit',
      'Retention-focused version',
      'Timestamp change list',
    ],

    example:
      'Move proof five seconds earlier, shorten the mechanism explanation, and introduce the product before the largest drop-off point.',

    sops: [
      'Retention Iteration SOP',
      'Narrative Compression SOP',
      'Pacing Revision SOP',
    ],
  },

  {
    id: 'message',
    number: '12.5',
    title: 'Messaging Iteration',
    shortTitle: 'Messaging',
    icon: 'insights',

    description:
      'Improve clarity, specificity, relevance, belief shift, and customer language while preserving the validated strategic territory.',

    questions: [
      'Is the central message immediately understandable?',
      'Is the message too broad?',
      'Does it reflect customer language?',
      'Is the mechanism explained simply?',
      'Is the desired outcome specific?',
      'Is the belief shift clear?',
      'Is the message creating the wrong expectation?',
      'What phrase should be replaced or emphasized?',
    ],

    variables: [
      'Problem language',
      'Desired outcome',
      'Belief shift',
      'Mechanism explanation',
      'Headline',
      'Customer quote',
      'Specificity',
      'Emotional language',
      'Product positioning',
      'Objection handling',
    ],

    outputs: [
      'Revised core message',
      'Message variations',
      'Updated script language',
      'Clarity testing plan',
    ],

    example:
      'Replace general “hair support” language with the specific customer phrase “less hair collecting in the shower drain.”',

    sops: [
      'Messaging Iteration SOP',
      'Message Clarity SOP',
      'Voice-of-Customer Revision SOP',
    ],
  },

  {
    id: 'proof',
    number: '12.6',
    title: 'Proof Iteration',
    shortTitle: 'Proof',
    icon: 'validation',

    description:
      'Strengthen credibility by changing the type, timing, visibility, specificity, or relevance of proof.',

    questions: [
      'Does the claim receive enough support?',
      'Is proof visible early enough?',
      'Is the proof specific?',
      'Does it match the target persona?',
      'Would a demonstration outperform a testimonial?',
      'Would customer language increase credibility?',
      'Is the proof easy to understand?',
      'Does the proof resolve the strongest objection?',
    ],

    variables: [
      'Testimonial',
      'Before-and-after',
      'Demonstration',
      'Study result',
      'Review overlay',
      'Expert endorsement',
      'Founder credibility',
      'Product close-up',
      'Proof timing',
      'Proof quantity',
    ],

    outputs: [
      'Proof iteration plan',
      'New proof asset',
      'Revised proof timing',
      'Credibility hypothesis',
    ],

    example:
      'Replace a generic five-star rating with a specific customer quote and visible 30-day result.',

    sops: [
      'Proof Iteration SOP',
      'Proof Placement SOP',
      'Credibility Improvement SOP',
    ],
  },

  {
    id: 'visual',
    number: '12.7',
    title: 'Visual Iteration',
    shortTitle: 'Visuals',
    icon: 'concepts',

    description:
      'Improve the visual execution without unnecessarily changing the approved message or narrative.',

    questions: [
      'Does the visual communicate the message quickly?',
      'Is the opening visually strong?',
      'Can the mechanism be demonstrated?',
      'Is the product visible enough?',
      'Does the creative need more contrast?',
      'Are the visuals repetitive?',
      'Could a different setting feel more native?',
      'Which visual element should remain controlled?',
    ],

    variables: [
      'Opening shot',
      'B-roll',
      'Product demonstration',
      'Split screen',
      'Before-and-after',
      'Text overlay',
      'Background',
      'Camera framing',
      'Editing treatment',
      'Visual metaphor',
    ],

    outputs: [
      'Visual variation set',
      'Revised shot list',
      'New asset requirements',
      'Visual testing plan',
    ],

    example:
      'Keep the same script but replace generic stock footage with a direct shower-drain demonstration and product-in-use footage.',

    sops: [
      'Visual Iteration SOP',
      'B-Roll Iteration SOP',
      'Visual Demonstration SOP',
    ],
  },

  {
    id: 'creator',
    number: '12.8',
    title: 'Creator Iteration',
    shortTitle: 'Creator',
    icon: 'personas',

    description:
      'Test whether creator profile, delivery, credibility, energy, relatability, or environment affects performance.',

    questions: [
      'Does the creator naturally represent the persona?',
      'Is the delivery believable?',
      'Is the opening energy appropriate?',
      'Would an expert increase credibility?',
      'Would a founder improve trust?',
      'Would a different age or life stage improve relevance?',
      'Is the environment appropriate?',
      'Can the same script be tested across creators?',
    ],

    variables: [
      'Creator age',
      'Creator gender',
      'Creator identity',
      'Founder',
      'Expert',
      'Customer',
      'Delivery style',
      'Energy level',
      'Environment',
      'Wardrobe',
    ],

    outputs: [
      'Creator variation plan',
      'Creator selection criteria',
      'Controlled-script test',
      'Creator performance hypothesis',
    ],

    example:
      'Keep the same hook, script, proof, and CTA while testing a creator who more closely represents the high-response customer segment.',

    sops: [
      'Creator Iteration SOP',
      'Creator Variable Testing SOP',
      'Creator Match SOP',
    ],
  },

  {
    id: 'offer-cta',
    number: '12.9',
    title: 'Offer & CTA Iteration',
    shortTitle: 'Offer & CTA',
    icon: 'foundation',

    description:
      'Improve commercial action by changing value framing, risk reversal, urgency, bundle presentation, or the requested next step.',

    questions: [
      'Is the offer clear?',
      'Does the offer resolve the primary objection?',
      'Is value framed effectively?',
      'Is the guarantee visible?',
      'Does the CTA match awareness level?',
      'Is urgency credible?',
      'Does the customer understand what happens next?',
      'Should the CTA ask for a smaller commitment?',
    ],

    variables: [
      'Price framing',
      'Bundle framing',
      'Discount',
      'Guarantee',
      'Free gift',
      'Subscription',
      'Urgency',
      'CTA language',
      'CTA placement',
      'Risk reversal',
    ],

    outputs: [
      'Offer iteration',
      'CTA variations',
      'Value-framing revision',
      'Commercial hypothesis',
    ],

    example:
      'Keep the concept unchanged but replace “Shop Now” with a risk-reversal CTA built around the 100-day guarantee.',

    sops: [
      'Offer Iteration SOP',
      'CTA Iteration SOP',
      'Risk-Reversal Revision SOP',
    ],
  },

  {
    id: 'landing-page',
    number: '12.10',
    title: 'Landing-Page Alignment',
    shortTitle: 'Landing Page',
    icon: 'briefing',

    description:
      'Improve post-click continuity when the creative creates interest but the destination fails to continue the same message, promise, proof, or offer.',

    questions: [
      'Does the landing-page headline match the ad?',
      'Is the same mechanism explained?',
      'Is the same product and offer visible?',
      'Does the page continue the customer story?',
      'Is required proof present?',
      'Does the page answer the main objection?',
      'Is page speed weakening performance?',
      'Should a different destination be tested?',
    ],

    variables: [
      'Page headline',
      'Message match',
      'Hero section',
      'Mechanism explanation',
      'Proof',
      'Offer',
      'CTA',
      'Advertorial',
      'Listicle',
      'Product page',
    ],

    outputs: [
      'Message-match revision',
      'Landing-page recommendation',
      'Destination variation',
      'Post-click testing plan',
    ],

    example:
      'Send the educational mechanism creative to the matching advertorial instead of a generic product page.',

    sops: [
      'Landing-Page Iteration SOP',
      'Message Match SOP',
      'Destination Testing SOP',
    ],
  },

  {
    id: 'prioritization',
    number: '12.11',
    title: 'Iteration Prioritization',
    shortTitle: 'Prioritization',
    icon: 'decision',

    description:
      'Rank iteration opportunities by expected impact, evidence, production effort, speed, cost, and learning value.',

    questions: [
      'Which weakness has the strongest evidence?',
      'Which change has the highest potential impact?',
      'Which element already works and should remain controlled?',
      'What can be changed quickly?',
      'What requires new production?',
      'Which change creates the clearest learning?',
      'Should one variable or several variables change?',
      'What should be tested first?',
    ],

    variables: [
      'Expected impact',
      'Evidence strength',
      'Production effort',
      'Production cost',
      'Execution speed',
      'Testing clarity',
      'Business urgency',
      'Scalability potential',
    ],

    outputs: [
      'Prioritized iteration queue',
      'Immediate iteration',
      'Secondary iteration',
      'Deferred iteration',
    ],

    example:
      'Prioritize moving proof earlier before commissioning a completely new creator because the retention data directly identifies proof timing as the likely weakness.',

    sops: [
      'Iteration Prioritization SOP',
      'Impact-Effort Scoring SOP',
      'Iteration Queue SOP',
    ],
  },

  {
    id: 'qa',
    number: '12.12',
    title: 'Iteration Quality Assurance',
    shortTitle: 'Iteration QA',
    icon: 'validation',

    description:
      'Confirm that the new version changes the intended variable, preserves validated elements, and can produce interpretable learning.',

    questions: [
      'Is the intended variable clearly changed?',
      'Were validated elements preserved?',
      'Did unrelated changes enter the creative?',
      'Does the iteration still represent the approved concept?',
      'Is the hypothesis documented?',
      'Can the new result be compared fairly?',
      'Are naming and versioning correct?',
      'Is the asset ready for relaunch?',
    ],

    variables: [
      'Changed variable',
      'Controlled variables',
      'Version ID',
      'Updated hypothesis',
      'Success criteria',
      'Correct naming',
      'Correct destination',
      'Launch readiness',
    ],

    outputs: [
      'Approved iteration',
      'Revision request',
      'Invalid iteration',
      'Relaunch-ready status',
    ],

    example:
      'Reject an iteration that changes the hook, creator, body, proof, offer, and landing page simultaneously because the result will not reveal what caused the difference.',

    sops: [
      'Iteration QA SOP',
      'Variable Control Checklist',
      'Iteration Relaunch SOP',
    ],
  },
];

const iterationOutcomes = [
  {
    id: 'ready',
    title: 'Ready to Retest',
    description:
      'The iteration addresses a documented weakness while preserving the validated elements and controlled testing structure.',
    icon: 'launch',
  },
  {
    id: 'refine',
    title: 'Refine Iteration',
    description:
      'The direction is correct, but the change needs more clarity, stronger execution, or tighter variable control.',
    icon: 'iteration',
  },
  {
    id: 'invalid',
    title: 'Invalid Test',
    description:
      'Too many variables changed, making the result difficult to compare or interpret.',
    icon: 'analysis',
  },
  {
    id: 'replace',
    title: 'Replace Concept',
    description:
      'The original concept lacks enough validated strength to justify additional iteration.',
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

function IterationDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-iteration-data-card">
      <div className="creative-op-iteration-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-iteration-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function IterationDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('winning-elements');

  const [activeOutcome, setActiveOutcome] =
    useState('ready');

  const selectedSystem =
    iterationSystems.find(
      (system) => system.id === selectedSystemId
    ) || iterationSystems[0];

  return (
    <motion.section
      className="creative-op-iteration-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-iteration-topbar">
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

            <strong>Creative Iteration</strong>
          </div>
        </div>

        <div className="creative-op-iteration-heading">
          <span>STAGE 12 / OPTIMIZATION</span>

          <h1>Creative Iteration</h1>

          <p>
            Preserve what worked, diagnose what failed, and make
            controlled improvements that produce useful new learning.
          </p>
        </div>

        <div className="creative-op-iteration-counter">
          <strong>{iterationSystems.length}</strong>
          <span>Iteration systems</span>
        </div>
      </header>

      <div className="creative-op-iteration-layout">
        <aside className="creative-op-iteration-navigation">
          <div className="creative-op-iteration-navigation-intro">
            <span>ITERATION SYSTEMS</span>
            <h2>Improve the right variable</h2>
          </div>

          <nav>
            {iterationSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-iteration-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-iteration-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-iteration-nav-icon">
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

        <main className="creative-op-iteration-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-iteration-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-iteration-selected-header">
                <div className="creative-op-iteration-selected-icon">
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

              <section className="creative-op-iteration-question-card">
                <div className="creative-op-iteration-question-heading">
                  <div>
                    <span>ITERATION FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-iteration-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-iteration-question-item"
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

              <section className="creative-op-iteration-example-card">
                <div className="creative-op-iteration-example-icon">
                  <CreativeStrategyOPIcon
                    type="iteration"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE ITERATION DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-iteration-bottom-grid">
                <IterationDataCard
                  title="Iteration Variables"
                  items={selectedSystem.variables}
                  icon="iteration"
                />

                <IterationDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-iteration-sop-panel">
          <span className="creative-op-iteration-sop-eyebrow">
            ITERATION DECISION LAYER
          </span>

          <h2>Iteration Outcomes</h2>

          <p>
            Every iteration receives a clear decision before it moves
            back into production and testing.
          </p>

          <div className="creative-op-iteration-outcome-list">
            {iterationOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-iteration-outcome-card ${
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

          <div className="creative-op-iteration-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-iteration-sop-card"
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

          <div className="creative-op-iteration-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Controlled Creative Iteration</h3>

            <p>
              A revised creative that protects validated elements,
              changes a documented variable, and returns to testing
              with a clear hypothesis.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}