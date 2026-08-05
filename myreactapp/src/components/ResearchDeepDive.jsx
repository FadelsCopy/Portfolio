// src/components/ResearchDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const researchBranches = [
  {
    id: 'customer',
    number: '01.1',
    title: 'Customer Research',
    shortTitle: 'Customer',
    icon: 'personas',
    description:
      'Understand who buys, what they struggle with, what they want, what they believe, and what motivates action.',

    sources: [
      {
        name: 'Reddit',
        description: 'Communities, discussions, questions, and lived experiences.',
        icon: 'reddit',
      },
      {
        name: 'Trustpilot',
        description: 'Customer satisfaction, frustrations, expectations, and objections.',
        icon: 'trustpilot',
      },
      {
        name: 'Amazon Reviews',
        description: 'Product feedback, feature priorities, complaints, and alternatives.',
        icon: 'amazon',
      },
      {
        name: 'YouTube Comments',
        description: 'Questions, reactions, beliefs, objections, and customer language.',
        icon: 'youtube',
      },
      {
        name: 'TikTok Comments',
        description: 'Current language, trends, objections, and emotional reactions.',
        icon: 'tiktok',
      },
      {
        name: 'Instagram Comments',
        description: 'Audience sentiment, questions, complaints, and desired outcomes.',
        icon: 'instagram',
      },
      {
        name: 'Forums',
        description: 'Long-form discussions, niche communities, and detailed experiences.',
        icon: 'research',
      },
      {
        name: 'Customer Interviews',
        description: 'Direct conversations about motivation, behavior, and decision-making.',
        icon: 'personas',
      },
      {
        name: 'Support Tickets',
        description: 'Product confusion, recurring issues, objections, and customer friction.',
        icon: 'briefing',
      },
      {
        name: 'Survey Responses',
        description: 'Structured first-party information from existing customers.',
        icon: 'insights',
      },
    ],

    outputs: [
      'Pain points',
      'Desired outcomes',
      'Dream outcomes',
      'Buying motivations',
      'Buying triggers',
      'Objections',
      'Emotional drivers',
      'Customer language',
      'Failed alternatives',
      'Identity goals',
      'Feared outcomes',
      'Customer stories',
    ],

    tools: [
      'Reddit',
      'Trustpilot',
      'Amazon',
      'YouTube',
      'TikTok',
      'Instagram',
      'Google Sheets',
      'ChatGPT',
      'Claude',
      'NotebookLM',
    ],

    sops: [
      'Customer Research SOP',
      'Reddit Research SOP',
      'Trustpilot Research SOP',
      'Review Mining SOP',
      'Customer Interview SOP',
      'Voice-of-Customer Collection SOP',
    ],
  },

  {
    id: 'product',
    number: '01.2',
    title: 'Product Research',
    shortTitle: 'Product',
    icon: 'foundation',
    description:
      'Understand the product, its mechanism, benefits, limitations, proof, claims, and customer-perceived value.',

    sources: [
      {
        name: 'Product Page',
        description: 'Claims, benefits, features, mechanism, offer, and positioning.',
        icon: 'foundation',
      },
      {
        name: 'Product Reviews',
        description: 'Real-world results, complaints, usage patterns, and expectations.',
        icon: 'trustpilot',
      },
      {
        name: 'Support Documentation',
        description: 'Usage instructions, product limitations, and common questions.',
        icon: 'knowledge',
      },
      {
        name: 'Customer Support',
        description: 'Common confusion, product friction, and expectations.',
        icon: 'briefing',
      },
      {
        name: 'Scientific Evidence',
        description: 'Studies, ingredient evidence, mechanism support, and claims.',
        icon: 'research',
      },
      {
        name: 'Founder Interviews',
        description: 'Product origin, mission, differentiation, and internal knowledge.',
        icon: 'personas',
      },
    ],

    outputs: [
      'Feature-benefit map',
      'Product mechanism',
      'Primary benefits',
      'Secondary benefits',
      'Product proof',
      'Claims inventory',
      'Usage experience',
      'Product limitations',
      'Customer-perceived value',
      'Differentiation opportunities',
    ],

    tools: [
      'Brand Website',
      'Google Docs',
      'Google Scholar',
      'ChatGPT',
      'Claude',
      'NotebookLM',
    ],

    sops: [
      'Product Research SOP',
      'Feature-to-Benefit SOP',
      'Mechanism Research SOP',
      'Claims & Proof SOP',
    ],
  },

  {
    id: 'competitor',
    number: '01.3',
    title: 'Competitor Research',
    shortTitle: 'Competitors',
    icon: 'analysis',
    description:
      'Study direct, indirect, and adjacent competitors to identify patterns, gaps, saturated messages, and emerging opportunities.',

    sources: [
      {
        name: 'Meta Ad Library',
        description: 'Active competitor ads, messaging, offers, formats, and creative patterns.',
        icon: 'meta',
      },
      {
        name: 'TikTok Creative Center',
        description: 'Popular creative formats, trends, hooks, and category activity.',
        icon: 'tiktok',
      },
      {
        name: 'Foreplay',
        description: 'Competitor ads, swipe files, landing pages, and creative organization.',
        icon: 'foreplay',
      },
      {
        name: 'Competitor Websites',
        description: 'Positioning, offers, claims, mechanisms, and customer journey.',
        icon: 'foundation',
      },
      {
        name: 'Competitor Reviews',
        description: 'Customer complaints, expectations, strengths, and weaknesses.',
        icon: 'trustpilot',
      },
      {
        name: 'Organic Social',
        description: 'Content strategy, engagement, comments, and audience response.',
        icon: 'instagram',
      },
    ],

    outputs: [
      'Direct competitor map',
      'Indirect competitor map',
      'Adjacent-market inspiration',
      'Messaging patterns',
      'Creative patterns',
      'Offer patterns',
      'Competitor weaknesses',
      'Market gaps',
      'Saturated claims',
      'Differentiation opportunities',
    ],

    tools: [
      'Meta Ad Library',
      'TikTok Creative Center',
      'Foreplay',
      'GetHooked',
      'TrendTrack',
      'Minea',
      'Google Sheets',
    ],

    sops: [
      'Competitor Research SOP',
      'Direct Competitor SOP',
      'Indirect Competitor SOP',
      'Competitor Creative Audit SOP',
      'Competitor Offer Audit SOP',
    ],
  },

  {
    id: 'market',
    number: '01.4',
    title: 'Market Research',
    shortTitle: 'Market',
    icon: 'research',
    description:
      'Understand category maturity, customer awareness, market sophistication, demand, trends, and growth opportunities.',

    sources: [
      {
        name: 'Category Reports',
        description: 'Market size, growth, category behavior, and emerging segments.',
        icon: 'analysis',
      },
      {
        name: 'Google Trends',
        description: 'Search demand, seasonality, and growing or declining interest.',
        icon: 'scaling',
      },
      {
        name: 'Social Trends',
        description: 'Emerging conversations, behavior, formats, and cultural signals.',
        icon: 'newConcepts',
      },
      {
        name: 'Search Results',
        description: 'Common questions, awareness levels, and category language.',
        icon: 'research',
      },
      {
        name: 'News & Publications',
        description: 'Category changes, innovation, regulation, and public perception.',
        icon: 'knowledge',
      },
    ],

    outputs: [
      'Market awareness level',
      'Market sophistication level',
      'Category trends',
      'Emerging customer segments',
      'Seasonality',
      'Growth opportunities',
      'Cultural signals',
      'Demand signals',
      'Category language',
      'Market threats',
    ],

    tools: [
      'Google Trends',
      'Google Search',
      'Perplexity',
      'ChatGPT',
      'Claude',
      'Gemini',
      'Exploding Topics',
    ],

    sops: [
      'Market Research SOP',
      'Awareness-Level Analysis SOP',
      'Market Sophistication SOP',
      'Trend Research SOP',
    ],
  },

  {
    id: 'offer',
    number: '01.5',
    title: 'Offer Research',
    shortTitle: 'Offer',
    icon: 'angles',
    description:
      'Understand how the product is packaged, priced, positioned, de-risked, and presented to increase perceived value.',

    sources: [
      {
        name: 'Brand Offers',
        description: 'Current pricing, bundles, guarantees, discounts, and bonuses.',
        icon: 'foundation',
      },
      {
        name: 'Competitor Offers',
        description: 'Category standards, pricing patterns, bundles, and guarantees.',
        icon: 'analysis',
      },
      {
        name: 'Customer Reviews',
        description: 'Value perception, price objections, and purchase expectations.',
        icon: 'trustpilot',
      },
      {
        name: 'Landing Pages',
        description: 'Offer presentation, proof, urgency, framing, and risk reversal.',
        icon: 'briefing',
      },
    ],

    outputs: [
      'Offer inventory',
      'Price positioning',
      'Bundle opportunities',
      'Guarantee opportunities',
      'Risk-reversal opportunities',
      'Bonus opportunities',
      'Urgency opportunities',
      'Value perception',
      'Offer objections',
      'Offer-message opportunities',
    ],

    tools: [
      'Brand Website',
      'Competitor Websites',
      'Foreplay',
      'Google Sheets',
      'ChatGPT',
      'Claude',
    ],

    sops: [
      'Offer Research SOP',
      'Competitor Offer SOP',
      'Offer Positioning SOP',
      'Risk-Reversal SOP',
    ],
  },

  {
    id: 'creative',
    number: '01.6',
    title: 'Creative Research',
    shortTitle: 'Creative',
    icon: 'concepts',
    description:
      'Study winning advertisements, creative formats, visual patterns, hooks, narratives, and execution opportunities.',

    sources: [
      {
        name: 'Meta Ad Library',
        description: 'Active advertisements, messaging, formats, and creative direction.',
        icon: 'meta',
      },
      {
        name: 'Foreplay',
        description: 'Saved ads, boards, competitor tracking, and landing pages.',
        icon: 'foreplay',
      },
      {
        name: 'TikTok',
        description: 'Organic hooks, formats, creators, trends, and native behavior.',
        icon: 'tiktok',
      },
      {
        name: 'Instagram',
        description: 'Visual trends, creators, social formats, and audience response.',
        icon: 'instagram',
      },
      {
        name: 'YouTube',
        description: 'Long-form sales narratives, demonstrations, and authority content.',
        icon: 'youtube',
      },
      {
        name: 'Historical Winners',
        description: 'Previously validated patterns from the brand’s own ad account.',
        icon: 'scaling',
      },
    ],

    outputs: [
      'Creative swipe library',
      'Winning hook patterns',
      'Winning visual patterns',
      'Format opportunities',
      'Creator opportunities',
      'Narrative patterns',
      'Editing patterns',
      'Platform-native ideas',
      'Creative gaps',
      'Execution references',
    ],

    tools: [
      'Meta Ad Library',
      'Foreplay',
      'GetHooked',
      'TrendTrack',
      'TikTok',
      'Instagram',
      'YouTube',
      'Motion',
    ],

    sops: [
      'Creative Research SOP',
      'Swipe Library SOP',
      'Hook Research SOP',
      'Organic Content Research SOP',
      'Winning Ad Breakdown SOP',
    ],
  },

  {
    id: 'social',
    number: '01.7',
    title: 'Social Listening',
    shortTitle: 'Social',
    icon: 'instagram',
    description:
      'Continuously monitor real conversations, trends, objections, language, and emotional reactions across social platforms.',

    sources: [
      {
        name: 'TikTok',
        description: 'Emerging hooks, consumer language, trends, and comments.',
        icon: 'tiktok',
      },
      {
        name: 'Instagram',
        description: 'Comments, creators, visual trends, and community response.',
        icon: 'instagram',
      },
      {
        name: 'YouTube',
        description: 'Long-form discussions, questions, and deeper objections.',
        icon: 'youtube',
      },
      {
        name: 'Reddit',
        description: 'Honest discussions, niche communities, and detailed experiences.',
        icon: 'reddit',
      },
      {
        name: 'Facebook Groups',
        description: 'Community discussions, product recommendations, and complaints.',
        icon: 'meta',
      },
    ],

    outputs: [
      'Emerging language',
      'New objections',
      'New desires',
      'Trending formats',
      'Cultural signals',
      'Customer questions',
      'Organic hooks',
      'Creator opportunities',
      'New research hypotheses',
    ],

    tools: [
      'TikTok',
      'Instagram',
      'YouTube',
      'Reddit',
      'Facebook',
      'TrendTrack',
      'Google Sheets',
    ],

    sops: [
      'Social Listening SOP',
      'TikTok Research SOP',
      'Instagram Research SOP',
      'Comment Mining SOP',
      'Organic Hook Research SOP',
    ],
  },

  {
    id: 'first-party',
    number: '01.8',
    title: 'First-Party Data Research',
    shortTitle: 'First-Party',
    icon: 'knowledge',
    description:
      'Use information already owned by the brand to identify real customer behavior, friction, demand, and performance patterns.',

    sources: [
      {
        name: 'Customer Surveys',
        description: 'Structured responses from real buyers and prospects.',
        icon: 'insights',
      },
      {
        name: 'Support Tickets',
        description: 'Recurring confusion, complaints, objections, and expectations.',
        icon: 'briefing',
      },
      {
        name: 'Email Replies',
        description: 'Customer language, questions, buying motivation, and objections.',
        icon: 'knowledge',
      },
      {
        name: 'Ad Comments',
        description: 'Real-time reactions, objections, sentiment, and misunderstanding.',
        icon: 'meta',
      },
      {
        name: 'Ad Account Data',
        description: 'Validated creative patterns, winners, fatigue, and audience response.',
        icon: 'analysis',
      },
      {
        name: 'Analytics',
        description: 'Customer journey behavior, conversion friction, and funnel performance.',
        icon: 'scaling',
      },
    ],

    outputs: [
      'Customer behavior patterns',
      'Conversion friction',
      'Recurring objections',
      'Validated creative patterns',
      'Best-performing messages',
      'Customer questions',
      'Retention insights',
      'Offer friction',
      'Landing-page friction',
      'New testing opportunities',
    ],

    tools: [
      'Meta Ads Manager',
      'TikTok Ads Manager',
      'Google Analytics 4',
      'Shopify',
      'Triple Whale',
      'Google Sheets',
      'Gorgias',
      'Klaviyo',
    ],

    sops: [
      'First-Party Research SOP',
      'Ad Comment Analysis SOP',
      'Support Ticket Research SOP',
      'Creative Performance Mining SOP',
    ],
  },

  {
    id: 'ai',
    number: '01.9',
    title: 'AI Research Acceleration',
    shortTitle: 'AI Acceleration',
    icon: 'newConcepts',
    description:
      'Use AI to accelerate organization, synthesis, clustering, pattern recognition, and insight extraction without replacing human judgment.',

    sources: [
      {
        name: 'ChatGPT',
        description: 'Research planning, clustering, synthesis, and structured analysis.',
        icon: 'newConcepts',
      },
      {
        name: 'Claude',
        description: 'Long-document analysis, synthesis, and customer-language extraction.',
        icon: 'insights',
      },
      {
        name: 'Gemini',
        description: 'Multimodal analysis, web research, video, and visual interpretation.',
        icon: 'research',
      },
      {
        name: 'NotebookLM',
        description: 'Source-grounded synthesis across uploaded research materials.',
        icon: 'knowledge',
      },
    ],

    outputs: [
      'Faster research synthesis',
      'Theme clustering',
      'Language categorization',
      'Pattern recognition',
      'Research summaries',
      'Contradiction detection',
      'Insight prioritization',
      'Research gap detection',
    ],

    tools: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'NotebookLM',
      'Perplexity',
      'Google Sheets',
    ],

    sops: [
      'AI Research Workflow SOP',
      'AI Insight Extraction SOP',
      'Research Prompt Library',
      'AI Quality-Control SOP',
    ],
  },
];

