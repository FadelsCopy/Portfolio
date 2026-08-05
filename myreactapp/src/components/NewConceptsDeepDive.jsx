// src/components/NewConceptsDeepDive.jsx

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const newConceptSystems = [
  {
    id: 'signal-collection',
    number: '15.1',
    title: 'Continuous Signal Collection',
    shortTitle: 'Signal Collection',
    icon: 'research',

    description:
      'Continuously collect fresh market, customer, competitor, platform, product, and cultural signals that may generate new creative opportunities.',

    questions: [
      'Which customer conversations are changing?',
      'What new objections are appearing?',
      'Which competitor messages are gaining traction?',
      'What organic content is receiving unusual engagement?',
      'Are new product-use cases emerging?',
      'Are seasonal or cultural shifts changing demand?',
      'Which support or sales questions repeat frequently?',
      'Where are new signals being documented?',
    ],

    inputs: [
      'Customer reviews',
      'Ad comments',
      'Organic comments',
      'Reddit discussions',
      'TikTok trends',
      'Competitor ads',
      'Support tickets',
      'Sales calls',
      'Survey responses',
      'Search trends',
      'Product feedback',
      'Industry news',
    ],

    outputs: [
      'Weekly signal log',
      'Emerging-pattern list',
      'New customer-language bank',
      'Potential concept opportunities',
    ],

    example:
      'Repeated customer comments about postpartum shedding become a new sub-persona and concept opportunity instead of remaining only as isolated feedback.',

    sops: [
      'Continuous Research SOP',
      'Creative Signal Collection SOP',
      'Weekly Signal Log Template',
    ],
  },

  {
    id: 'opportunity-detection',
    number: '15.2',
    title: 'Opportunity Detection',
    shortTitle: 'Opportunities',
    icon: 'insights',

    description:
      'Turn raw signals into clear creative opportunities by identifying repeated tensions, desires, misunderstandings, objections, and market gaps.',

    questions: [
      'Which signals appear repeatedly?',
      'Is the signal connected to a meaningful customer problem?',
      'Does it reveal an unmet desire?',
      'Does it expose a misunderstood mechanism?',
      'Does it reveal a new objection?',
      'Is the opportunity commercially relevant?',
      'Can the product credibly address it?',
      'Is there enough evidence to explore it further?',
    ],

    inputs: [
      'Repeated pain point',
      'Emerging desire',
      'New objection',
      'New use case',
      'Customer misconception',
      'Competitor weakness',
      'Category frustration',
      'Unserved persona',
      'New proof opportunity',
      'Behavior change',
    ],

    outputs: [
      'Creative opportunity statement',
      'Supporting evidence',
      'Target customer context',
      'Recommended exploration path',
    ],

    example:
      'Customers are not only worried about hair loss. Many are frustrated by the visible hair left inside the shower drain every morning.',

    sops: [
      'Creative Opportunity SOP',
      'Signal-to-Opportunity SOP',
      'Opportunity Evidence SOP',
    ],
  },

  {
    id: 'angle-sourcing',
    number: '15.3',
    title: 'New Angle Sourcing',
    shortTitle: 'Angle Sourcing',
    icon: 'angles',

    description:
      'Generate new strategic angles from customer evidence rather than creating random surface-level variations.',

    questions: [
      'Which persona does the angle target?',
      'Which problem or desire does it activate?',
      'What belief does it challenge?',
      'Does it reveal a new mechanism?',
      'Can it use a new proof direction?',
      'Does it address an underused objection?',
      'Is the angle different from current active concepts?',
      'Can it support multiple creative executions?',
    ],

    inputs: [
      'Problem angle',
      'Desire angle',
      'Identity angle',
      'Transformation angle',
      'Mechanism angle',
      'Objection angle',
      'Proof angle',
      'Contrarian angle',
      'Comparison angle',
      'Story angle',
      'Use-case angle',
      'Urgency angle',
    ],

    outputs: [
      'New angle candidates',
      'Angle evidence summary',
      'Target persona',
      'Concept expansion potential',
    ],

    example:
      'Move from the broad angle “support stronger hair” to the more specific angle “why surface treatments never reach the place where growth begins.”',

    sops: [
      'New Angle Sourcing SOP',
      'Research-to-Angle SOP',
      'Angle Expansion SOP',
    ],
  },

  {
    id: 'competitor-patterns',
    number: '15.4',
    title: 'Competitor Pattern Analysis',
    shortTitle: 'Competitor Patterns',
    icon: 'analysis',

    description:
      'Study competitor creative patterns to identify saturated messages, emerging formats, reusable structures, and strategic gaps.',

    questions: [
      'Which competitor concepts appear repeatedly?',
      'Which ads appear to be running for long periods?',
      'Which messages are heavily saturated?',
      'Which formats are competitors relying on?',
      'What customer problem is everyone ignoring?',
      'Which proof types dominate the market?',
      'What can be adapted without copying?',
      'Where can the brand create meaningful differentiation?',
    ],

    inputs: [
      'Long-running ads',
      'Repeated hooks',
      'Repeated claims',
      'Dominant formats',
      'Offer patterns',
      'Visual patterns',
      'Creator patterns',
      'Mechanism patterns',
      'Landing-page patterns',
      'Competitor blind spots',
    ],

    outputs: [
      'Competitor pattern map',
      'Saturation warning list',
      'Creative gap opportunities',
      'Differentiation recommendations',
    ],

    example:
      'When every competitor leads with generic before-and-after imagery, the brand can differentiate through a mechanism-led demonstration.',

    sops: [
      'Competitor Pattern SOP',
      'Creative Saturation SOP',
      'Competitor Gap Analysis SOP',
    ],
  },

  {
    id: 'organic-mining',
    number: '15.5',
    title: 'Organic Content Mining',
    shortTitle: 'Organic Mining',
    icon: 'newConcepts',

    description:
      'Use high-performing organic content to discover hooks, stories, demonstrations, visual devices, creator styles, and cultural language.',

    questions: [
      'Which organic posts are receiving unusual engagement?',
      'What happens in the first three seconds?',
      'Which comments reveal customer interest?',
      'Is the performance driven by the topic or execution?',
      'Can the structure support a commercial message?',
      'Does the content feel native to the target platform?',
      'Can the pattern be adapted without directly copying?',
      'Can the idea support paid-media testing?',
    ],

    inputs: [
      'Viral TikToks',
      'Instagram Reels',
      'YouTube Shorts',
      'Creator posts',
      'Comment threads',
      'Story formats',
      'Demonstrations',
      'Visual metaphors',
      'Trend structures',
      'Native editing styles',
    ],

    outputs: [
      'Organic inspiration library',
      'Adaptable hook patterns',
      'Native format opportunities',
      'Paid concept candidates',
    ],

    example:
      'A viral shower-routine video structure can become a paid mechanism concept while changing the script, product integration, proof, and CTA.',

    sops: [
      'Organic Content Mining SOP',
      'Viral Pattern Analysis SOP',
      'Organic-to-Paid Adaptation SOP',
    ],
  },

  {
    id: 'customer-language',
    number: '15.6',
    title: 'Customer Language Mining',
    shortTitle: 'Customer Language',
    icon: 'personas',

    description:
      'Extract exact customer words, emotional phrases, metaphors, objections, questions, and desired outcomes for use in new concepts.',

    questions: [
      'Which phrases appear repeatedly?',
      'How do customers describe the problem emotionally?',
      'Which words do they use instead of brand terminology?',
      'What specific moments trigger frustration?',
      'How do they describe the desired result?',
      'Which failed alternatives do they mention?',
      'Which questions reveal uncertainty?',
      'Which phrases can become hooks or headlines?',
    ],

    inputs: [
      'Pain phrases',
      'Desire phrases',
      'Identity language',
      'Objections',
      'Questions',
      'Failed alternatives',
      'Emotional metaphors',
      'Use-case descriptions',
      'Transformation language',
      'Purchase motivations',
    ],

    outputs: [
      'Voice-of-customer library',
      'New hook language',
      'Message opportunities',
      'Customer-quote concepts',
    ],

    example:
      'The phrase “I dread washing my hair because I know what I will see in the drain” becomes a stronger concept seed than generic hair-loss language.',

    sops: [
      'Customer Language Mining SOP',
      'Voice-of-Customer SOP',
      'Customer Quote Concept SOP',
    ],
  },

  {
    id: 'territories',
    number: '15.7',
    title: 'Concept Territory Development',
    shortTitle: 'Territories',
    icon: 'concepts',

    description:
      'Group related insights and angles into expandable creative territories rather than treating every idea as an isolated asset.',

    questions: [
      'What central strategic idea connects the concepts?',
      'Which persona owns this territory?',
      'Which belief shift defines it?',
      'Can the territory support multiple hooks?',
      'Can it support multiple formats?',
      'Can it support different creators?',
      'Can it expand across awareness levels?',
      'Is the territory distinct from existing winners?',
    ],

    inputs: [
      'Core strategic idea',
      'Target persona',
      'Primary problem',
      'Primary desire',
      'Belief shift',
      'Mechanism',
      'Proof direction',
      'Hook families',
      'Format opportunities',
      'Expansion paths',
    ],

    outputs: [
      'Concept territory',
      'Territory positioning',
      'Initial concept family',
      'Expansion map',
    ],

    example:
      'The “surface solutions fail” territory can produce demonstrations, customer stories, expert explainers, statics, mini-VSLs, and advertorials.',

    sops: [
      'Concept Territory SOP',
      'Creative Territory Mapping SOP',
      'Concept Family SOP',
    ],
  },

  {
    id: 'novelty-check',
    number: '15.8',
    title: 'Novelty & Duplication Check',
    shortTitle: 'Novelty Check',
    icon: 'validation',

    description:
      'Confirm that the proposed concept adds meaningful strategic novelty instead of repeating an existing concept with superficial changes.',

    questions: [
      'Has this idea already been tested?',
      'Is the angle actually new?',
      'Does it target a different persona?',
      'Does it introduce a new belief shift?',
      'Does it use a different mechanism?',
      'Is only the visual execution changing?',
      'Does it duplicate a competitor-saturated message?',
      'What genuinely new learning can it generate?',
    ],

    inputs: [
      'Existing concept library',
      'Previous test results',
      'Active creative portfolio',
      'Competitor concepts',
      'Current hook library',
      'Current persona coverage',
      'Current angle coverage',
      'Format history',
      'Learning history',
      'Saturation signals',
    ],

    outputs: [
      'Novelty score',
      'Duplication warning',
      'Unique testing variable',
      'Concept differentiation note',
    ],

    example:
      'Changing only the creator and background does not make an old concept strategically new when the angle, hook, body, proof, and offer remain unchanged.',

    sops: [
      'Concept Novelty SOP',
      'Duplication Check SOP',
      'Creative Library Review SOP',
    ],
  },

  {
    id: 'prioritization',
    number: '15.9',
    title: 'New Concept Prioritization',
    shortTitle: 'Prioritization',
    icon: 'decision',

    description:
      'Rank new concept opportunities by evidence, novelty, business impact, customer relevance, production effort, and testing value.',

    questions: [
      'How strong is the supporting evidence?',
      'How relevant is the concept to a priority persona?',
      'How different is it from current creative?',
      'How large is the potential business impact?',
      'Can the idea be tested quickly?',
      'Does it improve portfolio diversification?',
      'Can it support future expansion?',
      'What should enter the testing queue first?',
    ],

    inputs: [
      'Evidence strength',
      'Persona relevance',
      'Emotional strength',
      'Novelty',
      'Product fit',
      'Hook potential',
      'Visual potential',
      'Production effort',
      'Learning value',
      'Expansion potential',
    ],

    outputs: [
      'Prioritized concept queue',
      'High-priority concepts',
      'Secondary concepts',
      'Parked opportunities',
    ],

    example:
      'Prioritize a highly evidenced new sub-persona concept over a visually interesting idea with no meaningful customer support.',

    sops: [
      'New Concept Prioritization SOP',
      'Concept Scoring SOP',
      'Opportunity Queue SOP',
    ],
  },

  {
    id: 'mvp-handoff',
    number: '15.10',
    title: 'MVP Handoff',
    shortTitle: 'MVP Handoff',
    icon: 'briefing',

    description:
      'Turn the highest-priority new concept into a focused testing package that can move into validation, concept development, and MVP production.',

    questions: [
      'Is the target persona defined?',
      'Is the angle documented?',
      'Is the evidence attached?',
      'Is the core hypothesis clear?',
      'Is the minimum execution identified?',
      'Are initial hook directions included?',
      'Is the required proof available?',
      'What result would validate the concept?',
    ],

    inputs: [
      'Concept name',
      'Target persona',
      'Customer evidence',
      'Angle',
      'Belief shift',
      'Creative hypothesis',
      'Hook directions',
      'Format recommendation',
      'Proof requirement',
      'Success criteria',
    ],

    outputs: [
      'New concept card',
      'Validation package',
      'MVP recommendation',
      'Testing handoff',
    ],

    example:
      'Hand off one clearly defined concept with three initial hook directions instead of sending production a folder of unrelated ideas.',

    sops: [
      'New Concept Handoff SOP',
      'MVP Concept Package SOP',
      'Concept Card Template',
    ],
  },

  {
    id: 'pipeline-health',
    number: '15.11',
    title: 'Pipeline Health Monitoring',
    shortTitle: 'Pipeline Health',
    icon: 'analysis',

    description:
      'Monitor whether the system contains enough fresh, validated, differentiated concepts to support future testing and replace creative fatigue.',

    questions: [
      'How many new opportunities entered the system?',
      'How many concepts reached validation?',
      'How many concepts reached MVP testing?',
      'How many became promising or winning territories?',
      'Is the pipeline dependent on one research source?',
      'Are concepts becoming repetitive?',
      'Is production consuming ideas faster than research creates them?',
      'Where is the pipeline blocked?',
    ],

    inputs: [
      'New signals collected',
      'Opportunities identified',
      'Angles generated',
      'Territories developed',
      'Concepts prioritized',
      'Concepts validated',
      'MVPs launched',
      'Promising concepts',
      'Winning concepts',
      'Pipeline bottlenecks',
    ],

    outputs: [
      'Pipeline health status',
      'Concept inventory',
      'Pipeline bottleneck',
      'Next research priority',
    ],

    example:
      'A full production calendar can still hide an unhealthy pipeline when nearly every asset is only an iteration of one aging concept.',

    sops: [
      'Concept Pipeline Health SOP',
      'Creative Inventory SOP',
      'Pipeline Bottleneck SOP',
    ],
  },

  {
    id: 'weekly-refresh',
    number: '15.12',
    title: 'Weekly Pipeline Refresh',
    shortTitle: 'Weekly Refresh',
    icon: 'operations',

    description:
      'Review new signals, opportunities, concept territories, priorities, blocked items, and the next batch of concepts every week.',

    questions: [
      'What new signals appeared this week?',
      'Which opportunities deserve deeper research?',
      'Which new angles were generated?',
      'Which concepts should enter validation?',
      'Which ideas should be parked or rejected?',
      'Which portfolio gaps remain?',
      'Which research source should be explored next?',
      'What enters next week’s concept queue?',
    ],

    inputs: [
      'Weekly signal review',
      'Opportunity review',
      'Angle review',
      'Territory review',
      'Novelty review',
      'Priority review',
      'Portfolio-gap review',
      'Pipeline-blocker review',
      'Testing-capacity review',
      'Next-week queue',
    ],

    outputs: [
      'Updated concept pipeline',
      'Next validation batch',
      'Next research priorities',
      'Weekly concept action list',
    ],

    example:
      'End every week with a clear list of new signals, concepts entering validation, parked ideas, rejected duplicates, and future research priorities.',

    sops: [
      'Weekly Concept Review SOP',
      'Pipeline Refresh SOP',
      'New Concept Planning SOP',
    ],
  },
];

