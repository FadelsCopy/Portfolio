// src/components/ProductionDeepDive.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

const productionSystems = [
  {
    id: 'asset-collection',
    number: '09.1',
    title: 'Asset Collection',
    shortTitle: 'Asset Collection',
    icon: 'knowledge',

    description:
      'Collect, organize, label, and confirm every asset required by the approved creative brief before production begins.',

    questions: [
      'Are all required assets available?',
      'Are product images and videos current?',
      'Are creator recordings complete?',
      'Are proof assets approved for use?',
      'Are logos and brand assets correct?',
      'Are usage rights confirmed?',
      'Are files organized and accessible?',
      'Which required assets are still missing?',
    ],

    requirements: [
      'Product footage',
      'Creator footage',
      'Customer proof',
      'Before-and-after assets',
      'Brand assets',
      'Music and sound',
      'Voiceover files',
      'Reference assets',
      'Usage rights',
      'File organization',
    ],

    outputs: [
      'Approved asset folder',
      'Missing-asset list',
      'Usage-right confirmation',
      'Production readiness status',
    ],

    example:
      'All footage is stored inside one concept folder with clearly labeled hook, body, proof, product, CTA, and reference subfolders.',

    sops: [
      'Asset Collection SOP',
      'Creative Folder Structure SOP',
      'Asset Rights Checklist',
    ],
  },

  {
    id: 'creator-recording',
    number: '09.2',
    title: 'Creator Recording',
    shortTitle: 'Creator Recording',
    icon: 'personas',

    description:
      'Record creator footage that follows the approved script, tone, framing, visual direction, and product interaction requirements.',

    questions: [
      'Does the creator match the target persona?',
      'Is the delivery natural and believable?',
      'Is the hook performed with enough energy?',
      'Is the audio clear?',
      'Is the framing correct?',
      'Are required product interactions included?',
      'Are multiple useful takes recorded?',
      'Are all shot-list requirements completed?',
    ],

    requirements: [
      'Correct creator profile',
      'Approved script',
      'Correct environment',
      'Correct wardrobe',
      'Clear audio',
      'Correct framing',
      'Natural delivery',
      'Product interaction',
      'Multiple takes',
      'Required B-roll',
    ],

    outputs: [
      'Approved creator footage',
      'Selected takes',
      'Missing-shot list',
      'Creator revision request',
    ],

    example:
      'Record three distinct hook deliveries, one complete body take, product-use footage, reaction shots, and the final CTA separately.',

    sops: [
      'Creator Recording SOP',
      'UGC Recording Checklist',
      'Creator Footage Review SOP',
    ],
  },

  {
    id: 'ai-generation',
    number: '09.3',
    title: 'AI Asset Generation',
    shortTitle: 'AI Generation',
    icon: 'newConcepts',

    description:
      'Generate supporting video, images, voice, animation, or creator assets while preserving realism, credibility, strategy, and brand consistency.',

    questions: [
      'Which approved asset is being generated?',
      'Does the result match the brief?',
      'Does the product look accurate?',
      'Are hands, faces, text, and movement realistic?',
      'Does the visual feel appropriate for the platform?',
      'Are there obvious AI artifacts?',
      'Could the asset reduce trust?',
      'Has a human reviewed the final result?',
    ],

    requirements: [
      'Approved generation brief',
      'Reference assets',
      'Prompt package',
      'Product accuracy',
      'Visual realism',
      'Brand consistency',
      'Artifact review',
      'Compliance review',
      'Human approval',
    ],

    outputs: [
      'Approved AI assets',
      'Rejected generations',
      'Prompt revisions',
      'Human-review record',
    ],

    example:
      'Generate supporting bathroom B-roll while keeping all product shots and customer proof based on real approved assets.',

    sops: [
      'AI Asset Generation SOP',
      'AI Visual QA SOP',
      'AI Credibility Review SOP',
    ],
  },

  {
    id: 'static-design',
    number: '09.4',
    title: 'Static Design Production',
    shortTitle: 'Static Design',
    icon: 'concepts',

    description:
      'Turn the approved static brief into a clear, high-impact design with strong hierarchy, readable messaging, proof, product, and CTA.',

    questions: [
      'Is the headline immediately readable?',
      'Is the main visual clear?',
      'Does the design preserve the approved angle?',
      'Is the product visible enough?',
      'Is proof easy to understand?',
      'Does the layout feel balanced?',
      'Does the CTA stand out?',
      'Does the design fit the platform ratio?',
    ],

    requirements: [
      'Clear headline',
      'Strong visual hierarchy',
      'Approved imagery',
      'Visible product',
      'Proof element',
      'Offer element',
      'CTA',
      'Brand consistency',
      'Correct aspect ratio',
      'Readable mobile size',
    ],

    outputs: [
      'Final static assets',
      'Static variations',
      'Platform exports',
      'Revision notes',
    ],

    example:
      'Use one dominant headline, one central comparison visual, one supporting proof block, product image, and compact CTA.',

    sops: [
      'Static Production SOP',
      'Static Design QA SOP',
      'Static Variation SOP',
    ],
  },

  {
    id: 'video-editing',
    number: '09.5',
    title: 'Video Editing',
    shortTitle: 'Video Editing',
    icon: 'production',

    description:
      'Assemble footage, voice, captions, proof, product, pacing, overlays, sound, and CTA into the final video execution.',

    questions: [
      'Does the first second create attention?',
      'Is the hook clear?',
      'Does the pacing match the platform?',
      'Is unnecessary footage removed?',
      'Are proof and product shown at the right time?',
      'Does the edit preserve the script structure?',
      'Does each visual support the spoken message?',
      'Does the CTA feel clear and complete?',
    ],

    requirements: [
      'Strong opening',
      'Clear hook',
      'Tight pacing',
      'Approved script',
      'Relevant B-roll',
      'Product visibility',
      'Proof placement',
      'Captions',
      'Sound design',
      'CTA',
    ],

    outputs: [
      'First edit',
      'Revised edit',
      'Final approved edit',
      'Variation exports',
    ],

    example:
      'Keep the first five seconds fast, slow slightly during the mechanism explanation, then increase pace again around proof and CTA.',

    sops: [
      'Video Editing SOP',
      'Creative Pacing SOP',
      'Editor Review SOP',
    ],
  },

  {
    id: 'voiceover',
    number: '09.6',
    title: 'Voiceover Production',
    shortTitle: 'Voiceover',
    icon: 'briefing',

    description:
      'Produce natural, clear, emotionally appropriate voiceover that matches the script, persona, pacing, and platform.',

    questions: [
      'Does the voice fit the target customer?',
      'Is pronunciation correct?',
      'Does the emotional delivery match the script?',
      'Is the pacing natural?',
      'Are important phrases emphasized?',
      'Does the recording sound artificial?',
      'Is the audio clean?',
      'Does the timing fit the final edit?',
    ],

    requirements: [
      'Correct voice profile',
      'Approved script',
      'Natural pacing',
      'Correct pronunciation',
      'Emotional direction',
      'Clean audio',
      'Consistent volume',
      'Final timing',
    ],

    outputs: [
      'Approved voiceover',
      'Alternative takes',
      'Clean audio file',
      'Voiceover revision notes',
    ],

    example:
      'Use calm frustration in the opening, more confidence during the mechanism explanation, and urgency without exaggeration in the CTA.',

    sops: [
      'Voiceover Production SOP',
      'AI Voiceover SOP',
      'Voiceover QA SOP',
    ],
  },

  {
    id: 'captions',
    number: '09.7',
    title: 'Captions & On-Screen Text',
    shortTitle: 'Captions',
    icon: 'briefing',

    description:
      'Add captions and on-screen text that improve comprehension, emphasize key messages, and remain readable on mobile.',

    questions: [
      'Are captions accurate?',
      'Are important phrases emphasized?',
      'Is the text readable on mobile?',
      'Does the text remain inside safe areas?',
      'Is the caption timing correct?',
      'Is too much text shown at once?',
      'Does the style fit the brand?',
      'Are spelling and punctuation correct?',
    ],

    requirements: [
      'Accurate transcription',
      'Readable font size',
      'Safe-zone positioning',
      'Correct timing',
      'Keyword emphasis',
      'Brand consistency',
      'Spelling review',
      'Platform compatibility',
    ],

    outputs: [
      'Captioned creative',
      'Clean creative',
      'On-screen text version',
      'Caption QA status',
    ],

    example:
      'Use short caption groups, emphasize the hidden mechanism and proof, and avoid covering the product or creator face.',

    sops: [
      'Caption Production SOP',
      'On-Screen Text SOP',
      'Caption QA Checklist',
    ],
  },

  {
    id: 'sound',
    number: '09.8',
    title: 'Sound Design',
    shortTitle: 'Sound Design',
    icon: 'production',

    description:
      'Use music, sound effects, silence, and audio transitions to improve attention, pacing, emotion, and clarity.',

    questions: [
      'Does the audio support the intended emotion?',
      'Is the music distracting?',
      'Are sound effects purposeful?',
      'Does the hook need a stronger audio interruption?',
      'Is the voice always understandable?',
      'Does the audio feel native to the platform?',
      'Are volume levels balanced?',
      'Are music and sound rights confirmed?',
    ],

    requirements: [
      'Music selection',
      'Sound effects',
      'Voice clarity',
      'Volume balance',
      'Audio transitions',
      'Platform relevance',
      'Usage rights',
      'Final audio mix',
    ],

    outputs: [
      'Final audio mix',
      'Music version',
      'No-music version',
      'Sound QA status',
    ],

    example:
      'Use a subtle sound interruption in the opening, low background music during explanation, and a light rise before the CTA.',

    sops: [
      'Sound Design SOP',
      'Creative Audio Mixing SOP',
      'Music Rights Checklist',
    ],
  },

  {
    id: 'brand-review',
    number: '09.9',
    title: 'Brand Review',
    shortTitle: 'Brand Review',
    icon: 'foundation',

    description:
      'Confirm that the creative follows brand identity, tone, visual standards, product accuracy, and customer expectations.',

    questions: [
      'Does the creative sound like the brand?',
      'Are colors and typography appropriate?',
      'Is the logo used correctly?',
      'Is the product represented accurately?',
      'Does the tone fit the target market?',
      'Does the creative feel too polished or too unrefined?',
      'Are brand promises consistent?',
      'Would the brand confidently publish this asset?',
    ],

    requirements: [
      'Brand tone',
      'Product accuracy',
      'Logo usage',
      'Color consistency',
      'Typography consistency',
      'Approved terminology',
      'Customer appropriateness',
      'Brand approval',
    ],

    outputs: [
      'Brand-approved creative',
      'Brand revision notes',
      'Rejected brand execution',
      'Approval record',
    ],

    example:
      'Keep the visual execution native and conversational while preserving approved product claims and brand terminology.',

    sops: [
      'Brand Review SOP',
      'Brand Consistency Checklist',
      'Product Accuracy SOP',
    ],
  },

  {
    id: 'compliance',
    number: '09.10',
    title: 'Compliance Review',
    shortTitle: 'Compliance',
    icon: 'validation',

    description:
      'Review claims, proof, language, visuals, disclosures, platform requirements, and regulated-category limitations before launch.',

    questions: [
      'Are all claims supportable?',
      'Does the creative promise guaranteed results?',
      'Are before-and-after assets compliant?',
      'Are required disclosures visible?',
      'Does the wording create medical or financial risk?',
      'Are testimonials represented accurately?',
      'Does the creative follow platform policies?',
      'Should legal or specialist review be requested?',
    ],

    requirements: [
      'Claims review',
      'Proof documentation',
      'Before-and-after review',
      'Disclosure review',
      'Platform-policy review',
      'Testimonial review',
      'Category-specific review',
      'Final approval',
    ],

    outputs: [
      'Compliance-approved creative',
      'Required disclaimers',
      'Claim revisions',
      'Compliance rejection',
    ],

    example:
      'Replace guaranteed transformation language with supported benefit language and add the approved customer-results disclaimer.',

    sops: [
      'Creative Compliance SOP',
      'Claims Review SOP',
      'Platform Policy Checklist',
    ],
  },

  {
    id: 'creative-qa',
    number: '09.11',
    title: 'Creative Quality Assurance',
    shortTitle: 'Creative QA',
    icon: 'decision',

    description:
      'Review the complete creative against the strategy, brief, customer experience, and intended testing objective.',

    questions: [
      'Does the creative preserve the approved hypothesis?',
      'Is the hook strong and clear?',
      'Does the body maintain attention?',
      'Is the product introduced naturally?',
      'Is the proof credible and visible?',
      'Is the message easy to understand?',
      'Is the CTA specific?',
      'Will the test produce useful learning?',
    ],

    requirements: [
      'Hypothesis preserved',
      'Hook clarity',
      'Message clarity',
      'Pacing',
      'Product visibility',
      'Proof strength',
      'Offer clarity',
      'CTA clarity',
      'Persona relevance',
      'Testing value',
    ],

    outputs: [
      'Creative approval',
      'Revision list',
      'Strategic rejection',
      'Launch-readiness status',
    ],

    example:
      'Approve when the final asset clearly tests the mechanism angle without adding unrelated messages or changing the offer.',

    sops: [
      'Creative QA SOP',
      'Strategic Review SOP',
      'Launch Readiness Checklist',
    ],
  },

  {
    id: 'technical-export',
    number: '09.12',
    title: 'Technical Export & Delivery',
    shortTitle: 'Technical Export',
    icon: 'launch',

    description:
      'Export, name, organize, and deliver every approved creative in the correct technical format for launch.',

    questions: [
      'Is the aspect ratio correct?',
      'Is the resolution correct?',
      'Is the video duration correct?',
      'Is the file size acceptable?',
      'Is the audio included and balanced?',
      'Are clean and captioned versions delivered?',
      'Does the filename follow the naming convention?',
      'Is the final asset uploaded to the correct folder?',
    ],

    requirements: [
      'Correct aspect ratio',
      'Correct resolution',
      'Correct file format',
      'Correct duration',
      'Correct audio',
      'Correct naming',
      'Correct variation ID',
      'Correct delivery folder',
      'Final backup',
    ],

    outputs: [
      'Launch-ready files',
      'Organized delivery folder',
      'Final naming record',
      'Technical approval',
    ],

    example:
      'Export 9:16 and 4:5 MP4 files, captioned and clean versions, using the concept ID, hook ID, format, and version number.',

    sops: [
      'Creative Export SOP',
      'Technical Delivery SOP',
      'Final File Naming SOP',
    ],
  },
];

