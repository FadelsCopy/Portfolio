// src/components/AngleQualification.jsx

import StageDeepDiveLayout, {
  StageHighlight,
  StageList,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| ANGLE QUALIFICATION & PRIORITIZATION DATA
|--------------------------------------------------------------------------
*/

const hardGateChecks = [
  {
    title: 'Customer Relevance',
    description:
      'The angle is grounded in a real persona pain, desire, belief, trigger, behavior, or customer pattern.',
  },
  {
    title: 'Product Fit',
    description:
      'The product can genuinely deliver against the core argument or promise behind the angle.',
  },
  {
    title: 'Proof / Claim Support',
    description:
      'The claim, mechanism, or outcome can be supported with credible proof or substantiation.',
  },
  {
    title: 'Compliance / Brand Fit',
    description:
      'The angle can be communicated safely, legally, and without breaking important brand constraints.',
  },
];

const scoreCriteria = [
  {
    number: '01',
    title: 'Proven Adjacency',
    question:
      'Has something close to this angle already shown signs of working?',
    signals: [
      'Same or adjacent angle was a brand winner',
      'Similar pain, desire, mechanism, or persona performed before',
      'Long running competitor validation',
      'Strong organic or category validation',
    ],
    score0: '0 • New or unvalidated',
    score1: '1 • Some adjacent evidence',
    score2: '2 • Strong validation',
  },
  {
    number: '02',
    title: 'Customer Signal Strength',
    question:
      'How strongly does the research show that customers genuinely care about this?',
    signals: [
      'Repeated across multiple sources',
      'High emotional intensity',
      'Exact customer language',
      'Buying triggers or behavioral evidence',
      'Reviews, comments, surveys, support, first party feedback',
    ],
    score0: '0 • Mostly hypothesis',
    score1: '1 • Some supporting evidence',
    score2: '2 • Strong repeated signal',
  },
  {
    number: '03',
    title: 'Persona Relevance',
    question:
      'How central is this angle to the selected persona’s buying logic?',
    signals: [
      'Core pain',
      'Strongest desire',
      'Major fear',
      'Identity tension',
      'Dominant belief or objection',
      'Buying trigger',
    ],
    score0: '0 • Peripheral',
    score1: '1 • Relevant but secondary',
    score2: '2 • Central to buying logic',
  },
  {
    number: '04',
    title: 'Product + Proof Strength',
    question:
      'How strongly can the brand credibly own and support this angle?',
    signals: [
      'Direct product connection',
      'Credible mechanism',
      'Believable outcome',
      'Strong testimonial, data, demo, or authority',
      'Offer and funnel support',
    ],
    score0: '0 • Weak support',
    score1: '1 • Credible, proof can improve',
    score2: '2 • Strong ownership and proof',
  },
  {
    number: '05',
    title: 'Differentiation / Opportunity',
    question:
      'Does this angle give us a meaningful territory to occupy?',
    signals: [
      'Underused customer insight',
      'Underused persona or use case',
      'Unanswered objection',
      'Overlooked mechanism',
      'Competitor weakness',
      'Less saturated framing',
    ],
    score0: '0 • Generic or saturated',
    score1: '1 • Familiar but usable',
    score2: '2 • Strong opportunity',
  },
  {
    number: '06',
    title: 'Creative Leverage',
    question:
      'Can this angle produce enough strong creative to justify testing?',
    signals: [
      'Easy to represent visually',
      'Multiple hooks',
      'Multiple concepts',
      'Stories, demos, or comparisons available',
      'Works across useful formats',
      'Room for future iterations',
    ],
    score0: '0 • Difficult or one dimensional',
    score1: '1 • Workable',
    score2: '2 • High creative range',
  },
  {
    number: '07',
    title: 'Testing Feasibility',
    question:
      'Can we launch a credible test fast enough and cleanly enough to learn from it?',
    signals: [
      'Required assets are available',
      'Creator or production resources are available',
      'Proof is ready to use',
      'Production complexity is manageable',
      'Offer and funnel are ready',
      'Time to launch is acceptable',
    ],
    score0: '0 • Blocked or expensive to validate',
    score1: '1 • Testable with some friction',
    score2: '2 • Ready to test efficiently',
  },
];

const priorityBands = [
  {
    score: '12 to 14',
    label: 'TIER A',
    status: 'TEST NOW',
    description:
      'Strong support across the scorecard and ready for immediate concept development and testing.',
    tone: 'green',
  },
  {
    score: '9 to 11',
    label: 'TIER B',
    status: 'TEST NEXT',
    description:
      'Qualified and promising, but one or two factors rank below the strongest opportunities.',
    tone: 'cyan',
  },
  {
    score: '5 to 8',
    label: 'TIER C',
    status: 'VALIDATE / BACKLOG',
    description:
      'Interesting territory, but evidence, proof, differentiation, creative leverage, or feasibility needs improvement.',
    tone: 'yellow',
  },
  {
    score: '0 to 4',
    label: 'TIER D',
    status: 'KILL / REWORK',
    description:
      'Too weak or too difficult to justify active production right now.',
    tone: 'red',
  },
];

const finalSequenceChecks = [
  {
    title: 'Business Priority',
    items: [
      'Priority product',
      'Inventory position',
      'Current campaign objective',
      'Offer or funnel readiness',
      'Strategic business need',
    ],
  },
  {
    title: 'Learning Value',
    items: [
      'Tests an important unknown',
      'Can unlock multiple future concepts',
      'Helps separate persona or message hypotheses',
      'Creates useful next step learning',
    ],
  },
];

const exampleScores = [
  ['Proven Adjacency', '2'],
  ['Customer Signal', '2'],
  ['Persona Relevance', '2'],
  ['Product + Proof', '1'],
  ['Differentiation', '1'],
  ['Creative Leverage', '2'],
  ['Testing Feasibility', '2'],
];

const outputs = [
  'Qualified angle queue',
  'Tier A • Test Now angles',
  'Tier B • Test Next angles',
  'Angles requiring validation',
  'Killed or reworked angles',
  'Explicit reasoning behind priority decisions',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function AngleQualification({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="ANGLE DECISION SOP"
      title="Angle Qualification & Prioritization"
      introduction="After mapping angle territories, I use one practical system to decide which angles deserve production and testing first."
      process={[
        'Angle Pool',
        'Hard Gate',
        'Score',
        'Prioritize',
        'Testing Queue',
      ]}
      singlePage
    >
      <StageSection
        number="01"
        navTitle="Qualification SOP"
        title="Angle Qualification & Prioritization SOP"
        description="One operating page: filter unsupported angles, score the qualified ones, then turn the strongest opportunities into a testing queue."
      >
        {/* STEP 01 */}
        <div className="angle-qual-gate">
          <div className="angle-qual-section-heading">
            <span>STEP 01</span>

            <div>
              <h3>Hard Qualification Gate</h3>
              <p>
                Before scoring anything, confirm that the angle is credible
                enough to deserve consideration.
              </p>
            </div>
          </div>

          <div className="angle-qual-gate-grid">
            {hardGateChecks.map((check, index) => (
              <article key={check.title}>
                <div className="angle-qual-check">
                  <span>✓</span>
                </div>

                <div>
                  <small>
                    {String(index + 1).padStart(2, '0')}
                  </small>
                  <h4>{check.title}</h4>
                  <p>{check.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="angle-qual-gate-decision">
            <strong>PASS CRITICAL GATES</strong>
            <span>→</span>
            <strong>SCORE THE ANGLE</strong>

            <i />

            <strong className="is-fail">
              FUNDAMENTAL FAIL
            </strong>
            <span>→</span>
            <strong className="is-fail">
              REWORK / KILL
            </strong>
          </div>
        </div>

        {/* STEP 02 */}
        <div className="angle-qual-scorecard">
          <div className="angle-qual-section-heading">
            <span>STEP 02</span>

            <div>
              <h3>7 Criteria Priority Scorecard</h3>
              <p>
                Score each qualified angle from 0 • 1 • 2 on the factors
                that matter before production and testing capacity is allocated.
              </p>
            </div>

            <div className="angle-qual-max-score">
              <strong>14</strong>
              <small>MAX SCORE</small>
            </div>
          </div>

          <div className="angle-qual-score-list">
            {scoreCriteria.map((criterion) => (
              <article
                className="angle-qual-score-row"
                key={criterion.number}
              >
                <div className="angle-qual-score-number">
                  {criterion.number}
                </div>

                <div className="angle-qual-score-main">
                  <h4>{criterion.title}</h4>
                  <p>{criterion.question}</p>

                  <div className="angle-qual-signal-chips">
                    {criterion.signals.map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                </div>

                <div className="angle-qual-score-scale">
                  <span className="is-zero">
                    {criterion.score0}
                  </span>

                  <span className="is-one">
                    {criterion.score1}
                  </span>

                  <span className="is-two">
                    {criterion.score2}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* STEP 03 */}
        <div className="angle-qual-priority">
          <div className="angle-qual-section-heading">
            <span>STEP 03</span>

            <div>
              <h3>Convert Score → Testing Priority</h3>
              <p>
                The score makes the reasoning explicit and gives the team
                a clear queue for what should move forward first.
              </p>
            </div>
          </div>

          <div className="angle-qual-priority-grid">
            {priorityBands.map((band) => (
              <article
                className={`angle-qual-priority-card is-${band.tone}`}
                key={band.label}
              >
                <span>{band.score}</span>
                <small>{band.label}</small>
                <h4>{band.status}</h4>
                <p>{band.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* EXAMPLE */}
        <div className="angle-qual-example">
          <div className="angle-qual-example-copy">
            <span>EXAMPLE</span>

            <h3>
              “Hair loss is aging your appearance faster than you realize.”
            </h3>

            <p>
              Illustrative score only. The point is to show how the decision
              system works, not to pretend the score predicts performance.
            </p>
          </div>

          <div className="angle-qual-example-scores">
            {exampleScores.map(([label, score]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{score}/2</strong>
              </div>
            ))}
          </div>

          <div className="angle-qual-example-result">
            <small>TOTAL</small>
            <strong>12 / 14</strong>
            <span>TIER A • TEST NOW</span>
          </div>
        </div>

        {/* FINAL SEQUENCING */}
        <div className="angle-qual-tiebreakers">
          <div className="angle-qual-section-heading">
            <span>FINAL SEQUENCING</span>

            <div>
              <h3>What can still change launch order?</h3>
              <p>
                The score ranks angle strength and readiness. Business context
                and learning value can still decide which qualified angle ships first.
              </p>
            </div>
          </div>

          <div className="angle-qual-tiebreaker-grid is-two">
            {finalSequenceChecks.map((group) => (
              <article key={group.title}>
                <h4>{group.title}</h4>
                <StageList items={group.items} />
              </article>
            ))}
          </div>
        </div>

        <StageHighlight
          title="Operating Principle"
          type="success"
        >
          <p>
            The score does not make the decision for me. It makes the logic
            explicit. I can override the ranking when business context,
            strategic learning, or new evidence gives me a better reason
            to sequence the testing queue differently.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}