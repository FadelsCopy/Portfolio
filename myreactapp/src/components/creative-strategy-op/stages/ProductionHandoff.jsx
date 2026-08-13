// src/components/ProductionHandoff.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| PRODUCTION HANDOFF DATA
|--------------------------------------------------------------------------
*/

const creatorChecks = [
  'Concept + angle understood',
  'Hook / opening understood',
  'Script or talking points clear',
  'References available',
  'Required shots / deliverables clear',
  'Deadline confirmed',
];

const editorChecks = [
  'Final brief + footage / assets received',
  'Pacing / structure understood',
  'Proof + product moments clear',
  'CTA and end frame clear',
  'Required variations understood',
  'Deadline + naming confirmed',
];

const finalQaChecks = [
  'Correct persona',
  'Correct angle',
  'Concept survived execution',
  'Hook executed properly',
  'Product / mechanism is clear',
  'Proof is present where required',
  'Offer + CTA are correct',
  'Variations changed the intended variable',
  'No obvious production mistakes',
];

const mediaBuyerHandoff = [
  'Final approved creatives',
  'Clear creative names',
  'What each variation is testing',
  'What should remain controlled',
  'Correct destination / offer',
  'Context needed for later analysis',
];

const mediaBuyerOwnership = [
  'Campaign setup',
  'Budget',
  'Bidding',
  'Audience / placement',
  'Deployment',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function ProductionHandoff({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="PRODUCTION + LAUNCH CONTROL"
      title="Production Handoff & Launch Alignment"
      introduction="Make sure the approved creative strategy survives production and the correct asset is launched with the correct test context."
      process={[
        'Production Alignment',
        'Final Creative QA',
        'Launch Alignment',
      ]}
      singlePage
    >
      <StageSection
        number="00"
        navTitle="Production Handoff"
        title="Production Handoff & Launch Alignment"
        description="Stay involved just enough to protect the strategy from brief to live ad."
      >
        <div className="production-handoff-board">
          <div className="production-handoff-top">
            <div>
              <span>THE HIDDEN INTERVIEW QUESTION</span>
              <h3>
                Can I make sure the strategy survives production and the right
                creative actually goes live?
              </h3>
            </div>

            <div className="production-handoff-flow">
              <StageFlow
                items={[
                  'Creator + Editor',
                  'Final Creative QA',
                  'Media Buyer',
                  'Live Confirmation',
                ]}
              />
            </div>
          </div>

          <section className="production-handoff-step">
            <header className="production-handoff-step-header">
              <span className="production-handoff-step-number">
                01
              </span>

              <div>
                <span>PRODUCTION ALIGNMENT</span>
                <h3>Remove ambiguity before production starts</h3>
              </div>
            </header>

            <div className="production-handoff-people-grid">
              <article>
                <div className="production-handoff-person-title">
                  <span>CREATOR</span>
                  <h4>What I make sure is clear</h4>
                </div>

                <div className="production-handoff-checks">
                  {creatorChecks.map((item) => (
                    <span key={item}>
                      <b>✓</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article>
                <div className="production-handoff-person-title">
                  <span>EDITOR</span>
                  <h4>What I make sure is clear</h4>
                </div>

                <div className="production-handoff-checks">
                  {editorChecks.map((item) => (
                    <span key={item}>
                      <b>✓</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <div className="production-handoff-rule">
              <strong>MY JOB</strong>
              <span>Remove ambiguity before production starts.</span>
            </div>
          </section>

          <section className="production-handoff-step">
            <header className="production-handoff-step-header">
              <span className="production-handoff-step-number">
                02
              </span>

              <div>
                <span>FINAL CREATIVE QA</span>
                <h3>Did the strategy survive production?</h3>
              </div>
            </header>

            <div className="production-handoff-qa-grid">
              {finalQaChecks.map((item) => (
                <div
                  className="production-handoff-qa-item"
                  key={item}
                >
                  <span>✓</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="production-handoff-rule is-qa">
              <strong>QA RULE</strong>
              <span>
                I am not checking whether the edit simply looks nice. I am
                checking whether the approved strategy survived execution.
              </span>
            </div>
          </section>

          <section className="production-handoff-step">
            <header className="production-handoff-step-header">
              <span className="production-handoff-step-number">
                03
              </span>

              <div>
                <span>LAUNCH ALIGNMENT</span>
                <h3>Give the media buyer the correct asset + test context</h3>
              </div>
            </header>

            <div className="production-handoff-launch-grid">
              <article>
                <div className="production-handoff-person-title">
                  <span>I PROVIDE</span>
                  <h4>Creative + test context</h4>
                </div>

                <div className="production-handoff-checks">
                  {mediaBuyerHandoff.map((item) => (
                    <span key={item}>
                      <b>✓</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article>
                <div className="production-handoff-person-title">
                  <span>MEDIA BUYER OWNS</span>
                  <h4>Campaign deployment</h4>
                </div>

                <div className="production-handoff-checks">
                  {mediaBuyerOwnership.map((item) => (
                    <span key={item}>
                      <b>→</b>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <div className="production-handoff-live-check">
              <span>FINAL LIVE CHECK</span>

              <StageFlow
                items={[
                  'Approved Asset',
                  'Correct Test Setup',
                  'Correct Destination',
                  'Naming + Tracking',
                  'LIVE',
                ]}
              />

              <strong>
                Confirm the exact approved asset actually went live.
              </strong>
            </div>
          </section>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}