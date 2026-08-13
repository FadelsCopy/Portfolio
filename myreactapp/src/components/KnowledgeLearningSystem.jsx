// src/components/KnowledgeLearningSystem.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| KNOWLEDGE & LEARNING SYSTEM DATA
|--------------------------------------------------------------------------
*/

const winnerFields = [
  {
    group: 'STRATEGY',
    items: [
      'Persona / sub-persona',
      'Awareness level',
      'Angle',
      'Concept',
    ],
  },
  {
    group: 'MESSAGE',
    items: [
      'Hook / opening',
      'Narrative',
      'Mechanism / belief shift',
      'Proof',
    ],
  },
  {
    group: 'EXECUTION',
    items: [
      'Format',
      'Creator / delivery style',
      'Visual / static layout',
      'Offer + CTA',
    ],
  },
  {
    group: 'PERFORMANCE',
    items: [
      'Spend + key metrics',
      'Iteration history',
      'Scaling result',
      'Fatigue / ceiling',
    ],
  },
];

const loserFields = [
  {
    group: 'WHAT FAILED',
    items: [
      'Persona / audience fit',
      'Angle / concept',
      'Hook / narrative',
      'Proof / offer',
    ],
  },
  {
    group: 'EXECUTION',
    items: [
      'Creator fit',
      'Visual / static direction',
      'Editing / pacing',
      'Production mistake',
    ],
  },
  {
    group: 'INTERFERENCE',
    items: [
      'Landing page / funnel',
      'Offer mismatch',
      'Tracking / delivery issue',
      'Insufficient signal',
    ],
  },
  {
    group: 'NEXT DECISION',
    items: [
      'Do not repeat',
      'Salvageable element',
      'Retest condition',
      'Main learning',
    ],
  },
];

const lossTypes = [
  {
    label: 'MESSAGE FAILURE',
    description:
      'The idea was represented fairly, but the angle, concept, hook, proof, or message did not create enough response.',
  },
  {
    label: 'EXECUTION FAILURE',
    description:
      'The strategic idea may still be valid, but creator fit, visual treatment, pacing, editing, or production weakened the test.',
  },
  {
    label: 'SYSTEM INTERFERENCE',
    description:
      'Audience, offer, landing page, delivery, tracking, or another external variable contaminated the result.',
  },
  {
    label: 'INCONCLUSIVE',
    description:
      'The test did not generate enough reliable evidence to label the creative idea a winner or loser.',
  },
];

const reuseStages = [
  {
    number: '01',
    title: 'Research',
    description:
      'Feed new objections, language, questions, proof gaps, and customer reactions back into the research library.',
  },
  {
    number: '02',
    title: 'Personas + Angles',
    description:
      'Increase confidence in proven persona-angle combinations, deprioritize weak ones, and create adjacent angles from repeated winners.',
  },
  {
    number: '03',
    title: 'Concept Development',
    description:
      'Recombine proven hooks, narratives, proof, formats, and visual patterns instead of restarting from a blank page.',
  },
  {
    number: '04',
    title: 'Creative Briefing',
    description:
      'Bake proven message and execution patterns into new briefs while explicitly flagging known failure patterns to avoid.',
  },
  {
    number: '05',
    title: 'Production',
    description:
      'Repeat creator, visual, editing, and production choices that consistently help performance and remove recurring production mistakes.',
  },
  {
    number: '06',
    title: 'Iteration + Scaling',
    description:
      'Use the library to decide what to preserve, what variable to change next, and how to expand proven structures without losing the winner.',
  },
];

