// src/components/KnowledgeLearningSystem.jsx

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
| KNOWLEDGE & LEARNING SYSTEM DATA
|--------------------------------------------------------------------------
*/

const performanceHistoryFields = [
  'Creative and variation',
  'Persona',
  'Angle',
  'Concept',
  'Hook',
  'Format',
  'Creator',
  'Proof',
  'Offer',
  'Performance data',
  'Diagnosis',
  'Final decision',
  'Main learning',
];

const winningAndLosingPatterns = [
  'Winning and losing personas',
  'Winning and losing angles',
  'Strong and weak concepts',
  'Strong and weak hooks',
  'High-performing formats',
  'Creator performance',
  'Proof that increased belief',
  'Offers and CTAs',
  'Iteration outcomes',
  'Scaling results',
];

const reusableKnowledgeDestinations = [
  'Research',
  'Persona development',
  'Angle development',
  'Concept creation',
  'Briefing',
  'Iteration',
  'Scaling',
];

const lightweightSystemRequirements = [
  'Consistent creative tracker',
  'Learning log',
  'Naming structure',
  'Central knowledge library',
];

const outputs = [
  'Creative performance history',
  'Winning and losing pattern library',
  'Reusable insight library',
  'Updated creative tracker',
  'Clear record of what should be repeated, improved, or avoided',
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function KnowledgeLearningSystem({ stage, onBack }) {
  return (
    <StageDeepDiveLayout
      stage={stage}
      onBack={onBack}
      eyebrow="SYSTEM MEMORY"
      title="Knowledge & Learning System"
      introduction="Every completed test adds new knowledge to the creative system. The goal is to document what worked, what failed, why it happened, and how that learning should influence future creative decisions."
      process={[
        'Every Test',
        'Capture the Learning',
        'Store the Pattern',
        'Reuse It in the Next Creative Cycle',
      ]}
      outputs={outputs}
      outputTitle="Knowledge & Learning System Output"
    >
      <StageSection
        number="00"
        navTitle="System Overview"
        title="Knowledge & Learning System"
        description="Iteration and Scaling both feed the Knowledge & Learning System so every completed test can improve future creative decisions."
      >
        <StageHighlight
          title="Continuous Learning Flow"
          type="success"
        >
          <StageFlow
            items={[
              'Iteration',
              'Knowledge & Learning System',
              'Scaling',
            ]}
          />
        </StageHighlight>

        <StageGrid columns={2}>
          <StageCard
            title="Purpose"
            description="Document what worked, what failed, why it happened, and how that learning should influence future creative decisions."
          />

          <StageHighlight title="Core Principle">
            <p>
              Every completed test adds new knowledge to the creative
              system.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="01"
        navTitle="Test History"
        title="Performance and Test History"
        description="Store the key information from every creative test."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Information Stored"
            description="Every completed test is recorded with its strategic context, performance, diagnosis, decision, and learning."
          >
            <StageList items={performanceHistoryFields} />
          </StageCard>

          <StageHighlight
            title="Test Record Flow"
            type="success"
          >
            <StageFlow
              items={[
                'Creative and Variation',
                'Strategic Context',
                'Performance Data',
                'Diagnosis',
                'Final Decision',
                'Main Learning',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="02"
        navTitle="Patterns"
        title="Winning and Losing Patterns"
        description="Track recurring patterns across creative strategy, execution, iteration, and scaling."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Patterns Tracked"
            description="Recurring performance signals are organized across the major creative variables."
          >
            <StageList items={winningAndLosingPatterns} />
          </StageCard>

          <StageHighlight title="Pattern Objective">
            <p>
              The system creates a clear record of what should be repeated,
              improved, or avoided.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="03"
        navTitle="Reusable Knowledge"
        title="Reusable Creative Knowledge"
        description="Organize the strongest learnings so they can be reused throughout the next creative cycle."
      >
        <StageGrid columns={2}>
          <StageCard
            title="Where the Knowledge Is Reused"
            description="The strongest learnings return to the relevant strategic and execution stages."
          >
            <StageList items={reusableKnowledgeDestinations} />
          </StageCard>

          <StageHighlight
            title="Reusable Knowledge Flow"
            type="success"
          >
            <StageFlow
              items={[
                'Every Test',
                'Capture the Learning',
                'Store the Pattern',
                'Reuse It in the Next Creative Cycle',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="04"
        navTitle="System Structure"
        title="Lightweight System Structure"
        description="This stage does not require a full SOP."
      >
        <StageGrid columns={2}>
          <StageCard
            title="What the Stage Needs"
            description="The knowledge layer should remain lightweight and consistent."
          >
            <StageList items={lightweightSystemRequirements} />
          </StageCard>

          <StageHighlight
            title="Documentation Boundary"
            type="warning"
          >
            <p>
              This stage does not require a full SOP. It only needs a
              consistent creative tracker, learning log, naming structure,
              and central knowledge library.
            </p>
          </StageHighlight>
        </StageGrid>
      </StageSection>

      <StageSection
        number="05"
        navTitle="Final Output"
        title="Final Output"
        description="The Knowledge & Learning System preserves creative history, recurring patterns, reusable insights, and clear future direction."
      >
        <StageGrid columns={2}>
          <StageCard title="System Outputs">
            <StageList items={outputs} />
          </StageCard>

          <StageHighlight
            title="Continuous Creative Cycle"
            type="success"
          >
            <StageFlow
              items={[
                'Creative Test',
                'Performance History',
                'Winning and Losing Patterns',
                'Reusable Knowledge',
                'Next Creative Cycle',
              ]}
            />
          </StageHighlight>
        </StageGrid>
      </StageSection>
    </StageDeepDiveLayout>
  );
}