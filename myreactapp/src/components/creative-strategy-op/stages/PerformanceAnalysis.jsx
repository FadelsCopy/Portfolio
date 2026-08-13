// src/components/PerformanceAnalysis.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| KPI STACK
|--------------------------------------------------------------------------
*/

const kpiStack = [
  {
    code: 'CONTEXT',
    question: 'Did the creative get a fair chance to deliver?',
    metrics: [
      'Spend',
      'Impressions',
      'Reach',
      'Frequency',
      'CPM',
    ],
    action:
      'Use these as context before judging the creative. Poor delivery can distort every downstream metric.',
  },
  {
    code: 'ATTENTION',
    question: 'Did we earn the stop?',
    metrics: [
      'Hook Rate',
      '3 Second View Rate',
      'Thumb Stop Ratio',
      'Video Plays',
    ],
    action:
      'Weak here points first to the opening: first frame, visual hook, verbal hook, clarity or persona relevance.',
  },
  {
    code: 'RETENTION',
    question: 'Did we keep the attention we earned?',
    metrics: [
      'Hold Rate',
      'Average Watch Time',
      '25% View Rate',
      '50% View Rate',
      '75% View Rate',
      '95% / Completion',
    ],
    action:
      'Weak here points to body, pacing, narrative progression, hook to body match, proof placement or excessive length.',
  },
  {
    code: 'INTENT',
    question: 'Did the message create enough buying movement?',
    metrics: [
      'Outbound CTR',
      'Link CTR',
      'CPC',
      'Landing Page Views',
      'LPV Rate',
    ],
    action:
      'Weak here points to product connection, value proposition, proof, offer transition, CTA or low buying relevance.',
  },
  {
    code: 'CONVERSION',
    question: 'Did intent become purchase behavior?',
    metrics: [
      'ATC Rate',
      'Checkout Initiation',
      'Purchase CVR',
      'CPA / CAC',
      'Checkout to Purchase',
    ],
    action:
      'Weak here may be creative, page, offer, price, trust, checkout or message match. Do not assign blame before checking the handoff.',
  },
  {
    code: 'ECONOMICS',
    question: 'Is the result commercially useful?',
    metrics: [
      'Spend',
      'Revenue',
      'ROAS',
      'New Customer ROAS',
      'AOV',
      'LTV',
      'Break Even CAC / ROAS',
      'Contribution Margin',
    ],
    action:
      'A creative is not a winner because CTR or watch time looks good. It must contribute to acceptable acquisition economics.',
  },
];

const supportingSignals = [
  'Comments',
  'Shares',
  'Saves',
  'Positive / negative sentiment',
  'Repeated objections',
  'Questions',
  'Customer language worth reusing',
];

/*
|--------------------------------------------------------------------------
| FUNNEL DIAGNOSIS
|--------------------------------------------------------------------------
*/

