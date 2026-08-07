// src/components/PersonaMapping.jsx

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
| PERSONA MAPPING DATA
|--------------------------------------------------------------------------
*/

const personaInputs = [
  'Problems',
  'Desired outcomes',
  'Emotional drivers',
  'Identity goals',
  'Beliefs',
  'Misconceptions',
  'Objections',
  'Failed alternatives',
  'Buying triggers',
  'Proof requirements',
  'Use contexts',
  'Awareness levels',
  'Customer language',
  'Purchase behavior',
];

const personaCreationCriteria = [
  'Core message',
  'Emotional framing',
  'Hook direction',
  'Proof strategy',
  'Product benefit',
  'Offer',
  'Creator type',
  'Format',
  'Awareness-level approach',
  'Landing-page experience',
];

const customerContext = [
  'Current situation',
  'Problem state',
  'Life stage',
  'Use case',
  'Level of urgency',
  'Existing behavior',
  'Current solution',
  'Relevant environment',
  'Buying situation',
];

const coreProblems = [
  'Surface pain',
  'Functional pain',
  'Emotional pain',
  'Social pain',
  'Identity-level pain',
  'Consequences of inaction',
];

const desiredTransformation = [
  'Immediate desired outcome',
  'Functional outcome',
  'Emotional outcome',
  'Social outcome',
  'Dream outcome',
  'Desired identity',
  'Behaviors the customer wants to recover or begin',
];

const emotionalIdentityDrivers = [
  'Main emotional driver',
  'Main fear',
  'Main frustration',
  'Identity being threatened',
  'Identity being rejected',
  'Identity the customer wants to become or recover',
];

const beliefsAndAwareness = [
  'Current beliefs',
  'Misconceptions',
  'Beliefs supporting competing solutions',
  'Beliefs blocking the purchase',
  'Belief required for conversion',
  'Problem awareness',
  'Solution awareness',
  'Product awareness',
  'Market sophistication',
];

const previousAttempts = [
  'Alternatives already tried',
  'Reasons those alternatives were selected',
  'Why they failed',
  'Emotional consequences of failure',
  'New expectations created by those failures',
];

const objectionsAndRisks = [
  'Price objection',
  'Trust objection',
  'Effectiveness objection',
  'Safety concern',
  'Time-to-result concern',
  'Product-fit concern',
  'Subscription concern',
  'Brand-credibility concern',
  'Fear of another disappointment',
];

const buyingLogic = [
  'Buying trigger',
  'Moment of urgency',
  'Decision criteria',
  'What delays action',
  'What creates confidence',
  'What proof is required',
  'Who influences the decision',
  'Why the customer chooses one solution over another',
];

const customerLanguage = [
  'Exact problem language',
  'Desire language',
  'Emotional phrases',
  'Objection language',
  'Transformation language',
  'Frequently repeated questions',
  'Comparisons and metaphors',
  'Words the customer naturally uses',
];

const creativeDirection = [
  'Most relevant angles',
  'Most relevant benefits',
  'Most relevant proof',
  'Strong hook territories',
  'Suitable creator types',
  'Suitable formats',
  'Suitable visual situations',
  'Relevant offers',
  'Landing-page requirements',
  'Messaging to avoid',
];

const subPersonaDifferences = [
  'Cause of the problem',
  'Life stage',
  'Use case',
  'Level of urgency',
  'Desired outcome',
  'Emotional context',
  'Awareness level',
  'Failed alternatives',
  'Main objection',
  'Buying trigger',
  'Proof requirement',
  'Product application',
  'Customer language',
  'Offer preference',
];

const hairSubPersonaExamples = [
  'Postpartum shedding',
  'Menopause-related thinning',
  'Stress-related hair loss',
  'Damage caused by styling or chemical treatments',
  'Genetically influenced thinning',
  'Sudden shedding before an important event',
];

const subPersonaDecisionCriteria = [
  'What the customer believes caused the problem',
  'What they want from the solution',
  'What they have already tried',
  'What they fear',
  'What they need to believe',
  'What proof persuades them',
  'Which hook feels relevant',
  'Which scenario feels relatable',
  'Which offer fits their situation',
  'Which creative format is most suitable',
];

const unnecessarySegmentation = [
  'Age without a meaningful behavior change',
  'Location without a meaningful market difference',
  'Gender without different buying logic',
  'Job title without creative relevance',
  'Lifestyle detail that does not affect the message',
  'Minor preference that does not change strategy',
];

const subPersonaProfile = [
  'Specific problem context',
  'Specific cause',
  'Specific emotional tension',
  'Specific desired outcome',
  'Specific failed alternatives',
  'Specific objection',
  'Specific buying trigger',
  'Specific proof requirement',
  'Specific language',
  'Specific creative direction',
];

