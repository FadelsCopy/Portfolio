// src/components/ScalingDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const scalingSystems = [
  {
    id: 'winner-validation',
    number: '13.1',
    title: 'Winner Validation',
    shortTitle: 'Winner Validation',
    icon: 'validation',

    description:
      'Confirm that the creative has enough strategic, performance, and commercial evidence to justify expansion and increased spend.',

    questions: [
      'Has the creative spent enough to support a scaling decision?',
      'Is performance stable across multiple days?',
      'Does the result remain strong after additional spend?',
      'Are conversions distributed rather than concentrated in one event?',
      'Does the asset beat the account baseline?',
      'Does the concept perform across more than one placement?',
      'Is the performance profitable or contribution-positive?',
      'Which exact elements created the result?',
    ],

    expansionAreas: [
      'Spend stability',
      'Conversion volume',
      'CPA stability',
      'ROAS stability',
      'Hook strength',
      'Retention strength',
      'Click quality',
      'Conversion quality',
      'Placement stability',
      'Audience stability',
    ],

    outputs: [
      'Validated-winner status',
      'Scaling confidence level',
      'Protected winning elements',
      'Expansion recommendation',
    ],

    example:
      'Scale only after the creative maintains acceptable CPA and ROAS across sufficient spend, time, and conversion volume.',

    sops: [
      'Winner Validation SOP',
      'Scaling Confidence SOP',
      'Creative Winner Criteria SOP',
    ],
  },

  {
    id: 'budget-readiness',
    number: '13.2',
    title: 'Budget Scaling Readiness',
    shortTitle: 'Budget Readiness',
    icon: 'operations',

    description:
      'Determine how quickly spend can increase without destabilizing performance, exhausting the audience, or overwhelming the wider funnel.',

    questions: [
      'How much spend is the creative currently supporting?',
      'Is performance stable at the current budget?',
      'How sensitive is CPA to budget increases?',
      'Can inventory and operations support more demand?',
      'Can the landing page support more traffic?',
      'Is the audience large enough?',
      'Should budget increase vertically or through duplication?',
      'What rollback condition should be used?',
    ],

    expansionAreas: [
      'Current daily spend',
      'Target daily spend',
      'Budget increase percentage',
      'CPA tolerance',
      'ROAS tolerance',
      'Audience size',
      'Inventory capacity',
      'Landing-page capacity',
      'Operational capacity',
      'Rollback threshold',
    ],

    outputs: [
      'Budget-scaling plan',
      'Increase schedule',
      'Rollback conditions',
      'Capacity-risk notes',
    ],

    example:
      'Increase spend in controlled steps while monitoring CPA, ROAS, frequency, conversion rate, and fulfillment capacity.',

    sops: [
      'Budget Scaling SOP',
      'Spend Increase SOP',
      'Scaling Rollback SOP',
    ],
  },

  {
    id: 'hook-expansion',
    number: '13.3',
    title: 'Hook Expansion',
    shortTitle: 'Hook Expansion',
    icon: 'angles',

    description:
      'Generate new entry points around the validated concept while preserving the message, proof, body, and commercial structure that already work.',

    questions: [
      'Which hook produced the strongest signal?',
      'What underlying pattern made the hook work?',
      'Can the same idea be framed through a different pain?',
      'Can proof lead the opening?',
      'Can the desire lead the opening?',
      'Can a customer quote become the hook?',
      'Can the visual opening change while the message remains controlled?',
      'How many hook families can the winner support?',
    ],

    expansionAreas: [
      'Direct problem hook',
      'Desire hook',
      'Proof hook',
      'Customer quote hook',
      'Contrarian hook',
      'Visual hook',
      'Demonstration hook',
      'Identity hook',
      'Question hook',
      'Story hook',
    ],

    outputs: [
      'Expanded hook library',
      'Hook-family structure',
      'Shared-body variations',
      'Hook testing queue',
    ],

    example:
      'Keep the validated mechanism body and expand the opening through problem, proof, customer quote, and visual-demonstration hooks.',

    sops: [
      'Hook Expansion SOP',
      'Winner Hook Family SOP',
      'Shared Body Scaling SOP',
    ],
  },

  {
    id: 'creator-expansion',
    number: '13.4',
    title: 'Creator Expansion',
    shortTitle: 'Creator Expansion',
    icon: 'personas',

    description:
      'Test the validated concept across new creators, customer profiles, authority types, environments, and delivery styles.',

    questions: [
      'Which creator characteristics contributed to performance?',
      'Does the creator strongly represent the target persona?',
      'Can the same script work with another creator?',
      'Would a founder strengthen credibility?',
      'Would an expert improve mechanism belief?',
      'Can different age groups expand relevance?',
      'Can different environments improve native fit?',
      'Which creator variables should remain controlled?',
    ],

    expansionAreas: [
      'Customer creator',
      'Founder',
      'Expert',
      'Authority figure',
      'Different age group',
      'Different gender',
      'Different lifestyle',
      'Different environment',
      'Different energy level',
      'Different delivery style',
    ],

    outputs: [
      'Creator-expansion plan',
      'Creator testing matrix',
      'Controlled-script versions',
      'Creator sourcing brief',
    ],

    example:
      'Retain the validated script and proof while testing creators who represent different high-potential customer segments.',

    sops: [
      'Creator Expansion SOP',
      'Creator Testing Matrix SOP',
      'Creator Sourcing SOP',
    ],
  },

  {
    id: 'format-expansion',
    number: '13.5',
    title: 'Format Expansion',
    shortTitle: 'Format Expansion',
    icon: 'production',

    description:
      'Translate the validated angle and concept into additional creative formats without losing the strategic reason it worked.',

    questions: [
      'Which part of the winner is format-independent?',
      'Can the concept become a static ad?',
      'Can it become a mini-VSL?',
      'Can it become a longer VSL?',
      'Can it support an advertorial?',
      'Can it become a listicle?',
      'Can it become a founder or expert ad?',
      'What must change for each format?',
    ],

    expansionAreas: [
      'UGC',
      'Founder ad',
      'Expert ad',
      'Static ad',
      'Native ad',
      'Mini-VSL',
      'Long-form VSL',
      'Advertorial',
      'Listicle',
      'Testimonial',
      'Demonstration',
      'Podcast style',
    ],

    outputs: [
      'Format-expansion plan',
      'Cross-format concept cards',
      'Format-specific briefs',
      'Production priority',
    ],

    example:
      'Turn the winning UGC mechanism concept into a static comparison, a mini-VSL, and an advertorial that explains the same belief shift.',

    sops: [
      'Format Expansion SOP',
      'Cross-Format Translation SOP',
      'Winner Repurposing SOP',
    ],
  },

  {
    id: 'persona-expansion',
    number: '13.6',
    title: 'Persona Expansion',
    shortTitle: 'Persona Expansion',
    icon: 'personas',

    description:
      'Adapt the winner for adjacent personas, sub-personas, use cases, life stages, urgency levels, and customer contexts.',

    questions: [
      'Which persona validated the original concept?',
      'Which adjacent persona shares the same core problem?',
      'Does another persona want a different outcome?',
      'Does a life-stage difference change the message?',
      'Can the same mechanism solve another use case?',
      'What objection changes between personas?',
      'What proof is required for the new persona?',
      'Which expansion segment has enough evidence to test?',
    ],

    expansionAreas: [
      'Primary persona',
      'Sub-persona',
      'Adjacent persona',
      'Higher-urgency persona',
      'Lower-awareness persona',
      'Experienced buyer',
      'Beginner buyer',
      'Gift buyer',
      'Household buyer',
      'Secondary use case',
    ],

    outputs: [
      'Persona-expansion map',
      'Persona-specific adaptations',
      'New messaging requirements',
      'Expansion testing queue',
    ],

    example:
      'Adapt a general hair-shedding winner for postpartum customers using the same mechanism but different context, language, proof, and objections.',

    sops: [
      'Persona Expansion SOP',
      'Adjacent Persona SOP',
      'Persona Adaptation SOP',
    ],
  },

  {
    id: 'awareness-expansion',
    number: '13.7',
    title: 'Awareness-Level Expansion',
    shortTitle: 'Awareness Expansion',
    icon: 'knowledge',

    description:
      'Adapt the winner to customers at different levels of problem, solution, product, and brand awareness.',

    questions: [
      'Which awareness level validated the original asset?',
      'Can the angle be simplified for unaware customers?',
      'Can the message become more direct for product-aware buyers?',
      'What education is needed for problem-aware customers?',
      'What proof is required for solution-aware customers?',
      'Can the offer lead for most-aware customers?',
      'Which format fits each level?',
      'Which landing page should support each version?',
    ],

    expansionAreas: [
      'Unaware',
      'Problem aware',
      'Solution aware',
      'Product aware',
      'Most aware',
      'Education level',
      'Proof level',
      'Offer emphasis',
      'Format selection',
      'Landing-page selection',
    ],

    outputs: [
      'Awareness-expansion matrix',
      'Message adaptations',
      'Format recommendations',
      'Funnel destination plan',
    ],

    example:
      'Use a story-led version for unaware customers and a direct proof-and-offer version for product-aware customers.',

    sops: [
      'Awareness Expansion SOP',
      'Winner Funnel Adaptation SOP',
      'Message by Awareness SOP',
    ],
  },

  {
    id: 'placement-expansion',
    number: '13.8',
    title: 'Platform & Placement Expansion',
    shortTitle: 'Placement Expansion',
    icon: 'launch',

    description:
      'Adapt the winner for new platforms, placements, aspect ratios, content behaviors, and distribution environments.',

    questions: [
      'Where did the original asset perform best?',
      'Can the asset work in additional placements?',
      'Does the opening fit each platform?',
      'Are new aspect ratios required?',
      'Does the creative work without sound?',
      'Should pacing change by placement?',
      'Does the CTA fit the platform behavior?',
      'What must remain consistent across versions?',
    ],

    expansionAreas: [
      'Meta Feed',
      'Instagram Reels',
      'Instagram Stories',
      'Facebook Feed',
      'TikTok',
      'YouTube Shorts',
      'YouTube in-stream',
      'Pinterest',
      'Display',
      'Organic social',
    ],

    outputs: [
      'Placement-expansion plan',
      'Platform-specific versions',
      'Aspect-ratio requirements',
      'Platform testing queue',
    ],

    example:
      'Adapt the Meta winner for TikTok using a more native opening, faster pacing, vertical framing, and platform-specific CTA.',

    sops: [
      'Platform Expansion SOP',
      'Placement Adaptation SOP',
      'Cross-Platform Creative SOP',
    ],
  },

  {
    id: 'offer-expansion',
    number: '13.9',
    title: 'Offer Expansion',
    shortTitle: 'Offer Expansion',
    icon: 'foundation',

    description:
      'Test whether the validated creative can support stronger value framing, bundles, guarantees, subscriptions, bonuses, or seasonal offers.',

    questions: [
      'Which offer supported the original winner?',
      'Can the product bundle increase average order value?',
      'Can the guarantee reduce hesitation?',
      'Can subscription improve economics?',
      'Can a free gift strengthen value?',
      'Can the offer support more scale?',
      'Could urgency increase action without damaging trust?',
      'Which offer variable should be tested first?',
    ],

    expansionAreas: [
      'Bundle',
      'Subscription',
      'Discount',
      'Free gift',
      'Bonus',
      'Guarantee',
      'Trial',
      'Shipping offer',
      'Seasonal offer',
      'Value framing',
    ],

    outputs: [
      'Offer-expansion plan',
      'Commercial variations',
      'Value-framing concepts',
      'Offer testing queue',
    ],

    example:
      'Keep the winning concept unchanged while testing a three-month bundle against a subscription offer and stronger guarantee framing.',

    sops: [
      'Offer Expansion SOP',
      'Winner Offer Testing SOP',
      'Value Expansion SOP',
    ],
  },

  {
    id: 'landing-page-expansion',
    number: '13.10',
    title: 'Landing-Page Expansion',
    shortTitle: 'Landing Page',
    icon: 'briefing',

    description:
      'Match the winner with new landing-page formats and message depths to increase conversion and support wider audience expansion.',

    questions: [
      'Which page supported the original winner?',
      'Does a direct product page limit scale?',
      'Could an advertorial improve education?',
      'Could a listicle improve consideration?',
      'Could a quiz improve personalization?',
      'Does the page preserve the winning message?',
      'Which page fits each awareness level?',
      'How will destination tests remain controlled?',
    ],

    expansionAreas: [
      'Product page',
      'Advertorial',
      'Listicle',
      'Quiz',
      'Collection page',
      'Long-form sales page',
      'Video sales page',
      'Lead-generation page',
      'Offer page',
      'Localized page',
    ],

    outputs: [
      'Destination-expansion plan',
      'Message-match requirements',
      'Landing-page testing matrix',
      'Conversion expansion opportunities',
    ],

    example:
      'Pair the educational mechanism winner with an advertorial while retaining the same offer, audience, and core promise.',

    sops: [
      'Landing-Page Expansion SOP',
      'Destination Testing SOP',
      'Winner Message Match SOP',
    ],
  },

  {
    id: 'fatigue',
    number: '13.11',
    title: 'Creative-Fatigue Monitoring',
    shortTitle: 'Fatigue Monitoring',
    icon: 'analysis',

    description:
      'Track whether the winner is losing efficiency because of rising frequency, audience saturation, declining attention, or message exhaustion.',

    questions: [
      'Is frequency increasing?',
      'Is CPM rising while audience conditions remain similar?',
      'Is hook rate declining?',
      'Is CTR declining?',
      'Is CPA increasing gradually?',
      'Are comments showing repeated exposure?',
      'Is spend shifting away from the asset?',
      'Does the winner need refreshing or replacement?',
    ],

    expansionAreas: [
      'Frequency',
      'CPM movement',
      'Hook-rate movement',
      'CTR movement',
      'CPC movement',
      'CPA movement',
      'ROAS movement',
      'Daily spend',
      'Audience saturation',
      'Comment sentiment',
    ],

    outputs: [
      'Fatigue status',
      'Fatigue warning level',
      'Refresh recommendation',
      'Replacement timeline',
    ],

    example:
      'Refresh the winner before severe performance collapse when frequency rises and hook rate, CTR, and CPA weaken consistently.',

    sops: [
      'Creative Fatigue SOP',
      'Winner Monitoring SOP',
      'Fatigue Warning System SOP',
    ],
  },

  {
    id: 'scaling-protection',
    number: '13.12',
    title: 'Scaling Protection',
    shortTitle: 'Scaling Protection',
    icon: 'decision',

    description:
      'Protect the original winner, control expansion variables, and avoid damaging performance through excessive changes or uncontrolled duplication.',

    questions: [
      'Which original asset should remain untouched?',
      'Which elements must stay controlled?',
      'How many expansions should launch simultaneously?',
      'Could new versions compete against the original?',
      'Is campaign structure preserving delivery?',
      'Are naming and versioning clear?',
      'Is the team documenting each expansion?',
      'What condition should pause further scaling?',
    ],

    expansionAreas: [
      'Original winner protection',
      'Controlled variables',
      'Version control',
      'Campaign structure',
      'Budget protection',
      'Audience overlap',
      'Naming taxonomy',
      'Learning documentation',
      'Rollback condition',
      'Scaling limit',
    ],

    outputs: [
      'Winner-protection plan',
      'Controlled expansion structure',
      'Rollback rules',
      'Scaling governance',
    ],

    example:
      'Keep the original winner live as the control while launching clearly named expansion versions with one major variable changed at a time.',

    sops: [
      'Scaling Protection SOP',
      'Winner Control SOP',
      'Scaling Governance SOP',
    ],
  },
];

