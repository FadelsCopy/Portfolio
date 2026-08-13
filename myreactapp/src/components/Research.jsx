// src/components/Research.jsx

import StageDeepDiveLayout, {
  StageFlow,
  StageHighlight,
  StageList,
  StageSection,
} from './StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| PRACTICAL RESEARCH ENGINE DATA
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
  'Quora and niche forums',
  'Customer interviews',
  'Surveys and post-purchase surveys',
  'Support tickets and live chat',
  'Refund, return, and cancellation responses',
  'Competitor reviews',
];

const customerSignals = [
  'Exact customer language',
  'Pain points and frustrations',
  'Desired outcomes',
  'Emotional desires',
  'Objections and skepticism',
  'Failed alternatives',
  'Buying triggers',
  'Reasons for delaying purchase',
  'Trust requirements',
  'Questions customers repeatedly ask',
  'Before-and-after states',
  'Identity and lifestyle language',
  'Unexpected product benefits',
  'Reasons customers refund or stop using a solution',
];

const productBrandSources = [
  'Brand website and homepage',
  'Product pages and FAQs',
  'Landing pages',
  'Advertorials and listicles',
  'Email and SMS campaigns',
  'Founder interviews and podcasts',
  'Founder / brand organic content',
  'Product documentation',
  'Packaging and inserts',
  'Scientific or technical support',
  'Testimonials and demonstrations',
  'Existing creative briefs',
  'Previous research and internal marketing documents',
];

const productBrandSignals = [
  'Core promise and positioning',
  'Product mechanism',
  'Verified product facts',
  'Features and functional benefits',
  'Emotional benefits and desired outcomes',
  'Claims and level of support',
  'Proof and trust assets',
  'Guarantees and risk reversal',
  'Main use cases',
  'Product limitations',
  'Differentiators',
  'Underused founder, customer, or product stories',
  'Repeated messages across the brand',
  'Restricted claims or compliance boundaries',
];

const competitorSources = [
  'Competitor websites and product pages',
  'Competitor landing pages and funnels',
  'Competitor reviews',
  'Meta Ad Library',
  'TikTok Creative Center / TikTok One Inspiration',
  'Google Ads Transparency Center',
  'YouTube ads and organic content',
  'Competitor email campaigns',
  'Competitor organic social',
  'Affiliate, comparison, and review publishers',
  'Direct competitors',
  'Indirect alternatives',
  'Same-avatar brands',
];

const competitorSignals = [
  'Positioning',
  'Core promises',
  'Problem and desire framing',
  'Mechanisms',
  'Claims and proof',
  'Objection handling',
  'Pricing, bundles, guarantees, and offers',
  'Dominant angles',
  'Repeated creative concepts',
  'Category conventions',
  'Customer praise and complaints',
  'Saturated promises',
  'Overused creative styles',
  'Credible differentiation opportunities',
  'Market skepticism and trust barriers',
];

