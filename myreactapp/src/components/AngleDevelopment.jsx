// src/components/AngleDevelopment.jsx

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
| ANGLE DEVELOPMENT DATA
|--------------------------------------------------------------------------
*/

const personaToAngleInputs = [
  'Core problems',
  'Fears',
  'Desired outcomes',
  'Identity goals',
  'Desired transformation',
  'Current beliefs',
  'Misconceptions',
  'Failed alternatives',
  'Buying triggers',
  'Product mechanisms',
  'Proof requirements',
  'Competitor alternatives',
  'Customer stories',
  'Opportunity costs',
];

const personaToAngleQuestions = [
  'Which insights matter most to this persona?',
  'Which problem feels most urgent?',
  'Which desire is most emotionally meaningful?',
  'What does this persona fear losing?',
  'What identity do they want to recover or become?',
  'What transformation are they actively seeking?',
  'What do they currently believe about the problem?',
  'Which alternatives have already disappointed them?',
  'What must they understand about the product mechanism?',
  'What proof would make the promise believable?',
  'What would happen if they delayed taking action?',
];

const problemQuestions = [
  'What problem is the persona trying to solve?',
  'How does it appear in everyday life?',
  'What does it prevent them from doing?',
  'What emotional or social consequences does it create?',
  'What happens when the problem remains unresolved?',
];

const problemTerritories = [
  'Surface problems',
  'Functional problems',
  'Emotional problems',
  'Social problems',
  'Identity-level problems',
  'Specific problem moments',
  'Consequences of inaction',
];

const fearQuestions = [
  'What is the persona afraid of losing?',
  'What future outcome do they want to avoid?',
  'What does the problem appear to be turning into?',
  'What future regret creates urgency?',
  'What identity, relationship, ability, or lifestyle feels threatened?',
];

const fearTerritories = [
  'Fear of worsening',
  'Fear of permanent consequences',
  'Fear of lost confidence',
  'Fear of lost independence',
  'Fear of social judgment',
  'Fear of another failure',
  'Fear of missing the opportunity to act',
];

const desireQuestions = [
  'What does the persona want most?',
  'What result would create meaningful relief?',
  'What would they like to do, experience, or feel again?',
  'What would make daily life easier or better?',
  'What does success look like in their own language?',
];

const desireTerritories = [
  'Functional desires',
  'Emotional desires',
  'Social desires',
  'Lifestyle desires',
  'Convenience',
  'Relief',
  'Confidence',
  'Freedom',
  'Control',
  'Simplicity',
];

const identityQuestions = [
  'Who does this persona want to become?',
  'Which version of themselves do they miss?',
  'What identity does the problem threaten?',
  'What identity are they rejecting?',
  'What does choosing this solution say about them?',
  'How do they want to see themselves after solving the problem?',
];

const identityTerritories = [
  'Current identity',
  'Threatened identity',
  'Rejected identity',
  'Desired identity',
  'Recovered identity',
  'Aspirational identity',
  'Social identity',
];

const transformationQuestions = [
  'What meaningful change does the customer want?',
  'What is the clearest before-and-after contrast?',
  'Which behavior becomes possible after the problem improves?',
  'What emotional or identity change accompanies the result?',
  'How can the transformation be made visible and specific?',
];

const transformationTerritories = [
  'Physical transformation',
  'Functional transformation',
  'Behavioral transformation',
  'Emotional transformation',
  'Social transformation',
  'Lifestyle transformation',
  'Identity transformation',
];

const mechanismQuestions = [
  'What is causing or maintaining the problem?',
  'What has the customer misunderstood about the cause?',
  'Why have previous solutions failed?',
  'How does the product create the result?',
  'What is meaningfully different about its ingredient, design, formulation, or method?',
];

const mechanismTerritories = [
  'Problem mechanisms',
  'Solution mechanisms',
  'Ingredient mechanisms',
  'Product technology',
  'Unique formulation',
  'Missing component',
  'Internal versus external causes',
  'Reasons alternatives fail',
  'Simplified scientific or technical explanations',
];

