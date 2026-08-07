// src/components/CreativeIteration.jsx

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
| CREATIVE ITERATION DATA
|--------------------------------------------------------------------------
*/

const diagnosisFields = [
  'What worked',
  'What underperformed',
  'Which metrics support the diagnosis',
  'Which part of the creative is limiting performance',
  'What the next version needs to improve',
];

const diagnosisExamples = [
  'Strong hook, weak retention',
  'Strong retention, weak CTR',
  'Strong CTR, weak conversion',
  'Strong concept, weak creator delivery',
  'Strong body, weak first frame',
];

const winningVariables = [
  'Persona',
  'Angle',
  'Concept',
  'Hook',
  'Creator',
  'Format',
  'Narrative',
  'Proof',
  'Offer',
  'CTA',
];

const openingVariables = [
  'Verbal hook',
  'Visual hook',
  'First frame',
  'On-screen text',
  'Opening scene',
  'Product reveal',
];

const messageVariables = [
  'Script',
  'Narrative structure',
  'Mechanism explanation',
  'Value proposition',
  'Proof',
  'Objection handling',
  'Product integration',
];

const deliveryVariables = [
  'Creator',
  'Tone',
  'Format',
  'Editing',
  'Pacing',
  'Length',
  'B-roll',
  'Visual execution',
];

const conversionVariables = [
  'Offer',
  'Guarantee',
  'Risk reversal',
  'CTA',
  'Urgency',
  'Landing-page message match',
];

const controlledBatchRequirements = [
  'One main variable being changed',
  'Proven elements kept consistent',
  'A clear reason behind every variation',
  'Enough difference to create useful learning',
  'A direct comparison with the original version',
];

const controlledBatchExamples = [
  'Three new hooks using the same body',
  'Two shorter edits using the same script and creator',
  'One stronger proof section added to the same concept',
  'Two creator versions using the same message',
  'One revised offer and CTA using the same creative body',
];

const comparisonPoints = [
  'The original creative',
  'Other versions in the batch',
  'The specific KPI the iteration was designed to improve',
  'Full-funnel performance',
  'Business economics',
];

const nextDecisions = [
  'Keep iterating',
  'Scale the strongest version',
  'Return to an earlier strategic stage',
  'Kill the concept and move on',
];

const outputs = [
  'Clear iteration objective',
  'Protected winning variables',
  'Selected variable to change',
  'Controlled iteration batch',
  'New versions ready for testing',
  'Documented learning for the next cycle',
];

