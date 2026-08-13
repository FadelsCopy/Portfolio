// src/components/MinimumViableCreativeTest.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| MINIMUM VIABLE CREATIVE TEST DATA
|--------------------------------------------------------------------------
*/

const preserveItems = [
  'Target persona',
  'Qualified angle',
  'Core ad concept',
  'Main hook direction',
  'Core promise or mechanism',
  'Proof required for credibility',
  'Offer and destination when relevant',
];

const removeItems = [
  'Extra creators',
  'Extra locations',
  'Secondary scenes',
  'Heavy editing',
  'Polish that does not affect the concept',
  'Long runtime when a shorter version can express the idea',
  'Secondary variations that do not help validate the concept',
];

const practicalMvpMethods = [
  {
    type: 'STATIC MVP',
    title: 'Static / image ad',
    description:
      'Use a fast static, native image, review layout, comparison, before and after, or headline-led image to test whether the angle and visual direction can earn attention.',
    bestFor:
      'Angle • headline • visual direction • proof • offer',
    speed: 'FASTEST',
  },
  {
    type: 'AI STATIC',
    title: 'AI image / composite',
    description:
      'Prototype a visual world, scenario, product moment, transformation, or expensive shoot idea with AI before committing to photography or full production.',
    bestFor:
      'Visual concept • scenario • transformation • product world',
    speed: 'FAST',
  },
  {
    type: 'AI VIDEO',
    title: 'AI video prototype',
    description:
      'Create a short AI-generated or AI-assisted version of the key scene, story, transformation, or product moment to validate the creative direction before a real shoot.',
    bestFor:
      'Story • visual sequence • transformation • scene concept',
    speed: 'FAST',
  },
  {
    type: 'AI UGC',
    title: 'AI UGC / avatar prototype',
    description:
      'Use an AI creator or avatar to test the script, hook, argument, pacing, and creator-led concept before sourcing multiple real creators.',
    bestFor:
      'Hook • script • message • creator-led concept',
    speed: 'FAST',
  },
  {
    type: 'RAW UGC',
    title: 'Raw creator test',
    description:
      'Use one creator, one location, phone-shot footage, and minimal editing to test the concept before investing in polished creator production.',
    bestFor:
      'Creator fit • message • story • testimonial • demo',
    speed: 'FAST',
  },
  {
    type: 'VOICEOVER',
    title: 'Voiceover + existing footage',
    description:
      'Combine voiceover with stock, product footage, screenshots, reviews, existing B-roll, or simple motion to test the argument without a new shoot.',
    bestFor:
      'Mechanism • story • problem • education • proof',
    speed: 'FAST',
  },
  {
    type: 'ROUGH CUT',
    title: 'Rough edit / asset remix',
    description:
      'Build the concept from existing brand footage, previous shoots, creator clips, product shots, screenshots, and simple text overlays before producing new assets.',
    bestFor:
      'Edit concept • hook • pacing • proof stack • narrative',
    speed: 'FAST',
  },
  {
    type: 'LIGHT NATIVE',
    title: 'Lightweight native page',
    description:
      'If the concept depends on an advertorial or native experience, build only the essential headline, lead, mechanism, proof, product bridge, and offer first.',
    bestFor:
      'Advertorial direction • lead • mechanism • persuasion flow',
    speed: 'MEDIUM',
  },
];

