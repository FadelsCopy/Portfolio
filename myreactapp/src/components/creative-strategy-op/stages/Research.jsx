// src/components/Research.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageHighlight,
  StageList,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| RESEARCH DIRECTION
|--------------------------------------------------------------------------
*/

const alreadyEstablished = [
  'Business objective and growth priority',
  'Creative problem to solve',
  'Commercial acquisition guardrails',
  'Historical creative-performance baseline',
  'Current portfolio risks and concentration',
  'Existing internal intelligence inventory',
  'Operating constraints',
  'Initial research priorities',
];

const researchQuestionExamples = [
  'Why is the current winner beginning to fatigue?',
  'Which customer pain has the strongest emotional intensity?',
  'Which desire is important to customers but underused creatively?',
  'Which objections are suppressing conversion?',
  'Which beliefs must change before the customer buys?',
  'Why do customers choose this product instead of alternatives?',
  'Which category promises have become saturated?',
  'Which mechanisms still feel differentiated and credible?',
  'Where is there positioning or creative whitespace?',
  'Which customer segments or use cases deserve deeper investigation?',
  'Which proof requirements are not currently being satisfied?',
  'Which part of the ad-to-funnel journey is creating friction?',
];

const researchPriorityTypes = [
  {
    number: '01',
    title: 'Known',
    description:
      'Evidence already established strongly enough that I do not need to rediscover it.',
  },
  {
    number: '02',
    title: 'Unknown',
    description:
      'Important questions where I still need evidence before making strategic decisions.',
  },
  {
    number: '03',
    title: 'Assumption',
    description:
      'Something the team currently believes but that still needs validation.',
  },
  {
    number: '04',
    title: 'Contradiction',
    description:
      'Places where customer, performance, internal, or market evidence does not agree.',
  },
];

/*
|--------------------------------------------------------------------------
| INTERNAL EVIDENCE DEEP DIVE
|--------------------------------------------------------------------------
*/

const productTruthSources = [
  'Product documentation',
  'Product pages and FAQs',
  'Scientific or technical support',
  'Ingredient / material documentation',
  'Packaging and inserts',
  'Claims documentation',
  'Compliance guidance',
  'Founder and product-team interviews',
  'Demonstrations',
  'Guarantee and policy documentation',
];

const productTruthSignals = [
  'What the product objectively does',
  'How the product works',
  'Mechanism of action',
  'Supported claims',
  'Unsupported or restricted claims',
  'Functional benefits',
  'Emotional implications of those benefits',
  'Product limitations',
  'Real differentiators',
  'Main use cases',
  'Proof available for each important claim',
  'What competitors can easily copy',
  'What the brand can credibly own',
];

const customerRealitySources = [
  'Post-purchase surveys',
  'Customer interviews',
  'Reviews',
  'Support tickets',
  'Live chat',
  'Email conversations',
  'Refund requests',
  'Return reasons',
  'Cancellation surveys',
  'Guarantee claims',
  'Quiz responses',
  'Sales calls',
  'Testimonial interviews',
];

const customerRealitySignals = [
  'Why customers actually bought',
  'What nearly stopped them from buying',
  'Expectation before purchase',
  'Experience after purchase',
  'Reasons for refunds or cancellations',
  'Product confusion',
  'Unexpected benefits',
  'Unexpected frustrations',
  'Questions repeatedly asked',
  'Words customers naturally use',
  'Differences between intended and actual use cases',
  'Differences between intended and actual customer segments',
];

const historicalLearningSources = [
  'Previous research documents',
  'Historical creative briefs',
  'Past ads and scripts',
  'Winning and losing concepts',
  'Advertorials',
  'Landing pages',
  'Email campaigns',
  'Testing reports',
  'Creative post-mortems',
  'Team notes',
];

const historicalLearningSignals = [
  'Ideas the brand has already tested',
  'Messages repeatedly used',
  'Insights previously identified',
  'Research that may still be useful',
  'Past hypotheses',
  'What was tested versus merely discussed',
  'What appears exhausted',
  'What deserves another test with a different execution',
  'Unexplored implications of previous winners',
  'Institutional knowledge that has never reached creative',
];

const brandNarrativeSources = [
  'Founder interviews',
  'Founder organic content',
  'Brand positioning documents',
  'About pages',
  'Podcasts',
  'Sales calls',
  'Customer-service conversations',
  'Emails and SMS',
  'Testimonials',
  'Internal team interviews',
];

