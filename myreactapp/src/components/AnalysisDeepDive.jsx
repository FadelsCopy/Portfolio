// src/components/AnalysisDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const analysisSystems = [
  {
    id: 'data-quality',
    number: '11.1',
    title: 'Data Quality Verification',
    shortTitle: 'Data Quality',
    icon: 'validation',

    description:
      'Confirm that tracking, attribution, delivery, spend, events, and reporting are accurate enough to support a creative decision.',

    questions: [
      'Is the creative delivering normally?',
      'Is spend being recorded correctly?',
      'Are conversion events firing?',
      'Are platform and analytics numbers reasonably aligned?',
      'Are duplicate or missing events present?',
      'Is the attribution window correct?',
      'Did any technical issue affect the test?',
      'Can the data be trusted for decision-making?',
    ],

    metrics: [
      'Spend',
      'Impressions',
      'Reach',
      'Clicks',
      'Landing-page views',
      'Conversions',
      'Revenue',
      'Event match quality',
      'Tracking discrepancy',
      'Attribution window',
    ],

    outputs: [
      'Data-confidence status',
      'Tracking issue list',
      'Corrected reporting data',
      'Analysis eligibility decision',
    ],

    example:
      'Do not interpret a weak CPA as a creative failure when landing-page events were not recording correctly for part of the test.',

    sops: [
      'Data Quality SOP',
      'Tracking Discrepancy SOP',
      'Analysis Readiness Checklist',
    ],
  },

  {
    id: 'sample',
    number: '11.2',
    title: 'Spend & Sample Sufficiency',
    shortTitle: 'Sample Size',
    icon: 'operations',

    description:
      'Determine whether the asset has received enough spend, impressions, clicks, and conversions to produce a meaningful signal.',

    questions: [
      'Has the creative reached the minimum spend threshold?',
      'How does spend compare with the target CPA?',
      'Are impressions sufficient?',
      'Has the asset received enough clicks?',
      'Are conversions too limited for a final judgment?',
      'Did delivery distribute fairly across variations?',
      'Was the testing window long enough?',
      'Should the test continue before a decision is made?',
    ],

    metrics: [
      'Total spend',
      'Spend-to-target-CPA ratio',
      'Impressions',
      'Reach',
      'Clicks',
      'Landing-page views',
      'Conversions',
      'Testing duration',
      'Daily delivery',
      'Variation delivery share',
    ],

    outputs: [
      'Sample sufficiency status',
      'Continue-testing decision',
      'Minimum additional spend',
      'Confidence level',
    ],

    example:
      'Treat strong hook and click signals as promising, but avoid calling the asset a final winner after only one conversion.',

    sops: [
      'Sample Sufficiency SOP',
      'Minimum Spend SOP',
      'Creative Confidence SOP',
    ],
  },

  {
    id: 'hook-rate',
    number: '11.3',
    title: 'Hook-Rate Analysis',
    shortTitle: 'Hook Rate',
    icon: 'angles',

    description:
      'Evaluate whether the opening visual, first line, creator, framing, and immediate relevance successfully stop attention.',

    questions: [
      'How does hook rate compare with the account baseline?',
      'Which hook variation performs best?',
      'Is the opening visual understandable?',
      'Does the first line create relevance?',
      'Does the creator affect attention?',
      'Is the hook strong across placements?',
      'Does the asset receive clicks despite weak hook rate?',
      'What specific opening element should be retained or replaced?',
    ],

    metrics: [
      'Three-second view rate',
      'Hook rate',
      'Thumb-stop ratio',
      'First-second retention',
      'Three-second video plays',
      'Impressions',
      'Placement hook rate',
      'Hook-level spend',
    ],

    outputs: [
      'Hook-performance diagnosis',
      'Winning hook elements',
      'Weak hook elements',
      'Hook iteration recommendation',
    ],

    example:
      'The mechanism body may be strong, but a weak opening visual can prevent enough people from reaching it.',

    sops: [
      'Hook-Rate Analysis SOP',
      'Opening Performance SOP',
      'Hook Diagnosis Template',
    ],
  },

  {
    id: 'retention',
    number: '11.4',
    title: 'Hold Rate & Retention',
    shortTitle: 'Retention',
    icon: 'analysis',

    description:
      'Analyze where attention is maintained or lost throughout the creative and which message, scene, or pacing decision caused the change.',

    questions: [
      'How many viewers continue after the hook?',
      'Where does the largest drop occur?',
      'Does the mechanism explanation maintain attention?',
      'Is the product introduced too late?',
      'Is proof appearing before viewers leave?',
      'Does pacing become slow?',
      'Is one section confusing or repetitive?',
      'Which sequence should be shortened, moved, or removed?',
    ],

    metrics: [
      'Hold rate',
      'Average watch time',
      '25% video views',
      '50% video views',
      '75% video views',
      '95% video views',
      '100% video views',
      'Retention by timestamp',
      'Average percentage watched',
      'Video length',
    ],

    outputs: [
      'Retention diagnosis',
      'Drop-off points',
      'Strongest narrative section',
      'Editing recommendation',
    ],

    example:
      'A strong hook followed by a sharp drop at the mechanism section suggests the opening works but the explanation is too slow or unclear.',

    sops: [
      'Retention Analysis SOP',
      'Video Drop-Off SOP',
      'Narrative Performance SOP',
    ],
  },

  {
    id: 'click-quality',
    number: '11.5',
    title: 'CTR & Click-Quality Analysis',
    shortTitle: 'CTR & Clicks',
    icon: 'launch',

    description:
      'Determine whether the creative creates enough interest to generate qualified clicks rather than curiosity with weak commercial intent.',

    questions: [
      'How does outbound CTR compare with baseline?',
      'Is total CTR inflated by non-outbound clicks?',
      'Does the CTA create action?',
      'Are clicks concentrated in one placement?',
      'Does the creative attract the intended persona?',
      'Are landing-page views close to outbound clicks?',
      'Do clicks convert after reaching the page?',
      'Is the message creating curiosity without purchase intent?',
    ],

    metrics: [
      'Outbound CTR',
      'Link CTR',
      'Total CTR',
      'Outbound clicks',
      'Link clicks',
      'Landing-page views',
      'Click-to-view rate',
      'Placement CTR',
      'Unique outbound CTR',
      'CTA click concentration',
    ],

    outputs: [
      'Click-quality diagnosis',
      'Commercial-intent assessment',
      'CTA diagnosis',
      'Message-match recommendation',
    ],

    example:
      'High total CTR with weak outbound CTR may indicate engagement with the ad rather than meaningful buying intent.',

    sops: [
      'CTR Analysis SOP',
      'Click Quality SOP',
      'Outbound Click Diagnosis SOP',
    ],
  },

  {
    id: 'cost-context',
    number: '11.6',
    title: 'CPM & CPC Context',
    shortTitle: 'Cost Context',
    icon: 'operations',

    description:
      'Interpret traffic costs alongside creative quality, audience competition, platform delivery, placement, and seasonality.',

    questions: [
      'Is CPM unusually high or low?',
      'Is CPC driven by CPM, CTR, or both?',
      'Does the creative receive efficient distribution?',
      'Are certain placements significantly more expensive?',
      'Could seasonality affect media costs?',
      'Is the audience unusually competitive?',
      'Does low CPC produce qualified traffic?',
      'Should the creative be judged differently because of media-cost context?',
    ],

    metrics: [
      'CPM',
      'Outbound CPC',
      'Link CPC',
      'Frequency',
      'Placement CPM',
      'Audience CPM',
      'Daily CPM movement',
      'Account baseline CPM',
      'Seasonal cost context',
      'Auction competition',
    ],

    outputs: [
      'Traffic-cost diagnosis',
      'CPM context',
      'CPC driver',
      'Media-cost caveat',
    ],

    example:
      'A higher CPC is not always a creative problem if CPM increased sharply across the entire account during a competitive period.',

    sops: [
      'CPM Analysis SOP',
      'CPC Diagnosis SOP',
      'Media Cost Context SOP',
    ],
  },

  {
    id: 'landing-page',
    number: '11.7',
    title: 'Landing-Page Performance',
    shortTitle: 'Landing Page',
    icon: 'briefing',

    description:
      'Determine whether the post-click experience continues the creative message and converts the attention generated by the ad.',

    questions: [
      'Do outbound clicks become landing-page views?',
      'Is the page loading correctly?',
      'Does the headline continue the ad message?',
      'Is the promised offer immediately visible?',
      'Does the page explain the same mechanism?',
      'Where do visitors leave?',
      'Are mobile users experiencing friction?',
      'Is the page weakening a strong creative?',
    ],

    metrics: [
      'Landing-page views',
      'Click-to-landing-page-view rate',
      'Bounce rate',
      'Engagement time',
      'Scroll depth',
      'Page speed',
      'Add-to-cart rate',
      'Checkout initiation rate',
      'Mobile conversion rate',
      'Page-level conversion rate',
    ],

    outputs: [
      'Landing-page diagnosis',
      'Message-match assessment',
      'Page-friction list',
      'Destination recommendation',
    ],

    example:
      'Strong outbound CTR with weak landing-page views may indicate page-speed or tracking problems rather than weak creative intent.',

    sops: [
      'Landing-Page Analysis SOP',
      'Message Match Analysis SOP',
      'Post-Click Friction SOP',
    ],
  },

  {
    id: 'conversion-rate',
    number: '11.8',
    title: 'Conversion-Rate Analysis',
    shortTitle: 'Conversion Rate',
    icon: 'validation',

    description:
      'Evaluate whether the traffic created by the creative produces meaningful funnel actions and completed purchases or leads.',

    questions: [
      'What percentage of visitors convert?',
      'How does conversion rate compare with account baseline?',
      'Does conversion vary by hook?',
      'Does conversion vary by placement?',
      'Are add-to-cart rates healthy?',
      'Are customers abandoning checkout?',
      'Does the creative create the correct expectation?',
      'Is the offer strong enough for the generated traffic?',
    ],

    metrics: [
      'Landing-page conversion rate',
      'Add-to-cart rate',
      'Checkout initiation rate',
      'Purchase conversion rate',
      'Lead conversion rate',
      'Hook-level conversion rate',
      'Placement conversion rate',
      'New-customer conversion rate',
      'Checkout completion rate',
      'Offer take rate',
    ],

    outputs: [
      'Conversion diagnosis',
      'Traffic-quality assessment',
      'Funnel-friction diagnosis',
      'Offer recommendation',
    ],

    example:
      'High CTR with weak conversion may indicate that the creative creates interest but overpromises, attracts the wrong customer, or sends traffic to a weak page.',

    sops: [
      'Conversion-Rate Analysis SOP',
      'Traffic Quality SOP',
      'Funnel Conversion SOP',
    ],
  },

  {
    id: 'business-performance',
    number: '11.9',
    title: 'CPA & ROAS Analysis',
    shortTitle: 'CPA & ROAS',
    icon: 'scaling',

    description:
      'Evaluate whether the creative produces customers or leads at an economically acceptable cost and can support continued spend.',

    questions: [
      'How does CPA compare with the target?',
      'How does ROAS compare with the break-even level?',
      'Is revenue concentrated in a small number of conversions?',
      'Is average order value affecting performance?',
      'Does the creative attract new customers?',
      'Is the result stable over time?',
      'Can the asset support more spend?',
      'Is the result strong enough for scaling or only iteration?',
    ],

    metrics: [
      'CPA',
      'Cost per lead',
      'ROAS',
      'Revenue',
      'Average order value',
      'New-customer CPA',
      'Contribution margin',
      'Break-even ROAS',
      'Purchase volume',
      'Spend stability',
    ],

    outputs: [
      'Business-performance diagnosis',
      'Profitability status',
      'Scaling eligibility',
      'Economic constraint',
    ],

    example:
      'A strong ROAS from one purchase is promising but not enough to classify the concept as a scalable winner.',

    sops: [
      'CPA Analysis SOP',
      'ROAS Analysis SOP',
      'Creative Profitability SOP',
    ],
  },

  {
    id: 'breakdowns',
    number: '11.10',
    title: 'Performance Breakdown Analysis',
    shortTitle: 'Breakdowns',
    icon: 'personas',

    description:
      'Analyze performance by placement, age, gender, geography, device, audience, creator, hook, format, and other meaningful variables.',

    questions: [
      'Which placement produces the strongest result?',
      'Does one age group respond differently?',
      'Does performance vary by gender?',
      'Which geography performs best?',
      'Does mobile or desktop behavior differ?',
      'Which hook drives the highest-quality traffic?',
      'Which creator performs best?',
      'Are breakdown differences meaningful or caused by small samples?',
    ],

    metrics: [
      'Placement performance',
      'Age performance',
      'Gender performance',
      'Geography performance',
      'Device performance',
      'Audience performance',
      'Hook performance',
      'Creator performance',
      'Format performance',
      'Day-level performance',
    ],

    outputs: [
      'Breakdown insights',
      'High-response segment',
      'Weak-delivery segment',
      'Segment-specific opportunity',
    ],

    example:
      'A creator may appear weak overall while performing strongly with the specific age segment they naturally represent.',

    sops: [
      'Performance Breakdown SOP',
      'Segment Analysis SOP',
      'Creator Performance SOP',
    ],
  },

  {
    id: 'qualitative',
    number: '11.11',
    title: 'Qualitative Feedback Analysis',
    shortTitle: 'Qualitative',
    icon: 'research',

    description:
      'Use comments, reactions, customer questions, support feedback, and sales-team observations to understand why the numbers moved.',

    questions: [
      'What are people saying in the comments?',
      'Which objections appear repeatedly?',
      'Are customers misunderstanding the message?',
      'Which claims attract attention?',
      'Which questions remain unanswered?',
      'Are people tagging or sharing the creative?',
      'Does support receive related questions?',
      'What language can improve the next iteration?',
    ],

    metrics: [
      'Positive comments',
      'Negative comments',
      'Questions',
      'Objections',
      'Shares',
      'Saves',
      'Reactions',
      'Support feedback',
      'Sales feedback',
      'Repeated customer phrases',
    ],

    outputs: [
      'Comment insight summary',
      'New objection list',
      'Message confusion list',
      'Iteration language',
    ],

    example:
      'Repeated comments asking whether the product works for postpartum shedding may reveal a valuable sub-persona or future concept.',

    sops: [
      'Qualitative Analysis SOP',
      'Ad Comment Mining SOP',
      'Customer Feedback SOP',
    ],
  },

  {
    id: 'hypothesis',
    number: '11.12',
    title: 'Creative Hypothesis Evaluation',
    shortTitle: 'Hypothesis',
    icon: 'decision',

    description:
      'Return to the original creative hypothesis and determine what the test actually proved, disproved, or left uncertain.',

    questions: [
      'What exactly was the test designed to learn?',
      'Did the hook create attention?',
      'Did the body maintain interest?',
      'Did the angle create qualified clicks?',
      'Did the customer believe the promise?',
      'Did the landing page continue the message?',
      'Did the creative produce acceptable business performance?',
      'What remains uncertain?',
    ],

    metrics: [
      'Hypothesis statement',
      'Primary KPI',
      'Secondary KPIs',
      'Attention result',
      'Retention result',
      'Click result',
      'Conversion result',
      'Business result',
      'Confidence level',
      'Unresolved question',
    ],

    outputs: [
      'Hypothesis supported',
      'Hypothesis partially supported',
      'Hypothesis rejected',
      'Hypothesis inconclusive',
    ],

    example:
      'The mechanism angle may be validated even if the final CPA is weak when attention, retention, and clicks are strong but the landing page fails to convert.',

    sops: [
      'Hypothesis Evaluation SOP',
      'Creative Learning SOP',
      'Test Interpretation SOP',
    ],
  },

  {
    id: 'documentation',
    number: '11.13',
    title: 'Learning Documentation',
    shortTitle: 'Documentation',
    icon: 'knowledge',

    description:
      'Record the result, diagnosis, evidence, decision, reusable learning, and next action so the test improves the wider creative system.',

    questions: [
      'What was tested?',
      'What happened?',
      'Why did it happen?',
      'Which element worked?',
      'Which element failed?',
      'What evidence supports the conclusion?',
      'What should be repeated or avoided?',
      'What is the next action?',
    ],

    metrics: [
      'Concept ID',
      'Angle',
      'Persona',
      'Hook',
      'Format',
      'Spend',
      'Primary result',
      'Decision',
      'Learning',
      'Next action',
    ],

    outputs: [
      'Creative analysis record',
      'Reusable learning',
      'Iteration recommendation',
      'Knowledge-library entry',
    ],

    example:
      'Document that the hook and mechanism created interest, but the long explanation reduced retention before proof appeared.',

    sops: [
      'Creative Learning Documentation SOP',
      'Analysis Record Template',
      'Knowledge Capture SOP',
    ],
  },
];

