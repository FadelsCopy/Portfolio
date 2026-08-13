// src/components/ConceptDevelopment.jsx

import { useMemo, useState } from 'react';

import StageDeepDiveLayout, {
  StageFlow,
  StageHighlight,
  StageSection,
} from '../shared/StageDeepDiveLayout';

/*
|--------------------------------------------------------------------------
| CONCEPT DEVELOPMENT DATA
|--------------------------------------------------------------------------
*/

const conceptEquation = [
  { value: '3', label: 'Personas' },
  { value: '10', label: 'Qualified Angles' },
  { value: '5', label: 'Ad Concepts per Angle' },
];

const conceptBuildSteps = [
  {
    number: '01',
    label: 'WHO',
    title: 'Persona + Awareness',
    description:
      'Define exactly who the concept is speaking to and what they already understand about the problem and solution.',
  },
  {
    number: '02',
    label: 'WHAT',
    title: 'Qualified Angle',
    description:
      'Lock the persuasive direction. The concept can change execution, but it should preserve the underlying angle being tested.',
  },
  {
    number: '03',
    label: 'WHY IT MATTERS',
    title: 'Key Insight',
    description:
      'Pull the customer truth, language, pain, desire, belief, objection, trigger, or tension that gives the angle strategic relevance.',
  },
  {
    number: '04',
    label: 'IDEA',
    title: 'Core Ad Concept',
    description:
      'Define the actual ad idea in one sentence: what happens, what the audience sees, and how the angle becomes tangible.',
  },
  {
    number: '05',
    label: 'CONTAINER',
    title: 'Format',
    description:
      'Choose the format that represents the concept clearly and matches the current testing objective, platform, and production reality.',
  },
  {
    number: '06',
    label: 'ATTENTION',
    title: 'Hook Direction',
    description:
      'Adapt proven hook intelligence into the verbal, visual, headline, first frame, or opening mechanism that fits the selected format.',
  },
  {
    number: '07',
    label: 'WHY BELIEVE',
    title: 'Proof + Product',
    description:
      'Decide what makes the message believable and how the product enters as the natural answer to the concept.',
  },
  {
    number: '08',
    label: 'ACTION',
    title: 'Offer + CTA',
    description:
      'Define the offer, next action, and destination only after the concept logic is clear.',
  },
];

const formatDecisionPaths = [
  {
    label: 'IF I AM TESTING',
    title: 'Choose the fastest credible format',
    description:
      'I choose the lowest-friction format that can represent the angle properly. The goal is clean learning: strong message fit, enough proof, low production cost, and fast launch.',
    flow: [
      'Message Fit',
      'Fast Production',
      'Low Friction',
      'Enough Proof',
      'Launch + Learn',
    ],
    tone: 'test',
  },
  {
    label: 'IF I AM SCALING',
    title: 'Expand the proven angle across strong-fit formats',
    description:
      'Once the angle is proven, I widen the format mix across creators, lengths, placements, visual treatments, and production styles without weakening the core message.',
    flow: [
      'Proven Angle',
      'Format Expansion',
      'New Executions',
      'More Inventory',
      'Scale Learning',
    ],
    tone: 'scale',
  },
];

const hookSources = [
  {
    rank: '01',
    title: 'Our Previous Winners',
    description:
      'Mine brand winners first, especially ads using the same persona, adjacent angle, similar pain, desire, mechanism, format, or concept.',
    tag: 'FIRST PARTY',
  },
  {
    rank: '02',
    title: 'Competitor Winners',
    description:
      'Study long-running and repeatedly iterated competitor ads for proven opening patterns, language, visuals, headlines, and first frames.',
    tag: 'MARKET PROOF',
  },
  {
    rank: '03',
    title: 'Organic Winners',
    description:
      'Pull proven openings from TikTok, Reels, YouTube, creators, and category content that already earned attention organically.',
    tag: 'ATTENTION PROOF',
  },
  {
    rank: '04',
    title: 'Research + Hook Intelligence',
    description:
      'Reuse customer phrases, questions, comments, objections, beliefs, discoveries, and opening patterns captured during research.',
    tag: 'VOC',
  },
  {
    rank: '05',
    title: 'Fresh Hook Hypotheses',
    description:
      'Create new hooks when we intentionally want fresh attention territory or proven sources do not cover the concept well enough.',
    tag: 'EXPLORATION',
  },
];

