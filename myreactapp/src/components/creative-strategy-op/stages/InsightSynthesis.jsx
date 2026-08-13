// src/components/InsightSynthesis.jsx

import StageDeepDiveLayout, {
  StageCard,
  StageFlow,
  StageGrid,
  StageHighlight,
  StageList,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| INSIGHT SYNTHESIS — PRACTICAL INTERVIEW VERSION
|--------------------------------------------------------------------------
*/

const painDepthLevels = [
  {
    title: 'Surface',
    description: 'What the customer notices immediately.',
    examples: ['Hair shedding', 'Joint stiffness', 'Skin breakouts', 'Low energy'],
  },
  {
    title: 'Functional',
    description: 'What the problem prevents them from doing.',
    examples: ['Avoiding stairs', 'Struggling to exercise', 'Losing focus at work'],
  },
  {
    title: 'Emotional',
    description: 'How the problem makes them feel.',
    examples: ['Frustrated', 'Anxious', 'Powerless', 'Less confident'],
  },
  {
    title: 'Social / Identity',
    description: 'How it changes self-perception or participation in life.',
    examples: ['Avoiding photos', 'Feeling judged', 'Losing independence'],
  },
];

const desiredOutcomes = [
  'Immediate functional improvement',
  'Short-term result',
  'Long-term result',
  'Lifestyle improvement',
  'Emotional relief',
  'Social outcome',
  'Convenience',
  'Speed',
  'Control',
  'Certainty',
];

const dreamOutcomes = [
  'The ideal future the customer wants',
  'The larger transformation they imagine',
  'The identity they want to recover',
  'The identity they want to become',
  'The lifestyle they want access to',
  'What success would make possible',
  'What they would stop worrying about',
  'What they would start doing again',
];

const emotionalDrivers = [
  {
    type: 'Fear',
    examples: [
      'Fear of rejection',
      'Fear of losing a relationship',
      'Fear of getting older',
      'Fear of sickness / serious consequences',
      'Fear of financial loss',
    ],
  },
  {
    type: 'Frustration / Anger',
    examples: [
      'Tried everything and nothing worked',
      'Wasting time or money',
      'Problem keeps coming back',
      'Feeling ignored or misunderstood',
      'Category feels full of empty promises',
    ],
  },
  {
    type: 'Shame / Embarrassment',
    examples: [
      'Feeling judged',
      'Hiding appearance or behavior',
      'Avoiding photos or social situations',
      'Feeling less attractive',
      'Feeling like they should have solved it already',
    ],
  },
  {
    type: 'Hope / Relief',
    examples: [
      'Finally finding something that works',
      'Getting normal life back',
      'Stopping daily worry',
      'Feeling in control again',
      'Avoiding a worse future',
    ],
  },
  {
    type: 'Love / Protection',
    examples: [
      'Protecting a partner, child, pet, or family member',
      'Being present for people who depend on them',
      'Avoiding guilt',
      'Keeping someone safe or comfortable',
      'Doing the responsible thing',
    ],
  },
  {
    type: 'Status / Validation',
    examples: [
      'Feeling attractive again',
      'Earning respect',
      'Feeling successful',
      'Stopping comparison with others',
      'Wanting visible proof of progress',
    ],
  },
  {
    type: 'Control / Security',
    examples: [
      'Regaining control',
      'Wanting certainty',
      'Avoiding dependence on others',
      'Feeling financially secure',
      'Feeling safe about the future',
    ],
  },
  {
    type: 'Belonging / Acceptance',
    examples: [
      'Wanting to fit in',
      'Fear of social exclusion',
      'Wanting partner approval',
      'Wanting peer acceptance',
      'Wanting to feel understood',
    ],
  },
];


const misconceptionSignals = [
  'The problem is inevitable and cannot be improved',
  'All products in the category work the same way',
  'A natural solution cannot be strong enough',
  'A higher price automatically means better results',
  'The customer must accept the problem as part of age, genetics, or lifestyle',
  'Previous failure means every future solution will fail',
];

const massDesireLens = [
  'What existing desire already creates demand in this market?',
  'How urgent and emotionally intense is that desire?',
  'How many people share it?',
  'How long is that desire likely to remain relevant?',
  'Which hopes, fears, frustrations, or aspirations already exist before our advertising?',
];

const identitySignals = [
  'Current identity',
  'Threatened identity',
  'Rejected identity',
  'Desired identity',
  'Recovered identity',
  'Aspirational identity',
];

const objections = [
  'Price',
  'Will it actually work?',
  'Time to results',
  'Safety / side effects',
  'Trust',
  'Ingredients / quality',
  'Ease of use',
  'Suitability',
  'Subscription',
  'Shipping',
  'Previous disappointment',
  'Fear of wasting money',
];

const beliefSignals = [
  'What they believe causes the problem',
  'What they believe works',
  'What they believe does not work',
  'What they believe about the category',
  'What they believe about the brand',
  'What they believe about price',
  'What they believe about themselves',
  'What they expect results to look like and how fast they should happen',
];

const failedAlternativeCapture = [
  'What they already tried',
  'Why they chose it',
  'What they expected',
  'What actually happened',
  'Why they stopped',
  'What disappointed them',
  'What they still want',
  'What they are now skeptical about',
];

const buyingTriggers = [
  'Visible worsening of the problem',
  'A photograph or mirror moment',
  'A social event',
  'A comment from another person',
  'A doctor / expert conversation',
  'A failed alternative',
  'A painful daily moment',
  'A major life event',
  'A comparison with someone else',
  'A seasonal event',
  'A health scare',
  'Running out of patience',
  'Seeing convincing proof',
  'Discovering a new explanation',
];

const behavioralContext = [
  'When the moment happens',
  'Where it happens',
  'What the customer is trying to do',
  'What makes the problem visible',
  'Who else is present',
  'What emotion appears',
  'What action follows',
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
  'Ratings / customer volume',
  'Guarantees',
  'Comparison evidence',
  'Product transparency',
  'Mechanism explanation',
];

const customerLanguageFields = [
  'Exact phrase',
  'Full context',
  'Source',
  'Customer type',
  'Category',
  'Emotional tone',
  'Frequency / repetition',
];

const awarenessLevels = [
  {
    level: 'Unaware',
    knows: 'Does not clearly recognize the problem or its impact.',
    implication: 'Start with the lived symptom, situation, story, or hidden problem — not the product.',
  },
  {
    level: 'Problem Aware',
    knows: 'Recognizes the problem but does not yet understand the available solutions.',
    implication: 'Deepen the problem, consequences, urgency, and introduce the solution category.',
  },
  {
    level: 'Solution Aware',
    knows: 'Knows solutions exist and is comparing approaches.',
    implication: 'Differentiate the mechanism, approach, proof, and why this solution is better suited.',
  },
  {
    level: 'Product Aware',
    knows: 'Knows the product or brand but has not purchased.',
    implication: 'Resolve objections, strengthen proof, clarify differentiation, and reduce perceived risk.',
  },
  {
    level: 'Most Aware',
    knows: 'Already understands the product and mainly needs a reason to act now.',
    implication: 'Lead with offer, urgency, reminder, new proof, bundle, bonus, or a strong reason to return.',
  },
];

const sophisticationLevels = [
  {
    level: 'Level 1',
    market: 'The promise is still relatively new.',
    implication: 'A clear direct promise can work because the market has not heard it repeatedly.',
  },
  {
    level: 'Level 2',
    market: 'Competitors are making similar promises.',
    implication: 'Make the promise more specific, vivid, measurable, or differentiated.',
  },
  {
    level: 'Level 3',
    market: 'Promises are familiar and customers need a reason to believe.',
    implication: 'Introduce or strengthen the unique mechanism — why the problem happens or why this solution works differently.',
  },
  {
    level: 'Level 4',
    market: 'Competing mechanisms are now common.',
    implication: 'Deepen mechanism specificity and strengthen proof, authority, evidence, and differentiation.',
  },
  {
    level: 'Level 5',
    market: 'Customers are highly skeptical and have seen nearly every version of the category pitch.',
    implication: 'Shift framing: lead with identity, story, experience, contrarian positioning, new context, or a fresh way of understanding the problem.',
  },
];

const marketGapSignals = [
  'Overused promises',
  'Saturated mechanisms',
  'Claims customers no longer trust',
  'Ignored objections',
  'Underused customer groups',
  'Underused emotional drivers',
  'Unresolved competitor complaints',
  'Proof gaps',
  'Positioning gaps',
  'Visual / format whitespace',
  'Offer or funnel gaps',
];

const hookSources = [
  'Brand and competitor ads',
  'Meta Ad Library',
  'TikTok creative research',
  'Organic short-form content',
  'Creator videos',
  'Customer language',
  'Reddit threads',
  'Reviews',
  'Advertorial headlines',
  'Listicle headlines',
  'Landing-page headlines',
  'Email subject lines',
  'Founder content',
  'Podcast clips',
  'YouTube titles / thumbnails',
];

const hookTypes = [
  {
    title: 'Verbal',
    items: [
      'Problem statement',
      'Direct callout',
      'Question',
      'Contrarian claim',
      'Curiosity gap',
      'Story opening',
      'Warning',
      'Discovery',
      'Comparison',
      'Proof-led statement',
      'Customer quote',
    ],
  },
  {
    title: 'Visual',
    items: [
      'Problem-state image',
      'Demonstration',
      'Before / after',
      'Close-up',
      'Pattern interruption',
      'Review / comment screenshot',
      'Comparison',
      'Reaction',
      'Transformation',
      'Visual metaphor',
    ],
  },
  {
    title: 'Structural',
    items: [
      'Start with the result',
      'Start with proof',
      'Start in the middle of the story',
      'Start with the objection',
      'Start with a failed alternative',
      'Start with the mechanism',
      'Start with a customer moment',
    ],
  },
  {
    title: 'Editing',
    items: [
      'Fast cuts',
      'Sudden zoom',
      'Abrupt scene change',
      'Text-first opening',
      'Sound interruption',
      'Split screen',
      'Comment overlay',
      'Screen recording',
    ],
  },
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
  'Common usage problems',
  'Unexpected use cases',
  'Proof repeatedly requested',
];

const marketPatterns = [
  'Repeated promises',
  'Repeated mechanisms',
  'Repeated hooks',
  'Repeated formats',
  'Repeated creator types',
  'Repeated offers',
  'Repeated competitor complaints',
  'Repeated positioning gaps',
];

const creativePerformancePatterns = [
  'Angles associated with higher spend',
  'Hooks associated with stronger CTR',
  'Formats associated with stronger hold rate',
  'Concepts producing clicks but weak conversion',
  'Proof types associated with better conversion',
  'Creators associated with stronger performance',
  'Patterns of fatigue',
];

const tensions = [
  'Wants fast results but distrusts exaggerated promises',
  'Wants premium quality but resists the price',
  'Wants a natural solution but also wants clinical proof',
  'Wants a simple routine but expects a complete transformation',
  'Wants to believe the product but fears another disappointment',
  'Wants change but delays action',
];

const patternQuality = [
  'Frequency',
  'Source diversity',
  'Emotional intensity',
  'Specificity',
  'Customer relevance',
  'Commercial relevance',
  'Recency',
  'Available proof',
  'Connection to actual behavior or performance',
];

const synthesisRecord = [
  'Insight',
  'Supporting evidence',
  'Source',
  'Customer group',
  'Frequency',
  'Confidence',
  'Contradictory evidence',
];

const outputs = [
  'Pain-point map',
  'Desired and dream-outcome map',
  'Emotional-driver and identity map',
  'Objection and belief map',
  'Failed-alternative analysis',
  'Buying-trigger and behavioral-context library',
  'Proof-requirement map',
  'Customer-language bank',
  'Awareness and market-sophistication map',
  'Market-gap map',
  'Hook Intelligence Library',
  'Validated pattern library',
];

const sops = [
  {
    title: 'Pain & Outcome Extraction',
    description:
      'Organizes surface, functional, emotional, and identity-level pains alongside desired and dream outcomes.',
  },
  {
    title: 'Emotional Driver & Identity Mapping',
    description:
      'Documents the emotions and identity shifts repeatedly supported by customer evidence.',
  },
  {
    title: 'Objection & Belief Mapping',
    description:
      'Clusters hesitation, perceived risk, beliefs, misconceptions, and the evidence behind them.',
  },
  {
    title: 'Failed Alternative & Trigger Extraction',
    description:
      'Captures what customers tried, why it failed, and the moments that move them toward action.',
  },
  {
    title: 'Proof & Customer Language Extraction',
    description:
      'Maps proof requirements and preserves exact customer wording with source and context.',
  },
  {
    title: 'Awareness, Sophistication & Market Gap Mapping',
    description:
      'Classifies what customers know, how mature the category is, and where credible positioning gaps remain.',
  },
  {
    title: 'Hook Intelligence Capture',
    description:
      'Organizes verbal, visual, structural, and editing-hook patterns discovered during research.',
  },
  {
    title: 'Pattern Recognition',
    description:
      'Clusters repeated evidence across customer, product, market, creative, and performance sources.',
  },
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function InsightPair({
  label,
  title,
  description,
  items,
}) {
  return (
    <article className="insight-pair-card">
      <header>
        <span>{label}</span>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </header>

      <StageList items={items} />
    </article>
  );
}

function LevelRow({
  level,
  knows,
  implication,
}) {
  return (
    <div className="insight-level-row">
      <strong>{level}</strong>

      <div>
        <span>WHAT THEY KNOW / MARKET STATE</span>
        <p>{knows}</p>
      </div>

      <div>
        <span>WHAT I DO</span>
        <p>{implication}</p>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function InsightSynthesis({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="EVIDENCE → CUSTOMER INTELLIGENCE"
      title="Insight Synthesis"
      introduction="Research gives me a large volume of raw evidence. Here I compress that evidence into structured customer intelligence by grouping similar signals, extracting what repeatedly matters, preserving the evidence behind it, and identifying the strongest patterns before moving into Persona Mapping and Angle Development."
      process={[
        'Raw Evidence',
        'Cluster Similar Signals',
        'Extract & Classify',
        'Validate',
        'Recognize Patterns',
      ]}
      outputs={outputs}
      outputTitle="Insight Synthesis Output"
      sops={sops}
      sopDescription="Planned SOPs for consistently turning raw research into structured, evidence-backed customer intelligence."
    >
      {/* ================================================================
          00 — SYNTHESIS METHOD
         ================================================================ */}

      <StageSection
        number="00"
        navTitle="Synthesis Method"
        title="How I Turn Research Into Insights"
        description="The goal is to compress large amounts of research without losing the source, context, or evidence behind what customers repeatedly show us."
      >
        <div className="insight-synthesis-chain">
          {[
            ['01', 'Raw Evidence', 'Quotes, reviews, comments, ads, pages, interviews, performance data.'],
            ['02', 'Cluster', 'Group similar customer statements, behaviors, objections, outcomes, and market signals.'],
            ['03', 'Extract', 'Name the underlying pain, desire, belief, trigger, proof need, language pattern, or market signal.'],
            ['04', 'Validate', 'Check repetition, source diversity, specificity, contradictory evidence, and confidence.'],
            ['05', 'Pattern', 'Identify what repeatedly appears across multiple insight categories and evidence sources.'],
          ].map(([number, title, copy], index, array) => (
            <div
              className="insight-synthesis-chain-step"
              key={title}
            >
              <article>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>

              {index < array.length - 1 && (
                <i aria-hidden="true">→</i>
              )}
            </div>
          ))}
        </div>

        <div className="insight-synthesis-record">
          <span>MINIMUM INSIGHT RECORD</span>

          <div>
            {synthesisRecord.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
      </StageSection>

      {/* ================================================================
          01 — PAIN POINTS
         ================================================================ */}

      <StageSection
        number="01"
        navTitle="Pain Points"
        title="Pain Points"
        description="I separate the visible symptom from the deeper functional, emotional, social, and identity consequences supported by customer evidence."
      >
        <div className="insight-depth-grid">
          {painDepthLevels.map((level, index) => (
            <article
              className="insight-depth-card"
              key={level.title}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{level.title}</h3>
              <p>{level.description}</p>

              <div>
                {level.examples.map((example) => (
                  <small key={example}>{example}</small>
                ))}
              </div>
            </article>
          ))}
        </div>

        <StageHighlight
          title="Evidence Standard"
          type="success"
        >
          <p>
            The strongest pain insights are repeated, specific,
            emotionally meaningful, behaviorally visible, relevant
            to the product, and supported across more than one source
            when possible.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          02 — OUTCOMES
         ================================================================ */}

      <StageSection
        number="02"
        navTitle="Outcomes"
        title="Desired Outcomes & Dream Outcomes"
        description="I separate what customers practically want the problem to change from the larger future, lifestyle, or identity they ultimately want access to."
      >
        <div className="insight-pair-grid">
          <InsightPair
            label="DESIRED OUTCOME"
            title="What they want to change"
            description="The direct result the customer wants from solving the problem."
            items={desiredOutcomes}
          />

          <InsightPair
            label="DREAM OUTCOME"
            title="What that result makes possible"
            description="The larger transformation, lifestyle, or identity behind the practical result."
            items={dreamOutcomes}
          />
        </div>

        <StageHighlight
          title="Credibility Boundary"
          type="warning"
        >
          <p>
            Dream outcomes stay connected to believable customer
            evidence and realistic product outcomes. They are not
            invented fantasies.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          03 — EMOTIONAL DRIVERS
         ================================================================ */}

      <StageSection
        number="03"
        navTitle="Emotional Drivers"
        title="Emotional Drivers"
        description="I group emotional drivers by type, then look for the specific fear, frustration, hope, status need, or emotional consequence that repeatedly appears in the customer evidence."
      >
        <div className="insight-emotional-drivers-board">
          <div className="insight-emotional-drivers-header">
            <div>
              <span>DRIVER TYPE</span>
              <span>COMMON EXAMPLES</span>
            </div>
          </div>

          <div className="insight-emotional-drivers-list">
            {emotionalDrivers.map((group) => (
              <article
                className="insight-emotional-driver-row"
                key={group.type}
              >
                <div className="insight-emotional-driver-name">
                  <strong>{group.type}</strong>
                </div>

                <div className="insight-emotional-driver-examples">
                  {group.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="insight-emotional-drivers-more">
            <strong>+ MORE</strong>
            <p>
              These are common examples, not a fixed list. The actual
              emotional drivers come from repeated customer language,
              behavior, stories, and context inside the research.
            </p>
          </div>
        </div>

        <StageHighlight title="Practical Standard" type="success">
          <p>
            “Fear” is too broad. “Fear of rejection because the customer
            feels less attractive” is specific enough to be useful. I always
            connect the emotion to the concrete consequence, relationship,
            identity, or future the customer cares about.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          04 — IDENTITY GOALS
         ================================================================ */}

      <StageSection
        number="04"
        navTitle="Identity Goals"
        title="Identity Goals"
        description="I map who the customer feels they are now, what identity the problem threatens, and who they want to become, recover, or protect."
      >
        <div className="insight-identity-map is-standalone">
          <span>IDENTITY MOVEMENT</span>
          <div>
            {identitySignals.map((item, index) => (
              <div key={item}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <StageHighlight title="Practical Read">
          <p>
            I look for identity language in the customer’s own words:
            what version of themselves they miss, what they are embarrassed
            to become, what they want to protect, and what the transformation
            would let them feel like again.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          05 — OBJECTIONS + MISCONCEPTIONS
         ================================================================ */}

      <StageSection
        number="05"
        navTitle="Objections"
        title="Objections & Misconceptions"
        description="Objections are the stated reasons customers hesitate. Misconceptions are inaccurate or limiting assumptions about the problem, category, or solution that can create hesitation."
      >
        <div className="insight-pair-grid">
          <InsightPair
            label="OBJECTIONS"
            title="What stops or delays the purchase"
            items={objections}
          />

          <InsightPair
            label="MISCONCEPTIONS"
            title="What they may misunderstand"
            items={misconceptionSignals}
          />
        </div>

        <StageHighlight
          title="Evidence Rule"
          type="warning"
        >
          <p>
            A misconception is only treated as meaningful when customer
            evidence supports it. I do not invent a hidden psychological
            reason because it sounds persuasive.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          06 — BELIEFS
         ================================================================ */}

      <StageSection
        number="06"
        navTitle="Beliefs"
        title="Beliefs"
        description="I map what customers already believe about the problem, possible solutions, the category, the brand, and themselves because those beliefs shape how new information is interpreted."
      >
        <div className="insight-beliefs-layout">
          <article>
            <span>EXISTING BELIEFS</span>
            <StageList items={beliefSignals} />
          </article>

          <article className="insight-mass-desire-panel">
            <span>BREAKTHROUGH ADVERTISING LENS — MASS DESIRE</span>
            <p>
              Advertising does not manufacture the market’s underlying
              desire. It identifies and channels desires that already exist,
              then connects them to the product.
            </p>
            <StageList items={massDesireLens} />
          </article>
        </div>

        <div className="insight-belief-flow">
          <span>Existing Belief</span>
          <i>→</i>
          <span>Evidence Behind It</span>
          <i>→</i>
          <span>What It Makes Them Accept / Reject</span>
          <i>→</i>
          <span>Proof Needed</span>
        </div>
      </StageSection>

      {/* ================================================================
          05 — FAILED ALTERNATIVES
         ================================================================ */}

      <StageSection
        number="07"
        navTitle="Failed Alternatives"
        title="Failed Alternatives"
        description="Previous failures shape what customers now distrust, expect, and require from the next solution."
      >
        <div className="insight-failed-alternative">
          <StageFlow
            items={[
              'Alternative Tried',
              'Expectation',
              'What Happened',
              'Why It Failed',
              'New Skepticism / Requirement',
            ]}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="What I Extract">
            <StageList items={failedAlternativeCapture} />
          </StageCard>
        </div>
      </StageSection>

      {/* ================================================================
          08 — BUYING TRIGGERS
         ================================================================ */}

      <StageSection
        number="08"
        navTitle="Buying Triggers"
        title="Buying Triggers"
        description="I identify the specific events or moments that move the customer from tolerating the problem to actively searching, comparing, or buying."
      >
        <div className="insight-trigger-grid is-single">
          <article>
            <span>WHAT TRIGGERS ACTION</span>
            <StageList items={buyingTriggers} />
          </article>
        </div>

        <StageHighlight title="Trigger Question">
          <p>
            What happened right before the customer decided the problem
            could no longer be ignored?
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          09 — BEHAVIORAL CONTEXT
         ================================================================ */}

      <StageSection
        number="09"
        navTitle="Behavioral Context"
        title="Behavioral Context"
        description="I capture the real-world situation around the problem so the insight stays connected to observable behavior instead of becoming an abstract label."
      >
        <div className="insight-trigger-grid is-single">
          <article>
            <span>WHAT I CAPTURE AROUND THE MOMENT</span>
            <StageList items={behavioralContext} />
          </article>
        </div>

        <div className="insight-trigger-example">
          <span>EXAMPLE</span>
          <strong>Hair covering the shower drain</strong>
          <i>→</i>
          <strong>Before getting ready for work</strong>
          <i>→</i>
          <strong>Anxiety / loss of control</strong>
          <i>→</i>
          <strong>Starts searching for a solution</strong>
        </div>
      </StageSection>

      {/* ================================================================
          07 — PROOF
         ================================================================ */}

      <StageSection
        number="10"
        navTitle="Proof"
        title="Proof Requirements & Trust Signals"
        description="I map what customers need to see, hear, or understand before a claim feels believable and the purchase feels safe."
      >
        <div className="insight-proof-layout">
          <article>
            <span>AVAILABLE PROOF TYPES</span>

            <div>
              {proofTypes.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </article>

          <article className="insight-proof-map">
            <span>PROOF MAPPING</span>

            <StageFlow
              items={[
                'Claim / Doubt',
                'Customer Uncertainty',
                'Proof Required',
                'Proof Available',
                'Proof Missing',
              ]}
            />
          </article>
        </div>
      </StageSection>

      {/* ================================================================
          08 — CUSTOMER LANGUAGE
         ================================================================ */}

      <StageSection
        number="11"
        navTitle="Customer Language"
        title="Customer Language"
        description="I preserve the exact words customers use instead of rewriting everything into marketing language too early."
      >
        <div className="insight-language-record">
          {customerLanguageFields.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>

        <StageHighlight
          title="Preservation Rule"
          type="success"
        >
          <p>
            Quotes stay connected to their full context, source,
            customer type, emotional tone, and repetition. The
            customer’s wording is evidence — not just copy inspiration.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          12 — LEVEL OF AWARENESS
         ================================================================ */}

      <StageSection
        number="12"
        navTitle="Level of Awareness"
        title="Level of Awareness"
        description="Awareness tells me how much the customer already understands. I match the amount of education, proof, differentiation, and offer emphasis to that starting point."
      >
        <div className="insight-market-system is-single">
          <section>
            <header>
              <span>CUSTOMER AWARENESS</span>
              <h3>What does the customer already know — and what should the message do?</h3>
            </header>

            <div>
              {awarenessLevels.map((item) => (
                <LevelRow
                  key={item.level}
                  level={item.level}
                  knows={item.knows}
                  implication={item.implication}
                />
              ))}
            </div>
          </section>
        </div>
      </StageSection>

      {/* ================================================================
          13 — MARKET SOPHISTICATION
         ================================================================ */}

      <StageSection
        number="13"
        navTitle="Market Sophistication"
        title="Market Sophistication"
        description="Sophistication tells me how many similar promises and mechanisms the market has already seen. The more sophisticated the market becomes, the harder generic positioning has to work."
      >
        <div className="insight-market-system is-single">
          <section>
            <header>
              <span>MARKET SOPHISTICATION</span>
              <h3>How mature is the category — and how should positioning evolve?</h3>
            </header>

            <div>
              {sophisticationLevels.map((item) => (
                <LevelRow
                  key={item.level}
                  level={item.level}
                  knows={item.market}
                  implication={item.implication}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="insight-positioning-rule">
          <span>POSITIONING RULE</span>
          <p>
            As sophistication rises, move from a simple promise toward
            greater specificity, a differentiated mechanism, stronger proof,
            deeper mechanism detail, and eventually a fresh framing, story,
            identity, experience, or way of understanding the problem.
          </p>
        </div>
      </StageSection>

      {/* ================================================================
          10 — MARKET GAPS
         ================================================================ */}

      <StageSection
        number="14"
        navTitle="Market Gaps"
        title="Market Gaps & Positioning Whitespace"
        description="After understanding awareness and sophistication, I look for credible areas the market is overusing, ignoring, explaining badly, or failing to support with enough proof."
      >
        <div className="insight-gap-grid">
          {marketGapSignals.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>

        <StageHighlight
          title="Gap Standard"
          type="warning"
        >
          <p>
            A gap is only useful when it is relevant to the customer,
            credibly supportable by the product, and meaningful enough
            to create a differentiated position. “Nobody is saying it”
            is not enough.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          11 — HOOK INTELLIGENCE
         ================================================================ */}

      <StageSection
        number="15"
        navTitle="Hook Intelligence"
        title="Hook Intelligence"
        description="I organize attention patterns discovered during research without turning this stage into final hook writing."
      >
        <div className="insight-hook-sources">
          <span>WHERE HOOK SIGNALS COME FROM</span>

          <div>
            {hookSources.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>

        <div className="insight-hook-grid">
          {hookTypes.map((group) => (
            <article key={group.title}>
              <span>{group.title}</span>
              <StageList items={group.items} />
            </article>
          ))}
        </div>

        <StageHighlight title="Boundary">
          <p>
            This is an intelligence library of repeated attention
            patterns. Final hooks are developed later around the
            selected persona, angle, concept, and execution.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          12 — PATTERNS — FINAL
         ================================================================ */}

      <StageSection
        number="16"
        navTitle="Patterns"
        title="Pattern Recognition"
        description="This is the final synthesis step. After individual insights are extracted, I look across the full evidence base for signals that repeatedly appear in different sources and categories."
      >
        <div className="insight-pattern-convergence">
          <div className="insight-pattern-inputs">
            {[
              'Pain',
              'Outcomes',
              'Emotion',
              'Identity',
              'Objections',
              'Beliefs',
              'Failed Alternatives',
              'Triggers',
              'Proof',
              'Language',
              'Market Gaps',
              'Hook Signals',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="insight-pattern-arrow">
            →
          </div>

          <div className="insight-pattern-core">
            <small>FINAL SYNTHESIS</small>
            <strong>Repeated Patterns</strong>
            <p>
              The strongest signals are the ones that repeat across
              multiple sources, insight categories, customer behavior,
              market evidence, or real performance.
            </p>
          </div>
        </div>

        <div className="insight-pattern-grid">
          <InsightPair
            label="CUSTOMER"
            title="Customer Patterns"
            items={customerPatterns}
          />

          <InsightPair
            label="PRODUCT"
            title="Product Patterns"
            items={productPatterns}
          />

          <InsightPair
            label="MARKET"
            title="Market Patterns"
            items={marketPatterns}
          />

          <InsightPair
            label="PERFORMANCE"
            title="Creative / Performance Patterns"
            items={creativePerformancePatterns}
          />
        </div>

        <div className="insight-pattern-bottom">
          <article>
            <span>TENSIONS & CONTRADICTIONS</span>
            <StageList items={tensions} />
          </article>

          <article>
            <span>WHAT MAKES A PATTERN STRONG</span>
            <StageList items={patternQuality} />
          </article>
        </div>

        <StageHighlight
          title="Transition"
          type="success"
        >
          <p>
            The strongest validated patterns become high-confidence
            inputs for Persona Mapping and Angle Development. This
            stage stops here.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}