const curiosityQuestions = [
  'What does the persona not yet know?',
  'What surprising information could change how they understand the problem?',
  'What hidden cause or overlooked factor deserves attention?',
  'What unexpected connection could lead naturally to the product?',
  'What question would make the customer want the explanation?',
];

const curiosityTerritories = [
  'Hidden causes',
  'Unexpected discoveries',
  'Overlooked mistakes',
  'Little-known connections',
  'Surprising customer experiences',
  'Unnoticed warning signs',
  'Missing steps',
  'Counterintuitive findings',
];

const contrarianQuestions = [
  'What commonly accepted belief may be incomplete?',
  'What advice does the market repeat without questioning?',
  'Which popular solution fails to address the real problem?',
  'What does the brand understand differently?',
  'What credible alternative perspective can be introduced?',
];

const contrarianTerritories = [
  'Common myths',
  'Popular but incomplete advice',
  'Overused solutions',
  'Category assumptions',
  'Unnecessary routines',
  'Misleading product comparisons',
  'Beliefs competitors repeatedly reinforce',
];

const proofQuestions = [
  'What evidence makes the claim believable?',
  'Which result is difficult to dismiss?',
  'What demonstration can communicate the benefit quickly?',
  'Which customer result is most relevant to the persona?',
  'What data, authority, or visible evidence reduces skepticism?',
];

const proofTerritories = [
  'Customer testimonials',
  'Reviews',
  'Before-and-after evidence',
  'Demonstrations',
  'Clinical or scientific evidence',
  'Ingredient evidence',
  'Expert support',
  'Certifications',
  'Product testing',
  'Ratings',
  'Customer volume',
  'Specific results',
  'Comparison evidence',
];

const comparisonQuestions = [
  'What is the customer currently using instead?',
  'How does the product differ from the main alternative?',
  'What trade-off does the current solution require?',
  'Why do existing alternatives disappoint customers?',
  'Which differences matter most to this persona?',
];

const comparisonTerritories = [
  'Product-versus-product comparisons',
  'Product-versus-category comparisons',
  'New solution versus failed alternative',
  'Internal versus external solution',
  'Simple versus complicated approach',
  'Premium versus low-cost alternative',
  'Natural versus conventional approach',
  'At-home versus professional solution',
  'One-time relief versus long-term support',
];

const storyQuestions = [
  'Whose story makes the problem and solution meaningful?',
  'What happened before the product was discovered?',
  'What moment changed the person’s understanding or behavior?',
  'What conflict, struggle, or failed attempt creates the narrative?',
  'What conclusion should the audience reach through the story?',
];

const storyTerritories = [
  'Customer stories',
  'Founder stories',
  'Discovery stories',
  'Expert stories',
  'Product-development stories',
  'Failed-alternative stories',
  'Turning-point stories',
  'Transformation journeys',
  'The moment I realized stories',
  'Problem-to-solution narratives',
];

const opportunityCostQuestions = [
  'What is inaction currently costing the customer?',
  'What opportunities are they missing?',
  'How much time, money, energy, or confidence is being lost?',
  'What continues happening while they postpone the decision?',
  'What could they recover by solving the problem sooner?',
];

const opportunityCostTerritories = [
  'Lost time',
  'Wasted money',
  'Missed experiences',
  'Reduced confidence',
  'Lost progress',
  'Repeated spending on failed alternatives',
  'Continued inconvenience',
  'Delayed transformation',
  'Lost independence',
  'Emotional cost',
  'Social cost',
  'Cost of waiting',
];

const outputs = [
  'Persona-specific angle territories',
  'Problem-angle directions',
  'Fear-angle directions',
  'Desire-angle directions',
  'Identity-angle directions',
  'Transformation-angle directions',
  'Mechanism-angle directions',
  'Curiosity-angle directions',
  'Contrarian-angle directions',
  'Proof-angle directions',
  'Comparison-angle directions',
  'Story-angle directions',
  'Opportunity-cost angle directions',
  'Angle options ready for qualification and prioritization',
];

