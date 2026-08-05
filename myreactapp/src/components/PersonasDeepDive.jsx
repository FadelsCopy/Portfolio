// src/components/PersonasDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const personaSystems = [
  {
    id: 'core-personas',
    number: '03.1',
    title: 'Core Persona Development',
    shortTitle: 'Core Personas',
    icon: 'personas',

    description:
      'Group repeated customer characteristics, problems, motivations, beliefs, and buying behavior into clear strategic personas.',

    questions: [
      'Which customer characteristics repeatedly appear together?',
      'Which problem is this persona primarily trying to solve?',
      'What outcome matters most to them?',
      'What motivates them to begin searching?',
      'What prevents them from buying?',
      'What alternatives have they already tried?',
      'What awareness level are they currently in?',
      'What message would feel most personally relevant?',
    ],

    attributes: [
      'Primary problem',
      'Desired outcome',
      'Emotional desire',
      'Identity goal',
      'Buying motivation',
      'Purchase trigger',
      'Primary objection',
      'Failed alternatives',
      'Awareness level',
      'Urgency level',
      'Preferred proof',
      'Customer language',
    ],

    outputs: [
      'Core persona cards',
      'Persona evidence',
      'Persona priorities',
      'Persona-specific messaging inputs',
      'Persona-specific angle inputs',
    ],

    sops: [
      'Core Persona Development SOP',
      'Persona Evidence SOP',
      'Persona Card Template',
    ],
  },

  {
    id: 'sub-personas',
    number: '03.2',
    title: 'Sub-Persona Development',
    shortTitle: 'Sub-Personas',
    icon: 'insights',

    description:
      'Identify meaningful variations inside a core persona based on circumstance, urgency, awareness, motivation, or desired outcome.',

    questions: [
      'Do customers with the same problem want different outcomes?',
      'Are there meaningful differences in urgency?',
      'Do different life stages change the buying motivation?',
      'Are some customers beginners while others are experienced?',
      'Do different failed alternatives create different skepticism?',
      'Does the buying context change the required message?',
      'Which differences justify separate creative?',
      'Which differences are too small to matter strategically?',
    ],

    attributes: [
      'Life stage',
      'Problem severity',
      'Desired outcome',
      'Purchase urgency',
      'Previous experience',
      'Failed alternatives',
      'Awareness level',
      'Buying context',
      'Emotional state',
      'Primary objection',
    ],

    outputs: [
      'Sub-persona cards',
      'Sub-persona distinctions',
      'Segment-specific messaging',
      'Segment-specific creative opportunities',
    ],

    sops: [
      'Sub-Persona Development SOP',
      'Persona Segmentation SOP',
      'Sub-Persona Validation SOP',
    ],
  },

  {
    id: 'awareness-segments',
    number: '03.3',
    title: 'Awareness Segmentation',
    shortTitle: 'Awareness',
    icon: 'research',

    description:
      'Organize customers based on what they currently understand about their problem, available solutions, and the product.',

    questions: [
      'Does the customer recognize the problem?',
      'Are they actively searching for a solution?',
      'Do they know the product category?',
      'Do they know the brand or product?',
      'Have they already compared alternatives?',
      'How skeptical are they?',
      'How much explanation is required?',
      'What must the creative make them believe next?',
    ],

    attributes: [
      'Unaware',
      'Problem aware',
      'Solution aware',
      'Product aware',
      'Most aware',
      'Required education',
      'Required proof',
      'Required belief shift',
    ],

    outputs: [
      'Awareness segment map',
      'Messaging by awareness level',
      'Format recommendations',
      'Funnel-stage recommendations',
    ],

    sops: [
      'Awareness Segmentation SOP',
      'Messaging by Awareness SOP',
      'Creative Format by Awareness SOP',
    ],
  },

  {
    id: 'buying-context',
    number: '03.4',
    title: 'Buying Context Mapping',
    shortTitle: 'Buying Context',
    icon: 'briefing',

    description:
      'Understand the circumstances, events, environments, and moments that shape when and why the customer buys.',

    questions: [
      'What happened immediately before the customer began searching?',
      'What event increased urgency?',
      'Is the purchase planned or reactive?',
      'Is the customer buying for themselves or someone else?',
      'What seasonal or life event affects the decision?',
      'What emotional state are they in?',
      'Where are they when they encounter the creative?',
      'What information must be available at that moment?',
    ],

    attributes: [
      'Trigger event',
      'Purchase environment',
      'Seasonality',
      'Life event',
      'Emotional state',
      'Decision timeline',
      'Device and platform',
      'Self-purchase or gift',
      'Immediate need',
      'Research behavior',
    ],

    outputs: [
      'Buying-context scenarios',
      'Trigger-based messaging',
      'Seasonal opportunities',
      'Context-specific creative concepts',
    ],

    sops: [
      'Buying Context SOP',
      'Trigger Event SOP',
      'Seasonal Context SOP',
    ],
  },

  {
    id: 'pain-urgency',
    number: '03.5',
    title: 'Pain & Urgency Mapping',
    shortTitle: 'Pain & Urgency',
    icon: 'decision',

    description:
      'Score how intensely each persona experiences the problem and how quickly they are motivated to act.',

    questions: [
      'How frequently does the customer experience the problem?',
      'How disruptive is it?',
      'What emotional cost does it create?',
      'What happens if the customer delays action?',
      'Has the problem recently become worse?',
      'Is there a deadline or upcoming event?',
      'How actively are they searching?',
      'What would make the problem urgent today?',
    ],

    attributes: [
      'Pain frequency',
      'Pain severity',
      'Emotional cost',
      'Social cost',
      'Financial cost',
      'Urgency trigger',
      'Search intensity',
      'Time sensitivity',
    ],

    outputs: [
      'Pain-intensity score',
      'Urgency score',
      'High-intent persona segments',
      'Urgency messaging opportunities',
    ],

    sops: [
      'Pain & Urgency Scoring SOP',
      'High-Intent Segment SOP',
      'Urgency Trigger SOP',
    ],
  },

  {
    id: 'persona-priority',
    number: '03.6',
    title: 'Persona Prioritization',
    shortTitle: 'Prioritization',
    icon: 'validation',

    description:
      'Determine which personas deserve the greatest creative attention based on evidence, market size, urgency, and product fit.',

    questions: [
      'How much evidence supports this persona?',
      'How common is the persona within the market?',
      'How urgent is the problem?',
      'How strongly does the product fit their need?',
      'How differentiated can the message become?',
      'How many angles can this persona support?',
      'How expensive or difficult are they to reach?',
      'Does the persona align with current business goals?',
    ],

    attributes: [
      'Research evidence',
      'Market size',
      'Problem urgency',
      'Product fit',
      'Offer fit',
      'Message differentiation',
      'Creative expansion potential',
      'Business priority',
    ],

    outputs: [
      'Persona priority score',
      'Primary testing personas',
      'Secondary testing personas',
      'Personas parked for later',
    ],

    sops: [
      'Persona Prioritization SOP',
      'Persona Scoring Template',
      'Testing Priority SOP',
    ],
  },

  {
    id: 'messaging-opportunities',
    number: '03.7',
    title: 'Messaging Opportunity Mapping',
    shortTitle: 'Messaging',
    icon: 'angles',

    description:
      'Translate persona characteristics into specific messaging territories that can later become angles and concepts.',

    questions: [
      'Which pain should be addressed first?',
      'Which outcome creates the strongest desire?',
      'Which belief must change?',
      'Which objection must be resolved?',
      'Which emotional transition matters most?',
      'Which language feels specific to the persona?',
      'Which message competitors are ignoring?',
      'Which message can support multiple creative concepts?',
    ],

    attributes: [
      'Problem message',
      'Desire message',
      'Identity message',
      'Belief-shift message',
      'Objection message',
      'Mechanism message',
      'Proof message',
      'Transformation message',
    ],

    outputs: [
      'Persona messaging matrix',
      'Priority messaging territories',
      'Angle-development inputs',
      'Creative hypothesis inputs',
    ],

    sops: [
      'Messaging Opportunity SOP',
      'Persona Messaging Matrix',
      'Research-to-Messaging SOP',
    ],
  },

  {
    id: 'tam-expansion',
    number: '03.8',
    title: 'TAM Expansion Mapping',
    shortTitle: 'TAM Expansion',
    icon: 'scaling',

    description:
      'Identify adjacent customers, new use cases, new buying situations, and underserved segments that could expand the total addressable market.',

    questions: [
      'Who else experiences a related problem?',
      'Can the product solve a secondary use case?',
      'Are there adjacent age, lifestyle, or identity segments?',
      'Can a different desired outcome create a new market?',
      'Can the product be reframed for a different awareness level?',
      'Are competitors ignoring a valuable segment?',
      'Could gifting or household purchasing expand demand?',
      'Which expansion opportunity has enough evidence to test?',
    ],

    attributes: [
      'Adjacent persona',
      'Secondary use case',
      'New desired outcome',
      'New buying context',
      'New awareness segment',
      'Gift buyer',
      'Household buyer',
      'Underserved segment',
    ],

    outputs: [
      'TAM expansion opportunities',
      'Adjacent persona hypotheses',
      'New use-case hypotheses',
      'Expansion testing queue',
    ],

    sops: [
      'TAM Expansion SOP',
      'Adjacent Persona SOP',
      'New Use-Case Testing SOP',
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

function PersonaDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-persona-data-card">
      <div className="creative-op-persona-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-persona-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function PersonasDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('core-personas');

  const selectedSystem =
    personaSystems.find(
      (system) => system.id === selectedSystemId
    ) || personaSystems[0];

  return (
    <motion.section
      className="creative-op-personas-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-personas-topbar">
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

            <strong>Persona & Opportunity Mapping</strong>
          </div>
        </div>

        <div className="creative-op-personas-heading">
          <span>STAGE 03 / STRATEGY</span>

          <h1>Persona & Opportunity Mapping</h1>

          <p>
            Organize customer intelligence into actionable personas,
            sub-personas, buying contexts, priorities, and strategic
            opportunities.
          </p>
        </div>

        <div className="creative-op-personas-counter">
          <strong>{personaSystems.length}</strong>
          <span>Persona systems</span>
        </div>
      </header>

      <div className="creative-op-personas-layout">
        <aside className="creative-op-personas-navigation">
          <div className="creative-op-personas-navigation-intro">
            <span>PERSONA SYSTEMS</span>
            <h2>Choose a mapping layer</h2>
          </div>

          <nav>
            {personaSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-persona-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-persona-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-persona-nav-icon">
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

        <main className="creative-op-personas-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-personas-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-personas-selected-header">
                <div className="creative-op-personas-selected-icon">
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

              <section className="creative-op-persona-question-card">
                <div className="creative-op-persona-question-heading">
                  <div>
                    <span>MAPPING FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-persona-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-persona-question-item"
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

              <div className="creative-op-personas-bottom-grid">
                <PersonaDataCard
                  title="Persona Attributes"
                  items={selectedSystem.attributes}
                  icon="personas"
                />

                <PersonaDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-personas-sop-panel">
          <span className="creative-op-personas-sop-eyebrow">
            DOCUMENTATION LAYER
          </span>

          <h2>SOP Library</h2>

          <p>
            Every mapping layer will connect to a complete template,
            evidence checklist, examples, scoring criteria, and AI
            prompts.
          </p>

          <div className="creative-op-personas-sop-list">
            {selectedSystem.sops.map((sop) => (
              <div
                className="creative-op-personas-sop-card"
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

          <div className="creative-op-personas-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Persona & Opportunity Library</h3>

            <p>
              Validated customer segments are transformed into
              persona cards, messaging opportunities, angle inputs,
              creative priorities, and market-expansion hypotheses.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}