const sops = [
  {
    title: 'Creative Iteration SOP',
    description:
      'Defines how to turn a performance diagnosis into controlled creative variations, protect proven elements, select the correct iteration variable, build the iteration batch, and retest the new versions.',
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
      introduction="When a creative shows potential but has a clear performance bottleneck, I build controlled iterations around the diagnosed weakness. The goal is not to randomly change the ad. It is to preserve what already works, improve what is limiting performance, and create a cleaner next test."
      process={[
        'Diagnosis',
        'Protect What Worked',
        'Change the Weak Variable',
        'Build Controlled Variations',
        'Retest',
        'Analyze Again',
      ]}
      outputs={outputs}
      outputTitle="Creative Iteration Output"
      sops={sops}
      sopDescription="The Creative Iteration SOP defines how diagnosed weaknesses become controlled new versions without losing the parts of the creative already proven to work."
    >
      <StageSection
        number="00"
        navTitle="Iteration System"
        title="Creative Iteration System"
        description="Use the diagnosis from Performance Analysis to improve one weak variable while protecting the parts that already work."
      >
        <StageHighlight
          title="Core Iteration Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Diagnosis',
              'Protect What Worked',
              'Change the Weak Variable',
              'Build Controlled Variations',
              'Retest',
              'Analyze Again',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Primary Objective"
            description="Improve the diagnosed bottleneck without destroying the strategic or executional components already producing a positive signal."
          >
            <StageList
              items={[
                'Begin with evidence',
                'Preserve proven components',
                'Change one meaningful variable',
                'Create controlled variations',
                'Compare the new versions fairly',
                'Document the learning',
              ]}
            />
          </StageCard>

          <StageHighlight
            title="Core Rule"
            type="warning"
          >
            <p>
              Keep the proven component and change the diagnosed weakness.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Start From Diagnosis"
        title="Start From the Diagnosis"
        description="Every iteration begins with the decision and evidence from Performance Analysis."
      >
        <StageGrid columns={2}>
          <StageCard
            title="What I Define"
            description="The diagnosis must identify both the positive signal and the specific limiting variable."
          >
            <StageList items={diagnosisFields} />
          </StageCard>

          <StageCard
            title="Diagnosis Examples"
            description="Examples of mixed performance signals that may justify a controlled iteration."
          >
            <StageList items={diagnosisExamples} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Diagnosis-to-Iteration Logic"
          type="success"
        >
          <StageFlow
            items={[
              'Performance Evidence',
              'What Worked',
              'What Underperformed',
              'Limiting Variable',
              'Iteration Objective',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Protect Winners"
        title="Protect the Winning Variables"
        description="Identify the elements that should remain unchanged before creating any new version."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Variables That May Be Protected"
            description="Any of these elements may remain stable when evidence suggests they are already working."
          >
            <StageList items={winningVariables} />
          </StageCard>

          <StageHighlight
            title="Protection Principle"
            type="success"
          >
            <p>
              Keep the proven component and change the diagnosed weakness.
            </p>
          </StageHighlight>
        </StageGrid>

        <StageHighlight
          title="Return to an Earlier Stage"
          type="warning"
        >
          <p>
            If the persona, angle, or core concept needs to change, the
            creative should usually return to the relevant earlier stage
            rather than being treated as a simple iteration.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Iteration Variable"
        title="Choose the Iteration Variable"
        description="The diagnosed weakness determines which part of the creative should change."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Opening"
            description="Variables affecting the first impression and initial attention."
          >
            <StageList items={openingVariables} />
          </StageCard>

          <StageCard
            title="Message"
            description="Variables affecting the argument, persuasion, and product communication."
          >
            <StageList items={messageVariables} />
          </StageCard>

          <StageCard
            title="Delivery"
            description="Variables affecting how the concept is presented and experienced."
          >
            <StageList items={deliveryVariables} />
          </StageCard>

          <StageCard
            title="Conversion"
            description="Variables affecting the transition from persuasion into action."
          >
            <StageList items={conversionVariables} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Variable Selection Rule"
          type="warning"
        >
          <p>
            The selected variable should come directly from the diagnosed
            bottleneck. It should not be changed simply because the team
            wants a different-looking ad.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Controlled Batch"
        title="Build a Controlled Iteration Batch"
        description="Create a small group of variations around the selected variable."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Every Batch Should Have"
            description="The batch must preserve enough control to generate useful learning."
          >
            <StageList items={controlledBatchRequirements} />
          </StageCard>

          <StageCard
            title="Iteration Batch Examples"
            description="Examples of focused variations where the main change remains clear."
          >
            <StageList items={controlledBatchExamples} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Controlled Batch Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Original Creative',
              'Protected Variables',
              'One Selected Variable',
              'Small Variation Batch',
              'Direct Comparison',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Retest & Compare"
        title="Retest and Compare"
        description="Return the iterations to production, launch, and Performance Analysis."
      >
        <StageGrid columns={2}>
          <StageCard
            title="What I Compare Against"
            description="The new versions must be evaluated against the original and the objective of the iteration."
          >
            <StageList items={comparisonPoints} />
          </StageCard>

          <StageCard
            title="Possible Next Decisions"
            description="The result determines the next operational path."
          >
            <StageList items={nextDecisions} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Retest Cycle"
          type="success"
        >
          <StageFlow
            items={[
              'Controlled Iteration Batch',
              'Production',
              'Launch',
              'Performance Analysis',
              'Compare',
              'Next Decision',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Final Decision"
        title="Final Iteration Decision"
        description="Use the new performance evidence to decide whether the concept should continue, scale, return to strategy, or stop."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Keep Iterating"
            description="Continue when the concept still shows potential and the new diagnosis identifies another specific weakness worth improving."
          />

          <StageCard
            title="Scale the Strongest Version"
            description="Move into Creative Scaling when one version produces a validated, commercially useful result."
          />

          <StageCard
            title="Return to an Earlier Stage"
            description="Return to the relevant strategic stage when the persona, angle, concept, product connection, proof, or offer requires deeper change."
          />

          <StageCard
            title="Kill the Concept and Move On"
            description="Stop when repeated controlled iterations fail to produce enough positive signal or stronger opportunities exist."
          />
        </StageGrid>

        <StageHighlight
          title="Decision Path"
          type="success"
        >
          <StageFlow
            items={[
              'Iteration Result',
              'Keep Iterating',
              'Scale',
              'Return to Strategy',
              'Kill',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Final Output"
        title="Final Output"
        description="Document what was protected, what changed, what was produced, and what the new test taught the team."
      >
        <StageGrid columns={2}>
          <StageCard title="Iteration Outputs">
            <StageList items={outputs} />
          </StageCard>

          <StageHighlight
            title="Learning Loop"
            type="success"
          >
            <StageFlow
              items={[
                'Clear Objective',
                'Protected Variables',
                'Selected Change',
                'Controlled Batch',
                'New Test',
                'Documented Learning',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}