const analysisOutcomes = [
  {
    id: 'winner',
    title: 'Validated Winner',
    description:
      'The asset produced strong enough strategic and commercial evidence to support scaling or expansion.',
    icon: 'scaling',
  },
  {
    id: 'iterate',
    title: 'Promising — Iterate',
    description:
      'A meaningful part of the concept worked, but a specific weakness should be improved before scaling.',
    icon: 'iteration',
  },
  {
    id: 'inconclusive',
    title: 'Inconclusive',
    description:
      'The test lacks enough spend, clean data, fair delivery, or consistent evidence for a final decision.',
    icon: 'analysis',
  },
  {
    id: 'failed',
    title: 'Hypothesis Rejected',
    description:
      'The evidence does not support the tested message, concept, execution, or customer response.',
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

function AnalysisDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-analysis-data-card">
      <div className="creative-op-analysis-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-analysis-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function AnalysisDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('data-quality');

  const [activeOutcome, setActiveOutcome] =
    useState('winner');

  const selectedSystem =
    analysisSystems.find(
      (system) => system.id === selectedSystemId
    ) || analysisSystems[0];

  return (
    <motion.section
      className="creative-op-analysis-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-analysis-topbar">
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

            <strong>Performance Analysis</strong>
          </div>
        </div>

        <div className="creative-op-analysis-heading">
          <span>STAGE 11 / INTELLIGENCE</span>

          <h1>Performance Analysis</h1>

          <p>
            Diagnose what happened, why it happened, what the test
            proved, and which action should follow.
          </p>
        </div>

        <div className="creative-op-analysis-counter">
          <strong>{analysisSystems.length}</strong>
          <span>Analysis systems</span>
        </div>
      </header>

      <div className="creative-op-analysis-layout">
        <aside className="creative-op-analysis-navigation">
          <div className="creative-op-analysis-navigation-intro">
            <span>ANALYSIS SYSTEMS</span>
            <h2>Diagnose creative performance</h2>
          </div>

          <nav>
            {analysisSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-analysis-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-analysis-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-analysis-nav-icon">
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

        <main className="creative-op-analysis-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-analysis-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-analysis-selected-header">
                <div className="creative-op-analysis-selected-icon">
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

              <section className="creative-op-analysis-question-card">
                <div className="creative-op-analysis-question-heading">
                  <div>
                    <span>DIAGNOSTIC FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-analysis-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-analysis-question-item"
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

              <section className="creative-op-analysis-example-card">
                <div className="creative-op-analysis-example-icon">
                  <CreativeStrategyOPIcon
                    type="analysis"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE ANALYSIS</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-analysis-bottom-grid">
                <AnalysisDataCard
                  title="Metrics & Evidence"
                  items={selectedSystem.metrics}
                  icon="analysis"
                />

                <AnalysisDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-analysis-sop-panel">
          <span className="creative-op-analysis-sop-eyebrow">
            PERFORMANCE DECISION LAYER
          </span>

          <h2>Analysis Outcomes</h2>

          <p>
            Every test receives a documented diagnosis and a clear
            next action.
          </p>

          <div className="creative-op-analysis-outcome-list">
            {analysisOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-analysis-outcome-card ${
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

          <div className="creative-op-analysis-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-analysis-sop-card"
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

          <div className="creative-op-analysis-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Documented Creative Learning</h3>

            <p>
              A clear performance diagnosis containing the evidence,
              hypothesis result, reusable learning, and recommended
              next action.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}