const brandNarrativeSignals = [
  'Founder story',
  'Why the product exists',
  'Brand worldview',
  'Core customer belief',
  'Distinctive stories',
  'Strong analogies or explanations',
  'Repeated customer questions',
  'Language the brand naturally owns',
  'Trust-building assets',
  'Authority or credibility assets',
  'Stories that have not yet been turned into creative',
];

/*
|--------------------------------------------------------------------------
| CUSTOMER + VOC
|--------------------------------------------------------------------------
*/

const customerSources = [
  'Reddit communities and threads',
  'Trustpilot',
  'Amazon and retailer reviews',
  'YouTube comments',
  'TikTok comments',
  'Instagram comments',
  'Facebook Groups and comments',
  'Quora',
  'Niche forums',
  'Customer interviews',
  'Surveys',
  'Post-purchase surveys',
  'Support tickets',
  'Live chat',
  'Refund and return responses',
  'Cancellation responses',
  'Competitor reviews',
];

const vocCaptureTypes = [
  {
    number: '01',
    title: 'Pain',
    items: [
      'Immediate problem',
      'Functional frustration',
      'Emotional consequence',
      'Social consequence',
      'Long-term fear',
    ],
  },
  {
    number: '02',
    title: 'Desire',
    items: [
      'Desired result',
      'Emotional outcome',
      'Identity aspiration',
      'Lifestyle aspiration',
      'Ultimate transformation',
    ],
  },
  {
    number: '03',
    title: 'Resistance',
    items: [
      'Objections',
      'Skepticism',
      'Reasons for delay',
      'Trust requirements',
      'Perceived risks',
    ],
  },
  {
    number: '04',
    title: 'History',
    items: [
      'Failed alternatives',
      'Previous attempts',
      'Why alternatives failed',
      'What they dislike about existing solutions',
      'What they refuse to try again',
    ],
  },
  {
    number: '05',
    title: 'Buying Context',
    items: [
      'Trigger events',
      'Moment of urgency',
      'Comparison behavior',
      'Decision criteria',
      'Reason they finally buy',
    ],
  },
  {
    number: '06',
    title: 'Identity & Belief',
    items: [
      'Self-description',
      'Worldview',
      'Existing beliefs',
      'Category beliefs',
      'Language that signals identity',
    ],
  },
];

const vocCollectionRules = [
  'Capture exact wording before interpreting it',
  'Keep enough context to understand what the customer meant',
  'Separate one-off comments from repeated patterns',
  'Preserve contradictions instead of forcing consistency',
  'Record both positive and negative evidence',
  'Avoid rewriting customer language into marketing language during collection',
];

/*
|--------------------------------------------------------------------------
| MARKET + CATEGORY
|--------------------------------------------------------------------------
*/

const marketSources = [
  'Category leaders',
  'Emerging category brands',
  'Retailer category pages',
  'Amazon category listings',
  'Category reviews',
  'Google search results',
  'Search suggestions',
  'Google Trends when relevant',
  'Reddit and niche communities',
  'YouTube',
  'Industry publications',
  'Category newsletters',
  'Affiliate and review publishers',
  'Comparison sites',
  'Creator and expert content',
];

const marketDimensions = [
  {
    number: '01',
    title: 'Category Promises',
    items: [
      'Dominant outcomes being promised',
      'Common problem framing',
      'Common emotional promises',
      'Claims customers see repeatedly',
    ],
  },
  {
    number: '02',
    title: 'Mechanisms',
    items: [
      'Common product mechanisms',
      'Popular explanations',
      'New or emerging mechanisms',
      'Mechanisms that appear commoditized',
    ],
  },
  {
    number: '03',
    title: 'Customer Expectations',
    items: [
      'Expected proof',
      'Expected speed of result',
      'Expected guarantees',
      'Expected product experience',
    ],
  },
  {
    number: '04',
    title: 'Market Resistance',
    items: [
      'Category skepticism',
      'Trust barriers',
      'Common objections',
      'Bad historical experiences',
    ],
  },
  {
    number: '05',
    title: 'Offer Norms',
    items: [
      'Price range',
      'Bundles',
      'Discount conventions',
      'Subscriptions',
      'Guarantees',
      'Bonuses',
    ],
  },
  {
    number: '06',
    title: 'Saturation',
    items: [
      'Overused claims',
      'Repeated hooks',
      'Repeated visual devices',
      'Overused positioning',
      'Creative conventions',
    ],
  },
];