const decisions = [
  {
    status: 'PROMOTE',
    title: 'Move to Creative Briefing',
    description:
      'The MVP produced enough positive signal to justify building the complete production version.',
    next: 'MVP → Creative Briefing',
    tone: 'promote',
  },
  {
    status: 'REVISE',
    title: 'Fix one clear weakness and retest',
    description:
      'The idea shows potential, but one identifiable weakness can be improved without rebuilding the entire concept.',
    next: 'Adjust → MVP Retest',
    tone: 'revise',
  },
  {
    status: 'INCONCLUSIVE',
    title: 'Fix the test before judging the concept',
    description:
      'The MVP was too weak, too different, poorly delivered, or otherwise failed to give a trustworthy answer.',
    next: 'Fix MVP → Rerun',
    tone: 'inconclusive',
  },
  {
    status: 'KILL',
    title: 'Stop investing in this concept',
    description:
      'A valid MVP produced enough evidence that the concept does not deserve additional production investment.',
    next: 'Document Learning → Next Concept',
    tone: 'kill',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function MinimumViableCreativeTest({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="LEAN VALIDATION SYSTEM"
      title="Minimum Viable Creative Test"
      introduction="When an MVP is required, the goal is to preserve the core concept while removing production complexity that is not necessary to learn."
      process={[
        'Build Smallest Valid Version',
        'Produce Fast MVP',
        'Decide',
      ]}
      singlePage
    >
      <StageSection
        number="00"
        navTitle="MVP Test"
        title="Minimum Viable Creative Test"
        description="Build the cheapest credible version that can still tell us whether the concept deserves full production."
      >
        <div className="mvc-board">
          <div className="mvc-board-top">
            <div className="mvc-board-top-copy">
              <span>THE OPERATING QUESTION</span>
              <h3>
                What is the cheapest credible version that can validate this concept?
              </h3>
            </div>

            <div className="mvc-board-flow">
              <StageFlow
                items={[
                  'Build Valid Version',
                  'Produce Fast MVP',
                  'Decide',
                ]}
              />
            </div>
          </div>

          <section className="mvc-step mvc-step-build">
            <header className="mvc-step-header">
              <div className="mvc-step-number">01</div>

              <div>
                <span>BUILD THE SMALLEST VALID VERSION</span>
                <h3>Remove production complexity, preserve the concept</h3>
              </div>

              <p>
                Reduce everything that is expensive or slow unless removing it
                would change the idea we are trying to validate.
              </p>
            </header>

            <div className="mvc-preserve-remove">
              <article className="mvc-preserve">
                <div className="mvc-column-title">
                  <span>KEEP</span>
                  <h4>What must survive the simplification</h4>
                </div>

                <div className="mvc-list">
                  {preserveItems.map((item) => (
                    <span key={item}>
                      <b>✓</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="mvc-remove">
                <div className="mvc-column-title">
                  <span>REMOVE</span>
                  <h4>What can be stripped away first</h4>
                </div>

                <div className="mvc-list">
                  {removeItems.map((item) => (
                    <span key={item}>
                      <b>×</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <div className="mvc-validity-rule">
              <span>VALIDITY CHECK</span>
              <strong>
                If simplifying the asset removes the reason the concept might
                work, it is not a valid MVP.
              </strong>
            </div>
          </section>

          <section className="mvc-step mvc-step-practical">
            <header className="mvc-step-header">
              <div className="mvc-step-number">02</div>

              <div>
                <span>PRODUCE THE MVP FAST</span>
                <h3>Use the fastest execution that can still represent the concept</h3>
              </div>

              <p>
                The goal is not low quality. The goal is low production friction
                while keeping the core persuasive idea intact.
              </p>
            </header>

            <div className="mvc-practical-grid">
              {practicalMvpMethods.map((method) => (
                <article key={method.title}>
                  <div className="mvc-practical-card-top">
                    <span>{method.type}</span>
                    <small>{method.speed}</small>
                  </div>

                  <h4>{method.title}</h4>
                  <p>{method.description}</p>

                  <div className="mvc-practical-best-for">
                    <span>BEST FOR</span>
                    <strong>{method.bestFor}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="mvc-rule-strip">
              <strong>SELECTION RULE</strong>
              <span>
                Choose the fastest method that preserves the concept. If a
                static can answer the question, do not build a video. If the
                idea depends on motion, story, creator delivery, or sequence,
                use the lightest video version that can represent it fairly.
              </span>
            </div>
          </section>

          <section className="mvc-step mvc-step-decision">
            <header className="mvc-step-header">
              <div className="mvc-step-number">03</div>

              <div>
                <span>DECIDE</span>
                <h3>Separate concept failure from test failure</h3>
              </div>

              <p>
                Every MVP ends with one explicit status and one next action.
              </p>
            </header>

            <div className="mvc-decision-grid">
              {decisions.map((decision) => (
                <article
                  className={`is-${decision.tone}`}
                  key={decision.status}
                >
                  <span>{decision.status}</span>
                  <h4>{decision.title}</h4>
                  <p>{decision.description}</p>
                  <strong>{decision.next}</strong>
                </article>
              ))}
            </div>
          </section>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}