const productionOutcomes = [
  {
    id: 'approved',
    title: 'Launch Ready',
    description:
      'The asset is strategically accurate, technically correct, compliant, and approved for launch.',
    icon: 'launch',
  },
  {
    id: 'minor',
    title: 'Minor Revision',
    description:
      'The core execution is correct, but a small visual, audio, caption, or export issue must be fixed.',
    icon: 'iteration',
  },
  {
    id: 'major',
    title: 'Major Revision',
    description:
      'The execution no longer communicates the approved concept or testing hypothesis clearly.',
    icon: 'production',
  },
  {
    id: 'rejected',
    title: 'Production Rejected',
    description:
      'The asset has an unresolved strategic, credibility, compliance, or technical issue.',
    icon: 'close',
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

const contentReveal = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.16,
    },
  },
};

function ProductionDataCard({ title, items, icon }) {
  return (
    <section className="creative-op-production-data-card">
      <div className="creative-op-production-data-heading">
        <span>
          <CreativeStrategyOPIcon type={icon} size={17} />
        </span>

        <h3>{title}</h3>

        <small>{items.length}</small>
      </div>

      <div className="creative-op-production-pill-grid">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function ProductionDeepDive({ onBack }) {
  const [selectedSystemId, setSelectedSystemId] =
    useState('asset-collection');

  const [activeOutcome, setActiveOutcome] =
    useState('approved');

  const selectedSystem =
    productionSystems.find(
      (system) => system.id === selectedSystemId
    ) || productionSystems[0];

  return (
    <motion.section
      className="creative-op-production-workspace"
      variants={deepDiveReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="creative-op-production-topbar">
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

            <strong>Production & Quality Assurance</strong>
          </div>
        </div>

        <div className="creative-op-production-heading">
          <span>STAGE 09 / PRODUCTION</span>

          <h1>Production & Quality Assurance</h1>

          <p>
            Produce the final creative while preserving the approved
            strategy, message, proof, brand standards, compliance,
            and technical requirements.
          </p>
        </div>

        <div className="creative-op-production-counter">
          <strong>{productionSystems.length}</strong>
          <span>Production systems</span>
        </div>
      </header>

      <div className="creative-op-production-layout">
        <aside className="creative-op-production-navigation">
          <div className="creative-op-production-navigation-intro">
            <span>PRODUCTION SYSTEMS</span>
            <h2>Build the final creative</h2>
          </div>

          <nav>
            {productionSystems.map((system) => {
              const isActive =
                system.id === selectedSystemId;

              return (
                <button
                  type="button"
                  key={system.id}
                  className={`creative-op-production-nav-button ${
                    isActive ? 'is-active' : ''
                  }`}
                  onClick={() =>
                    setSelectedSystemId(system.id)
                  }
                >
                  <span className="creative-op-production-nav-number">
                    {system.number}
                  </span>

                  <span className="creative-op-production-nav-icon">
                    <CreativeStrategyOPIcon
                      type={system.icon}
                      size={18}
                    />
                  </span>

                  <span>{system.shortTitle}</span>

                  <CreativeStrategyOPIcon
                    type="arrowRight"
                    size={15}
                  />
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="creative-op-production-canvas">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSystem.id}
              className="creative-op-production-selected"
              variants={contentReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <section className="creative-op-production-selected-header">
                <div className="creative-op-production-selected-icon">
                  <CreativeStrategyOPIcon
                    type={selectedSystem.icon}
                    size={30}
                  />
                </div>

                <div>
                  <span>{selectedSystem.number}</span>
                  <h2>{selectedSystem.title}</h2>
                  <p>{selectedSystem.description}</p>
                </div>
              </section>

              <section className="creative-op-production-question-card">
                <div className="creative-op-production-question-heading">
                  <div>
                    <span>PRODUCTION FRAMEWORK</span>
                    <h3>Quality Questions</h3>
                  </div>

                  <small>
                    {selectedSystem.questions.length} questions
                  </small>
                </div>

                <div className="creative-op-production-question-grid">
                  {selectedSystem.questions.map(
                    (question, index) => (
                      <div
                        className="creative-op-production-question-item"
                        key={question}
                      >
                        <span>
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <p>{question}</p>
                      </div>
                    )
                  )}
                </div>
              </section>

              <section className="creative-op-production-example-card">
                <div className="creative-op-production-example-icon">
                  <CreativeStrategyOPIcon
                    type="production"
                    size={20}
                  />
                </div>

                <div>
                  <span>EXAMPLE PRODUCTION DECISION</span>
                  <p>{selectedSystem.example}</p>
                </div>
              </section>

              <div className="creative-op-production-bottom-grid">
                <ProductionDataCard
                  title="Production Requirements"
                  items={selectedSystem.requirements}
                  icon="briefing"
                />

                <ProductionDataCard
                  title="Expected Outputs"
                  items={selectedSystem.outputs}
                  icon="validation"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <aside className="creative-op-production-sop-panel">
          <span className="creative-op-production-sop-eyebrow">
            FINAL APPROVAL LAYER
          </span>

          <h2>Production Outcomes</h2>

          <p>
            Every creative must pass strategic, visual, brand,
            compliance, and technical checks before launch.
          </p>

          <div className="creative-op-production-outcome-list">
            {productionOutcomes.map((outcome) => (
              <button
                type="button"
                key={outcome.id}
                className={`creative-op-production-outcome-card ${
                  activeOutcome === outcome.id
                    ? 'is-active'
                    : ''
                }`}
                onClick={() =>
                  setActiveOutcome(outcome.id)
                }
              >
                <span>
                  <CreativeStrategyOPIcon
                    type={outcome.icon}
                    size={18}
                  />
                </span>

                <div>
                  <strong>{outcome.title}</strong>
                  <p>{outcome.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="creative-op-production-sop-block">
            <span>DOCUMENTATION</span>

            <div>
              {selectedSystem.sops.map((sop) => (
                <div
                  className="creative-op-production-sop-card"
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
          </div>

          <div className="creative-op-production-output-card">
            <span>FINAL STAGE OUTPUT</span>

            <h3>Launch-Ready Creative</h3>

            <p>
              A strategically accurate, technically correct,
              brand-approved, compliant, and fully organized final
              creative asset.
            </p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}