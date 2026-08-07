// src/components/BusinessContext.jsx

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
| BUSINESS CONTEXT DATA
|--------------------------------------------------------------------------
*/

const businessGoals = [
  'Revenue and growth targets',
  'Profitability targets',
  'Scaling goals',
  'New product launches',
  'Market expansion',
  'CPA or ROAS improvement',
  'Creative fatigue problems',
  'Testing velocity goals',
  'Main business priority',
  'Time horizon',
];

const businessEconomics = [
  'Average order value',
  'Target CPA',
  'Testing CPA',
  'Break-even CPA',
  'Target ROAS',
  'Break-even ROAS',
  'Gross margin',
  'Contribution margin',
  'Lifetime value',
  'Conversion rate',
  'CPM',
  'CPC',
  'CTR',
  'Outbound CTR',
  'New-customer ROAS',
  'Refund rate',
  'Repeat-purchase or subscription rate',
  'Testing budget',
  'Minimum decision threshold',
  'Production cost per concept',
];

const productAndOffer = [
  'Primary product',
  'Supporting products',
  'Product benefits',
  'Desired outcomes',
  'Unique features',
  'Product mechanism',
  'Ingredients or materials',
  'Pricing',
  'Bundles',
  'Subscription options',
  'Discounts',
  'Bonuses',
  'Guarantees',
  'Risk reversal',
  'Urgency',
  'Scarcity',
  'Upsells and cross-sells',
];

const customerOverview = [
  'Primary customer groups',
  'Highest-value customers',
  'Most profitable segments',
  'Common use cases',
  'Most common problems',
  'Frequently mentioned benefits',
  'Common objections',
  'Buying patterns',
  'Repeat-purchase behavior',
  'Subscription customers',
  'Geographic distribution',
  'Age and gender data',
  'New versus returning customers',
];

const historicalCreativePerformance = [
  'Current winning ads',
  'Historical winners',
  'High-spend ads',
  'Losing concepts',
  'Fatigued creatives',
  'Best-performing hooks',
  'Best-performing angles',
  'Best-performing formats',
  'Best-performing creators',
  'Best-performing offers',
  'Landing pages connected to winners',
  'Concepts that generated clicks but weak conversion',
  'Concepts that converted but could not scale',
  'Tests that produced inconclusive data',
];

const creativeAssetTags = [
  'Persona',
  'Angle',
  'Concept',
  'Hook',
  'Format',
  'Creator',
  'Offer',
  'Product',
  'Landing page',
  'Awareness level',
  'Performance status',
];

const currentCreativePortfolio = [
  'New concepts',
  'Iterations',
  'Winning creatives',
  'Scaling variations',
  'Experimental ads',
  'Evergreen ads',
  'Promotional ads',
  'Seasonal ads',
  'Persona-specific creatives',
  'Awareness-specific creatives',
  'Offer-specific creatives',
];

const concentrationRisks = [
  'One angle',
  'One product',
  'One creator',
  'One format',
  'One audience',
  'One offer',
  'One platform',
  'One landing page',
];

const funnelDestinations = [
  'Product page',
  'Dedicated landing page',
  'Advertorial',
  'Listicle',
  'Quiz',
  'Webinar',
  'Lead form',
  'Email sequence',
  'Checkout experience',
  'Subscription flow',
  'Upsell flow',
];

const productionCapacity = [
  'Creative strategist',
  'Media buyer',
  'Copywriter',
  'Video editors',
  'Designers',
  'UGC creators',
  'Founder',
  'Brand manager',
  'Approval process',
  'Weekly production capacity',
  'Monthly production budget',
  'Creator availability',
  'Shoot frequency',
  'Editing capacity',
  'Design capacity',
  'AI production capability',
  'Review speed',
  'Available asset library',
];

const distributionChannels = [
  'Meta',
  'TikTok',
  'YouTube',
  'Google',
  'Native advertising',
  'Amazon',
  'Organic social',
  'Influencer content',
  'Email',
  'Other relevant channels',
];

const platformReview = [
  'Main acquisition platform',
  'Primary placements',
  'Current audience structure',
  'Platform-specific formats',
  'Historical platform performance',
  'Untapped channels',
  'Creative adaptation by platform',
  'Technical requirements',
  'Policy restrictions',
];

const constraints = [
  'Legal restrictions',
  'Platform policies',
  'Restricted claims',
  'Required disclaimers',
  'Brand guidelines',
  'Founder preferences',
  'Product availability',
  'Inventory limitations',
  'Geographic restrictions',
  'Shipping limitations',
  'Production budget',
  'Promotional deadlines',
  'Landing-page limitations',
  'Restricted visuals',
  'Restricted language',
  'Compliance approval',
];

