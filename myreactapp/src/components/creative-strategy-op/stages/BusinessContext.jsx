// src/components/BusinessContext.jsx

import StageDeepDiveLayout, {
  StageHighlight,
  StageList,
  StageSection,
} from '../shared/StageDeepDiveLayout';

const businessGoals = [
  'Revenue / growth target',
  'Profitability target',
  'CPA or ROAS improvement',
  'Scale an existing product',
  'Launch a new product',
  'Expand into a new audience or market',
  'Increase creative testing velocity',
];

const creativeProblems = [
  'Winner fatigue',
  'Dependence on one angle or concept',
  'Strong attention but weak conversion',
  'Weak hooks or poor retention',
  'Too many iterations and too few net-new concepts',
  'Insufficient proof or differentiation',
  'Slow production / testing velocity',
];

const acquisitionEconomics = [
  'Target CPA',
  'Break-even CPA',
  'Blended CAC',
  'New-customer CAC',
  'Target ROAS',
  'Break-even ROAS',
  'MER',
  'Conversion rate',
  'CPM',
  'CPC',
  'CTR / Outbound CTR',
];

const profitabilityEconomics = [
  'AOV',
  'COGS',
  'Gross margin',
  'Contribution margin',
  'Contribution profit per order',
  'Discount impact',
  'Shipping / fulfillment cost',
  'Refund rate',
];

const businessHealthEconomics = [
  'LTV',
  'LTV : CAC',
  'Payback period',
  'Repeat-purchase rate',
  'Subscription rate',
  'Retention / churn when relevant',
];

const creativeHistory = [
  'Current high-spend winners',
  'Historical winners',
  'Fatigued creatives',
  'Clear losing concepts',
  'Inconclusive tests',
  'Winning hooks',
  'Winning angles',
  'Winning formats',
  'Winning creators',
  'Winning offers',
];

const portfolioSignals = [
  'Spend concentration by angle',
  'Spend concentration by product',
  'Spend concentration by creator',
  'Spend concentration by format',
  'Balance of net-new concepts vs iterations',
  'Current winner families',
  'Creative fatigue exposure',
  'Untested whitespace',
];

const funnelAssets = [
  'Product pages',
  'Dedicated landing pages',
  'Advertorials',
  'Listicles',
  'Quiz funnels',
  'Checkout / upsell flow',
  'Email sequences',
  'Offer pages',
];

const brandIntelligenceGroups = [
  {
    number: '01',
    title: 'Customer Evidence',
    items: [
      'Customer surveys',
      'Reviews and support tickets',
      'Post-purchase feedback',
      'Retention / subscription data',
      'Existing customer segmentation',
    ],
  },
  {
    number: '02',
    title: 'Brand & Product',
    items: [
      'Brand positioning documents',
      'Product documentation',
      'Claims and proof',
      'Offer history',
      'Previous research',
    ],
  },
  {
    number: '03',
    title: 'Founder / Sales Knowledge',
    items: [
      'Founder interviews',
      'Sales calls',
      'Customer-service knowledge',
      'Internal team interviews',
      'Frequently asked questions',
    ],
  },
  {
    number: '04',
    title: 'Marketing History',
    items: [
      'Past ads and scripts',
      'Advertorials and landing pages',
      'Emails',
      'Creative briefs',
      'Previous testing reports',
    ],
  },
];

const operatingConstraints = [
  'Restricted claims and compliance requirements',
  'Platform policy limitations',
  'Brand non-negotiables',
  'Inventory / product availability',
  'Geographic and shipping restrictions',
  'Production budget',
  'Creator availability',
  'Editing / design capacity',
  'Approval speed',
  'Promotional deadlines',
];

const researchQuestions = [
  'Which customer problems have the strongest emotional intensity?',
  'Which desires or outcomes are currently underused?',
  'Why do customers choose this product over alternatives?',
  'Which objections are preventing conversion?',
  'Which competitor messages have become saturated?',
  'Where is there meaningful positioning or creative whitespace?',
  'Which personas or use cases deserve deeper investigation?',
  'Which proof, mechanism, offer, or belief requires stronger evidence?',
];

const finalOutputs = [
  'Clear business objective',
  'Defined creative problem',
  'Commercial acquisition guardrails',
  'Historical creative-performance baseline',
  'Current portfolio risks',
  'Existing brand-intelligence inventory',
  'Operating constraints',
  'Prioritized research questions',
];

