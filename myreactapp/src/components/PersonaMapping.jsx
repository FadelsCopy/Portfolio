// src/components/PersonaMapping.jsx

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
| PERSONA MAPPING DATA
|--------------------------------------------------------------------------
*/

const personaInputs = [
  'Pain points',
  'Desired outcomes',
  'Dream outcomes',
  'Emotional drivers',
  'Identity goals',
  'Beliefs',
  'Misconceptions',
  'Objections',
  'Failed alternatives',
  'Buying triggers',
  'Behavioral context',
  'Proof requirements',
  'Awareness level',
  'Customer language',
  'Validated patterns',
];

const personaDecisionSignals = [
  'Different problem or problem context',
  'Different desired transformation',
  'Different dominant emotional driver',
  'Different identity tension',
  'Different beliefs or awareness',
  'Different objections or previous failures',
  'Different buying trigger',
  'Different proof requirement',
  'Different customer language',
  'Different creative treatment',
];

const personaDimensions = [
  {
    number: '01',
    title: 'Situation & Context',
    description:
      'The real-world conditions surrounding the customer and the problem.',
    items: [
      'Current situation',
      'Life stage',
      'Use case',
      'Environment',
      'Level of urgency',
      'Current behavior',
      'Current solution',
    ],
  },
  {
    number: '02',
    title: 'Problem Structure',
    description:
      'The visible problem and the deeper consequences that make it matter.',
    items: [
      'Surface problem',
      'Functional problem',
      'Emotional consequence',
      'Social consequence',
      'Identity consequence',
      'Cost of inaction',
    ],
  },
  {
    number: '03',
    title: 'Desired Transformation',
    description:
      'What the customer wants to change and what that change makes possible.',
    items: [
      'Immediate outcome',
      'Functional outcome',
      'Emotional outcome',
      'Social outcome',
      'Dream outcome',
      'Behaviors they want back',
    ],
  },
  {
    number: '04',
    title: 'Emotional Drivers',
    description:
      'The emotional force underneath the problem, urgency, and desired result.',
    items: [
      'Dominant emotional driver',
      'Specific fear',
      'Frustration',
      'Hope / relief',
      'Control / security',
      'Emotional urgency',
    ],
  },
  {
    number: '05',
    title: 'Identity',
    description:
      'How the problem changes self-perception and who the customer wants to become.',
    items: [
      'Current identity',
      'Threatened identity',
      'Rejected identity',
      'Desired identity',
      'Recovered identity',
      'Aspirational identity',
    ],
  },
  {
    number: '06',
    title: 'Beliefs & Awareness',
    description:
      'What the customer already believes and how much they understand.',
    items: [
      'Beliefs about the problem',
      'Beliefs about solutions',
      'Misconceptions',
      'Beliefs supporting alternatives',
      'Purchase-blocking beliefs',
      'Awareness level',
      'Market sophistication context',
    ],
  },
  {
    number: '07',
    title: 'Resistance & Previous Attempts',
    description:
      'What has already failed and what now creates hesitation or skepticism.',
    items: [
      'What they already tried',
      'Why they chose it',
      'Why it failed',
      'New skepticism created',
      'Price objection',
      'Trust / effectiveness objection',
      'Safety / fit concern',
      'Fear of another disappointment',
    ],
  },
  {
    number: '08',
    title: 'Buying Logic, Proof & Language',
    description:
      'The conditions that move the customer toward action and the evidence they need.',
    items: [
      'Buying trigger',
      'Moment of urgency',
      'Decision criteria',
      'What delays action',
      'Proof required',
      'Who influences the purchase',
      'Exact customer language',
      'Repeated questions / phrases',
    ],
  },
];

const creativeDirection = [
  'Most relevant benefits',
  'Most relevant proof',
  'Angle territories',
  'Hook territories',
  'Suitable creator types',
  'Suitable formats',
  'Visual situations',
  'Offer considerations',
  'Landing-page requirements',
  'Messaging to avoid',
];

const subPersonaTriggers = [
  'Cause of the problem changes',
  'Desired outcome changes',
  'Emotional context changes',
  'Awareness level changes',
  'Failed alternatives change',
  'Main objection changes',
  'Buying trigger changes',
  'Proof requirement changes',
  'Customer language changes',
  'Creative treatment changes',
];

const hairSubPersonaExamples = [
  'Postpartum shedding',
  'Menopause-related thinning',
  'Stress-related hair loss',
  'Styling / chemical damage',
  'Genetically influenced thinning',
  'Sudden shedding before an important event',
];