const funnelDiagnosis = [
  {
    stage: 'ATTENTION',
    signal: 'Weak Hook Rate + weak 3 second view',
    reading: 'The opening is not earning enough attention.',
    inspect: [
      'First frame',
      'Visual hook',
      'Verbal hook',
      'Persona relevance',
      'Opening clarity',
    ],
    decision: 'ITERATE OPENING',
    protect: 'Do not rebuild the entire concept before the opening gets a fair test.',
  },
  {
    stage: 'RETENTION',
    signal: 'Strong hook + weak hold / watch time',
    reading: 'The opening works, but the body is losing the viewer.',
    inspect: [
      'Pacing',
      'Narrative',
      'Hook to body match',
      'Proof placement',
      'Length',
      'Visual progression',
    ],
    decision: 'ITERATE BODY',
    protect: 'Protect the winning hook while changing the diagnosed body weakness.',
  },
  {
    stage: 'INTENT',
    signal: 'Strong retention + weak outbound CTR',
    reading: 'People keep watching, but the ad is not creating enough buying movement.',
    inspect: [
      'Product connection',
      'Value proposition',
      'Proof',
      'Offer transition',
      'CTA',
      'Buying relevance',
    ],
    decision: 'ITERATE PERSUASION',
    protect: 'Keep the parts that are earning and holding attention.',
  },
  {
    stage: 'POST CLICK',
    signal: 'Strong outbound CTR + weak CVR / ATC',
    reading: 'Click intent exists. The break may be after the ad.',
    inspect: [
      'Message match',
      'Landing page',
      'Offer',
      'Price',
      'Proof',
      'Page speed',
      'Technical issues',
    ],
    decision: 'INVESTIGATE',
    protect: 'Do not kill strong creative before checking the post click experience.',
  },
  {
    stage: 'ECONOMICS',
    signal: 'Good CTR + good CVR + weak CPA / ROAS',
    reading: 'The creative may be functioning while the economics are weak.',
    inspect: [
      'LTV',
      'Audience efficiency',
      'AOV',
      'Margin',
      'Offer economics',
      'Spend efficiency',
    ],
    decision: 'INVESTIGATE ECONOMICS',
    protect: 'Do not blame creative for a cost structure problem without evidence.',
  },
];

/*
|--------------------------------------------------------------------------
| COMMON PERFORMANCE PATTERNS
|--------------------------------------------------------------------------
*/

const performancePatterns = [
  {
    pattern: 'Weak hook + weak downstream performance',
    reading: 'The creative is failing before the message gets a fair chance.',
    decision: 'ITERATE OPENING',
    next: 'New first frame / hook / visual / callout',
  },
  {
    pattern: 'Strong hook + weak hold',
    reading: 'The opening works. The body is not fulfilling the promise.',
    decision: 'ITERATE BODY',
    next: 'Pacing / narrative / proof placement / length',
  },
  {
    pattern: 'Strong hold + weak CTR',
    reading: 'The ad holds attention but lacks enough buying movement.',
    decision: 'ITERATE PERSUASION',
    next: 'Product connection / value / proof / CTA',
  },
  {
    pattern: 'Strong CTR + weak LPV',
    reading: 'The click happens but the page is not loading or tracking cleanly.',
    decision: 'INVESTIGATE',
    next: 'Page speed / tracking / technical handoff',
  },
  {
    pattern: 'Strong CTR + weak CVR',
    reading: 'Intent exists, but post click conversion is weak.',
    decision: 'INVESTIGATE FIRST',
    next: 'LP / offer / price / proof / message match',
  },
  {
    pattern: 'Strong ATC + weak purchase',
    reading: 'Buying interest exists but the final transaction is breaking.',
    decision: 'INVESTIGATE CHECKOUT',
    next: 'Price / shipping / trust / guarantee / payment / friction',
  },
  {
    pattern: 'Strong creative metrics + weak economics',
    reading: 'The ad may work, but acquisition economics do not.',
    decision: 'INVESTIGATE MEDIA / OFFER',
    next: 'LTV / audience / AOV / margin / offer economics',
  },
  {
    pattern: 'Good early signals + insufficient clean spend',
    reading: 'There is not enough evidence to make a reliable call.',
    decision: 'RETEST / INCONCLUSIVE',
    next: 'Fix test quality and collect a cleaner sample',
  },
  {
    pattern: 'Weak performance across the full funnel',
    reading: 'There is little evidence of strategic or executional potential.',
    decision: 'KILL / RETURN UPSTREAM',
    next: 'Move to stronger angle / concept / persona opportunity',
  },
  {
    pattern: 'Strong full funnel + healthy economics',
    reading: 'The creative is commercially validated.',
    decision: 'SCALE',
    next: 'Protect core + start winner expansion',
  },
  {
    pattern: 'Winner declines while frequency rises',
    reading: 'The strategic core may still work, but the execution is fatiguing.',
    decision: 'REFRESH / SUPPORT',
    next: 'Hooks / creators / formats / proof / visuals',
  },
  {
    pattern: 'Same angle wins across multiple formats',
    reading: 'The angle appears transferable beyond one execution.',
    decision: 'SCALE ANGLE',
    next: 'Build a wider winner family around the angle',
  },
  {
    pattern: 'Same creator wins across different concepts',
    reading: 'Creator fit may be an important reusable execution variable.',
    decision: 'VALIDATE + EXPAND',
    next: 'More concepts with creator / similar creator archetypes',
  },
  {
    pattern: 'Same hook pattern wins repeatedly',
    reading: 'The attention pattern may be reusable.',
    decision: 'EXPAND HOOK PATTERN',
    next: 'Adapt the pattern across new concepts and executions',
  },
];

