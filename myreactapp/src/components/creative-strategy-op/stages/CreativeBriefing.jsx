// src/components/CreativeBriefing.jsx

import { lazy, Suspense, useState } from 'react';
import '../brief-builder/brief-builder.css';

const BriefBuilder = lazy(() => import('../brief-builder/BriefBuilder'));

import StageDeepDiveLayout, {
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| ROLE-SPECIFIC BRIEFING
|--------------------------------------------------------------------------
*/

const roleBriefs = {
  editor: {
    tab: 'Editor',
    eyebrow: 'VIDEO EDITOR',
    title: 'I remove strategic guesswork and leave execution room.',
    description:
      'The editor receives the strategic spine, the assets, the intended structure, and the required outputs. They should execute the idea, not have to invent what the idea is.',
    rows: [
      {
        label: 'Strategy',
        value:
          'Persona, awareness level, angle, concept, core message, proof, offer, CTA, and the variable we are testing.',
      },
      {
        label: 'Inputs',
        value:
          'Script or structure, VO / creator footage, B-roll, product shots, proof assets, brand files, and exact asset locations.',
      },
      {
        label: 'Edit Direction',
        value:
          'Hook and first frame, beat order, pacing, captions, B-roll cues, product reveal, proof placement, CTA treatment, and useful references with timestamps.',
      },
      {
        label: 'Deliverables',
        value:
          'Duration, aspect ratios, required versions, hook variations, naming, export requirements, and deadline.',
      },
    ],
    fixed: [
      'Angle',
      'Core message',
      'Claim',
      'Proof logic',
      'Offer',
      'CTA',
      'Test variable',
    ],
    flexible: [
      'Transitions',
      'Music',
      'Micro timing',
      'Cut choices',
      'Visual polish',
    ],
    outcome:
      'The editor can make strong editing decisions without accidentally changing the strategy being tested.',
  },

  ugc: {
    tab: 'UGC / Creator',
    eyebrow: 'UGC / CREATOR',
    title: 'I protect the message without scripting the humanity out of it.',
    description:
      'The creator needs enough context to understand who they are speaking to, what must land, and which visuals are required, while still sounding natural.',
    rows: [
      {
        label: 'Strategy',
        value:
          'Persona, customer situation, angle, core belief, desired outcome, proof, offer, CTA, and the intended emotional takeaway.',
      },
      {
        label: 'Talking Direction',
        value:
          'A final script when wording or claims must be controlled, or structured talking points when natural delivery matters more.',
      },
      {
        label: 'Shot Direction',
        value:
          'Required hooks, product interaction, demonstrations, problem-state shots, desired-outcome shots, reactions, and B-roll.',
      },
      {
        label: 'Delivery',
        value:
          'Tone, energy, pace, setting, creator perspective, native feel, references, deliverables, and deadline.',
      },
    ],
    fixed: [
      'Angle',
      'Required claim',
      'Key message',
      'Required shots',
      'Proof',
      'Offer',
      'CTA',
    ],
    flexible: [
      'Natural phrasing',
      'Gestures',
      'Cadence',
      'Small story choices',
      'Personality',
    ],
    outcome:
      'The creator sounds like a real person while still delivering the strategic message the concept requires.',
  },

  designer: {
    tab: 'Designer',
    eyebrow: 'STATIC / DESIGN',
    title: 'I define the communication hierarchy, not every pixel.',
    description:
      'The designer should know exactly what the ad must communicate, what needs to dominate visually, and which assets or variants are required.',
    rows: [
      {
        label: 'Strategy',
        value:
          'Persona, awareness level, angle, concept, main message, proof requirement, offer, CTA, and intended test.',
      },
      {
        label: 'Message Hierarchy',
        value:
          'Headline, support copy, proof, product role, offer, CTA, and what should be understood first, second, and third.',
      },
      {
        label: 'Visual Direction',
        value:
          'Dominant visual, product prominence, proof asset, demonstration needs, composition direction, and the intended visual language.',
      },
      {
        label: 'Deliverables',
        value:
          'Placements, dimensions, variants, required copy or visual changes, references, source files, naming, and deadline.',
      },
    ],
    fixed: [
      'Message hierarchy',
      'Claim',
      'Proof',
      'Product role',
      'Offer',
      'CTA',
      'Test variable',
    ],
    flexible: [
      'Layout exploration',
      'Typography treatment',
      'Spacing',
      'Composition',
      'Visual polish',
    ],
    outcome:
      'The designer owns the visual solution while the strategic hierarchy remains intact.',
  },
};

/*
|--------------------------------------------------------------------------
| DIRECTION VS AUTONOMY
|--------------------------------------------------------------------------
*/

const autonomyLevels = [
  {
    number: '01',
    label: 'NEW PERSON / NEW FORMAT',
    title: 'More structure',
    description:
      'More explicit instructions, more examples, a smaller first deliverable, and an earlier checkpoint.',
  },
  {
    number: '02',
    label: 'EXPERIENCED / NEW TO BRAND',
    title: 'Clear boundaries + room',
    description:
      'I explain the strategy, brand standards, non-negotiables, and expected output, then let their craft experience work.',
  },
  {
    number: '03',
    label: 'PROVEN COLLABORATOR',
    title: 'Lighter brief + more autonomy',
    description:
      'Shared terminology, known standards, approved examples, and trust reduce the amount of instruction required.',
  },
];

const autonomyFactors = [
  'Skill',
  'Brand familiarity',
  'Format familiarity',
  'Working history',
  'Production risk',
];

/*
|--------------------------------------------------------------------------
| MICROMANAGEMENT
|--------------------------------------------------------------------------
*/

const micromanagementRules = [
  {
    number: '01',
    title: 'Align before production',
    description:
      'Objective, deliverable, references, ownership, and expectations are clear before execution begins.',
  },
  {
    number: '02',
    title: 'Separate fixed from flexible',
    description:
      'I protect the strategic variables being tested and leave specialist execution decisions to the person doing the work.',
  },
  {
    number: '03',
    title: 'Checkpoint only when risk justifies it',
    description:
      'New collaborator, new format, expensive shoot, or complex execution may justify one early sample. Otherwise I let them work.',
  },
  {
    number: '04',
    title: 'Review output, not activity',
    description:
      'I do not direct every cut, sentence, or pixel. I review the finished work against the agreed strategic intent.',
  },
];

/*
|--------------------------------------------------------------------------
| MISALIGNMENT + FEEDBACK
|--------------------------------------------------------------------------
*/

const feedbackSteps = [
  'Exact location',
  'What is mismatched',
  'Why it matters',
  'Requested correction',
  'Reference if useful',
];

/*
|--------------------------------------------------------------------------
| COLLABORATION COMPOUNDS
|--------------------------------------------------------------------------
*/

const collaborationStages = [
  {
    number: '01',
    title: 'First projects',
    description:
      'More detailed brief, stronger references, clearer examples, and tighter alignment while we learn how each other works.',
  },
  {
    number: '02',
    title: 'Shared operating language',
    description:
      'We build common terminology, approved examples, feedback patterns, naming conventions, and reusable templates.',
  },
  {
    number: '03',
    title: 'Compounding collaboration',
    description:
      'Briefs get lighter, checkpoints decrease, feedback gets faster, and autonomy increases without losing strategic control.',
  },
];

const collaborationAssets = [
  'Shared terminology',
  'Approved examples',
  'Reusable templates',
  'Brand rules',
  'Naming conventions',
  'Asset library',
  'Known feedback patterns',
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
  const [selectedRole, setSelectedRole] = useState('editor');

  const activeBrief = roleBriefs[selectedRole];

  const openBriefBuilder = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setIsBriefBuilderOpen(true);
  };

  return (
    <>
      <StageDeepDiveLayout
        stage={stage}
        onBack={onBack}
        eyebrow="PRODUCTION COMMUNICATION SYSTEM"
        title="Creative Briefing and Production Communication"
        introduction="Turn the approved concept into clear instructions for the person executing it, then manage production without unnecessary micromanagement."
        process={[
          'Adapt Brief',
          'Align',
          'Give Ownership',
          'Review',
          'Improve System',
        ]}
        singlePage
      >
        <StageSection
          number="00"
          navTitle="Briefing"
          title="Creative Briefing"
          description="How I brief different production roles, decide how much direction to give, avoid micromanagement, handle misalignment, and make collaboration faster over time."
        >
          {/* ============================================================
              TOP / LIVE BRIEF BUILDER
             ============================================================ */}

          <div className="cb-top-launch">
            <div className="cb-top-launch-copy">
              <span>CREATIVE BRIEF SYSTEM</span>

              <strong>
                Can the person execute the intended concept correctly without guessing?
              </strong>
            </div>

            <button
              type="button"
              className="cb-create-brief-button"
              onClick={openBriefBuilder}
            >
              <span>Create Brief</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          {/* ============================================================
              01 — HOW I BRIEF BY ROLE
             ============================================================ */}

          <section className="cb-role-section">
            <div className="cb-section-header">
              <div>
                <span>01 — HOW I BRIEF</span>
                <h3>
                  Same strategy. Different instructions for the person executing it.
                </h3>
              </div>

              <p>
                I do not send one generic brief to everyone. The strategic core
                stays consistent, but the execution information changes by role.
              </p>
            </div>

            <div
              className="cb-role-tabs"
              role="tablist"
              aria-label="Brief recipient"
            >
              {Object.entries(roleBriefs).map(([key, role]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={selectedRole === key}
                  className={selectedRole === key ? 'is-active' : ''}
                  onClick={() => setSelectedRole(key)}
                >
                  {role.tab}
                </button>
              ))}
            </div>

            <div className="cb-role-panel">
              <div className="cb-role-summary">
                <span>{activeBrief.eyebrow}</span>
                <h3>{activeBrief.title}</h3>
                <p>{activeBrief.description}</p>
              </div>

              <div className="cb-role-table">
                <div className="cb-role-table-head">
                  <span>BRIEF AREA</span>
                  <span>WHAT I GIVE THEM</span>
                </div>

                {activeBrief.rows.map((row) => (
                  <div
                    className="cb-role-table-row"
                    key={row.label}
                  >
                    <strong>{row.label}</strong>
                    <p>{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="cb-boundaries">
                <article>
                  <span>NON-NEGOTIABLES</span>

                  <div>
                    {activeBrief.fixed.map((item) => (
                      <strong key={item}>{item}</strong>
                    ))}
                  </div>
                </article>

                <article className="is-flexible">
                  <span>EXECUTION FREEDOM</span>

                  <div>
                    {activeBrief.flexible.map((item) => (
                      <strong key={item}>{item}</strong>
                    ))}
                  </div>
                </article>
              </div>

              <div className="cb-role-outcome">
                <span>EXPECTED RESULT</span>
                <strong>{activeBrief.outcome}</strong>
              </div>
            </div>
          </section>

          {/* ============================================================
              02 — DIRECTION VS AUTONOMY
             ============================================================ */}

          <section className="cb-autonomy-section">
            <div className="cb-section-header">
              <div>
                <span>02 — DIRECTION VS AUTONOMY</span>
                <h3>
                  I change the amount of direction based on the person and the risk.
                </h3>
              </div>

              <p>
                An experienced editor may need very little execution direction,
                but still need more context when they are new to the brand or format.
              </p>
            </div>

            <div className="cb-autonomy-track">
              {autonomyLevels.map((level, index) => (
                <article key={level.number}>
                  <div className="cb-autonomy-card-top">
                    <span>{level.number}</span>
                    <small>{level.label}</small>
                  </div>

                  <h4>{level.title}</h4>
                  <p>{level.description}</p>

                  {index < autonomyLevels.length - 1 && (
                    <i aria-hidden="true">→</i>
                  )}
                </article>
              ))}
            </div>

            <div className="cb-autonomy-factors">
              <span>I CALIBRATE DIRECTION USING</span>

              <div>
                {autonomyFactors.map((factor) => (
                  <strong key={factor}>{factor}</strong>
                ))}
              </div>
            </div>

            <div className="cb-autonomy-rule">
              <span>RULE</span>

              <strong>
                More uncertainty or production risk → more structure.
                More proven understanding → more autonomy.
              </strong>
            </div>
          </section>

          {/* ============================================================
              03 — MICROMANAGEMENT + MISALIGNMENT
             ============================================================ */}

          <div className="cb-management-grid">
            <section className="cb-management-card">
              <header>
                <span>03 — HOW I AVOID MICROMANAGEMENT</span>

                <h3>
                  Clarity upfront. Ownership during execution.
                </h3>
              </header>

              <div className="cb-management-rules">
                {micromanagementRules.map((rule) => (
                  <article key={rule.number}>
                    <span>{rule.number}</span>

                    <div>
                      <h4>{rule.title}</h4>
                      <p>{rule.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="cb-management-card cb-misalignment-card">
              <header>
                <span>04 — MISALIGNMENT + FEEDBACK</span>

                <h3>
                  Diagnose the mismatch before correcting it.
                </h3>
              </header>

              <div className="cb-mismatch-grid">
                <article>
                  <span>IF MY BRIEF WAS UNCLEAR</span>
                  <strong>Own the ambiguity.</strong>

                  <p>
                    Clarify the missing direction, align on the correction,
                    then improve the brief or template so the same confusion
                    does not repeat.
                  </p>
                </article>

                <article>
                  <span>IF EXECUTION DRIFTED</span>
                  <strong>Point to the exact gap.</strong>

                  <p>
                    Show what was agreed, where the output drifted, why it
                    matters strategically, and the correction required.
                  </p>
                </article>
              </div>

              <div className="cb-feedback-system">
                <span>ACTIONABLE FEEDBACK</span>

                <div>
                  {feedbackSteps.map((step, index) => (
                    <div key={step}>
                      <strong>{step}</strong>

                      {index < feedbackSteps.length - 1 && (
                        <i aria-hidden="true">→</i>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cb-feedback-example">
                <span>PRACTICAL EXAMPLE</span>

                <p>
                  <strong>0:03 to 0:05:</strong> the product reveal happens
                  before the problem is established. Move it after the problem
                  beat because this concept depends on building recognition
                  first. Use the reference at 0:07 for pacing, not for the
                  exact visual.
                </p>
              </div>
            </section>
          </div>

          {/* ============================================================
              05 — COLLABORATION COMPOUNDS
             ============================================================ */}

          <section className="cb-compound-section">
            <div className="cb-section-header">
              <div>
                <span>05 — COLLABORATION COMPOUNDS</span>

                <h3>
                  The working system gets lighter as the relationship gets stronger.
                </h3>
              </div>

              <p>
                The goal is not to keep writing increasingly detailed briefs.
                The goal is to build shared standards so less explanation is
                required over time.
              </p>
            </div>

            <div className="cb-compound-track">
              {collaborationStages.map((item, index) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  {index < collaborationStages.length - 1 && (
                    <i aria-hidden="true">→</i>
                  )}
                </article>
              ))}
            </div>

            <div className="cb-compound-assets">
              <span>WHAT ACCUMULATES OVER TIME</span>

              <div>
                {collaborationAssets.map((item) => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
            </div>

            <div className="cb-final-demo">
              <div>
                <span>SHOW IT PRACTICALLY</span>
                <strong>
                  Once the system is clear, I can build the actual production brief.
                </strong>
              </div>

              <button
                type="button"
                className="cb-create-brief-button cb-final-create-brief-button"
                onClick={openBriefBuilder}
              >
                <span>Create Brief</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </section>
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