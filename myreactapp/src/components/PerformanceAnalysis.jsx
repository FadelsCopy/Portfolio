// src/components/PerformanceAnalysis.jsx

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
| PERFORMANCE ANALYSIS DATA
|--------------------------------------------------------------------------
*/

const attentionMetrics = [
  'Impressions',
  'Reach',
  'Frequency',
  'CPM',
  'Video plays',
  'Three-second video views',
  'Hook rate',
  'Thumb-stop ratio',
];

const weakAttentionIssues = [
  'The first frame',
  'Visual hook',
  'Verbal hook',
  'Persona relevance',
  'Opening clarity',
  'Pattern interruption',
];

const retentionMetrics = [
  'Average watch time',
  'Average percentage watched',
  'Hold rate',
  '25% video-view rate',
  '50% video-view rate',
  '75% video-view rate',
  '95% video-view rate',
  'Completion rate',
  'ThruPlays',
  'Cost per ThruPlay',
];

const weakRetentionIssues = [
  'Slow pacing',
  'Weak narrative progression',
  'Hook-to-body misalignment',
  'Repetition',
  'Unclear mechanism',
  'Delayed product introduction',
  'Weak visual variation',
  'Excessive length',
];

const engagementMetrics = [
  'Reactions',
  'Comments',
  'Shares',
  'Saves',
  'Engagement rate',
  'Cost per engagement',
  'Positive sentiment',
  'Negative sentiment',
  'Repeated questions',
  'Objections appearing in comments',
  'Customer language worth reusing',
];

const trafficMetrics = [
  'Link clicks',
  'Outbound clicks',
  'Unique outbound clicks',
  'CTR',
  'Link CTR',
  'Outbound CTR',
  'Unique outbound CTR',
  'CPC',
  'Cost per outbound click',
  'Landing-page views',
  'Landing-page-view rate',
  'Cost per landing-page view',
];

const weakClickIssues = [
  'Weak value proposition',
  'Unclear product connection',
  'Insufficient proof',
  'Weak CTA',
  'Low buying relevance',
  'Curiosity without enough intent',
  'Poor offer integration',
];

const onSiteMetrics = [
  'Landing-page engagement rate',
  'Bounce rate',
  'Average engagement time',
  'Time on page',
  'Scroll depth',
  'Product-page views',
  'Add-to-cart rate',
  'Cost per add to cart',
  'Checkout-initiation rate',
  'Cost per initiated checkout',
  'Checkout abandonment',
  'Returning versus new-user behavior',
];

const weakOnSiteIssues = [
  'Poor message match',
  'Weak page structure',
  'Missing proof',
  'Weak offer',
  'Price resistance',
  'Poor mobile experience',
  'Slow page speed',
  'Unclear product information',
  'Strong curiosity but low buying intent',
];

const conversionMetrics = [
  'Purchases',
  'Purchase conversion rate',
  'Cost per purchase',
  'CPA',
  'CAC',
  'Add-to-cart-to-purchase rate',
  'Checkout-to-purchase rate',
  'New-customer conversion rate',
  'Returning-customer conversion rate',
  'Purchase value',
  'Revenue per visitor',
];

const weakConversionIssues = [
  'Offer weakness',
  'Price resistance',
  'Poor proof',
  'Weak risk reversal',
  'Checkout friction',
  'Low trust',
  'Message mismatch',
  'Incorrect audience',
  'A problem outside the creative itself',
];

const businessMetrics = [
  'Revenue',
  'Spend',
  'ROAS',
  'New-customer ROAS',
  'MER',
  'AOV',
  'CAC',
  'Break-even CAC',
  'Break-even ROAS',
  'Contribution margin',
  'Profit per order',
  'New-customer percentage',
  'Refund or return rate',
  'Subscription rate',
  'Repeat-purchase behavior',
  'Spend scalability',
  'Performance stability over time',
];