/*
|--------------------------------------------------------------------------
| DECISION ENGINE
|--------------------------------------------------------------------------
*/

const decisions = [
  {
    status: 'SCALE',
    when:
      'The creative performs strongly enough across the funnel and meets the required business economics.',
    evidence:
      'Commercially useful result + enough clean evidence + no obvious external bottleneck.',
    action:
      'Protect the winning variables, keep the original live, and feed the winner into Creative Scaling.',
  },
  {
    status: 'ITERATE',
    when:
      'The creative shows a meaningful positive signal but one specific bottleneck is limiting it.',
    evidence:
      'A clear part of the funnel works and the weak stage can be diagnosed.',
    action:
      'Protect what worked, define the primary variable to change, and send the iteration into Creative Iteration.',
  },
  {
    status: 'RETEST / INCONCLUSIVE',
    when:
      'The original test did not produce enough reliable evidence.',
    evidence:
      'Insufficient spend, poor delivery, tracking issues, test contamination or unfair execution quality.',
    action:
      'Fix the test conditions and rerun before judging the strategic direction.',
  },
  {
    status: 'INVESTIGATE',
    when:
      'The creative may not be the main source of the problem.',
    evidence:
      'Strong upstream creative signals with weakness appearing after the click or inside delivery / economics.',
    action:
      'Check media, landing page, offer, price, checkout, tracking or technical ownership before changing the creative.',
  },
  {
    status: 'KILL',
    when:
      'Enough evidence shows the direction is not worth additional spend or production.',
    evidence:
      'Weak full funnel response, low buying relevance, repeated meaningful failures or stronger opportunities in the pipeline.',
    action:
      'Document the learning and move resources to a stronger strategic opportunity.',
  },
];

const ownershipAreas = [
  {
    area: 'CREATIVE',
    examples: 'Hook / body / proof / message / creator / format / CTA',
  },
  {
    area: 'MEDIA',
    examples: 'CPM / delivery / audience efficiency / spend concentration',
  },
  {
    area: 'FUNNEL',
    examples: 'Landing page / message match / page speed / conversion flow',
  },
  {
    area: 'OFFER',
    examples: 'Price / bundle / guarantee / economics / urgency',
  },
  {
    area: 'TECHNICAL',
    examples: 'Tracking / attribution / checkout / payment / site errors',
  },
  {
    area: 'UNCLEAR',
    examples: 'Insufficient evidence → retest before assigning ownership',
  },
];

/*
|--------------------------------------------------------------------------
| CROSS CREATIVE PATTERNS + TRENDS
|--------------------------------------------------------------------------
*/

