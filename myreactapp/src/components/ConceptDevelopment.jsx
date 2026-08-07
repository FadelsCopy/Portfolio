// src/components/ConceptDevelopment.jsx

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
| CONCEPT DEVELOPMENT DATA
|--------------------------------------------------------------------------
*/

const conceptInputs = [
  'Selected angle',
  'Target persona or sub-persona',
  'Relevant awareness level',
  'Main insight',
  'Supporting research',
  'Customer language',
  'Pain, desire, fear, belief, or tension',
  'Buying trigger',
  'Failed alternatives',
  'Proof requirements',
  'Product mechanism',
  'Available proof',
  'Relevant offer',
  'Platform and placement',
  'Available assets and production resources',
];

const conceptTranslationQuestions = [
  'What does this angle need the customer to understand, feel, or believe?',
  'Which part of the angle matters most to this persona?',
  'What real customer situation can express it?',
  'What is the clearest way to make the angle visible?',
  'Does the angle require a story, explanation, comparison, demonstration, or proof?',
  'Who should communicate the message?',
  'How much education does the audience need?',
  'What should the customer conclude by the end?',
  'What should this concept help the team learn?',
];

const conceptFamilies = [
  {
    title: 'Customer Story',
    description:
      'The angle is expressed through a customer’s experience, struggle, discovery, and result.',
    usefulFor: [
      'Transformation',
      'Failed alternatives',
      'Emotional problems',
      'Buying triggers',
      'Identity changes',
      'Testimonials',
    ],
  },
  {
    title: 'Founder Story',
    description:
      'The founder explains why the product was created, what problem they noticed, or what the market was missing.',
    usefulFor: [
      'Brand credibility',
      'Product-development stories',
      'Mechanisms',
      'Contrarian positions',
      'Trust building',
    ],
  },
  {
    title: 'Expert Explanation',
    description:
      'A qualified expert explains the problem, mechanism, common mistake, or solution.',
    usefulFor: [
      'Sophisticated markets',
      'Skeptical customers',
      'Technical products',
      'Health and wellness products',
      'Mechanism angles',
      'Belief shifts',
    ],
  },
  {
    title: 'Demonstration',
    description:
      'The product, problem, mechanism, or result is communicated visually.',
    usefulFor: [
      'Product performance',
      'Visible differences',
      'Ease of use',
      'Comparisons',
      'Proof',
      'Physical products',
      'Problem dramatization',
    ],
  },
  {
    title: 'Product Experiment',
    description:
      'The creative tests, measures, compares, or visibly proves something about the product.',
    usefulFor: [
      'Proof angles',
      'Comparison angles',
      'Product superiority',
      'Ingredient or material claims',
      'Curiosity',
    ],
  },
  {
    title: 'Problem Dramatization',
    description:
      'The concept makes the customer’s problem visible through a relatable situation.',
    usefulFor: [
      'Problem angles',
      'Fear angles',
      'Behavioral moments',
      'Daily frustrations',
      'Emotional consequences',
    ],
  },
  {
    title: 'Comparison',
    description:
      'The product is compared with a competitor, alternative solution, habit, or category.',
    usefulFor: [
      'Failed alternatives',
      'Mechanism differences',
      'Product superiority',
      'Convenience',
      'Cost',
      'Time',
      'Simplicity',
    ],
  },
  {
    title: 'Native Discovery',
    description:
      'The concept feels like a personal discovery, recommendation, review, news story, or useful piece of content rather than a traditional advertisement.',
    usefulFor: [
      'Cold audiences',
      'Curiosity angles',
      'New mechanisms',
      'Product discovery',
      'Advertorial funnels',
      'Native ads',
    ],
  },
  {
    title: 'Testimonial',
    description:
      'The message is built around a customer’s result, experience, or recommendation.',
    usefulFor: [
      'Proof',
      'Objection handling',
      'Transformation',
      'Product-aware audiences',
      'Retargeting',
      'Social proof',
    ],
  },
  {
    title: 'Review-Led Concept',
    description:
      'The creative begins with or is structured around real customer reviews, comments, or questions.',
    usefulFor: [
      'Customer language',
      'Proof',
      'Objections',
      'Relatability',
      'Native execution',
      'Static ads',
    ],
  },
  {
    title: 'Myth or Contrarian Explanation',
    description:
      'The concept challenges a common belief, assumption, or category practice.',
    usefulFor: [
      'Contrarian angles',
      'Belief shifts',
      'Market sophistication',
      'Differentiation',
      'Mechanism education',
    ],
  },
  {
    title: 'Routine or Lifestyle Scenario',
    description:
      'The product is shown inside a normal customer routine, situation, or environment.',
    usefulFor: [
      'Product use',
      'Convenience',
      'Habit formation',
      'Identity',
      'Daily-life outcomes',
      'Native UGC',
    ],
  },
  {
    title: 'Skit or Scenario',
    description:
      'The angle is communicated through a short acted situation, conversation, or conflict.',
    usefulFor: [
      'Objections',
      'Social situations',
      'Customer frustrations',
      'Humor',
      'Product discovery',
      'Relatable moments',
    ],
  },
  {
    title: 'Podcast or Conversation',
    description:
      'The message is delivered through a conversation between a host, customer, founder, or expert.',
    usefulFor: [
      'Complex explanations',
      'Stories',
      'Contrarian opinions',
      'Authority',
      'Native-feeling long-form content',
    ],
  },
  {
    title: 'Visual Metaphor',
    description:
      'An object, comparison, or visual situation simplifies an abstract problem or mechanism.',
    usefulFor: [
      'Difficult mechanisms',
      'Internal problems',
      'Invisible causes',
      'Memory',
      'Pattern interruption',
    ],
  },
];

