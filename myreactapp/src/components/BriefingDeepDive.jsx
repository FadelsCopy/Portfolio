// src/components/BriefingDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const briefingSystems = [
  {
    id: 'objective',
    number: '08.1',
    title: 'Brief Objective & Context',
    shortTitle: 'Objective',
    icon: 'foundation',

    description:
      'Give the production team enough strategic context to understand what the creative is testing, who it targets, and why it should work.',

    questions: [
      'What is the purpose of this creative?',
      'Which persona is being targeted?',
      'What awareness level is the customer in?',
      'Which approved angle is being used?',
      'What is the creative hypothesis?',
      'What customer belief must change?',
      'What action should the customer take?',
      'How will success be measured?',
    ],

    requirements: [
      'Creative objective',
      'Target persona',
      'Awareness level',
      'Approved angle',
      'Creative hypothesis',
      'Expected customer response',
      'Primary KPI',
      'Testing context',
    ],

    outputs: [
      'Strategic brief summary',
      'Creative objective',
      'Testing objective',
      'Success definition',
    ],

    example:
      'Create a 45-second UGC ad for problem-aware women experiencing hair shedding. The ad should test whether the follicle-level mechanism increases curiosity and click intent.',

    sops: [
      'Creative Brief Objective SOP',
      'Strategic Context SOP',
      'Brief Summary Template',
    ],
  },

  {
    id: 'message',
    number: '08.2',
    title: 'Messaging Direction',
    shortTitle: 'Messaging',
    icon: 'insights',

    description:
      'Define the central message, supporting points, customer language, belief shift, and claims that must appear in the final asset.',

    questions: [
      'What is the one central message?',
      'Which customer problem must be named?',
      'What outcome should be emphasized?',
      'What belief must change?',
      'Which mechanism must be explained?',
      'What proof supports the message?',
      'What objection must be handled?',
      'Which claims or phrases must be avoided?',
    ],

    requirements: [
      'Core message',
      'Problem statement',
      'Desired outcome',
      'Belief shift',
      'Mechanism explanation',
      'Supporting proof',
      'Objection handling',
      'Compliance limitations',
    ],

    outputs: [
      'Message hierarchy',
      'Required talking points',
      'Approved claims',
      'Prohibited claims',
    ],

    example:
      'Core message: surface products may improve appearance, but meaningful change starts by supporting the follicle from within.',

    sops: [
      'Messaging Direction SOP',
      'Message Hierarchy SOP',
      'Claims & Compliance Brief SOP',
    ],
  },

  {
    id: 'script',
    number: '08.3',
    title: 'Script Development',
    shortTitle: 'Script',
    icon: 'briefing',

    description:
      'Translate the approved concept into a complete script with clear structure, language, timing, proof, offer, and CTA.',

    questions: [
      'What is the exact hook?',
      'How quickly is the problem established?',
      'When is the mechanism introduced?',
      'When does the product appear?',
      'Where should proof be placed?',
      'What objection must be resolved?',
      'How is the offer introduced?',
      'What exact CTA closes the ad?',
    ],

    requirements: [
      'Hook',
      'Problem',
      'Agitation',
      'Mechanism',
      'Product introduction',
      'Benefits',
      'Proof',
      'Objection handling',
      'Offer',
      'CTA',
      'Timing notes',
      'On-screen text',
    ],

    outputs: [
      'Production-ready script',
      'Timestamped structure',
      'Voiceover copy',
      'On-screen copy',
    ],

    example:
      '0–3s hook, 3–10s problem, 10–20s mechanism, 20–31s product and proof, 31–39s objection handling, 39–45s offer and CTA.',

    sops: [
      'Video Script SOP',
      'Mini-VSL Script SOP',
      'Static Copy Brief SOP',
    ],
  },

  {
    id: 'hooks',
    number: '08.4',
    title: 'Hook Variations',
    shortTitle: 'Hooks',
    icon: 'angles',

    description:
      'Document each approved hook variation so production can create distinct openings without changing the central concept unnecessarily.',

    questions: [
      'How many hook variations are approved?',
      'What variable changes between them?',
      'Is each hook meaningfully different?',
      'Does each hook preserve the same body?',
      'What opening visual supports each hook?',
      'What on-screen text is required?',
      'Which creator delivery style fits each hook?',
      'How should the files be named?',
    ],

    requirements: [
      'Hook A',
      'Hook B',
      'Hook C',
      'Opening visual',
      'Opening text',
      'Delivery direction',
      'Shared body',
      'Variation naming',
    ],

    outputs: [
      'Hook variation sheet',
      'Opening-shot plan',
      'Testing-variable notes',
      'Naming structure',
    ],

    example:
      'Hook A: direct problem. Hook B: hidden cause. Hook C: visual shower-drain interruption. All three use the same body and CTA.',

    sops: [
      'Hook Brief SOP',
      'Hook Variation SOP',
      'Hook Naming SOP',
    ],
  },

  {
    id: 'shot-list',
    number: '08.5',
    title: 'Shot List & B-Roll',
    shortTitle: 'Shot List',
    icon: 'production',

    description:
      'Specify every required shot, visual action, product moment, demonstration, reaction, and supporting B-roll asset.',

    questions: [
      'Which shots are essential to communicate the idea?',
      'What must appear in the first three seconds?',
      'Which product shots are required?',
      'What demonstration must be recorded?',
      'What emotional reactions are needed?',
      'Which shots can be stock or existing assets?',
      'What framing and orientation are required?',
      'Which shots are optional backups?',
    ],

    requirements: [
      'Opening shot',
      'Talking-head shots',
      'Product close-ups',
      'Product-in-use shots',
      'Demonstration shots',
      'Proof overlays',
      'Lifestyle B-roll',
      'Reaction shots',
      'CTA shot',
      'Backup shots',
    ],

    outputs: [
      'Complete shot list',
      'B-roll checklist',
      'Asset sourcing plan',
      'Recording sequence',
    ],

    example:
      'Close-up of hair in shower drain, creator reaction, product bottle, capsules in hand, morning routine, customer result overlay, product CTA shot.',

    sops: [
      'Shot List SOP',
      'B-Roll Planning SOP',
      'UGC Recording Checklist',
    ],
  },

  {
    id: 'editing',
    number: '08.6',
    title: 'Editing Direction',
    shortTitle: 'Editing',
    icon: 'iteration',

    description:
      'Define pacing, cuts, captions, sound, overlays, proof placement, transitions, and platform-native editing behavior.',

    questions: [
      'How fast should the opening feel?',
      'Where should cuts occur?',
      'What caption style is required?',
      'Which phrases need emphasis?',
      'Where should proof overlays appear?',
      'What sound design supports attention?',
      'Should the edit feel polished or native?',
      'Which visual effects should be avoided?',
    ],

    requirements: [
      'Pacing direction',
      'Cut frequency',
      'Caption style',
      'Text emphasis',
      'Proof overlays',
      'Sound direction',
      'Transition direction',
      'Branding level',
      'Platform-native references',
      'Editing references',
    ],

    outputs: [
      'Editor direction',
      'Pacing guide',
      'Caption guide',
      'Editing reference list',
    ],

    example:
      'Fast first five seconds, captions on every spoken line, proof overlay at 22 seconds, minimal transitions, native UGC pacing.',

    sops: [
      'Editing Direction SOP',
      'Pacing SOP',
      'Caption Styling SOP',
    ],
  },

  {
    id: 'design',
    number: '08.7',
    title: 'Static & Design Direction',
    shortTitle: 'Design',
    icon: 'concepts',

    description:
      'Define the visual hierarchy, composition, typography, product placement, proof, imagery, and CTA for static or designed assets.',

    questions: [
      'What is the main visual?',
      'What should be read first?',
      'What is the headline?',
      'What proof must appear?',
      'How prominent should the product be?',
      'What visual contrast creates attention?',
      'Which brand elements are required?',
      'What aspect ratios are needed?',
    ],

    requirements: [
      'Headline',
      'Supporting copy',
      'Main visual',
      'Product image',
      'Proof element',
      'Offer element',
      'CTA',
      'Branding',
      'Visual hierarchy',
      'Aspect ratios',
    ],

    outputs: [
      'Static design brief',
      'Layout direction',
      'Copy hierarchy',
      'Asset list',
    ],

    example:
      'Large problem headline at the top, split-screen comparison in the center, product and proof at the bottom, compact CTA pill.',

    sops: [
      'Static Ad Brief SOP',
      'Design Hierarchy SOP',
      'Static Variation SOP',
    ],
  },

  {
    id: 'creator',
    number: '08.8',
    title: 'Creator Direction',
    shortTitle: 'Creator',
    icon: 'personas',

    description:
      'Give creators clear instructions for tone, delivery, emotion, wardrobe, environment, framing, and performance without making the content feel unnatural.',

    questions: [
      'What type of creator fits the persona?',
      'What tone should they use?',
      'How emotionally expressive should they be?',
      'Should the delivery feel scripted or conversational?',
      'What background or environment is appropriate?',
      'What wardrobe fits the customer?',
      'How should the product be held or used?',
      'What mistakes should the creator avoid?',
    ],

    requirements: [
      'Creator profile',
      'Tone of voice',
      'Energy level',
      'Emotional direction',
      'Wardrobe',
      'Environment',
      'Camera framing',
      'Product interaction',
      'Delivery notes',
      'Avoid list',
    ],

    outputs: [
      'Creator brief',
      'Performance direction',
      'Recording checklist',
      'Creator reference examples',
    ],

    example:
      'Woman aged 30–45, calm but frustrated opening, conversational delivery, bathroom setting, natural daylight, no exaggerated reactions.',

    sops: [
      'Creator Brief SOP',
      'UGC Performance SOP',
      'Creator Selection SOP',
    ],
  },

  {
    id: 'ai',
    number: '08.9',
    title: 'AI Generation Brief',
    shortTitle: 'AI Brief',
    icon: 'newConcepts',

    description:
      'Translate the concept into precise instructions for AI video, image, voice, avatar, or animation tools.',

    questions: [
      'Which asset should AI generate?',
      'What must remain realistic?',
      'What brand details must be preserved?',
      'What camera movement or composition is needed?',
      'What visual artifacts would make the asset unusable?',
      'What voice characteristics are required?',
      'What duration and aspect ratio are needed?',
      'How will a human review the output?',
    ],

    requirements: [
      'Generation objective',
      'Prompt',
      'Reference image or video',
      'Visual style',
      'Camera direction',
      'Subject direction',
      'Voice direction',
      'Duration',
      'Aspect ratio',
      'Negative prompt',
      'QA criteria',
    ],

    outputs: [
      'AI generation brief',
      'Prompt package',
      'Reference package',
      'Human-review checklist',
    ],

    example:
      'Generate realistic bathroom B-roll showing hair collected in a shower drain, handheld phone-camera feel, natural lighting, vertical 9:16, no visible text.',

    sops: [
      'AI Generation Brief SOP',
      'AI Video Prompt SOP',
      'AI Voice Brief SOP',
    ],
  },

  {
    id: 'deliverables',
    number: '08.10',
    title: 'Deliverables & Specifications',
    shortTitle: 'Deliverables',
    icon: 'operations',

    description:
      'Define every file, variation, ratio, duration, format, naming rule, and export requirement expected from production.',

    questions: [
      'How many final assets are required?',
      'Which hook variations are included?',
      'Which aspect ratios are required?',
      'What duration limits apply?',
      'What file format is required?',
      'Are clean and captioned versions needed?',
      'How should files be named?',
      'Where should files be uploaded?',
    ],

    requirements: [
      'Asset count',
      'Variation count',
      'Aspect ratios',
      'Duration',
      'File format',
      'Resolution',
      'Captioned version',
      'Clean version',
      'Thumbnail',
      'Naming convention',
      'Delivery folder',
    ],

    outputs: [
      'Deliverable checklist',
      'Export specifications',
      'Naming structure',
      'Upload destination',
    ],

    example:
      'Three 9:16 hook variants, one 4:5 version, captioned and clean exports, MP4 H.264, named according to concept and hook ID.',

    sops: [
      'Deliverables SOP',
      'Export Specifications SOP',
      'Creative Naming SOP',
    ],
  },

  {
    id: 'ownership',
    number: '08.11',
    title: 'Ownership & Timeline',
    shortTitle: 'Ownership',
    icon: 'operations',

    description:
      'Assign responsibility, deadlines, review stages, dependencies, and communication expectations before production begins.',

    questions: [
      'Who owns the brief?',
      'Who produces the asset?',
      'Who reviews strategy?',
      'Who reviews brand and compliance?',
      'What dependencies exist?',
      'When is the first draft due?',
      'How many revision rounds are allowed?',
      'What is the final delivery deadline?',
    ],

    requirements: [
      'Brief owner',
      'Production owner',
      'Strategic reviewer',
      'Brand reviewer',
      'Compliance reviewer',
      'First-draft deadline',
      'Feedback deadline',
      'Revision deadline',
      'Final delivery deadline',
      'Communication channel',
    ],

    outputs: [
      'Ownership matrix',
      'Production timeline',
      'Approval timeline',
      'Communication plan',
    ],

    example:
      'Strategist owns the brief, editor owns production, brand lead approves claims, first draft due Tuesday, final delivery Thursday.',

    sops: [
      'Creative Ownership SOP',
      'Production Timeline SOP',
      'Feedback Workflow SOP',
    ],
  },

  {
    id: 'brief-qa',
    number: '08.12',
    title: 'Brief Quality Assurance',
    shortTitle: 'Brief QA',
    icon: 'validation',

    description:
      'Confirm that the brief is complete, strategically accurate, easy to execute, and free from contradictions before handoff.',

    questions: [
      'Can the production owner execute without asking basic questions?',
      'Is the strategic hypothesis clear?',
      'Are all required assets listed?',
      'Are hooks and script approved?',
      'Are proof and claims documented?',
      'Are deliverables clear?',
      'Are deadlines and owners assigned?',
      'Are references and links accessible?',
    ],

    requirements: [
      'Complete strategy',
      'Complete script',
      'Complete shot list',
      'Complete asset list',
      'Clear editing direction',
      'Clear deliverables',
      'Assigned ownership',
      'Approved claims',
      'Working links',
      'No contradictions',
    ],

    outputs: [
      'Approved production brief',
      'Revision request',
      'Missing-information list',
      'Handoff readiness status',
    ],

    example:
      'Approved because the editor can understand the hypothesis, script, shots, proof, visual direction, file specs, and deadline without additional clarification.',

    sops: [
      'Creative Brief QA SOP',
      'Brief Handoff Checklist',
      'Production Readiness SOP',
    ],
  },
];

