// src/data/creativeStrategyOPData.js

export const creativeStrategyOPStages = [
  {
    id: 'context',
    number: '00',
    shortTitle: 'Context',
    title: 'Business Context & Unit Economics',
    category: 'Foundation',
    icon: 'foundation',

    purpose:
      'Understand the brand, business model, growth targets, economics, existing performance, and operational constraints before making creative decisions.',

    inputs: [
      'Brand onboarding information',
      'Business goals',
      'Product catalogue',
      'Current offers',
      'Advertising account data',
      'Customer data',
      'Existing creative assets',
    ],

    systems: [
      'Business Objectives',
      'Revenue & Growth Goals',
      'Product Portfolio',
      'Unit Economics',
      'Offer Architecture',
      'Existing Creative Audit',
      'Operational Constraints',
      'Compliance Constraints',
    ],

    outputs: [
      'Brand & Growth Brief',
      'Creative Performance Baseline',
      'Business Constraints Summary',
      'Initial Strategic Priorities',
    ],

    tools: [
      'Google Docs',
      'Google Sheets',
      'Meta Ads Manager',
      'TikTok Ads Manager',
      'Google Analytics 4',
      'Shopify',
      'Triple Whale',
    ],

    sops: [
      {
        label: 'Brand Onboarding SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Unit Economics SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Existing Creative Audit SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 1,
      row: 1,
    },
  },

  {
    id: 'research',
    number: '01',
    shortTitle: 'Research',
    title: 'Research Engine',
    category: 'Intelligence',
    icon: 'research',

    purpose:
      'Collect customer, product, competitor, market, offer, creative, social, and first-party intelligence that can support strategic decisions.',

    inputs: [
      'Brand & Growth Brief',
      'Existing customer data',
      'Product information',
      'Competitor list',
      'Existing creative assets',
      'First-party customer feedback',
    ],

    systems: [
      'Brand Research',
      'Product Research',
      'Customer Research',
      'Voice-of-Customer Research',
      'Competitor Research',
      'Indirect Competitor Research',
      'Market Research',
      'Offer Research',
      'Creative Research',
      'Social Listening',
      'Trend Research',
      'First-Party Data Research',
    ],

    sources: [
      {
        name: 'Reddit',
        type: 'Community',
        icon: 'reddit',
      },
      {
        name: 'Trustpilot',
        type: 'Reviews',
        icon: 'trustpilot',
      },
      {
        name: 'Amazon',
        type: 'Reviews',
        icon: 'amazon',
      },
      {
        name: 'Meta Ad Library',
        type: 'Competitor Ads',
        icon: 'meta',
      },
      {
        name: 'TikTok Creative Center',
        type: 'Creative Intelligence',
        icon: 'tiktok',
      },
      {
        name: 'YouTube',
        type: 'Comments & Content',
        icon: 'youtube',
      },
      {
        name: 'Instagram',
        type: 'Social Listening',
        icon: 'instagram',
      },
      {
        name: 'Foreplay',
        type: 'Creative Spy Tool',
        icon: 'foreplay',
      },
    ],

    outputs: [
      'Structured Research Database',
      'Voice-of-Customer Library',
      'Competitor Intelligence Library',
      'Creative Swipe Library',
      'Market Opportunity Notes',
    ],

    tools: [
      'Reddit',
      'Trustpilot',
      'Amazon',
      'Meta Ad Library',
      'TikTok Creative Center',
      'Foreplay',
      'GetHooked',
      'TrendTrack',
      'YouTube',
      'Instagram',
      'ChatGPT',
      'Claude',
      'Gemini',
      'NotebookLM',
      'Google Sheets',
    ],

    sops: [
      {
        label: 'Customer Research SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Reddit Research SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Trustpilot Research SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Competitor Research SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Social Listening SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Spy Tools SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 2,
      row: 1,
    },
  },

  {
    id: 'insights',
    number: '02',
    shortTitle: 'Insights',
    title: 'Insight Extraction',
    category: 'Strategy',
    icon: 'insights',

    purpose:
      'Transform raw research into structured customer insights that can directly support personas, messaging, angles, concepts, and creative hypotheses.',

    inputs: [
      'Structured Research Database',
      'Voice-of-Customer Library',
      'Competitor Intelligence',
      'First-party feedback',
      'Creative performance history',
    ],

    systems: [
      'Pain Point Extraction',
      'Desire Extraction',
      'Objection Extraction',
      'Belief Mapping',
      'Buying Motivation Analysis',
      'Buying Trigger Analysis',
      'Emotional Driver Mapping',
      'Jobs-To-Be-Done Analysis',
      'Awareness Analysis',
      'Market Sophistication Analysis',
      'Language Pattern Extraction',
      'Competitor Gap Analysis',
    ],

    insightTypes: [
      'Pain Points',
      'Desired Outcomes',
      'Dream Outcomes',
      'Emotional Desires',
      'Functional Desires',
      'Objections',
      'Buying Motivations',
      'Buying Triggers',
      'False Beliefs',
      'Existing Beliefs',
      'Failed Alternatives',
      'Competitor Complaints',
      'Trust Signals',
      'Customer Language',
      'Identity Goals',
      'Feared Outcomes',
      'Jobs To Be Done',
      'Awareness Levels',
      'Mechanism Beliefs',
      'Customer Stories',
      'Before & After States',
    ],

    outputs: [
      'Customer Insight Library',
      'Voice-of-Customer Themes',
      'Belief Map',
      'Objection Library',
      'Emotional Driver Map',
      'Strategic Opportunity Notes',
    ],

    tools: [
      'Google Sheets',
      'Google Docs',
      'ChatGPT',
      'Claude',
      'Gemini',
      'NotebookLM',
      'Notion',
    ],

    sops: [
      {
        label: 'Insight Extraction SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Voice-of-Customer Analysis SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Belief Mapping SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Awareness Analysis SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 3,
      row: 1,
    },
  },

  {
    id: 'personas',
    number: '03',
    shortTitle: 'Personas',
    title: 'Persona & Opportunity Mapping',
    category: 'Strategy',
    icon: 'personas',

    purpose:
      'Organize customer insights into actionable personas, sub-personas, awareness groups, and messaging opportunities.',

    inputs: [
      'Customer Insight Library',
      'Belief Map',
      'Objection Library',
      'Emotional Driver Map',
    ],

    systems: [
      'Core Persona Development',
      'Sub-Persona Development',
      'Awareness Segmentation',
      'Buying Context Mapping',
      'Pain Intensity Mapping',
      'Purchase Urgency Mapping',
      'TAM Expansion Mapping',
    ],

    outputs: [
      'Persona Cards',
      'Sub-Persona Cards',
      'Messaging Opportunities',
      'TAM Expansion Opportunities',
    ],

    tools: [
      'Google Docs',
      'Google Sheets',
      'ChatGPT',
      'Claude',
      'FigJam',
    ],

    sops: [
      {
        label: 'Persona Development SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Sub-Persona SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'TAM Expansion SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 4,
      row: 1,
    },
  },

  {
    id: 'angles',
    number: '04',
    shortTitle: 'Angles',
    title: 'Angle Engine',
    category: 'Strategy',
    icon: 'angles',

    purpose:
      'Transform validated customer insights and personas into persuasive marketing angles.',

    inputs: [
      'Persona Cards',
      'Customer Insight Library',
      'Messaging Opportunities',
      'Competitor Gaps',
    ],

    systems: [
      'Problem Angles',
      'Fear Angles',
      'Desire Angles',
      'Identity Angles',
      'Transformation Angles',
      'Mechanism Angles',
      'Curiosity Angles',
      'Contrarian Angles',
      'Proof Angles',
      'Comparison Angles',
      'Story Angles',
      'Opportunity Cost Angles',
    ],

    outputs: [
      'Angle Backlog',
      'Persona-to-Angle Matrix',
      'Initial Angle Hypotheses',
    ],

    tools: [
      'Google Sheets',
      'Google Docs',
      'ChatGPT',
      'Claude',
      'Foreplay',
    ],

    sops: [
      {
        label: 'Angle Generation SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Persona-to-Angle SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 5,
      row: 1,
    },
  },

  {
    id: 'validation',
    number: '05',
    shortTitle: 'Validation',
    title: 'Angle Validation',
    category: 'Decision',
    icon: 'validation',

    purpose:
      'Evaluate whether an angle has enough evidence, emotional strength, differentiation, and execution potential to justify testing.',

    inputs: [
      'Angle Backlog',
      'Research Evidence',
      'Persona Cards',
      'Competitor Intelligence',
    ],

    systems: [
      'Research Evidence Score',
      'Customer Relevance Score',
      'Emotional Strength Score',
      'Novelty Score',
      'Differentiation Score',
      'Visual Potential Score',
      'Hook Potential Score',
      'Scalability Score',
      'Compliance Review',
      'Production Complexity Review',
    ],

    outputs: [
      'Approved Angles',
      'Angles Needing Refinement',
      'Rejected Angles',
      'Prioritized Testing Queue',
    ],

    tools: [
      'Google Sheets',
      'Google Docs',
      'ChatGPT',
      'Claude',
    ],

    sops: [
      {
        label: 'Angle Validation SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Angle Scoring Template',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 6,
      row: 1,
    },
  },

  {
    id: 'concepts',
    number: '06',
    shortTitle: 'Concepts',
    title: 'Concept Development',
    category: 'Creative Development',
    icon: 'concepts',

    purpose:
      'Turn approved angles into specific, testable advertisements with a clear hypothesis, format, narrative, visual idea, and call to action.',

    inputs: [
      'Approved Angles',
      'Persona Cards',
      'Creative Swipe Library',
      'Offer Information',
    ],

    systems: [
      'Creative Hypothesis',
      'Format Selection',
      'Hook Development',
      'Narrative Development',
      'Proof Selection',
      'Visual Device',
      'Offer Integration',
      'CTA Development',
    ],

    outputs: [
      'Concept Cards',
      'Hook Options',
      'Format Recommendations',
      'Creative Hypotheses',
    ],

    tools: [
      'Google Docs',
      'Google Sheets',
      'ChatGPT',
      'Claude',
      'Foreplay',
      'Figma',
    ],

    sops: [
      {
        label: 'Concept Development SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Hook Development SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Format Selection SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 1,
      row: 2,
    },
  },

  {
    id: 'mvp',
    number: '07',
    shortTitle: 'MVP Test',
    title: 'Minimum Viable Creative',
    category: 'Testing',
    icon: 'mvp',

    purpose:
      'Create the smallest and fastest version of a creative capable of validating the central hypothesis before committing to larger production.',

    inputs: [
      'Concept Card',
      'Creative Hypothesis',
      'Available Assets',
      'Production Capacity',
    ],

    systems: [
      'Core Hypothesis Selection',
      'Minimum Asset Requirements',
      'Limited Hook Variations',
      'Fast Production Method',
      'Testing Success Criteria',
      'Testing Budget',
      'Testing Window',
    ],

    outputs: [
      'Minimum Viable Creative',
      'Testing Plan',
      'Success Criteria',
    ],

    tools: [
      'CapCut',
      'Figma',
      'Canva',
      'ElevenLabs',
      'HeyGen',
      'Runway',
      'Veo',
      'ChatGPT',
    ],

    sops: [
      {
        label: 'Minimum Viable Creative SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Fast Testing SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 2,
      row: 2,
    },
  },

  {
    id: 'briefing',
    number: '08',
    shortTitle: 'Briefing',
    title: 'Creative Briefing',
    category: 'Production',
    icon: 'briefing',

    purpose:
      'Convert the creative strategy into clear instructions for editors, designers, creators, and AI production systems.',

    inputs: [
      'Approved Concept Card',
      'Script',
      'Visual References',
      'Testing Objective',
    ],

    systems: [
      'Editor Brief',
      'Designer Brief',
      'Creator Brief',
      'UGC Brief',
      'AI Generation Brief',
      'Voiceover Brief',
      'Landing Page Brief',
      'Advertorial Brief',
    ],

    outputs: [
      'Production-Ready Brief',
      'Shot List',
      'Asset Checklist',
      'Editing Direction',
    ],

    tools: [
      'Google Docs',
      'Google Drive',
      'Loom',
      'Figma',
      'Notion',
      'Slack',
    ],

    sops: [
      {
        label: 'Creative Brief SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Editor Brief SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creator Brief SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 3,
      row: 2,
    },
  },

  {
    id: 'production',
    number: '09',
    shortTitle: 'Production',
    title: 'Production & Quality Assurance',
    category: 'Production',
    icon: 'production',

    purpose:
      'Produce launch-ready creative assets while preserving the strategy, message, quality, and platform requirements.',

    inputs: [
      'Production-Ready Brief',
      'Source Assets',
      'Script',
      'Creative References',
    ],

    systems: [
      'Asset Collection',
      'Creator Recording',
      'AI Asset Generation',
      'Static Design',
      'Video Editing',
      'Voiceover Production',
      'Captioning',
      'Sound Design',
      'Brand Review',
      'Compliance Review',
      'Technical QA',
    ],

    outputs: [
      'Launch-Ready Creative',
      'Approved Final Assets',
      'Creative Variations',
    ],

    tools: [
      'CapCut',
      'Adobe Premiere Pro',
      'Figma',
      'Canva',
      'ElevenLabs',
      'HeyGen',
      'Runway',
      'Veo',
      'Google Drive',
    ],

    sops: [
      {
        label: 'Production SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative QA SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'AI Asset Production SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 4,
      row: 2,
    },
  },

  {
    id: 'launch',
    number: '10',
    shortTitle: 'Launch',
    title: 'Launch & Tracking',
    category: 'Testing',
    icon: 'launch',

    purpose:
      'Launch every creative as a documented experiment with traceable hypotheses, naming, dates, audiences, offers, and performance data.',

    inputs: [
      'Launch-Ready Creative',
      'Testing Plan',
      'Campaign Structure',
      'Tracking Requirements',
    ],

    systems: [
      'Creative ID',
      'Naming Convention',
      'Hypothesis Logging',
      'Campaign Assignment',
      'Audience Assignment',
      'Placement Assignment',
      'Testing Window',
      'Budget Assignment',
      'Landing Page Assignment',
    ],

    outputs: [
      'Tracked Live Experiment',
      'Creative Testing Record',
      'Launch Log',
    ],

    tools: [
      'Meta Ads Manager',
      'TikTok Ads Manager',
      'Google Ads',
      'Google Sheets',
      'Notion',
      'Motion',
    ],

    sops: [
      {
        label: 'Creative Launch SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Naming Convention SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Testing Tracker Template',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 5,
      row: 2,
    },
  },

  {
    id: 'analysis',
    number: '11',
    shortTitle: 'Analysis',
    title: 'Performance Analysis',
    category: 'Intelligence',
    icon: 'analysis',

    purpose:
      'Diagnose why each creative succeeded, partially succeeded, or failed using performance data and qualitative evidence.',

    inputs: [
      'Live Experiment Data',
      'Creative Asset',
      'Campaign Context',
      'Comments and Feedback',
    ],

    systems: [
      'Attention Analysis',
      'Retention Analysis',
      'Traffic Analysis',
      'Conversion Analysis',
      'Business Performance Analysis',
      'Qualitative Feedback Analysis',
      'Creative Diagnosis',
    ],

    metrics: [
      'Thumb Stop Ratio',
      'Hook Rate',
      'Three-Second Views',
      'Hold Rate',
      'Average Watch Time',
      '25% View Rate',
      '50% View Rate',
      '75% View Rate',
      'Completion Rate',
      'CTR',
      'Outbound CTR',
      'CPC',
      'Landing Page Views',
      'Conversion Rate',
      'CPA',
      'CAC',
      'ROAS',
      'Revenue',
      'AOV',
      'MER',
      'Spend Scalability',
    ],

    outputs: [
      'Creative Diagnosis',
      'Performance Report',
      'Winning Components',
      'Weak Components',
      'Actionable Learnings',
    ],

    tools: [
      'Meta Ads Manager',
      'TikTok Ads Manager',
      'Google Ads',
      'Google Analytics 4',
      'Motion',
      'Triple Whale',
      'Google Sheets',
    ],

    sops: [
      {
        label: 'Performance Analysis SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Metrics SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Qualitative Feedback SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 6,
      row: 2,
    },
  },

  {
    id: 'decision',
    number: '12',
    shortTitle: 'Decision',
    title: 'Decision Engine',
    category: 'Decision',
    icon: 'decision',

    purpose:
      'Use evidence to determine whether a creative should be killed, iterated, scaled, refreshed, or used to generate a new hypothesis.',

    inputs: [
      'Creative Diagnosis',
      'Performance Report',
      'Winning Components',
      'Weak Components',
    ],

    systems: [
      'Complete Failure',
      'Strong Hook / Weak Retention',
      'Strong Engagement / Weak Conversion',
      'Mixed but Promising',
      'Winner',
    ],

    outputs: [
      'Kill Decision',
      'Iteration Decision',
      'Scaling Decision',
      'New Hypothesis',
      'Documented Learning',
    ],

    tools: [
      'Google Sheets',
      'Notion',
      'Meta Ads Manager',
      'Motion',
      'Loom',
      'Slack',
    ],

    sops: [
      {
        label: 'Creative Decision SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Kill, Iterate or Scale Framework',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 1,
      row: 3,
    },
  },

  {
    id: 'iteration',
    number: '13',
    shortTitle: 'Iteration',
    title: 'Iteration Engine',
    category: 'Optimization',
    icon: 'iteration',

    purpose:
      'Improve promising creatives through controlled changes while protecting the components already proven to work.',

    inputs: [
      'Creative Diagnosis',
      'Winning Components',
      'Weak Components',
      'Iteration Decision',
    ],

    systems: [
      'Hook Iteration',
      'Opening Visual Iteration',
      'Script Iteration',
      'Story Iteration',
      'Proof Iteration',
      'Mechanism Iteration',
      'Creator Iteration',
      'Editing Iteration',
      'Pacing Iteration',
      'CTA Iteration',
      'Offer Iteration',
      'Length Iteration',
      'Format Iteration',
      'Persona Iteration',
    ],

    outputs: [
      'Controlled Iteration Batch',
      'Updated Testing Hypothesis',
      'Iteration Launch Plan',
    ],

    tools: [
      'Google Docs',
      'Google Sheets',
      'CapCut',
      'Figma',
      'ChatGPT',
      'Claude',
      'Motion',
    ],

    sops: [
      {
        label: 'Creative Iteration SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Hook Iteration SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Controlled Variables SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 2,
      row: 3,
    },
  },

  {
    id: 'scaling',
    number: '14',
    shortTitle: 'Scaling',
    title: 'Winner Expansion & Scaling',
    category: 'Growth',
    icon: 'scaling',

    purpose:
      'Expand a validated winner into a larger creative family that can support more spend, audiences, placements, and longevity.',

    inputs: [
      'Validated Winner',
      'Winning Components',
      'Performance Benchmarks',
      'Scaling Opportunity',
    ],

    systems: [
      'New Hook Expansion',
      'New Creator Expansion',
      'New Opening Expansion',
      'New Body Expansion',
      'New CTA Expansion',
      'New Proof Expansion',
      'Format Expansion',
      'Duration Expansion',
      'Placement Expansion',
      'Audience Expansion',
      'Offer Expansion',
      'Landing Page Expansion',
      'Seasonal Expansion',
      'Localization',
    ],

    outputs: [
      'Creative Scaling Family',
      'Winner Variation Matrix',
      'Scaling Production Plan',
    ],

    tools: [
      'Google Sheets',
      'Google Docs',
      'CapCut',
      'Figma',
      'Meta Ads Manager',
      'Motion',
      'Foreplay',
    ],

    sops: [
      {
        label: 'Winner Scaling SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Expansion Matrix',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 3,
      row: 3,
    },
  },

  {
    id: 'new-concepts',
    number: '15',
    shortTitle: 'New Concepts',
    title: 'Always-On New Concept Pipeline',
    category: 'Growth',
    icon: 'newConcepts',

    purpose:
      'Keep generating and testing fresh concepts while existing winners are being scaled, reducing creative fatigue and dependency on a small number of ads.',

    inputs: [
      'New Research',
      'New Market Signals',
      'Creative Learnings',
      'Competitor Activity',
      'Customer Feedback',
    ],

    systems: [
      'Continuous Research',
      'New Insight Discovery',
      'New Persona Opportunities',
      'New Angle Generation',
      'New Concept Generation',
      'New MVP Testing',
    ],

    outputs: [
      'Fresh Concept Pipeline',
      'Weekly Net-New Concepts',
      'Future Testing Queue',
    ],

    tools: [
      'Foreplay',
      'TrendTrack',
      'GetHooked',
      'TikTok',
      'Instagram',
      'Reddit',
      'ChatGPT',
      'Claude',
      'Google Sheets',
    ],

    sops: [
      {
        label: 'New Concept Pipeline SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Fatigue Prevention SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 4,
      row: 3,
    },
  },

  {
    id: 'operations',
    number: '16',
    shortTitle: 'Operations',
    title: 'Creative Operations',
    category: 'Operations',
    icon: 'operations',

    purpose:
      'Coordinate priorities, concept volume, iteration volume, production capacity, approvals, deadlines, communication, and reporting.',

    inputs: [
      'Testing Priorities',
      'Production Capacity',
      'Creative Backlog',
      'Business Goals',
    ],

    systems: [
      'Weekly Creative Planning',
      'Testing Calendar',
      'Concept Volume Planning',
      'Iteration Volume Planning',
      'Production Capacity Planning',
      'Approval Workflow',
      'Deadline Management',
      'Team Communication',
      'Creative Reporting',
      'Retrospectives',
    ],

    outputs: [
      'Creative Calendar',
      'Production Tracker',
      'Weekly Testing Plan',
      'Team Status Report',
    ],

    tools: [
      'Notion',
      'Google Sheets',
      'Google Drive',
      'Google Docs',
      'Slack',
      'Loom',
      'Google Meet',
    ],

    sops: [
      {
        label: 'Creative Operations SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Weekly Planning SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Reporting SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 5,
      row: 3,
    },
  },

  {
    id: 'knowledge',
    number: '17',
    shortTitle: 'Knowledge',
    title: 'Knowledge Library',
    category: 'Intelligence',
    icon: 'knowledge',

    purpose:
      'Store customer insights, personas, angles, concepts, hooks, scripts, tests, performance results, templates, prompts, and learnings so every future decision becomes faster and stronger.',

    inputs: [
      'Research Findings',
      'Creative Tests',
      'Performance Data',
      'Team Learnings',
      'Winning Assets',
      'Failed Assets',
    ],

    systems: [
      'Customer Insight Library',
      'Persona Library',
      'Angle Library',
      'Concept Library',
      'Hook Library',
      'Script Library',
      'Creative Test History',
      'Winning Creative Library',
      'Failed Creative Library',
      'KPI Benchmark Library',
      'Swipe Library',
      'Prompt Library',
      'Template Library',
      'SOP Library',
    ],

    outputs: [
      'Institutional Creative Intelligence',
      'Searchable Creative Memory',
      'Reusable Strategic Assets',
    ],

    tools: [
      'Notion',
      'Google Drive',
      'Google Docs',
      'Google Sheets',
      'Foreplay',
      'NotebookLM',
    ],

    sops: [
      {
        label: 'Knowledge Library SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Creative Test Documentation SOP',
        status: 'planned',
        url: '',
      },
      {
        label: 'Swipe Library SOP',
        status: 'planned',
        url: '',
      },
    ],

    position: {
      column: 6,
      row: 3,
    },
  },
];

export const creativeStrategyOPConnections = [
  {
    from: 'context',
    to: 'research',
    type: 'primary',
  },
  {
    from: 'research',
    to: 'insights',
    type: 'primary',
  },
  {
    from: 'insights',
    to: 'personas',
    type: 'primary',
  },
  {
    from: 'personas',
    to: 'angles',
    type: 'primary',
  },
  {
    from: 'angles',
    to: 'validation',
    type: 'primary',
  },
  {
    from: 'validation',
    to: 'concepts',
    type: 'primary',
  },
  {
    from: 'concepts',
    to: 'mvp',
    type: 'primary',
  },
  {
    from: 'mvp',
    to: 'briefing',
    type: 'primary',
  },
  {
    from: 'briefing',
    to: 'production',
    type: 'primary',
  },
  {
    from: 'production',
    to: 'launch',
    type: 'primary',
  },
  {
    from: 'launch',
    to: 'analysis',
    type: 'primary',
  },
  {
    from: 'analysis',
    to: 'decision',
    type: 'primary',
  },
  {
    from: 'decision',
    to: 'iteration',
    type: 'iteration',
    label: 'Mixed / Promising',
  },
  {
    from: 'iteration',
    to: 'launch',
    type: 'feedback',
    label: 'Relaunch',
  },
  {
    from: 'decision',
    to: 'scaling',
    type: 'winner',
    label: 'Winner',
  },
  {
    from: 'decision',
    to: 'angles',
    type: 'failure',
    label: 'Failed Hypothesis',
  },
  {
    from: 'scaling',
    to: 'new-concepts',
    type: 'parallel',
    label: 'Keep Innovating',
  },
  {
    from: 'new-concepts',
    to: 'concepts',
    type: 'feedback',
    label: 'New Tests',
  },
  {
    from: 'operations',
    to: 'concepts',
    type: 'support',
  },
  {
    from: 'knowledge',
    to: 'research',
    type: 'support',
  },
  {
    from: 'analysis',
    to: 'knowledge',
    type: 'learning',
  },
  {
    from: 'scaling',
    to: 'knowledge',
    type: 'learning',
  },
];

export const creativeStrategyOPCategories = {
  Foundation: {
    label: 'Foundation',
    color: '#b8f238',
  },

  Intelligence: {
    label: 'Intelligence',
    color: '#00e5f2',
  },

  Strategy: {
    label: 'Strategy',
    color: '#7c83ff',
  },

  Decision: {
    label: 'Decision',
    color: '#f2b84b',
  },

  'Creative Development': {
    label: 'Creative Development',
    color: '#d977f5',
  },

  Testing: {
    label: 'Testing',
    color: '#4da6ff',
  },

  Production: {
    label: 'Production',
    color: '#35d69f',
  },

  Optimization: {
    label: 'Optimization',
    color: '#ff9566',
  },

  Growth: {
    label: 'Growth',
    color: '#b8f238',
  },

  Operations: {
    label: 'Operations',
    color: '#9aa8ba',
  },
};

export function getCreativeStrategyOPStage(stageId) {
  return creativeStrategyOPStages.find((stage) => stage.id === stageId);
}