const crossCreativePatterns = [
  {
    lens: 'ANGLE',
    example: '5 different creatives using the same angle beat baseline.',
    learning: 'The angle may be strategically transferable.',
    action: 'Feed angle into Creative Scaling.',
  },
  {
    lens: 'CREATOR',
    example: 'Creator B performs across 3 unrelated concepts.',
    learning: 'Creator fit may be a reusable execution advantage.',
    action: 'Produce more with Creator B and test similar archetypes.',
  },
  {
    lens: 'HOOK',
    example: 'The same hook structure wins across multiple bodies.',
    learning: 'The hook pattern may be reusable.',
    action: 'Adapt the pattern to new concepts without cloning the ad.',
  },
  {
    lens: 'FORMAT',
    example: 'Statics repeatedly outperform for product aware / BOF traffic.',
    learning: 'Format and awareness level may interact.',
    action: 'Increase format use where that job is strongest.',
  },
  {
    lens: 'PROOF',
    example: 'Transformation proof repeatedly improves CTR and CVR.',
    learning: 'That proof route may strengthen both intent and belief.',
    action: 'Expand the proof pattern across more concepts.',
  },
  {
    lens: 'AWARENESS',
    example: 'Problem aware messaging wins at TOF while offer led statics win lower funnel.',
    learning: 'Message depth should change with customer awareness.',
    action: 'Build awareness specific creative families.',
  },
];

