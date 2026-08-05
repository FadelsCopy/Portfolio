// src/components/ValidationDeepDive.jsx

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const validationSystems = [
  {
    id: 'evidence',
    number: '05.1',
    title: 'Research Evidence',
    shortTitle: 'Evidence',
    icon: 'research',

    description:
      'Confirm that the angle is supported by real customer evidence rather than assumption, personal preference, or creative instinct alone.',

    questions: [
      'How many independent research sources support this angle?',
      'Does the angle appear repeatedly across customer research?',
      'Is the evidence direct or inferred?',
      'Are there strong customer quotes supporting it?',
      'Does first-party brand data support it?',
      'Does previous creative performance support it?',
      'Is the evidence recent and relevant?',
      'Is contradictory evidence present?',
    ],

    scoreLabels: [
      'No meaningful evidence',
      'Weak or isolated evidence',
      'Some repeated evidence',
      'Strong evidence across multiple sources',
      'Strong direct evidence and performance support',
    ],

    requirements: [
      'Customer quote evidence',
      'Research source references',
      'Frequency of occurrence',
      'First-party evidence',
      'Contradictory evidence review',
    ],

    outputs: [
      'Evidence score',
      'Evidence summary',
      'Supporting customer quotes',
      'Research confidence level',
    ],

    sops: [
      'Research Evidence SOP',
      'Evidence Scoring Template',
      'Customer Quote Validation SOP',
    ],
  },

  {
    id: 'persona-relevance',
    number: '05.2',
    title: 'Persona Relevance',
    shortTitle: 'Persona Fit',
    icon: 'personas',

    description:
      'Determine whether the angle is specific and meaningful to the intended persona rather than generically relevant to the entire market.',

    questions: [
      'Is the angle clearly connected to a defined persona?',
      'Does it address that persona’s primary problem?',
      'Does it connect to their strongest desire?',
      'Does it match their buying context?',
      'Does it reflect their awareness level?',
      'Does it address their objections?',
      'Would the persona immediately recognize themselves?',
      'Could the message be made more specific?',
    ],

    scoreLabels: [
      'No defined persona relevance',
      'Broad and weak relevance',
      'Relevant but generic',
      'Strong persona-specific relevance',
      'Exceptionally specific and emotionally personal',
    ],

    requirements: [
      'Defined persona',
      'Persona problem',
      'Persona desire',
      'Awareness level',
      'Buying context',
    ],

    outputs: [
      'Persona relevance score',
      'Persona fit summary',
      'Specificity recommendations',
      'Awareness alignment',
    ],

    sops: [
      'Persona Relevance SOP',
      'Persona-to-Angle Validation SOP',
      'Message Specificity SOP',
    ],
  },

  {
    id: 'emotion',
    number: '05.3',
    title: 'Emotional Strength',
    shortTitle: 'Emotion',
    icon: 'insights',

    description:
      'Evaluate whether the angle activates a meaningful emotional driver strong enough to create attention, interest, and action.',

    questions: [
      'What emotion does the angle activate?',
      'How intensely does the persona experience that emotion?',
      'Does the message create urgency, hope, curiosity, relief, or desire?',
      'Is the emotional promise specific?',
      'Does the angle connect to identity?',
      'Does it create a meaningful before-and-after contrast?',
      'Can the emotional benefit be visualized?',
      'Is the emotion supported by customer language?',
    ],

    scoreLabels: [
      'Emotionally neutral',
      'Weak emotional connection',
      'Moderate emotional relevance',
      'Strong emotional driver',
      'Highly emotional, specific, and identity-relevant',
    ],

    requirements: [
      'Primary emotion',
      'Customer evidence',
      'Emotional intensity',
      'Identity connection',
      'Emotional transformation',
    ],

    outputs: [
      'Emotional strength score',
      'Primary emotional driver',
      'Emotional language recommendations',
      'Identity connection',
    ],

    sops: [
      'Emotional Strength SOP',
      'Emotional Driver Scoring SOP',
      'Identity Relevance SOP',
    ],
  },

  {
    id: 'specificity',
    number: '05.4',
    title: 'Specificity & Clarity',
    shortTitle: 'Specificity',
    icon: 'briefing',

    description:
      'Determine whether the angle communicates one clear and specific idea that the customer can understand immediately.',

    questions: [
      'Can the angle be understood in one sentence?',
      'Is the customer problem or desire clearly defined?',
      'Does the message contain unnecessary abstraction?',
      'Is the language concrete?',
      'Is the claim specific?',
      'Can the angle support a clear hook?',
      'Does it communicate one central idea?',
      'Could two people interpret it differently?',
    ],

    scoreLabels: [
      'Unclear and abstract',
      'Partially understandable',
      'Clear but still broad',
      'Specific and immediately understandable',
      'Exceptionally clear, concrete, and memorable',
    ],

    requirements: [
      'One central idea',
      'Specific customer problem',
      'Specific desired outcome',
      'Clear claim',
      'Simple language',
    ],

    outputs: [
      'Specificity score',
      'Core angle statement',
      'Clarity improvements',
      'Simplified angle version',
    ],

    sops: [
      'Angle Clarity SOP',
      'Specificity Scoring SOP',
      'Angle Simplification SOP',
    ],
  },

  {
    id: 'novelty',
    number: '05.5',
    title: 'Novelty & Differentiation',
    shortTitle: 'Novelty',
    icon: 'angles',

    description:
      'Evaluate whether the angle feels meaningfully different from saturated competitor messaging and familiar category claims.',

    questions: [
      'Are competitors already using this message heavily?',
      'Has the customer seen this claim repeatedly?',
      'Does the angle introduce a new perspective?',
      'Is there a differentiated mechanism?',
      'Does it reveal an overlooked problem or desire?',
      'Can it challenge an existing belief?',
      'Does the product have proof supporting the difference?',
      'Is the angle new without becoming confusing?',
    ],

    scoreLabels: [
      'Completely saturated',
      'Mostly familiar',
      'Some differentiation',
      'Strong fresh perspective',
      'Highly differentiated and ownable',
    ],

    requirements: [
      'Competitor comparison',
      'Market saturation review',
      'Unique perspective',
      'Product differentiation',
      'Supporting proof',
    ],

    outputs: [
      'Novelty score',
      'Differentiation score',
      'Competitor similarity notes',
      'Unique positioning statement',
    ],

    sops: [
      'Novelty Analysis SOP',
      'Competitor Saturation SOP',
      'Differentiation Validation SOP',
    ],
  },

  {
    id: 'awareness-fit',
    number: '05.6',
    title: 'Awareness-Level Fit',
    shortTitle: 'Awareness Fit',
    icon: 'knowledge',

    description:
      'Confirm that the message matches what the customer currently understands and what they must believe next.',

    questions: [
      'What awareness stage is the angle targeting?',
      'Does the angle require knowledge the customer may not have?',
      'Is too much explanation required?',
      'Does the message begin at the correct level?',
      'Does it introduce the correct next belief?',
      'Is the format appropriate for the awareness level?',
      'Is the amount of proof appropriate?',
      'Would the message work at the intended funnel stage?',
    ],

    scoreLabels: [
      'Completely mismatched',
      'Weak awareness fit',
      'Partially aligned',
      'Strong awareness alignment',
      'Perfectly matched to customer knowledge and funnel stage',
    ],

    requirements: [
      'Target awareness stage',
      'Required belief shift',
      'Education requirement',
      'Proof requirement',
      'Funnel-stage alignment',
    ],

    outputs: [
      'Awareness-fit score',
      'Target awareness stage',
      'Required belief shift',
      'Format recommendation',
    ],

    sops: [
      'Awareness Fit SOP',
      'Funnel Message Alignment SOP',
      'Belief Shift Validation SOP',
    ],
  },

  {
    id: 'product-fit',
    number: '05.7',
    title: 'Product & Offer Fit',
    shortTitle: 'Product Fit',
    icon: 'foundation',

    description:
      'Confirm that the product, mechanism, proof, and offer can credibly fulfill the promise made by the angle.',

    questions: [
      'Does the product directly solve the problem?',
      'Can the product deliver the promised outcome?',
      'Does the mechanism support the angle?',
      'Is the claim compliant and supportable?',
      'Does the offer strengthen the message?',
      'Is the guarantee relevant to the objection?',
      'Does available proof support the promise?',
      'Could the angle create unrealistic expectations?',
    ],

    scoreLabels: [
      'Poor or misleading fit',
      'Weak product connection',
      'Reasonable fit with limitations',
      'Strong product and offer alignment',
      'Exceptional alignment with mechanism, proof, and offer',
    ],

    requirements: [
      'Product mechanism',
      'Product benefit',
      'Offer relevance',
      'Proof support',
      'Claim compliance',
    ],

    outputs: [
      'Product-fit score',
      'Offer-fit score',
      'Required proof',
      'Claim limitations',
    ],

    sops: [
      'Product Fit SOP',
      'Offer Fit SOP',
      'Claims Validation SOP',
    ],
  },

  {
    id: 'hook-potential',
    number: '05.8',
    title: 'Hook Potential',
    shortTitle: 'Hook Potential',
    icon: 'concepts',

    description:
      'Evaluate whether the angle can generate multiple clear, compelling, and platform-native hooks.',

    questions: [
      'Can the angle become a strong opening sentence?',
      'Can it create immediate curiosity?',
      'Can it be expressed visually?',
      'Can it generate several hook variations?',
      'Does it communicate relevance quickly?',
      'Can it work with different creators?',
      'Can it support both direct and indirect hooks?',
      'Does it fit platform behavior?',
    ],

    scoreLabels: [
      'Very weak hook potential',
      'Limited hook opportunities',
      'Moderate hook potential',
      'Strong expandable hook potential',
      'Exceptional hook family potential',
    ],

    requirements: [
      'Direct hook option',
      'Curiosity hook option',
      'Visual hook option',
      'Persona-specific hook',
      'Platform-native hook',
    ],

    outputs: [
      'Hook-potential score',
      'Initial hook directions',
      'Hook-family estimate',
      'Platform recommendations',
    ],

    sops: [
      'Hook Potential SOP',
      'Hook Family SOP',
      'Platform Hook Validation SOP',
    ],
  },

  {
    id: 'visual-potential',
    number: '05.9',
    title: 'Visual & Demonstration Potential',
    shortTitle: 'Visual Potential',
    icon: 'production',

    description:
      'Determine whether the angle can be communicated through strong visuals, demonstrations, contrast, proof, or pattern interruption.',

    questions: [
      'Can the angle be understood without sound?',
      'Is there a clear visual metaphor?',
      'Can the problem be demonstrated?',
      'Can the product mechanism be shown?',
      'Is before-and-after proof available?',
      'Can contrast make the message clearer?',
      'Can the visual be produced affordably?',
      'Can the visual generate multiple executions?',
    ],

    scoreLabels: [
      'No clear visual direction',
      'Weak visual potential',
      'Some usable visuals',
      'Strong visual or demonstration potential',
      'Exceptional visual, proof, and expansion potential',
    ],

    requirements: [
      'Opening visual',
      'Demonstration option',
      'Proof visual',
      'Contrast option',
      'Production feasibility',
    ],

    outputs: [
      'Visual-potential score',
      'Visual directions',
      'Demonstration opportunities',
      'Asset requirements',
    ],

    sops: [
      'Visual Potential SOP',
      'Demonstration Validation SOP',
      'Visual Hook SOP',
    ],
  },

  {
    id: 'expansion',
    number: '05.10',
    title: 'Concept Expansion Potential',
    shortTitle: 'Expansion',
    icon: 'scaling',

    description:
      'Estimate whether the angle can support multiple concepts, formats, creators, hooks, and future iterations.',

    questions: [
      'Can the angle produce several distinct concepts?',
      'Can it work in multiple formats?',
      'Can it support different creators?',
      'Can it work across awareness levels?',
      'Can it generate meaningful iterations?',
      'Can it support static and video executions?',
      'Can it expand into advertorial or VSL formats?',
      'Can it remain useful after the first test?',
    ],

    scoreLabels: [
      'Single-use idea',
      'Very limited expansion',
      'Some expansion opportunities',
      'Strong multi-format expansion potential',
      'Large scalable creative territory',
    ],

    requirements: [
      'Concept variations',
      'Format options',
      'Creator options',
      'Iteration options',
      'Long-form potential',
    ],

    outputs: [
      'Expansion score',
      'Estimated concept count',
      'Recommended formats',
      'Scaling opportunities',
    ],

    sops: [
      'Concept Expansion SOP',
      'Format Expansion SOP',
      'Creative Territory SOP',
    ],
  },

  {
    id: 'risk',
    number: '05.11',
    title: 'Risk & Complexity Review',
    shortTitle: 'Risk Review',
    icon: 'decision',

    description:
      'Identify compliance, credibility, production, cost, timing, and operational risks before approving the angle.',

    questions: [
      'Does the angle create compliance risk?',
      'Are claims adequately supported?',
      'Could the message damage trust?',
      'Is specialized production required?',
      'Is the execution too expensive for an MVP test?',
      'Are specific creators or locations required?',
      'Can the angle be produced within the timeline?',
      'Can the risk be reduced without weakening the idea?',
    ],

    scoreLabels: [
      'Unacceptable risk',
      'High risk or complexity',
      'Manageable with changes',
      'Low risk and practical',
      'Very easy, credible, and safe to execute',
    ],

    requirements: [
      'Compliance review',
      'Credibility review',
      'Production cost',
      'Production timeline',
      'Asset availability',
    ],

    outputs: [
      'Risk score',
      'Complexity score',
      'Risk-reduction recommendations',
      'Production limitations',
    ],

    sops: [
      'Angle Risk Review SOP',
      'Compliance Review SOP',
      'Production Complexity SOP',
    ],
  },

  {
    id: 'final-decision',
    number: '05.12',
    title: 'Final Angle Decision',
    shortTitle: 'Final Decision',
    icon: 'validation',

    description:
      'Combine every validation score and determine whether the angle should advance, be refined, rejected, or stored for later.',

    questions: [
      'Does the angle meet the minimum evidence threshold?',
      'Is it strongly relevant to the persona?',
      'Does it create sufficient emotional strength?',
      'Is it clear and differentiated?',
      'Does it fit the product and offer?',
      'Can it generate strong hooks and visuals?',
      'Can it support multiple concepts?',
      'Are the risks manageable?',
    ],

    scoreLabels: [
      'Reject',
      'Needs major refinement',
      'Conditional approval',
      'Approved',
      'High-priority approval',
    ],

    requirements: [
      'Complete scorecard',
      'Evidence summary',
      'Target persona',
      'Core hypothesis',
      'Risk review',
    ],

    outputs: [
      'Approved angle',
      'Refinement instructions',
      'Rejection reason',
      'Priority level',
      'Concept-development brief',
    ],

    sops: [
      'Final Angle Decision SOP',
      'Angle Approval SOP',
      'Angle Refinement SOP',
    ],
  },
];