const conceptSelectionQuestions = [
  'Which concept makes the angle easiest to understand?',
  'Which concept fits the persona’s real experience?',
  'Which concept makes the message believable?',
  'Which concept makes the proof visible?',
  'Which concept fits the awareness level?',
  'Which concept can produce several variations?',
  'Which concept fits the available production resources?',
  'Which concept naturally leads into the product and offer?',
];

const formats = [
  'UGC',
  'Founder ad',
  'Expert ad',
  'Talking-head video',
  'Testimonial video',
  'Demonstration video',
  'VSL',
  'Mini-VSL',
  'Static ad',
  'Carousel',
  'Native ad',
  'Advertorial',
  'Listicle',
  'Podcast-style ad',
  'Skit',
  'Street interview',
  'Screen recording',
  'Slideshow',
  'Animation',
  'AI-assisted video',
  'Product-focused video',
  'Before-and-after creative',
];

const formatSelectionQuestions = [
  'How much explanation does the angle require?',
  'Can the message be understood in one image?',
  'Does the concept need a story?',
  'Is the proof visual?',
  'Is authority important?',
  'Does the persona need emotional relatability?',
  'Should the message feel polished or native?',
  'Does the concept require a creator?',
  'What format fits the platform?',
  'What assets are already available?',
  'How quickly can the concept be produced?',
  'Can the format support future iterations?',
];

const creatorTypes = [
  'Customer',
  'UGC creator',
  'Founder',
  'Expert',
  'Practitioner',
  'Employee',
  'Reviewer',
  'Influencer',
  'Narrator',
  'Actor',
  'Presenter',
  'No visible creator',
];

const creatorSelectionQuestions = [
  'Who would the persona trust?',
  'Who can deliver the message naturally?',
  'Does the concept require relatability or authority?',
  'Does the creator visually fit the target customer?',
  'Does the creator have the right tone and delivery?',
  'Can the creator communicate the emotion or mechanism credibly?',
  'Does the concept work better without a visible spokesperson?',
];

const openingElements = [
  'Verbal hook',
  'Visual hook',
  'Editing hook',
  'First frame',
  'On-screen text',
  'Opening situation',
  'Sound or pattern interruption',
  'Initial tension',
  'Initial proof',
  'Initial curiosity',
];

const hookInputs = [
  'Selected angle',
  'Persona language',
  'Severe pain or desire',
  'Emotional driver',
  'Buying trigger',
  'Failed alternative',
  'Belief or misconception',
  'Mechanism',
  'Proof',
  'Customer story',
  'Competitor gap',
  'Hook Intelligence Library',
];

const verbalHooks = [
  'Direct problem statement',
  'Persona callout',
  'Question',
  'Contrarian statement',
  'Warning',
  'Discovery',
  'Confession',
  'Customer quote',
  'Story opening',
  'Failed-alternative statement',
  'Proof statement',
  'Comparison',
  'Specific result',
  'Authority statement',
  'Curiosity gap',
];