const creativeTools = [
  'Aetheria',
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

const creativeSignals = [
  'Angle',
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
  'Comments and customer reaction',
  'Repeated variations and creative families',
];

const funnelSources = [
  'Product pages',
  'Dedicated landing pages',
  'Advertorials',
  'Listicles',
  'Quizzes',
  'Comparison pages',
  'VSLs',
  'Checkout flows',
  'Post-purchase upsells',
  'Email follow-up',
  'Retargeting sequences',
  'Competitor funnels',
];

const funnelSignals = [
  'Entry angle',
  'Headline and lead',
  'Problem framing',
  'Story',
  'Mechanism explanation',
  'Product reveal',
  'Proof sequence',
  'Objection handling',
  'Offer presentation',
  'Guarantee',
  'CTA placement',
  'Message match from ad to destination',
  'How much education cold traffic receives',
];

const socialSources = [
  'TikTok',
  'Instagram Reels',
  'YouTube Shorts',
  'Reddit',
  'Creator accounts',
  'Founder accounts',
  'Competitor organic accounts',
  'Niche educators',
  'Review creators',
  'Podcast clips',
  'Product demonstrations',
  'Trending search and social topics',
];

const socialSignals = [
  'Opening lines and first frames',
  'Native visual hooks',
  'Recurring questions',
  'Controversial opinions',
  'Demonstrations',
  'Customer stories',
  'Creator delivery style',
  'Pacing and editing patterns',
  'On-screen text and captions',
  'Comments, saves, and shares',
  'Recurring topics',
  'Emerging customer language',
  'Native problem-state and desired-outcome imagery',
  'New creator formats',
  'Relevant category or cultural trends',
];

const firstPartySources = [
  'Customer reviews',
  'Post-purchase surveys',
  'Customer interviews',
  'Support tickets',
  'Live chats',
  'Email conversations',
  'Refund requests',
  'Return reasons',
  'Cancellation surveys',
  'Guarantee claims',
  'Quiz responses',
  'Sales calls',
  'Testimonial interviews',
  'Subscription and repeat-purchase data',
  'Existing ad performance',
  'Landing-page performance',
];

const firstPartySignals = [
  'Why customers buy',
  'Why customers hesitate',
  'Why customers refund',
  'Expectation gaps',
  'Repeated questions',
  'Product confusion',
  'Common complaints',
  'Unexpected benefits',
  'Strongest testimonials',
  'High-value customer groups',
  'Repeat-purchase patterns',
  'Differences between intended and actual customers',
  'Messages linked to strong or weak performance',
];

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
  'Duplicate / archived',
];