const scalingOutcomes = [
  {
    id: 'scale',
    title: 'Scale Winner',
    description:
      'The creative has enough stable performance and commercial evidence to support increased spend.',
    icon: 'scaling',
  },
  {
    id: 'expand',
    title: 'Expand Territory',
    description:
      'The original asset remains controlled while the winning concept expands across hooks, creators, formats, or personas.',
    icon: 'newConcepts',
  },
  {
    id: 'protect',
    title: 'Protect & Monitor',
    description:
      'The winner is performing, but more evidence or operational capacity is required before aggressive expansion.',
    icon: 'analysis',
  },
  {
    id: 'rollback',
    title: 'Rollback',
    description:
      'Scaling reduced performance beyond the acceptable threshold, so spend or expansion should return to the last stable level.',
    icon: 'iteration',
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

function ScalingDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-scaling-data-card">
      <div className="creative-op-scaling-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-scaling-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function ScalingDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('winner-validation');

  const [activeOutcome, setActiveOutcome] =
    useState('scale');

  const selectedSystem =
    scalingSystems.find(
      (system) => system.id === selectedSystemId
    ) || scalingSystems[0];

  return (
    <motion.section
      className="creative-op-scaling-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-scaling-topbar">
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

            <strong>Scaling & Winner Expansion</strong>
          </div>
        </div>

        <div className="creative-op-scaling-heading">
          <span>STAGE 13 / GROWTH</span>

          <h1>Scaling & Winner Expansion</h1>

          <p>
            Increase spend, expand the winning territory, protect
            validated elements, and monitor fatigue without destroying
            the original performance signal.
          </p>
        </div>

        <div className="creative-op-scaling-counter">
          <strong>{scalingSystems.length}</strong>
          <span>Scaling systems</span>
        </div>
      </header>

      <div className="creative-op-scaling-layout">
        <aside className="creative-op-scaling-navigation">
          <div className="creative-op-scaling-navigation-intro">
            <span>SCALING SYSTEMS</span>
            <h2>Expand the winning territory</h2>
          </div>

          <nav>
            {scalingSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-scaling-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-scaling-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-scaling-nav-icon">
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

        <main className="creative-op-scaling-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-scaling-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-scaling-selected-header">
                <div className="creative-op-scaling-selected-icon">
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

              <section className="creative-op-scaling-question-card">
                <div className="creative-op-scaling-question-heading">
                  <div>
                    <span>SCALING FRAMEWORK</span>
                    <h3>Questions to Answer</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-scaling-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-scaling-question-item"
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

              <section className="creative-op-scaling-example-card">
                <div className="creative-op-scaling-example-icon">
                  <CreativeStrategyOPIcon
                    type="scaling"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE SCALING DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-scaling-bottom-grid">
                <ScalingDataCard
                  title="Expansion Areas"
                  items={selectedSystem.expansionAreas}
                  icon="scaling"
                />

                <ScalingDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-scaling-sop-panel">
          <span className="creative-op-scaling-sop-eyebrow">
            GROWTH DECISION LAYER
          </span>

          <h2>Scaling Outcomes</h2>

          <p>
            Every winner receives a controlled growth decision based
            on evidence, stability, capacity, and fatigue risk.
          </p>

          <div className="creative-op-scaling-outcome-list">
            {scalingOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-scaling-outcome-card ${
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

          <div className="creative-op-scaling-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-scaling-sop-card"
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

          <div className="creative-op-scaling-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Expanded Winner Territory</h3>

            <p>
              A protected and documented winner supported by
              controlled spend increases, new variations, expansion
              tests, fatigue monitoring, and rollback rules.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}