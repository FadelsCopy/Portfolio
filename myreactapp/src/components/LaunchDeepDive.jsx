// src/components/LaunchDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const launchSystems = [
  {
    id: 'readiness',
    number: '10.1',
    title: 'Launch Readiness',
    shortTitle: 'Readiness',
    icon: 'validation',

    description:
      'Confirm that the creative, brief, offer, tracking, campaign structure, landing page, and ownership are ready before anything is published.',

    questions: [
      'Has the final creative been approved?',
      'Has compliance approval been completed?',
      'Are the correct variations included?',
      'Is the campaign destination confirmed?',
      'Is the correct landing page live?',
      'Is the correct offer active?',
      'Is tracking functioning?',
      'Are launch ownership and timing confirmed?',
    ],

    requirements: [
      'Approved creative',
      'Approved claims',
      'Correct campaign',
      'Correct landing page',
      'Correct offer',
      'Working tracking',
      'Launch owner',
      'Launch date',
      'Monitoring owner',
      'Decision criteria',
    ],

    outputs: [
      'Launch-readiness status',
      'Missing-item list',
      'Launch approval',
      'Assigned launch owner',
    ],

    example:
      'Do not upload until the final creative, landing page, offer, tracking, naming, budget, and monitoring responsibilities are confirmed.',

    sops: [
      'Launch Readiness SOP',
      'Pre-Launch Checklist',
      'Launch Ownership SOP',
    ],
  },

  {
    id: 'campaign',
    number: '10.2',
    title: 'Campaign Assignment',
    shortTitle: 'Campaign',
    icon: 'operations',

    description:
      'Assign the creative to the correct campaign structure based on the testing objective, account strategy, optimization event, and business goal.',

    questions: [
      'Is this a testing or scaling campaign?',
      'Which objective should be used?',
      'Which optimization event is correct?',
      'Should the asset enter an existing campaign?',
      'Does it require a new campaign?',
      'Does the campaign preserve a clean test?',
      'What naming structure should be used?',
      'Who approves campaign creation?',
    ],

    requirements: [
      'Campaign objective',
      'Optimization event',
      'Campaign type',
      'Testing or scaling status',
      'Existing or new campaign',
      'Campaign name',
      'Attribution setting',
      'Campaign owner',
    ],

    outputs: [
      'Campaign assignment',
      'Campaign configuration',
      'Campaign naming',
      'Launch destination',
    ],

    example:
      'Place the MVP inside the controlled testing campaign rather than mixing it immediately with mature scaling creatives.',

    sops: [
      'Campaign Assignment SOP',
      'Testing Campaign SOP',
      'Campaign Naming SOP',
    ],
  },

  {
    id: 'ad-set',
    number: '10.3',
    title: 'Ad Set & Audience Assignment',
    shortTitle: 'Audience',
    icon: 'personas',

    description:
      'Assign the creative to the appropriate audience, optimization structure, geography, exclusions, and testing environment.',

    questions: [
      'Which audience should receive the creative?',
      'Is the persona represented by the audience?',
      'Should the test use broad targeting?',
      'Are exclusions required?',
      'Which geography is appropriate?',
      'Should existing customers be excluded?',
      'Does the audience allow a fair creative test?',
      'Is the audience large enough to deliver?',
    ],

    requirements: [
      'Audience type',
      'Target geography',
      'Age range',
      'Gender if relevant',
      'Broad or interest targeting',
      'Lookalike settings',
      'Exclusions',
      'Customer suppression',
      'Audience size',
      'Optimization event',
    ],

    outputs: [
      'Audience assignment',
      'Ad-set configuration',
      'Exclusion list',
      'Audience testing notes',
    ],

    example:
      'Use the standard broad prospecting audience so the creative is evaluated without introducing a new audience variable.',

    sops: [
      'Audience Assignment SOP',
      'Broad Testing SOP',
      'Audience Exclusion SOP',
    ],
  },

  {
    id: 'placements',
    number: '10.4',
    title: 'Placement Selection',
    shortTitle: 'Placements',
    icon: 'launch',

    description:
      'Select placements that match the creative format, intended customer behavior, aspect ratio, and testing objective.',

    questions: [
      'Which placements fit the format?',
      'Is the creative designed for vertical viewing?',
      'Can the asset work in feed and stories?',
      'Should placements remain automatic?',
      'Does the concept rely on sound?',
      'Are placement-specific versions required?',
      'Could one placement distort the test?',
      'Are safe zones correct for every placement?',
    ],

    requirements: [
      'Feed compatibility',
      'Story compatibility',
      'Reels compatibility',
      'Aspect-ratio compatibility',
      'Safe-zone review',
      'Sound-off comprehension',
      'Automatic or manual placements',
      'Placement-specific assets',
    ],

    outputs: [
      'Placement assignment',
      'Placement exclusions',
      'Format mapping',
      'Placement variation plan',
    ],

    example:
      'Launch the 9:16 version across Reels and Stories and the 4:5 version inside Feed placements.',

    sops: [
      'Placement Selection SOP',
      'Placement Format SOP',
      'Safe-Zone SOP',
    ],
  },

  {
    id: 'budget',
    number: '10.5',
    title: 'Budget Allocation',
    shortTitle: 'Budget',
    icon: 'operations',

    description:
      'Assign enough spend to generate a useful signal while protecting the account from overspending on an unvalidated asset.',

    questions: [
      'What is the target CPA?',
      'How much spend is needed before judgment?',
      'How many variations are included?',
      'Should spend be distributed equally?',
      'Is the budget controlled at campaign or ad-set level?',
      'What daily budget is appropriate?',
      'What is the maximum test budget?',
      'When should spend be increased or stopped?',
    ],

    requirements: [
      'Target CPA',
      'Daily budget',
      'Total testing budget',
      'Variation count',
      'Budget-control level',
      'Minimum spend',
      'Maximum spend',
      'Scale condition',
      'Stop condition',
    ],

    outputs: [
      'Budget assignment',
      'Spend limits',
      'Scale conditions',
      'Stop conditions',
    ],

    example:
      'Give each hook enough spend to generate a signal while keeping the body, offer, audience, and landing page constant.',

    sops: [
      'Creative Testing Budget SOP',
      'Spend Threshold SOP',
      'Budget Allocation SOP',
    ],
  },

  {
    id: 'naming',
    number: '10.6',
    title: 'Ad Naming & Taxonomy',
    shortTitle: 'Naming',
    icon: 'knowledge',

    description:
      'Name every asset using a consistent taxonomy that makes performance analysis, filtering, reporting, and learning retrieval easier.',

    questions: [
      'Does the name identify the concept?',
      'Does it identify the angle?',
      'Does it identify the persona?',
      'Does it identify the hook?',
      'Does it identify the format?',
      'Does it identify the version?',
      'Is the name short enough to read?',
      'Can the name be understood months later?',
    ],

    requirements: [
      'Concept ID',
      'Angle ID',
      'Persona ID',
      'Hook ID',
      'Format',
      'Creator',
      'Version',
      'Launch date',
      'Platform',
      'Testing status',
    ],

    outputs: [
      'Final ad name',
      'Naming taxonomy',
      'Creative ID',
      'Performance-tracking label',
    ],

    example:
      'CS06_MECH_P1_H03_UGC_CR02_V1_2026-08 rather than a vague filename such as final-video-new-3.',

    sops: [
      'Creative Naming SOP',
      'Ad Taxonomy SOP',
      'Creative ID SOP',
    ],
  },

  {
    id: 'tracking',
    number: '10.7',
    title: 'Tracking & Attribution',
    shortTitle: 'Tracking',
    icon: 'analysis',

    description:
      'Confirm that platform tracking, analytics, attribution, UTMs, events, and reporting systems can identify the creative’s performance accurately.',

    questions: [
      'Is the correct pixel or data source connected?',
      'Is the optimization event firing?',
      'Are UTMs included?',
      'Can the creative be identified in analytics?',
      'Is server-side tracking active?',
      'Is the attribution setting correct?',
      'Are duplicate events present?',
      'Has the full conversion path been tested?',
    ],

    requirements: [
      'Pixel connection',
      'Conversion API',
      'Optimization event',
      'UTM parameters',
      'Analytics integration',
      'Attribution setting',
      'Event deduplication',
      'Conversion-path test',
      'Creative ID',
      'Reporting connection',
    ],

    outputs: [
      'Verified tracking',
      'UTM structure',
      'Attribution configuration',
      'Tracking issue list',
    ],

    example:
      'Complete a test purchase or lead submission and confirm that the platform, analytics tool, and reporting sheet identify the conversion correctly.',

    sops: [
      'Tracking QA SOP',
      'UTM Naming SOP',
      'Attribution Setup SOP',
    ],
  },

  {
    id: 'landing-page',
    number: '10.8',
    title: 'Landing-Page Assignment',
    shortTitle: 'Landing Page',
    icon: 'briefing',

    description:
      'Send the creative to the page most aligned with its awareness level, message, format, promise, mechanism, and offer.',

    questions: [
      'Does the landing page continue the creative message?',
      'Does the page match the awareness level?',
      'Is the promised product or offer immediately visible?',
      'Does the page support the angle?',
      'Is the mechanism explained consistently?',
      'Does the page include the required proof?',
      'Is the page mobile optimized?',
      'Is the page loading correctly?',
    ],

    requirements: [
      'Correct destination URL',
      'Message continuity',
      'Offer continuity',
      'Product continuity',
      'Proof continuity',
      'Mobile optimization',
      'Page speed',
      'Working checkout',
      'Working forms',
      'Tracking parameters',
    ],

    outputs: [
      'Landing-page assignment',
      'Message-match approval',
      'Page issue list',
      'Destination URL',
    ],

    example:
      'Send the mechanism-focused creative to the advertorial that explains the mechanism rather than directly to a generic product page.',

    sops: [
      'Landing-Page Assignment SOP',
      'Message Match SOP',
      'Destination QA SOP',
    ],
  },

  {
    id: 'offer',
    number: '10.9',
    title: 'Offer Verification',
    shortTitle: 'Offer',
    icon: 'foundation',

    description:
      'Verify that the live page, cart, checkout, discount, bundle, guarantee, urgency, and CTA match the creative promise.',

    questions: [
      'Is the advertised price correct?',
      'Is the discount active?',
      'Is the correct bundle available?',
      'Is the guarantee visible?',
      'Is the free gift included?',
      'Does the checkout preserve the offer?',
      'Is urgency accurate?',
      'Could the customer experience a message mismatch?',
    ],

    requirements: [
      'Correct price',
      'Correct discount',
      'Correct bundle',
      'Correct guarantee',
      'Correct free gift',
      'Correct subscription option',
      'Working promo code',
      'Accurate urgency',
      'Checkout consistency',
      'Mobile purchase test',
    ],

    outputs: [
      'Verified live offer',
      'Offer discrepancy list',
      'Checkout confirmation',
      'Offer approval',
    ],

    example:
      'Confirm that the three-month bundle, free brush, discount, and 100-day guarantee appear consistently from ad to checkout.',

    sops: [
      'Offer Verification SOP',
      'Checkout QA SOP',
      'Promotion Validation SOP',
    ],
  },

  {
    id: 'upload',
    number: '10.10',
    title: 'Upload & Platform QA',
    shortTitle: 'Upload QA',
    icon: 'production',

    description:
      'Upload the creative and inspect the live platform preview for cropping, captions, audio, copy, destination, tracking, and delivery issues.',

    questions: [
      'Was the correct file uploaded?',
      'Does the platform crop the asset?',
      'Are captions readable?',
      'Is audio working?',
      'Is the thumbnail correct?',
      'Is the primary text correct?',
      'Is the headline correct?',
      'Does the CTA lead to the correct destination?',
    ],

    requirements: [
      'Correct final file',
      'Correct ad copy',
      'Correct headline',
      'Correct CTA',
      'Correct thumbnail',
      'Correct destination',
      'Correct tracking',
      'Correct preview',
      'No cropping',
      'No platform errors',
    ],

    outputs: [
      'Platform-approved ad',
      'Upload issue list',
      'Corrected upload',
      'Final preview approval',
    ],

    example:
      'Review every placement preview before publishing instead of assuming that one uploaded file displays correctly everywhere.',

    sops: [
      'Ad Upload SOP',
      'Platform Preview QA SOP',
      'Final Upload Checklist',
    ],
  },

  {
    id: 'timing',
    number: '10.11',
    title: 'Launch Timing',
    shortTitle: 'Timing',
    icon: 'operations',

    description:
      'Choose a launch time that supports clean monitoring, sufficient delivery, operational availability, and fair performance interpretation.',

    questions: [
      'When will the campaign begin delivering?',
      'Will someone be available to monitor it?',
      'Is the launch happening during a promotion?',
      'Could seasonality distort the result?',
      'Should the test begin at the start of a new day?',
      'Does the account need a learning period?',
      'Are other major account changes happening?',
      'When is the first review scheduled?',
    ],

    requirements: [
      'Launch date',
      'Launch time',
      'Timezone',
      'Monitoring coverage',
      'Promotion context',
      'Seasonality context',
      'First review time',
      'Decision-review time',
    ],

    outputs: [
      'Launch schedule',
      'Monitoring schedule',
      'First-review appointment',
      'Timing notes',
    ],

    example:
      'Launch early enough that the strategist or media buyer can monitor delivery, tracking, spend, and technical issues during the first hours.',

    sops: [
      'Launch Timing SOP',
      'Creative Monitoring Schedule SOP',
      'Promotion Launch SOP',
    ],
  },

  {
    id: 'early-monitoring',
    number: '10.12',
    title: 'Early Launch Monitoring',
    shortTitle: 'Early Monitoring',
    icon: 'analysis',

    description:
      'Monitor delivery, spend, tracking, comments, disapprovals, technical problems, and extreme performance signals immediately after launch.',

    questions: [
      'Is the ad delivering?',
      'Is spend distributing correctly?',
      'Is tracking recording events?',
      'Has the platform rejected or limited the ad?',
      'Are there broken links?',
      'Are comments revealing confusion?',
      'Is one variation receiving no spend?',
      'Is there a severe signal requiring intervention?',
    ],

    requirements: [
      'Delivery check',
      'Spend check',
      'Tracking check',
      'Disapproval check',
      'Destination check',
      'Comment check',
      'Variation delivery check',
      'Early anomaly check',
      'Monitoring owner',
      'Issue-escalation channel',
    ],

    outputs: [
      'Early monitoring report',
      'Launch issue list',
      'Corrective actions',
      'Stable-launch confirmation',
    ],

    example:
      'Fix broken tracking or destination issues immediately, but avoid making strategic decisions from insignificant early data.',

    sops: [
      'Early Launch Monitoring SOP',
      'Launch Issue Escalation SOP',
      'Creative Delivery SOP',
    ],
  },
];

