// src/components/MinimumViableCreativeTest.jsx

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
| MINIMUM VIABLE CREATIVE TEST DATA
|--------------------------------------------------------------------------
*/

const whenToUseMvp = [
  'Full production is expensive or slow',
  'The concept requires multiple creators, locations, or assets',
  'The angle or mechanism is still uncertain',
  'The visual idea has not been proven',
  'The concept requires a long VSL, advertorial, or complex funnel',
  'A simpler version can test the same core idea',
  'The downside of producing the full concept and failing is meaningful',
];

const whenToSkipMvp = [
  'The finished asset is already cheap and fast to produce',
  'The concept is a simple static or basic UGC ad',
  'The concept is a minor iteration of a proven winner',
  'A stripped-down version would not save meaningful time or money',
  'Removing production quality would weaken the exact thing being tested',
];

const coreAssumptions = [
  'The angle',
  'The hook',
  'The mechanism',
  'The visual idea',
  'The creator',
  'The format',
  'The proof',
  'The offer',
  'The advertorial or landing-page direction',
];

const possibleMvpVersions = [
  'Static mock-up',
  'Raw talking-head video',
  'Rough UGC',
  'Voiceover with stock footage',
  'Slideshow',
  'Short-form cutdown',
  'AI prototype',
  'Storyboard or animatic',
  'One demonstration clip',
  'One creator version',
  'Lightweight advertorial',
  'Basic landing-page variation',
];

const mvpLaunchRequirements = [
  'A clear test objective',
  'A defined audience',
  'A realistic budget',
  'A controlled offer and landing page',
  'A small number of meaningful variations',
  'Clear success and failure signals',
];

const fullProductionActions = [
  'Produce the complete version',
  'Improve the production quality',
  'Expand the strongest hook or execution',
  'Create planned variations',
  'Prepare the concept for broader testing and scaling',
];

const reviseAndRetestAdjustments = [
  'Changing the hook',
  'Simplifying the mechanism',
  'Strengthening the proof',
  'Changing the creator',
  'Improving the visual execution',
  'Adjusting the format',
  'Clarifying the offer',
];

const inconclusiveReasons = [
  'The test did not spend enough',
  'The execution did not fairly represent the concept',
  'The wrong audience was used',
  'The landing page or offer created interference',
  'Too many variables changed',
  'Tracking was unreliable',
];

const stopReasons = [
  'The angle does not resonate',
  'The core message is weak',
  'The product connection feels forced',
  'The concept cannot be expressed credibly',
  'The available proof is insufficient',
  'Better opportunities exist in the pipeline',
];

const finalStatuses = [
  {
    title: 'Full Production',
    description:
      'The MVP proves that the core idea has enough potential to justify full investment.',
    items: fullProductionActions,
  },
  {
    title: 'Revise and Retest',
    description:
      'The MVP shows potential, but a specific weakness is limiting performance.',
    items: reviseAndRetestAdjustments,
  },
  {
    title: 'Inconclusive',
    description:
      'The MVP did not produce a reliable enough signal to support a decision.',
    items: inconclusiveReasons,
  },
  {
    title: 'Stop',
    description:
      'The concept does not show enough positive signal to justify additional investment.',
    items: stopReasons,
  },
];

const outputs = [
  'Clear decision on whether an MVP is necessary',
  'Defined core assumption',
  'Smallest credible version of the concept',
  'Controlled MVP test',
  'Documented result and learning',
  'Final status: Full Production, Revise and Retest, Inconclusive, or Stop',
];