const subPersonaGeneration = [
  'Start with the broad persona',
  'Spot a repeated meaningful difference',
  'Validate that difference across evidence',
  'Check whether buying logic changes',
  'Check whether creative treatment changes',
  'Create the sub-persona only if the difference matters strategically',
];

const unnecessarySegmentation = [
  'Age without meaningful behavior change',
  'Location without a meaningful market difference',
  'Gender without different buying logic',
  'Job title without creative relevance',
  'Lifestyle detail that does not affect the message',
  'Minor preference that does not change strategy',
];

const prioritizationGroups = [
  {
    title: 'Demand & Urgency',
    items: [
      'Severity of the problem',
      'Level of urgency',
      'Existing demand',
      'Existing customer volume',
    ],
  },
  {
    title: 'Product & Offer Fit',
    items: [
      'Product fit',
      'Offer fit',
      'Proof availability',
      'Operational feasibility',
    ],
  },
  {
    title: 'Evidence Strength',
    items: [
      'Research depth',
      'Source diversity',
      'Validated patterns',
      'Performance evidence when available',
    ],
  },
  {
    title: 'Commercial Value',
    items: [
      'Audience size',
      'Conversion potential',
      'Customer value',
      'LTV potential',
      'Acceptable acquisition economics',
    ],
  },
  {
    title: 'Creative & Scaling Potential',
    items: [
      'Differentiation potential',
      'Creative range',
      'Scalability',
      'Production feasibility',
      'Strategic importance',
    ],
  },
];

const priorityLevels = [
  {
    level: 'Primary',
    meaning:
      'Strongest combination of demand, product fit, evidence, economics, and creative potential.',
    action:
      'Highest share of angle development, production, testing budget, and iteration.',
  },
  {
    level: 'Secondary',
    meaning:
      'Commercially relevant and well-supported, but lower priority than the core persona.',
    action:
      'Controlled testing and active pipeline support.',
  },
  {
    level: 'Experimental',
    meaning:
      'Promising signals exist, but evidence or economics are not strong enough yet.',
    action:
      'Low-cost validation / MVP testing before larger investment.',
  },
  {
    level: 'Low Priority',
    meaning:
      'Some relevance exists, but fit, urgency, proof, economics, or scalability are weak.',
    action:
      'Keep in backlog until stronger evidence appears.',
  },
  {
    level: 'Not Suitable',
    meaning:
      'The product, offer, proof, economics, or operation cannot credibly support the group.',
    action:
      'Remove from active testing.',
  },
];

const personaPriorityRecord = [
  'Priority level',
  'Supporting evidence',
  'Commercial potential',
  'Main risk',
  'Testing recommendation',
  'Required proof',
  'Recommended investment',
  'What would change the priority',
];

const expansionPaths = [
  {
    title: 'Sub-Persona',
    description:
      'Split a broad persona into narrower groups with different buying logic.',
    tone: 'cyan',
  },
  {
    title: 'Use Case',
    description:
      'Find another situation where the same product solves a credible problem.',
    tone: 'lime',
  },
  {
    title: 'Problem State',
    description:
      'Reach a different stage or version of the same core problem.',
    tone: 'orange',
  },
  {
    title: 'Life Stage',
    description:
      'Adapt the message to customers at a different life stage.',
    tone: 'pink',
  },
  {
    title: 'Awareness',
    description:
      'Expand messaging to customers who know less or more about the category.',
    tone: 'purple',
  },
  {
    title: 'Geographic',
    description:
      'Enter markets where language, proof, culture, or creators need adaptation.',
    tone: 'blue',
  },
  {
    title: 'Adjacent Persona',
    description:
      'Reach groups with similar motivations, identities, or emotional needs.',
    tone: 'cyan',
  },
  {
    title: 'Indirect Alternative',
    description:
      'Reach customers currently solving the problem through another category.',
    tone: 'orange',
  },
  {
    title: 'Occasion',
    description:
      'Create demand around a new event, season, trigger, or usage moment.',
    tone: 'pink',
  },
];

const expansionCriteria = [
  'Real customer demand',
  'Clear product fit',
  'Strong emotional relevance',
  'Differentiated message',
  'Sufficient proof',
  'Acceptable economics',
  'Scalable audience size',
  'Operational feasibility',
  'Paid-media reachability',
  'Creative potential',
];

const outputs = [
  'Evidence-based persona groups',
  'Complete persona intelligence profiles',
  'Sub-personas only where buying logic meaningfully changes',
  'Persona priority hierarchy',
  'Persona-specific creative direction',
  'Qualified persona / TAM expansion opportunities',
  'Clear inputs for Angle Development',
];

