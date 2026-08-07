// src/components/InsightSynthesis.jsx

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
| INSIGHT SYNTHESIS DATA
|--------------------------------------------------------------------------
*/

const painTypes = [
  'Physical pain',
  'Functional pain',
  'Emotional pain',
  'Social pain',
  'Financial pain',
  'Practical inconvenience',
  'Daily frustration',
  'Loss of control',
  'Embarrassment',
  'Anxiety',
  'Guilt',
  'Disappointment',
  'Fear of the problem becoming worse',
  'Consequences of leaving the problem unresolved',
];

const painDepthLevels = [
  {
    title: 'Surface Pain',
    items: [
      'What the customer notices immediately',
      'Hair shedding',
      'Joint stiffness',
      'Skin breakouts',
      'Low energy',
      'Poor sleep',
    ],
  },
  {
    title: 'Functional Pain',
    items: [
      'What the problem prevents the customer from doing',
      'Avoiding stairs',
      'Struggling to exercise',
      'Taking longer to get ready',
      'Avoiding certain foods',
      'Losing focus at work',
    ],
  },
  {
    title: 'Emotional Pain',
    items: [
      'How the problem makes the customer feel',
      'Frustrated',
      'Ashamed',
      'Anxious',
      'Powerless',
      'Older',
      'Less attractive',
      'Less confident',
    ],
  },
  {
    title: 'Social and Identity Pain',
    items: [
      'How the problem affects relationships and self-perception',
      'Avoiding photographs',
      'Feeling judged',
      'Hiding from social situations',
      'Feeling like a bad pet owner',
      'No longer recognizing themselves',
      'Losing independence',
    ],
  },
];

const usefulPainCriteria = [
  'Repeated across multiple sources',
  'Specific',
  'Emotionally meaningful',
  'Connected to behavior',
  'Relevant to the product',
  'Strong enough to influence action',
  'Capable of producing multiple creative directions',
];

const desiredOutcomeTypes = [
  {
    title: 'Functional Outcome',
    items: [
      'Reduce shedding',
      'Improve mobility',
      'Clear breakouts',
      'Sleep through the night',
      'Increase energy',
    ],
  },
  {
    title: 'Experiential Outcome',
    items: [
      'Get out of bed without stiffness',
      'Wear hair down again',
      'Leave the house without makeup',
      'Play with their dog',
      'Finish the workday with energy',
    ],
  },
  {
    title: 'Emotional Outcome',
    items: [
      'Confidence',
      'Relief',
      'Security',
      'Attractiveness',
      'Control',
      'Hope',
      'Pride',
    ],
  },
  {
    title: 'Social Outcome',
    items: [
      'Accept photographs',
      'Attend social events confidently',
      'Keep up with friends',
      'Feel comfortable around a partner',
      'Stop explaining or hiding the problem',
    ],
  },
];

const desiredOutcomeCapture = [
  'Immediate outcome',
  'Short-term result',
  'Long-term result',
  'Functional improvement',
  'Lifestyle improvement',
  'Emotional relief',
  'Social result',
  'Financial result',
  'Convenience',
  'Speed',
  'Simplicity',
  'Control',
  'Certainty',
];

const dreamOutcomeCapture = [
  'The ideal future',
  'The customer’s best-case transformation',
  'The identity they want to recover',
  'The identity they want to become',
  'The lifestyle they want access to',
  'What success would make possible',
  'What they would stop worrying about',
  'What they would begin doing again',
  'What they want to protect',
  'What they fear losing',
];

const dreamOutcomeUses = [
  'Aspirational messaging',
  'Transformation concepts',
  'Identity angles',
  'Story-driven creative',
  'Before-and-after narratives',
  'Long-term emotional promises',
];

const emotionalDrivers = [
  'Fear',
  'Hope',
  'Guilt',
  'Pride',
  'Relief',
  'Shame',
  'Frustration',
  'Anger',
  'Anxiety',
  'Love',
  'Protection',
  'Belonging',
  'Status',
  'Control',
  'Security',
  'Independence',
  'Nostalgia',
  'Regret',
  'Self-respect',
  'Validation',
];

const emotionalDriverQuestions = [
  'Why does this problem matter emotionally?',
  'What does the customer fear it says about them?',
  'Who else is affected?',
  'What emotional reward does success provide?',
  'What emotion creates urgency?',
  'What emotion prevents action?',
  'What feeling appears repeatedly in customer stories?',
  'What emotion exists even when the customer does not name it directly?',
];

const identityCategories = [
  'Current identity',
  'Threatened identity',
  'Rejected identity',
  'Desired identity',
  'Recovered identity',
  'Social identity',
  'Aspirational identity',
];