const marketQuestions = [
  'What does the customer already know about this category?',
  'What claims have they already heard dozens of times?',
  'What mechanisms do they understand or distrust?',
  'What level of proof do they now require?',
  'What does a normal offer look like in this market?',
  'Where has competition increased customer skepticism?',
  'Which promises still carry emotional power?',
  'Where could the brand communicate differently without becoming irrelevant?',
];

/*
|--------------------------------------------------------------------------
| COMPETITIVE LANDSCAPE
|--------------------------------------------------------------------------
*/

const competitorTypes = [
  {
    number: '01',
    label: 'DIRECT',
    title: 'Direct Competitors',
    definition: 'Same problem and the same or a very similar solution.',
    purpose:
      'They show me how brands competing most directly for the purchase position the product, explain the mechanism, prove the promise, structure the offer, and advertise.',
    signals: [
      'Positioning',
      'Core promise',
      'Mechanism',
      'Claims',
      'Proof',
      'Pricing',
      'Bundles',
      'Guarantees',
      'Dominant angles',
      'Creative patterns',
      'Customer praise',
      'Customer complaints',
    ],
  },
  {
    number: '02',
    label: 'INDIRECT',
    title: 'Indirect Competitors',
    definition: 'Same underlying problem, but a different type of solution.',
    purpose:
      'They show me the alternatives customers compare against us, why people choose a different mechanism, and what previous solutions have taught the market to believe.',
    signals: [
      'Alternative mechanisms',
      'Alternative promises',
      'Trade-offs',
      'Reasons customers choose them',
      'Reasons customers abandon them',
      'Price differences',
      'Convenience differences',
      'Perceived risk',
      'Failed-alternative language',
    ],
  },
  {
    number: '03',
    label: 'SAME AVATAR',
    title: 'Same-Avatar Competitors',
    definition:
      'Different products or categories competing for the attention and money of a very similar customer.',
    purpose:
      'They help me understand the broader identity, desires, aesthetics, creators, hooks, and offers that already resonate with the audience.',
    signals: [
      'Identity language',
      'Lifestyle aspirations',
      'Adjacent desires',
      'Creator archetypes',
      'Native hooks',
      'Visual aesthetics',
      'Content formats',
      'Community language',
      'Offer structures',
      'Trust devices',
    ],
  },
];

const competitorSources = [
  'Competitor websites',
  'Product pages',
  'Landing pages',
  'Advertorials',
  'Listicles',
  'Quizzes',
  'VSLs',
  'Meta Ad Library',
  'TikTok Creative Center / TikTok One Inspiration',
  'Google Ads Transparency Center',
  'YouTube',
  'Organic social accounts',
  'Email campaigns',
  'Reviews',
  'Affiliate publishers',
  'Comparison pages',
  'Creator partnership posts',
];

const competitorComparisonSignals = [
  'Who they target',
  'How they frame the problem',
  'Desired outcome',
  'Positioning',
  'Mechanism',
  'Proof strategy',
  'Objection handling',
  'Offer',
  'Price',
  'Guarantee',
  'Creative angles',
  'Creative formats',
  'Funnel structure',
  'Customer praise',
  'Customer complaints',
  'Saturated messages',
  'Whitespace opportunities',
];

/*
|--------------------------------------------------------------------------
| CREATIVE INTELLIGENCE
|--------------------------------------------------------------------------
*/

const creativeDiscoveryTools = [
  'Atria',
  'Foreplay',
  'TrendTrack',
  'GetHooked AI',
  'Meta Ad Library',
  'TikTok Creative Center / TikTok One Inspiration',
  'Google Ads Transparency Center',
  'YouTube',
  'TikTok organic',
  'Instagram Reels',
  'Competitor social accounts',
  'Creator partnership posts',
];

const creativeQualificationSignals = [
  'How long the creative appears to have been active',
  'How many variations exist',
  'Whether the same concept is repeatedly iterated',
  'Whether the concept appears across platforms',
  'Whether multiple creators execute the same idea',
  'Whether the brand has built a creative family around it',
  'Visible engagement and comment quality',
  'Landing-page destination',
  'Spend or performance data when genuinely available',
];

const creativeDeconstruction = [
  'Audience / Persona',
  'Awareness level',
  'Angle',
  'Core belief',
  'Concept',
  'Hook',
  'Opening visual',
  'Format',
  'Creator type',
  'Core argument',
  'Mechanism',
  'Proof device',
  'Objection handling',
  'Offer',
  'CTA',
  'Editing and pacing',
  'Visual device',
  'Landing-page destination',
];