const trendChecks = [
  'Performance stability over time',
  'Frequency movement',
  'Hook Rate decay',
  'CTR decay',
  'CPA movement',
  'ROAS movement',
  'Spend concentration',
  'Performance after budget increases',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function PerformanceAnalysis({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="FULL FUNNEL DIAGNOSIS SYSTEM"
      title="Performance Analysis & Decision"
      introduction="Read creative performance as one connected customer journey, diagnose where the break happens, assign ownership, and make the next decision."
    >
      {/* ==================================================================
          00 READ DATA + KPI STACK
         ================================================================== */}

      <StageSection
        number="00"
        navTitle="Read Data + KPIs"
        title="How I Read Creative Data"
        description="Validate the test first, compare against the right baseline, then read the funnel in sequence."
      >
        <div className="pa-read-system">
          <div className="pa-read-top">
            <article>
              <span>01 VALIDATE TEST</span>
              <strong>Can I trust this sample?</strong>
              <p>Spend • delivery • sample • tracking • test conditions</p>
            </article>

            <article>
              <span>02 COMPARE</span>
              <strong>What is the right reference?</strong>
              <p>Account baseline • control • similar format • objective • spend level</p>
            </article>

            <article>
              <span>03 FIND THE BREAK</span>
              <strong>Where does performance stop working?</strong>
              <p>Attention → retention → intent → conversion → economics</p>
            </article>

            <article>
              <span>04 DECIDE</span>
              <strong>What should happen next?</strong>
              <p>Scale • iterate • retest • investigate • kill</p>
            </article>
          </div>

          <div className="pa-benchmark-rule">
            <span>BENCHMARK RULE</span>
            <strong>
              I do not treat random universal KPI thresholds as absolute truth.
              I read performance relative to the account, objective, format,
              funnel, spend level and business economics.
            </strong>
          </div>
        </div>

        <div className="pa-kpi-stack">
          {kpiStack.map((group, index) => (
            <article key={group.code}>
              <div className="pa-kpi-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <b>{group.code}</b>
                  <strong>{group.question}</strong>
                </div>
              </div>

              <div className="pa-kpi-metrics">
                {group.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>

              <p>{group.action}</p>
            </article>
          ))}
        </div>

        <div className="pa-support-signals">
          <div>
            <span>SUPPORTING SIGNALS</span>
            <strong>
              Useful for understanding emotion, objections and customer language.
              Not the final definition of commercial success.
            </strong>
          </div>

          <div>
            {supportingSignals.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          01 FUNNEL DIAGNOSIS
         ================================================================== */}

      <StageSection
        number="01"
        navTitle="Funnel Diagnosis"
        title="Find Where the Funnel Breaks"
        description="Read combinations of metrics so the next action targets the actual bottleneck instead of changing the whole ad."
      >
        <div className="pa-funnel-flow">
          <StageFlow
            items={[
              'Attention',
              'Retention',
              'Intent',
              'Conversion',
              'Economics',
            ]}
          />
        </div>

        <div className="pa-diagnosis-stack">
          {funnelDiagnosis.map((item, index) => (
            <article key={item.stage}>
              <div className="pa-diagnosis-stage">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{item.stage}</b>
              </div>

              <div className="pa-diagnosis-signal">
                <small>SIGNAL</small>
                <strong>{item.signal}</strong>
                <p>{item.reading}</p>
              </div>

              <div className="pa-diagnosis-inspect">
                <small>INSPECT</small>

                <div>
                  {item.inspect.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </div>

              <div className="pa-diagnosis-decision">
                <small>DECISION</small>
                <strong>{item.decision}</strong>
                <p>{item.protect}</p>
              </div>
            </article>
          ))}
        </div>
      </StageSection>

      {/* ==================================================================
          02 COMMON PERFORMANCE PATTERNS
         ================================================================== */}

      <StageSection
        number="02"
        navTitle="Common Patterns"
        title="Common Performance Patterns"
        description="Use recurring metric combinations to move from observation to diagnosis to decision quickly."
      >
        <div className="pa-pattern-table">
          <div className="pa-pattern-head">
            <span>PATTERN</span>
            <span>READING</span>
            <span>DECISION</span>
            <span>NEXT MOVE</span>
          </div>

          {performancePatterns.map((item) => (
            <article key={item.pattern}>
              <strong>{item.pattern}</strong>
              <p>{item.reading}</p>
              <b>{item.decision}</b>
              <p>{item.next}</p>
            </article>
          ))}
        </div>
      </StageSection>

      {/* ==================================================================
          03 DECISION ENGINE
         ================================================================== */}

      <StageSection
        number="03"
        navTitle="Decision Engine"
        title="Turn the Diagnosis Into a Decision"
        description="Every analysis should end in one primary operational status with clear ownership and a next action."
      >
        <div className="pa-decision-grid">
          {decisions.map((item, index) => (
            <article key={item.status} className={`is-${index + 1}`}>
              <div className="pa-decision-status">
                <span>{item.status}</span>
              </div>

              <div className="pa-decision-body">
                <small>WHEN</small>
                <strong>{item.when}</strong>

                <small>EVIDENCE</small>
                <p>{item.evidence}</p>

                <small>NEXT ACTION</small>
                <p>{item.action}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pa-ownership">
          <div className="pa-ownership-title">
            <span>OWNERSHIP CHECK</span>
            <strong>
              Before changing the creative, identify where the bottleneck actually belongs.
            </strong>
          </div>

          <div className="pa-ownership-grid">
            {ownershipAreas.map((item) => (
              <article key={item.area}>
                <span>{item.area}</span>
                <p>{item.examples}</p>
              </article>
            ))}
          </div>
        </div>
      </StageSection>

      {/* ==================================================================
          04 CROSS CREATIVE PATTERNS + TRENDS
         ================================================================== */}

      <StageSection
        number="04"
        navTitle="Patterns + Trends"
        title="Read Patterns Across Creatives and Over Time"
        description="The strongest learning comes from repeated evidence across ads, not from treating every creative as an isolated row in Ads Manager."
      >
        <div className="pa-cross-grid">
          {crossCreativePatterns.map((item) => (
            <article key={item.lens}>
              <span>{item.lens}</span>

              <div>
                <small>REPEATED PATTERN</small>
                <strong>{item.example}</strong>
              </div>

              <div>
                <small>LEARNING</small>
                <p>{item.learning}</p>
              </div>

              <div>
                <small>ACTION</small>
                <p>{item.action}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pa-trend-system">
          <div className="pa-trend-copy">
            <span>READ OVER TIME</span>

            <h3>
              Do not call an ad a winner from one lucky day or kill a proven winner from one bad day.
            </h3>

            <p>
              Use the window that makes sense for account spend and velocity,
              then look for stability, decay, fatigue and whether performance survives more spend.
            </p>
          </div>

          <div className="pa-trend-checks">
            {trendChecks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="pa-output-strip">
          <span>ANALYSIS OUTPUT</span>

          <StageFlow
            items={[
              'Diagnosis',
              'Evidence',
              'Ownership',
              'Decision',
              'Next Action',
              'Learning',
            ]}
          />
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}