const learningStrength = [
  {
    level: 'SIGNAL',
    title: 'One test',
    description:
      'Useful evidence, but not enough to turn into a universal rule.',
  },
  {
    level: 'PATTERN',
    title: 'Repeated across variants',
    description:
      'The same behavior appears across multiple controlled creative executions.',
  },
  {
    level: 'PRINCIPLE',
    title: 'Repeated across contexts',
    description:
      'A durable learning that can guide future creative decisions with higher confidence.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function KnowledgeLearningSystem({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="SYSTEM MEMORY"
      title="Knowledge & Learning System"
      introduction="Every test should make the next creative cycle smarter. Winners, losers, production mistakes, and reusable patterns are stored with enough context to guide future decisions."
      process={[
        'Every Test',
        'Save Winners + Losers',
        'Extract Patterns',
        'Feed the Next Creative Cycle',
      ]}
    >
      <StageSection
        number="00"
        navTitle="Winning Knowledge"
        title="Winning Knowledge Library"
        description="Save more than the winning asset. Save the strategic context, execution pattern, performance, and reason it worked."
      >
        <div className="kls-operating-question">
          <span>WINNER RECORD</span>
          <h3>
            What exactly worked, under what conditions, and what should we
            preserve or expand?
          </h3>

          <div className="kls-operating-flow">
            <StageFlow
              items={[
                'Winning Asset',
                'Strategic Context',
                'Performance',
                'Diagnosis',
                'Reuse Instruction',
              ]}
            />
          </div>
        </div>

        <div className="kls-field-grid is-winner">
          {winnerFields.map((group) => (
            <article key={group.group}>
              <span>{group.group}</span>

              <div>
                {group.items.map((item) => (
                  <p key={item}>
                    <b>✓</b>
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="kls-diagnosis-strip is-winner">
          <span>THE PART THAT MAKES THE LIBRARY USEFUL</span>

          <div>
            <strong>Why did it win?</strong>
            <p>
              Record the strongest likely driver, what must be preserved,
              what can be changed safely, and the next expansion opportunity.
            </p>
          </div>
        </div>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Losing Knowledge"
        title="Losing Knowledge Library"
        description="A losing creative still has value when the failure is diagnosed correctly and the reusable learning is saved."
      >
        <div className="kls-operating-question is-loss">
          <span>LOSER RECORD</span>
          <h3>
            What failed, why did it fail, and what should we avoid, salvage,
            or retest?
          </h3>

          <div className="kls-operating-flow">
            <StageFlow
              items={[
                'Losing Asset',
                'Failure Type',
                'Evidence',
                'Diagnosis',
                'Next Rule',
              ]}
            />
          </div>
        </div>

        <div className="kls-field-grid is-loss">
          {loserFields.map((group) => (
            <article key={group.group}>
              <span>{group.group}</span>

              <div>
                {group.items.map((item) => (
                  <p key={item}>
                    <b>×</b>
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="kls-loss-types">
          {lossTypes.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="kls-diagnosis-strip is-loss">
          <span>IMPORTANT DISTINCTION</span>

          <div>
            <strong>Do not confuse a bad test with a bad idea.</strong>
            <p>
              Production mistakes, weak creator fit, poor delivery, funnel
              interference, or insufficient signal should not automatically
              become a permanent “concept failed” rule.
            </p>
          </div>
        </div>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Reuse the Learning"
        title="Turn Learning Into Better Future Creative"
        description="The library only matters if it changes what gets researched, prioritized, created, briefed, produced, iterated, and scaled next."
      >
        <div className="kls-reuse-flow">
          <StageFlow
            items={[
              'Winners + Losers',
              'Extract Learning',
              'Build Pattern Library',
              'Update Decisions',
              'Next Creative Cycle',
            ]}
          />
        </div>

        <div className="kls-reuse-grid">
          {reuseStages.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="kls-strength-block">
          <div className="kls-strength-copy">
            <span>LEARNING CONFIDENCE</span>
            <h3>
              One result is a signal. Repetition turns it into a pattern.
            </h3>
            <p>
              This prevents the system from overreacting to one ad and
              treating every isolated result as a permanent creative rule.
            </p>
          </div>

          <div className="kls-strength-grid">
            {learningStrength.map((item) => (
              <article key={item.level}>
                <span>{item.level}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="kls-final-rule">
          <span>CORE PRINCIPLE</span>
          <strong>
            Every dollar spent on creative should leave the system smarter
            than it was before the test.
          </strong>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}