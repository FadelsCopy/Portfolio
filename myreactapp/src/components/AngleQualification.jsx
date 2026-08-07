// src/components/AngleQualification.jsx

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
| ANGLE QUALIFICATION DATA
|--------------------------------------------------------------------------
*/

const evidenceSignals = [
  'Repeated customer language',
  'Reviews, comments, interviews, or support data',
  'First-party evidence',
  'Existing creative-performance signals',
  'Competitor or market evidence',
];

const personaRelevanceSignals = [
  'Problem',
  'Fear',
  'Desire',
  'Identity tension',
  'Belief',
  'Failed alternative',
  'Buying trigger',
  'Desired transformation',
];

const productFitChecks = [
  'Whether the product is directly connected to the message',
  'Whether the mechanism supports the argument',
  'Whether the promised outcome is realistic',
  'Whether sufficient proof is available',
  'Whether the claims can be communicated safely',
  'Whether the offer and funnel can support the angle',
];

const differentiationSources = [
  'A different persona',
  'A different problem framing',
  'A different desire',
  'A different mechanism',
  'A different belief shift',
  'A different comparison',
  'A stronger proof direction',
  'A less saturated message territory',
];

const creativePotentialSignals = [
  'Multiple concepts',
  'Multiple hooks',
  'Strong visual directions',
  'Stories',
  'Demonstrations',
  'Comparisons',
  'Proof-led executions',
  'Different formats',
  'Future iterations',
];

const qualificationDecisions = [
  {
    title: 'Qualified',
    description:
      'The angle has enough evidence, persona relevance, product fit, differentiation, and creative potential to enter prioritization.',
    type: 'success',
  },
  {
    title: 'Needs More Research',
    description:
      'The angle appears promising, but important evidence, proof, or customer understanding is still missing.',
    type: 'warning',
  },
  {
    title: 'Archive',
    description:
      'The angle is unsupported, weakly connected to the persona, difficult to prove, poorly differentiated, or unlikely to produce strong creative.',
    type: 'danger',
  },
];

const evidenceStrengthFactors = [
  'Number of supporting sources',
  'Source quality',
  'Repetition',
  'Emotional intensity',
  'First-party validation',
  'Existing performance signals',
];

const expectedImpactFactors = [
  'Problem severity',
  'Desire strength',
  'Emotional relevance',
  'Urgency',
  'Buying relevance',
  'Connection to a trigger or decision',
];

const competitiveOpportunityFactors = [
  'Underused customer insights',
  'Weak competitor execution',
  'Overlooked personas',
  'Untapped use cases',
  'Unanswered objections',
  'Stronger proof opportunities',
  'New ways to frame a familiar problem',
];

const feasibilityFactors = [
  'Available assets',
  'Available proof',
  'Production complexity',
  'Creator availability',
  'Budget',
  'Required format',
  'Funnel readiness',
  'Compliance limitations',
  'Time required to launch',
];

const finalStatuses = [
  {
    title: 'Test Now',
    description:
      'The angle is qualified, strategically important, supported by strong evidence, and practical to launch.',
    items: [
      'Immediate concept-development effort',
      'Immediate production capacity',
      'Immediate testing budget',
      'Creative variations',
    ],
    type: 'success',
  },
  {
    title: 'Test Later',
    description:
      'The angle is qualified and valuable but currently ranks below stronger opportunities.',
    items: [
      'Lower urgency',
      'Weaker evidence',
      'Higher production complexity',
      'Missing assets',
      'Limited testing capacity',
      'Dependence on another learning first',
    ],
    type: 'default',
  },
  {
    title: 'Needs More Research',
    description:
      'The direction may be valuable, but the team does not yet have enough evidence, proof, or understanding to test it properly.',
    items: [
      'Document the missing information',
      'Return the angle to research',
      'Reassess after the evidence gap is closed',
    ],
    type: 'warning',
  },
  {
    title: 'Archive',
    description:
      'The angle is removed from the active testing pipeline.',
    items: [
      'Weak persona relevance',
      'Poor product fit',
      'Unsupported promise',
      'No meaningful differentiation',
      'Limited creative potential',
      'Compliance risk',
      'Better opportunities available',
    ],
    type: 'danger',
  },
];