const sops = [
  {
    title: 'Insight-to-Persona Translation',
    description:
      'Groups repeated insight patterns into distinct customer profiles and defines when differences justify a separate persona.',
  },
  {
    title: 'Persona & Sub-Persona Development',
    description:
      'Builds complete persona profiles and separates meaningful sub-personas from unnecessary segmentation.',
  },
  {
    title: 'Persona Prioritization',
    description:
      'Ranks personas using evidence, urgency, product fit, economics, proof, scalability, and creative potential.',
  },
  {
    title: 'Persona & TAM Expansion',
    description:
      'Identifies and qualifies adjacent customer groups, use cases, awareness levels, occasions, and markets.',
  },
];

/*
|--------------------------------------------------------------------------
| SMALL COMPONENTS
|--------------------------------------------------------------------------
*/

function PersonaDimensionCard({
  number,
  title,
  description,
  items,
}) {
  return (
    <article className="persona-dimension-card">
      <header>
        <span>{number}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </header>

      <StageList items={items} />
    </article>
  );
}

function PriorityRow({
  level,
  meaning,
  action,
}) {
  return (
    <div className="persona-priority-row">
      <strong>{level}</strong>

      <div>
        <span>WHAT IT MEANS</span>
        <p>{meaning}</p>
      </div>

      <div>
        <span>WHAT I DO</span>
        <p>{action}</p>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function PersonaMapping({
  stage,
  onBack,
}) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="CUSTOMER SEGMENTATION SYSTEM"
      title="Persona Mapping"
      introduction="After Insight Synthesis, I group customers according to the differences that meaningfully change buying logic, proof requirements, messaging, and creative treatment. The goal is not fictional demographic profiles — it is strategically useful customer segmentation."
      process={[
        'Validated Insights',
        'Shared Patterns',
        'Distinct Buying Logic',
        'Persona',
        'Priority',
        'Angle Input',
      ]}
      outputs={outputs}
      outputTitle="Persona Mapping Output"
      sops={sops}
      sopDescription="Planned SOPs for translating insights into usable personas, prioritizing them, and expanding the addressable market without random segmentation."
    >
      {/* ================================================================
          01 — INSIGHT → PERSONA
         ================================================================ */}

      <StageSection
        number="01"
        navTitle="Insight → Persona"
        title="How Insights Become Personas"
        description="I group repeated insights into customer clusters, then create a persona only when the differences are strong enough to change buying logic or creative treatment."
      >
        <div className="persona-transition-flow">
          {[
            ['01', 'Validated Insights', 'Pains, desires, beliefs, objections, triggers, language, proof needs, patterns.'],
            ['02', 'Shared Pattern', 'Group customers repeatedly showing the same problem, motivation, context, or behavior.'],
            ['03', 'Distinct Buying Logic', 'Check whether they buy for meaningfully different reasons or require different proof.'],
            ['04', 'Persona', 'Create a strategic customer group only when the distinction changes the work.'],
          ].map(([number, title, copy], index, array) => (
            <div
              className="persona-transition-step"
              key={title}
            >
              <article>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>

              {index < array.length - 1 && (
                <i aria-hidden="true">→</i>
              )}
            </div>
          ))}
        </div>

        <div className="persona-insight-check">
          <article>
            <span>INSIGHT INPUTS</span>
            <StageList items={personaInputs} />
          </article>

          <article>
            <span>SEPARATION TEST</span>
            <p>
              A separate persona is justified when one or more of these
              differences repeatedly changes the strategy.
            </p>
            <StageList items={personaDecisionSignals} />
          </article>
        </div>

        <StageHighlight
          title="Persona Rule"
          type="success"
        >
          <p>
            If two groups look different demographically but would receive
            the same message, proof, offer, creator, format, and buying logic,
            I do not force them into separate personas.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          02 — PERSONA DEVELOPMENT
         ================================================================ */}

      <StageSection
        number="02"
        navTitle="Persona Development"
        title="Persona Development"
        description="Each persona is built as a strategic intelligence profile. Every dimension below answers a different question and earns its place by changing how the customer should be understood or addressed."
      >
        <div className="persona-dimension-grid">
          {personaDimensions.map((dimension) => (
            <PersonaDimensionCard
              key={dimension.number}
              {...dimension}
            />
          ))}
        </div>

        <div className="persona-creative-direction">
          <div>
            <span>PROFILE OUTPUT</span>
            <h3>Persona-Specific Creative Direction</h3>
            <p>
              Once the persona is clear, I convert the profile into practical
              creative guidance without developing the final angles yet.
            </p>
          </div>

          <div className="persona-creative-direction-items">
            {creativeDirection.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>

        <StageHighlight
          title="Quality Standard"
          type="success"
        >
          <p>
            A persona should be rich enough to explain the customer’s
            situation, motivation, resistance, buying logic, proof needs,
            and language — but every field must still have strategic value.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          03 — SUB-PERSONAS
         ================================================================ */}

      <StageSection
        number="03"
        navTitle="Sub-Personas"
        title="Sub-Persona Development"
        description="A sub-persona is only useful when people inside the same broad persona require meaningfully different treatment."
      >
        <div className="persona-subpersona-decision">
          <article>
            <span>WHEN IS A SUB-PERSONA NECESSARY?</span>
            <p>
              When a repeated difference changes the buying logic,
              persuasion, proof, scenario, or creative treatment.
            </p>

            <div>
              {subPersonaTriggers.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </article>

          <article>
            <span>WHEN IS IT NOT NECESSARY?</span>
            <StageList items={unnecessarySegmentation} />
          </article>
        </div>

        <div className="persona-subpersona-process">
          <span>HOW I GENERATE SUB-PERSONAS</span>
          <StageFlow items={subPersonaGeneration} />
        </div>

        <div className="persona-subpersona-example">
          <header>
            <span>EXAMPLE</span>
            <h3>Broad Persona: Women Experiencing Hair Thinning</h3>
            <p>
              The broad problem is shared, but cause, emotion, urgency,
              proof, and buying logic may create distinct sub-personas.
            </p>
          </header>

          <div>
            {hairSubPersonaExamples.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>

        <StageHighlight
          title="Segmentation Principle"
          type="warning"
        >
          <p>
            The goal is not to produce more profiles. The goal is to separate
            customer groups only when the distinction improves relevance,
            credibility, testing quality, or conversion.
          </p>
        </StageHighlight>
      </StageSection>

      {/* ================================================================
          04 — PRIORITIZATION
         ================================================================ */}

      <StageSection
        number="04"
        navTitle="Prioritization"
        title="Persona Prioritization"
        description="Not every credible persona deserves equal attention. I prioritize the groups with the strongest combination of customer need, evidence, commercial value, product fit, and scalable creative potential."
      >
        <div className="persona-priority-scorecard">
          <header>
            <span>PRIORITIZATION SCORECARD</span>
            <h3>Five questions before I allocate creative resources.</h3>
          </header>

          <div>
            {prioritizationGroups.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h4>{group.title}</h4>
                <StageList items={group.items} />
              </article>
            ))}
          </div>
        </div>

        <div className="persona-priority-table">
          <header>
            <span>PRIORITY</span>
            <span>WHAT IT MEANS</span>
            <span>RESOURCE DECISION</span>
          </header>

          <div>
            {priorityLevels.map((priority) => (
              <PriorityRow
                key={priority.level}
                {...priority}
              />
            ))}
          </div>
        </div>

        <div className="persona-priority-record">
          <span>MINIMUM PRIORITY RECORD</span>

          <div>
            {personaPriorityRecord.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
      </StageSection>

      {/* ================================================================
          05 — PERSONA & TAM EXPANSION
         ================================================================ */}

      <StageSection
        number="05"
        navTitle="Persona & TAM Expansion"
        title="Persona & TAM Expansion"
        description="TAM means Total Addressable Market. Here I use persona learning to identify credible ways to expand the reachable market without targeting random audiences."
      >
        <div className="persona-tam-intro">
          <span>EXPANSION LOGIC</span>
          <StageFlow
            items={[
              'Core Persona Learning',
              'Adjacent Customer Truth',
              'Product Fit',
              'Message / Proof Adaptation',
              'Controlled Test',
            ]}
          />
        </div>

        <div className="persona-expansion-grid">
          {expansionPaths.map((path) => (
            <article
              className={`persona-expansion-card is-${path.tone}`}
              key={path.title}
            >
              <span>{path.title}</span>
              <p>{path.description}</p>
            </article>
          ))}
        </div>

        <div className="persona-expansion-filter">
          <span>EXPANSION FILTER</span>

          <div>
            {expansionCriteria.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>

        <StageHighlight
          title="Expansion Boundary"
          type="warning"
        >
          <p>
            Expansion only makes sense when the product can credibly serve
            the group, the demand is real, the economics are acceptable,
            the proof can support the promise, and the audience can be
            reached efficiently.
          </p>
        </StageHighlight>
      </StageSection>
    </StageDeepDiveLayout>
  );
}