const identityExamples = [
  'From someone losing control to someone taking action',
  'From an exhausted parent to an energetic parent',
  'From someone hiding their skin to someone comfortable being seen',
  'From a guilty dog owner to a responsible protector',
  'From someone accepting aging to someone preserving vitality',
  'From someone dependent on complicated routines to someone with a simple solution',
];

const identityCapture = [
  'How customers describe themselves',
  'What version of themselves they miss',
  'What identity the problem threatens',
  'What identity the solution supports',
  'What behaviors represent the desired identity',
  'What language signals pride, guilt, confidence, or self-image',
];

const objections = [
  'Price',
  'Product effectiveness',
  'Time to results',
  'Safety',
  'Side effects',
  'Trust',
  'Ingredients',
  'Quality',
  'Complexity',
  'Ease of use',
  'Taste',
  'Consistency',
  'Suitability',
  'Subscription',
  'Shipping',
  'Refund policy',
  'Brand credibility',
  'Claim credibility',
  'Previous disappointment',
  'Fear of wasting money',
];

const objectionRecord = [
  'Exact customer language',
  'What creates the objection',
  'How frequently it appears',
  'Which customer group expresses it',
  'Which awareness level it appears in',
  'What proof could reduce it',
  'Whether it is a product, offer, trust, or communication problem',
];

const beliefCategories = [
  'Beliefs about the cause of the problem',
  'Beliefs about which solutions work',
  'Beliefs about which solutions do not work',
  'Beliefs about the product category',
  'Beliefs about the brand',
  'Beliefs about price',
  'Beliefs about natural versus medical solutions',
  'Beliefs about age, genetics, lifestyle, or responsibility',
  'Beliefs about how long results should take',
  'Beliefs about themselves',
];

const misconceptions = [
  'Block the product',
  'Support a competing solution',
  'Cause customers to use the product incorrectly',
  'Create unrealistic expectations',
  'Make the problem feel unsolvable',
  'Reduce perceived urgency',
];

const failedAlternativeCapture = [
  'Previous products',
  'Competing brands',
  'Home remedies',
  'Professional services',
  'Prescription solutions',
  'Lifestyle changes',
  'DIY approaches',
  'Doing nothing',
  'Waiting for the problem to improve',
  'Why the customer selected the alternative',
  'What they expected',
  'What happened',
  'Why they stopped',
  'What they disliked',
  'What they still want',
  'What they are now skeptical about',
];

const failedAlternativeUses = [
  'Comparison angles',
  'Contrarian angles',
  'Mechanism angles',
  'New-opportunity angles',
  'Objection handling',
  'Product differentiation',
];

const buyingTriggers = [
  'A visible worsening of the problem',
  'A photograph',
  'A social event',
  'A comment from another person',
  'A doctor or expert conversation',
  'A failed alternative',
  'A painful daily moment',
  'A major life event',
  'A comparison with someone else',
  'A seasonal event',
  'A health scare',
  'A relationship moment',
  'A financial consequence',
  'A limited-time offer',
  'Running out of patience',
  'Seeing convincing proof',
  'Discovering a new explanation',
];

const triggerCapture = [
  'What happened',
  'Why that moment mattered',
  'What emotion it created',
  'What action followed',
  'Which customer group experiences it',
  'How urgent the customer becomes',
  'What message would feel relevant in that moment',
];

const proofTypes = [
  'Customer reviews',
  'Testimonials',
  'Before-and-after evidence',
  'Demonstrations',
  'Clinical studies',
  'Scientific research',
  'Ingredient evidence',
  'Expert endorsement',
  'Founder authority',
  'Certifications',
  'Third-party testing',
  'Usage numbers',
  'Customer volume',
  'Ratings',
  'Media mentions',
  'Guarantees',
  'Comparison evidence',
  'Product transparency',
  'Detailed mechanism explanation',
];

const proofGaps = [
  'Claims without enough evidence',
  'Strong evidence the brand is not using',
  'Proof competitors use more effectively',
  'Proof that feels too technical',
  'Proof requiring simpler explanation',
  'Customer groups requiring different proof',
  'Places in the funnel where proof appears too late',
];

const customerLanguageCapture = [
  'Repeated phrases',
  'Emotional wording',
  'Metaphors',
  'Comparisons',
  'Descriptions of the problem',
  'Descriptions of failed alternatives',
  'Questions',
  'Complaints',
  'Desired outcomes',
  'Transformation language',
  'Identity language',
  'Urgency language',
  'Skeptical language',
  'Recommendation language',
  'Product descriptions',
  'Language used before and after purchase',
];