const visualHooks = [
  'Problem-state image',
  'Product demonstration',
  'Before and after',
  'Close-up',
  'Customer reaction',
  'Review screenshot',
  'Comment screenshot',
  'Comparison',
  'Unexpected object',
  'Product-in-use moment',
  'Native social screenshot',
  'Transformation',
  'Strong movement',
  'Visual metaphor',
];

const editingHooks = [
  'Fast opening cuts',
  'Sudden zoom',
  'Text-first opening',
  'Comment overlay',
  'Abrupt scene change',
  'Split screen',
  'Freeze frame',
  'Countdown',
  'Rapid comparison',
  'Screen recording',
  'Sound interruption',
  'Loop',
  'Immediate subtitle emphasis',
];

const openingQuestions = [
  'Does the opening attract the intended persona?',
  'Does it introduce the selected angle?',
  'Does it create the right expectation?',
  'Can the body deliver on the hook?',
  'Does the first visual communicate something immediately?',
  'Is the hook specific enough to stop the right customer?',
  'Is the opening strong without becoming misleading?',
  'Can several hook variations lead into the same concept?',
];

const narrativeStructures = [
  {
    title: 'Problem–Solution Structure',
    flow: [
      'Hook',
      'Problem',
      'Consequence',
      'New Explanation',
      'Product',
      'Proof',
      'Offer',
      'CTA',
    ],
    usefulFor: [
      'Problem angles',
      'Mechanism angles',
      'Educational concepts',
      'Cold audiences',
    ],
  },
  {
    title: 'Failed-Alternative Structure',
    flow: [
      'Hook',
      'Previous Attempts',
      'Why They Failed',
      'New Mechanism',
      'Product',
      'Proof',
      'CTA',
    ],
    usefulFor: [
      'Sophisticated customers',
      'Skeptical audiences',
      'Comparison angles',
      'Mechanism angles',
    ],
  },
  {
    title: 'Customer Story Structure',
    flow: [
      'Hook',
      'Customer Situation',
      'Struggle',
      'Failed Attempts',
      'Turning Point',
      'Discovery',
      'Result',
      'Product',
      'CTA',
    ],
    usefulFor: [
      'Testimonials',
      'Transformation',
      'Emotional angles',
      'Identity angles',
    ],
  },
  {
    title: 'Demonstration Structure',
    flow: [
      'Hook',
      'Demonstration',
      'Observation',
      'Explanation',
      'Product Difference',
      'Proof',
      'Offer',
      'CTA',
    ],
    usefulFor: [
      'Physical products',
      'Comparison',
      'Proof',
      'Product superiority',
    ],
  },
  {
    title: 'Belief-Shift Structure',
    flow: [
      'Hook',
      'Current Belief',
      'Why It Is Incomplete',
      'New Explanation',
      'Proof',
      'Product',
      'CTA',
    ],
    usefulFor: [
      'Contrarian angles',
      'Mechanism angles',
      'Skeptical audiences',
      'Sophisticated markets',
    ],
  },
  {
    title: 'Proof-First Structure',
    flow: [
      'Hook',
      'Strongest Proof',
      'What It Means',
      'Why It Worked',
      'Product',
      'Supporting Evidence',
      'Offer',
      'CTA',
    ],
    usefulFor: [
      'Proof angles',
      'Product-aware audiences',
      'Retargeting',
      'Strong customer results',
    ],
  },
  {
    title: 'Comparison Structure',
    flow: [
      'Hook',
      'Current Alternative',
      'Main Limitation',
      'Product Difference',
      'Why the Difference Matters',
      'Proof',
      'Offer',
      'CTA',
    ],
    usefulFor: [
      'Comparison angles',
      'Failed alternatives',
      'Product differentiation',
    ],
  },
  {
    title: 'Native Discovery Structure',
    flow: [
      'Hook',
      'Interesting Discovery',
      'Problem Explanation',
      'New Possibility',
      'Product Reveal',
      'Proof',
      'Recommendation',
      'CTA',
    ],
    usefulFor: [
      'Advertorials',
      'Native ads',
      'UGC',
      'Curiosity angles',
      'Cold audiences',
    ],
  },
];

