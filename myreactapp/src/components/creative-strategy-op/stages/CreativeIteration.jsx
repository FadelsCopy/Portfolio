// src/components/CreativeIteration.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| ITERATION MAP
|--------------------------------------------------------------------------
*/

const iterationMap = [
  {
    area: 'OPENING',
    signal: 'Weak hook rate / weak first seconds',
    protect: 'Angle + core concept',
    options: [
      'Verbal hook',
      'Visual hook',
      'First frame',
      'On screen text',
      'Opening scene',
      'Product reveal',
    ],
  },
  {
    area: 'RETENTION',
    signal: 'Strong opening / drop through the body',
    protect: 'Winning hook + angle',
    options: [
      'Pacing',
      'Length',
      'Narrative order',
      'Cuts',
      'B roll',
      'Pattern interrupts',
      'Proof placement',
    ],
  },
  {
    area: 'MESSAGE',
    signal: 'Attention is there / persuasion is weak',
    protect: 'Persona + angle + strongest opening',
    options: [
      'Script',
      'Mechanism',
      'Value proposition',
      'Proof',
      'Objection handling',
      'Product integration',
    ],
  },
  {
    area: 'DELIVERY',
    signal: 'Concept is strong / execution feels weak',
    protect: 'Message + concept',
    options: [
      'Creator',
      'Tone',
      'Format',
      'Editing',
      'Visual execution',
      'Pacing',
    ],
  },
  {
    area: 'CONVERSION',
    signal: 'Engagement is healthy / action is weak',
    protect: 'Winning creative body',
    options: [
      'Offer',
      'CTA',
      'Urgency',
      'Risk reversal',
      'Guarantee',
      'Message match',
    ],
  },
];