const customerLanguageCategories = [
  'Problem language',
  'Desire language',
  'Emotional language',
  'Belief language',
  'Objection language',
  'Trigger language',
  'Proof language',
  'Transformation language',
  'Product language',
  'Offer language',
];

const customerLanguageUses = [
  'Hooks',
  'Headlines',
  'Scripts',
  'Static copy',
  'Advertorial leads',
  'Listicle headlines',
  'Objection handling',
  'Product-page copy',
];

const useContextCapture = [
  'Time of day',
  'Physical environment',
  'Social environment',
  'Who else is present',
  'What the customer is trying to do',
  'What interrupts them',
  'What the problem prevents',
  'What action they take',
  'Which objects, places, or routines are involved',
  'How the product fits into daily life',
  'When the problem feels most emotionally intense',
];

const behavioralMoments = [
  'Seeing hair in the shower drain',
  'Struggling to stand after sitting',
  'Covering a breakout before an event',
  'Losing energy halfway through the workday',
  'A dog refusing to climb onto the bed',
  'Waking repeatedly during the night',
];

const awarenessLevels = [
  {
    title: 'Unaware',
    description:
      'The customer does not clearly recognize the problem or its impact.',
  },
  {
    title: 'Problem-Aware',
    description:
      'The customer recognizes the problem but does not understand the available solutions.',
  },
  {
    title: 'Solution-Aware',
    description:
      'The customer knows that solutions exist but has not selected a product.',
  },
  {
    title: 'Product-Aware',
    description:
      'The customer knows the product or brand but has not purchased.',
  },
  {
    title: 'Most Aware',
    description:
      'The customer understands the product and mainly needs the right offer, timing, or reminder.',
  },
];

const sophisticationInsights = [
  'Promises the market has seen repeatedly',
  'Claims customers no longer trust',
  'Mechanisms competitors already use',
  'Proof standards customers expect',
  'Visual styles that feel overused',
  'Hooks that have become interchangeable',
  'New explanations appearing in the category',
  'Areas where the market requires greater specificity',
];

const competitorGapCapture = [
  'Dominant category promises',
  'Repeated hooks',
  'Common mechanisms',
  'Common proof',
  'Common creator types',
  'Common visual styles',
  'Common offers',
  'Common objections handled',
  'Common objections ignored',
  'Underused customer groups',
  'Underused emotional drivers',
  'Underused use cases',
  'Product strengths competitors fail to explain',
  'Customer complaints competitors do not solve',
  'Overused messaging',
  'Overused visual execution',
  'Potential whitespace',
];

const gapTypes = [
  'Messaging gap',
  'Emotional gap',
  'Product gap',
  'Mechanism gap',
  'Proof gap',
  'Persona gap',
  'Awareness gap',
  'Format gap',
  'Visual gap',
  'Offer gap',
  'Funnel gap',
];

const hookSources = [
  'Brand ads',
  'Competitor ads',
  'Organic short-form content',
  'Creator videos',
  'Customer language',
  'Reddit threads',
  'Reviews',
  'Advertorial headlines',
  'Listicle headlines',
  'Email subject lines',
  'Landing-page headlines',
  'Founder content',
  'Podcast clips',
  'Native ads',
  'YouTube titles and thumbnails',
];

const verbalHooks = [
  'Problem statement',
  'Direct callout',
  'Question',
  'Contrarian claim',
  'Curiosity gap',
  'Story opening',
  'Confession',
  'Warning',
  'Discovery',
  'Demonstration setup',
  'Comparison',
  'Proof-led statement',
  'Customer quote',
  'Authority statement',
  'What nobody tells you',
  'Why this keeps happening',
  'I tried everything',
  'Before you buy',
  'Stop doing this',
];

const visualHooks = [
  'Problem-state image',
  'Unexpected product use',
  'Product demonstration',
  'Before and after',
  'Close-up',
  'Movement',
  'Pattern interruption',
  'Native screenshot',
  'Comment screenshot',
  'Review screenshot',
  'Text message',
  'Comparison',
  'Reaction',
  'Transformation',
  'Unusual object',
  'Strong facial expression',
  'Product reveal',
  'Visual metaphor',
];

const editingHooks = [
  'Fast cuts',
  'Sudden zoom',
  'Abrupt scene change',
  'Text-first opening',
  'Sound interruption',
  'Reverse footage',
  'Split screen',
  'Countdown',
  'Rapid comparison',
  'Loop',
  'Freeze frame',
  'Comment overlay',
  'Screen recording',
  'Before-and-after transition',
  'Immediate subtitle emphasis',
];

