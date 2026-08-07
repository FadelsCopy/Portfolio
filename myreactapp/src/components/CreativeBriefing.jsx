// src/components/CreativeBriefing.jsx

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
| CREATIVE BRIEFING DATA
|--------------------------------------------------------------------------
*/

const conceptOverview = [
  'Concept name',
  'Target persona or sub-persona',
  'Awareness level',
  'Selected angle',
  'Supporting insight',
  'Main objective',
  'What the audience should understand, feel, or believe',
  'What the creative is intended to test',
];

const creativeDirection = [
  'Format',
  'Creator type',
  'Platform',
  'Intended duration',
  'Core message',
  'Hook options',
  'Opening visual',
  'Narrative structure',
  'Product integration',
  'Proof',
  'Objection being handled',
  'Offer',
  'CTA',
  'Landing-page destination',
];

const deliverables = [
  'Number of assets',
  'Required variations',
  'Hook variations',
  'CTA variations',
  'Aspect ratios',
  'Duration requirements',
  'File formats',
  'Raw-file requirements',
  'Naming conventions',
  'Deadline',
  'Responsible owner',
];

const nonNegotiables = [
  'Selected persona',
  'Angle',
  'Main message',
  'Product claim',
  'Proof',
  'Offer',
  'CTA',
  'Required disclaimer',
  'Product representation',
  'Brand restriction',
  'Testing variable',
];

const flexibleElements = [
  'Natural wording',
  'Minor delivery choices',
  'Supporting B-roll',
  'Transitions',
  'Music',
  'Secondary visuals',
  'Small pacing adjustments',
];

const referencePurposes = [
  'Hook structure',
  'First-frame treatment',
  'Creator delivery',
  'Tone',
  'Setting',
  'Pacing',
  'B-roll structure',
  'Caption style',
  'Visual hierarchy',
  'Camera framing',
  'Demonstration',
  'Story structure',
  'Product reveal',
  'Proof placement',
  'Transition style',
  'Sound design',
  'CTA execution',
];

const referenceFormat = [
  'Link or file',
  'Relevant timestamp',
  'Element to study',
  'Why it is relevant',
  'What should not be copied',
  'How it should be adapted to the current concept',
];

const editorBriefOverview = [
  'Concept name',
  'Target persona',
  'Selected angle',
  'Main message',
  'Format',
  'Platform',
  'Target duration',
  'Required versions',
  'Deadline',
];

const editorScriptStructure = [
  'Final script or voiceover',
  'Scene-by-scene structure',
  'Hook options',
  'Opening sequence',
  'Main argument or story',
  'Product-introduction point',
  'Proof sequence',
  'Offer',
  'CTA',
  'Sections that may be shortened',
  'Sections that must remain intact',
];

const editorAssets = [
  'Raw creator footage',
  'Product footage',
  'B-roll',
  'Product images',
  'Before-and-after assets',
  'Testimonials',
  'Reviews',
  'Screenshots',
  'Logos',
  'Brand assets',
  'Music',
  'Voiceover',
  'Fonts',
  'Required disclaimers',
];

const editorHookDirection = [
  'Which hook is being used',
  'What appears in the first frame',
  'On-screen text',
  'First visual movement',
  'Initial sound',
  'Whether the product appears immediately',
  'What the viewer should understand within the first seconds',
];

const editingDirection = [
  'Desired pacing',
  'Cut frequency',
  'Energy level',
  'Caption treatment',
  'On-screen text hierarchy',
  'B-roll placement',
  'Product-shot placement',
  'Pattern interrupts',
  'Zooms',
  'Transitions',
  'Screen recordings',
  'Review or comment overlays',
  'Sound effects',
  'Music direction',
  'Proof emphasis',
  'CTA treatment',
];

const editorReferenceFocus = [
  'Opening pace',
  'Caption style',
  'Visual rhythm',
  'B-roll density',
  'Transition treatment',
  'Sound design',
  'Product reveal',
  'Proof presentation',
];

const requiredVariations = [
  'Different hooks using the same body',
  'Different first frames',
  'Different proof',
  'Different CTA',
  'Different length',
  'Different pacing',
  'Different product reveal',
  'Different opening B-roll',
];

