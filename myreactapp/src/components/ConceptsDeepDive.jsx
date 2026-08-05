// src/components/ConceptsDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const conceptSystems = [
  {
    id: 'hypothesis',
    number: '06.1',
    title: 'Creative Hypothesis',
    shortTitle: 'Hypothesis',
    icon: 'insights',

    description:
      'Define the exact strategic belief being tested and the expected customer response before developing the execution.',

    questions: [
      'Which persona is this concept targeting?',
      'Which approved angle is being tested?',
      'What customer belief are we trying to create or change?',
      'What emotional response should the concept produce?',
      'What action should the customer take?',
      'Why should this idea perform?',
      'What evidence supports the hypothesis?',
      'What result would validate or reject it?',
    ],

    components: [
      'Target persona',
      'Awareness level',
      'Approved angle',
      'Customer problem',
      'Desired outcome',
      'Belief shift',
      'Expected emotion',
      'Expected action',
      'Supporting evidence',
      'Success criteria',
    ],

    outputs: [
      'Creative hypothesis statement',
      'Testing question',
      'Expected customer response',
      'Success criteria',
    ],

    example:
      'If we show problem-aware women that surface treatments fail because they never reach the follicle, then they will see the inside-out mechanism as more credible and become more likely to click.',

    sops: [
      'Creative Hypothesis SOP',
      'Testing Question SOP',
      'Hypothesis Evidence SOP',
    ],
  },

  {
    id: 'format',
    number: '06.2',
    title: 'Format Selection',
    shortTitle: 'Format',
    icon: 'production',

    description:
      'Choose the creative format most capable of communicating the angle, proof, mechanism, story, and desired customer response.',

    questions: [
      'Does the angle require education or immediate impact?',
      'Does the concept need a creator, founder, expert, or narrator?',
      'Can the idea be understood as a static image?',
      'Does the mechanism require demonstration?',
      'Does the story require long-form execution?',
      'Which format fits the awareness level?',
      'Which format fits the platform?',
      'What can be produced quickly and credibly?',
    ],

    components: [
      'UGC',
      'Founder ad',
      'Native ad',
      'Static ad',
      'Mini-VSL',
      'Long-form VSL',
      'Advertorial',
      'Listicle',
      'Testimonial',
      'Demonstration',
      'Podcast style',
      'Street interview',
      'Skit',
      'AI UGC',
      'Authority ad',
    ],

    outputs: [
      'Primary format',
      'Secondary format',
      'Platform recommendation',
      'Production requirements',
    ],

    example:
      'Use a 45-second UGC demonstration for Meta because the mechanism requires visual explanation, customer relatability, and visible proof.',

    sops: [
      'Format Selection SOP',
      'Format by Awareness SOP',
      'Platform Format SOP',
    ],
  },

  {
    id: 'hook',
    number: '06.3',
    title: 'Hook Development',
    shortTitle: 'Hooks',
    icon: 'angles',

    description:
      'Create multiple opening directions that communicate relevance, curiosity, emotion, proof, or visual interruption within the first seconds.',

    questions: [
      'What makes the persona stop immediately?',
      'Can the problem be shown before it is explained?',
      'Can a customer quote become the hook?',
      'Can proof lead the opening?',
      'Can the angle create curiosity without confusion?',
      'What is the strongest visual opening?',
      'Can the hook work without sound?',
      'How many meaningfully different hook directions can be created?',
    ],

    components: [
      'Direct problem hook',
      'Desire hook',
      'Curiosity hook',
      'Contrarian hook',
      'Proof hook',
      'Question hook',
      'Story hook',
      'Visual hook',
      'Demonstration hook',
      'Customer quote hook',
      'Comparison hook',
      'Identity hook',
    ],

    outputs: [
      'Primary hook',
      'Hook variations',
      'Opening visual',
      'Hook testing plan',
    ],

    example:
      'If your shower drain looks like this every morning, what you are putting on your hair may be the reason nothing is changing.',

    sops: [
      'Hook Development SOP',
      'Hook Family SOP',
      'Visual Hook SOP',
    ],
  },

  {
    id: 'narrative',
    number: '06.4',
    title: 'Narrative Structure',
    shortTitle: 'Narrative',
    icon: 'briefing',

    description:
      'Organize the concept into a clear sequence that moves the customer from attention to understanding, belief, desire, and action.',

    questions: [
      'What must the customer understand first?',
      'What tension keeps them watching?',
      'When should the product be introduced?',
      'When should the mechanism be explained?',
      'Where should proof appear?',
      'What objection must be handled?',
      'What emotional progression should occur?',
      'What final reason makes action feel logical?',
    ],

    components: [
      'Hook',
      'Problem',
      'Agitation',
      'Failed alternative',
      'Discovery',
      'Mechanism',
      'Product introduction',
      'Benefits',
      'Proof',
      'Objection handling',
      'Offer',
      'CTA',
    ],

    outputs: [
      'Narrative outline',
      'Scene sequence',
      'Message hierarchy',
      'Script direction',
    ],

    example:
      'Hook → visible shedding problem → explain why surface solutions fail → reveal follicle-level mechanism → introduce product → show proof → remove risk → CTA.',

    sops: [
      'Narrative Structure SOP',
      'Story Flow SOP',
      'Message Hierarchy SOP',
    ],
  },

  {
    id: 'proof',
    number: '06.5',
    title: 'Proof Strategy',
    shortTitle: 'Proof',
    icon: 'validation',

    description:
      'Select the most persuasive evidence needed to support the central claim and reduce skepticism.',

    questions: [
      'What claim requires proof?',
      'Which proof is most relevant to the persona?',
      'Is visual proof available?',
      'Can the product be demonstrated?',
      'Is there a credible customer result?',
      'Can numbers or study results increase trust?',
      'Is expert or authority proof appropriate?',
      'Where should proof appear in the concept?',
    ],

    components: [
      'Customer testimonial',
      'Before-and-after',
      'Product demonstration',
      'Study result',
      'Consumer study',
      'Expert endorsement',
      'Review count',
      'Star rating',
      'Sales volume',
      'Repeat-purchase proof',
      'Founder credibility',
      'Ingredient proof',
    ],

    outputs: [
      'Primary proof asset',
      'Secondary proof',
      'Proof placement',
      'Credibility requirements',
    ],

    example:
      'Lead with a visible 30-day transformation, then reinforce it using the consumer-study result and the 100-day guarantee.',

    sops: [
      'Proof Strategy SOP',
      'Proof Selection SOP',
      'Proof Placement SOP',
    ],
  },

  {
    id: 'visual-device',
    number: '06.6',
    title: 'Visual Device',
    shortTitle: 'Visual Device',
    icon: 'concepts',

    description:
      'Define the visual mechanism that makes the concept understandable, memorable, and native to the platform.',

    questions: [
      'What visual communicates the concept fastest?',
      'Can the problem be physically shown?',
      'Can contrast make the difference obvious?',
      'Can a prop or metaphor explain the mechanism?',
      'Can text-on-screen carry the core message?',
      'Can the visual work in the first second?',
      'Can the device be repeated across variations?',
      'Is the visual realistic to produce?',
    ],

    components: [
      'Before-and-after',
      'Split screen',
      'Product demonstration',
      'Physical metaphor',
      'Green-screen commentary',
      'Screen recording',
      'Customer review overlay',
      'Pattern interrupt',
      'Transformation timeline',
      'Comparison table',
      'Problem close-up',
      'Product-in-use footage',
    ],

    outputs: [
      'Primary visual device',
      'Opening visual',
      'Supporting visual system',
      'Asset requirements',
    ],

    example:
      'Use a split-screen showing surface products on one side and follicle nutrition on the other to explain the inside-out mechanism.',

    sops: [
      'Visual Device SOP',
      'Visual Metaphor SOP',
      'Pattern Interrupt SOP',
    ],
  },

  {
    id: 'offer',
    number: '06.7',
    title: 'Offer Integration',
    shortTitle: 'Offer',
    icon: 'foundation',

    description:
      'Connect the product offer to the concept naturally so the commercial message strengthens rather than interrupts the creative.',

    questions: [
      'Which offer is most relevant to this persona?',
      'When should the offer appear?',
      'Does the offer resolve a key objection?',
      'Can the bundle strengthen perceived value?',
      'Does the guarantee reduce risk?',
      'Is urgency credible?',
      'Does the offer match the awareness level?',
      'Can the offer become part of the hook or proof?',
    ],

    components: [
      'Product price',
      'Discount',
      'Bundle',
      'Subscription',
      'Guarantee',
      'Free trial',
      'Free gift',
      'Bonus',
      'Shipping offer',
      'Limited stock',
      'Deadline',
      'Risk reversal',
    ],

    outputs: [
      'Offer selection',
      'Offer placement',
      'Value framing',
      'Risk-reversal message',
    ],

    example:
      'Frame the three-month bundle as one dollar per day, include the free brush, and close with the 100-day money-back guarantee.',

    sops: [
      'Offer Integration SOP',
      'Value Framing SOP',
      'Risk-Reversal Integration SOP',
    ],
  },

  {
    id: 'cta',
    number: '06.8',
    title: 'CTA Development',
    shortTitle: 'CTA',
    icon: 'launch',

    description:
      'Create a clear final action that matches the customer’s awareness, motivation, objection level, and stage of the journey.',

    questions: [
      'What is the correct next action?',
      'Does the CTA match the awareness level?',
      'Should the customer buy, learn, register, or compare?',
      'What reason should they act now?',
      'Can the CTA reinforce the primary benefit?',
      'Can risk reversal strengthen the CTA?',
      'Is the CTA specific?',
      'Is it visible and repeated appropriately?',
    ],

    components: [
      'Shop now',
      'Order now',
      'Learn more',
      'Read the full story',
      'Watch the demonstration',
      'Take the quiz',
      'Claim the offer',
      'Start the trial',
      'Get the bundle',
      'See customer results',
      'Register free',
      'Check availability',
    ],

    outputs: [
      'Primary CTA',
      'CTA variation',
      'Urgency statement',
      'Risk-reversal support',
    ],

    example:
      'Tap below to try it for 100 days. If your hair does not change, you pay nothing.',

    sops: [
      'CTA Development SOP',
      'CTA by Awareness SOP',
      'Urgency & Risk-Reversal SOP',
    ],
  },

  {
    id: 'concept-card',
    number: '06.9',
    title: 'Concept Card Assembly',
    shortTitle: 'Concept Card',
    icon: 'knowledge',

    description:
      'Combine all strategic and execution decisions into one documented concept card before briefing or production begins.',

    questions: [
      'Is the target persona clearly defined?',
      'Is the approved angle documented?',
      'Is the hypothesis testable?',
      'Is the format appropriate?',
      'Are hook directions included?',
      'Is the narrative clear?',
      'Are proof and visual requirements defined?',
      'Can production execute without guessing?',
    ],

    components: [
      'Concept name',
      'Target persona',
      'Awareness level',
      'Approved angle',
      'Creative hypothesis',
      'Format',
      'Hook options',
      'Narrative',
      'Proof',
      'Visual device',
      'Offer',
      'CTA',
      'Success criteria',
    ],

    outputs: [
      'Complete concept card',
      'Production recommendation',
      'Testing recommendation',
      'Asset requirement list',
    ],

    example:
      'Concept: Surface Solutions Fail — UGC mechanism demonstration for problem-aware women experiencing excessive shedding.',

    sops: [
      'Concept Card SOP',
      'Concept Documentation Template',
      'Concept Handoff SOP',
    ],
  },

  {
    id: 'approval',
    number: '06.10',
    title: 'Concept Review & Approval',
    shortTitle: 'Approval',
    icon: 'decision',

    description:
      'Review the completed concept for strategic alignment, production feasibility, clarity, testing value, and business relevance.',

    questions: [
      'Does the concept test one clear hypothesis?',
      'Does it preserve the approved angle?',
      'Is the execution appropriate for the persona?',
      'Can the team produce it with available resources?',
      'Does the concept include enough proof?',
      'Is the concept differentiated?',
      'Will the result create useful learning?',
      'Should it move into MVP testing or full briefing?',
    ],

    components: [
      'Strategic alignment',
      'Angle preservation',
      'Production feasibility',
      'Testing clarity',
      'Message clarity',
      'Proof strength',
      'Asset availability',
      'Business priority',
    ],

    outputs: [
      'Approved concept',
      'Concept revision request',
      'Rejected concept',
      'Production priority',
    ],

    example:
      'Approved for MVP testing with three hook variations and one simplified demonstration execution.',

    sops: [
      'Concept Review SOP',
      'Concept Approval SOP',
      'Concept Revision SOP',
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

function ConceptDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-concept-data-card">
      <div className="creative-op-concept-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-concept-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function ConceptsDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('hypothesis');

  const selectedSystem =
    conceptSystems.find(
      (system) => system.id === selectedSystemId
    ) || conceptSystems[0];

  return (
    <motion.section
      className="creative-op-concepts-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-concepts-topbar">
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

            <strong>Concept Development</strong>
          </div>
        </div>

        <div className="creative-op-concepts-heading">
          <span>STAGE 06 / CREATIVE DEVELOPMENT</span>

          <h1>Concept Development</h1>

          <p>
            Turn approved angles into specific, testable creative
            ideas with a clear hypothesis, hook, narrative, proof,
            visual direction, offer, and CTA.
          </p>
        </div>

        <div className="creative-op-concepts-counter">
          <strong>{conceptSystems.length}</strong>
          <span>Concept systems</span>
        </div>
      </header>

      <div className="creative-op-concepts-layout">
        <aside className="creative-op-concepts-navigation">
          <div className="creative-op-concepts-navigation-intro">
            <span>CONCEPT SYSTEMS</span>
            <h2>Build the creative idea</h2>
          </div>

          <nav>
            {conceptSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-concept-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-concept-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-concept-nav-icon">
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

        <main className="creative-op-concepts-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-concepts-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-concepts-selected-header">
                <div className="creative-op-concepts-selected-icon">
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

              <section className="creative-op-concept-question-card">
                <div className="creative-op-concept-question-heading">
                  <div>
                    <span>CONCEPT DEVELOPMENT FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-concept-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-concept-question-item"
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

              <section className="creative-op-concept-example-card">
                <div className="creative-op-concept-example-icon">
                  <CreativeStrategyOPIcon
                    type="concepts"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE OUTPUT</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-concepts-bottom-grid">
                <ConceptDataCard
                  title="Concept Components"
                  items={selectedSystem.components}
                  icon="briefing"
                />

                <ConceptDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-concepts-sop-panel">
          <span className="creative-op-concepts-sop-eyebrow">
            DOCUMENTATION LAYER
          </span>

          <h2>SOP Library</h2>

          <p>
            Every concept-development system will connect to a
            framework, template, examples, checklist, and AI prompt
            library.
          </p>

          <div className="creative-op-concepts-sop-list">
            {selectedSystem.sops.map((sop) => (
              <div
                className="creative-op-concepts-sop-card"
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

          <div className="creative-op-concepts-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Approved Concept Card</h3>

            <p>
              A complete creative concept containing the persona,
              angle, hypothesis, format, hooks, narrative, proof,
              visual direction, offer, CTA, and testing objective.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}