const validationStatus = [
  {
    id: 'approved',
    title: 'Approved',
    description:
      'The angle meets the evidence, relevance, clarity, execution, and risk thresholds.',
    icon: 'validation',
  },
  {
    id: 'refine',
    title: 'Needs Refinement',
    description:
      'The core opportunity is strong, but one or more weaknesses must be fixed.',
    icon: 'iteration',
  },
  {
    id: 'rejected',
    title: 'Rejected',
    description:
      'The angle lacks sufficient evidence, relevance, differentiation, or product fit.',
    icon: 'close',
  },
  {
    id: 'parked',
    title: 'Parked for Later',
    description:
      'The angle may become useful after new evidence, assets, offers, or market changes.',
    icon: 'knowledge',
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

function ValidationDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-validation-data-card">
      <div className="creative-op-validation-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-validation-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function ScorePreview({ labels }) {
  return (
    <section className="creative-op-validation-score-card">
      <div className="creative-op-validation-score-heading">
        <div>
          <span>SCORING SCALE</span>
          <h3>Validation Score</h3>
        </div>

        <strong>1–5</strong>
      </div>

      <div className="creative-op-validation-score-list">
        {labels.map((label, index) => (
          <div key={label}>
            <span>{index + 1}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ValidationDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('evidence');

  const [activeStatus, setActiveStatus] =
    useState('approved');

  const selectedSystem = useMemo(
    () =>
      validationSystems.find(
        (system) => system.id === selectedSystemId
      ) || validationSystems[0],
    [selectedSystemId]
  );

  return (
    <motion.section
      className="creative-op-validation-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-validation-topbar">
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

            <strong>Angle Validation</strong>
          </div>
        </div>

        <div className="creative-op-validation-heading">
          <span>STAGE 05 / DECISION</span>

          <h1>Angle Validation</h1>

          <p>
            Score every angle against evidence, persona relevance,
            emotional strength, differentiation, execution potential,
            scalability, and risk.
          </p>
        </div>

        <div className="creative-op-validation-counter">
          <strong>{validationSystems.length}</strong>
          <span>Validation systems</span>
        </div>
      </header>

      <div className="creative-op-validation-layout">
        <aside className="creative-op-validation-navigation">
          <div className="creative-op-validation-navigation-intro">
            <span>VALIDATION SYSTEMS</span>
            <h2>Choose a scoring layer</h2>
          </div>

          <nav>
            {validationSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-validation-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-validation-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-validation-nav-icon">
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

        <main className="creative-op-validation-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-validation-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-validation-selected-header">
                <div className="creative-op-validation-selected-icon">
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

              <section className="creative-op-validation-question-card">
                <div className="creative-op-validation-question-heading">
                  <div>
                    <span>VALIDATION FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-validation-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-validation-question-item"
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

              <ScorePreview
                labels={selectedSystem.scoreLabels}
              />

              <div className="creative-op-validation-bottom-grid">
                <ValidationDataCard
                  title="Requirements"
                  items={selectedSystem.requirements}
                  icon="briefing"
                />

                <ValidationDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-validation-sop-panel">
          <span className="creative-op-validation-sop-eyebrow">
            DECISION LAYER
          </span>

          <h2>Validation Outcomes</h2>

          <p>
            Every angle receives a clear outcome before concept
            development begins.
          </p>

          <div className="creative-op-validation-status-list">
            {validationStatus.map((status) => (
              <button
                type="button"
                key={status.id}
                className={`creative-op-validation-status-card ${
                  activeStatus === status.id
                    ? 'is-active'
                    : ''
                }`}
                onClick={() =>
                  setActiveStatus(status.id)
                }
              >
                <span>
                  <CreativeStrategyOPIcon
                    type={status.icon}
                    size={18}
                  />
                </span>

                <div>
                  <strong>{status.title}</strong>
                  <p>{status.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="creative-op-validation-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-validation-sop-card"
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

          <div className="creative-op-validation-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Prioritized Testing Queue</h3>

            <p>
              Only angles that pass the required thresholds move
              forward into concept development.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}