// src/components/KnowledgeDeepDive.jsx

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const knowledgeSystems = [
  {
    id: 'research-library',
    number: '17.1',
    title: 'Research Library',
    shortTitle: 'Research Library',
    icon: 'research',

    description:
      'Store customer, market, competitor, product, platform, and cultural research in a structure that can be reused across future creative work.',

    questions: [
      'Where is each research source stored?',
      'Is the source date documented?',
      'Is the original customer language preserved?',
      'Are insights separated from raw evidence?',
      'Can research be filtered by persona or topic?',
      'Are outdated findings clearly marked?',
      'Can the team trace an insight back to its source?',
      'What new research should update the library?',
    ],

    libraryItems: [
      'Customer reviews',
      'Reddit research',
      'Ad comments',
      'Organic comments',
      'Support feedback',
      'Sales-call notes',
      'Survey responses',
      'Competitor research',
      'Product research',
      'Market trends',
      'Platform trends',
      'Raw source links',
    ],

    outputs: [
      'Searchable research library',
      'Source-linked insights',
      'Research freshness status',
      'Reusable evidence bank',
    ],

    example:
      'Every customer insight should preserve the original quote, source, date, persona, topic, and strategic interpretation.',

    sops: [
      'Research Library SOP',
      'Research Documentation SOP',
      'Research Source Tagging SOP',
    ],
  },

  {
    id: 'persona-library',
    number: '17.2',
    title: 'Persona Library',
    shortTitle: 'Persona Library',
    icon: 'personas',

    description:
      'Maintain validated personas and sub-personas with their pains, desires, awareness, objections, triggers, language, and performance evidence.',

    questions: [
      'Is the persona supported by evidence?',
      'What problem defines the persona?',
      'What outcome are they seeking?',
      'What language do they use?',
      'Which objections appear most often?',
      'Which concepts performed for this persona?',
      'Has the persona changed over time?',
      'Should the persona remain active, merge, or archive?',
    ],

    libraryItems: [
      'Persona profile',
      'Sub-persona',
      'Core pains',
      'Desired outcomes',
      'Identity tensions',
      'Awareness level',
      'Objections',
      'Purchase triggers',
      'Customer language',
      'Winning concepts',
      'Failed concepts',
      'Performance history',
    ],

    outputs: [
      'Validated persona profiles',
      'Sub-persona map',
      'Persona performance history',
      'Persona update recommendations',
    ],

    example:
      'A postpartum customer should not remain only as a note inside research once repeated evidence and performance justify a dedicated sub-persona.',

    sops: [
      'Persona Library SOP',
      'Persona Update SOP',
      'Sub-Persona Documentation SOP',
    ],
  },

  {
    id: 'angle-library',
    number: '17.3',
    title: 'Angle Library',
    shortTitle: 'Angle Library',
    icon: 'angles',

    description:
      'Organize tested and untested strategic angles with their evidence, personas, claims, executions, performance, and current status.',

    questions: [
      'What customer evidence supports the angle?',
      'Which persona does it target?',
      'What belief shift defines it?',
      'Has the angle been tested?',
      'Which formats were used?',
      'Which proof supported it?',
      'What performance did it generate?',
      'Should the angle expand, iterate, pause, or archive?',
    ],

    libraryItems: [
      'Problem angles',
      'Desire angles',
      'Identity angles',
      'Mechanism angles',
      'Transformation angles',
      'Proof angles',
      'Objection angles',
      'Contrarian angles',
      'Comparison angles',
      'Story angles',
      'Angle evidence',
      'Angle status',
    ],

    outputs: [
      'Searchable angle library',
      'Angle performance history',
      'Angle status system',
      'Expansion opportunities',
    ],

    example:
      'Store the follicle-mechanism angle with its evidence, tested hooks, formats, proof assets, results, and future expansion ideas.',

    sops: [
      'Angle Library SOP',
      'Angle Status SOP',
      'Angle Performance Documentation SOP',
    ],
  },

  {
    id: 'concept-library',
    number: '17.4',
    title: 'Concept Library',
    shortTitle: 'Concept Library',
    icon: 'concepts',

    description:
      'Store complete concept cards so the team can understand what was tested, how it was executed, and what happened.',

    questions: [
      'Is the concept connected to an approved angle?',
      'Is the target persona documented?',
      'Is the hypothesis preserved?',
      'Are all executions linked?',
      'Are hooks and formats documented?',
      'Is performance linked to the concept?',
      'Are iterations connected to the original?',
      'Is the final learning documented?',
    ],

    libraryItems: [
      'Concept name',
      'Persona',
      'Angle',
      'Hypothesis',
      'Hooks',
      'Format',
      'Proof',
      'Visual device',
      'Offer',
      'CTA',
      'Iterations',
      'Performance',
    ],

    outputs: [
      'Complete concept records',
      'Concept-family connections',
      'Execution history',
      'Concept learning summary',
    ],

    example:
      'One concept record should contain the original concept, every version, every hook, every result, and the final strategic conclusion.',

    sops: [
      'Concept Library SOP',
      'Concept Card Archive SOP',
      'Concept Family SOP',
    ],
  },

  {
    id: 'hook-library',
    number: '17.5',
    title: 'Hook Library',
    shortTitle: 'Hook Library',
    icon: 'angles',

    description:
      'Build a reusable hook library organized by persona, angle, hook family, opening visual, format, and performance.',

    questions: [
      'Which hook family does this belong to?',
      'Which persona responded to it?',
      'Which opening visual supported it?',
      'Which format used it?',
      'What body followed the hook?',
      'What hook rate did it produce?',
      'Did it create qualified clicks?',
      'Can the pattern be reused elsewhere?',
    ],

    libraryItems: [
      'Direct problem hooks',
      'Desire hooks',
      'Proof hooks',
      'Question hooks',
      'Contrarian hooks',
      'Story hooks',
      'Visual hooks',
      'Demonstration hooks',
      'Customer quote hooks',
      'Identity hooks',
      'Hook metrics',
      'Opening visuals',
    ],

    outputs: [
      'Searchable hook library',
      'Winning hook patterns',
      'Weak hook patterns',
      'Reusable hook structures',
    ],

    example:
      'Save the hook pattern separately from the exact wording so the structure can be adapted across personas and products.',

    sops: [
      'Hook Library SOP',
      'Hook Pattern SOP',
      'Hook Performance Archive SOP',
    ],
  },

  {
    id: 'proof-library',
    number: '17.6',
    title: 'Proof Library',
    shortTitle: 'Proof Library',
    icon: 'validation',

    description:
      'Organize customer, product, scientific, expert, visual, and commercial proof for fast access during concept development and production.',

    questions: [
      'What claim does the proof support?',
      'Is the proof approved for use?',
      'Which persona finds it relevant?',
      'Is the proof current?',
      'Where is the original source?',
      'Which creatives used it?',
      'How did it affect performance?',
      'Does it require a disclaimer?',
    ],

    libraryItems: [
      'Testimonials',
      'Before-and-after assets',
      'Demonstrations',
      'Reviews',
      'Study results',
      'Consumer studies',
      'Expert proof',
      'Founder proof',
      'Sales volume',
      'Review count',
      'Guarantees',
      'Proof disclaimers',
    ],

    outputs: [
      'Approved proof bank',
      'Claim-to-proof map',
      'Proof usage history',
      'Compliance status',
    ],

    example:
      'Each proof asset should show the supported claim, source, approval status, usage rights, disclaimer requirements, and past performance.',

    sops: [
      'Proof Library SOP',
      'Claims Evidence SOP',
      'Proof Usage SOP',
    ],
  },

  {
    id: 'format-library',
    number: '17.7',
    title: 'Format & Template Library',
    shortTitle: 'Formats & Templates',
    icon: 'production',

    description:
      'Store reusable structures, templates, references, editing patterns, scripts, and briefing systems for each major creative format.',

    questions: [
      'Which format does the template support?',
      'What awareness level fits it?',
      'Which strategic problem does it solve?',
      'What assets are required?',
      'How long does it take to produce?',
      'Which examples performed well?',
      'Is the template still current?',
      'Can it be reused without becoming repetitive?',
    ],

    libraryItems: [
      'UGC templates',
      'Founder-ad templates',
      'Expert-ad templates',
      'Static templates',
      'Native-ad templates',
      'Mini-VSL structures',
      'Long-form VSL structures',
      'Advertorial templates',
      'Listicle templates',
      'Brief templates',
      'Editing templates',
      'AI prompt templates',
    ],

    outputs: [
      'Creative template library',
      'Format playbooks',
      'Production references',
      'Reusable prompt library',
    ],

    example:
      'A mini-VSL template should explain when to use it, its structure, required assets, example briefs, and successful executions.',

    sops: [
      'Format Library SOP',
      'Creative Template SOP',
      'AI Prompt Library SOP',
    ],
  },

  {
    id: 'winner-archive',
    number: '17.8',
    title: 'Winning Creative Archive',
    shortTitle: 'Winner Archive',
    icon: 'scaling',

    description:
      'Archive winning creatives with the strategic and commercial context required to reproduce the underlying success.',

    questions: [
      'What made the asset a winner?',
      'How much spend did it support?',
      'How stable was performance?',
      'Which persona and angle drove it?',
      'Which hook and format were used?',
      'Which proof and offer supported it?',
      'How was it expanded?',
      'When did fatigue begin?',
    ],

    libraryItems: [
      'Original winning asset',
      'Spend history',
      'CPA history',
      'ROAS history',
      'Hook metrics',
      'Retention metrics',
      'Persona',
      'Angle',
      'Concept',
      'Expansion versions',
      'Fatigue history',
      'Final learning',
    ],

    outputs: [
      'Winner case study',
      'Winning-pattern record',
      'Expansion history',
      'Reusable success principles',
    ],

    example:
      'Archive more than the final file. Preserve the research, hypothesis, media context, iterations, scaling path, and fatigue pattern.',

    sops: [
      'Winner Archive SOP',
      'Creative Case Study SOP',
      'Winning Pattern SOP',
    ],
  },

  {
    id: 'failure-archive',
    number: '17.9',
    title: 'Failed-Test Archive',
    shortTitle: 'Failure Archive',
    icon: 'analysis',

    description:
      'Document failed and inconclusive tests so the team understands what was learned and avoids repeating the same unsupported assumptions.',

    questions: [
      'Was the data sufficient?',
      'Did the hypothesis fail?',
      'Did only the execution fail?',
      'Was tracking reliable?',
      'Which part of the funnel weakened?',
      'What should be avoided next time?',
      'Could part of the concept still be reused?',
      'Should the test be repeated under better conditions?',
    ],

    libraryItems: [
      'Failed concepts',
      'Failed hooks',
      'Weak retention',
      'Weak click quality',
      'Weak conversion',
      'Offer mismatch',
      'Landing-page mismatch',
      'Tracking problems',
      'Production problems',
      'Inconclusive tests',
      'Rejected assumptions',
      'Reusable partial learnings',
    ],

    outputs: [
      'Failure analysis record',
      'Do-not-repeat warning',
      'Reusable partial learning',
      'Retest recommendation',
    ],

    example:
      'A test should not be archived simply as “failed.” Record whether the angle, hook, body, offer, page, or testing environment caused the result.',

    sops: [
      'Failed-Test Archive SOP',
      'Failure Documentation SOP',
      'Retest Decision SOP',
    ],
  },

  {
    id: 'learning-records',
    number: '17.10',
    title: 'Creative Learning Records',
    shortTitle: 'Learning Records',
    icon: 'insights',

    description:
      'Convert every test into a concise, reusable learning record with evidence, diagnosis, decision, and next action.',

    questions: [
      'What was tested?',
      'What happened?',
      'Why did it happen?',
      'What evidence supports the conclusion?',
      'Which element worked?',
      'Which element failed?',
      'What should be repeated or avoided?',
      'What is the next recommended action?',
    ],

    libraryItems: [
      'Test objective',
      'Hypothesis',
      'Controlled variables',
      'Changed variable',
      'Primary metrics',
      'Qualitative evidence',
      'Diagnosis',
      'Decision',
      'Reusable learning',
      'Next action',
    ],

    outputs: [
      'Standardized learning record',
      'Evidence-linked conclusion',
      'Iteration recommendation',
      'Knowledge-library entry',
    ],

    example:
      'Document that the mechanism generated qualified clicks, but proof appeared too late to support retention and conversion.',

    sops: [
      'Creative Learning SOP',
      'Learning Record Template',
      'Test Conclusion SOP',
    ],
  },

  {
    id: 'sop-library',
    number: '17.11',
    title: 'SOP & Playbook Library',
    shortTitle: 'SOP Library',
    icon: 'knowledge',

    description:
      'Maintain the operating procedures, templates, checklists, examples, prompts, and decision rules used across the full creative system.',

    questions: [
      'Does every recurring process have an SOP?',
      'Is the SOP easy to follow?',
      'Does it include examples?',
      'Does it include a checklist?',
      'Does it define ownership?',
      'Does it define inputs and outputs?',
      'Is the process still current?',
      'Who owns SOP updates?',
    ],

    libraryItems: [
      'Research SOPs',
      'Insight SOPs',
      'Persona SOPs',
      'Angle SOPs',
      'Validation SOPs',
      'Concept SOPs',
      'Briefing SOPs',
      'Production SOPs',
      'Launch SOPs',
      'Analysis SOPs',
      'Iteration SOPs',
      'Operations SOPs',
    ],

    outputs: [
      'Central SOP library',
      'Template library',
      'Checklist library',
      'SOP ownership system',
    ],

    example:
      'Each SOP should explain the purpose, trigger, owner, inputs, exact steps, outputs, quality standard, examples, and linked templates.',

    sops: [
      'SOP Library Management SOP',
      'SOP Creation SOP',
      'SOP Update SOP',
    ],
  },

  {
    id: 'retrieval',
    number: '17.12',
    title: 'Search & Retrieval System',
    shortTitle: 'Search & Retrieval',
    icon: 'research',

    description:
      'Make knowledge easy to find through consistent tags, naming, filters, links, summaries, and searchable metadata.',

    questions: [
      'Can the team search by persona?',
      'Can the team search by angle?',
      'Can the team search by concept or hook?',
      'Can the team filter winners and failures?',
      'Can the team find proof by claim?',
      'Can files be traced to ad-account performance?',
      'Are related records linked together?',
      'Can a new team member find information quickly?',
    ],

    libraryItems: [
      'Persona tags',
      'Angle tags',
      'Concept IDs',
      'Hook IDs',
      'Format tags',
      'Creator tags',
      'Performance status',
      'Date filters',
      'Platform filters',
      'Linked source files',
      'Linked performance data',
      'Linked SOPs',
    ],

    outputs: [
      'Searchable knowledge system',
      'Tagging taxonomy',
      'Linked creative records',
      'Fast retrieval workflow',
    ],

    example:
      'A strategist should be able to search one persona and immediately find its research, language, angles, concepts, hooks, proof, performance, and learnings.',

    sops: [
      'Knowledge Search SOP',
      'Knowledge Tagging SOP',
      'Creative Metadata SOP',
    ],
  },

  {
    id: 'maintenance',
    number: '17.13',
    title: 'Knowledge Maintenance',
    shortTitle: 'Maintenance',
    icon: 'operations',

    description:
      'Keep the library accurate, current, deduplicated, organized, and useful through scheduled reviews and ownership.',

    questions: [
      'Which information is outdated?',
      'Which records are incomplete?',
      'Are duplicate entries present?',
      'Are broken links present?',
      'Are statuses still accurate?',
      'Have new learnings updated old assumptions?',
      'Which SOPs require revision?',
      'Who owns maintenance this cycle?',
    ],

    libraryItems: [
      'Outdated records',
      'Duplicate records',
      'Broken links',
      'Incomplete records',
      'Old persona assumptions',
      'Old angle statuses',
      'Expired proof',
      'Deprecated templates',
      'Outdated SOPs',
      'Missing performance links',
    ],

    outputs: [
      'Updated knowledge library',
      'Archived outdated records',
      'Maintenance report',
      'Knowledge-quality status',
    ],

    example:
      'A knowledge library becomes dangerous when old assumptions remain active after customer behavior, product claims, or platform conditions change.',

    sops: [
      'Knowledge Maintenance SOP',
      'Library Audit SOP',
      'Knowledge Archive SOP',
    ],
  },
];