const narrativeQuestions = [
  'What does the customer need to understand first?',
  'What argument naturally follows the hook?',
  'When should the product appear?',
  'Which objection must be handled?',
  'What proof should appear before the offer?',
  'Does each section move the customer toward the intended conclusion?',
  'Is anything included that does not support the selected angle?',
  'Is the narrative appropriate for the audience’s awareness level?',
];

const productIntegrationFields = [
  'When the product appears',
  'How the product is introduced',
  'Which feature or mechanism matters',
  'Which benefit supports the angle',
  'Which proof supports the promise',
  'Which objection is addressed',
  'Whether demonstration is necessary',
  'Whether the product should be shown early or revealed later',
  'How the product fits the customer’s existing routine',
  'How the product differs from failed alternatives',
];

const proofOptions = [
  'Customer testimonial',
  'Review',
  'Before and after',
  'Demonstration',
  'Clinical evidence',
  'Ingredient evidence',
  'Expert explanation',
  'Certification',
  'Product testing',
  'Comparison',
  'Founder authority',
  'Usage numbers',
  'Ratings',
  'Guarantee',
  'Visible product result',
];

const proofSelectionQuestions = [
  'What is the customer most likely to doubt?',
  'What proof is most relevant to this persona?',
  'What proof directly supports the selected angle?',
  'Is the proof specific?',
  'Is it credible?',
  'Can it be shown visually?',
  'Is it legally and commercially usable?',
  'Does the proof appear at the right moment?',
];

const offerFields = [
  'Product being promoted',
  'Main offer',
  'Bundle',
  'Subscription option',
  'Discount',
  'Bonus',
  'Guarantee',
  'Risk reversal',
  'Genuine urgency',
  'CTA',
  'Landing-page destination',
  'Message match',
];

const offerQuestions = [
  'Which offer fits this persona?',
  'Which offer fits the selected angle?',
  'Does the customer need a single product or bundle?',
  'Is subscription relevant?',
  'What reduces the purchase risk?',
  'Is urgency genuine and necessary?',
  'Does the landing page continue the same message?',
  'Is the offer introduced naturally?',
];

const ctaQuestions = [
  'What action should the customer take?',
  'Does the CTA match their awareness level?',
  'Does it feel like the natural next step?',
  'Should the CTA invite purchase, learning, comparison, qualification, or discovery?',
  'Is the CTA specific enough?',
  'Does it match the destination page?',
];

const possibleVariations = [
  'Verbal hook',
  'Visual hook',
  'First frame',
  'Creator',
  'Opening situation',
  'Proof',
  'Product demonstration',
  'Length',
  'Editing pace',
  'CTA',
  'Offer',
  'Format',
  'Story order',
  'Mechanism explanation',
];

const variationQuestions = [
  'What is the main uncertainty?',
  'Which variable is most likely to affect performance?',
  'What should remain controlled?',
  'Can several hooks use the same body?',
  'Can the same concept work with different creators?',
  'Is there enough difference between the versions to produce useful learning?',
];

const conceptInformationFields = [
  'Concept name',
  'Target persona or sub-persona',
  'Awareness level',
  'Selected angle',
  'Supporting insight',
  'Customer language',
];

const conceptDirectionFields = [
  'Concept idea',
  'Creative device',
  'Concept family',
  'What the audience will see',
  'What the audience should understand, feel, or believe',
];

const executionFields = [
  'Format',
  'Creator type',
  'Platform',
  'Opening visual',
  'Hook directions',
  'Narrative structure',
];

const productAndProofFields = [
  'Product integration',
  'Mechanism or benefit',
  'Proof',
  'Objection addressed',
];

const offerAndActionFields = [
  'Offer',
  'Guarantee or risk reversal',
  'CTA',
  'Destination page',
];

const testingDirectionFields = [
  'Planned variations',
  'What remains controlled',
  'What the concept is intended to teach',
];

const outputs = [
  'Angle translated into a clear concept direction',
  'Selected concept idea and creative device',
  'Selected concept family',
  'Selected format and creator type',
  'Hook and opening directions',
  'Narrative and message structure',
  'Product and proof integration',
  'Offer and CTA integration',
  'Planned test variations',
  'Complete Concept Card',
  'Decision to move into MVP Validation or Creative Briefing and Production',
];