const technicalRequirements = [
  'Aspect ratio',
  'Resolution',
  'Duration',
  'Frame rate, when necessary',
  'Caption-safe areas',
  'Platform requirements',
  'Export settings',
  'File type',
  'Thumbnail or cover requirements',
  'Naming convention',
  'Delivery location',
];

const creatorContext = [
  'Who the creator is speaking to',
  'What problem that person is experiencing',
  'What situation they are in',
  'What they currently believe',
  'What they want',
  'What they are skeptical about',
  'What the creative should help them understand or feel',
];

const creatorMessageDirection = [
  'Selected angle',
  'Core message',
  'Main talking points',
  'Hook options',
  'Story or argument structure',
  'Product benefit',
  'Mechanism, when relevant',
  'Proof',
  'Objection to handle',
  'Offer',
  'CTA',
];

const fullScriptBestWhen = [
  'Claims must be precise',
  'The argument has a specific order',
  'The message is technical',
  'The creator has limited copy experience',
  'Compliance is important',
];

const talkingPointsBestWhen = [
  'Natural delivery matters',
  'The creator understands the category',
  'Personal language improves credibility',
  'The concept is testimonial or UGC-driven',
];

const guidedInterviewBestWhen = [
  'The creator has a real story',
  'Authentic answers are more valuable than memorized delivery',
  'Specific experiences, emotions, and details need to be extracted',
];

const deliveryDirection = [
  'Tone',
  'Energy',
  'Pace',
  'Emotional state',
  'Level of authority',
  'Level of relatability',
  'Whether the delivery should feel conversational, educational, urgent, reflective, or enthusiastic',
  'Words or claims to avoid',
  'Lines that must be delivered exactly',
  'Sections that may be expressed naturally',
];

const visualDirection = [
  'Location',
  'Background',
  'Camera framing',
  'Lighting',
  'Wardrobe',
  'Product visibility',
  'Product usage',
  'Required demonstrations',
  'Facial expression',
  'Movement',
  'Props',
  'Native phone-camera style versus polished production',
];

const requiredFootage = [
  'Multiple hook takes',
  'Full-body takes',
  'Close-up takes',
  'Product-use footage',
  'Product close-ups',
  'Reaction shots',
  'Lifestyle B-roll',
  'Demonstration footage',
  'Silent B-roll',
  'CTA variations',
  'Additional clean takes',
  'Raw footage without captions or music',
];

const creatorTypeAdjustments = [
  {
    title: 'UGC Creator',
    items: [
      'Relatability',
      'Natural delivery',
      'Native environment',
      'Personal language',
      'Product use',
      'Realistic emotion',
      'Believable customer perspective',
    ],
    note:
      'The creator should not sound like a formal brand spokesperson unless the concept requires it.',
  },
  {
    title: 'Founder',
    items: [
      'Why the product exists',
      'Product-development story',
      'Personal conviction',
      'Market problem',
      'Product differentiation',
      'Founder authority',
      'Direct knowledge of the customer',
    ],
    note:
      'The founder should communicate genuine involvement rather than generic promotional claims.',
  },
  {
    title: 'Expert',
    items: [
      'Expertise',
      'Problem explanation',
      'Mechanism',
      'Misconceptions',
      'Proof',
      'Responsible claims',
      'Clear education',
    ],
    note:
      'The expert’s credibility must be relevant to the message being delivered.',
  },
  {
    title: 'Customer or Testimonial Creator',
    items: [
      'Specific starting situation',
      'Emotional context',
      'Previous attempts',
      'Turning point',
      'Product experience',
      'Specific result',
      'Realistic timeline',
      'Details that make the story believable',
    ],
    note:
      'The story should sound like lived experience rather than scripted advertising.',
  },
];

const alignmentCheck = [
  'Deliverables',
  'Deadline',
  'References',
  'Required assets',
  'Missing information',
  'Non-negotiable elements',
  'Flexible elements',
  'Technical requirements',
  'Questions',
  'Approval checkpoints',
];

const creatorCheckpoint = [
  'One hook sample',
  'One delivery sample',
  'Camera framing',
  'Setting',
  'Lighting',
  'Wardrobe',
  'Product demonstration',
  'One representative take',
];

