// src/components/OperationsDeepDive.jsx

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const operationsSystems = [
  {
    id: 'calendar-velocity',
    number: '16.1',
    title: 'Creative Calendar & Velocity',
    shortTitle: 'Calendar & Velocity',
    icon: 'operations',

    description:
      'Translate account needs, testing priorities, production capacity, and deadlines into a realistic weekly creative calendar.',

    questions: [
      'What does the account need most this week?',
      'How many meaningful concepts can receive enough testing spend?',
      'What should the split be between new concepts and iterations?',
      'Which winners require expansion?',
      'Which fatigued assets require replacement?',
      'What can the production team complete without reducing quality?',
      'Which launches are time-sensitive?',
      'When will every creative be reviewed and analyzed?',
    ],

    operatingAreas: [
      'Weekly asset target',
      'Concept target',
      'New concept allocation',
      'Iteration allocation',
      'Format allocation',
      'Production capacity',
      'Launch dates',
      'Analysis dates',
      'Seasonal deadlines',
      'Replacement velocity',
    ],

    outputs: [
      'Weekly creative calendar',
      'Testing-volume target',
      'New-versus-iteration split',
      'Launch schedule',
    ],

    example:
      'The calendar is determined by account needs and available testing capacity, not by producing a fixed number of assets regardless of whether they can receive useful spend.',

    sops: [
      'Creative Calendar SOP',
      'Weekly Velocity SOP',
      'New Concept vs. Iteration SOP',
    ],
  },

  {
    id: 'workflow',
    number: '16.2',
    title: 'Workflow Management',
    shortTitle: 'Workflow',
    icon: 'briefing',

    description:
      'Move every creative through a clearly defined workflow from opportunity identification to research, production, launch, analysis, iteration, and archiving.',

    questions: [
      'What stage is each creative currently in?',
      'What action must happen next?',
      'Who owns that action?',
      'What information is required before moving forward?',
      'Which status indicates approval?',
      'Which status indicates a blocker?',
      'When should an item return to an earlier stage?',
      'When should a creative be archived?',
    ],

    operatingAreas: [
      'Opportunity',
      'Research',
      'Angle validation',
      'Concept development',
      'Briefing',
      'Production',
      'Review',
      'Ready to launch',
      'Live',
      'Analysis',
      'Iteration',
      'Archived',
    ],

    outputs: [
      'Defined workflow',
      'Status system',
      'Next-action visibility',
      'Workflow ownership',
    ],

    example:
      'Every creative should have one current status, one owner, one next action, and one due date instead of living across disconnected documents and messages.',

    sops: [
      'Creative Workflow SOP',
      'Creative Status SOP',
      'Workflow Transition SOP',
    ],
  },

  {
    id: 'ownership',
    number: '16.3',
    title: 'Ownership & Accountability',
    shortTitle: 'Ownership',
    icon: 'personas',

    description:
      'Define who owns strategy, copy, design, editing, creator management, approvals, launch, analysis, reporting, and final decisions.',

    questions: [
      'Who owns the creative from start to finish?',
      'Who owns each production task?',
      'Who provides strategic approval?',
      'Who provides brand approval?',
      'Who provides compliance approval?',
      'Who uploads and launches the asset?',
      'Who analyzes the results?',
      'Who makes the final iteration or scaling decision?',
    ],

    operatingAreas: [
      'Creative strategist',
      'Copywriter',
      'Designer',
      'Video editor',
      'Creator manager',
      'Media buyer',
      'Brand lead',
      'Compliance reviewer',
      'Project manager',
      'Final decision-maker',
    ],

    outputs: [
      'Ownership matrix',
      'Accountability map',
      'Decision rights',
      'Escalation path',
    ],

    example:
      'A creative strategist may own the hypothesis and brief, while the editor owns production and the brand lead owns final claims approval.',

    sops: [
      'Creative Ownership SOP',
      'Decision Rights SOP',
      'Accountability Matrix SOP',
    ],
  },

  {
    id: 'communication',
    number: '16.4',
    title: 'Communication System',
    shortTitle: 'Communication',
    icon: 'operations',

    description:
      'Create clear channels for daily updates, approvals, strategic discussion, production feedback, blockers, and urgent escalations.',

    questions: [
      'Which communication channel is used for each type of message?',
      'Where should production feedback be delivered?',
      'Where should urgent blockers be reported?',
      'How quickly should approvals be provided?',
      'Which updates require a meeting?',
      'Which updates should be asynchronous?',
      'How should context and links be included?',
      'How can repeated questions be reduced?',
    ],

    operatingAreas: [
      'Slack updates',
      'Approval messages',
      'Loom walkthroughs',
      'Google Meet sessions',
      'Production feedback',
      'Performance updates',
      'Urgent escalation',
      'Decision documentation',
      'Daily status',
      'Weekly summary',
    ],

    outputs: [
      'Communication protocol',
      'Channel structure',
      'Response-time expectations',
      'Escalation rules',
    ],

    example:
      'Use Slack for daily updates, Loom for detailed walkthroughs, and meetings only for decisions that benefit from live discussion.',

    sops: [
      'Creative Communication SOP',
      'Slack Communication SOP',
      'Async Feedback SOP',
    ],
  },

  {
    id: 'approvals',
    number: '16.5',
    title: 'Approval & Feedback System',
    shortTitle: 'Approvals',
    icon: 'validation',

    description:
      'Create a fast and controlled approval process for strategy, copy, visuals, claims, brand consistency, production quality, and launch readiness.',

    questions: [
      'Which approval stages are required?',
      'Who approves strategy?',
      'Who approves copy and claims?',
      'Who approves visual execution?',
      'How should feedback be structured?',
      'How many revision rounds are allowed?',
      'What happens when reviewers disagree?',
      'When is a creative considered finally approved?',
    ],

    operatingAreas: [
      'Concept approval',
      'Brief approval',
      'Script approval',
      'Claims approval',
      'Brand approval',
      'First-draft review',
      'Revision approval',
      'Final QA',
      'Launch approval',
      'Post-launch review',
    ],

    outputs: [
      'Approval workflow',
      'Feedback framework',
      'Revision limits',
      'Final approval status',
    ],

    example:
      'Feedback should identify the exact issue, explain why it matters, and provide a clear requested change instead of vague comments such as “make it better.”',

    sops: [
      'Creative Approval SOP',
      'Feedback SOP',
      'Revision Management SOP',
    ],
  },

  {
    id: 'file-organization',
    number: '16.6',
    title: 'File & Asset Organization',
    shortTitle: 'File Organization',
    icon: 'knowledge',

    description:
      'Organize research, briefs, scripts, source footage, working files, final assets, performance data, and learnings into a consistent structure.',

    questions: [
      'Where should each creative asset live?',
      'How should project folders be structured?',
      'Where should source footage be stored?',
      'Where should working files be stored?',
      'Where should approved final files be stored?',
      'How should old versions be handled?',
      'Who maintains folder quality?',
      'Can a new team member find any asset quickly?',
    ],

    operatingAreas: [
      'Research folder',
      'Concept folder',
      'Brief folder',
      'Script folder',
      'Source assets',
      'Working files',
      'Review exports',
      'Approved assets',
      'Performance data',
      'Archived files',
    ],

    outputs: [
      'Folder structure',
      'Asset-storage rules',
      'Version-storage system',
      'Archive structure',
    ],

    example:
      'Each concept should contain its strategy, brief, source assets, working files, final exports, launch information, and performance analysis inside one organized folder.',

    sops: [
      'Creative Folder Structure SOP',
      'Asset Organization SOP',
      'Creative Archive SOP',
    ],
  },

  {
    id: 'naming-versioning',
    number: '16.7',
    title: 'Naming & Version Control',
    shortTitle: 'Naming & Versions',
    icon: 'knowledge',

    description:
      'Use consistent naming across concepts, files, briefs, scripts, exports, ads, iterations, and reporting systems.',

    questions: [
      'Does the name identify the concept?',
      'Does it identify the persona and angle?',
      'Does it identify the format?',
      'Does it identify the hook?',
      'Does it identify the creator?',
      'Does it identify the version?',
      'Can files be matched with ad-account performance?',
      'Can the team identify the latest approved version?',
    ],

    operatingAreas: [
      'Concept ID',
      'Persona ID',
      'Angle ID',
      'Format ID',
      'Hook ID',
      'Creator ID',
      'Version number',
      'Platform',
      'Launch date',
      'Approval status',
    ],

    outputs: [
      'Naming convention',
      'Version-control rules',
      'Creative ID system',
      'Performance-matching system',
    ],

    example:
      'Use a name such as CS15_MECH_P2_H03_UGC_CR01_V2 instead of final-video-new-latest-4.',

    sops: [
      'Creative Naming SOP',
      'Version Control SOP',
      'Creative Taxonomy SOP',
    ],
  },

  {
    id: 'capacity',
    number: '16.8',
    title: 'Production Capacity Management',
    shortTitle: 'Capacity',
    icon: 'production',

    description:
      'Match strategy and testing ambition with available copywriting, design, editing, creator, approval, launch, and analysis capacity.',

    questions: [
      'How many briefs can strategy complete each week?',
      'How many scripts can copy produce?',
      'How many assets can editors complete?',
      'How many static ads can designers produce?',
      'How many creator recordings are available?',
      'How many assets can the account test properly?',
      'Where is the current capacity constraint?',
      'Can templates, AI, or process changes increase capacity?',
    ],

    operatingAreas: [
      'Strategy capacity',
      'Copy capacity',
      'Editing capacity',
      'Design capacity',
      'Creator capacity',
      'AI-production capacity',
      'Approval capacity',
      'Launch capacity',
      'Analysis capacity',
      'Testing capacity',
    ],

    outputs: [
      'Capacity forecast',
      'Weekly production limit',
      'Resource-gap list',
      'Capacity-improvement plan',
    ],

    example:
      'Producing more briefs does not increase velocity when editing and approval capacity are already fully occupied.',

    sops: [
      'Production Capacity SOP',
      'Creative Resource Planning SOP',
      'Capacity Forecast SOP',
    ],
  },

  {
    id: 'bottlenecks',
    number: '16.9',
    title: 'Bottleneck & Blocker Management',
    shortTitle: 'Bottlenecks',
    icon: 'analysis',

    description:
      'Identify, escalate, resolve, and prevent recurring delays across the complete creative process.',

    questions: [
      'Which stage is slowing down the workflow?',
      'Is the blocker caused by missing information?',
      'Is the blocker caused by approval delay?',
      'Is a resource unavailable?',
      'Is ownership unclear?',
      'Is the brief incomplete?',
      'What immediate action resolves the blocker?',
      'What system change prevents it from repeating?',
    ],

    operatingAreas: [
      'Research blocker',
      'Strategy blocker',
      'Asset blocker',
      'Creator blocker',
      'Editing blocker',
      'Design blocker',
      'Approval blocker',
      'Compliance blocker',
      'Launch blocker',
      'Tracking blocker',
    ],

    outputs: [
      'Blocker diagnosis',
      'Immediate resolution',
      'Escalation owner',
      'Prevention action',
    ],

    example:
      'When claims approval repeatedly delays production, move compliance review earlier into the brief rather than waiting until the final edit.',

    sops: [
      'Bottleneck Management SOP',
      'Blocker Escalation SOP',
      'Workflow Prevention SOP',
    ],
  },

  {
    id: 'meetings',
    number: '16.10',
    title: 'Meeting & Review Rhythm',
    shortTitle: 'Meeting Rhythm',
    icon: 'operations',

    description:
      'Create a focused meeting cadence for planning, performance review, brainstorming, production status, approvals, and decision-making.',

    questions: [
      'Which meetings are actually necessary?',
      'What decisions should each meeting produce?',
      'Who needs to attend?',
      'What information must be prepared beforehand?',
      'Which updates can remain asynchronous?',
      'How long should each meeting take?',
      'Where are decisions documented?',
      'How are action items assigned and tracked?',
    ],

    operatingAreas: [
      'Weekly creative review',
      'Performance review',
      'Creative planning',
      'Brainstorming session',
      'Production standup',
      'Client review',
      'Approval meeting',
      'Monthly strategy review',
      'Quarterly review',
      'Emergency escalation',
    ],

    outputs: [
      'Meeting cadence',
      'Meeting purpose',
      'Required attendees',
      'Action-item system',
    ],

    example:
      'A weekly creative review should produce decisions about winners, failures, iterations, new concepts, blockers, and next-week priorities.',

    sops: [
      'Creative Meeting SOP',
      'Weekly Review Meeting SOP',
      'Meeting Action Item SOP',
    ],
  },

  {
    id: 'reporting',
    number: '16.11',
    title: 'Creative Reporting',
    shortTitle: 'Reporting',
    icon: 'analysis',

    description:
      'Turn production activity, testing results, learnings, blockers, and upcoming priorities into clear reports for the team, brand, or client.',

    questions: [
      'What did the team produce?',
      'What launched?',
      'How much spend was tested?',
      'Which concepts performed best?',
      'Which concepts failed?',
      'What was learned?',
      'What is currently blocked?',
      'What is planned next?',
    ],

    operatingAreas: [
      'Assets produced',
      'Assets launched',
      'Concepts tested',
      'Testing spend',
      'Winning concepts',
      'Promising concepts',
      'Failed concepts',
      'Creative learnings',
      'Bottlenecks',
      'Next priorities',
    ],

    outputs: [
      'Weekly creative report',
      'Performance summary',
      'Learning summary',
      'Next-action report',
    ],

    example:
      'The report should explain what happened, why it happened, and what the team will do next rather than only displaying isolated metrics.',

    sops: [
      'Creative Reporting SOP',
      'Weekly Performance Report SOP',
      'Client Creative Report SOP',
    ],
  },

  {
    id: 'operational-qa',
    number: '16.12',
    title: 'Operational Quality Assurance',
    shortTitle: 'Operational QA',
    icon: 'decision',

    description:
      'Audit whether the creative system is organized, documented, accountable, efficient, scalable, and producing useful learning.',

    questions: [
      'Does every creative have an owner?',
      'Does every creative have a status and due date?',
      'Are files organized correctly?',
      'Are names and versions consistent?',
      'Are approvals documented?',
      'Are blockers escalated quickly?',
      'Are learnings being stored?',
      'Is the operating system improving over time?',
    ],

    operatingAreas: [
      'Ownership quality',
      'Workflow quality',
      'Documentation quality',
      'Naming quality',
      'File quality',
      'Approval speed',
      'Production speed',
      'Reporting quality',
      'Learning quality',
      'System scalability',
    ],

    outputs: [
      'Operational health score',
      'Process issue list',
      'System-improvement plan',
      'Operational approval',
    ],

    example:
      'A high-output creative team is not operationally healthy when files are lost, approvals are unclear, learnings disappear, and deadlines are constantly missed.',

    sops: [
      'Creative Operations Audit SOP',
      'Operational QA SOP',
      'Process Improvement SOP',
    ],
  },
];

