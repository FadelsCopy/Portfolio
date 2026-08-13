// src/components/CreativeScaling.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| CREATIVE SCALING DATA
|--------------------------------------------------------------------------
*/

const directExpansion = [
  {
    title: 'Hooks',
    keep: 'Angle + core body',
    change: 'Verbal hook / visual hook / first frame / opening scene',
  },
  {
    title: 'Creators',
    keep: 'Core message + proof + offer',
    change: 'Creator archetype / demographic / authority / delivery style',
  },
  {
    title: 'Cuts',
    keep: 'Winning concept',
    change: 'Length / pacing / scene order / product reveal / B roll',
  },
  {
    title: 'Visuals',
    keep: 'Winning message',
    change: 'Setting / framing / overlays / demonstrations / visual device',
  },
  {
    title: 'CTA',
    keep: 'Creative body + offer logic',
    change: 'CTA wording / transition / urgency / risk reversal',
  },
];

const expansionLevers = [
  {
    code: 'FORMAT',
    title: 'Same angle → new format',
    keep: 'Winning strategic truth',
    examples: [
      'UGC',
      'Expert',
      'Founder',
      'Static',
      'Podcast',
      'Demo',
      'Mini VSL',
      'Native',
      'Advertorial',
    ],
    rule:
      'Rebuild the argument for the strengths of the format. Do not just resize the original asset.',
  },
  {
    code: 'AWARENESS',
    title: 'Same truth → new awareness level',
    keep: 'Validated strategic truth',
    examples: [
      'Problem aware',
      'Solution aware',
      'Product aware',
      'Most aware',
    ],
    rule:
      'Change what you lead with based on what the customer already knows.',
  },
  {
    code: 'PERSONA',
    title: 'Winner → adjacent sub persona',
    keep: 'Only the insight that remains true',
    examples: [
      'Life stage',
      'Severity',
      'Failed solution history',
      'Use case',
      'Desired outcome',
    ],
    rule:
      'Adapt pain, language, situation, proof and hook. Do not force the winner onto a sub persona when the underlying insight no longer fits.',
  },
  {
    code: 'ANGLE',
    title: 'Winning truth → adjacent angle expressions',
    keep: 'Validated insight / mechanism / truth',
    examples: [
      'Failed alternative',
      'Mechanism',
      'Cost',
      'Transformation',
      'Fear',
      'Convenience',
    ],
    rule:
      'Stay close to the validated truth first. Do not jump straight into unrelated angle territory.',
  },
  {
    code: 'PROOF',
    title: 'Winning promise → new proof route',
    keep: 'Promise + product positioning',
    examples: [
      'Testimonial',
      'Review montage',
      'Before and after',
      'Expert',
      'Study / statistic',
      'Ingredient evidence',
      'Demo',
      'Comparison',
    ],
    rule:
      'Give the audience a new reason to believe the same winning promise.',
  },
];

const funnelSupport = [
  {
    stage: 'TOF',
    job: 'Acquire attention and introduce the winning territory.',
    assets: [
      'New hooks',
      'Creator variations',
      'Problem stories',
      'Desire stories',
      'Format expansion',
      'New situations',
    ],
  },
  {
    stage: 'MOF',
    job: 'Strengthen belief and answer the questions created by the winner.',
    assets: [
      'Testimonial statics',
      'Review statics',
      'Mechanism explainers',
      'Expert content',
      'Demonstrations',
      'Comparisons',
      'Objection handling',
      'Proof ads',
    ],
  },
  {
    stage: 'BOF',
    job: 'Remove purchase friction and make the decision easier.',
    assets: [
      'Offer',
      'Guarantee',
      'Bundle / discount',
      'FAQ',
      'Strongest transformation',
      'Why buy now',
      'Review volume',
      'Risk reversal',
    ],
  },
];

const andromedaDimensions = [
  {
    dimension: 'WHO',
    examples: 'Persona / sub persona / life stage / use case',
  },
  {
    dimension: 'MESSAGE',
    examples: 'Angle / adjacent angle / awareness / objection',
  },
  {
    dimension: 'PROOF',
    examples: 'Review / expert / demo / study / transformation',
  },
  {
    dimension: 'FORMAT',
    examples: 'UGC / static / expert / podcast / VSL / native',
  },
  {
    dimension: 'EXECUTION',
    examples: 'Creator / hook / visual device / pacing / length',
  },
];