const diagnosticCases = [
  {
    title: 'Weak Attention',
    signals: [
      'Weak hook rate',
      'Weak three-second view rate',
      'Weak thumb-stop ratio',
    ],
    likelyIssues: [
      'Hook',
      'First frame',
      'Persona callout',
      'Opening visual',
      'Initial message',
    ],
    likelyAction: ['Iterate the opening'],
  },
  {
    title: 'Strong Hook, Weak Retention',
    signals: [
      'Strong hook rate',
      'Weak watch time',
      'Sharp drop-off',
    ],
    likelyIssues: [
      'Weak body',
      'Slow pacing',
      'Hook-to-body mismatch',
      'Weak narrative',
      'Delayed explanation',
      'Weak visual progression',
    ],
    likelyAction: ['Keep the hook and rebuild the body'],
  },
  {
    title: 'Strong Retention, Weak Clicks',
    signals: [
      'Strong watch time',
      'Strong view percentages',
      'Weak outbound CTR',
    ],
    likelyIssues: [
      'Entertaining but not persuasive',
      'Weak product connection',
      'Weak proof',
      'Weak offer',
      'Weak CTA',
      'Low buying relevance',
    ],
    likelyAction: [
      'Strengthen persuasion',
      'Strengthen product integration',
      'Strengthen proof',
      'Strengthen the offer',
      'Strengthen the CTA',
    ],
  },
  {
    title: 'Strong Clicks, Weak Landing-Page Performance',
    signals: [
      'Strong outbound CTR',
      'Weak landing-page engagement',
      'Weak add-to-cart rate',
    ],
    likelyIssues: [
      'Message mismatch',
      'Page weakness',
      'Curiosity-driven click',
      'Poor product presentation',
      'Weak offer',
      'Technical problem',
    ],
    likelyAction: [
      'Investigate the page and message match before blaming the creative',
    ],
  },
  {
    title: 'Strong Add-to-Cart, Weak Purchase Rate',
    signals: [
      'Strong add-to-cart rate',
      'Weak checkout-to-purchase rate',
    ],
    likelyIssues: [
      'Price resistance',
      'Shipping cost',
      'Checkout friction',
      'Missing trust',
      'Weak guarantee',
      'Payment issue',
      'Offer problem',
    ],
    likelyAction: [
      'Investigate checkout',
      'Investigate pricing',
      'Investigate risk reversal',
      'Investigate offer structure',
    ],
  },
  {
    title: 'Strong Funnel, Weak Economics',
    signals: [
      'Strong CTR',
      'Strong conversion rate',
      'High CAC',
      'Weak ROAS',
    ],
    likelyIssues: [
      'High CPM',
      'Low AOV',
      'Low margin',
      'Weak offer economics',
      'Poor audience efficiency',
      'Limited scalability',
    ],
    likelyAction: [
      'Review economics',
      'Review the audience',
      'Review the offer',
      'Review spend efficiency',
    ],
  },
  {
    title: 'Strong Full-Funnel Performance',
    signals: [
      'Strong attention',
      'Strong retention',
      'Strong clicks',
      'Strong conversion',
      'Healthy economics',
    ],
    likelyIssues: [],
    likelyAction: [
      'Scale',
      'Expand the concept',
      'Build new iterations',
      'Protect the winning variables',
    ],
  },
  {
    title: 'Weak Performance Across the Funnel',
    signals: [
      'Weak attention',
      'Weak retention',
      'Weak clicks',
      'Weak conversion',
    ],
    likelyIssues: [
      'Weak angle',
      'Weak concept',
      'Poor persona fit',
      'Unclear message',
      'Low product relevance',
    ],
    likelyAction: [
      'Kill the concept and move to a stronger opportunity',
    ],
  },
];

const scaleActions = [
  'Increasing spend',
  'Expanding to broader audiences',
  'Creating more hook variations',
  'Testing new creators',
  'Testing new formats',
  'Extending the concept into a winner family',
  'Protecting the core variables that made it work',
];

const iterationTargets = [
  'Hook',
  'First frame',
  'Creator',
  'Pacing',
  'Narrative',
  'Mechanism explanation',
  'Proof',
  'Product introduction',
  'Offer',
  'CTA',
  'Length',
  'Visual execution',
];

const retestReasons = [
  'Insufficient spend',
  'Small sample size',
  'Tracking problems',
  'Poor delivery',
  'Audience interference',
  'Landing-page issues',
  'Too many variables changed',
  'Unfair production quality',
  'External campaign disruption',
];

const investigateAreas = [
  'Audience',
  'Campaign delivery',
  'Offer',
  'Price',
  'Landing page',
  'Checkout',
  'Tracking',
  'Attribution',
  'Page speed',
  'Inventory',
  'Technical errors',
  'Market conditions',
];

const killReasons = [
  'The angle fails to resonate',
  'The concept is weak across the funnel',
  'The product connection feels forced',
  'The promise is not believable',
  'The message lacks buying relevance',
  'Multiple meaningful iterations fail',
  'Stronger opportunities exist in the pipeline',
];

const decisionRecord = [
  'Final creative status',
  'Decision',
  'Reasoning',
  'Diagnosed bottleneck',
  'Supporting metrics',
  'Next action',
  'Main learning',
];