const creativePatternQuestions = [
  'Which angles are repeatedly being tested?',
  'Which concepts are receiving multiple iterations?',
  'Which hooks repeatedly appear within winning-looking creative families?',
  'Which formats appear native to the market?',
  'Which proof devices are common?',
  'Which objections are competitors actively trying to overcome?',
  'Which creator archetypes repeatedly appear?',
  'Which execution patterns are saturated?',
  'Where are multiple brands converging on the same message?',
  'Where is there credible creative whitespace?',
];

/*
|--------------------------------------------------------------------------
| FUNNEL + OFFER + PERSUASION
|--------------------------------------------------------------------------
*/

const funnelSources = [
  'Product pages',
  'Dedicated landing pages',
  'Advertorials',
  'Listicles',
  'Quizzes',
  'Comparison pages',
  'VSLs',
  'Checkout flows',
  'Order bumps',
  'Post-purchase upsells',
  'Email follow-up',
  'Retargeting sequences',
  'Competitor funnels',
];

const funnelAuditDimensions = [
  {
    number: '01',
    title: 'Message Match',
    items: [
      'Does the page continue the ad promise?',
      'Does the customer encounter a sudden change in positioning?',
      'Is the same problem and desire carried forward?',
    ],
  },
  {
    number: '02',
    title: 'Education',
    items: [
      'How is the problem explained?',
      'How much does cold traffic need to learn?',
      'When is the mechanism introduced?',
      'When is the product revealed?',
    ],
  },
  {
    number: '03',
    title: 'Proof',
    items: [
      'Where proof appears',
      'What type of proof is used',
      'How proof escalates',
      'Whether proof matches the promise',
    ],
  },
  {
    number: '04',
    title: 'Objections',
    items: [
      'Which objections are handled?',
      'When they are handled',
      'Which objections remain unanswered',
      'How risk is reduced',
    ],
  },
  {
    number: '05',
    title: 'Offer',
    items: [
      'Price anchoring',
      'Bundles',
      'Discounts',
      'Guarantee',
      'Subscription',
      'Bonuses',
      'Urgency',
    ],
  },
  {
    number: '06',
    title: 'Friction',
    items: [
      'CTA clarity',
      'Page complexity',
      'Checkout friction',
      'Unexpected costs',
      'Confusing options',
      'Trust gaps',
    ],
  },
];

const funnelJourney = [
  'Ad',
  'Landing Destination',
  'Lead',
  'Problem',
  'Education',
  'Mechanism',
  'Product',
  'Proof',
  'Objections',
  'Offer',
  'Guarantee',
  'Checkout',
  'Upsell',
  'Follow-up',
];

/*
|--------------------------------------------------------------------------
| SOCIAL + CREATOR + TRENDS
|--------------------------------------------------------------------------
*/

const creatorTypes = [
  'Niche creators',
  'Customer creators',
  'Review creators',
  'Educators',
  'Experts',
  'Founders',
  'Lifestyle creators',
  'Adjacent-category creators',
  'Podcast hosts',
  'Community voices',
];

const nativeContentSignals = [
  'Opening lines',
  'First frames',
  'Native visual hooks',
  'Storytelling structures',
  'Demonstrations',
  'Creator delivery style',
  'Pacing',
  'Editing',
  'On-screen text',
  'Captions',
  'Recurring questions',
  'Comment language',
  'Saves and shares when visible',
  'Problem-state imagery',
  'Desired-outcome imagery',
  'Formats that feel native rather than advertised',
];

const trendSignals = [
  'Emerging customer language',
  'Recurring category conversations',
  'New creator formats',
  'Popular demonstrations',
  'Search-interest shifts',
  'New objections',
  'New product conversations',
  'Relevant memes or cultural references',
  'Changes in aesthetic language',
  'New education styles',
  'New creator archetypes',
];

const trendQualification = [
  'Relevant to the customer',
  'Relevant to the problem',
  'Relevant to the desired outcome',
  'Relevant to the product',
  'Relevant to the category',
  'Compatible with the brand',
  'Usable without forcing the connection',
];

/*
|--------------------------------------------------------------------------
| CAPTURE + VERIFICATION + EXIT
|--------------------------------------------------------------------------
*/