const productionLanes = [
  {
    code: '01',
    title: 'Sustain the Winner',
    priority: 'Highest confidence',
    actions: [
      'New hooks',
      'New first frames',
      'New cuts',
      'Second creator',
      'Static support',
    ],
  },
  {
    code: '02',
    title: 'Diversify the Winner',
    priority: 'Reduce dependency',
    actions: [
      'New formats',
      'More creator archetypes',
      'Proof expansion',
      'New concepts from the same truth',
      'MOF / BOF support',
    ],
  },
  {
    code: '03',
    title: 'Expand the Market',
    priority: 'More distance / more upside',
    actions: [
      'Adjacent sub personas',
      'Awareness expansion',
      'Adjacent angle expressions',
      'New customer situations',
      'New concept branches',
    ],
  },
];

const winnerFamily = [
  {
    branch: 'DIRECT',
    items: ['Hooks', 'Creators', 'Cuts', 'Visuals'],
  },
  {
    branch: 'FORMAT',
    items: ['UGC', 'Expert', 'Static', 'Podcast', 'VSL'],
  },
  {
    branch: 'CONCEPT',
    items: ['Story', 'Demo', 'Myth', 'Comparison', 'Experiment'],
  },
  {
    branch: 'AUDIENCE',
    items: ['Sub persona A', 'Sub persona B', 'Sub persona C'],
  },
  {
    branch: 'AWARENESS',
    items: ['Problem', 'Solution', 'Product', 'Most aware'],
  },
  {
    branch: 'PROOF',
    items: ['Review', 'Transformation', 'Expert', 'Study'],
  },
  {
    branch: 'FUNNEL',
    items: ['TOF', 'MOF', 'BOF'],
  },
];

const fatigueSignals = [
  'Frequency rising',
  'Hook rate falling',
  'CTR declining',
  'CPA increasing',
  'ROAS declining',
  'Performance becoming less stable',
  'One creator or format carrying too much volume',
];

const executionRefreshes = [
  'New hooks',
  'New creators',
  'New visuals',
  'New formats',
  'New proof',
  'New situations',
  'New narratives',
];