const sops = [
  {
    title: 'Minimum Viable Creative Test',
    description:
      'Defines how to decide when an MVP is necessary, identify the riskiest assumption, build the smallest credible version, run the test, and choose whether to move into full production, revise, retest, or stop.',
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
      eyebrow="CONDITIONAL VALIDATION SYSTEM"
      title="Minimum Viable Creative Test"
      introduction="MVP testing is a conditional step used when full production would require significant time, cost, or resources, and the core idea can be tested through a simpler version first. The goal is to test the most important assumption behind the concept before committing to full production."
      process={[
        'Completed Concept',
        'MVP Decision',
        'Smallest Credible Version',
        'Test',
        'Scale, Revise, or Stop',
      ]}
      outputs={outputs}
      outputTitle="MVP Test Decision"
      sops={sops}
      sopDescription="The Minimum Viable Creative Test SOP defines how to validate the riskiest assumption before committing to full production."
    >
      <StageSection
        number="00"
        navTitle="MVP Overview"
        title="Minimum Viable Creative Test"
        description="Use a simplified but credible version of the concept to validate the core idea before making a larger production investment."
      >
        <StageHighlight
          title="Core MVP Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Completed Concept',
              'MVP Decision',
              'Build Smallest Credible Version',
              'Test',
              'Scale',
              'Revise',
              'Stop',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Primary Objective"
            description="Reduce risk without removing the central persuasive idea."
          >
            <StageList
              items={[
                'Test the most important assumption',
                'Reduce unnecessary production cost',
                'Reduce unnecessary production time',
                'Generate a useful decision signal',
                'Protect the team from investing heavily in a weak direction',
              ]}
            />
          </StageCard>

          <StageHighlight title="Main Test Question">
            <p>
              Does the core idea create enough positive signal to justify
              further investment?
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="When to Use It"
        title="When to Use an MVP"
        description="Use an MVP only when it meaningfully reduces risk, production cost, or time."
      >
        <StageGrid columns={2}>
          <StageCard title="Use an MVP When">
            <StageList items={whenToUseMvp} />
          </StageCard>

          <StageCard title="Skip the MVP When">
            <StageList items={whenToSkipMvp} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="MVP Decision Rule"
          type="warning"
        >
          <p>
            An MVP should only be used when the simplified version can test
            the same central idea while saving meaningful time, money, or
            production resources.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Core Assumption"
        title="Identify the Core Assumption"
        description="Define the part of the concept that most needs validation before anything is produced."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Possible Core Assumptions"
            description="The MVP should focus on the single variable carrying the greatest uncertainty."
          >
            <StageList items={coreAssumptions} />
          </StageCard>

          <StageHighlight
            title="Assumption Rule"
            type="success"
          >
            <p>
              The MVP should test the core assumption as directly as
              possible. It should not become a broad test with several
              unrelated variables changing at once.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Build the MVP"
        title="Build the Smallest Credible Version"
        description="Reduce production complexity without removing the central persuasive idea."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible MVP Versions">
            <StageList items={possibleMvpVersions} />
          </StageCard>

          <StageHighlight
            title="Quality Standard"
            type="warning"
          >
            <p>
              The goal is not to create a low-quality version. It is to
              create the simplest version capable of producing a useful
              signal.
            </p>
          </StageHighlight>
        </StageGrid>

        <StageHighlight title="Build Logic">
          <StageFlow
            items={[
              'Core Assumption',
              'Remove Unnecessary Complexity',
              'Preserve Central Idea',
              'Smallest Credible Version',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Run the Test"
        title="Test the MVP"
        description="Launch the MVP with enough control and structure to produce a usable decision."
      >
        <StageGrid columns={2}>
          <StageCard title="Launch Requirements">
            <StageList items={mvpLaunchRequirements} />
          </StageCard>

          <StageHighlight title="Single Test Objective">
            <p>
              The test should answer one main question: does the core idea
              create enough positive signal to justify further investment?
            </p>
          </StageHighlight>
        </StageGrid>

        <StageHighlight
          title="Controlled Test Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Clear Objective',
              'Defined Audience',
              'Controlled Offer and Page',
              'Meaningful Variations',
              'Success and Failure Signals',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="MVP Decision"
        title="MVP Decision"
        description="Assign one final outcome based on the signal produced by the test."
      >
        <StageGrid columns={2}>
          {finalStatuses.map((status) => (
            <StageCard
              key={status.title}
              title={status.title}
              description={status.description}
            >
              <StageList items={status.items} />
            </StageCard>
          ))}
        </StageGrid>

        <StageHighlight
          title="Final MVP Status"
          type="success"
        >
          <StageFlow
            items={[
              'Full Production',
              'Revise and Retest',
              'Inconclusive',
              'Stop',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Full Production"
        title="Move to Full Production"
        description="The MVP proves that the central idea has enough potential to justify the complete version."
      >
        <StageGrid columns={2}>
          <StageCard title="Next Actions">
            <StageList items={fullProductionActions} />
          </StageCard>

          <StageHighlight
            title="Transition"
            type="success"
          >
            <StageFlow
              items={[
                'Positive MVP Signal',
                'Complete Production',
                'Planned Variations',
                'Broader Testing',
                'Scaling Potential',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Revise & Retest"
        title="Revise and Retest"
        description="The core idea shows potential, but one identifiable weakness is limiting performance."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Adjustments">
            <StageList items={reviseAndRetestAdjustments} />
          </StageCard>

          <StageHighlight
            title="Retest Rule"
            type="warning"
          >
            <p>
              The concept should be tested again as an MVP before it moves
              into full production.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Inconclusive"
        title="Inconclusive"
        description="The test did not produce a reliable enough answer to support a confident decision."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Reasons">
            <StageList items={inconclusiveReasons} />
          </StageCard>

          <StageHighlight
            title="Retest Condition"
            type="warning"
          >
            <p>
              The concept should only be retested after fixing the reason
              the original MVP was inconclusive.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Stop"
        title="Stop and Move On"
        description="The MVP fails to produce enough positive signal to justify additional production, time, or spend."
      >
        <StageGrid columns={2}>
          <StageCard title="Stop When">
            <StageList items={stopReasons} />
          </StageCard>

          <StageHighlight title="Learning Requirement">
            <p>
              The main learning should still be documented before the team
              moves to the next concept.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}