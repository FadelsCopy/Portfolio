// src/components/AngleDevelopment.jsx

import StageDeepDiveLayout, {
  StageCard,
  StageFlow,
  StageGrid,
  StageHighlight,
  StageList,
  StageSection,
} from '../shared/StageDeepDiveLayout';

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

const angleDefinition = [
  {
    label: 'ANGLE',
    value:
      'The persuasive lens used to frame the product for a specific persona.',
  },
  {
    label: 'NOT A HOOK',
    value:
      'A hook is the opening attention device used to enter the angle.',
  },
  {
    label: 'NOT A CONCEPT',
    value:
      'A concept is the creative idea used to express the angle.',
  },
  {
    label: 'NOT A FORMAT',
    value:
      'UGC, static, VSL, podcast, native, etc. are execution formats.',
  },
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

const angleFamilies = [
  {
    number: '01',
    navTitle: 'Problem',
    title: 'Problem Angles',
    description:
      'Focus on what the customer is currently experiencing and why it matters.',
    questions: problemQuestions,
    territories: problemTerritories,
    tone: 'red',
  },
  {
    number: '02',
    navTitle: 'Fear',
    title: 'Fear Angles',
    description:
      'Focus on what the customer worries may happen when the problem continues or becomes worse.',
    questions: fearQuestions,
    territories: fearTerritories,
    tone: 'orange',
    boundaryTitle: 'Fear-Angle Boundary',
    boundary:
      'Fear angles should be grounded in genuine customer concerns rather than manufactured or exaggerated threats.',
  },
  {
    number: '03',
    navTitle: 'Desire',
    title: 'Desire Angles',
    description:
      'Focus on the result, experience, or emotional state the customer wants to achieve.',
    questions: desireQuestions,
    territories: desireTerritories,
    tone: 'lime',
  },
  {
    number: '04',
    navTitle: 'Identity',
    title: 'Identity Angles',
    description:
      'Focus on who the customer believes they are, who they fear becoming, and who they want to become or recover.',
    questions: identityQuestions,
    territories: identityTerritories,
    tone: 'purple',
  },
  {
    number: '05',
    navTitle: 'Transformation',
    title: 'Transformation Angles',
    description:
      'Focus on the movement between the customer’s current condition and desired condition.',
    questions: transformationQuestions,
    territories: transformationTerritories,
    tone: 'cyan',
  },
  {
    number: '06',
    navTitle: 'Mechanism',
    title: 'Mechanism Angles',
    description:
      'Explain why the problem happens, why common solutions fail, or why the product works differently.',
    questions: mechanismQuestions,
    territories: mechanismTerritories,
    tone: 'blue',
  },
  {
    number: '07',
    navTitle: 'Curiosity',
    title: 'Curiosity Angles',
    description:
      'Focus on a relevant discovery, unexpected connection, hidden cause, or unanswered question.',
    questions: curiosityQuestions,
    territories: curiosityTerritories,
    tone: 'pink',
    boundaryTitle: 'Curiosity Boundary',
    boundary:
      'The curiosity must lead to a meaningful explanation rather than an empty clickbait promise.',
  },
  {
    number: '08',
    navTitle: 'Contrarian',
    title: 'Contrarian Angles',
    description:
      'Challenge common advice, category assumptions, or conventional approaches.',
    questions: contrarianQuestions,
    territories: contrarianTerritories,
    tone: 'yellow',
    boundaryTitle: 'Contrarian Boundary',
    boundary:
      'A contrarian angle should be supported by reasoning and proof, not created only to attract attention.',
  },
  {
    number: '09',
    navTitle: 'Proof',
    title: 'Proof Angles',
    description:
      'Lead with evidence that supports the product, promise, mechanism, or transformation.',
    questions: proofQuestions,
    territories: proofTerritories,
    tone: 'green',
  },
  {
    number: '10',
    navTitle: 'Comparison',
    title: 'Comparison Angles',
    description:
      'Position the product against another product, solution, method, habit, or category.',
    questions: comparisonQuestions,
    territories: comparisonTerritories,
    tone: 'violet',
    boundaryTitle: 'Comparison Standard',
    boundary:
      'The comparison should focus on meaningful customer value rather than insignificant product differences.',
  },
  {
    number: '11',
    navTitle: 'Story',
    title: 'Story Angles',
    description:
      'Communicate the message through a customer, founder, expert, product, or discovery narrative.',
    questions: storyQuestions,
    territories: storyTerritories,
    tone: 'rose',
  },
  {
    number: '12',
    navTitle: 'Opportunity Cost',
    title: 'Opportunity-Cost Angles',
    description:
      'Focus on what the customer continues to lose, miss, spend, or sacrifice by delaying action or choosing the wrong solution.',
    questions: opportunityCostQuestions,
    territories: opportunityCostTerritories,
    tone: 'amber',
    boundaryTitle: 'Opportunity-Cost Boundary',
    boundary:
      'The angle should make the trade-off of inaction visible without relying on artificial urgency.',
  },
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

export default function AngleDevelopment({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="PERSUASIVE DIRECTION SYSTEM"
      title="Angle Development"
      introduction="After defining the persona, I map multiple persuasive territories from the strongest persona-specific insights. An angle is the strategic lens through which the product is presented — not the hook, concept, format, or final execution."
      process={[
        'Persona',
        'Relevant Insights',
        'Angle Territories',
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
        navTitle="Persona → Angle"
        title="How Persona Insights Become Angles"
        description="One persona can support multiple angle territories. I map the persona’s strongest pains, desires, fears, beliefs, mechanisms, proof needs, stories, and trade-offs into distinct persuasive lenses."
      >
        <div className="angle-definition-grid">
          {angleDefinition.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </article>
          ))}
        </div>

        <div className="angle-mapping-flow">
          <StageFlow
            items={[
              'Persona',
              'Relevant Insight',
              'Persuasive Lens',
              'Angle Territory',
            ]}
          />
        </div>

        <div className="angle-mapping-grid">
          <article>
            <span>WHAT I MAP FROM THE PERSONA</span>
            <StageList items={personaToAngleInputs} />
          </article>

          <article>
            <span>QUESTIONS I USE TO OPEN TERRITORIES</span>
            <StageList items={personaToAngleQuestions} />
          </article>
        </div>

        <StageHighlight
          title="Output"
          type="success"
        >
          <p>
            The result is not one generic message. It is a map of multiple
            persona-specific persuasive territories ready to be qualified
            and prioritized in the next stage.
          </p>
        </StageHighlight>
      </StageSection>

      {angleFamilies.map((family) => (
        <StageSection
          key={family.number}
          number={family.number}
          navTitle={family.navTitle}
          title={family.title}
          description={family.description}
          className={`angle-family-section is-${family.tone}`}
        >
          <div className="angle-family-layout">
            <article className="angle-family-panel is-questions">
              <header>
                <span>CORE QUESTIONS</span>
                <h3>What I ask</h3>
              </header>

              <StageList items={family.questions} />
            </article>

            <article className="angle-family-panel is-territories">
              <header>
                <span>ANGLE TERRITORIES</span>
                <h3>What I map</h3>
              </header>

              <StageList items={family.territories} />
            </article>
          </div>

          {family.boundary && (
            <StageHighlight
              title={family.boundaryTitle}
              type="warning"
            >
              <p>{family.boundary}</p>
            </StageHighlight>
          )}
        </StageSection>
      ))}
    </StageDeepDiveLayout>
  );
}