const saturationMoves = [
  'New insight',
  'New persona',
  'New angle territory',
  'New core concept',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeScaling({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="WINNER EXPANSION SYSTEM"
      title="Creative Scaling"
      introduction="Turn one validated winner into a wider creative system without losing the strategic reason it worked."
    >
      {/* ==================================================================
          00 WINNER ACTIVATION
         ================================================================== */}

      <StageSection
        number="00"
        navTitle="Winner Activation"
        title="When the Winner Hits, Start Expanding"
        description="Do not wait for the winner to fatigue before building the assets that support and diversify it."
      >
        <div className="cs-activation">
          <div className="cs-activation-main">
            <span>SCALING TRIGGER</span>

            <h3>
              A convincing winner creates a production signal, not a reason to wait.
            </h3>

            <p>
              Once performance is strong enough relative to the account normal range,
              I keep the original running and begin building the closest, highest confidence
              expansions around it.
            </p>

            <StageFlow
              items={[
                'Winner Signal',
                'Keep Original Live',
                'Start Support Assets',
                'Start Direct Expansion',
                'Diversify',
              ]}
            />
          </div>

          <div className="cs-activation-side">
            <div className="cs-do">
              <span>DO NOW</span>

              <ul>
                <li>Capture the winning hypothesis</li>
                <li>Brief direct variations while the winner is still healthy</li>
                <li>Build proof and static support</li>
                <li>Reduce dependency on one creator or one format</li>
              </ul>
            </div>

            <div className="cs-dont">
              <span>DO NOT</span>

              <ul>
                <li>Wait until performance collapses before producing support</li>
                <li>Clone the same ad twenty times</li>
                <li>Assume every element inside one winner is proven</li>
                <li>Pause the original simply because new versions are being built</li>
              </ul>
            </div>
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          01 WINNER DNA
         ================================================================== */}

      <StageSection
        number="01"
        navTitle="Winner DNA"
        title="Lock the Winner DNA"
        description="Separate the strategic reason the winner may have worked from the specific execution used to express it."
      >
        <div className="cs-dna-question">
          <span>THE QUESTION</span>
          <strong>
            What worked because of the strategy, and what only happened to exist inside this execution?
          </strong>
        </div>

        <div className="cs-dna-grid">
          <article className="is-core">
            <span>STRATEGIC CORE</span>
            <h3>Potentially transferable</h3>

            <div className="cs-token-wrap">
              {[
                'Persona',
                'Insight',
                'Angle',
                'Promise',
                'Belief shift',
                'Mechanism',
                'Proof',
                'Offer',
              ].map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </article>

          <article className="is-execution">
            <span>EXECUTION</span>
            <h3>May be replaceable</h3>

            <div className="cs-token-wrap">
              {[
                'Hook',
                'Creator',
                'Format',
                'Narrative',
                'Visual device',
                'Pacing',
                'Length',
                'CTA execution',
              ].map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </article>
        </div>

        <div className="cs-confidence-grid">
          <article>
            <span>PROTECT</span>
            <strong>Evidence strongly suggests it matters.</strong>
            <p>Keep it stable in the closest scaling tests.</p>
          </article>

          <article>
            <span>CAN TEST</span>
            <strong>Likely useful, but not sacred.</strong>
            <p>Change it while protecting the strategic hypothesis.</p>
          </article>

          <article>
            <span>UNKNOWN</span>
            <strong>Do not pretend it is proven.</strong>
            <p>One winner does not prove every component caused the result.</p>
          </article>
        </div>
      </StageSection>

      {/* ==================================================================
          02 DIRECT EXPANSION
         ================================================================== */}

      <StageSection
        number="02"
        navTitle="Direct Expansion"
        title="Scale Closest to the Winner First"
        description="The fastest scaling layer keeps the strategic core stable and creates controlled execution diversity around it."
      >
        <div className="cs-direct-origin">
          <span>ORIGINAL WINNER</span>
          <strong>Winning persona + winning angle + winning concept + winning body</strong>
        </div>

        <div className="cs-direct-grid">
          {directExpansion.map((item, index) => (
            <article key={item.title}>
              <div className="cs-direct-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <h3>{item.title}</h3>

                <p>
                  <span>KEEP</span>
                  {item.keep}
                </p>

                <p>
                  <span>CHANGE</span>
                  {item.change}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="cs-direct-example">
          <span>FAST EXAMPLE</span>

          <div>
            <strong>Hook A + Body A</strong>
            <b>→</b>
            <strong>Hook B + Body A</strong>
            <strong>Hook C + Body A</strong>
            <strong>Hook D + Body A</strong>
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          03 EXPANSION MATRIX
         ================================================================== */}

      <StageSection
        number="03"
        navTitle="Expansion Matrix"
        title="Expand the Winning Learning"
        description="Scale outward across format, awareness, audience, adjacent angles and proof without losing the validated strategic truth."
      >
        <div className="cs-expansion-stack">
          {expansionLevers.map((lever, index) => (
            <article key={lever.code} className={`is-${lever.code.toLowerCase()}`}>
              <div className="cs-expansion-index">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{lever.code}</b>
              </div>

              <div className="cs-expansion-main">
                <h3>{lever.title}</h3>

                <p>
                  <span>KEEP</span>
                  {lever.keep}
                </p>
              </div>

              <div className="cs-expansion-examples">
                {lever.examples.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="cs-expansion-rule">
                <span>ACTION RULE</span>
                <p>{lever.rule}</p>
              </div>
            </article>
          ))}
        </div>
      </StageSection>

      {/* ==================================================================
          04 FUNNEL SUPPORT
         ================================================================== */}

      <StageSection
        number="04"
        navTitle="Funnel Support"
        title="Support the Winner Across the Funnel"
        description="A winning TOF asset should create a wider set of creatives that acquire attention, strengthen belief and remove purchase friction."
      >
        <div className="cs-funnel-grid">
          {funnelSupport.map((item) => (
            <article key={item.stage} className={`is-${item.stage.toLowerCase()}`}>
              <div className="cs-funnel-head">
                <span>{item.stage}</span>
                <strong>{item.job}</strong>
              </div>

              <div className="cs-funnel-assets">
                {item.assets.map((asset) => (
                  <span key={asset}>{asset}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="cs-static-support">
          <div>
            <span>STATIC SUPPORT EXAMPLE</span>
            <h3>
              One winning UGC video can create multiple support assets without copying the video.
            </h3>
          </div>

          <div className="cs-static-list">
            {[
              'Strongest testimonial',
              'Before and after',
              'Mechanism visual',
              'Comparison',
              'Guarantee / offer',
              'Review volume',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          05 ANDROMEDA
         ================================================================== */}

      <StageSection
        number="05"
        navTitle="Andromeda Diversity"
        title="Build Meaningful Creative Diversity for Andromeda"
        description="Meta can evaluate far larger creative candidate volumes. The practical job is to give the delivery system meaningfully different messages and executions, not cosmetic duplicates."
      >
        <div className="cs-andromeda-hero">
          <div>
            <span>ANDROMEDA AWARE SCALING</span>

            <h3>
              Do not turn one winner into twenty near identical ads.
            </h3>

            <p>
              Use the winner as a validated starting point, then diversify the dimensions
              that can help Meta match different creative candidates to different people,
              contexts and stages of awareness.
            </p>
          </div>

          <div className="cs-andromeda-rule">
            <span>BAD DIVERSITY</span>
            <strong>Same concept • same message • same proof • tiny cosmetic changes</strong>

            <span>USEFUL DIVERSITY</span>
            <strong>Different audience relevance • message • proof • format • execution</strong>
          </div>
        </div>

        <div className="cs-andromeda-grid">
          {andromedaDimensions.map((item) => (
            <article key={item.dimension}>
              <span>{item.dimension}</span>
              <p>{item.examples}</p>
            </article>
          ))}
        </div>

        <div className="cs-andromeda-example">
          <span>EXAMPLE CREATIVE FAMILY</span>

          <div>
            <b>Sub persona A + Problem aware + UGC + Testimonial</b>
            <b>Sub persona B + Solution aware + Expert + Mechanism proof</b>
            <b>Sub persona A + Product aware + Static + Comparison</b>
            <b>Most aware + Review led + Offer / guarantee</b>
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          06 VELOCITY
         ================================================================== */}

      <StageSection
        number="06"
        navTitle="Velocity & Priority"
        title="Decide What Gets Produced First"
        description="Scaling creates more opportunities than the team can produce at once. Prioritize the branches that protect performance, diversify risk and create useful learning."
      >
        <div className="cs-lanes">
          {productionLanes.map((lane) => (
            <article key={lane.code}>
              <div className="cs-lane-head">
                <span>{lane.code}</span>

                <div>
                  <h3>{lane.title}</h3>
                  <p>{lane.priority}</p>
                </div>
              </div>

              <div className="cs-lane-actions">
                {lane.actions.map((action) => (
                  <span key={action}>{action}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="cs-priority-bar">
          <span>PRIORITIZE BY</span>

          <div>
            <b>Confidence</b>
            <b>Speed</b>
            <b>Upside</b>
            <b>Diversification</b>
            <b>Learning Value</b>
          </div>
        </div>

        <div className="cs-priority-rule">
          <strong>
            Start close to the winner where confidence is highest. Expand further as
            the winner family becomes stable and the potential upside justifies more distance.
          </strong>
        </div>
      </StageSection>

      {/* ==================================================================
          07 WINNER FAMILY
         ================================================================== */}

      <StageSection
        number="07"
        navTitle="Winner Family"
        title="Turn One Winner Into a Creative Family"
        description="The output of scaling is not a folder of copies. It is a connected family of creative branches built around validated learning."
      >
        <div className="cs-family-root">
          <span>ORIGINAL WINNER</span>
          <h3>Validated strategic truth</h3>
          <p>Everything below must be able to explain how it connects back to this learning.</p>
        </div>

        <div className="cs-family-grid">
          {winnerFamily.map((branch) => (
            <article key={branch.branch}>
              <span>{branch.branch}</span>

              <div>
                {branch.items.map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="cs-family-check">
          <span>EACH BRANCH SHOULD DEFINE</span>

          <div>
            <b>What stays</b>
            <b>What changes</b>
            <b>Why it is worth testing</b>
            <b>Connection to winner</b>
            <b>Learning goal</b>
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          08 FATIGUE / EXIT
         ================================================================== */}

      <StageSection
        number="08"
        navTitle="Fatigue & Exit"
        title="Know Whether to Refresh or Go Back Upstream"
        description="Do not confuse execution fatigue with saturation of the broader strategic territory."
      >
        <div className="cs-fatigue-grid">
          <article className="is-fatigue">
            <span>EXECUTION FATIGUE</span>
            <h3>The strategy may still work. The current execution is getting tired.</h3>

            <div className="cs-fatigue-columns">
              <div>
                <small>SIGNALS</small>

                {fatigueSignals.map((signal) => (
                  <b key={signal}>{signal}</b>
                ))}
              </div>

              <div>
                <small>RESPONSE</small>

                {executionRefreshes.map((move) => (
                  <b key={move}>{move}</b>
                ))}
              </div>
            </div>

            <p>
              Refresh the execution while preserving the validated strategic foundation.
            </p>
          </article>

          <article className="is-saturation">
            <span>WINNER FAMILY SATURATION</span>
            <h3>The wider territory is no longer producing enough incremental performance.</h3>

            <div className="cs-saturation-path">
              {saturationMoves.map((move) => (
                <b key={move}>{move}</b>
              ))}
            </div>

            <p>
              Stop squeezing the same territory. Return upstream and create new strategic options.
            </p>
          </article>
        </div>

        <div className="cs-final-model">
          <article>
            <span>ITERATION</span>
            <strong>Something promising is broken.</strong>
            <p>Diagnose weakness → repair weakness</p>
          </article>

          <article>
            <span>SCALING</span>
            <strong>Something is already validated.</strong>
            <p>Protect winning truth → expand it</p>
          </article>

          <article>
            <span>NEW STRATEGY</span>
            <strong>The validated territory is no longer enough.</strong>
            <p>Return upstream → new strategic direction</p>
          </article>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}