const prioritizationCriteria = [
  'Size of the opportunity',
  'Severity of the problem',
  'Level of urgency',
  'Product fit',
  'Offer fit',
  'Evidence strength',
  'Existing customer volume',
  'Customer value',
  'Conversion potential',
  'LTV potential',
  'Available proof',
  'Competitive intensity',
  'Differentiation potential',
  'Creative potential',
  'Scalability',
  'Production feasibility',
  'Strategic importance',
];

const priorityLevels = [
  {
    title: 'Primary Persona',
    description:
      'The customer group with the strongest combination of product fit, commercial value, evidence, urgency, and creative potential.',
    items: [
      'Receives the largest share of research attention',
      'Receives the largest share of angle development',
      'Receives the largest share of concept development',
      'Receives the largest share of testing budget',
      'Receives the largest share of production volume',
      'Receives the largest share of iteration',
    ],
  },
  {
    title: 'Secondary Persona',
    description:
      'A commercially relevant customer group with strong potential but lower priority than the primary persona.',
    items: [
      'Receives controlled testing',
      'Enters production after the primary persona is sufficiently supported',
      'Maintains an active place in the strategic pipeline',
    ],
  },
  {
    title: 'Experimental Persona',
    description:
      'A less-proven customer group with promising signals but insufficient evidence.',
    items: [
      'Tested through lower-cost concepts',
      'Often tested through an MVP',
      'Receives limited investment until stronger signals appear',
    ],
  },
  {
    title: 'Low-Priority Persona',
    description:
      'A customer group with weak product fit, weak economics, low urgency, limited proof, or poor scalability.',
    items: [
      'May remain in the backlog',
      'Receives little or no immediate production capacity',
      'Requires stronger evidence before entering active testing',
    ],
  },
  {
    title: 'Not Currently Suitable',
    description:
      'A group the current product, offer, proof, economics, or business cannot support.',
    items: [
      'Removed from the active pipeline',
      'May be reconsidered only if the underlying conditions change',
      'Prevents resources from being wasted on attractive but impractical audiences',
    ],
  },
];

const personaPriorityRecord = [
  'Priority level',
  'Reason for the priority',
  'Supporting evidence',
  'Commercial potential',
  'Main risk',
  'Testing recommendation',
  'Required proof',
  'Recommended creative investment',
  'Conditions that would change the priority',
];

const expansionPaths = [
  {
    title: 'Sub-Persona Expansion',
    description:
      'Expand one broad persona into more specific customer groups with meaningfully different buying logic.',
  },
  {
    title: 'Use-Case Expansion',
    description:
      'Find new situations where the same product solves a relevant problem.',
  },
  {
    title: 'Problem-State Expansion',
    description:
      'Reach customers experiencing a different version or stage of the same problem.',
  },
  {
    title: 'Life-Stage Expansion',
    description:
      'Adapt the product and message to customers at a different life stage.',
  },
  {
    title: 'Awareness Expansion',
    description:
      'Create messaging for audiences who know less or more about the problem, solution, or product.',
  },
  {
    title: 'Geographic Expansion',
    description:
      'Enter markets where the product remains relevant but language, proof, creators, or cultural framing may change.',
  },
  {
    title: 'Adjacent-Persona Expansion',
    description:
      'Reach customers with similar motivations, identities, or emotional needs.',
  },
  {
    title: 'Indirect-Alternative Expansion',
    description:
      'Target customers currently relying on a different category of solution.',
  },
  {
    title: 'Same-Avatar Expansion',
    description:
      'Reach the same type of person through a different problem, desire, or buying occasion.',
  },
  {
    title: 'Product-Application Expansion',
    description:
      'Identify additional credible applications for the same product.',
  },
  {
    title: 'Occasion Expansion',
    description:
      'Create demand around a new event, season, trigger, or usage moment.',
  },
];

const expansionCriteria = [
  'Relevant customer demand',
  'Clear product fit',
  'Strong emotional relevance',
  'A differentiated message',
  'Sufficient proof',
  'Acceptable economics',
  'Scalable audience size',
  'A realistic offer',
  'Operational feasibility',
  'Creative potential',
];

const expansionQuestions = [
  'Does this group experience a problem the product can credibly solve?',
  'Does the group use language different enough to require new messaging?',
  'Does it require different proof?',
  'Does it have different objections?',
  'Is the buying trigger different?',
  'Can the brand serve this group operationally?',
  'Is the opportunity large enough to justify testing?',
  'Does expansion strengthen or weaken the brand’s positioning?',
  'Can the existing product and offer support the promise?',
  'Can the group be reached efficiently through paid media?',
];