const launchOutcomes = [
  {
    id: 'live',
    title: 'Live & Stable',
    description:
      'The creative is delivering correctly with verified tracking, destination, offer, budget, and monitoring.',
    icon: 'launch',
  },
  {
    id: 'fix',
    title: 'Technical Fix',
    description:
      'A tracking, upload, destination, naming, delivery, or platform problem must be corrected.',
    icon: 'iteration',
  },
  {
    id: 'paused',
    title: 'Launch Paused',
    description:
      'The ad should not continue until a serious technical, compliance, offer, or landing-page issue is resolved.',
    icon: 'decision',
  },
  {
    id: 'rejected',
    title: 'Platform Rejected',
    description:
      'The platform has disapproved or restricted the creative and requires revision, appeal, or replacement.',
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

function LaunchDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-launch-data-card">
      <div className="creative-op-launch-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-launch-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function LaunchDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('readiness');

  const [activeOutcome, setActiveOutcome] =
    useState('live');

  const selectedSystem =
    launchSystems.find(
      (system) => system.id === selectedSystemId
    ) || launchSystems[0];

  return (
    <motion.section
      className="creative-op-launch-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-launch-topbar">
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

            <strong>Launch & Deployment</strong>
          </div>
        </div>

        <div className="creative-op-launch-heading">
          <span>STAGE 10 / DEPLOYMENT</span>

          <h1>Launch & Deployment</h1>

          <p>
            Deploy approved creative into the correct campaign,
            audience, placement, budget, offer, destination, and
            tracking environment.
          </p>
        </div>

        <div className="creative-op-launch-counter">
          <strong>{launchSystems.length}</strong>
          <span>Launch systems</span>
        </div>
      </header>

      <div className="creative-op-launch-layout">
        <aside className="creative-op-launch-navigation">
          <div className="creative-op-launch-navigation-intro">
            <span>LAUNCH SYSTEMS</span>
            <h2>Deploy the creative correctly</h2>
          </div>

          <nav>
            {launchSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-launch-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-launch-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-launch-nav-icon">
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

        <main className="creative-op-launch-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-launch-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-launch-selected-header">
                <div className="creative-op-launch-selected-icon">
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

              <section className="creative-op-launch-question-card">
                <div className="creative-op-launch-question-heading">
                  <div>
                    <span>LAUNCH FRAMEWORK</span>
                    <h3>Launch Questions</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-launch-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-launch-question-item"
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

              <section className="creative-op-launch-example-card">
                <div className="creative-op-launch-example-icon">
                  <CreativeStrategyOPIcon
                    type="launch"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE LAUNCH DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-launch-bottom-grid">
                <LaunchDataCard
                  title="Launch Requirements"
                  items={selectedSystem.requirements}
                  icon="briefing"
                />

                <LaunchDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-launch-sop-panel">
          <span className="creative-op-launch-sop-eyebrow">
            DEPLOYMENT STATUS
          </span>

          <h2>Launch Outcomes</h2>

          <p>
            Every launch receives a clear status before performance
            analysis begins.
          </p>

          <div className="creative-op-launch-outcome-list">
            {launchOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-launch-outcome-card ${
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

          <div className="creative-op-launch-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-launch-sop-card"
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

          <div className="creative-op-launch-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Live & Verified Creative Test</h3>

            <p>
              The creative is live inside the correct environment
              with verified tracking, offer, destination, budget,
              naming, and monitoring.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}