const sops = [
  {
    title: 'Angle-to-Concept Development',
    description:
      'Explains how to combine the approved angle, target persona, supporting insights, customer language, product, proof, and offer to generate multiple concept directions and complete the Concept Card.',
  },
  {
    title: 'Hook and Opening Development',
    description:
      'Defines how to create verbal, visual, editing, and structural hooks that attract the intended persona, communicate the angle, and lead naturally into the concept body.',
  },
  {
    title: 'Format and Creative Structure Selection',
    description:
      'Explains how to select the format, creator type, creative device, narrative structure, proof sequence, product integration, offer, and CTA that best communicate the concept.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function ConceptDevelopment({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="ANGLE-TO-EXECUTION SYSTEM"
      title="Concept Development"
      introduction="After selecting the angle to test, I turn it into a complete advertising concept that can be produced, launched, and evaluated. The angle defines what persuasive direction the creative will focus on. The concept defines how that angle will be communicated to the audience."
      process={[
        'Approved Angle',
        'Concept Direction',
        'Hook and Format',
        'Narrative and Visual Device',
        'Concept Card',
      ]}
      outputs={outputs}
      outputTitle="Complete Concept Cards"
      sops={sops}
      sopDescription="The Concept Development SOP Library defines how an approved angle becomes a complete, testable advertising concept."
    >
      <StageSection
        number="00"
        navTitle="Angle Translation"
        title="Angle-to-Concept Translation"
        description="Reconnect the selected angle to the persona and evidence that originally supported it."
      >
        <StageHighlight
          title="Concept Development Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Approved Angle',
              'Target Persona',
              'Supporting Insights',
              'Customer Language',
              'Product and Proof',
              'Offer',
              'Concept Direction',
              'Complete Concept Card',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="What I Bring Into the Concept"
            description="Every concept begins from the strategic evidence that qualified the angle."
          >
            <StageList items={conceptInputs} />
          </StageCard>

          <StageCard
            title="Core Questions"
            description="These questions define what the concept must communicate and test."
          >
            <StageList items={conceptTranslationQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Important Boundary">
          <p>
            The output of this step is not a final script. It is a clear
            concept direction that can later be expanded into a creative
            brief.
          </p>
        </StageHighlight>

        <StageHighlight
          title="One Angle Can Generate Multiple Concepts"
          type="success"
        >
          <p>
            The angle may remain consistent while the story, creative
            device, format, creator, hook, and visual execution change.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Concept Idea"
        title="Concept Idea and Creative Device"
        description="Define what the audience will actually see and experience, and select the method used to express the angle."
      >
        <StageGrid columns={3}>
          {conceptFamilies.map((family) => (
            <StageCard
              key={family.title}
              title={family.title}
              description={family.description}
            >
              <StageList items={family.usefulFor} />
            </StageCard>
          ))}
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard
            title="Concept Selection Questions"
            description="Choose the concept that communicates the angle most clearly, credibly, and practically."
          >
            <StageList items={conceptSelectionQuestions} />
          </StageCard>
        </div>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Format & Creator"
        title="Format and Creator Selection"
        description="Choose the format and communicator that can express the concept most effectively."
      >
        <StageHighlight
          title="Format Selection Rule"
          type="warning"
        >
          <p>
            The format should follow the message. I do not select UGC, VSL,
            static, or native first and then force the angle into it.
          </p>
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard title="Possible Formats">
            <StageList items={formats} />
          </StageCard>

          <StageCard title="Format Selection Questions">
            <StageList items={formatSelectionQuestions} />
          </StageCard>

          <StageCard title="Possible Creator Types">
            <StageList items={creatorTypes} />
          </StageCard>

          <StageCard title="Creator Selection Questions">
            <StageList items={creatorSelectionQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Creator Role">
          <p>
            The creator should match the role required by the concept. Some
            concepts need relatability, some need authority, some need lived
            experience, and some work better without a visible spokesperson.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Hook & Opening"
        title="Hook and Opening Development"
        description="Develop the opening that earns attention and introduces the selected concept."
      >
        <StageGrid columns={2}>
          <StageCard title="Complete Opening Elements">
            <StageList items={openingElements} />
          </StageCard>

          <StageCard title="Hook Inputs">
            <StageList items={hookInputs} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard title="Verbal Hooks">
              <StageList items={verbalHooks} />
            </StageCard>

            <StageCard title="Visual Hooks">
              <StageList items={visualHooks} />
            </StageCard>

            <StageCard title="Editing Hooks">
              <StageList items={editingHooks} />
            </StageCard>
          </StageGrid>
        </div>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="Opening Questions">
            <StageList items={openingQuestions} />
          </StageCard>
        </div>

        <StageHighlight
          title="Hook-to-Body Alignment"
          type="warning"
        >
          <p>
            The hook should not be a random viral line attached to an
            unrelated body. The opening must introduce the same angle and
            expectation the rest of the concept delivers.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Narrative"
        title="Narrative and Message Structure"
        description="Organize how the argument, story, explanation, or demonstration develops after the opening."
      >
        <StageGrid columns={2}>
          {narrativeStructures.map((structure) => (
            <StageCard
              key={structure.title}
              title={structure.title}
            >
              <StageFlow items={structure.flow} />

              <div style={{ marginTop: '14px' }}>
                <StageList items={structure.usefulFor} />
              </div>
            </StageCard>
          ))}
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="Narrative Questions">
            <StageList items={narrativeQuestions} />
          </StageCard>
        </div>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Product & Proof"
        title="Proof and Product Integration"
        description="Connect the selected angle to the product in a believable and strategically relevant way."
      >
        <StageGrid columns={3}>
          <StageCard title="What I Define">
            <StageList items={productIntegrationFields} />
          </StageCard>

          <StageCard title="Proof Options">
            <StageList items={proofOptions} />
          </StageCard>

          <StageCard title="Proof Selection Questions">
            <StageList items={proofSelectionQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Product Integration Rule"
          type="success"
        >
          <p>
            The product should not appear as an unrelated interruption. It
            should feel like the natural answer to the argument created by
            the concept.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Offer & CTA"
        title="Offer and CTA Integration"
        description="Complete the concept by turning attention and belief into a clear next action."
      >
        <StageGrid columns={3}>
          <StageCard title="What I Define">
            <StageList items={offerFields} />
          </StageCard>

          <StageCard title="Offer Questions">
            <StageList items={offerQuestions} />
          </StageCard>

          <StageCard title="CTA Questions">
            <StageList items={ctaQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Message Match">
          <StageFlow
            items={[
              'Angle',
              'Concept',
              'Product',
              'Proof',
              'Offer',
              'CTA',
              'Destination Page',
            ]}
          />
        </StageHighlight>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Variations"
        title="Planned Variations"
        description="Define which elements should remain controlled and which variables should change before production begins."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Variations">
            <StageList items={possibleVariations} />
          </StageCard>

          <StageCard title="Variation Questions">
            <StageList items={variationQuestions} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Variation Rule"
          type="warning"
        >
          <p>
            The purpose is not to create random versions. Every variation
            should test a meaningful creative question while preserving the
            variables that need to remain controlled.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Concept Card"
        title="Concept Card"
        description="Organize every concept into one complete record before moving into MVP Validation or Creative Briefing and Production."
      >
        <StageGrid columns={3}>
          <StageCard title="Concept Information">
            <StageList items={conceptInformationFields} />
          </StageCard>

          <StageCard title="Concept Direction">
            <StageList items={conceptDirectionFields} />
          </StageCard>

          <StageCard title="Execution">
            <StageList items={executionFields} />
          </StageCard>

          <StageCard title="Product and Proof">
            <StageList items={productAndProofFields} />
          </StageCard>

          <StageCard title="Offer and Action">
            <StageList items={offerAndActionFields} />
          </StageCard>

          <StageCard title="Testing Direction">
            <StageList items={testingDirectionFields} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Concept Card Purpose"
          type="success"
        >
          <p>
            The Concept Card preserves the strategic logic behind the
            concept and gives the next stage a clear, complete, and testable
            direction.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Final Routing"
        title="Final Output and Routing"
        description="Decide whether the completed concept should move through MVP Validation or directly into Creative Briefing and Production."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Low-Cost or High-Risk Concept"
            description="Use MVP Validation when a smaller version can test the central assumption before expensive production."
          >
            <StageFlow
              items={[
                'Completed Concept Card',
                'MVP Validation',
                'Decision',
              ]}
            />
          </StageCard>

          <StageCard
            title="Straightforward or Low-Cost Concept"
            description="Move directly into briefing when the finished asset is already simple and inexpensive to produce."
          >
            <StageFlow
              items={[
                'Completed Concept Card',
                'Creative Briefing',
                'Production',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}