function EconomicsGroup({ label, title, items }) {
  return (
    <article className="business-context-economics-group">
      <header>
        <span>{label}</span>
        <h3>{title}</h3>
      </header>

      <div className="business-context-metric-list">
        {items.map((item) => (
          <div className="business-context-metric" key={item}>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

function IntelligenceGroup({ number, title, items }) {
  return (
    <article className="business-context-intelligence-card">
      <header>
        <span>{number}</span>
        <h3>{title}</h3>
      </header>

      <StageList items={items} />
    </article>
  );
}

export default function BusinessContext({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="FOUNDATION & COMMERCIAL REALITY"
      title="Business Context"
      introduction="Before making creative decisions, I understand what the business is trying to achieve, what the economics allow, what has already been proven, and what problem creative actually needs to solve."
      process={[
        'Business Goal',
        'Economics',
        'Existing Evidence',
        'Creative Problem',
        'Research Priorities',
      ]}
    >
      <StageSection
        number="01"
        navTitle="Objective & Problem"
        title="Business Objective → Creative Problem"
        description="Start with the commercial objective, then diagnose the specific creative problem standing between the business and that objective."
      >
        <div className="business-context-diagnosis">
          <article className="business-context-diagnosis-card">
            <span>BUSINESS GOAL</span>
            <h3>What is the business actually trying to accomplish?</h3>
            <StageList items={businessGoals} />
          </article>

          <div className="business-context-diagnosis-arrow" aria-hidden="true">→</div>

          <article className="business-context-diagnosis-card is-problem">
            <span>CREATIVE PROBLEM</span>
            <h3>What is preventing creative from supporting that goal?</h3>
            <StageList items={creativeProblems} />
          </article>
        </div>

        <StageHighlight title="Primary Output" type="success">
          <p>
            One clear creative mandate: what creative needs to improve,
            why it matters commercially, and what evidence shows this is
            the right problem to solve.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Unit Economics"
        title="Unit Economics"
        description="These numbers define what a commercially acceptable result looks like and how much room the business has to test and scale."
      >
        <div className="business-context-economics-intro">
          <span>HOW ECONOMICS AFFECT CREATIVE STRATEGY</span>
          <p>
            They set the allowable acquisition cost, show how much testing
            risk the business can absorb, influence product and offer
            priorities, and tell me whether a creative is creating profitable
            growth rather than only attractive platform metrics.
          </p>
        </div>

        <div className="business-context-economics-grid">
          <EconomicsGroup
            label="ACQUISITION"
            title="Paid Media Economics"
            items={acquisitionEconomics}
          />
          <EconomicsGroup
            label="PROFITABILITY"
            title="Margin & Order Economics"
            items={profitabilityEconomics}
          />
          <EconomicsGroup
            label="BUSINESS HEALTH"
            title="Customer Economics"
            items={businessHealthEconomics}
          />
        </div>

        <div className="business-context-economics-decision">
          <span>DECISION CHAIN</span>
          <div>
            <strong>Economics</strong><i>→</i>
            <strong>Allowable CPA</strong><i>→</i>
            <strong>Testing Risk</strong><i>→</i>
            <strong>Product / Offer Priority</strong><i>→</i>
            <strong>Scale Decision</strong>
          </div>
        </div>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Creative & Funnel Data"
        title="Creative & Funnel Evidence"
        description="Before generating anything new, understand what the account has already proven, where performance is concentrated, and what happens after the click."
      >
        <div className="business-context-evidence-grid">
          <article className="business-context-evidence-card">
            <header>
              <span>HISTORY</span>
              <h3>Creative Performance</h3>
              <p>What has already won, failed, fatigued, or produced incomplete evidence?</p>
            </header>
            <StageList items={creativeHistory} />
          </article>

          <article className="business-context-evidence-card">
            <header>
              <span>NOW</span>
              <h3>Current Portfolio</h3>
              <p>Where is the account currently strong, weak, or dangerously concentrated?</p>
            </header>
            <StageList items={portfolioSignals} />
          </article>

          <article className="business-context-evidence-card">
            <header>
              <span>AFTER THE CLICK</span>
              <h3>Funnel & Owned Assets</h3>
              <p>Where does the promise in the ad continue, break, or change?</p>
            </header>
            <StageList items={funnelAssets} />
          </article>
        </div>

        <div className="business-context-funnel-flow">
          <span>AD</span><i>→</i>
          <span>MESSAGE</span><i>→</i>
          <span>LANDING EXPERIENCE</span><i>→</i>
          <span>OFFER</span><i>→</i>
          <span>CONVERSION</span>
        </div>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Existing Intelligence"
        title="Existing Brand Intelligence"
        description="Before external research, I inventory what the business already knows and what evidence already exists internally."
      >
        <div className="business-context-intelligence-grid">
          {brandIntelligenceGroups.map((group) => (
            <IntelligenceGroup key={group.number} {...group} />
          ))}
        </div>

        <StageHighlight title="Practical Principle">
          <p>
            Founder interviews, surveys, advertorials, emails, landing pages,
            sales calls, support conversations, and historical briefs can
            contain years of customer intelligence. I treat them as evidence,
            not automatic truth.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Priorities"
        title="Constraints → Research Priorities"
        description="Finish Business Context by defining the boundaries creative must respect and the highest-value questions Research needs to answer."
      >
        <div className="business-context-priority-grid">
          <article className="business-context-priority-panel">
            <header>
              <span>BOUNDARIES</span>
              <h3>Operating Constraints</h3>
            </header>
            <StageList items={operatingConstraints} />
          </article>

          <article className="business-context-priority-panel is-research">
            <header>
              <span>NEXT STAGE</span>
              <h3>Research Priorities</h3>
            </header>
            <StageList items={researchQuestions} />
          </article>
        </div>

        <div className="business-context-final-output">
          <div>
            <span>BUSINESS CONTEXT OUTPUT</span>
            <h3>A concise strategic starting point.</h3>
            <p>
              By the end of this stage I know what the business wants,
              what creative needs to solve, what the economics allow,
              what existing evidence says, and what Research must investigate.
            </p>
          </div>

          <div className="business-context-final-output-list">
            {finalOutputs.map((item, index) => (
              <div key={item}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </StageSection>
    </StageDeepDiveLayout>
  );
}