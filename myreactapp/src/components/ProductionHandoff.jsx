// src/components/ProductionHandoff.jsx

import StageDeepDiveLayout, {
  StageCard,
  StageFlow,
  StageGrid,
  StageHighlight,
  StageList,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| PRODUCTION HANDOFF DATA
|--------------------------------------------------------------------------
*/

const productionHandoffItems = [
  'Final approved brief',
  'Required assets and references',
  'Deliverables and variations',
  'Non-negotiable strategic elements',
  'Deadline and ownership',
  'Clear file naming',
];

const strategicQaChecks = [
  'Target persona',
  'Selected angle',
  'Approved concept',
  'Hook',
  'Proof',
  'Offer',
  'CTA',
  'Planned variation',
];

const launchAlignmentItems = [
  'Which creatives are being tested',
  'What changes between each variation',
  'What remains controlled',
  'Correct offer and landing page',
  'Creative naming and tracking',
  'Launch date and test context',
];

const mediaBuyerOwnership = [
  'Campaign setup',
  'Budget',
  'Bidding',
  'Placements',
  'Audiences',
  'Deployment',
];

const outputs = [
  'Approved final assets',
  'Clear creative and variation labels',
  'Confirmed test structure',
  'Launch context ready for analysis',
];

const sops = [
  {
    title: 'Production Handoff and Launch Alignment',
    description:
      'Defines how to hand off approved creatives, protect the strategic direction, confirm the test structure, and prepare the launch information required for later performance analysis.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function ProductionHandoff({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="HANDOFF & LAUNCH SYSTEM"
      title="Production Handoff & Launch Alignment"
      introduction="Once the creative is approved, I make sure the strategy survives production and the test is launched with enough structure to analyze later."
      process={[
        'Approved Creative',
        'Production Handoff',
        'Strategic QA',
        'Launch Alignment',
        'Performance Data',
      ]}
      outputs={outputs}
      outputTitle="Launch-Ready Creative Test"
      sops={sops}
      sopDescription="The Production Handoff and Launch Alignment SOP defines how approved creative moves into launch without losing the strategy or test structure."
    >
      <StageSection
        number="00"
        navTitle="System Overview"
        title="Production Handoff & Launch Alignment"
        description="Protect the approved strategy, confirm the test structure, and prepare the creative for clean performance analysis."
      >
        <StageHighlight
          title="Core Handoff Flow"
          type="success"
        >
          <StageFlow
            items={[
              'Approved Creative',
              'Production Handoff',
              'Strategic QA',
              'Launch Alignment',
              'Performance Data',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Primary Objective"
            description="Make sure the final asset and launch structure still reflect the approved strategic direction."
          >
            <StageList
              items={[
                'Protect the original strategy',
                'Preserve the planned variation',
                'Maintain clear ownership',
                'Keep naming and tracking consistent',
                'Prepare enough context for later analysis',
              ]}
            />
          </StageCard>

          <StageHighlight title="Operating Boundary">
            <p>
              The goal is not to manage every production or media-buying
              detail. The goal is to make sure the strategy survives the
              handoff and the creative test can be analyzed correctly later.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Production Handoff"
        title="Production Handoff"
        description="Provide the production team with the final approved information required to deliver and organize the asset correctly."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Provide">
            <StageList items={productionHandoffItems} />
          </StageCard>

          <StageHighlight
            title="Handoff Standard"
            type="success"
          >
            <p>
              The handoff should make ownership, deadlines, deliverables,
              variations, references, and strategic non-negotiables clear
              before the asset moves toward launch.
            </p>
          </StageHighlight>
        </StageGrid>

        <StageHighlight title="Handoff Sequence">
          <StageFlow
            items={[
              'Approved Brief',
              'Required Assets',
              'Deliverables',
              'Ownership',
              'File Naming',
              'Final Delivery',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Strategic QA"
        title="Strategic QA"
        description="Confirm that the final asset still matches the approved strategic direction before launch."
      >
        <StageGrid columns={2}>
          <StageCard title="Final Strategic Checks">
            <StageList items={strategicQaChecks} />
          </StageCard>

          <StageHighlight
            title="Strategic QA Purpose"
            type="warning"
          >
            <p>
              The goal is not to manage every production detail. It is to
              prevent the original strategy from being lost during
              execution.
            </p>
          </StageHighlight>
        </StageGrid>

        <StageHighlight
          title="QA Logic"
          type="success"
        >
          <StageFlow
            items={[
              'Final Asset',
              'Persona Check',
              'Angle and Concept Check',
              'Hook and Proof Check',
              'Offer and CTA Check',
              'Variation Check',
              'Approved for Launch',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Launch Alignment"
        title="Launch Alignment"
        description="Align with the media buyer on the creative test, the controlled variables, and the context needed for later analysis."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Align On">
            <StageList items={launchAlignmentItems} />
          </StageCard>

          <StageCard
            title="Media Buyer Ownership"
            description="The media buyer remains responsible for the campaign deployment."
          >
            <StageList items={mediaBuyerOwnership} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Launch Alignment Rule"
          type="warning"
        >
          <p>
            The creative strategist confirms what is being tested and what
            remains controlled. The media buyer owns campaign setup, budget,
            bidding, placements, audiences, and deployment.
          </p>
        </StageHighlight>

        <StageHighlight title="Test Structure">
          <StageFlow
            items={[
              'Creative',
              'Variation',
              'Controlled Variables',
              'Offer and Landing Page',
              'Naming and Tracking',
              'Launch Context',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Final Output"
        title="Final Output"
        description="Prepare the approved assets, labels, test structure, and launch context required for Performance Analysis."
      >
        <StageGrid columns={2}>
          <StageCard title="Launch-Ready Outputs">
            <StageList items={outputs} />
          </StageCard>

          <StageHighlight
            title="Transition to Analysis"
            type="success"
          >
            <StageFlow
              items={[
                'Approved Final Assets',
                'Clear Labels',
                'Confirmed Test Structure',
                'Launch Context',
                'Performance Analysis',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}