const briefingOutcomes = [
  {
    id: 'ready',
    title: 'Production Ready',
    description:
      'The brief is complete, approved, and executable without strategic guesswork.',
    icon: 'production',
  },
  {
    id: 'missing',
    title: 'Missing Information',
    description:
      'The concept is valid, but assets, claims, references, or ownership details are incomplete.',
    icon: 'briefing',
  },
  {
    id: 'revise',
    title: 'Strategic Revision',
    description:
      'The brief no longer represents the approved angle, hypothesis, or testing objective accurately.',
    icon: 'iteration',
  },
  {
    id: 'blocked',
    title: 'Production Blocked',
    description:
      'A dependency, compliance issue, missing asset, or resource limitation prevents production.',
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

function BriefingDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-briefing-data-card">
      <div className="creative-op-briefing-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-briefing-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function BriefingDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('objective');

  const [activeOutcome, setActiveOutcome] =
    useState('ready');

  const selectedSystem =
    briefingSystems.find(
      (system) => system.id === selectedSystemId
    ) || briefingSystems[0];

  return (
    <motion.section
      className="creative-op-briefing-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-briefing-topbar">
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

            <strong>Creative Briefing</strong>
          </div>
        </div>

        <div className="creative-op-briefing-heading">
          <span>STAGE 08 / PRODUCTION</span>

          <h1>Creative Briefing</h1>

          <p>
            Transform an approved concept into a complete production
            document for editors, designers, creators, AI systems,
            and supporting teams.
          </p>
        </div>

        <div className="creative-op-briefing-counter">
          <strong>{briefingSystems.length}</strong>
          <span>Briefing systems</span>
        </div>
      </header>

      <div className="creative-op-briefing-layout">
        <aside className="creative-op-briefing-navigation">
          <div className="creative-op-briefing-navigation-intro">
            <span>BRIEFING SYSTEMS</span>
            <h2>Build the production brief</h2>
          </div>

          <nav>
            {briefingSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-briefing-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-briefing-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-briefing-nav-icon">
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

        <main className="creative-op-briefing-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-briefing-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-briefing-selected-header">
                <div className="creative-op-briefing-selected-icon">
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

              <section className="creative-op-briefing-question-card">
                <div className="creative-op-briefing-question-heading">
                  <div>
                    <span>BRIEF DEVELOPMENT FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-briefing-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-briefing-question-item"
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

              <section className="creative-op-briefing-example-card">
                <div className="creative-op-briefing-example-icon">
                  <CreativeStrategyOPIcon
                    type="briefing"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE BRIEF DIRECTION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-briefing-bottom-grid">
                <BriefingDataCard
                  title="Brief Requirements"
                  items={selectedSystem.requirements}
                  icon="briefing"
                />

                <BriefingDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-briefing-sop-panel">
          <span className="creative-op-briefing-sop-eyebrow">
            PRODUCTION HANDOFF LAYER
          </span>

          <h2>Brief Outcomes</h2>

          <p>
            The creative should only move into production when the
            brief is complete, accurate, and executable.
          </p>

          <div className="creative-op-briefing-outcome-list">
            {briefingOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-briefing-outcome-card ${
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

          <div className="creative-op-briefing-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-briefing-sop-card"
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

          <div className="creative-op-briefing-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Production-Ready Creative Brief</h3>

            <p>
              A complete strategic and execution document containing
              the objective, script, hooks, visuals, shots, editing,
              assets, specifications, ownership, and deadlines.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}