const structuralHooks = [
  'Start with the result',
  'Start with the strongest proof',
  'Start in the middle of the story',
  'Start with the objection',
  'Start with a failed alternative',
  'Start with the mechanism',
  'Start with a demonstration',
  'Start with controversy',
  'Start with a customer moment',
  'Start with a specific number',
];

const hookRecord = [
  'Hook wording or description',
  'Screenshot or clip',
  'Source',
  'Platform',
  'Brand or creator',
  'Hook type',
  'Visual opening',
  'Editing pattern',
  'Target customer',
  'Possible angle',
  'Why it gained attention',
  'How it might be adapted',
  'Whether it is overused',
  'Whether it fits the brand',
];

const customerPatterns = [
  'Repeated pains',
  'Repeated desires',
  'Repeated emotional drivers',
  'Repeated objections',
  'Repeated beliefs',
  'Repeated failed alternatives',
  'Repeated buying triggers',
  'Repeated proof requirements',
  'Repeated language',
  'Repeated behavioral moments',
];

const productPatterns = [
  'Benefits repeatedly praised',
  'Features customers misunderstand',
  'Results customers notice first',
  'Product weaknesses',
  'Common usage problems',
  'Unexpected use cases',
  'Proof repeatedly requested',
];

const competitorPatterns = [
  'Repeated promises',
  'Repeated mechanisms',
  'Repeated hooks',
  'Repeated formats',
  'Repeated creators',
  'Repeated offers',
  'Repeated landing-page structures',
  'Repeated customer complaints',
];

const creativePatterns = [
  'Visual openings repeated among strong ads',
  'Editing structures appearing across creators',
  'Hooks repeated in long-running ads',
  'Proof formats that attract engagement',
  'Topics performing across paid and organic content',
  'Formats connected to specific awareness levels',
  'Concepts adapted by multiple competitors',
];

const performancePatterns = [
  'Angles associated with higher spend',
  'Hooks associated with stronger CTR',
  'Formats associated with stronger hold rate',
  'Concepts producing clicks but weak conversion',
  'Proof types connected to lower CPA',
  'Creators associated with stronger performance',
  'Offers increasing conversion',
  'Patterns of fatigue',
];

const patternQuality = [
  'Frequency',
  'Emotional intensity',
  'Source diversity',
  'Specificity',
  'Commercial relevance',
  'Customer relevance',
  'Recency',
  'Available proof',
  'Connection to actual behavior or performance',
];

const patternRecord = [
  'Pattern name',
  'Evidence sources',
  'What repeats',
  'Who it applies to',
  'Why it matters',
  'Strategic implication',
  'Possible creative use',
  'Confidence level',
];

const commonTensions = [
  'Wants fast results but distrusts exaggerated promises',
  'Wants premium quality but resists the price',
  'Wants a natural solution but also wants clinical proof',
  'Wants a simple routine but expects a complete transformation',
  'Wants to believe the product but fears another disappointment',
  'Wants change but delays action',
  'Wants strong claims but distrusts advertising',
  'Wants convenience but expects personalization',
];

const tensionValue = [
  'What makes the decision difficult',
  'Why the customer hesitates',
  'What proof is missing',
  'What message must be balanced carefully',
  'What emotional conflict can drive a concept',
  'What the offer must resolve',
];

const implicationQuestions = [
  'What did I observe?',
  'What pattern does it form?',
  'Why does it matter?',
  'What should change because of it?',
  'What creative opportunity does it create?',
];

const strategicImplications = [
  'Prioritize a specific persona',
  'Lead with a deeper emotional pain',
  'Explain the problem through a new mechanism',
  'Address a dominant misconception',
  'Use stronger proof earlier',
  'Build concepts around a buying trigger',
  'Avoid an overused category promise',
  'Use behavioral demonstrations',
  'Develop a new comparison',
  'Build an advertorial before sending traffic to the product page',
  'Create proof-led concepts',
  'Emphasize identity rather than features',
  'Develop content for a different awareness level',
  'Test a different creator type',
  'Adapt a strong organic pattern into paid creative',
];

const creativeOpportunityRecord = [
  'Supporting evidence',
  'Relevant customer group',
  'Problem or desire',
  'Belief or objection',
  'Strategic implication',
  'Possible angle territories',
  'Possible hooks',
  'Possible formats',
  'Required proof',
  'Confidence level',
  'Priority',
];