const knowledgeOutcomes = [
  {
    id: 'healthy',
    title: 'Knowledge System Healthy',
    description:
      'Research, assets, performance, SOPs, and learnings are organized, current, linked, and easy to retrieve.',
    icon: 'validation',
  },
  {
    id: 'incomplete',
    title: 'Knowledge Incomplete',
    description:
      'Important concepts, test results, sources, proof, or SOPs are missing required documentation.',
    icon: 'briefing',
  },
  {
    id: 'outdated',
    title: 'Knowledge Outdated',
    description:
      'Old assumptions, proof, templates, or processes no longer reflect the current market or operating system.',
    icon: 'iteration',
  },
  {
    id: 'fragmented',
    title: 'Knowledge Fragmented',
    description:
      'Information exists across disconnected files, tools, messages, and folders without reliable retrieval.',
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

function KnowledgeDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-knowledge-data-card">
      <div className="creative-op-knowledge-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-knowledge-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function KnowledgeDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('research-library');

  const [activeOutcome, setActiveOutcome] =
    useState('healthy');

  const selectedSystem =
    knowledgeSystems.find(
      (system) => system.id === selectedSystemId
    ) || knowledgeSystems[0];

  return (
    <motion.section
      className="creative-op-knowledge-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-knowledge-topbar">
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

            <strong>Knowledge Library</strong>
          </div>
        </div>

        <div className="creative-op-knowledge-heading">
          <span>STAGE 17 / INTELLIGENCE</span>

          <h1>Knowledge Library</h1>

          <p>
            Preserve research, concepts, assets, test results,
            patterns, SOPs, and operational learning inside one
            searchable creative intelligence system.
          </p>
        </div>

        <div className="creative-op-knowledge-counter">
          <strong>{knowledgeSystems.length}</strong>
          <span>Knowledge systems</span>
        </div>
      </header>

      <div className="creative-op-knowledge-layout">
        <aside className="creative-op-knowledge-navigation">
          <div className="creative-op-knowledge-navigation-intro">
            <span>KNOWLEDGE SYSTEMS</span>
            <h2>Preserve creative intelligence</h2>
          </div>

          <nav>
            {knowledgeSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-knowledge-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-knowledge-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-knowledge-nav-icon">
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

        <main className="creative-op-knowledge-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-knowledge-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-knowledge-selected-header">
                <div className="creative-op-knowledge-selected-icon">
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

              <section className="creative-op-knowledge-question-card">
                <div className="creative-op-knowledge-question-heading">
                  <div>
                    <span>KNOWLEDGE FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-knowledge-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-knowledge-question-item"
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

              <section className="creative-op-knowledge-example-card">
                <div className="creative-op-knowledge-example-icon">
                  <CreativeStrategyOPIcon
                    type="knowledge"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE KNOWLEDGE DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-knowledge-bottom-grid">
                <KnowledgeDataCard
                  title="Library Items"
                  items={selectedSystem.libraryItems}
                  icon="knowledge"
                />

                <KnowledgeDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-knowledge-sop-panel">
          <span className="creative-op-knowledge-sop-eyebrow">
            KNOWLEDGE HEALTH
          </span>

          <h2>Knowledge Outcomes</h2>

          <p>
            The library should make previous evidence, decisions, and
            performance easy to reuse across future creative work.
          </p>

          <div className="creative-op-knowledge-outcome-list">
            {knowledgeOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-knowledge-outcome-card ${
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

          <div className="creative-op-knowledge-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-knowledge-sop-card"
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

          <div className="creative-op-knowledge-output-card">
            <span>FINAL SYSTEM OUTPUT</span>

            <h3>Creative Intelligence Library</h3>

            <p>
              A searchable, linked, current, and reusable knowledge
              system containing research, strategy, executions,
              performance, SOPs, winners, failures, and learnings.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}