const captureFields = [
  'Exact quote or observation',
  'Source',
  'URL',
  'Screenshot when useful',
  'Date collected',
  'Context',
  'Research category',
  'Relevant customer / product / competitor',
  'Fact, customer belief, or interpretation',
  'Verification status',
];

const verificationStates = [
  'Verified fact',
  'Customer-reported experience',
  'Repeated pattern',
  'Needs verification',
  'Interpretation / hypothesis',
  'Contradictory evidence',
  'Duplicate / archived',
];

const antiBiasRules = [
  'Do not only collect evidence that supports the initial hypothesis',
  'Preserve contradictory evidence',
  'Separate frequency from emotional intensity',
  'Separate public creative signals from proven performance',
  'Separate customer belief from objective product truth',
  'Do not turn one compelling quote into a market-wide conclusion',
  'Record uncertainty instead of hiding it',
];

const exitCriteria = [
  'Major research questions have evidence behind them',
  'Important customer pains and desires repeat across sources',
  'Major objections and trust requirements are represented',
  'Product truth and claim boundaries are clear',
  'Market conventions and saturation are understood',
  'Direct, indirect, and same-avatar competition is mapped',
  'Enough creative references exist to identify recurring patterns',
  'The major funnel and offer environment is understood',
  'Relevant social and cultural signals have been captured',
  'Contradictions and unanswered questions are documented',
  'Every important finding is traceable to a source',
];

