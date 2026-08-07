// src/components/CreativeScaling.jsx

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
| CREATIVE SCALING DATA
|--------------------------------------------------------------------------
*/

const winningCreativeComponents = [
  'Target persona',
  'Angle',
  'Customer insight',
  'Core promise',
  'Emotional driver',
  'Belief shift',
  'Mechanism',
  'Proof',
  'Concept',
  'Hook',
  'Format',
  'Creator',
  'Offer',
  'CTA',
];

const winningCoreElements = [
  'Persona',
  'Angle',
  'Core promise',
  'Mechanism',
  'Main belief shift',
  'Strongest proof',
  'Offer',
  'Product positioning',
];

const changeableElements = [
  'Hook',
  'Creator',
  'Format',
  'Narrative',
  'Visual device',
  'Length',
  'Pacing',
  'Proof presentation',
  'CTA execution',
];

const directVariations = [
  'New verbal hooks',
  'New visual hooks',
  'New first frames',
  'New creators',
  'Different creator demographics',
  'Shorter or longer cuts',
  'New pacing',
  'New B-roll',
  'Different product reveals',
  'Different proof placement',
  'Different CTAs',
  'Different opening scenes',
];

const directVariationExample = [
  'Five new hooks using the same body',
  'Three new creators delivering the same story',
  'A shorter 30-second version',
  'A proof-first opening',
  'A before-and-after opening',
  'A new CTA using the same offer',
];

const formatExpansions = [
  {
    title: 'Expert Talking Head',
    description:
      'An expert explains why topical products fail to address the internal cause.',
  },
  {
    title: 'Founder Ad',
    description:
      'The founder explains why the product was created and what the category was missing.',
  },
  {
    title: 'Demonstration',
    description:
      'A visual comparison shows the difference between treating the surface and supporting the problem internally.',
  },
  {
    title: 'Podcast-Style Ad',
    description:
      'A conversational discussion introduces the hidden cause and explains the solution naturally.',
  },
  {
    title: 'Mini-VSL',
    description:
      'The mechanism, failed alternatives, product, and proof are explained in greater depth.',
  },
  {
    title: 'Static Ad',
    description:
      'The core belief shift is communicated through a clear visual, headline, and proof.',
  },
  {
    title: 'Native Ad',
    description:
      'The message is presented as a discovery, story, or useful piece of information.',
  },
  {
    title: 'Advertorial',
    description:
      'The winning angle is expanded into a longer educational or customer-discovery narrative.',
  },
  {
    title: 'Listicle',
    description:
      'The message becomes a structured breakdown of why common solutions fail or why the product works differently.',
  },
  {
    title: 'Review-Led Video',
    description:
      'Multiple customer reviews are used to prove the same winning message.',
  },
  {
    title: 'Skit',
    description:
      'A relatable scenario dramatizes the frustration created by failed alternatives.',
  },
  {
    title: 'Animation or Visual Explanation',
    description:
      'The mechanism is simplified through motion graphics, illustrations, or visual metaphors.',
  },
];

const winningTruthConcepts = [
  'A customer story about replacing an entire shelf of failed products',
  'An expert explaining why topical products cannot reach the follicle',
  'A founder story about discovering the missing internal solution',
  'A bathroom comparison between topical and internal approaches',
  'A visual metaphor showing the difference between the surface and the root',
  'A myth-busting concept explaining why biotin alone may not be enough',
  'A review montage from women who tried multiple topical solutions',
  'A product experiment',
  'A “what I stopped buying” routine concept',
  'A documentary-style transformation story',
  'A podcast conversation about common hair-growth misconceptions',
  'A native discovery story about the hidden cause',
];

const customerSituations = [
  'Hair collecting in the shower drain',
  'A thinner ponytail',
  'Visible scalp in photographs',
  'Hair breaking while brushing',
  'Avoiding certain hairstyles',
  'Losing confidence during social situations',
  'Spending money on products that do not work',
  'Believing the problem is simply part of aging',
  'Feeling frustrated by a complicated routine',
  'Seeing no change after months of topical treatments',
];

const beliefShifts = [
  '“Hair loss is just part of aging.”',
  '“More biotin is always the answer.”',
  '“An expensive shampoo should fix the problem.”',
  '“The problem is only stress.”',
  '“Topical products can reach the root cause.”',
  '“Nothing can be done after a certain age.”',
  '“All hair supplements are basically the same.”',
];