const hookByFormat = [
  {
    format: 'Video',
    hook:
      'Spoken opening + first visual + movement + text + first 1 to 3 seconds.',
  },
  {
    format: 'Static',
    hook:
      'Dominant visual + headline + proof cue + first line of primary copy.',
  },
  {
    format: 'Native / Advertorial',
    hook:
      'Headline + hero image + subheadline + opening lead.',
  },
  {
    format: 'Carousel',
    hook:
      'Slide 1 visual + headline + curiosity or promise that earns the swipe.',
  },
  {
    format: 'Long Form Video',
    hook:
      'Opening claim, story, proof, tension, or curiosity that establishes why the viewer should continue.',
  },
];

const formatLibrary = [
  {
    "name": "UGC Talking Head",
    "family": "Creator + UGC",
    "description": "Casual direct-to-camera creator delivery built around one clear message.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Narrative"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "UGC Selfie",
    "family": "Creator + UGC",
    "description": "Lo-fi selfie framing that feels like an organic recommendation or personal update.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Narrative",
      "Social Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Yapper",
    "family": "Creator + UGC",
    "description": "Personality-led conversational selling that embeds the pitch inside natural storytelling.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Narrative",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Customer Testimonial",
    "family": "Creator + UGC",
    "description": "Customer-led experience focused on result, credibility, and recommendation.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Customer Story",
    "family": "Creator + UGC",
    "description": "A customer journey from problem or trigger through discovery and outcome.",
    "media": [
      "Video",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Social Proof",
      "Proof"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Storytime",
    "family": "Creator + UGC",
    "description": "Creator recounts a personal experience in a narrative-first social style.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Narrative",
      "Discovery",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Vlog",
    "family": "Creator + UGC",
    "description": "Product or problem integrated naturally into a creator's day or activity.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Narrative",
      "Product"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Routine / Day in the Life",
    "family": "Creator + UGC",
    "description": "Product appears inside an existing routine, habit, or lifestyle context.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Narrative"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "GRWM Style",
    "family": "Creator + UGC",
    "description": "Get-ready-with-me structure that embeds product or message inside a familiar ritual.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "POV",
    "family": "Creator + UGC",
    "description": "First-person framing that places the viewer inside a situation or outcome.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Discovery",
      "Problem",
      "Narrative",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Reaction Video",
    "family": "Creator + UGC",
    "description": "Authentic first response to a product, sensation, demo, result, or reveal.",
    "media": [
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Product"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Unboxing",
    "family": "Creator + UGC",
    "description": "Package reveal focused on anticipation, product discovery, and tangible details.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Discovery",
      "Social Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Try-On",
    "family": "Creator + UGC",
    "description": "Creator visibly tries, wears, fits, or demonstrates the product on themselves.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Proof",
      "Social Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Influencer Endorsement",
    "family": "Creator + UGC",
    "description": "Recognizable creator endorses the product through their own voice and audience context.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Social Proof",
      "Trust"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Comment Response",
    "family": "Creator + UGC",
    "description": "Ad opens by responding directly to a real customer comment or question.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Social Proof",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Founder",
    "family": "Authority + Conversation",
    "description": "Founder explains the problem, product origin, mechanism, or market gap.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Trust",
      "Education",
      "Narrative"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Expert Explainer",
    "family": "Authority + Conversation",
    "description": "Authority-led explanation of the problem, mechanism, evidence, or solution.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Trust",
      "Education",
      "Proof"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Podcast",
    "family": "Authority + Conversation",
    "description": "Podcast-style setup creates an overheard conversation or authority-led discussion.",
    "media": [
      "Video",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Trust",
      "Narrative",
      "Education"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Interview",
    "family": "Authority + Conversation",
    "description": "Host and guest structure used for stories, expertise, objections, or product discovery.",
    "media": [
      "Video",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Trust",
      "Narrative",
      "Education"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Street Interview",
    "family": "Authority + Conversation",
    "description": "Public Q&A captures spontaneous opinions, reactions, social proof, or problem awareness.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Social Proof",
      "Entertainment"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Q&A",
    "family": "Authority + Conversation",
    "description": "Question-and-answer structure resolves common objections, concerns, or product questions.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Education",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Greenscreen Explainer",
    "family": "Authority + Conversation",
    "description": "Speaker reacts to or explains visual evidence, screenshots, articles, or product details.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Whiteboard Explainer",
    "family": "Authority + Conversation",
    "description": "Hand-drawn teaching structure simplifies a mechanism, process, or comparison.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Education",
      "Trust",
      "Comparison"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Spokesperson",
    "family": "Authority + Conversation",
    "description": "Direct-to-camera presenter delivers a controlled brand or sales message.",
    "media": [
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Trust",
      "Product",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Demo",
    "family": "Demo + Proof",
    "description": "Product use or mechanism is shown rather than only described.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Proof",
      "Product",
      "Education"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Before and After",
    "family": "Demo + Proof",
    "description": "Transformation is shown through a clear side-by-side or sequence.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Proof",
      "Social Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Split Screen",
    "family": "Demo + Proof",
    "description": "Two states, products, outcomes, or narratives are shown simultaneously.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Comparison",
      "Proof",
      "Education"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Product Experiment",
    "family": "Demo + Proof",
    "description": "A visible test measures or challenges a product claim or difference.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Proof",
      "Comparison",
      "Discovery"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Side-by-Side Comparison",
    "family": "Demo + Proof",
    "description": "Product is contrasted directly against an alternative, competitor, or old method.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Comparison",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "How To",
    "family": "Demo + Proof",
    "description": "Step-by-step tutorial teaches usage, process, or solution logic.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Product",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Feature Benefit Pointout",
    "family": "Demo + Proof",
    "description": "Labels or callouts anchor specific features and benefits to the product visual.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Case Study",
    "family": "Demo + Proof",
    "description": "Structured customer result with context, process, and evidence.",
    "media": [
      "Video",
      "Static",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Proof",
      "Social Proof",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Social Proof Mashup",
    "family": "Demo + Proof",
    "description": "Multiple reviews, testimonials, comments, or customer outcomes stacked together.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Review",
    "family": "Demo + Proof",
    "description": "One customer review becomes the central creative proof unit.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Statistic",
    "family": "Demo + Proof",
    "description": "A single numerical claim or result becomes the dominant proof point.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Proof",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Certification Badge",
    "family": "Demo + Proof",
    "description": "Certification, seal, award, or trusted third-party marker is the primary trust cue.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Trust",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Skit",
    "family": "Story + Entertainment",
    "description": "Scripted mini-story communicates a problem, objection, social moment, or discovery.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Entertainment",
      "Narrative",
      "Problem"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Humor",
    "family": "Story + Entertainment",
    "description": "Comedic framing earns attention while carrying a relevant product or customer truth.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Entertainment",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Meme",
    "family": "Story + Entertainment",
    "description": "Familiar meme language compresses a relatable situation or belief into a quick idea.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Entertainment",
      "Discovery",
      "Problem"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Trend",
    "family": "Story + Entertainment",
    "description": "Current social trend or audio is adapted to the product, problem, or persona.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Entertainment",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "ASMR",
    "family": "Story + Entertainment",
    "description": "Sensory sound-first execution uses texture, sound, movement, or ritual as attention.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Entertainment",
      "Discovery",
      "Product"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Behind the Scenes",
    "family": "Story + Entertainment",
    "description": "Insider access reveals manufacturing, process, people, quality, or brand reality.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Trust",
      "Narrative",
      "Product"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Transformation",
    "family": "Story + Entertainment",
    "description": "Progressive journey shows movement from an initial state to a desired state.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Proof",
      "Social Proof"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Cinematic B-Roll",
    "family": "Story + Entertainment",
    "description": "Polished visual storytelling uses strong product, lifestyle, or emotional footage.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Narrative"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Nostalgia",
    "family": "Story + Entertainment",
    "description": "Retro references, memories, or throwback aesthetics create emotional familiarity.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Entertainment",
      "Discovery",
      "Narrative"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Pattern Interrupt",
    "family": "Story + Entertainment",
    "description": "Surreal, unexpected, or visually disruptive opening breaks normal feed patterns.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Discovery",
      "Entertainment"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Product Image",
    "family": "Static + Graphic",
    "description": "Clean product-led visual puts the item itself at the center of the message.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Lifestyle Image",
    "family": "Static + Graphic",
    "description": "Product is shown naturally inside the target customer's environment or routine.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Narrative"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Studio Shot",
    "family": "Static + Graphic",
    "description": "Polished studio photography emphasizes quality, design, and product detail.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Model Shot",
    "family": "Static + Graphic",
    "description": "Model visually demonstrates fit, usage, identity, or aspirational outcome.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Social Proof"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Flatlay",
    "family": "Static + Graphic",
    "description": "Overhead product arrangement creates a clean visual overview or bundle presentation.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Offer",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Headline Static",
    "family": "Static + Graphic",
    "description": "A strong headline is the primary attention and message hierarchy.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Offer-First Banner",
    "family": "Static + Graphic",
    "description": "Discount, promotion, price, or deal is the dominant visual message.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Conversion",
      "Retargeting"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Problem Agitation Static",
    "family": "Static + Graphic",
    "description": "Static focuses on a painful state, frustration, symptom, or consequence.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware"
    ],
    "objectives": [
      "Problem",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Us Vs Them",
    "family": "Static + Graphic",
    "description": "Brand and alternative are contrasted through a simple competitive framework.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Comparison",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Listicle Static",
    "family": "Static + Graphic",
    "description": "Numbered reasons, benefits, mistakes, or facts are compressed into one static.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Discovery",
      "Product"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Infographic",
    "family": "Static + Graphic",
    "description": "Information, data, process, or mechanism is visualized in an educational layout.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Trust"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Review Static",
    "family": "Static + Graphic",
    "description": "Customer review or rating is the central element of a static ad.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Testimonial Static",
    "family": "Static + Graphic",
    "description": "Customer quote and result are packaged as a single proof-led image.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Social Proof",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Social Comments Static",
    "family": "Static + Graphic",
    "description": "Real social comments become proof, objection handling, or curiosity.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Social Proof",
      "Discovery",
      "Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "UGC Overlay",
    "family": "Static + Graphic",
    "description": "Casual customer or creator image uses native text overlay as the core message.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Social Proof",
      "Narrative"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Collage",
    "family": "Static + Graphic",
    "description": "Freeform scrapbook or multi-image layout communicates lifestyle, proof, or variety.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Social Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Letter",
    "family": "Static + Graphic",
    "description": "Personal letter-style message from founder, brand, expert, or customer.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Social Media Mockup",
    "family": "Social Native + Mockup",
    "description": "Creative mimics a native social post, feed item, profile, or platform interface.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Social Proof",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Text Message",
    "family": "Social Native + Mockup",
    "description": "SMS or chat-style conversation delivers problem, proof, recommendation, or story.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Narrative",
      "Discovery",
      "Social Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Notes App",
    "family": "Social Native + Mockup",
    "description": "Notes-style text makes copy feel personal, direct, and native to a phone screen.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Narrative",
      "Education"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Email Mockup",
    "family": "Social Native + Mockup",
    "description": "Inbox or email interface frames the message as correspondence or proof.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Proof",
      "Trust"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Native Search",
    "family": "Social Native + Mockup",
    "description": "Search-engine style query or result frames a question, discovery, or comparison.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Comparison"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "News Broadcast",
    "family": "Social Native + Mockup",
    "description": "News-style visual or report creates information value, authority, or pattern interruption.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Trust",
      "Education"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Document Mockup",
    "family": "Social Native + Mockup",
    "description": "Receipt, form, report, invoice, prescription-style, or official-looking document frames the claim.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Proof",
      "Trust",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Website Mockup",
    "family": "Social Native + Mockup",
    "description": "Website or page interface becomes the visual container for proof, comparison, or discovery.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Product",
      "Proof",
      "Comparison"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "App Mockup",
    "family": "Social Native + Mockup",
    "description": "App interface simulation demonstrates product, result, usage, or digital proof.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Product",
      "Demo",
      "Proof"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Checkout Mockup",
    "family": "Social Native + Mockup",
    "description": "Cart or payment-screen visual emphasizes price, bundle, savings, or offer.",
    "media": [
      "Static"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Conversion",
      "Retargeting"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "ChatGPT Mockup",
    "family": "Social Native + Mockup",
    "description": "AI chat interface frames a question, answer, recommendation, or comparison.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Comparison"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Post It",
    "family": "Social Native + Mockup",
    "description": "Sticky-note style overlay creates informal, low-friction message delivery.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Warning Screen",
    "family": "Social Native + Mockup",
    "description": "Alert or system-warning style visual frames risk, urgency, or problem awareness.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Problem",
      "Discovery",
      "Education"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Montage",
    "family": "Motion + Hybrid",
    "description": "Fast sequence of proof, product, lifestyle, or customer clips builds density and pace.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Proof",
      "Product"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Slideshow",
    "family": "Motion + Hybrid",
    "description": "Still images or screenshots are sequenced into a lightweight video narrative.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Proof",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Animation",
    "family": "Motion + Hybrid",
    "description": "2D, 3D, illustrated, or graphic animation explains or dramatizes the message.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Education",
      "Discovery",
      "Product"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Stop Motion",
    "family": "Motion + Hybrid",
    "description": "Frame-by-frame movement creates a tactile, playful, product-focused execution.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Entertainment",
      "Product",
      "Discovery"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Time Lapse",
    "family": "Motion + Hybrid",
    "description": "Accelerated footage compresses change, setup, progress, or product use.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Product",
      "Proof",
      "Discovery"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Static to Video Hybrid",
    "family": "Motion + Hybrid",
    "description": "A strong static layout is animated lightly to access video inventory.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Screen Recording",
    "family": "Motion + Hybrid",
    "description": "Website, app, review, workflow, or digital product is shown directly on screen.",
    "media": [
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Demo",
      "Product",
      "Proof"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Graphic Overlay",
    "family": "Motion + Hybrid",
    "description": "Text, icons, labels, charts, or callouts are layered over footage or imagery.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Product"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "One Shot",
    "family": "Motion + Hybrid",
    "description": "Single uninterrupted clip holds attention through one striking visual and supporting copy.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Discovery",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "VSL",
    "family": "Native + Long Form",
    "description": "Long-form sales presentation builds problem, mechanism, proof, product, and CTA.",
    "media": [
      "Video",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Mini VSL",
    "family": "Native + Long Form",
    "description": "Condensed VSL structure delivers a persuasive argument in a shorter runtime.",
    "media": [
      "Video",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Advertorial",
    "family": "Native + Long Form",
    "description": "Editorial-style long-form page sells through story, education, mechanism, or discovery.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Education",
      "Narrative",
      "Discovery"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Listicle Article",
    "family": "Native + Long Form",
    "description": "Long-form numbered article presents reasons, mistakes, benefits, or comparisons.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Discovery",
      "Comparison"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Buyer Guide",
    "family": "Native + Long Form",
    "description": "Guide helps the reader evaluate criteria, alternatives, and purchase decisions.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Education",
      "Comparison",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Comparison Article",
    "family": "Native + Long Form",
    "description": "Long-form comparison contrasts products, categories, mechanisms, or alternatives.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Comparison",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Founder Letter",
    "family": "Native + Long Form",
    "description": "Long-form personal letter uses founder voice to build trust and argument depth.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Narrative",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Native Image + Long Copy",
    "family": "Native + Long Form",
    "description": "Simple native-looking image is paired with long primary copy to carry the persuasion.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Narrative",
      "Education",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Quiz / Assessment",
    "family": "Native + Long Form",
    "description": "Interactive questions segment, diagnose, personalize, or lead into a recommendation.",
    "media": [
      "Interactive",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Conversion"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Long Form Sales Page",
    "family": "Native + Long Form",
    "description": "Full sales argument combines headline, proof, objections, product, offer, and CTA.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Proof",
      "Offer",
      "Conversion"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Editorial Story",
    "family": "Native + Long Form",
    "description": "Magazine-style story frames the product through culture, problem, persona, or discovery.",
    "media": [
      "Static",
      "Long Form"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Narrative",
      "Discovery",
      "Education"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Carousel",
    "family": "Commerce + Offer",
    "description": "Multiple cards showcase products, steps, proof, benefits, or a sequential story.",
    "media": [
      "Carousel",
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Education",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Collection",
    "family": "Commerce + Offer",
    "description": "Hero image or video opens into a product browsing experience.",
    "media": [
      "Carousel",
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Offer",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Product Feed / Catalog",
    "family": "Commerce + Offer",
    "description": "Dynamic product-led creative uses catalog inventory, price, or personalized products.",
    "media": [
      "Carousel",
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Offer",
      "Retargeting",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Countdown",
    "family": "Commerce + Offer",
    "description": "Timer or deadline graphic focuses attention on genuine time sensitivity.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Conversion",
      "Retargeting"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Giveaway",
    "family": "Commerce + Offer",
    "description": "Prize or free-entry structure maximizes participation, reach, or lead capture.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware"
    ],
    "objectives": [
      "Discovery",
      "Offer",
      "Entertainment"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Event Announcement",
    "family": "Commerce + Offer",
    "description": "Promotes a webinar, launch, drop, live event, or scheduled activation.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Conversion",
      "Discovery"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Press / Media Coverage",
    "family": "Commerce + Offer",
    "description": "Third-party media mention or headline is used as credibility and proof.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Trust",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Bundle Breakdown",
    "family": "Commerce + Offer",
    "description": "Visual explains what is included in a bundle and why the combined value matters.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Product",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Price Anchor",
    "family": "Commerce + Offer",
    "description": "Creative frames value through savings, comparison price, cost per use, or avoided cost.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Comparison",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Guarantee / Risk Reversal",
    "family": "Commerce + Offer",
    "description": "Guarantee, trial, returns, or risk reversal becomes the primary conversion message.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "BOF"
    ],
    "awareness": [
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Offer",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "TikTok Spark Ad",
    "family": "Platform Native Units",
    "description": "Paid amplification of an organic TikTok post from the brand or authorized creator.",
    "media": [
      "Video",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Social Proof",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "TikTok Carousel Ad",
    "family": "Platform Native Units",
    "description": "Swipeable image-based TikTok in-feed unit for sequential or multi-product creative.",
    "media": [
      "Carousel",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Education",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Meta Carousel Ad",
    "family": "Platform Native Units",
    "description": "Multi-card Meta format supporting images or video, sequential storytelling, or product display.",
    "media": [
      "Carousel",
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Education",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Meta Collection Ad",
    "family": "Platform Native Units",
    "description": "Hero image or video plus product tiles creates an immersive browse-to-purchase experience.",
    "media": [
      "Carousel",
      "Static",
      "Video"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Offer",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "YouTube Shorts Ad",
    "family": "Platform Native Units",
    "description": "Vertical short-form video built for the Shorts feed.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Product"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "YouTube In-Feed Video",
    "family": "Platform Native Units",
    "description": "Video appears inside YouTube browsing and feed surfaces where users choose what to watch.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware"
    ],
    "objectives": [
      "Discovery",
      "Education",
      "Trust"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "YouTube In-Stream Video",
    "family": "Platform Native Units",
    "description": "Video plays before, during, or after other video content and must earn continued viewing.",
    "media": [
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Education",
      "Proof",
      "Conversion"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "Google Demand Gen Image",
    "family": "Platform Native Units",
    "description": "Feed-based image creative serves across Google discovery surfaces.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  },
  {
    "name": "Google Demand Gen Carousel",
    "family": "Platform Native Units",
    "description": "Multi-image Demand Gen unit supports sequential storytelling or multiple products.",
    "media": [
      "Carousel",
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Product",
      "Education",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Responsive Display Ad",
    "family": "Platform Native Units",
    "description": "Multiple text, image, logo, and optional video assets adapt across available placements.",
    "media": [
      "Static",
      "Video"
    ],
    "funnel": [
      "TOF",
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Problem Aware",
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Discovery",
      "Product",
      "Retargeting",
      "Conversion"
    ],
    "production": [
      "Medium"
    ]
  },
  {
    "name": "Editorial",
    "family": "Static + Graphic",
    "description": "Magazine-like premium photography and typography frames the product aspirationally.",
    "media": [
      "Static"
    ],
    "funnel": [
      "TOF",
      "MOF"
    ],
    "awareness": [
      "Unaware",
      "Problem Aware",
      "Solution Aware"
    ],
    "objectives": [
      "Discovery",
      "Trust",
      "Product"
    ],
    "production": [
      "Heavy"
    ]
  },
  {
    "name": "FAQ Static",
    "family": "Static + Graphic",
    "description": "Frequently asked questions and answers resolve uncertainty in one graphic.",
    "media": [
      "Static"
    ],
    "funnel": [
      "MOF",
      "BOF"
    ],
    "awareness": [
      "Solution Aware",
      "Product Aware",
      "Most Aware"
    ],
    "objectives": [
      "Education",
      "Trust",
      "Conversion"
    ],
    "production": [
      "Fast"
    ]
  }
];

const filterGroups = [
  {
    key: 'media',
    label: 'MEDIUM',
    options: ['Video', 'Static', 'Long Form', 'Carousel', 'Interactive'],
  },
  {
    key: 'funnel',
    label: 'FUNNEL',
    options: ['TOF', 'MOF', 'BOF'],
  },
  {
    key: 'awareness',
    label: 'AWARENESS',
    options: [
      'Unaware',
      'Problem Aware',
      'Solution Aware',
      'Product Aware',
      'Most Aware',
    ],
  },
  {
    key: 'objectives',
    label: 'OBJECTIVE',
    options: [
      'Discovery',
      'Problem',
      'Education',
      'Narrative',
      'Entertainment',
      'Trust',
      'Proof',
      'Social Proof',
      'Comparison',
      'Product',
      'Offer',
      'Conversion',
      'Retargeting',
    ],
  },
  {
    key: 'production',
    label: 'PRODUCTION',
    options: ['Fast', 'Medium', 'Heavy'],
  },
];

const emptyFilters = {
  media: [],
  funnel: [],
  awareness: [],
  objectives: [],
  production: [],
};

const familyOrder = [
  'Creator + UGC',
  'Authority + Conversation',
  'Demo + Proof',
  'Story + Entertainment',
  'Static + Graphic',
  'Social Native + Mockup',
  'Motion + Hybrid',
  'Native + Long Form',
  'Commerce + Offer',
  'Platform Native Units',
];

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

function matchesSelected(format, selected) {
  return Object.entries(selected).every(([key, values]) => {
    if (values.length === 0) return true;

    const formatValues = format[key] || [];

    return values.every((value) =>
      formatValues.includes(value)
    );
  });
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function ConceptDevelopment({
  stage,
  onBack,
}) {
  const [filters, setFilters] = useState(emptyFilters);

  const selectedCount = Object.values(filters)
    .reduce(
      (total, values) => total + values.length,
      0
    );

  const results = useMemo(
    () =>
      formatLibrary.filter((format) =>
        matchesSelected(format, filters)
      ),
    [filters]
  );

  const groupedResults = useMemo(
    () =>
      familyOrder
        .map((family) => ({
          family,
          items: results.filter(
            (format) => format.family === family
          ),
        }))
        .filter((group) => group.items.length > 0),
    [results]
  );

  const toggleFilter = (groupKey, value) => {
    setFilters((current) => {
      const active = current[groupKey];

      return {
        ...current,
        [groupKey]: active.includes(value)
          ? active.filter((item) => item !== value)
          : [...active, value],
      };
    });
  };

  const clearGroup = (groupKey) => {
    setFilters((current) => ({
      ...current,
      [groupKey]: [],
    }));
  };

  const clearAll = () => {
    setFilters({
      media: [],
      funnel: [],
      awareness: [],
      objectives: [],
      production: [],
    });
  };

  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="CONCEPT EXPANSION ENGINE"
      title="Concept Development"
      introduction="A qualified angle becomes multiple executable ad concepts. The format is selected from the testing objective and message need, then hook execution is adapted to the chosen medium."
      process={[
        'Persona',
        'Qualified Angle',
        'Ad Concept',
        'Format',
        'Hook',
      ]}
    >
      <StageSection
        number="00"
        navTitle="Concept Generation"
        title="Concept Generation System"
        description="Generate concept volume systematically, then choose the format based on whether the job is validation or expansion."
      >
        <div className="concept-dev-equation">
          <div className="concept-dev-equation-main">
            <div className="concept-dev-equation-part">
              <span>PERSONAS</span>
              <strong>P</strong>
            </div>

            <b>×</b>

            <div className="concept-dev-equation-part">
              <span>QUALIFIED ANGLES</span>
              <strong>A</strong>
            </div>

            <b>×</b>

            <div className="concept-dev-equation-part">
              <span>AD CONCEPTS PER ANGLE</span>
              <strong>C</strong>
            </div>

            <b>=</b>

            <div className="concept-dev-equation-result">
              <span>CONCEPT POOL</span>
              <strong>P × A × C</strong>
            </div>
          </div>

          <div className="concept-dev-math-example">
            {conceptEquation.map((item, index) => (
              <div
                className="concept-dev-math-item"
                key={item.label}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>

                {index < conceptEquation.length - 1 && (
                  <b>×</b>
                )}
              </div>
            ))}

            <div className="concept-dev-math-total">
              <span>=</span>
              <strong>150</strong>
              <small>STRUCTURED CONCEPT DIRECTIONS</small>
            </div>
          </div>
        </div>

        <StageHighlight
          title="The Point"
          type="success"
        >
          <p>
            I do not depend on random brainstorming. Personas and
            qualified angles create the strategic boundaries, then
            each angle can be expressed through multiple distinct
            ad concepts.
          </p>
        </StageHighlight>

        <div className="concept-dev-build-header">
          <span>HOW I BUILD ONE CONCEPT</span>
          <h3>
            Move from strategic input to executable concept without
            jumping straight into production.
          </h3>
        </div>

        <div className="concept-dev-build-flow">
          {conceptBuildSteps.map((step) => (
            <article key={step.number}>
              <div className="concept-dev-build-number">
                {step.number}
              </div>

              <div>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="concept-dev-format-question">
          <div className="concept-dev-format-question-title">
            <span>HIDDEN INTERVIEW QUESTION</span>
            <h3>How do I choose the format?</h3>
          </div>

          <div className="concept-dev-format-decision-grid">
            {formatDecisionPaths.map((path) => (
              <article
                className={`is-${path.tone}`}
                key={path.label}
              >
                <span>{path.label}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>

                <div className="concept-dev-format-flow">
                  <StageFlow items={path.flow} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Format Library"
        title="Interactive Format Library"
        description="Filter the format database by medium, funnel stage, awareness level, objective, and production complexity. Every selected filter must match."
      >
        <div className="concept-format-system">
          <div className="concept-format-system-top">
            <div>
              <span>FORMAT RESEARCH SYSTEM</span>
              <h3>118 researched ad formats</h3>
              <p>
                Tags represent common strategic fit, not hard rules.
                Message, audience, offer, and execution can move the
                same format across funnel and awareness stages.
              </p>
            </div>

            <div className="concept-format-result-count">
              <strong>{results.length}</strong>
              <span>MATCHES</span>
            </div>
          </div>

          <div className="concept-format-filter-panel">
            {filterGroups.map((group) => (
              <div
                className="concept-format-filter-row"
                key={group.key}
              >
                <span className="concept-format-filter-label">
                  {group.label}
                </span>

                <div className="concept-format-filter-options">
                  <button
                    type="button"
                    className={
                      filters[group.key].length === 0
                        ? 'is-active'
                        : ''
                    }
                    onClick={() => clearGroup(group.key)}
                  >
                    All
                  </button>

                  {group.options.map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={
                        filters[group.key].includes(option)
                          ? 'is-active'
                          : ''
                      }
                      onClick={() =>
                        toggleFilter(group.key, option)
                      }
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="concept-format-selection-bar">
            <div>
              <span>SELECTED</span>

              {selectedCount === 0 ? (
                <p>All formats are currently visible.</p>
              ) : (
                <div className="concept-format-selected-chips">
                  {Object.entries(filters).flatMap(
                    ([groupKey, values]) =>
                      values.map((value) => (
                        <button
                          type="button"
                          key={`${groupKey}-${value}`}
                          onClick={() =>
                            toggleFilter(groupKey, value)
                          }
                        >
                          {value} ×
                        </button>
                      ))
                  )}
                </div>
              )}
            </div>

            {selectedCount > 0 && (
              <button
                type="button"
                className="concept-format-clear-all"
                onClick={clearAll}
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {results.length === 0 ? (
          <div className="concept-format-empty">
            <span>NO EXACT MATCH</span>
            <h3>
              No format currently carries every selected tag.
            </h3>
            <p>
              Remove one or more filters to widen the result set.
            </p>

            <button
              type="button"
              onClick={clearAll}
            >
              Show all formats
            </button>
          </div>
        ) : (
          <div className="concept-format-results">
            {groupedResults.map((group) => (
              <section
                className="concept-format-family"
                key={group.family}
              >
                <header>
                  <h3>{group.family}</h3>
                  <span>{group.items.length} formats</span>
                </header>

                <div className="concept-format-grid">
                  {group.items.map((format) => (
                    <article
                      className="concept-format-card"
                      key={format.name}
                    >
                      <div className="concept-format-card-head">
                        <h4>{format.name}</h4>
                        <span>
                          {format.production.join(' • ')}
                        </span>
                      </div>

                      <p>{format.description}</p>

                      <div className="concept-format-card-tags">
                        <div>
                          <small>MEDIUM</small>
                          <span>
                            {format.media.join(' • ')}
                          </span>
                        </div>

                        <div>
                          <small>FUNNEL</small>
                          <span>
                            {format.funnel.join(' • ')}
                          </span>
                        </div>

                        <div>
                          <small>AWARENESS</small>
                          <span>
                            {format.awareness.join(' • ')}
                          </span>
                        </div>
                      </div>

                      <div className="concept-format-objectives">
                        {format.objectives.map((objective) => (
                          <span key={objective}>
                            {objective}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </StageSection>

      <StageSection
        number="02"
        navTitle="Hook Development"
        title="Hook Development"
        description="Once the format is chosen, adapt proven hook intelligence into the opening mechanism that fits that format."
      >
        <div className="concept-dev-hook-source">
          <div className="concept-dev-hook-source-title">
            <span>HOOK SOURCE HIERARCHY</span>
            <h3>Where the hooks actually come from</h3>
            <p>
              Start with evidence that already earned attention.
              Fresh hook hypotheses come last when we intentionally
              want new territory.
            </p>
          </div>

          <div className="concept-dev-hook-source-list">
            {hookSources.map((source) => (
              <article key={source.rank}>
                <strong>{source.rank}</strong>

                <div>
                  <small>{source.tag}</small>
                  <h4>{source.title}</h4>
                  <p>{source.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="concept-dev-hook-process">
          <StageFlow
            items={[
              'Mine Proven Hooks',
              'Extract Pattern',
              'Match Format',
              'Adapt to Persona + Angle',
              'Align with Body',
              'Build Variants',
            ]}
          />
        </div>

        <div className="concept-dev-hook-by-format">
          {hookByFormat.map((item) => (
            <article key={item.format}>
              <span>{item.format}</span>
              <p>{item.hook}</p>
            </article>
          ))}
        </div>

        <StageHighlight
          title="Hook Rule"
          type="warning"
        >
          <p>
            A viral hook is useless if the body cannot deliver on it.
            The opening must attract the right persona, introduce the
            selected angle, and create an expectation the concept
            actually fulfills.
          </p>
        </StageHighlight>

        <StageHighlight
          title="Practical Output"
          type="success"
        >
          <p>
            For each concept I want 3 to 5 hook directions adapted to
            the selected format while the core angle and concept remain
            controlled.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}