const deepDiveReveal = {
  hidden: {
    opacity: 0,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: {
      duration: 0.2,
    },
  },
};

const panelReveal = {
  hidden: {
    opacity: 0,
    x: 16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 8,
    transition: {
      duration: 0.16,
    },
  },
};

function ResearchSourceCard({ source }) {
  return (
    <div className="creative-op-research-source-card">
      <span className="creative-op-research-source-icon">
        <CreativeStrategyOPIcon type={source.icon} size={21} />
      </span>

      <div>
        <strong>{source.name}</strong>
        <p>{source.description}</p>
      </div>
    </div>
  );
}

function ResearchListSection({ title, items, icon }) {
  return (
    <section className="creative-op-research-detail-section">
      <div className="creative-op-research-section-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-research-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function ResearchDeepDive({ onBack }) {
  const [selectedBranchId, setSelectedBranchId] = useState('customer');

  const selectedBranch =
    researchBranches.find(
      (branch) => branch.id === selectedBranchId
    ) || researchBranches[0];

  return (
    <motion.section
      className="creative-op-research-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-research-topbar">
        <div>
          <button
            type="button"
            className="creative-op-deep-back-button"
            onClick={onBack}
          >
            <span aria-hidden="true">←</span>
            Back to Full System
          </button>

          <div className="creative-op-breadcrumbs">
            <button type="button" onClick={onBack}>
              Creative Strategy OP
            </button>

            <span>/</span>

            <strong>Research Engine</strong>
          </div>
        </div>

        <div className="creative-op-research-heading">
          <span>STAGE 01 / INTELLIGENCE</span>
          <h1>Research Engine</h1>
          <p>
            Collect, organize, and transform market information into
            actionable customer and creative intelligence.
          </p>
        </div>

        <div className="creative-op-research-counter">
          <strong>{researchBranches.length}</strong>
          <span>Research systems</span>
        </div>
      </header>

      <div className="creative-op-research-layout">
        <aside className="creative-op-research-branch-list">
          <div className="creative-op-research-branch-intro">
            <span>RESEARCH SYSTEMS</span>
            <h2>Choose a research layer</h2>
          </div>

          <nav>
            {researchBranches.map((branch) => {
              const isActive = branch.id === selectedBranchId;

              return (
                <button
                  type="button"
                  key={branch.id}
                  className={`creative-op-research-branch-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedBranchId(branch.id)}
                >
                  <span className="creative-op-research-branch-number">
                    {branch.number}
                  </span>

                  <span className="creative-op-research-branch-icon">
                    <CreativeStrategyOPIcon
                      type={branch.icon}
                      size={18}
                    />
                  </span>

                  <span>{branch.shortTitle}</span>

                  <CreativeStrategyOPIcon
                    type="arrowRight"
                    size={15}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="creative-op-research-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBranch.id}
              className="creative-op-research-selected"
              variants={panelReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="creative-op-research-selected-header">
                <div className="creative-op-research-selected-icon">
                  <CreativeStrategyOPIcon
                    type={selectedBranch.icon}
                    size={30}
                  />
                </div>

                <div>
                  <span>{selectedBranch.number}</span>
                  <h2>{selectedBranch.title}</h2>
                  <p>{selectedBranch.description}</p>
                </div>
              </div>

              <section className="creative-op-research-sources-section">
                <div className="creative-op-research-title-row">
                  <div>
                    <span>DATA COLLECTION</span>
                    <h3>Research Sources</h3>
                  </div>

                  <small>
                    {selectedBranch.sources.length} sources
                  </small>
                </div>

                <div className="creative-op-research-sources-grid">
                  {selectedBranch.sources.map((source) => (
                    <ResearchSourceCard
                      key={source.name}
                      source={source}
                    />
                  ))}
                </div>
              </section>

              <div className="creative-op-research-bottom-grid">
                <ResearchListSection
                  title="Expected Outputs"
                  items={selectedBranch.outputs}
                  icon="validation"
                />

                <ResearchListSection
                  title="Tools"
                  items={selectedBranch.tools}
                  icon="operations"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-research-sop-panel">
          <span className="creative-op-research-sop-eyebrow">
            DOCUMENTATION LAYER
          </span>

          <h2>SOP Library</h2>

          <p>
            Each research system will connect to a complete execution
            document, template, checklist, and AI prompt library.
          </p>

          <div className="creative-op-research-sop-list">
            {selectedBranch.sops.map((sop) => (
              <div
                className="creative-op-research-sop-card"
                key={sop}
              >
                <span>
                  <CreativeStrategyOPIcon
                    type="knowledge"
                    size={18}
                  />
                </span>

                <div>
                  <strong>{sop}</strong>
                  <small>Document coming soon</small>
                </div>

                <em>PLANNED</em>
              </div>
            ))}
          </div>

          <div className="creative-op-research-output-card">
            <span>FINAL RESEARCH OUTPUT</span>

            <h3>Structured Research Database</h3>

            <p>
              Every source is organized into evidence, customer
              language, patterns, insights, and strategic
              opportunities.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}