const proofExpansions = [
  'Customer transformation',
  'Before-and-after evidence',
  'Customer reviews',
  'Review volume',
  'Consumer-study results',
  'Expert authority',
  'Ingredient evidence',
  'Product demonstration',
  'Comparison with failed alternatives',
  'Founder credibility',
  'Guarantee or risk reversal',
  'Product testing',
  'Specific timelines or outcomes',
];

const mostAwareElements = [
  'Offer',
  'Guarantee',
  'Bundle',
  'Discount',
  'Urgency',
  'Strongest proof',
  'Customer result',
];

const directWinnerFamily = [
  'New Hooks',
  'New Creators',
  'New Cuts',
  'New Visuals',
];

const formatWinnerFamily = [
  'UGC',
  'Expert',
  'Founder',
  'Static',
  'VSL',
  'Native',
  'Advertorial',
];

const conceptWinnerFamily = [
  'New Stories',
  'New Situations',
  'New Belief Shifts',
  'New Proof Routes',
  'New Awareness Levels',
];

const winnerFamilyBranchFields = [
  'What is being preserved',
  'What is changing',
  'Why the new direction is worth testing',
  'How it connects to the original winner',
  'What new learning it may produce',
];

const fatigueSignals = [
  'Declining hook rate',
  'Declining retention',
  'Declining CTR',
  'Rising frequency',
  'Rising CPA',
  'Falling conversion rate',
  'Falling ROAS',
  'One creator or format carrying too much of the performance',
  'Reduced performance stability over time',
];

const fatigueRefreshes = [
  'New hooks',
  'New creators',
  'New first frames',
  'New visual treatments',
  'New formats',
  'New customer situations',
  'New proof',
  'New narratives',
  'New lengths',
  'New CTAs',
];

const outputs = [
  'Documented winning strategic core',
  'Direct variations of the winner',
  'New format adaptations',
  'New concepts built from the validated truth',
  'New customer-situation concepts',
  'New proof-led concepts',
  'Awareness-level expansions',
  'A structured winner family',
  'Fatigue-refresh directions',
  'Additional creative tests designed to produce more winners',
];