const editorCheckpoint = [
  'Rough first frame',
  'Opening hook',
  'First 15–30 seconds',
  'Caption direction',
  'Pacing',
  'B-roll style',
  'Basic sound direction',
];

const feedbackStructure = [
  'Timestamp or location',
  'What needs to change',
  'Why it matters',
  'Exact requested change',
  'Reference, when needed',
];

const mustChangeExamples = [
  'Incorrect claim',
  'Wrong angle',
  'Missing proof',
  'Weak hook execution',
  'Incorrect product usage',
  'Wrong CTA',
  'Compliance problem',
];

const revisionRequirements = [
  'One consolidated feedback source',
  'One primary decision-maker',
  'Clear version names',
  'Defined revision deadlines',
  'Confirmation of completed changes',
  'A record of unresolved notes',
  'Final approval status',
];

const revisionFormats = [
  'Timestamped document',
  'Frame.io',
  'Loom walkthrough with written summary',
  'Project-management task',
  'Centralized creative-review tool',
];

const finalQualityCheck = [
  'Targets the intended persona',
  'Communicates the selected angle',
  'Matches the approved concept',
  'Uses the correct hook',
  'Maintains hook-to-body alignment',
  'Introduces the product naturally',
  'Uses the correct proof',
  'Handles the intended objection',
  'Presents the correct offer',
  'Uses the correct CTA',
  'Matches the destination page',
  'Respects brand and compliance requirements',
  'Meets technical specifications',
  'Includes all required variations',
  'Uses the correct naming convention',
];

const outputs = [
  'Production-ready creative brief',
  'Organized reference library',
  'Video editor brief',
  'Creator brief',
  'Required shot and asset list',
  'Defined variations',
  'Early-checkpoint approval',
  'Consolidated revision notes',
  'Approved final assets',
];