const angleDecisionRecord = [
  'Angle name',
  'Target persona',
  'Angle category',
  'Supporting insight',
  'Supporting evidence',
  'Qualification decision',
  'Main reason for qualification or rejection',
  'Priority level',
  'Final status',
  'Missing information',
  'Recommended next action',
];

const outputs = [
  'Qualified angles',
  'Rejected or archived angles',
  'Angles requiring additional research',
  'Priority order for qualified angles',
  'Test Now pipeline',
  'Test Later backlog',
  'Documented reasons for every decision',
  'Complete angle decision records',
];

const sops = [
  {
    title: 'Angle Qualification and Prioritization',
    description:
      'Defines the complete process for reviewing every angle, qualifying or rejecting it, comparing qualified angles, and assigning the final status of Test Now, Test Later, Needs More Research, or Archive.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function AngleQualification({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="ANGLE DECISION SYSTEM"
      title="Angle Qualification and Prioritization"
      introduction="After generating multiple angles, I use one system to decide which angles deserve testing, which should wait, and which should be removed from the active pipeline."
      process={[
        'All Angles',
        'Qualification',
        'Prioritization',
        'Final Status',
      ]}
      outputs={outputs}
      outputTitle="Angle Testing Pipeline"
      sops={sops}
      sopDescription="The Angle Qualification and Prioritization SOP defines how every angle is reviewed, compared, and assigned a clear next action."
    >
      <StageSection
        number="00"
        navTitle="Decision Process"
        title="The Angle Decision Process"
        description="Use two sequential decisions: first determine whether the angle deserves consideration, then decide when it should be tested."
      >
        <StageHighlight
          title="Core Decision Flow"
          type="success"
        >
          <StageFlow
            items={[
              'All Angles',
              'Qualification',
              'Prioritization',
              'Test Now',
              'Test Later',
              'Needs More Research',
              'Archive',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Step One: Qualification"
            description="Determine whether the angle is strong enough to deserve testing."
          >
            <StageList
              items={[
                'Evidence',
                'Persona relevance',
                'Product fit and credibility',
                'Differentiation',
                'Creative potential',
              ]}
              ordered
            />
          </StageCard>

          <StageCard
            title="Step Two: Prioritization"
            description="Compare qualified angles to determine the order in which they should be tested."
          >
            <StageList
              items={[
                'Evidence strength',
                'Expected customer impact',
                'Competitive opportunity',
                'Testing feasibility',
              ]}
              ordered
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Evidence"
        title="Evidence"
        description="Determine whether the angle is supported by real research rather than only sounding creative."
      >
        <StageGrid columns={2}>
          <StageCard title="Evidence Signals">
            <StageList items={evidenceSignals} />
          </StageCard>

          <StageHighlight
            title="Qualification Rule"
            type="warning"
          >
            <p>
              An angle should not qualify only because it sounds creative.
              It must be connected to real customer, brand, market,
              competitor, first-party, or performance evidence.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Persona Relevance"
        title="Persona Relevance"
        description="Determine whether the angle addresses something important to the selected persona."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Relevant Insight Territories"
            description="The angle should connect to a meaningful customer reality."
          >
            <StageList items={personaRelevanceSignals} />
          </StageCard>

          <StageHighlight title="Relevance Standard">
            <p>
              The angle should feel specific to the selected persona rather
              than broadly relevant to everyone in the category.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Product Fit"
        title="Product Fit and Credibility"
        description="Determine whether the product can honestly and credibly support the angle."
      >
        <StageGrid columns={2}>
          <StageCard title="Credibility Checks">
            <StageList items={productFitChecks} />
          </StageCard>

          <StageHighlight
            title="Product-Fit Rule"
            type="warning"
          >
            <p>
              An emotionally strong angle should still be rejected when the
              product, mechanism, proof, offer, or funnel cannot credibly
              support it.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Differentiation"
        title="Differentiation"
        description="Determine whether the angle gives the brand a meaningful way to stand out."
      >
        <StageGrid columns={2}>
          <StageCard title="Sources of Differentiation">
            <StageList items={differentiationSources} />
          </StageCard>

          <StageHighlight title="Differentiation Standard">
            <p>
              The angle does not need to be completely original. It needs to
              provide a useful reason for the customer to pay attention.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Creative Potential"
        title="Creative Potential"
        description="Determine whether the angle can support enough strong creative executions to justify testing."
      >
        <StageGrid columns={2}>
          <StageCard title="Creative Potential Signals">
            <StageList items={creativePotentialSignals} />
          </StageCard>

          <StageHighlight
            title="Creative-Potential Rule"
            type="warning"
          >
            <p>
              An angle with only one weak execution possibility has limited
              value, even when the underlying insight is valid.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Qualification"
        title="Qualification Decision"
        description="Assign one initial decision before any angle enters prioritization."
      >
        <StageGrid columns={3}>
          {qualificationDecisions.map((decision) => (
            <StageHighlight
              key={decision.title}
              title={decision.title}
              type={decision.type}
            >
              <p>{decision.description}</p>
            </StageHighlight>
          ))}
        </StageGrid>

        <StageHighlight
          title="Qualification Boundary"
          type="success"
        >
          <p>
            Only qualified angles move into prioritization.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Evidence Strength"
        title="Evidence Strength"
        description="Compare how strongly each qualified angle is supported by research and performance signals."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Consider">
            <StageList items={evidenceStrengthFactors} />
          </StageCard>

          <StageHighlight title="Evidence Priority">
            <p>
              Angles supported by repeated, high-quality, emotionally
              meaningful, first-party, or performance evidence generally
              rank above angles built on weaker or isolated observations.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Customer Impact"
        title="Expected Customer Impact"
        description="Estimate how strongly the angle is likely to matter to the selected persona."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Assess">
            <StageList items={expectedImpactFactors} />
          </StageCard>

          <StageHighlight
            title="Impact Standard"
            type="warning"
          >
            <p>
              An angle may be well supported but still rank lower when it
              addresses something customers consider secondary.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Competitive Opportunity"
        title="Competitive Opportunity"
        description="Estimate how much room the brand has to own, improve, or differentiate the message."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Look For">
            <StageList items={competitiveOpportunityFactors} />
          </StageCard>

          <StageHighlight title="Opportunity Standard">
            <p>
              The strongest opportunity is not always a completely new
              message. It may be a familiar problem communicated with a more
              relevant persona, stronger proof, clearer framing, or better
              execution.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Testing Feasibility"
        title="Testing Feasibility"
        description="Determine how quickly and effectively the angle can be tested."
      >
        <StageGrid columns={2}>
          <StageCard title="Feasibility Factors">
            <StageList items={feasibilityFactors} />
          </StageCard>

          <StageHighlight title="Feasibility Trade-Off">
            <p>
              A high-potential angle may be scheduled later when another
              strong angle can be tested faster and produce useful learning
              sooner.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Final Status"
        title="Final Angle Status"
        description="Assign one final operational status after qualification and prioritization."
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
          title="Final Pipeline"
          type="success"
        >
          <StageFlow
            items={[
              'Test Now',
              'Test Later',
              'Needs More Research',
              'Archive',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="12"
        navTitle="Decision Record"
        title="Angle Decision Record"
        description="Document the evidence, reasoning, status, and next action behind every angle decision."
      >
        <StageGrid columns={2}>
          <StageCard title="Required Fields">
            <StageList items={angleDecisionRecord} />
          </StageCard>

          <StageHighlight title="Documentation Purpose">
            <p>
              Archived and delayed angles remain documented so the team
              understands why they were not pursued and avoids repeatedly
              reconsidering the same weak or incomplete direction.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}