const pipelineOutcomes = [
  {
    id: 'healthy',
    title: 'Healthy Pipeline',
    description:
      'The system contains enough fresh, evidenced, differentiated concepts to support future testing.',
    icon: 'scaling',
  },
  {
    id: 'research-gap',
    title: 'Research Gap',
    description:
      'The pipeline lacks enough fresh customer, market, competitor, or platform evidence.',
    icon: 'research',
  },
  {
    id: 'duplication',
    title: 'Concept Duplication',
    description:
      'New ideas are repeating existing concepts without creating meaningful strategic learning.',
    icon: 'iteration',
  },
  {
    id: 'pipeline-risk',
    title: 'Pipeline at Risk',
    description:
      'The account is consuming concepts faster than the system can generate and validate new territories.',
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

function NewConceptDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-new-concepts-data-card">
      <div className="creative-op-new-concepts-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-new-concepts-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function NewConceptsDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('signal-collection');

  const [activeOutcome, setActiveOutcome] =
    useState('healthy');

  const selectedSystem =
    newConceptSystems.find(
      (system) => system.id === selectedSystemId
    ) || newConceptSystems[0];

  return (
    <motion.section
      className="creative-op-new-concepts-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-new-concepts-topbar">
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

            <strong>Always-On New Concept Pipeline</strong>
          </div>
        </div>

        <div className="creative-op-new-concepts-heading">
          <span>STAGE 15 / GROWTH</span>

          <h1>Always-On New Concept Pipeline</h1>

          <p>
            Continuously discover, validate, prioritize, and prepare
            new creative territories before existing winners become
            exhausted.
          </p>
        </div>

        <div className="creative-op-new-concepts-counter">
          <strong>{newConceptSystems.length}</strong>
          <span>Pipeline systems</span>
        </div>
      </header>

      <div className="creative-op-new-concepts-layout">
        <aside className="creative-op-new-concepts-navigation">
          <div className="creative-op-new-concepts-navigation-intro">
            <span>PIPELINE SYSTEMS</span>
            <h2>Generate new territories</h2>
          </div>

          <nav>
            {newConceptSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-new-concepts-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-new-concepts-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-new-concepts-nav-icon">
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

        <main className="creative-op-new-concepts-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-new-concepts-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-new-concepts-selected-header">
                <div className="creative-op-new-concepts-selected-icon">
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

              <section className="creative-op-new-concepts-question-card">
                <div className="creative-op-new-concepts-question-heading">
                  <div>
                    <span>PIPELINE FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-new-concepts-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-new-concepts-question-item"
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

              <section className="creative-op-new-concepts-example-card">
                <div className="creative-op-new-concepts-example-icon">
                  <CreativeStrategyOPIcon
                    type="newConcepts"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE PIPELINE DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-new-concepts-bottom-grid">
                <NewConceptDataCard
                  title="Pipeline Inputs"
                  items={selectedSystem.inputs}
                  icon="research"
                />

                <NewConceptDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-new-concepts-sop-panel">
          <span className="creative-op-new-concepts-sop-eyebrow">
            PIPELINE HEALTH
          </span>

          <h2>Pipeline Outcomes</h2>

          <p>
            The system must continuously create fresh, evidenced,
            differentiated concept opportunities.
          </p>

          <div className="creative-op-new-concepts-outcome-list">
            {pipelineOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-new-concepts-outcome-card ${
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

          <div className="creative-op-new-concepts-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-new-concepts-sop-card"
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

          <div className="creative-op-new-concepts-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Prioritized New Concept Pipeline</h3>

            <p>
              A continuously refreshed queue of evidence-backed
              creative concepts ready for validation, development,
              MVP testing, and future expansion.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}