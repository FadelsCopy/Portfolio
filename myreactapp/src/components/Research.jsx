// src/components/Research.jsx

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
| DOCUMENT-GROUNDED RESEARCH ENGINE DATA
|--------------------------------------------------------------------------
*/

const researchOutputs = [
  'Brand, product, customer, competitor, market, offer, funnel, creative, trend, and first-party evidence',
  'Voice-of-customer language with its source and original context',
  'Research records classified by fact, customer belief, interpretation, and verification status',
  'Structured evidence prepared for Insight Synthesis',
];

const researchSops = [
  {
    title: 'Research Capture and Tagging',
    description:
      'Defines what evidence should be saved, how sources are preserved, and how every quote, screenshot, ad, and observation is tagged for later use.',
  },
  {
    title: 'Customer Review Mining',
    description:
      'Explains how to research brand and competitor reviews across Trustpilot, Amazon, retailer sites, and product pages while separating useful evidence from generic feedback.',
  },
  {
    title: 'Reddit and Community Mining',
    description:
      'Provides a repeatable method for finding relevant threads, reading deeper comments, capturing complete customer stories, and validating patterns across communities.',
  },
  {
    title: 'Social Comment Mining',
    description:
      'Explains how to research comments beneath ads, creator posts, demonstrations, and organic content to identify objections, questions, skepticism, and buying intent.',
  },
  {
    title: 'Organic Short-Form Research',
    description:
      'Covers how to navigate TikTok, Instagram Reels, and YouTube Shorts to find useful hooks, topics, formats, visual devices, and customer reactions.',
  },
  {
    title: 'Competitor Ad Research',
    description:
      'Defines how to find, tag, deconstruct, and compare competitor ads across Meta, TikTok, YouTube, and creative-intelligence tools.',
  },
  {
    title: 'Native Image and Visual Mining',
    description:
      'Explains how to find authentic problem, product, customer, review, and lifestyle visuals while preserving their source and intended strategic use.',
  },
  {
    title: 'Advertorial and Listicle Research',
    description:
      'Covers how to locate and analyze article-style funnels across social ads, search, affiliate publishers, native advertising networks, and competitor destinations.',
  },
  {
    title: 'Competitor Funnel and Offer Audit',
    description:
      'Provides a consistent method for comparing landing pages, product pages, quizzes, advertorials, listicles, pricing, bundles, guarantees, and funnel structure.',
  },
  {
    title: 'Research Quality Control',
    description:
      'Defines the final checks for source traceability, evidence quality, duplicate removal, claim verification, research gaps, and readiness for Insight Synthesis.',
  },
];

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
      eyebrow="RESEARCH ENGINE"
      title="Research Engine"
      introduction="Before developing personas, angles, hooks, or concepts, I collect evidence across the brand, product, customer, competitors, market, offers, creative, social platforms, trends, and first-party data."
      process={[
        'Collect Evidence',
        'Preserve Sources',
        'Organize',
        'Verify',
        'Prepare for Insight Synthesis',
      ]}
      outputs={researchOutputs}
      outputTitle="Structured Research Evidence"
      sops={researchSops}
      sopDescription="The Research SOP Library defines how evidence is collected, preserved, classified, verified, and prepared for Insight Synthesis."
    >
      {/* ================================================================
          01. BRAND RESEARCH
          ================================================================ */}

      <StageSection
        number="01"
        navTitle="Brand"
        title="Brand Research"
        description="I study the brand to understand how it currently presents the product, customer, problem, solution, and offer."
      >
        <StageGrid columns={3}>
          <StageCard title="Sources">
            <StageList
              items={[
                'Brand website',
                'Homepage',
                'Product pages',
                'Landing pages',
                'About page',
                'FAQ',
                'Blog',
                'Advertorials and listicles',
                'Quizzes',
                'Email campaigns',
                'SMS campaigns',
                'Organic social accounts',
                'YouTube channel',
                'Founder videos',
                'Founder interviews',
                'Podcast appearances',
                'Webinars',
                'Packaging',
                'Product inserts',
                'Brand guidelines',
                'Previous research',
                'Existing creative briefs',
                'Internal marketing documents',
              ]}
            />
          </StageCard>

          <StageCard title="What I Examine">
            <StageList
              items={[
                'Brand story',
                'Founder story',
                'Positioning',
                'Core promise',
                'Value proposition',
                'Brand voice',
                'Messaging pillars',
                'Current target customer',
                'Existing personas',
                'Main claims',
                'Product mechanism',
                'Proof',
                'Guarantees',
                'Visual identity',
                'Repeated messages',
                'Restricted claims',
                'Underused brand assets',
              ]}
            />
          </StageCard>

          <StageCard title="What I Am Looking For">
            <StageList
              items={[
                'What the brand wants to be known for',
                'How it currently explains the problem',
                'How it explains why the product works',
                'Which benefits it emphasizes',
                'Which proof it relies on',
                'What is consistent across ads, website, emails, and organic content',
                'What customers care about that the brand currently underuses',
                'What the brand says repeatedly without enough evidence',
                'Strong founder, product, or customer stories that have not been used creatively',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      {/* ================================================================
          02. PRODUCT RESEARCH
          ================================================================ */}

      <StageSection
        number="02"
        navTitle="Product"
        title="Product Research"
        description="I study the product deeply enough to understand what it does, how it works, why it is different, and which parts can support credible creative."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Examine">
            <StageList
              items={[
                'Product function',
                'Features',
                'Functional benefits',
                'Emotional benefits',
                'Desired outcomes',
                'Main use cases',
                'Product mechanism',
                'Ingredients or materials',
                'Formulation',
                'Dosage or usage',
                'Time to expected result',
                'Unique features',
                'Product limitations',
                'Who it is for',
                'Who it is not for',
                'Manufacturing and sourcing',
                'Certifications',
                'Testing',
                'Patents',
                'Product-development story',
                'Product demonstrations',
                'Before-and-after evidence',
                'Testimonials',
                'Scientific or technical support',
                'Frequently asked questions',
                'Common misuse or misunderstanding',
              ]}
            />
          </StageCard>

          <StageCard title="Evidence Classification">
            <StageList
              items={[
                'Verified product facts',
                'Legally supported claims',
                'Customer-reported experiences',
                'Brand interpretations',
                'Strategic hypotheses',
                'Claims requiring further verification',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Product Research Rule"
          type="warning"
        >
          <p>
            Attractive marketing ideas should not be presented as proven
            product facts. Every claim and mechanism must be classified by
            its actual level of support.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          03. CUSTOMER RESEARCH
          ================================================================ */}

      <StageSection
        number="03"
        navTitle="Customer"
        title="Customer Research"
        description="I study the situations, behaviors, motivations, and decision-making process of the people the brand wants to reach."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Examine">
            <StageList
              items={[
                'Who experiences the problem',
                'When the problem becomes noticeable',
                'How the problem affects daily life',
                'What causes the customer to start searching',
                'What they have already tried',
                'How they evaluate possible solutions',
                'What they fear',
                'What they want to achieve',
                'What creates urgency',
                'What delays the purchase',
                'What they need to believe',
                'What proof they require',
                'Who influences the decision',
                'What content they consume',
                'Where they search for information',
                'What happens before, during, and after the purchase',
              ]}
            />
          </StageCard>

          <StageCard title="Customer Context">
            <StageList
              items={[
                'Problem state',
                'Desired state',
                'Awareness level',
                'Level of urgency',
                'Use case',
                'Life stage',
                'Buying situation',
                'Previous experience',
                'Existing habits',
                'Budget sensitivity',
                'Trust level',
                'Decision criteria',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Boundary">
          <p>
            Formal personas are created later. Customer Research collects the
            evidence needed to build them.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          04. VOICE OF CUSTOMER
          ================================================================ */}

      <StageSection
        number="04"
        navTitle="Voice of Customer"
        title="Voice-of-Customer Research"
        description="I collect the customer’s exact language instead of relying only on how the brand describes the problem."
      >
        <StageGrid columns={2}>
          <StageCard title="Sources">
            <StageList
              items={[
                'Brand reviews',
                'Trustpilot',
                'Amazon',
                'Retailer reviews',
                'Product Q&A sections',
                'Reddit',
                'Quora',
                'Niche forums',
                'Facebook Groups',
                'Social comments',
                'Customer interviews',
                'Testimonial calls',
                'Surveys',
                'Support tickets',
                'Refund requests',
                'Cancellation responses',
                'Competitor reviews',
              ]}
            />
          </StageCard>

          <StageCard title="What I Capture">
            <StageList
              items={[
                'Exact quote',
                'Source',
                'Link or screenshot',
                'Customer situation',
                'Problem described',
                'Desired outcome',
                'Failed alternative',
                'Objection',
                'Buying trigger',
                'Result',
                'Emotional language',
                'Important context',
              ]}
            />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard title="Positive Reviews Reveal">
              <StageList
                items={[
                  'Desired outcomes',
                  'Strongest benefits',
                  'Transformation language',
                  'Reasons customers recommend the product',
                  'Unexpected positive outcomes',
                ]}
              />
            </StageCard>

            <StageCard title="Balanced Reviews Reveal">
              <StageList
                items={[
                  'What worked',
                  'What was missing',
                  'Product limitations',
                  'Expectation gaps',
                  'Situations where the product is useful',
                ]}
              />
            </StageCard>

            <StageCard title="Negative Reviews Reveal">
              <StageList
                items={[
                  'Frustrations',
                  'Failed expectations',
                  'Objections',
                  'Product weaknesses',
                  'Trust issues',
                  'Refund reasons',
                  'Reasons customers stop using the product',
                ]}
              />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Collection Standard"
          type="success"
        >
          <p>
            The objective is not to copy every comment. It is to collect
            repeated, emotionally meaningful, and strategically useful
            language.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          05. DIRECT COMPETITORS
          ================================================================ */}

      <StageSection
        number="05"
        navTitle="Direct Competitors"
        title="Direct Competitor Research"
        description="Direct competitors sell a similar product or solution to a similar customer."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Examine">
            <StageList
              items={[
                'Positioning',
                'Target customer',
                'Core promise',
                'Hero product',
                'Product mechanism',
                'Features and benefits',
                'Claims',
                'Proof',
                'Price',
                'Bundles',
                'Subscription',
                'Guarantee',
                'Offers',
                'Product pages',
                'Landing pages',
                'Advertorials',
                'Listicles',
                'Quizzes',
                'Emails',
                'Organic content',
                'Paid ads',
                'Creators',
                'Formats',
                'Hooks',
                'Angles',
                'Visual identity',
                'Reviews',
                'Complaints',
                'Strengths',
                'Weaknesses',
              ]}
            />
          </StageCard>

          <StageCard title="Questions I Answer">
            <StageList
              items={[
                'What does the competitor want to own in the customer’s mind?',
                'Which problem or desire does it lead with?',
                'How does it explain why its product works?',
                'What proof does it use?',
                'Which objections does it handle?',
                'What do customers praise?',
                'What do customers criticize?',
                'Which messages and concepts appear repeatedly?',
                'Which promises dominate the category?',
                'What has the competitor failed to communicate?',
                'Where can the brand differentiate credibly?',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      {/* ================================================================
          06. INDIRECT AND SAME-AVATAR COMPETITORS
          ================================================================ */}

      <StageSection
        number="06"
        navTitle="Indirect Competitors"
        title="Indirect and Same-Avatar Competitor Research"
        description="Not every competitor sells the same product. Some solve the same problem differently, while others sell different products to the same type of customer."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Indirect Competitors"
            description="These solve the same underlying problem through a different solution."
          >
            <StageList
              items={[
                'Supplements versus topical products',
                'At-home products versus professional treatment',
                'Natural solutions versus prescription solutions',
                'Products versus services',
                'Premium solutions versus low-cost alternatives',
                'The product versus doing nothing',
                'Why customers choose the alternative',
                'What they believe about it',
                'What they like',
                'What frustrates them',
                'Why they abandon it',
                'What prevents them from switching',
                'What promise the alternative owns',
              ]}
            />
          </StageCard>

          <StageCard
            title="Same-Avatar Competitors"
            description="These sell a different product to the same type of customer."
          >
            <StageList
              items={[
                'Emotional desires that resonate with the audience',
                'Identity-based messaging',
                'Fears and frustrations',
                'Visual styles',
                'Creators who build trust',
                'Formats that attract attention',
                'Offers the customer already responds to',
                'Content the audience watches, saves, and shares',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      {/* ================================================================
          07. MARKET RESEARCH
          ================================================================ */}

      <StageSection
        number="07"
        navTitle="Market"
        title="Market Research"
        description="I study the wider category to understand what customers already know, believe, expect, and distrust."
      >
        <StageGrid columns={3}>
          <StageCard title="What I Examine">
            <StageList
              items={[
                'Main category players',
                'Major customer groups',
                'Common use cases',
                'Standard product features',
                'Typical prices',
                'Common offers',
                'Common guarantees',
                'Dominant promises',
                'Popular mechanisms',
                'Customer expectations',
                'Category skepticism',
                'Trust barriers',
                'Seasonal demand',
                'New solutions',
                'Emerging product types',
                'Cultural changes',
                'Regulatory conditions',
                'Overused claims',
                'Overused creative styles',
                'Unmet expectations',
              ]}
            />
          </StageCard>

          <StageCard title="Customer Awareness">
            <StageList
              ordered
              items={[
                'Unaware',
                'Problem-aware',
                'Solution-aware',
                'Product-aware',
                'Most aware',
              ]}
            />
          </StageCard>

          <StageCard title="Market Sophistication">
            <StageList
              items={[
                'How many similar promises the customer has already seen',
                'Whether simple claims still feel believable',
                'Whether the market requires stronger proof',
                'Whether competitors are using increasingly specific mechanisms',
                'Whether the category needs a new explanation, positioning, or creative format',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      {/* ================================================================
          08. OFFER AND FUNNEL
          ================================================================ */}

      <StageSection
        number="08"
        navTitle="Offer & Funnel"
        title="Offer and Funnel Research"
        description="I study how products are packaged, presented, and sold across the brand and its competitors."
      >
        <StageGrid columns={3}>
          <StageCard title="Offer Elements">
            <StageList
              items={[
                'Price',
                'Bundles',
                'Subscription',
                'Discounts',
                'Free gifts',
                'Bonuses',
                'Guarantee',
                'Trial period',
                'Free shipping',
                'Quantity breaks',
                'Urgency',
                'Scarcity',
                'Upsells',
                'Cross-sells',
                'Payment options',
              ]}
            />
          </StageCard>

          <StageCard title="Funnel Elements">
            <StageList
              items={[
                'Ad',
                'Product page',
                'Dedicated landing page',
                'Advertorial',
                'Listicle',
                'Quiz',
                'Comparison page',
                'Video sales letter',
                'Checkout',
                'Post-purchase upsell',
                'Email follow-up',
                'Retargeting',
              ]}
            />
          </StageCard>

          <StageCard title="What I Examine">
            <StageList
              items={[
                'Entry angle',
                'Headline',
                'Lead',
                'Problem framing',
                'Story',
                'Mechanism',
                'Product reveal',
                'Proof sequence',
                'Objection handling',
                'Offer presentation',
                'Guarantee',
                'CTA placement',
                'Message match between the ad and destination page',
                'Whether the funnel gives cold traffic enough education',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Funnel Sequence">
          <StageFlow
            items={[
              'Ad',
              'Entry Angle',
              'Page Lead',
              'Mechanism',
              'Proof',
              'Offer',
              'CTA',
            ]}
          />
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          09. ADVERTORIAL AND LISTICLE
          ================================================================ */}

      <StageSection
        number="09"
        navTitle="Advertorials"
        title="Advertorial and Listicle Research"
        description="I study advertorials and listicles as complete persuasion systems—not only as landing pages."
      >
        <StageGrid columns={2}>
          <StageCard title="Where I Find Them">
            <StageList
              items={[
                'Competitor Meta ads and destination pages',
                'TikTok and YouTube ad destinations',
                'Google search and display placements',
                'Brand email promotions',
                'Affiliate sites',
                'Review and comparison publishers',
                'Native advertising networks',
                'Content-recommendation placements',
                'Ad-intelligence and swipe tools',
                'Competitor website archives',
                'Search queries around reviews, alternatives, comparisons, and best products',
              ]}
            />
          </StageCard>

          <StageCard title="What I Save">
            <StageList
              items={[
                'Traffic source or platform',
                'Ad headline',
                'Thumbnail',
                'Destination URL',
                'Page type',
                'Entry angle',
                'Persona',
                'Awareness level',
                'Core promise',
                'Mechanism',
                'Proof',
                'Offer',
                'CTA',
                'Screenshots',
                'Ideas worth investigating',
                'Weaknesses and opportunities',
              ]}
            />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard title="Advertorial Research">
              <StageList
                items={[
                  'Headline',
                  'Entry angle',
                  'Editorial framing',
                  'Story or discovery',
                  'Problem explanation',
                  'Mechanism',
                  'Product reveal',
                  'Proof',
                  'Expert or authority framing',
                  'Objection handling',
                  'Offer transition',
                  'CTA',
                  'Connection to the original ad',
                ]}
              />
            </StageCard>

            <StageCard title="Listicle Research">
              <StageList
                items={[
                  'Headline format',
                  'Number and structure',
                  'Selection criteria',
                  'Product ranking',
                  'Comparison logic',
                  'Pros and cons',
                  'Why the featured product wins',
                  'Proof',
                  'Offer',
                  'CTA',
                  'Final recommendation',
                ]}
              />
            </StageCard>
          </StageGrid>
        </div>
      </StageSection>

      {/* ================================================================
          10. CREATIVE AND COMPETITOR ADS
          ================================================================ */}

      <StageSection
        number="10"
        navTitle="Creative & Ads"
        title="Creative and Competitor Ad Research"
        description="I study paid creative to understand what brands are testing, repeating, and expanding."
      >
        <StageGrid columns={3}>
          <StageCard title="Sources">
            <StageList
              items={[
                'Meta Ad Library',
                'TikTok Creative Center',
                'YouTube ads',
                'Google Ads transparency tools',
                'Foreplay',
                'GetHooked',
                'TrendTrack',
                'Competitor social accounts',
                'Creator partnership posts',
              ]}
            />
          </StageCard>

          <StageCard title="What I Capture">
            <StageList
              items={[
                'Brand',
                'Product',
                'Platform',
                'First-seen date',
                'Format',
                'Persona',
                'Awareness level',
                'Angle',
                'Concept',
                'Hook',
                'Opening visual',
                'Core promise',
                'Mechanism',
                'Proof',
                'Objection',
                'Creator type',
                'Editing style',
                'Offer',
                'CTA',
                'Landing page',
                'Comments',
                'Repeated variations',
              ]}
            />
          </StageCard>

          <StageCard title="What I Separate">
            <StageList
              items={[
                'Angle',
                'Concept',
                'Hook',
                'Format',
                'Execution',
                'Visual device',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Creative Deconstruction">
          <StageFlow
            items={[
              'Hook',
              'Problem or Desire',
              'Core Argument',
              'Mechanism',
              'Proof',
              'Product',
              'Offer',
              'CTA',
            ]}
          />
        </StageHighlight>

        <StageHighlight
          title="Interpretation Rule"
          type="warning"
        >
          <p>
            A long-running ad is treated as a useful signal, not automatic
            proof that the ad is profitable.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          11. SOCIAL LISTENING
          ================================================================ */}

      <StageSection
        number="11"
        navTitle="Social Listening"
        title="Social Listening and Organic Content Research"
        description="I study how customers, creators, experts, and brands naturally discuss the category outside structured sales pages."
      >
        <StageGrid columns={3}>
          <StageCard title="Sources">
            <StageList
              items={[
                'TikTok',
                'Instagram Reels',
                'YouTube Shorts',
                'Facebook',
                'Reddit',
                'Creator accounts',
                'Founder accounts',
                'Competitor organic accounts',
                'Niche educators',
                'Review creators',
                'Influencers',
                'Podcast clips',
                'Product demonstrations',
              ]}
            />
          </StageCard>

          <StageCard title="What I Examine">
            <StageList
              items={[
                'Opening lines',
                'First frames',
                'Visual hooks',
                'Questions',
                'Controversial opinions',
                'Demonstrations',
                'Customer stories',
                'Creator delivery',
                'Pacing',
                'Editing',
                'Captions',
                'On-screen text',
                'Comments',
                'Shares',
                'Saves',
                'Repeated formats',
                'Recurring topics',
                'Customer reactions',
              ]}
            />
          </StageCard>

          <StageCard title="Native Visual Research">
            <StageList
              items={[
                'Customer selfies',
                'Product-in-use photos',
                'Before-and-after images',
                'Problem-state images',
                'Desired-outcome images',
                'Review screenshots',
                'Comments',
                'Text messages',
                'Demonstrations',
                'Comparisons',
                'Documentary-style images',
                'Native Facebook-style images',
                'Reddit-style screenshots',
                'Creator environments',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Visual Preservation Rule">
          <p>
            Every visual is saved with its source, context, and possible
            creative use.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          12. TREND RESEARCH
          ================================================================ */}

      <StageSection
        number="12"
        navTitle="Trends"
        title="Trend Research"
        description="I track changes that may affect attention, language, demand, or customer behavior."
      >
        <StageGrid columns={2}>
          <StageCard title="What I Examine">
            <StageList
              items={[
                'Search trends',
                'Seasonal trends',
                'Viral topics',
                'Emerging customer language',
                'New creator formats',
                'Platform behaviors',
                'Cultural conversations',
                'New ingredients',
                'New technologies',
                'Emerging mechanisms',
                'News events',
                'Changes in customer skepticism',
                'Changes in lifestyle, beauty, health, or status ideals',
              ]}
            />
          </StageCard>

          <StageCard title="A Trend Is Useful When It Connects To">
            <StageList
              items={[
                'The product',
                'The customer',
                'The problem',
                'The desired outcome',
                'A credible creative opportunity',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Trend Standard"
          type="warning"
        >
          <p>
            A trend is only useful when it connects naturally to the product,
            customer, problem, desired outcome, and a credible creative
            opportunity.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          13. FIRST-PARTY DATA
          ================================================================ */}

      <StageSection
        number="13"
        navTitle="First-Party Data"
        title="First-Party Data Research"
        description="I study the data generated by customers who have already interacted with the brand."
      >
        <StageGrid columns={2}>
          <StageCard title="Sources">
            <StageList
              items={[
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
                'Subscription data',
                'Repeat-purchase behavior',
                'Existing ad performance',
                'Landing-page performance',
              ]}
            />
          </StageCard>

          <StageCard title="What I Look For">
            <StageList
              items={[
                'Reasons customers buy',
                'Reasons customers hesitate',
                'Reasons customers refund',
                'Expectation gaps',
                'Frequently asked questions',
                'Product confusion',
                'Common complaints',
                'Unexpected benefits',
                'Strongest testimonials',
                'High-value customer groups',
                'Repeat-purchase patterns',
                'Differences between the intended and actual customer',
                'Messages linked to strong or weak performance',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Strategic Value"
          type="success"
        >
          <p>
            First-party data has particularly high strategic value because it
            combines direct customer language with real behavior.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          14. RESEARCH CAPTURE SYSTEM
          ================================================================ */}

      <StageSection
        number="14"
        navTitle="Capture System"
        title="Research Capture System"
        description="Every useful finding is stored with enough source, context, classification, and verification information to support later strategic work."
      >
        <StageGrid columns={2}>
          <StageCard title="Every Finding Is Stored With">
            <StageList
              items={[
                'Exact quote or observation',
                'Source',
                'URL',
                'Screenshot',
                'Date collected',
                'Brand or product',
                'Research category',
                'Context',
                'Whether it is fact, customer belief, or interpretation',
                'Relevant customer group',
                'Potential creative use',
                'Verification status',
              ]}
            />
          </StageCard>

          <StageCard title="Research Status">
            <StageList
              items={[
                'Raw evidence',
                'Needs verification',
                'Repeated pattern',
                'High-value evidence',
                'Possible opportunity',
                'Claim requiring verification',
                'Duplicate',
                'Archived',
              ]}
            />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Research-to-Synthesis Transition"
          type="success"
        >
          <StageFlow
            items={[
              'Raw Evidence',
              'Source and Context Preserved',
              'Verification Status',
              'Insight Synthesis',
            ]}
          />
        </StageHighlight>

        <StageHighlight title="Research Boundary">
          <p>
            Research preserves evidence. Pain points, desires, beliefs,
            opportunities, personas, and angles are formally organized during
            the next phases.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}