const researchOutputs = [
  'Source-backed customer evidence',
  'Product-truth evidence',
  'Internal brand and historical evidence',
  'Market and category evidence',
  'Competitive landscape map',
  'Creative reference library',
  'Funnel and offer intelligence',
  'Organic social and trend intelligence',
  'Documented contradictions and open questions',
  'Traceable evidence ready for Insight Synthesis',
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function EvidencePair({
  sourceTitle = 'Where I Look',
  signalTitle = 'What I Extract',
  sources,
  signals,
  className = '',
}) {
  return (
    <div className={`research-practical-pair ${className}`}>
      <article className="research-practical-panel is-sources">
        <header>
          <span>SOURCES</span>
          <h3>{sourceTitle}</h3>
        </header>

        <StageList items={sources} />
      </article>

      <article className="research-practical-panel is-signals">
        <header>
          <span>EVIDENCE</span>
          <h3>{signalTitle}</h3>
        </header>

        <StageList items={signals} />
      </article>
    </div>
  );
}

function ToolCloud({ tools }) {
  return (
    <div className="research-tool-cloud">
      {tools.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </div>
  );
}

function IntelligenceCard({
  number,
  title,
  description,
  items,
  className = '',
}) {
  return (
    <article className={`research-intelligence-card ${className}`}>
      <header>
        <span>{number}</span>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </header>

      {items && <StageList items={items} />}
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function Research({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="MARKET INTELLIGENCE"
      title="Research"
      introduction="Business Context defines what the business needs and what questions matter. Research goes into the evidence: customer language, product truth, internal knowledge, market structure, competition, creative, funnels, social behavior, and culture."
      process={[
        'Research Questions',
        'Internal Evidence',
        'External Evidence',
        'Pattern Coverage',
        'Verification',
        'Insight Synthesis',
      ]}
    >
      {/* ================================================================
          01 — RESEARCH DIRECTION
         ================================================================ */}

      <StageSection
        number="01"
        navTitle="Research Direction"
        title="Business Context → Research Questions"
        description="I do not restart from zero. Business Context already established the commercial situation and highest-value questions. Research begins by deciding what still needs evidence."
      >
        <div className="research-context-bridge">
          <article className="research-context-established">
            <header>
              <span>ALREADY ESTABLISHED</span>
              <h3>What Business Context already gave me.</h3>
            </header>

            <StageList items={alreadyEstablished} />
          </article>

          <div
            className="research-context-bridge-arrow"
            aria-hidden="true"
          >
            →
          </div>

          <article className="research-context-questions">
            <header>
              <span>NOW INVESTIGATE</span>
              <h3>Turn uncertainty into research questions.</h3>
            </header>

            <StageList items={researchQuestionExamples} />
          </article>
        </div>

        <div className="research-priority-types">
          {researchPriorityTypes.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <StageHighlight
          title="Research Principle"
          type="success"
        >
          <p>
            I do not research everything with equal depth. The business
            problem determines which questions deserve the most attention,
            which sources matter, and how deep I need to go.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          02 — INTERNAL EVIDENCE
         ================================================================ */}

      <StageSection
        number="02"
        navTitle="Internal Evidence"
        title="Internal Brand & First-Party Evidence"
        description="Business Context inventoried what information exists internally. Research now opens those sources and extracts what they actually tell me."
      >
        <div className="research-internal-grid">
          <IntelligenceCard
            number="01"
            title="Product Truth"
            description="Establish what the product can credibly say before building messaging around it."
            items={productTruthSignals}
            className="is-product"
          />

          <IntelligenceCard
            number="02"
            title="Customer Reality"
            description="Use first-party evidence to understand what customers actually experienced."
            items={customerRealitySignals}
            className="is-customer"
          />

          <IntelligenceCard
            number="03"
            title="Historical Learning"
            description="Extract useful learning from the work the brand has already done."
            items={historicalLearningSignals}
            className="is-history"
          />

          <IntelligenceCard
            number="04"
            title="Brand Narrative"
            description="Find stories, language, beliefs, and authority that the brand can legitimately own."
            items={brandNarrativeSignals}
            className="is-brand"
          />
        </div>

        <div className="research-internal-source-map">
          <article>
            <span>PRODUCT TRUTH SOURCES</span>
            <ToolCloud tools={productTruthSources} />
          </article>

          <article>
            <span>CUSTOMER REALITY SOURCES</span>
            <ToolCloud tools={customerRealitySources} />
          </article>

          <article>
            <span>HISTORICAL SOURCES</span>
            <ToolCloud tools={historicalLearningSources} />
          </article>

          <article>
            <span>BRAND NARRATIVE SOURCES</span>
            <ToolCloud tools={brandNarrativeSources} />
          </article>
        </div>

        <StageHighlight
          title="Important Distinction"
          type="warning"
        >
          <p>
            Internal documents tell me what the business currently believes
            and knows. I still separate verified product truth, customer
            evidence, historical interpretation, and internal assumptions.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          03 — CUSTOMER + VOC
         ================================================================ */}

      <StageSection
        number="03"
        navTitle="Customer & VOC"
        title="Customer & Voice-of-Customer Research"
        description="I go where customers describe the problem in their own words, compare solutions, complain, ask questions, explain failed attempts, and describe why they finally bought."
      >
        <div className="research-voc-source-panel">
          <header>
            <span>WHERE I LISTEN</span>
            <h3>Customer language exists across multiple environments.</h3>
          </header>

          <ToolCloud tools={customerSources} />
        </div>

        <div className="research-voc-grid">
          {vocCaptureTypes.map((group) => (
            <IntelligenceCard
              key={group.number}
              number={group.number}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>

        <div className="research-voc-method">
          <div>
            <span>COLLECTION</span>
            <strong>Exact Customer Language</strong>
          </div>

          <i>→</i>

          <div>
            <span>CONTEXT</span>
            <strong>What Was Happening?</strong>
          </div>

          <i>→</i>

          <div>
            <span>CLASSIFICATION</span>
            <strong>What Type of Evidence?</strong>
          </div>

          <i>→</i>

          <div>
            <span>NEXT STAGE</span>
            <strong>Interpret Later</strong>
          </div>
        </div>

        <StageHighlight
          title="Voice-of-Customer Collection Rules"
          type="success"
        >
          <StageList items={vocCollectionRules} />
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          04 — MARKET + CATEGORY
         ================================================================ */}

      <StageSection
        number="04"
        navTitle="Market & Category"
        title="Market & Category Intelligence"
        description="Before deciding how to differentiate, I understand what the category has already taught the customer to expect, believe, distrust, and compare."
      >
        <div className="research-market-source-panel">
          <header>
            <span>MARKET SOURCES</span>
            <h3>Understand the environment around the product.</h3>
          </header>

          <ToolCloud tools={marketSources} />
        </div>

        <div className="research-market-grid">
          {marketDimensions.map((group) => (
            <IntelligenceCard
              key={group.number}
              number={group.number}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>

        <article className="research-market-questions">
          <header>
            <span>QUESTIONS I WANT ANSWERED</span>
            <h3>What has the market already conditioned customers to expect?</h3>
          </header>

          <StageList items={marketQuestions} />
        </article>

        <StageHighlight title="Why This Matters">
          <p>
            A claim can be strong in isolation and still perform poorly if
            customers have already heard it from every competitor. Market
            research helps me understand awareness, sophistication,
            skepticism, conventions, and saturation before I develop angles.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          05 — COMPETITIVE LANDSCAPE
         ================================================================ */}

      <StageSection
        number="05"
        navTitle="Competitive Landscape"
        title="Competitive Landscape"
        description="I define competition broadly enough to understand what customers compare, what alternatives they consider, and what other brands already influence the same audience."
      >
        <div className="research-competitor-universe">
          {competitorTypes.map((competitor) => (
            <article
              className="research-competitor-card"
              key={competitor.number}
            >
              <header>
                <span>{competitor.label}</span>
                <h3>{competitor.title}</h3>
                <p>{competitor.definition}</p>
              </header>

              <div className="research-competitor-purpose">
                <span>WHY I STUDY THEM</span>
                <p>{competitor.purpose}</p>
              </div>

              <div className="research-competitor-signals">
                {competitor.signals.map((signal) => (
                  <strong key={signal}>{signal}</strong>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="research-competitor-lower-grid">
          <article className="research-competitor-sources">
            <header>
              <span>WHERE I INVESTIGATE</span>
              <h3>Competitor Intelligence Sources</h3>
            </header>

            <ToolCloud tools={competitorSources} />
          </article>

          <article className="research-competitor-comparison">
            <header>
              <span>COMPARISON FRAMEWORK</span>
              <h3>Compare the strategy, not just the website.</h3>
            </header>

            <StageList items={competitorComparisonSignals} />
          </article>
        </div>

        <StageHighlight
          title="Competitive Research Principle"
          type="warning"
        >
          <p>
            The goal is not to copy competitors. I want to understand what
            customers are repeatedly exposed to, where the market is
            converging, which expectations competitors have created, and
            where credible differentiation may exist.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          06 — CREATIVE INTELLIGENCE
         ================================================================ */}

      <StageSection
        number="06"
        navTitle="Creative Intelligence"
        title="Creative Intelligence"
        description="I use ad libraries, creative-intelligence tools, organic platforms, and competitor accounts to discover patterns, then qualify and deconstruct what I find."
      >
        <div className="research-creative-discovery">
          <article className="research-creative-tools">
            <header>
              <span>01 — DISCOVER</span>
              <h3>Creative Intelligence Stack</h3>
              <p>
                No single swipe tool shows the whole market. I combine
                libraries, intelligence tools, competitor accounts,
                organic platforms, and creator content.
              </p>
            </header>

            <ToolCloud tools={creativeDiscoveryTools} />
          </article>

          <article className="research-creative-qualification">
            <header>
              <span>02 — QUALIFY</span>
              <h3>How Strong Is the Signal?</h3>
              <p>
                Before learning from a creative, I ask how much evidence
                actually exists that the market or brand is investing in it.
              </p>
            </header>

            <StageList items={creativeQualificationSignals} />
          </article>
        </div>

        <article className="research-creative-deconstruct">
          <header>
            <span>03 — DECONSTRUCT</span>
            <h3>Separate Strategy From Execution</h3>
          </header>

          <div className="research-deconstruct-flow">
            {[
              'Persona',
              'Angle',
              'Belief',
              'Concept',
              'Hook',
              'Format',
              'Execution',
            ].map((item, index, items) => (
              <div key={item}>
                <strong>{item}</strong>
                {index < items.length - 1 && <i>→</i>}
              </div>
            ))}
          </div>

          <div className="research-deconstruction-grid">
            {creativeDeconstruction.map((item, index) => (
              <div key={item}>
                <strong>
                  {String(index + 1).padStart(2, '0')}
                </strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="research-creative-patterns">
          <header>
            <span>04 — FIND PATTERNS</span>
            <h3>Look across ads, not only at individual ads.</h3>
          </header>

          <StageList items={creativePatternQuestions} />
        </article>

        <StageHighlight
          title="Interpretation Rule"
          type="warning"
        >
          <p>
            A long-running ad, repeated creative, or large family of
            variations is useful evidence of brand investment and market
            activity. It is not automatic proof of profitability unless
            actual performance data is available.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          07 — FUNNEL + OFFER + PERSUASION
         ================================================================ */}

      <StageSection
        number="07"
        navTitle="Funnel & Offer"
        title="Funnel, Offer & Persuasion Research"
        description="Creative does not end at the click. I follow the customer through the destination and study how the argument, education, proof, objections, and offer continue."
      >
        <div className="research-funnel-sources">
          <header>
            <span>WHERE I FOLLOW THE CUSTOMER</span>
            <h3>Study the complete persuasion environment.</h3>
          </header>

          <ToolCloud tools={funnelSources} />
        </div>

        <div className="research-funnel-journey">
          <StageFlow items={funnelJourney} />
        </div>

        <div className="research-funnel-audit-grid">
          {funnelAuditDimensions.map((group) => (
            <IntelligenceCard
              key={group.number}
              number={group.number}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>

        <StageHighlight title="The Question Behind the Audit">
          <p>
            If an ad creates interest but the customer does not convert,
            I want to know whether the issue is the creative itself or
            whether the destination fails to continue the promise, provide
            enough education, establish trust, resolve objections, or make
            the offer compelling.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          08 — ORGANIC SOCIAL + CREATORS + TRENDS
         ================================================================ */}

      <StageSection
        number="08"
        navTitle="Social & Trends"
        title="Organic Social, Creators & Trend Intelligence"
        description="This is not competitor spying. I use organic platforms to understand how the audience behaves in native environments, who influences them, what catches attention, and which relevant conversations are emerging."
      >
        <div className="research-social-system">
          <article className="research-social-column">
            <header>
              <span>01</span>
              <h3>Creators</h3>
              <p>
                Who already has the attention or trust of this audience?
              </p>
            </header>

            <ToolCloud tools={creatorTypes} />
          </article>

          <article className="research-social-column">
            <header>
              <span>02</span>
              <h3>Native Content</h3>
              <p>
                How does content naturally earn attention in the category?
              </p>
            </header>

            <StageList items={nativeContentSignals} />
          </article>

          <article className="research-social-column">
            <header>
              <span>03</span>
              <h3>Emerging Trends</h3>
              <p>
                What language, formats, conversations, or behaviors are
                beginning to appear repeatedly?
              </p>
            </header>

            <StageList items={trendSignals} />
          </article>
        </div>

        <article className="research-trend-filter">
          <header>
            <span>TREND QUALIFICATION</span>
            <h3>Virality alone is not strategic relevance.</h3>
          </header>

          <div>
            {trendQualification.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </article>

        <StageHighlight title="Trend Standard">
          <p>
            I use a trend only when there is a natural connection to the
            customer, problem, desired outcome, product, category, or brand.
            Forcing an irrelevant viral format into creative usually creates
            novelty without strategic value.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          09 — CAPTURE + VERIFICATION + EXIT
         ================================================================ */}

      <StageSection
        number="09"
        navTitle="Capture & Exit"
        title="Research Capture, Verification & Exit Criteria"
        description="Research is only useful if I can trace the evidence, separate fact from interpretation, preserve contradictions, and know when I have enough information to move forward."
      >
        <div className="research-capture-system">
          <article className="research-capture-record">
            <header>
              <span>RESEARCH RECORD</span>
              <h3>Every important finding keeps its source and context.</h3>
            </header>

            <div className="research-record-fields">
              {captureFields.map((field, index) => (
                <div key={field}>
                  <strong>
                    {String(index + 1).padStart(2, '0')}
                  </strong>
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="research-verification-panel">
            <header>
              <span>STATUS</span>
              <h3>Verification</h3>
            </header>

            <StageList items={verificationStates} />
          </article>
        </div>

        <div className="research-quality-grid">
          <article className="research-bias-panel">
            <header>
              <span>ANTI-BIAS</span>
              <h3>Research should challenge the hypothesis too.</h3>
            </header>

            <StageList items={antiBiasRules} />
          </article>

          <article className="research-exit-panel">
            <header>
              <span>EXIT CRITERIA</span>
              <h3>How I Know I Have Enough</h3>
            </header>

            <StageList items={exitCriteria} />
          </article>
        </div>

        <div className="research-final-transition">
          <div>
            <span>RESEARCH OUTPUT</span>
            <h3>Evidence ready to become insight.</h3>
            <p>
              Research does not end with finished angles or personas.
              It ends with sufficiently broad, traceable, organized,
              and verified evidence that Insight Synthesis can interpret.
            </p>
          </div>

          <div className="research-output-list">
            {researchOutputs.map((item, index) => (
              <div key={item}>
                <strong>
                  {String(index + 1).padStart(2, '0')}
                </strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="research-to-insights">
          <strong>Business Questions</strong>
          <span>→</span>
          <strong>Research Evidence</strong>
          <span>→</span>
          <strong>Insight Synthesis</strong>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}