const sops = [
  {
    title: 'Persona-to-Angle Mapping',
    description:
      'Explains how to connect each persona and sub-persona to the pains, desires, fears, beliefs, mechanisms, proof, stories, and other insights most relevant to their buying logic.',
  },
  {
    title: 'Problem Angle Development',
    description:
      'Defines how to turn surface, functional, emotional, social, and identity-level problems into focused angle directions.',
  },
  {
    title: 'Fear Angle Development',
    description:
      'Explains how to identify genuine feared consequences and translate them into responsible, credible angles without exaggeration.',
  },
  {
    title: 'Desire Angle Development',
    description:
      'Provides a process for turning functional, emotional, social, and lifestyle desires into clear persuasive directions.',
  },
  {
    title: 'Identity Angle Development',
    description:
      'Explains how to develop angles around threatened, rejected, desired, aspirational, and recovered customer identities.',
  },
  {
    title: 'Transformation Angle Development',
    description:
      'Defines how to translate customer before-and-after states into specific physical, behavioral, emotional, social, or identity transformations.',
  },
  {
    title: 'Mechanism Angle Development',
    description:
      'Explains how to develop angles around problem causes, solution mechanisms, product differences, and why previous alternatives fail.',
  },
  {
    title: 'Curiosity Angle Development',
    description:
      'Provides a method for creating relevant information gaps from discoveries, hidden causes, unexpected connections, and overlooked insights.',
  },
  {
    title: 'Contrarian Angle Development',
    description:
      'Explains how to challenge common advice and category assumptions while supporting the alternative perspective with credible evidence.',
  },
  {
    title: 'Proof Angle Development',
    description:
      'Defines how to select and frame testimonials, demonstrations, research, expert evidence, and other proof as the central persuasive direction.',
  },
  {
    title: 'Comparison Angle Development',
    description:
      'Explains how to compare the product with direct competitors, indirect alternatives, habits, and other solutions around differences that matter to the customer.',
  },
  {
    title: 'Story Angle Development',
    description:
      'Provides a structure for developing customer, founder, expert, discovery, and transformation stories around a clear strategic message.',
  },
  {
    title: 'Opportunity-Cost Angle Development',
    description:
      'Explains how to identify and communicate what customers continue losing, missing, spending, or sacrificing by delaying action.',
  },
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function AngleDevelopment({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="PERSUASIVE DIRECTION SYSTEM"
      title="Angle Development"
      introduction="After defining and prioritizing the personas, I translate the strongest insights attached to each persona into different persuasive angles. An angle is the strategic lens through which the product is presented. It determines which problem, desire, fear, belief, mechanism, comparison, or opportunity the creative focuses on."
      process={[
        'Research',
        'Insights',
        'Persona',
        'Angle',
        'Concept',
        'Hook',
        'Execution',
      ]}
      outputs={outputs}
      outputTitle="Angle Development Output"
      sops={sops}
      sopDescription="The Angle Development SOP Library defines how persona-specific insights are translated into distinct persuasive territories before concept development."
    >
      <StageSection
        number="00"
        navTitle="Persona Mapping"
        title="Persona-to-Angle Mapping"
        description="Connect each persona and sub-persona to the insights most relevant to their situation and buying logic."
      >
        <StageHighlight
          title="Strategic Sequence"
          type="success"
        >
          <StageFlow
            items={[
              'Research',
              'Insights',
              'Persona',
              'Angle',
              'Concept',
              'Hook',
              'Execution',
            ]}
          />
        </StageHighlight>

        <div style={{ marginTop: '12px' }}>
          <StageGrid columns={2}>
            <StageCard
              title="What I Map"
              description="The evidence and customer insight territories that may support an angle."
            >
              <StageList items={personaToAngleInputs} />
            </StageCard>

            <StageCard
              title="Core Questions"
              description="Determine which persuasive directions matter most to the selected persona."
            >
              <StageList items={personaToAngleQuestions} />
            </StageCard>
          </StageGrid>
        </div>

        <StageHighlight title="Output">
          <p>
            The output is a collection of relevant angle territories for
            each persona rather than one generic message for the entire
            market.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Problem"
        title="Problem Angles"
        description="Problem angles focus on what the customer is currently experiencing and why it matters."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={problemQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={problemTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Fear"
        title="Fear Angles"
        description="Fear angles focus on what the customer worries may happen when the problem continues or becomes worse."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={fearQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={fearTerritories} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Fear-Angle Boundary"
          type="warning"
        >
          <p>
            Fear angles should be grounded in genuine customer concerns
            rather than manufactured or exaggerated threats.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Desire"
        title="Desire Angles"
        description="Desire angles focus on the result, experience, or emotional state the customer wants to achieve."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={desireQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={desireTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="04"
        navTitle="Identity"
        title="Identity Angles"
        description="Identity angles focus on who the customer believes they are, who they fear becoming, and who they want to become or recover."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={identityQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={identityTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Transformation"
        title="Transformation Angles"
        description="Transformation angles focus on the movement between the customer’s current condition and desired condition."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={transformationQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={transformationTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="06"
        navTitle="Mechanism"
        title="Mechanism Angles"
        description="Mechanism angles explain why the problem happens, why common solutions fail, or why the product works differently."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={mechanismQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={mechanismTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="07"
        navTitle="Curiosity"
        title="Curiosity Angles"
        description="Curiosity angles focus on a relevant discovery, unexpected connection, hidden cause, or unanswered question."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={curiosityQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={curiosityTerritories} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Curiosity Boundary"
          type="warning"
        >
          <p>
            The curiosity must lead to a meaningful explanation rather than
            an empty clickbait promise.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="08"
        navTitle="Contrarian"
        title="Contrarian Angles"
        description="Contrarian angles challenge common advice, category assumptions, or conventional approaches."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={contrarianQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={contrarianTerritories} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Contrarian Boundary"
          type="warning"
        >
          <p>
            A contrarian angle should be supported by reasoning and proof,
            not created only to attract attention.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="09"
        navTitle="Proof"
        title="Proof Angles"
        description="Proof angles lead with evidence that supports the product, promise, mechanism, or transformation."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={proofQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={proofTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="10"
        navTitle="Comparison"
        title="Comparison Angles"
        description="Comparison angles position the product against another product, solution, method, habit, or category."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={comparisonQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={comparisonTerritories} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Comparison Standard"
          type="warning"
        >
          <p>
            The comparison should focus on meaningful customer value rather
            than insignificant product differences.
          </p>
        </StageHighlight>
      </StageSection>

      <StageSection
        number="11"
        navTitle="Story"
        title="Story Angles"
        description="Story angles communicate the message through a customer, founder, expert, product, or discovery narrative."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={storyQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={storyTerritories} />
          </StageCard>
        </StageGrid>
      </StageSection>

      <StageSection
        number="12"
        navTitle="Opportunity Cost"
        title="Opportunity-Cost Angles"
        description="Opportunity-cost angles focus on what the customer continues to lose, miss, spend, or sacrifice by delaying action or choosing the wrong solution."
      >
        <StageGrid columns={2}>
          <StageCard title="Core Questions">
            <StageList items={opportunityCostQuestions} />
          </StageCard>

          <StageCard title="What I Organize">
            <StageList items={opportunityCostTerritories} />
          </StageCard>
        </StageGrid>

        <StageHighlight
          title="Opportunity-Cost Boundary"
          type="warning"
        >
          <p>
            The angle should make the trade-off of inaction visible without
            relying on artificial urgency.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}