const expansionRecord = [
  'New persona or market',
  'Relationship to the core persona',
  'Supporting evidence',
  'Shared characteristics',
  'Important differences',
  'Product fit',
  'Message changes',
  'Proof requirements',
  'Offer changes',
  'Creative opportunities',
  'Main risks',
  'Recommended test',
];

const outputs = [
  'Evidence-based persona groups',
  'Complete strategic persona profiles',
  'Sub-personas created only where creative treatment meaningfully changes',
  'Defined buying logic for each persona',
  'Mapped beliefs, objections, triggers, proof requirements, and customer language',
  'Persona-specific creative direction',
  'Primary, secondary, experimental, low-priority, and unsuitable classifications',
  'Persona prioritization records',
  'Structured persona and market expansion opportunities',
  'Clear inputs for Angle Development',
];

const sops = [
  {
    title: 'Insight-to-Persona Translation',
    description:
      'Explains how to group repeated insights into distinct customer profiles and determine whether the differences justify a separate persona.',
  },
  {
    title: 'Persona and Sub-Persona Development',
    description:
      'Defines how to build a complete persona, when a broad persona is sufficient, and when sub-personas require separate treatment.',
  },
  {
    title: 'Persona Prioritization',
    description:
      'Provides a practical system for ranking personas based on evidence, urgency, product fit, economics, proof, scalability, and creative potential.',
  },
  {
    title: 'Persona and Market Expansion',
    description:
      'Explains how to identify, qualify, and test new sub-personas, use cases, awareness levels, adjacent audiences, and markets.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function PersonaMapping({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="CUSTOMER SEGMENTATION SYSTEM"
      title="Persona Mapping"
      introduction="After organizing the research into clear insights, I group customers according to the differences that meaningfully change the creative strategy. The objective is not to create fictional profiles filled with irrelevant demographics. Each persona represents a distinct customer group with different problems, motivations, buying logic, objections, proof requirements, or messaging needs."
      process={[
        'Validated Insights',
        'Shared Customer Patterns',
        'Distinct Buying Logic',
        'Persona',
        'Priority',
        'Creative Direction',
      ]}
      outputs={outputs}
      outputTitle="Persona Mapping Output"
      sops={sops}
      sopDescription="The Persona Mapping SOP Library defines how evidence becomes usable customer groups, how those groups are prioritized, and how expansion opportunities are evaluated."
    >
      <StageSection
        number="01"
        navTitle="Insight Translation"
        title="Insight-to-Persona Translation"
        description="Turn repeated insights into strategically meaningful customer groups."
      >
        <StageHighlight
          title="Translation Logic"
          type="success"
        >
          <StageFlow
            items={[
              'Repeated Evidence',
              'Shared Problem and Context',
              'Shared Motivation and Behavior',
              'Distinct Buying Logic',
              'Persona',
            ]}
          />
        </StageHighlight>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard
              title="Inputs Used"
              description="The strongest synthesis outputs are compared across customer groups."
            >
              <StageList items={personaInputs} />
            </StageCard>

            <StageCard
              title="When a Separate Persona Is Justified"
              description="Create a new persona only when the distinction changes an important strategic decision."
            >
              <StageList items={personaCreationCriteria} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Important Distinction"
          type="warning"
        >
          <p>
            Two customers may experience the same broad problem but still
            require separate personas because they understand the problem
            differently, want different outcomes, trust different proof, or
            need different reasons to purchase.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Persona Development"
        title="Persona Development"
        description="Organize the information that meaningfully changes how creative should be developed, produced, tested, or interpreted."
      >
        <StageGrid columns={3}>
          <StageCard
            title="Customer Context"
            description="The real situation surrounding the customer and the problem."
          >
            <StageList items={customerContext} />
          </StageCard>

          <StageCard
            title="Core Problems"
            description="The pain structure shaping urgency and relevance."
          >
            <StageList items={coreProblems} />
          </StageCard>

          <StageCard
            title="Desired Transformation"
            description="The result, experience, emotion, and identity the customer wants."
          >
            <StageList items={desiredTransformation} />
          </StageCard>

          <StageCard
            title="Emotional and Identity Drivers"
            description="The deeper meaning attached to the problem and solution."
          >
            <StageList items={emotionalIdentityDrivers} />
          </StageCard>

          <StageCard
            title="Beliefs and Awareness"
            description="What the customer currently understands and what they need to believe."
          >
            <StageList items={beliefsAndAwareness} />
          </StageCard>

          <StageCard
            title="Previous Attempts"
            description="How failed alternatives shape skepticism and expectations."
          >
            <StageList items={previousAttempts} />
          </StageCard>

          <StageCard
            title="Objections and Risks"
            description="The reasons the customer may hesitate or reject the purchase."
          >
            <StageList items={objectionsAndRisks} />
          </StageCard>

          <StageCard
            title="Buying Logic"
            description="The conditions that move the customer toward or away from action."
          >
            <StageList items={buyingLogic} />
          </StageCard>

          <StageCard
            title="Customer Language"
            description="The exact wording later used to guide messaging and hooks."
          >
            <StageList items={customerLanguage} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard
            title="Persona-Specific Creative Direction"
            description="Translate the profile into practical creative guidance."
          >
            <StageList items={creativeDirection} />
          </StageCard>
        </div>

        <StageHighlight
          title="Persona Quality Standard"
          type="success"
        >
          <p>
            A persona should contain only information that changes the
            message, proof, format, creator, offer, production direction,
            testing plan, or interpretation of performance.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Sub-Personas"
        title="Sub-Persona Development"
        description="Create a narrower profile when customers share the same broad problem but require meaningfully different creative treatment."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Differences That May Justify a Sub-Persona"
            description="A sub-persona becomes useful when one or more of these differences change the strategy."
          >
            <StageList items={subPersonaDifferences} />
          </StageCard>

          <StageCard
            title="Example: Women Experiencing Hair Thinning"
            description="The broad persona may contain several distinct causes, emotions, and buying requirements."
          >
            <StageList items={hairSubPersonaExamples} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard
              title="When a Sub-Persona Is Necessary"
              description="Create one when the distinction changes the persuasive or production approach."
            >
              <StageList items={subPersonaDecisionCriteria} />
            </StageCard>

            <StageCard
              title="When It Is Not Necessary"
              description="Do not segment customers using differences that do not change creative strategy."
            >
              <StageList items={unnecessarySegmentation} />
            </StageCard>

            <StageCard
              title="What Goes Inside"
              description="Focus only on the elements that distinguish the sub-persona from the broader persona."
            >
              <StageList items={subPersonaProfile} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Segmentation Principle"
          type="warning"
        >
          <p>
            The objective is not to create the largest possible number of
            profiles. The objective is to separate groups only when the
            distinction improves creative relevance, credibility, testing,
            or conversion.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Prioritization"
        title="Persona Prioritization"
        description="Decide which personas deserve the most research, production capacity, testing budget, and creative investment."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Prioritization Criteria"
            description="Compare personas using customer need, evidence, economics, proof, feasibility, and strategic opportunity."
          >
            <StageList items={prioritizationCriteria} />
          </StageCard>

          <StageCard
            title="Persona Priority Record"
            description="Document why each group receives its current priority."
          >
            <StageList items={personaPriorityRecord} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            {priorityLevels.map((priority) => (
              <StageCard
                key={priority.title}
                title={priority.title}
                description={priority.description}
              >
                <StageList items={priority.items} />
              </StageCard>
            ))}
          </StageGrid>
        </div>

        <StageHighlight
          title="Resource Allocation Logic"
          type="success"
        >
          <StageFlow
            items={[
              'Persona Evidence',
              'Commercial Potential',
              'Product and Offer Fit',
              'Creative Potential',
              'Priority Level',
              'Investment Decision',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Expansion"
        title="Persona and Market Expansion"
        description="Expand beyond the core customer only when the opportunity is supported by proven similarities in problem, desire, behavior, product fit, or buying logic."
      >
        <StageGrid columns={3}>
          {expansionPaths.map((path) => (
            <StageCard
              key={path.title}
              title={path.title}
              description={path.description}
            />
          ))}
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard
              title="Expansion Criteria"
              description="A new group must be strategically and commercially supportable."
            >
              <StageList items={expansionCriteria} />
            </StageCard>

            <StageCard
              title="Expansion Questions"
              description="Evaluate whether the opportunity deserves a real test."
            >
              <StageList items={expansionQuestions} />
            </StageCard>

            <StageCard
              title="Expansion Record"
              description="Document the logic, changes, risks, and recommended test."
            >
              <StageList items={expansionRecord} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Expansion Decision Logic"
          type="success"
        >
          <StageFlow
            items={[
              'Core Persona Learning',
              'Adjacent Opportunity',
              'Product Fit',
              'Message and Proof Changes',
              'Operational Feasibility',
              'Controlled Test',
            ]}
          />
        </StageHighlight>

        <StageHighlight
          title="Expansion Boundary"
          type="warning"
        >
          <p>
            Expansion should not target random audiences simply because they
            are available. It should extend a proven customer truth into a
            group the product, offer, proof, economics, and operation can
            realistically support.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}