const outputs = [
  'Full-funnel performance analysis',
  'Attention diagnosis',
  'Retention diagnosis',
  'Engagement analysis',
  'Traffic and click-quality diagnosis',
  'Landing-page and on-site diagnosis',
  'Conversion diagnosis',
  'Business-economics diagnosis',
  'Primary performance bottleneck',
  'Final creative status',
  'Documented decision and next action',
];

const sops = [
  {
    title: 'Performance Analysis and Decision-Making',
    description:
      'Defines how to analyze attention, retention, engagement, traffic, landing-page behavior, conversion, and business economics, diagnose the main bottleneck, and decide whether to scale, iterate, retest, investigate, or kill the creative.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function PerformanceAnalysis({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="FULL-FUNNEL DIAGNOSIS SYSTEM"
      title="Performance Analysis & Decision"
      introduction="Once the creatives are launched and enough data is collected, I analyze the full customer journey to identify what is working, where performance is breaking, and what should happen next. The goal is not to report metrics individually. It is to connect them and diagnose the actual bottleneck."
      process={[
        'Attention',
        'Retention',
        'Engagement',
        'Click',
        'Landing Page',
        'Conversion',
        'Economics',
        'Decision',
      ]}
      outputs={outputs}
      outputTitle="Performance Diagnosis and Decision"
      sops={sops}
      sopDescription="The Performance Analysis and Decision-Making SOP defines how full-funnel data becomes a clear diagnosis and next action."
    >
      <StageSection
        number="00"
        navTitle="Analysis System"
        title="Performance Analysis and Decision"
        description="Read the metrics as one connected customer journey instead of judging each metric in isolation."
      >
        <StageHighlight
          title="Full-Funnel Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Attention',
              'Retention',
              'Engagement',
              'Click',
              'Landing Page',
              'Conversion',
              'Economics',
              'Decision',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Main Objective"
            description="Determine where performance is breaking and identify the correct next action."
          >
            <StageList
              items={[
                'Identify what is working',
                'Identify the main bottleneck',
                'Separate creative problems from funnel problems',
                'Connect performance to business economics',
                'Choose a clear operational decision',
              ]}
            />
          </StageCard>

          <StageHighlight
            title="Analysis Rule"
            type="warning"
          >
            <p>
              Metrics should be interpreted together rather than in
              isolation. Strong CTR, watch time, or engagement does not
              automatically mean the creative is commercially successful.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Attention"
        title="Attention"
        description="Determine whether the creative earns enough initial attention."
      >
        <StageGrid columns={2}>
          <StageCard title="Attention Metrics">
            <StageList items={attentionMetrics} />
          </StageCard>

          <StageCard title="Weak Attention May Indicate">
            <StageList items={weakAttentionIssues} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Attention Diagnosis"
          type="success"
        >
          <StageFlow
            items={[
              'First Frame',
              'Visual Hook',
              'Verbal Hook',
              'Persona Relevance',
              'Opening Clarity',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Retention"
        title="Retention and Viewing Behavior"
        description="Determine whether the creative holds attention after the opening."
      >
        <StageGrid columns={2}>
          <StageCard title="Retention Metrics">
            <StageList items={retentionMetrics} />
          </StageCard>

          <StageCard title="Weak Retention May Indicate">
            <StageList items={weakRetentionIssues} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Retention Reading">
          <p>
            A strong hook with weak retention usually means the opening
            earned attention, but the body failed to continue the promise,
            maintain interest, or progress the argument.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Engagement"
        title="Engagement"
        description="Use engagement as supporting evidence of interest, emotion, conversation, and social relevance."
      >
        <StageGrid columns={2}>
          <StageCard title="Engagement Signals">
            <StageList items={engagementMetrics} />
          </StageCard>

          <StageHighlight
            title="Engagement Boundary"
            type="warning"
          >
            <p>
              Engagement is treated as supporting evidence, not as the final
              measure of commercial success.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Traffic & Clicks"
        title="Traffic and Click Quality"
        description="Determine whether the creative creates enough desire or curiosity to move the customer forward."
      >
        <StageGrid columns={2}>
          <StageCard title="Traffic and Click Metrics">
            <StageList items={trafficMetrics} />
          </StageCard>

          <StageCard title="Weak Click Performance May Indicate">
            <StageList items={weakClickIssues} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Technical Warning"
          type="warning"
        >
          <p>
            A large gap between outbound clicks and landing-page views may
            indicate page speed, tracking, or another technical problem
            rather than a creative problem.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="On-Site Behavior"
        title="On-Site Behavior"
        description="Evaluate what happens after the customer reaches the landing page."
      >
        <StageGrid columns={2}>
          <StageCard title="On-Site Metrics">
            <StageList items={onSiteMetrics} />
          </StageCard>

          <StageCard title="Weak On-Site Performance May Indicate">
            <StageList items={weakOnSiteIssues} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Page Diagnosis">
          <p>
            Strong click performance with weak on-site behavior may indicate
            message mismatch, weak page structure, missing proof, a weak
            offer, technical problems, or curiosity without real buying
            intent.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Conversion"
        title="Conversion"
        description="Determine whether the traffic generated by the creative turns into customers."
      >
        <StageGrid columns={2}>
          <StageCard title="Conversion Metrics">
            <StageList items={conversionMetrics} />
          </StageCard>

          <StageCard title="Weak Conversion May Indicate">
            <StageList items={weakConversionIssues} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Economics"
        title="Business Performance"
        description="Determine whether the creative produces profitable and scalable growth."
      >
        <StageGrid columns={2}>
          <StageCard title="Business Metrics">
            <StageList items={businessMetrics} />
          </StageCard>

          <StageHighlight
            title="Winner Standard"
            type="warning"
          >
            <p>
              A creative should not be considered a winner only because it
              has strong CTR or watch time. It must eventually contribute to
              acceptable customer acquisition and business economics.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Diagnostic Reading"
        title="Diagnostic Reading"
        description="Interpret combinations of metrics to identify the most likely bottleneck and next action."
      >
        <StageGrid columns={2}>
          {diagnosticCases.map((diagnostic) => (
            <StageCard
              key={diagnostic.title}
              title={diagnostic.title}
            >
              <StageHighlight title="Signals">
                <StageList items={diagnostic.signals} />
              </StageHighlight>

              {diagnostic.likelyIssues.length > 0 && (
                <div style={{ marginTop: '12px' }}>
                  <StageHighlight
                    title="Likely Issue"
                    type="warning"
                  >
                    <StageList items={diagnostic.likelyIssues} />
                  </StageHighlight>
                </div>
              )}

              <div style={{ marginTop: '12px' }}>
                <StageHighlight
                  title="Likely Action"
                  type="success"
                >
                  <StageList items={diagnostic.likelyAction} />
                </StageHighlight>
              </div>
            </StageCard>
          ))}
        </StageGrid>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Decision"
        title="Decision"
        description="Assign one primary decision after diagnosing the performance."
      >
        <StageHighlight
          title="Final Decision Options"
          type="success"
        >
          <StageFlow
            items={[
              'Scale',
              'Iterate',
              'Retest',
              'Investigate',
              'Kill',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Scale"
            description="The creative performs strongly across the funnel and meets the required business economics."
          >
            <StageList items={scaleActions} />
          </StageCard>

          <StageCard
            title="Iterate"
            description="The creative contains a strong signal, but one specific part is limiting performance."
          >
            <StageList items={iterationTargets} />
          </StageCard>

          <StageCard
            title="Retest"
            description="The direction appears promising, but the original test did not produce a reliable conclusion."
          >
            <StageList items={retestReasons} />
          </StageCard>

          <StageCard
            title="Investigate"
            description="The creative may not be the main source of the problem."
          >
            <StageList items={investigateAreas} />
          </StageCard>

          <StageCard
            title="Kill and Move On"
            description="The creative does not show enough potential to justify further time, production, or spend."
          >
            <StageList items={killReasons} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Iteration Rule"
          type="warning"
        >
          <p>
            Iteration should be based on the diagnosed bottleneck rather
            than random changes.
          </p>
        </StageHighlight>

        <StageHighlight
          title="Investigation Rule"
          type="warning"
        >
          <p>
            Investigating the audience, page, offer, checkout, tracking, or
            technical environment prevents strong creative from being killed
            because of problems elsewhere in the funnel.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Final Status"
        title="Final Creative Status"
        description="Record the final decision, diagnosis, evidence, and next action so the learning informs the next creative cycle."
      >
        <StageGrid columns={2}>
          <StageCard title="Final Status Options">
            <StageList
              items={[
                'Scale',
                'Iterate',
                'Retest',
                'Investigate',
                'Kill',
              ]}
            />
          </StageCard>

          <StageCard title="Decision Record">
            <StageList items={decisionRecord} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Final Documentation Flow"
          type="success"
        >
          <StageFlow
            items={[
              'Performance Data',
              'Diagnosis',
              'Bottleneck',
              'Decision',
              'Next Action',
              'Learning',
            ]}
          />
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}