const researchOutputs = [
  'Source-backed customer and Voice-of-Customer evidence',
  'Product and brand evidence',
  'Competitor and market evidence',
  'Creative and funnel references',
  'Social, native, and trend observations',
  'First-party evidence',
  'Traceable research records ready for Insight Synthesis',
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function ResearchPair({
  sourceTitle = 'Where I Look',
  signalTitle = 'What I Look For',
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
          <span>SIGNALS</span>
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
      introduction="I collect source-backed evidence across customers, the product, competitors, creative, funnels, social platforms, and first-party data. The goal here is simple: know where to look, know what to look for, preserve the original context, and hand clean evidence into Insight Synthesis."
      process={[
        'Define Sources',
        'Collect Evidence',
        'Preserve Context',
        'Verify',
        'Move to Insight Synthesis',
      ]}
    >
      {/* ================================================================
          01 — CUSTOMER + VOC
         ================================================================ */}

      <StageSection
        number="01"
        navTitle="Customer & VOC"
        title="Customer & Voice-of-Customer Research"
        description="If I want to know how customers actually think and speak, I go where they describe the problem, compare solutions, complain, ask questions, and explain why they bought."
      >
        <ResearchPair
          sources={customerSources}
          signals={customerSignals}
        />

        <StageHighlight
          title="How I Get Customer Voice"
          type="success"
        >
          <p>
            I collect exact customer language from places such as Reddit,
            Trustpilot, Amazon and retailer reviews, YouTube comments,
            TikTok and Instagram comments, surveys, interviews, support
            conversations, refund reasons, and competitor reviews. I keep
            the original wording and its context instead of paraphrasing it
            during collection.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          02 — PRODUCT + BRAND
         ================================================================ */}

      <StageSection
        number="02"
        navTitle="Product & Brand"
        title="Product & Brand Research"
        description="I research what the product can credibly say, what the brand already owns, and which useful facts, proof, stories, and messages already exist internally."
      >
        <ResearchPair
          sources={productBrandSources}
          signals={productBrandSignals}
        />

        <StageHighlight
          title="Evidence Rule"
          type="warning"
        >
          <p>
            I separate verified product facts and supported claims from
            customer-reported experiences, brand interpretations, and ideas
            that still require verification.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          03 — COMPETITOR + MARKET
         ================================================================ */}

      <StageSection
        number="03"
        navTitle="Competitors & Market"
        title="Competitor & Market Research"
        description="I look beyond direct competitors. I also study alternative solutions and brands speaking to the same avatar so I can understand the full messaging environment the customer is exposed to."
      >
        <ResearchPair
          sources={competitorSources}
          signals={competitorSignals}
        />

        <div className="research-competitor-types">
          <div>
            <span>DIRECT</span>
            <strong>Same / similar solution</strong>
          </div>

          <div>
            <span>INDIRECT</span>
            <strong>Different solution to the same problem</strong>
          </div>

          <div>
            <span>SAME AVATAR</span>
            <strong>Different product, similar customer</strong>
          </div>
        </div>
      </StageSection>

      {/* ================================================================
          04 — CREATIVE RESEARCH
         ================================================================ */}

      <StageSection
        number="04"
        navTitle="Creative Research"
        title="Creative Research"
        description="I use ad libraries, creative-intelligence platforms, organic feeds, and competitor accounts to see what is being tested, repeated, expanded, and reacted to in the market."
      >
        <div className="research-creative-stack">
          <article className="research-creative-tools">
            <header>
              <span>WHERE I RESEARCH CREATIVE</span>
              <h3>Creative Intelligence Stack</h3>
              <p>
                I do not depend on one swipe tool. Different sources expose
                different ads, trends, formats, comments, and creative
                patterns.
              </p>
            </header>

            <ToolCloud tools={creativeTools} />
          </article>

          <article className="research-creative-deconstruct">
            <header>
              <span>WHAT I DECONSTRUCT</span>
              <h3>Separate Strategy From Execution</h3>
            </header>

            <div className="research-deconstruct-flow">
              {[
                'Angle',
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

            <StageList items={creativeSignals} />
          </article>
        </div>

        <StageHighlight
          title="Interpretation Rule"
          type="warning"
        >
          <p>
            A long-running or heavily repeated ad is a useful market signal,
            not automatic proof that the ad is profitable. I treat public
            ad-library evidence as directional unless performance data is
            actually available.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          05 — FUNNEL + PERSUASION
         ================================================================ */}

      <StageSection
        number="05"
        navTitle="Funnel & Persuasion"
        title="Funnel & Persuasion Research"
        description="I follow the creative beyond the ad and study how the promise is continued through product pages, landing pages, advertorials, listicles, quizzes, VSLs, and offers."
      >
        <ResearchPair
          sources={funnelSources}
          signals={funnelSignals}
        />

        <div className="research-funnel-line">
          <StageFlow
            items={[
              'Ad',
              'Entry Angle',
              'Lead',
              'Mechanism',
              'Proof',
              'Offer',
              'CTA',
            ]}
          />
        </div>
      </StageSection>

      {/* ================================================================
          06 — SOCIAL + NATIVE + TRENDS
         ================================================================ */}

      <StageSection
        number="06"
        navTitle="Social & Trends"
        title="Social, Native & Trend Research"
        description="I use organic platforms to see how the category behaves outside polished sales pages: how people talk, what catches attention, what visuals feel native, and which relevant topics are emerging."
      >
        <ResearchPair
          sources={socialSources}
          signals={socialSignals}
        />

        <StageHighlight title="Trend Standard">
          <p>
            I only treat a trend as strategically relevant when it connects
            naturally to the customer, product, problem, desired outcome, or
            category. Random virality is not research value by itself.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          07 — FIRST-PARTY + CAPTURE
         ================================================================ */}

      <StageSection
        number="07"
        navTitle="First-Party & Capture"
        title="First-Party Evidence & Research Capture"
        description="I finish by combining direct brand evidence with a traceable capture system so every useful finding can be checked later instead of becoming an unattributed note."
      >
        <ResearchPair
          sourceTitle="First-Party Sources"
          signalTitle="What I Look For"
          sources={firstPartySources}
          signals={firstPartySignals}
          className="is-first-party"
        />

        <div className="research-capture-system">
          <article className="research-capture-record">
            <header>
              <span>RESEARCH RECORD</span>
              <h3>Every useful finding keeps its source and context.</h3>
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

        <div className="research-final-transition">
          <div>
            <span>RESEARCH OUTPUT</span>
            <h3>Clean evidence, not finished insights.</h3>
            <p>
              Research ends when the evidence is sufficiently broad,
              traceable, organized, and verified for the next stage.
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
          <strong>Research</strong>
          <span>→</span>
          <strong>Insight Synthesis</strong>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}