const insightRecord = [
  'Insight title',
  'Category',
  'Exact evidence',
  'Source links',
  'Pattern',
  'Interpretation',
  'Customer group',
  'Frequency',
  'Emotional intensity',
  'Strategic implication',
  'Possible creative opportunity',
  'Supporting proof',
  'Contradictory evidence',
  'Confidence level',
  'Priority',
  'Status',
];

const insightStatuses = [
  'Raw cluster',
  'Pattern detected',
  'Needs more evidence',
  'Validated insight',
  'Persona input',
  'Angle opportunity',
  'Hook opportunity',
  'Proof opportunity',
  'Offer opportunity',
  'Archived',
];

const outputs = [
  'Organized pain-point system',
  'Desired-outcome and dream-outcome maps',
  'Emotional-driver and identity-goal maps',
  'Objection, perceived-risk, belief, and misconception maps',
  'Failed-alternative analysis',
  'Buying-trigger and urgency library',
  'Proof-requirement and trust-signal map',
  'Customer-language bank',
  'Use-context and behavioral-moment library',
  'Awareness and sophistication insights',
  'Competitor and market-gap map',
  'Hook Intelligence Library',
  'Validated patterns and tensions',
  'Strategic implications',
  'Prioritized creative opportunities',
  'Structured insight records ready for Persona Mapping and Angle Development',
];