const sops = [
  {
    title: 'Creative Scaling SOP',
    description:
      'Defines how to deconstruct a winning creative, identify the transferable strategic truth, protect the winning variables, build direct variations, translate the winner into new formats, generate new concepts, expand through customer situations, beliefs, proof and awareness levels, and create a wider winner family without losing the reason the original creative worked.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeScaling({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="WINNER EXPANSION SYSTEM"
      title="Creative Scaling"
      introduction="When a creative becomes a validated winner, I scale it by identifying what actually drove performance and expanding that learning into a wider family of creative assets. The goal is not to produce copies of the same ad. It is to create additional winners around the same proven strategic foundation."
      process={[
        'Winning Creative',
        'Deconstruct What Worked',
        'Protect the Winning Core',
        'Build Direct Variations',
        'Expand Into New Formats',
        'Generate New Concepts',
        'Test New Creative Families',
      ]}
      outputs={outputs}
      outputTitle="Creative Scaling Output"
      sops={sops}
      sopDescription="The Creative Scaling SOP defines how a validated winner becomes a wider family of related assets, formats, concepts, proof routes, and awareness-level executions."
    >
      <StageSection
        number="00"
        navTitle="Scaling System"
        title="Creative Scaling"
        description="Expand a validated winner into a wider family of creative assets without losing the reason the original creative worked."
      >
        <StageHighlight
          title="Creative Scaling Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Winning Creative',
              'Deconstruct What Worked',
              'Protect the Winning Core',
              'Build Direct Variations',
              'Expand Into New Formats',
              'Generate New Concepts',
              'Test New Creative Families',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Primary Objective"
            description="Create additional winners around the same proven strategic foundation."
          >
            <StageList
              items={[
                'Identify what actually drove performance',
                'Separate the strategic truth from the execution',
                'Protect the winning core',
                'Expand the message into more assets',
                'Expand the message into more formats',
                'Expand the message into more concepts',
              ]}
            />
          </StageCard>

          <StageHighlight
            title="Scaling Principle"
            type="warning"
          >
            <p>
              The goal is not to produce copies of the same ad. It is to
              create additional winners around the same proven strategic
              foundation.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Deconstruct Winner"
        title="Deconstruct the Winning Creative"
        description="Before creating anything new, break the winner into its main components."
      >
        <StageGrid columns={2}>
          <StageCard title="Winning Creative Components">
            <StageList items={winningCreativeComponents} />
          </StageCard>

          <StageCard
            title="Example"
            description="Separate the proven strategic truth from the specific execution used to communicate it."
          >
            <StageHighlight
              title="Proven Strategic Truth"
              type="success"
            >
              <p>
                Women over 50 respond to the idea that topical hair products
                fail because the real problem begins internally.
              </p>
            </StageHighlight>

            <div style={{ marginTop: '12px' }}>
              <StageHighlight title="Original Execution">
                <p>
                  A UGC creator speaking in her bathroom about the shampoos,
                  oils, and serums she tried.
                </p>
              </StageHighlight>
            </div>
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Transferable Learning"
          type="warning"
        >
          <p>
            The strategic truth may be scalable. The bathroom UGC is only
            one execution of it.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Protect the Core"
        title="Protect the Winning Core"
        description="Identify which elements should remain stable while the winner is expanded."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Winning Foundation"
            description="These elements may become the foundation of the winner family."
          >
            <StageList items={winningCoreElements} />
          </StageCard>

          <StageCard
            title="Controlled Changes"
            description="These elements can then be changed in a controlled way."
          >
            <StageList items={changeableElements} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Core Principle"
          type="success"
        >
          <p>
            Preserve the reason the creative worked while expanding how that
            reason is communicated.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Direct Variations"
        title="Build Direct Variations"
        description="The first level of scaling stays close to the original concept."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Direct Variations">
            <StageList items={directVariations} />
          </StageCard>

          <StageCard
            title="Example"
            description="A winning customer-story video may produce:"
          >
            <StageList items={directVariationExample} />
          </StageCard>
        </StageGrid>

        <StageHighlight title="Direct Variation Purpose">
          <p>
            These variations help extend the life of the original concept
            while testing which execution elements can improve or maintain
            performance.
          </p>
        </StageHighlight>

        <StageHighlight
          title="Concept Boundary"
          type="warning"
        >
          <p>
            These are still versions of the original concept.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Format Expansion"
        title="Expand the Winner Into New Formats"
        description="A validated message should not remain trapped inside one format."
      >
        <StageHighlight
          title="Format Expansion Method"
          type="success"
        >
          <p>
            Preserve the winning strategic foundation and rebuild it
            according to the strengths of a different creative format.
          </p>
        </StageHighlight>

        <StageGrid columns={3}>
          {formatExpansions.map((format) => (
            <StageCard
              key={format.title}
              title={format.title}
              description={format.description}
            />
          ))}
        </StageGrid>

        <StageHighlight
          title="Format Expansion Rule"
          type="warning"
        >
          <p>
            Format expansion is not simply resizing or slightly editing the
            same asset. The message must be rebuilt so it feels natural
            inside the new format.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="05"
        navTitle="New Concepts"
        title="Generate New Concepts From the Winning Truth"
        description="Use the same validated strategic truth but express it through completely different advertising ideas."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Validated Truth"
            description="Topical hair products fail because they do not address the internal problem."
          />

          <StageCard title="Possible New Concepts">
            <StageList items={winningTruthConcepts} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Why These Are New Concepts"
          type="success"
        >
          <p>
            These are different concepts because the audience experiences a
            different story, argument, device, or situation.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Customer Situations"
        title="Expand Through Customer Situations"
        description="Apply the same strategic truth to different moments in the customer’s life."
      >
        <StageGrid columns={2}>
          <StageCard title="Example Customer Situations">
            <StageList items={customerSituations} />
          </StageCard>

          <StageHighlight title="Strategic Use">
            <p>
              Each situation creates a new way to make the same angle
              personally relevant.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Belief Shifts"
        title="Expand Through Belief Shifts"
        description="A winning creative often reveals that the audience is responsive to a deeper belief change."
      >
        <StageGrid columns={2}>
          <StageCard title="Example Beliefs">
            <StageList items={beliefShifts} />
          </StageCard>

          <StageHighlight
            title="Belief Expansion"
            type="success"
          >
            <p>
              Each belief can become its own concept while remaining inside
              the validated strategic territory.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Proof Expansion"
        title="Expand Through Proof"
        description="Different proof routes can create entirely new concepts around the same winner."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Proof-Led Expansions">
            <StageList items={proofExpansions} />
          </StageCard>

          <StageHighlight
            title="Proof Expansion Rule"
            type="success"
          >
            <p>
              The proof should support the same winning promise while giving
              the audience a new reason to believe it.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Awareness Levels"
        title="Expand Across Awareness Levels"
        description="Communicate the same validated strategic truth differently depending on how much the audience already knows."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Problem-Aware"
            description="Focus on the problem and reveal the hidden cause."
          />

          <StageCard
            title="Solution-Aware"
            description="Compare the winning solution mechanism with the alternatives the customer already knows."
          />

          <StageCard
            title="Product-Aware"
            description="Explain why this specific product, formula, proof, or mechanism is different."
          />

          <StageCard
            title="Most Aware"
            description="Lead with the strongest purchase-relevant information."
          >
            <StageList items={mostAwareElements} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Awareness Expansion Purpose"
          type="success"
        >
          <p>
            This allows the same winner to support different stages of the
            customer journey.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Winner Family"
        title="Build the Winner Family"
        description="The winner family should contain multiple levels of expansion."
      >
        <StageHighlight
          title="Winner Family Structure"
          type="success"
        >
          <StageFlow
            items={[
              'Winning Strategic Truth',
              'Direct Variations',
              'Format Expansion',
              'Concept Expansion',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={3}>
          <StageCard title="Direct Variations">
            <StageList items={directWinnerFamily} />
          </StageCard>

          <StageCard title="Format Expansion">
            <StageList items={formatWinnerFamily} />
          </StageCard>

          <StageCard title="Concept Expansion">
            <StageList items={conceptWinnerFamily} />
          </StageCard>
        </StageGrid>

        <div style={{ marginTop: '12px' }}>
          <StageCard
            title="Each Branch Should Define"
            description="Every expansion branch remains connected to the original winner."
          >
            <StageList items={winnerFamilyBranchFields} />
          </StageCard>
        </div>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Fatigue & Refresh"
        title="Monitor Fatigue and Refresh"
        description="As the winning creative receives more exposure, monitor whether its performance begins to decline."
      >
        <StageGrid columns={2}>
          <StageCard title="Possible Fatigue Signals">
            <StageList items={fatigueSignals} />
          </StageCard>

          <StageCard title="Possible Refreshes">
            <StageList items={fatigueRefreshes} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Fatigue Response"
          type="warning"
        >
          <p>
            The response is not always to abandon the winner.
          </p>
        </StageHighlight>

        <StageHighlight
          title="Refresh Objective"
          type="success"
        >
          <p>
            Refresh the execution while preserving the validated strategic
            foundation.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="12"
        navTitle="Iteration vs Scaling"
        title="Difference Between Iteration and Scaling"
        description="Iteration repairs a diagnosed weakness. Scaling expands a creative that already performs strongly."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Iteration"
            description="Iteration repairs a diagnosed weakness in a promising creative."
          >
            <StageFlow
              items={[
                'Strong Signal',
                'Clear Weakness',
                'Change the Weak Variable',
              ]}
            />
          </StageCard>

          <StageCard
            title="Scaling"
            description="Scaling expands a creative that already performs strongly."
          >
            <StageFlow
              items={[
                'Validated Winner',
                'Preserve the Winning Core',
                'Expand Into More Assets, Formats and Concepts',
              ]}
            />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="13"
        navTitle="Final Output"
        title="Final Output"
        description="Creative Scaling produces a wider family of assets and additional tests built around the validated strategic foundation."
      >
        <StageGrid columns={2}>
          <StageCard title="Creative Scaling Produces">
            <StageList items={outputs} />
          </StageCard>

          <StageHighlight
            title="Scaling Outcome"
            type="success"
          >
            <StageFlow
              items={[
                'Validated Winner',
                'Winning Strategic Core',
                'Direct Variations',
                'Format Adaptations',
                'New Concepts',
                'Winner Family',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}