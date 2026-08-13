// src/components/CreativeBriefing.jsx

import { lazy, Suspense, useState } from 'react';
import './brief-builder/brief-builder.css';

const BriefBuilder = lazy(() => import('./brief-builder/BriefBuilder'));

import StageDeepDiveLayout, {
  StageFlow,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| CREATIVE BRIEFING DATA
|--------------------------------------------------------------------------
*/

const briefBlocks = [
  {
    label: 'STRATEGY',
    title: 'What are we trying to communicate?',
    items: [
      'Persona / sub-persona',
      'Awareness level',
      'Qualified angle',
      'Core concept',
      'Main objective',
    ],
  },
  {
    label: 'CREATIVE',
    title: 'What needs to appear in the asset?',
    items: [
      'Format + duration',
      'Hook / opening',
      'Script or static copy',
      'Proof + product role',
      'Offer + CTA',
    ],
  },
  {
    label: 'PRODUCTION',
    title: 'How should it be executed?',
    items: [
      'Creator / editor direction',
      'Shots, B-roll + required assets',
      'Visual / pacing direction',
      'Deliverables + variations',
      'Technical specs + deadline',
    ],
  },
  {
    label: 'REFERENCES',
    title: 'What should the team study?',
    items: [
      'Link or file',
      'Relevant timestamp',
      'Exact element to study',
      'What should not be copied',
      'How to adapt it to this concept',
    ],
  },
];

const speedRules = [
  {
    number: '01',
    title: 'One source of truth',
    description:
      'The brief, references, assets, deliverables, and latest feedback live in one place instead of being scattered across messages.',
  },
  {
    number: '02',
    title: 'Separate creator and editor direction',
    description:
      'Each person sees only the context, instructions, assets, and decisions they actually need to execute their part correctly.',
  },
  {
    number: '03',
    title: 'Define non-negotiables vs creative freedom',
    description:
      'Protect the persona, angle, message, proof, offer, CTA, and test variable while leaving room for natural delivery and execution choices.',
  },
  {
    number: '04',
    title: 'Make references specific',
    description:
      'I never say “make it like this.” I mark the timestamp, the element to study, why it matters, and how it should be adapted.',
  },
  {
    number: '05',
    title: 'Use early checkpoints only when risk is high',
    description:
      'For new creators, new formats, or complex executions, I review one representative sample before the full asset is completed.',
  },
  {
    number: '06',
    title: 'Give consolidated, actionable feedback',
    description:
      'Feedback includes the exact location, what needs to change, why it matters, the requested fix, and a reference when useful.',
  },
];

const feedbackFlow = [
  'Brief',
  'Align',
  'Produce',
  'Checkpoint if Needed',
  'Consolidated Feedback',
  'Final Approval',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeBriefing({
  stage,
  onBack,
}) {
  const [isBriefBuilderOpen, setIsBriefBuilderOpen] = useState(false);

  return (
    <>
      <StageDeepDiveLayout
        stage={stage}
        onBack={onBack}
        eyebrow="PRODUCTION COMMUNICATION SYSTEM"
        title="Creative Briefing and Production Communication"
        introduction="Turn the approved concept into instructions a creator or editor can execute correctly without guessing."
        process={[
          'Approved Concept',
          'Brief',
          'Production',
          'Feedback',
          'Approval',
        ]}
        singlePage
      >
        <StageSection
          number="00"
          navTitle="Briefing"
          title="Creative Briefing"
          description="The goal is simple: protect the strategy, remove guesswork, and make production move faster with less micromanagement."
        >
          <div className="cb-top-launch">
            <div className="cb-top-launch-copy">
              <span>CREATIVE BRIEF SYSTEM</span>
              <strong>
                Can another person execute the intended concept without guessing?
              </strong>
            </div>

            <button
              type="button"
              className="cb-create-brief-button"
              onClick={() => setIsBriefBuilderOpen(true)}
            >
              <span>Create Brief</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="cb-brief-visual">
            {briefBlocks.map((block) => (
              <article key={block.label}>
                <div className="cb-brief-block-head">
                  <span>{block.label}</span>
                  <h3>{block.title}</h3>
                </div>

                <div className="cb-brief-items">
                  {block.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="cb-brief-rule">
            <span>BRIEFING RULE</span>
            <strong>
              If the creator or editor still has to guess the angle, hook,
              deliverable, reference, asset, or deadline, the brief is not clear enough.
            </strong>
          </div>

          <div className="cb-speed-section">
            <div className="cb-speed-header">
              <div>
                <span>REDUCE BACK AND FORTH</span>
                <h3>Less micromanagement. Faster production.</h3>
              </div>

              <p>
                The brief should answer predictable questions before production
                starts, then keep feedback specific and centralized.
              </p>
            </div>

            <div className="cb-speed-grid">
              {speedRules.map((rule) => (
                <article key={rule.number}>
                  <span className="cb-speed-number">
                    {rule.number}
                  </span>

                  <div>
                    <h4>{rule.title}</h4>
                    <p>{rule.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="cb-feedback-flow">
              <StageFlow items={feedbackFlow} />
            </div>
          </div>
        </StageSection>
      </StageDeepDiveLayout>

      {isBriefBuilderOpen && (
        <Suspense
          fallback={
            <div className="brief-builder-loading-overlay">
              <div className="brief-builder-loading-card">
                <span>CREATIVE BRIEF BUILDER</span>
                <strong>Loading builder…</strong>
              </div>
            </div>
          }
        >
          <BriefBuilder
            onClose={() => setIsBriefBuilderOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}