const creativeProblemExamples = [
  'The brand is too dependent on one winning angle.',
  'Existing winners are fatigued.',
  'The team produces many variations but few new concepts.',
  'Ads generate attention but weak buying intent.',
  'Ads generate clicks but the landing page does not convert.',
  'The brand lacks strong proof.',
  'The product mechanism is difficult to explain.',
  'The messaging is too similar to competitors.',
  'Testing velocity is too slow.',
  'Winning concepts are not being expanded properly.',
];

const problemStatementRequirements = [
  'What is happening',
  'What evidence supports it',
  'How it affects growth',
  'What the creative strategy must change',
];

const researchPriorities = [
  'Early opportunities',
  'Main risks',
  'Missing information',
  'Untapped customer segments',
  'Underused proof',
  'Weak competitor positioning',
  'Potential offer improvements',
  'Untested angles',
  'Untested formats',
  'Creative whitespace',
  'Key research questions',
];

const outputs = [
  'Clear creative objective connected to the business goal',
  'Commercial and acquisition guardrails',
  'Product and offer priorities',
  'Initial customer overview',
  'Historical creative-performance baseline',
  'Creative portfolio and concentration-risk audit',
  'Funnel and message-match assessment',
  'Production-capacity summary',
  'Platform and distribution requirements',
  'Constraint and compliance summary',
  'Defined creative problem statement',
  'Initial opportunities and research priorities',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function BusinessContext({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="FOUNDATION & COMMERCIAL REALITY"
      title="Business Context"
      introduction="Before developing any creative strategy, I first understand the commercial reality behind the brand. This establishes what creative must solve, which products and offers deserve priority, what the business can afford to pay for acquisition, what has already been tested, and which constraints will shape execution."
      process={[
        'Business Reality',
        'Economics',
        'Current Performance',
        'Constraints',
        'Creative Problem',
        'Research Priorities',
      ]}
      outputs={outputs}
      outputTitle="Business Context Output"
    >
      <StageSection
        number="01"
        navTitle="Business Goals"
        title="Business Goals"
        description="Clarify what the business is trying to achieve and define the role creative is expected to play."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Commercial Objectives"
            description="The measurable outcomes the business is working toward."
          >
            <StageList items={businessGoals} />
          </StageCard>

          <StageHighlight
            title="Primary Outcome"
            type="success"
          >
            <p>
              This section ends with a clear definition of what creative
              needs to accomplish, within what timeframe, and against which
              business priority.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Economics"
        title="Business Economics"
        description="Review the numbers that determine what the creative strategy can realistically support."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Acquisition Economics"
            description="The metrics that define an acceptable and commercially viable result."
          >
            <StageList items={businessEconomics} />
          </StageCard>

          <StageHighlight title="Why This Matters">
            <p>
              These numbers determine which products, offers, audiences,
              concepts, and production investments are commercially worth
              pursuing. A creative idea can look strong while still being
              incompatible with the brand’s margins or acquisition targets.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Product & Offer"
        title="Product and Offer"
        description="Understand what the brand sells, why the product matters, and how the customer is being asked to buy it."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Product Truth"
            description="The features, mechanisms, benefits, and outcomes available to support creative."
          >
            <StageList
              items={[
                'Primary and supporting products',
                'Features and unique characteristics',
                'Functional and emotional benefits',
                'Desired customer outcomes',
                'Product mechanism',
                'Ingredients or materials',
              ]}
            />
          </StageCard>

          <StageCard
            title="Offer Architecture"
            description="The commercial package presented to the customer."
          >
            <StageList
              items={[
                'Pricing and bundles',
                'Subscription options',
                'Discounts and bonuses',
                'Guarantees and risk reversal',
                'Urgency and scarcity',
                'Upsells and cross-sells',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Strategic Question">
          <p>
            Which parts of the product and offer are strong enough to lead
            the creative, and which elements should remain supporting
            information?
          </p>
        </StageHighlight>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="Complete Review">
            <StageList items={productAndOffer} />
          </StageCard>
        </div>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Customer Overview"
        title="Customer Overview"
        description="Review what the business already knows about its current customers before deeper external research begins."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Existing Customer Intelligence"
            description="Current knowledge from customer data, behavior, sales, and internal experience."
          >
            <StageList items={customerOverview} />
          </StageCard>

          <StageHighlight title="Purpose">
            <p>
              This creates an initial understanding of who currently buys,
              which groups generate the most value, and which customer
              groups deserve deeper investigation during Research and
              Persona Mapping.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Creative History"
        title="Historical Creative Performance"
        description="Study what the brand has already tested so the next strategy does not repeat old mistakes or ignore existing winners."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Performance Audit"
            description="Review winners, losers, fatigue, scalability, and incomplete tests."
          >
            <StageList items={historicalCreativePerformance} />
          </StageCard>

          <StageCard
            title="Creative Tagging System"
            description="Tag each asset consistently so patterns can be identified across the account."
          >
            <StageList items={creativeAssetTags} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Important Distinction"
          type="warning"
        >
          <p>
            An ad that generated strong clicks but weak conversion represents
            a different problem from an ad that converted efficiently but
            could not scale. The creative history must preserve those
            differences instead of classifying everything as simply a
            winner or loser.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Creative Portfolio"
        title="Current Creative Portfolio"
        description="Assess whether the brand has a healthy balance between exploration, iteration, active winners, and scalable creative families."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Portfolio Composition"
            description="The types of creative currently moving through the account."
          >
            <StageList items={currentCreativePortfolio} />
          </StageCard>

          <StageCard
            title="Concentration Risk"
            description="Check whether performance depends too heavily on one variable."
          >
            <StageList items={concentrationRisks} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Portfolio Diagnosis">
          <p>
            This reveals whether the pipeline is diversified enough to
            support continued growth or whether the account is vulnerable
            because too much performance depends on one angle, product,
            creator, format, audience, offer, platform, or destination.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Funnel & Journey"
        title="Funnel and Customer Journey"
        description="Review where the creative sends the customer and whether the full experience supports the promise made in the ad."
      >
        <StageFlow
          items={[
            'Hook',
            'Core Message',
            'Landing-Page Headline',
            'Product Explanation',
            'Proof',
            'Offer',
            'CTA',
          ]}
        />

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard
              title="Possible Destinations"
              description="The customer journey may continue through different types of pages and sales systems."
            >
              <StageList items={funnelDestinations} />
            </StageCard>

            <StageHighlight title="Diagnostic Value">
              <p>
                Reviewing the complete journey helps separate a creative
                problem from a landing-page, offer, checkout, subscription,
                tracking, or funnel problem.
              </p>
            </StageHighlight>
          </StageGrid>
        </div>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Team & Capacity"
        title="Team and Production Capacity"
        description="Determine what the team can realistically produce and how quickly an idea can move from strategy to launch."
      >
        <StageGrid columns={2}>
          <StageCard
            title="People and Ownership"
            description="Understand who contributes to strategy, production, approval, and launch."
          >
            <StageList
              items={[
                'Creative strategist',
                'Media buyer',
                'Copywriter',
                'Video editors',
                'Designers',
                'UGC creators',
                'Founder',
                'Brand manager',
              ]}
            />
          </StageCard>

          <StageCard
            title="Production Reality"
            description="Understand the practical limits affecting speed and complexity."
          >
            <StageList
              items={[
                'Approval process',
                'Weekly production capacity',
                'Monthly production budget',
                'Creator availability',
                'Shoot frequency',
                'Editing and design capacity',
                'AI production capability',
                'Review speed',
                'Available asset library',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Creative Implication">
          <p>
            Production capacity determines which formats are realistic,
            how much testing velocity is possible, and when a lightweight
            Minimum Viable Creative Test should be used before investing in
            full production.
          </p>
        </StageHighlight>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="Complete Capacity Review">
            <StageList items={productionCapacity} />
          </StageCard>
        </div>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Platforms"
        title="Platforms and Distribution"
        description="Identify where the creative will run and how each platform changes the required execution."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Relevant Channels"
            description="Identify the platforms currently used and the channels with potential for expansion."
          >
            <StageList items={distributionChannels} />
          </StageCard>

          <StageCard
            title="Platform Review"
            description="Evaluate how distribution affects format, production, performance, and compliance."
          >
            <StageList items={platformReview} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Constraints"
        title="Constraints and Non-Negotiables"
        description="Define the boundaries the strategy must respect before ideas enter development and production."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Operating Constraints"
            description="The legal, commercial, platform, brand, inventory, and execution boundaries."
          >
            <StageList items={constraints} />
          </StageCard>

          <StageHighlight
            title="Why Define Them Early?"
            type="warning"
          >
            <p>
              This prevents strategically strong concepts from being
              rejected, delayed, or heavily rewritten after production has
              already started.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Problem Definition"
        title="Creative Problem Definition"
        description="Translate the business context into one specific problem the creative strategy must solve."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Common Creative Problems"
            description="Examples of problems that may emerge from the audit."
          >
            <StageList items={creativeProblemExamples} />
          </StageCard>

          <StageCard
            title="Problem Statement Requirements"
            description="The final statement must connect the evidence to a clear strategic requirement."
          >
            <StageList
              items={problemStatementRequirements}
              ordered
            />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Problem Statement Structure"
          type="success"
        >
          <StageFlow
            items={[
              'What Is Happening',
              'Supporting Evidence',
              'Growth Impact',
              'Required Strategic Change',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="12"
        navTitle="Research Priorities"
        title="Initial Opportunities and Research Priorities"
        description="Identify what needs deeper investigation before the Research phase begins."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Opportunity and Risk Review"
            description="Record early hypotheses without treating them as validated insights."
          >
            <StageList items={researchPriorities} />
          </StageCard>

          <StageHighlight title="Transition Into Research">
            <p>
              The final Business Context output becomes the starting point
              for the Research Engine. It defines the most valuable
              questions, missing evidence, risks, and potential creative
              whitespace that research must investigate.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}