const sops = [
  {
    title: 'Pain-Point Extraction',
    description:
      'Separates surface, functional, emotional, social, and identity-level pains while preserving the evidence behind them.',
  },
  {
    title: 'Desired-Outcome Extraction',
    description:
      'Organizes functional, emotional, experiential, and social outcomes without confusing immediate results with larger aspirations.',
  },
  {
    title: 'Dream-Outcome and Aspiration Mapping',
    description:
      'Identifies the larger future, lifestyle, or identity customers want while keeping it connected to believable product outcomes.',
  },
  {
    title: 'Emotional-Driver Extraction',
    description:
      'Identifies emotions underneath customer language and behavior without inventing unsupported psychological conclusions.',
  },
  {
    title: 'Identity-Goal Mapping',
    description:
      'Organizes current, threatened, rejected, desired, aspirational, and recovered identities.',
  },
  {
    title: 'Objection and Risk Mapping',
    description:
      'Clusters stated objections, possible hidden objections, and the proof or explanation each objection requires.',
  },
  {
    title: 'Belief and Misconception Mapping',
    description:
      'Documents existing beliefs, identifies purchase-blocking beliefs, and defines the belief shift required.',
  },
  {
    title: 'Failed-Alternative Analysis',
    description:
      'Organizes what customers tried, what they expected, why it failed, and what they now require.',
  },
  {
    title: 'Buying-Trigger Extraction',
    description:
      'Identifies events, frustrations, comparisons, and moments of urgency that move customers toward action.',
  },
  {
    title: 'Proof-Requirement Mapping',
    description:
      'Connects promises and objections to required proof and identifies strong or missing evidence.',
  },
  {
    title: 'Customer-Language Organization',
    description:
      'Preserves exact wording, context, source, emotional tone, customer type, and intended future use.',
  },
  {
    title: 'Use-Context and Behavioral-Moment Mapping',
    description:
      'Extracts the real environments, routines, and visible moments where the problem or outcome appears.',
  },
  {
    title: 'Awareness and Sophistication Mapping',
    description:
      'Classifies customer awareness and category sophistication so later messaging matches current understanding.',
  },
  {
    title: 'Competitor and Market-Gap Analysis',
    description:
      'Identifies meaningful messaging, persona, mechanism, proof, visual, format, offer, and funnel gaps.',
  },
  {
    title: 'Hook Intelligence Capture',
    description:
      'Collects and classifies verbal, visual, editing, and structural hooks from research sources.',
  },
  {
    title: 'Pattern Recognition',
    description:
      'Clusters repeated evidence and separates commercially meaningful patterns from coincidence.',
  },
  {
    title: 'Tension and Contradiction Mapping',
    description:
      'Identifies conflicts between what customers want, fear, believe, say, and do.',
  },
  {
    title: 'Insight Prioritization',
    description:
      'Scores insights by evidence strength, specificity, intensity, distinctiveness, actionability, and commercial relevance.',
  },
  {
    title: 'Insight-to-Opportunity Translation',
    description:
      'Converts validated insights into implications and opportunities for personas, angles, hooks, concepts, proof, offers, and tests.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function InsightSynthesis({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="EVIDENCE-TO-STRATEGY SYSTEM"
      title="Insight Synthesis"
      introduction="Research gives me raw evidence. Insight Synthesis turns that evidence into an organized intelligence system that can influence personas, angles, hooks, concepts, proof strategies, offers, and creative tests. I do not treat every quote or observation as an insight. I group evidence, identify patterns, interpret what those patterns mean, and translate them into decisions."
      process={[
        'Evidence',
        'Pattern',
        'Interpretation',
        'Strategic Implication',
        'Creative Opportunity',
      ]}
      outputs={outputs}
      outputTitle="Insight Synthesis Output"
      sops={sops}
      sopDescription="The Insight Synthesis SOP Library defines how raw evidence becomes organized, prioritized, and usable strategic intelligence."
    >
      <StageSection
        number="00"
        navTitle="Synthesis Method"
        title="The Synthesis Method"
        description="Connect isolated evidence to a concrete creative opportunity."
      >
        <StageHighlight
          title="Core Synthesis Chain"
          type="success"
        >
          <StageFlow
            items={[
              'Evidence',
              'Pattern',
              'Interpretation',
              'Strategic Implication',
              'Creative Opportunity',
            ]}
          />
        </StageHighlight>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard
              title="Example Evidence"
              description="Customers repeatedly mention hiding their hair in photos, changing hairstyles, and avoiding certain camera angles."
            >
              <StageList
                items={[
                  'The behavior appears across multiple customer stories.',
                  'The consequence extends beyond physical appearance.',
                  'The customer changes how she participates in normal life.',
                ]}
              />
            </StageCard>

            <StageCard
              title="Strategic Translation"
              description="The problem affects identity and everyday confidence."
            >
              <StageFlow
                items={[
                  'Identity Pattern',
                  'Recovery Interpretation',
                  'Identity-Restoration Message',
                  'Behavioral Transformation Concepts',
                ]}
              />
            </StageCard>
          </StageGrid>
        </div>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Pain Points"
        title="Pain Points"
        description="Separate surface-level complaints from deeper functional, emotional, social, and identity consequences."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={painTypes} />
          </StageCard>

          <StageCard
            title="Strategic-Use Criteria"
            description="A pain must be strong enough to influence creative direction."
          >
            <StageList items={usefulPainCriteria} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            {painDepthLevels.map((level) => (
              <StageCard
                key={level.title}
                title={level.title}
              >
                <StageList items={level.items} />
              </StageCard>
            ))}
          </StageGrid>
        </div>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Desired Outcomes"
        title="Desired Outcomes"
        description="Organize what customers explicitly want to achieve after solving the problem."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={desiredOutcomeCapture} />
          </StageCard>

          <StageHighlight title="Outcome Standard">
            <p>
              Desired outcomes should describe what the customer wants the
              product to change in practical, experiential, emotional, or
              social terms.
            </p>
          </StageHighlight>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            {desiredOutcomeTypes.map((outcome) => (
              <StageCard
                key={outcome.title}
                title={outcome.title}
              >
                <StageList items={outcome.items} />
              </StageCard>
            ))}
          </StageGrid>
        </div>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Dream Outcomes"
        title="Dream Outcomes and Aspirations"
        description="Identify the larger transformation, future, lifestyle, or identity the customer imagines."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={dreamOutcomeCapture} />
          </StageCard>

          <StageCard title="Strategic Uses">
            <StageList items={dreamOutcomeUses} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Credibility Boundary"
          type="warning"
        >
          <p>
            The dream outcome must remain connected to a believable product
            result. It should not become an exaggerated fantasy unsupported
            by the product.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Emotional Drivers"
        title="Emotional Drivers"
        description="Identify the deeper emotion underneath the customer’s stated problem, desire, or behavior."
      >
        <StageGrid columns={2}>
          <StageCard title="Common Emotional Drivers">
            <StageList items={emotionalDrivers} />
          </StageCard>

          <StageCard title="Questions I Ask">
            <StageList items={emotionalDriverQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Strategic Value">
          <p>
            Two people with the same functional problem may respond to
            completely different messages because the problem carries a
            different emotional meaning for each person.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Identity Goals"
        title="Identity Goals"
        description="Organize who the customer wants to become, recover, protect, or stop being."
      >
        <StageGrid columns={3}>
          <StageCard title="Identity Categories">
            <StageList items={identityCategories} />
          </StageCard>

          <StageCard title="Identity Transitions">
            <StageList items={identityExamples} />
          </StageCard>

          <StageCard title="What I Capture">
            <StageList items={identityCapture} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Objections"
        title="Objections and Perceived Risks"
        description="Organize the reasons customers hesitate, delay, distrust, or reject the purchase."
      >
        <StageGrid columns={2}>
          <StageCard title="Common Objections">
            <StageList items={objections} />
          </StageCard>

          <StageCard title="Objection Record">
            <StageList items={objectionRecord} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Hidden Objections"
          type="warning"
        >
          <p>
            A stated price objection may actually mean the customer does not
            trust the product will work. A request for more time may reflect
            disappointment with previous solutions. Hidden objections remain
            hypotheses until repeated evidence supports them.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Beliefs"
        title="Beliefs and Misconceptions"
        description="Map what customers currently believe and what they must believe before purchasing."
      >
        <StageGrid columns={2}>
          <StageCard title="Belief Categories">
            <StageList items={beliefCategories} />
          </StageCard>

          <StageCard
            title="Misconception Effects"
            description="Misconceptions may weaken urgency, trust, product fit, or correct usage."
          >
            <StageList items={misconceptions} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Belief-Mapping Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Current Belief',
              'Supporting Evidence',
              'Why It Matters',
              'Belief Needed',
              'Required Proof',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Failed Alternatives"
        title="Failed Alternatives"
        description="Understand what customers tried, why it failed, and how that experience changed what they now require."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={failedAlternativeCapture} />
          </StageCard>

          <StageCard title="Creative Uses">
            <StageList items={failedAlternativeUses} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Failed-Alternative Structure">
          <StageFlow
            items={[
              'Alternative Tried',
              'Original Expectation',
              'Why It Failed',
              'Emotional Consequence',
              'New Buying Requirement',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Buying Triggers"
        title="Buying Triggers and Moments of Urgency"
        description="Identify the specific events that move customers from tolerating the problem to searching or purchasing."
      >
        <StageGrid columns={2}>
          <StageCard title="Trigger Categories">
            <StageList items={buyingTriggers} />
          </StageCard>

          <StageCard title="What I Capture">
            <StageList items={triggerCapture} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Creative Use">
          <p>
            Buying triggers create concrete hooks, scenarios, narratives,
            and situational concepts because they show the exact moment the
            problem becomes difficult to ignore.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Proof"
        title="Proof Requirements and Trust Signals"
        description="Organize what customers need to see, hear, or understand before believing the claim and feeling safe enough to buy."
      >
        <StageGrid columns={2}>
          <StageCard title="Types of Proof">
            <StageList items={proofTypes} />
          </StageCard>

          <StageCard title="Proof Gaps">
            <StageList items={proofGaps} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Proof-Mapping Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Claim or Doubt',
              'Customer Uncertainty',
              'Required Proof',
              'Available Proof',
              'Missing Proof',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Customer Language"
        title="Customer Language"
        description="Organize the exact words customers use to describe problems, desires, beliefs, objections, experiences, and outcomes."
      >
        <StageGrid columns={3}>
          <StageCard title="What I Collect">
            <StageList items={customerLanguageCapture} />
          </StageCard>

          <StageCard title="Language Categories">
            <StageList items={customerLanguageCategories} />
          </StageCard>

          <StageCard title="Future Uses">
            <StageList items={customerLanguageUses} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Language Preservation Rule">
          <p>
            Every language record should preserve the exact wording, full
            context, source, customer type, emotional tone, and relevant
            insight category.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="12"
        navTitle="Use Context"
        title="Use Context and Behavioral Moments"
        description="Organize when, where, and how the problem appears in the customer’s real life."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={useContextCapture} />
          </StageCard>

          <StageCard title="Behavioral-Moment Examples">
            <StageList items={behavioralMoments} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Creative Value">
          <p>
            Behavioral moments provide specific scenes, objects,
            environments, opening situations, and relatable visual ideas
            instead of abstract descriptions of the problem.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="13"
        navTitle="Awareness"
        title="Awareness and Sophistication Insights"
        description="Organize how much customers understand and how exposed the market is to similar promises, mechanisms, and creative patterns."
      >
        <StageGrid columns={2}>
          <StageCard title="Awareness Levels">
            {awarenessLevels.map((level) => (
              <div
                key={level.title}
                style={{ marginBottom: '18px' }}
              >
                <strong
                  style={{
                    display: 'block',
                    marginBottom: '5px',
                    color: 'var(--stage-color)',
                  }}
                >
                  {level.title}
                </strong>

                <p
                  style={{
                    margin: 0,
                    color: '#8390a3',
                    lineHeight: 1.6,
                  }}
                >
                  {level.description}
                </p>
              </div>
            ))}
          </StageCard>

          <StageCard title="Sophistication Insights">
            <StageList items={sophisticationInsights} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="14"
        navTitle="Market Gaps"
        title="Competitor and Market Gaps"
        description="Organize what competitors repeatedly communicate, what they ignore, and where credible whitespace may exist."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Capture">
            <StageList items={competitorGapCapture} />
          </StageCard>

          <StageCard title="Gap Types">
            <StageList items={gapTypes} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Opportunity Standard"
          type="warning"
        >
          <p>
            A gap is not automatically an opportunity. It must be relevant
            to the customer, commercially useful, and credibly supportable
            by the product.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="15"
        navTitle="Hook Intelligence"
        title="Hook Intelligence Library"
        description="Collect hook patterns discovered during research before final hooks are developed."
      >
        <StageGrid columns={2}>
          <StageCard title="Hook Sources">
            <StageList items={hookSources} />
          </StageCard>

          <StageCard title="Hook Record">
            <StageList items={hookRecord} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard title="Verbal and Script Hooks">
              <StageList items={verbalHooks} />
            </StageCard>

            <StageCard title="Visual Hooks">
              <StageList items={visualHooks} />
            </StageCard>

            <StageCard title="Editing Hooks">
              <StageList items={editingHooks} />
            </StageCard>

            <StageCard title="Structural Hooks">
              <StageList items={structuralHooks} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight title="Important Boundary">
          <p>
            This library stores potentially useful patterns. Final hooks are
            written later during Concept Development and must be adapted to
            the selected persona, angle, concept, and execution.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="16"
        navTitle="Patterns"
        title="Pattern Recognition"
        description="Identify repeated relationships, behavior, emotional tensions, market responses, and performance signals."
      >
        <StageGrid columns={3}>
          <StageCard title="Customer Patterns">
            <StageList items={customerPatterns} />
          </StageCard>

          <StageCard title="Product Patterns">
            <StageList items={productPatterns} />
          </StageCard>

          <StageCard title="Competitor Patterns">
            <StageList items={competitorPatterns} />
          </StageCard>

          <StageCard title="Creative Patterns">
            <StageList items={creativePatterns} />
          </StageCard>

          <StageCard title="Performance Patterns">
            <StageList items={performancePatterns} />
          </StageCard>

          <StageCard title="Pattern Quality">
            <StageList items={patternQuality} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard
            title="Pattern Record"
            description="Every meaningful pattern should preserve the evidence, interpretation, and confidence behind it."
          >
            <StageList items={patternRecord} />
          </StageCard>
        </div>

        <StageHighlight
          title="Pattern Example"
          type="success"
        >
          <p>
            Customers may not describe joint improvement as “less pain.”
            They may describe climbing stairs, walking longer, jumping onto
            beds, or playing again. The strategic implication is that visible
            behavioral transformation may communicate the benefit more
            powerfully than abstract pain-reduction language.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="17"
        navTitle="Tensions"
        title="Tensions and Contradictions"
        description="Organize conflicts between what customers want, fear, believe, say, and do."
      >
        <StageGrid columns={2}>
          <StageCard title="Common Tensions">
            <StageList items={commonTensions} />
          </StageCard>

          <StageCard title="Why Tensions Matter">
            <StageList items={tensionValue} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Strategic Value">
          <p>
            Tensions often produce stronger insights than simple categories
            because they reveal why the decision feels difficult and what
            the message, proof, or offer must resolve.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="18"
        navTitle="Implications"
        title="Strategic Implications and Creative Opportunities"
        description="Translate the strongest patterns into decisions and opportunity territories."
      >
        <StageGrid columns={3}>
          <StageCard title="Questions Every Insight Must Answer">
            <StageList
              items={implicationQuestions}
              ordered
            />
          </StageCard>

          <StageCard title="Possible Strategic Implications">
            <StageList items={strategicImplications} />
          </StageCard>

          <StageCard title="Creative Opportunity Record">
            <StageList items={creativeOpportunityRecord} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Insight-to-Opportunity Chain"
          type="success"
        >
          <StageFlow
            items={[
              'Validated Insight',
              'Strategic Implication',
              'Persona Input',
              'Angle Territory',
              'Concept Opportunity',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="19"
        navTitle="Insight System"
        title="Insight Organization System"
        description="Store each insight with enough evidence, interpretation, and status information to support future decisions."
      >
        <StageGrid columns={2}>
          <StageCard title="Insight Record Fields">
            <StageList items={insightRecord} />
          </StageCard>

          <StageCard title="Suggested Statuses">
            <StageList items={insightStatuses} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="System Logic">
          <p>
            The system should connect evidence to patterns, interpretations,
            implications, and opportunities. Isolated categories should not
            be presented as final strategic answers without showing how they
            influence the next creative decision.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}