const batchExamples = [
  {
    title: 'Hook Iteration',
    original: 'Hook A + Body A',
    protect: 'Body A',
    change: 'Opening hypothesis',
    variants: [
      'Hook B + Body A',
      'Hook C + Body A',
      'Hook D + Body A',
    ],
  },
  {
    title: 'Proof Iteration',
    original: 'Hook A + Body A + Proof A',
    protect: 'Hook A + Body A',
    change: 'Proof strength',
    variants: [
      'Proof B',
      'Proof C',
      'Proof D',
    ],
  },
  {
    title: 'Creator Iteration',
    original: 'Creator A + Message A',
    protect: 'Message A',
    change: 'Creator credibility',
    variants: [
      'Creator B',
      'Creator C',
      'Creator D',
    ],
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeIteration({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="CONTROLLED OPTIMIZATION SYSTEM"
      title="Creative Iteration"
      introduction="Turn a diagnosed performance bottleneck into a controlled next version without destroying what already works."
      singlePage
    >
      <StageSection
        number="00"
        navTitle="Iteration Engine"
        title="Creative Iteration Engine"
        description="The question is not “what can we change?” It is “what should we change based on the diagnosis, while protecting what already works?”"
      >
        {/* ================================================================
            01 INPUT
           ================================================================ */}

        <section className="ci-block ci-input-block">
          <div className="ci-block-heading">
            <span>01</span>

            <div>
              <small>ITERATION INPUT</small>
              <h3>Start with the diagnosed problem</h3>
              <p>
                I do not start by brainstorming random variations. Performance
                Analysis gives me the signal, the bottleneck, and the objective.
              </p>
            </div>
          </div>

          <div className="ci-input-grid">
            <article>
              <span>WINNING SIGNAL</span>
              <strong>Strong hook</strong>
              <p>The opening is earning attention.</p>
            </article>

            <article>
              <span>BOTTLENECK</span>
              <strong>Retention drops after 5 seconds</strong>
              <p>The body is losing the viewer.</p>
            </article>

            <article>
              <span>ITERATION OBJECTIVE</span>
              <strong>Improve hold</strong>
              <p>Fix the body without weakening the opening.</p>
            </article>

            <article className="is-protected">
              <span>PROTECT</span>
              <strong>Persona • Angle • Hook • Creator</strong>
              <p>Keep the variables already producing a positive signal.</p>
            </article>

            <article className="is-change">
              <span>PRIMARY CHANGE</span>
              <strong>Body / pacing</strong>
              <p>Attack the diagnosed weakness.</p>
            </article>
          </div>

          <div className="ci-input-rule">
            <span>CORE RULE</span>
            <strong>
              Protect the positive signal. Change the diagnosed weakness.
            </strong>
          </div>
        </section>

        {/* ================================================================
            02 MAP
           ================================================================ */}

        <section className="ci-block ci-map-block">
          <div className="ci-block-heading">
            <span>02</span>

            <div>
              <small>ITERATION MAP</small>
              <h3>Diagnosis → variable → practical iteration</h3>
              <p>
                The bottleneck determines the family of variables I explore next.
              </p>
            </div>
          </div>

          <div className="ci-map-table">
            <div className="ci-map-head">
              <span>DIAGNOSED AREA</span>
              <span>SIGNAL</span>
              <span>PROTECT</span>
              <span>POSSIBLE ITERATIONS</span>
            </div>

            {iterationMap.map((row) => (
              <article key={row.area} className="ci-map-row">
                <div className="ci-map-area">
                  <span>{row.area}</span>
                </div>

                <p>{row.signal}</p>

                <p className="ci-protect-copy">{row.protect}</p>

                <div className="ci-chip-wrap">
                  {row.options.map((option) => (
                    <span key={option}>{option}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="ci-example-strip">
            <div>
              <span>EXAMPLE</span>
              <strong>Strong hook + weak retention</strong>
            </div>

            <b>→</b>

            <div>
              <span>PROTECT</span>
              <strong>Hook + angle</strong>
            </div>

            <b>→</b>

            <div>
              <span>ITERATE</span>
              <strong>Pacing / narrative / length / proof placement</strong>
            </div>
          </div>
        </section>

        {/* ================================================================
            03 CONTROLLED BATCH
           ================================================================ */}

        <section className="ci-block ci-batch-block">
          <div className="ci-block-heading">
            <span>03</span>

            <div>
              <small>CONTROLLED BATCH</small>
              <h3>Change one primary hypothesis at a time</h3>
              <p>
                Execution details can move together, but the learning question
                should remain clear enough that I know what the next test taught me.
              </p>
            </div>
          </div>

          <div className="ci-batch-grid">
            {batchExamples.map((batch) => (
              <article key={batch.title} className="ci-batch-card">
                <span className="ci-batch-label">{batch.title}</span>

                <div className="ci-batch-line">
                  <small>ORIGINAL</small>
                  <strong>{batch.original}</strong>
                </div>

                <div className="ci-batch-line is-protected">
                  <small>PROTECT</small>
                  <strong>{batch.protect}</strong>
                </div>

                <div className="ci-batch-line is-change">
                  <small>PRIMARY CHANGE</small>
                  <strong>{batch.change}</strong>
                </div>

                <div className="ci-variants">
                  <small>ITERATION BATCH</small>

                  {batch.variants.map((variant) => (
                    <span key={variant}>{variant}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="ci-hypothesis-rule">
            <div>
              <span>WHY THIS MATTERS</span>
              <strong>
                “Change one variable” is too rigid. The useful rule is:
                change one primary hypothesis while keeping the learning question clean.
              </strong>
            </div>
          </div>
        </section>

        {/* ================================================================
            GUARDRAIL + OUTPUT
           ================================================================ */}

        <section className="ci-footer-system">
          <div className="ci-not-iteration">
            <div className="ci-not-iteration-copy">
              <span>WHEN IT IS NOT AN ITERATION</span>

              <h3>
                Iteration is the wrong move when the diagnosis says the foundation
                needs to change, not just the execution.
              </h3>

              <p>
                I iterate when the core direction still shows a positive signal and
                I can identify a specific bottleneck to improve. If the next version
                needs a new Persona, Angle, Core Concept, or Core Promise, I stop
                treating it as an iteration and return to the relevant upstream stage.
              </p>
            </div>

            <div className="ci-reset-grid">
              <article>
                <span>NEW PERSONA</span>
                <strong>Return to Persona Mapping</strong>
                <p>The customer being targeted has materially changed.</p>
              </article>

              <article>
                <span>NEW ANGLE</span>
                <strong>Return to Angle Development</strong>
                <p>The persuasive direction itself needs to change.</p>
              </article>

              <article>
                <span>NEW CORE CONCEPT</span>
                <strong>Return to Concept Development</strong>
                <p>The central creative idea is no longer the same test.</p>
              </article>

              <article>
                <span>NEW CORE PROMISE</span>
                <strong>Return upstream and revalidate</strong>
                <p>The main promise or strategic proposition has materially changed.</p>
              </article>
            </div>

            <div className="ci-reset-rule">
              <span>DECISION RULE</span>
              <strong>
                If I cannot clearly state what proven element I am preserving,
                I am probably not iterating anymore. I am building a new strategic direction.
              </strong>
            </div>
          </div>

          <div className="ci-output">
            <span>ITERATION BATCH READY</span>

            <StageFlow
              items={[
                'Protected Variables',
                'Primary Change',
                'Variants',
                'Success Metric',
                'Creative Briefing',
              ]}
            />
          </div>
        </section>
      </StageSection>
    </StageDeepDiveLayout>
  );
}