const sops = [
  {
    title: 'Creative Brief Development',
    description:
      'Defines how to translate a completed concept into a production-ready brief containing the strategy, execution direction, references, deliverables, variations, and non-negotiable elements.',
  },
  {
    title: 'Editor and Creator Briefing',
    description:
      'Explains how to adapt the core brief for video editors, UGC creators, founders, experts, and testimonial creators so each person receives the exact direction and assets required.',
  },
  {
    title: 'Creative Feedback and Revision',
    description:
      'Defines how to manage alignment, early checkpoints, consolidated feedback, revision rounds, version control, final quality checks, and approval with minimal unnecessary back-and-forth.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeBriefing({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="PRODUCTION COMMUNICATION SYSTEM"
      title="Creative Briefing and Production Communication"
      introduction="Once a concept is approved, I translate it into clear production instructions for the people responsible for creating the asset. The brief should protect the strategy while removing unnecessary guesswork. The editor or creator should understand what is being produced, why each element matters, what is flexible, and what must remain unchanged."
      process={[
        'Approved Concept',
        'Production-Ready Brief',
        'Editor or Creator Handoff',
        'Early Checkpoint',
        'Consolidated Feedback',
        'Final Approval',
      ]}
      outputs={outputs}
      outputTitle="Approved Production Assets"
      sops={sops}
      sopDescription="The Creative Briefing SOP Library defines how approved concepts are translated, communicated, reviewed, revised, and approved for production."
    >
      <StageSection
        number="00"
        navTitle="Briefing System"
        title="Creative Briefing and Production Communication"
        description="Produce the intended concept accurately, quickly, and with minimal unnecessary back-and-forth."
      >
        <StageHighlight
          title="Core Production Flow"
          type="success"
        >
          <StageFlow
            items={[
              'Approved Concept',
              'Production-Ready Brief',
              'Editor or Creator Handoff',
              'Early Checkpoint',
              'Consolidated Feedback',
              'Final Approval',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard title="The Brief Must Protect">
            <StageList
              items={[
                'The target persona',
                'The selected angle',
                'The approved concept',
                'The main strategic message',
                'The intended test',
                'The proof, offer, and CTA',
              ]}
            />
          </StageCard>

          <StageCard title="The Brief Must Remove">
            <StageList
              items={[
                'Unnecessary guesswork',
                'Unclear ownership',
                'Scattered references',
                'Conflicting feedback',
                'Strategic drift',
                'Avoidable revision rounds',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Brief Structure"
        title="Production-Ready Brief Structure"
        description="Every brief begins with the same strategic foundation before being adapted to the editor or creator receiving it."
      >
        <StageGrid columns={3}>
          <StageCard title="Concept Overview">
            <StageList items={conceptOverview} />
          </StageCard>

          <StageCard title="Creative Direction">
            <StageList items={creativeDirection} />
          </StageCard>

          <StageCard title="Deliverables">
            <StageList items={deliverables} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard
              title="Non-Negotiables"
              description="Elements that must remain consistent because changing them would alter the strategy being tested."
            >
              <StageList items={nonNegotiables} />
            </StageCard>

            <StageCard
              title="Flexible Elements"
              description="Areas where the editor or creator may use judgment without changing the strategy."
            >
              <StageList items={flexibleElements} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Briefing Principle"
          type="success"
        >
          <p>
            Clearly separating non-negotiable elements from flexible
            elements prevents both over-control and strategic drift.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="References"
        title="References"
        description="Use references to clarify the intended execution, not to replace the strategic explanation."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Reference Purposes">
            <StageList items={referencePurposes} />
          </StageCard>

          <StageCard title="Reference Format">
            <StageList items={referenceFormat} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Reference Rule"
          type="warning"
        >
          <p>
            I do not simply attach an ad and say “make it like this.” Every
            reference must explain exactly what should be studied, why it
            matters, what should not be copied, and how it should be adapted.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Editor Brief"
        title="Video Editor Brief"
        description="Explain how the available footage, voiceover, graphics, proof, and product assets should be assembled into the intended concept."
      >
        <StageGrid columns={3}>
          <StageCard title="Editor Brief Overview">
            <StageList items={editorBriefOverview} />
          </StageCard>

          <StageCard title="Script and Structure">
            <StageList items={editorScriptStructure} />
          </StageCard>

          <StageCard title="Asset Organization">
            <StageList items={editorAssets} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard title="Hook and First Frame">
              <StageList items={editorHookDirection} />
            </StageCard>

            <StageCard title="Editing Direction">
              <StageList items={editingDirection} />
            </StageCard>
          </StageGrid>
        </div>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard title="Editing Reference Focus">
              <StageList items={editorReferenceFocus} />
            </StageCard>

            <StageCard title="Required Variations">
              <StageList items={requiredVariations} />
            </StageCard>

            <StageCard title="Technical Requirements">
              <StageList items={technicalRequirements} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight
          title="Editor Briefing Rule"
          type="success"
        >
          <p>
            The editor should not need to guess the message hierarchy or
            decide which strategic elements matter most.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Creator Brief"
        title="Creator, UGC, Founder and Expert Brief"
        description="Explain the customer, situation, message, delivery, and footage required to bring the concept to life naturally."
      >
        <StageGrid columns={2}>
          <StageCard title="Creator Context">
            <StageList items={creatorContext} />
          </StageCard>

          <StageCard title="Message Direction">
            <StageList items={creatorMessageDirection} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard
              title="Full Script"
              description="Best when the message requires precision and control."
            >
              <StageList items={fullScriptBestWhen} />
            </StageCard>

            <StageCard
              title="Structured Talking Points"
              description="Best when natural delivery and personal language improve credibility."
            >
              <StageList items={talkingPointsBestWhen} />
            </StageCard>

            <StageCard
              title="Guided Interview"
              description="Best when authentic lived experience is more valuable than memorized delivery."
            >
              <StageList items={guidedInterviewBestWhen} />
            </StageCard>
          </StageGrid>
        </div>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={3}>
            <StageCard title="Delivery Direction">
              <StageList items={deliveryDirection} />
            </StageCard>

            <StageCard title="Visual Direction">
              <StageList items={visualDirection} />
            </StageCard>

            <StageCard title="Required Footage">
              <StageList items={requiredFootage} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight title="Recording Efficiency">
          <p>
            Recording several usable variations during one session reduces
            the need to request additional footage later.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Creator Types"
        title="Creator-Type Adjustments"
        description="Keep the core strategy consistent while adapting the direction to the person delivering the message."
      >
        <StageGrid columns={2}>
          {creatorTypeAdjustments.map((creator) => (
            <StageCard
              key={creator.title}
              title={creator.title}
            >
              <StageList items={creator.items} />

              <div style={{ marginTop: '12px' }}>
                <StageHighlight title="Direction">
                  <p>{creator.note}</p>
                </StageHighlight>
              </div>
            </StageCard>
          ))}
        </StageGrid>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Brief Alignment"
        title="Brief Alignment"
        description="Confirm that the editor or creator understands the assignment before production begins."
      >
        <StageGrid columns={2}>
          <StageCard title="Alignment Check">
            <StageList items={alignmentCheck} />
          </StageCard>

          <StageHighlight
            title="Alignment Rule"
            type="warning"
          >
            <p>
              Questions should be resolved before the creator records the
              full asset or the editor completes the full cut.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Early Checkpoint"
        title="Early Checkpoint"
        description="Review a small representative part of the work before full production is completed."
      >
        <StageGrid columns={2}>
          <StageCard title="Creator Checkpoint">
            <StageList items={creatorCheckpoint} />
          </StageCard>

          <StageCard title="Editor Checkpoint">
            <StageList items={editorCheckpoint} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="When It Is Most Useful">
          <p>
            An early checkpoint is most valuable when the concept, creator,
            format, or execution is new or complex. Not every simple
            production requires one.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Feedback"
        title="Consolidated Feedback"
        description="Provide clear, specific feedback in one organized round."
      >
        <StageHighlight
          title="Feedback Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Timestamp or Location',
              'What Needs to Change',
              'Why It Matters',
              'Exact Requested Change',
              'Reference',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={3}>
          <StageCard
            title="Must Change"
            description="The asset cannot be approved without the correction."
          >
            <StageList items={mustChangeExamples} />
          </StageCard>

          <StageCard
            title="Recommended Improvement"
            description="The change is likely to improve clarity or performance but does not completely break the concept."
          />

          <StageCard
            title="Optional Experiment"
            description="A possible variation worth testing rather than a required correction to the original version."
          />
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard title="Every Feedback Note Should Include">
            <StageList items={feedbackStructure} />
          </StageCard>
        </div>

        <StageHighlight
          title="Feedback Principle"
          type="warning"
        >
          <p>
            Separating required corrections from recommendations and
            experiments keeps feedback focused and prevents subjective
            preferences from creating unnecessary revision rounds.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Version Control"
        title="Revision and Version Control"
        description="Keep every revision organized, traceable, and connected to one clear decision-maker."
      >
        <StageGrid columns={2}>
          <StageCard title="Revision Requirements">
            <StageList items={revisionRequirements} />
          </StageCard>

          <StageCard title="Primary Feedback Formats">
            <StageList items={revisionFormats} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Example Version Structure">
          <StageList
            items={[
              'ConceptName_V1_Rough',
              'ConceptName_V2_Revision',
              'ConceptName_V3_Final',
              'ConceptName_HookA_Final',
              'ConceptName_HookB_Final',
            ]}
          />
        </StageHighlight>

        <StageHighlight
          title="Version-Control Rule"
          type="warning"
        >
          <p>
            Feedback should not be scattered across multiple Slack
            messages, emails, documents, and voice notes. Use one primary
            feedback and approval system.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Final QA"
        title="Final Quality Check"
        description="Confirm that the final asset accurately executes the intended strategy before approval."
      >
        <StageGrid columns={2}>
          <StageCard title="Final Approval Checklist">
            <StageList items={finalQualityCheck} />
          </StageCard>

          <StageHighlight
            title="Final Standard"
            type="success"
          >
            <p>
              The final asset should not only look polished. It should
              accurately execute the strategic idea being tested.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Final Output"
        title="Final Output"
        description="The briefing and communication process produces the complete package required for accurate production and approval."
      >
        <StageGrid columns={2}>
          <StageCard title="Production Outputs">
            <StageList items={outputs} />
          </StageCard>

          <StageHighlight
            title="Production Objective"
            type="success"
          >
            <p>
              Produce the approved concept accurately, efficiently, and
              without losing the original strategic direction during
              execution.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}