const operationsOutcomes = [
  {
    id: 'healthy',
    title: 'Operationally Healthy',
    description:
      'The system has clear ownership, workflow visibility, sufficient capacity, fast approvals, and reliable documentation.',
    icon: 'validation',
  },
  {
    id: 'constrained',
    title: 'Capacity Constrained',
    description:
      'The workflow is organized, but available strategy, production, approval, launch, or analysis capacity is insufficient.',
    icon: 'production',
  },
  {
    id: 'blocked',
    title: 'Workflow Blocked',
    description:
      'A recurring ownership, information, approval, asset, or communication problem is delaying creative output.',
    icon: 'analysis',
  },
  {
    id: 'unstable',
    title: 'System Unstable',
    description:
      'The operation lacks consistent ownership, statuses, deadlines, files, approvals, or documentation.',
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

function OperationsDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-operations-data-card">
      <div className="creative-op-operations-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-operations-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function OperationsDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('calendar-velocity');

  const [activeOutcome, setActiveOutcome] =
    useState('healthy');

  const selectedSystem =
    operationsSystems.find(
      (system) => system.id === selectedSystemId
    ) || operationsSystems[0];

  return (
    <motion.section
      className="creative-op-operations-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-operations-topbar">
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

            <strong>Creative Operations</strong>
          </div>
        </div>

        <div className="creative-op-operations-heading">
          <span>STAGE 16 / OPERATIONS</span>

          <h1>Creative Operations</h1>

          <p>
            Coordinate people, priorities, capacity, communication,
            approvals, deadlines, documentation, and reporting across
            the complete creative system.
          </p>
        </div>

        <div className="creative-op-operations-counter">
          <strong>{operationsSystems.length}</strong>
          <span>Operating systems</span>
        </div>
      </header>

      <div className="creative-op-operations-layout">
        <aside className="creative-op-operations-navigation">
          <div className="creative-op-operations-navigation-intro">
            <span>OPERATING SYSTEMS</span>
            <h2>Manage creative execution</h2>
          </div>

          <nav>
            {operationsSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-operations-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-operations-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-operations-nav-icon">
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

        <main className="creative-op-operations-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-operations-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-operations-selected-header">
                <div className="creative-op-operations-selected-icon">
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

              <section className="creative-op-operations-question-card">
                <div className="creative-op-operations-question-heading">
                  <div>
                    <span>OPERATING FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-operations-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-operations-question-item"
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

              <section className="creative-op-operations-example-card">
                <div className="creative-op-operations-example-icon">
                  <CreativeStrategyOPIcon
                    type="operations"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE OPERATING DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-operations-bottom-grid">
                <OperationsDataCard
                  title="Operating Areas"
                  items={selectedSystem.operatingAreas}
                  icon="operations"
                />

                <OperationsDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-operations-sop-panel">
          <span className="creative-op-operations-sop-eyebrow">
            OPERATIONAL HEALTH
          </span>

          <h2>Operations Outcomes</h2>

          <p>
            The operating system should make creative work visible,
            accountable, organized, and repeatable.
          </p>

          <div className="creative-op-operations-outcome-list">
            {operationsOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-operations-outcome-card ${
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

          <div className="creative-op-operations-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-operations-sop-card"
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

          <div className="creative-op-operations-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Creative Operating System</h3>

            <p>
              A visible and repeatable workflow containing priorities,
              owners, statuses, deadlines, capacity, approvals,
              communication, reporting, and documentation.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}