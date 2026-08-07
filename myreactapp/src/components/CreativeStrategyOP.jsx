// src/components/CreativeStrategyOP.jsx

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

/*
|--------------------------------------------------------------------------
| STAGE COMPONENT AUTO-LOADER
|--------------------------------------------------------------------------
|
| Vite automatically detects the JSX files inside /components.
|
| Each stage below includes a componentFile value such as:
| BusinessContext.jsx
|
| Once that file contains a default export, clicking its card will display
| it full-screen on the same page.
|
| Empty components will temporarily display a placeholder instead of
| crashing the website.
|
*/

const stageModules = import.meta.glob(
  [
    './BusinessContext.jsx',
    './Research.jsx',
    './InsightSynthesis.jsx',
    './PersonaMapping.jsx',
    './AngleDevelopment.jsx',
    './AngleQualification.jsx',
    './ConceptDevelopment.jsx',
    './MinimumViableCreativeTest.jsx',
    './CreativeBriefing.jsx',
    './ProductionHandoff.jsx',
    './PerformanceAnalysis.jsx',
    './CreativeIteration.jsx',
    './CreativeScaling.jsx',
    './KnowledgeLearningSystem.jsx',
  ],
  {
    eager: true,
  },
);

/*
|--------------------------------------------------------------------------
| CREATIVE STRATEGY STAGES
|--------------------------------------------------------------------------
*/

const stages = [
  {
    id: 'business-context',
    number: '00',
    title: 'Business Context',
    label: 'FOUNDATION',
    icon: 'operations',
    color: '#00e5f2',
    componentFile: 'BusinessContext.jsx',
  },
  {
    id: 'research',
    number: '01',
    title: 'Research',
    label: 'MARKET INTELLIGENCE',
    icon: 'research',
    color: '#00e5f2',
    componentFile: 'Research.jsx',
  },
  {
    id: 'insight-synthesis',
    number: '02',
    title: 'Insight Synthesis',
    label: 'INSIGHT SYSTEM',
    icon: 'insights',
    color: '#20e9f5',
    componentFile: 'InsightSynthesis.jsx',
  },
  {
    id: 'persona-mapping',
    number: '03',
    title: 'Persona Mapping',
    label: 'CUSTOMER SYSTEM',
    icon: 'personas',
    color: '#7c83ff',
    componentFile: 'PersonaMapping.jsx',
  },
  {
    id: 'angle-development',
    number: '04',
    title: 'Angle Development',
    label: 'ANGLE SYSTEM',
    icon: 'angles',
    color: '#ccff00',
    componentFile: 'AngleDevelopment.jsx',
  },
  {
    id: 'angle-qualification',
    number: '05',
    title: 'Angle Qualification & Prioritization',
    label: 'DECISION SYSTEM',
    icon: 'validation',
    color: '#f4b84a',
    componentFile: 'AngleQualification.jsx',
  },
  {
    id: 'concept-development',
    number: '06',
    title: 'Concept Development',
    label: 'CREATIVE DEVELOPMENT',
    icon: 'concepts',
    color: '#00e5f2',
    componentFile: 'ConceptDevelopment.jsx',
  },
  {
    id: 'minimum-viable-creative',
    number: '07',
    title: 'Minimum Viable Creative Test',
    label: 'VALIDATION TEST',
    icon: 'mvp',
    color: '#7c83ff',
    componentFile: 'MinimumViableCreativeTest.jsx',
  },
  {
    id: 'creative-briefing',
    number: '08',
    title: 'Creative Briefing & Production Communication',
    label: 'EXECUTION SYSTEM',
    icon: 'briefing',
    color: '#7c83ff',
    componentFile: 'CreativeBriefing.jsx',
  },
  {
    id: 'production-handoff',
    number: '09',
    title: 'Production Handoff & Launch Alignment',
    label: 'PRODUCTION SYSTEM',
    icon: 'production',
    color: '#ff6b9e',
    componentFile: 'ProductionHandoff.jsx',
  },
  {
    id: 'performance-analysis',
    number: '10',
    title: 'Performance Analysis & Decision',
    label: 'PERFORMANCE SYSTEM',
    icon: 'analysis',
    color: '#00e5f2',
    componentFile: 'PerformanceAnalysis.jsx',
  },
  {
    id: 'creative-iteration',
    number: '11',
    title: 'Creative Iteration',
    label: 'ITERATION SYSTEM',
    icon: 'iteration',
    color: '#7c83ff',
    componentFile: 'CreativeIteration.jsx',
  },
  {
    id: 'creative-scaling',
    number: '12',
    title: 'Creative Scaling',
    label: 'SCALING SYSTEM',
    icon: 'scaling',
    color: '#ccff00',
    componentFile: 'CreativeScaling.jsx',
  },
  {
    id: 'knowledge-learning',
    number: '13',
    title: 'Knowledge & Learning System',
    label: 'SYSTEM MEMORY',
    icon: 'knowledge',
    color: '#20e9f5',
    componentFile: 'KnowledgeLearningSystem.jsx',
  },
];

const stageById = Object.fromEntries(
  stages.map((stage) => [stage.id, stage]),
);

/*
|--------------------------------------------------------------------------
| ANIMATIONS
|--------------------------------------------------------------------------
*/

const pageReveal = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.4,
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.18,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/*
|--------------------------------------------------------------------------
| STAGE CARD
|--------------------------------------------------------------------------
*/

function StageCard({ stage, onOpen }) {
  return (
    <motion.button
      type="button"
      className="creative-op-stage-card"
      style={{
        '--stage-color': stage.color,
      }}
      variants={cardReveal}
      onClick={() => onOpen(stage.id)}
      whileHover={{
        y: -6,
      }}
      whileTap={{
        scale: 0.985,
      }}
      aria-label={`Open ${stage.title}`}
    >
      <span className="creative-op-stage-card-top">
        <span className="creative-op-stage-number">
          {stage.number}
        </span>

        <span className="creative-op-stage-icon">
          <CreativeStrategyOPIcon
            type={stage.icon}
            size={21}
          />
        </span>
      </span>

      <span className="creative-op-stage-card-copy">
        <small>{stage.label}</small>

        <strong>{stage.title}</strong>
      </span>

      <span className="creative-op-stage-card-footer">
        <span>Open system</span>

        <CreativeStrategyOPIcon
          type="arrowRight"
          size={15}
        />
      </span>
    </motion.button>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN STAGE GRID
|--------------------------------------------------------------------------
*/

function StageGrid({ onOpenStage }) {
  return (
    <motion.main
      key="creative-op-grid"
      className="creative-op-page"
      variants={pageReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="creative-op-logo-row">
        <Link
          to="/"
          className="creative-op-logo-link"
          aria-label="Return to homepage"
        >
          <span className="creative-op-logo">
            Fadel<span>.</span>
          </span>
        </Link>
      </div>

      <section className="creative-op-content">
        <header className="creative-op-intro">
          <motion.span
            className="creative-op-eyebrow"
            variants={cardReveal}
          >
            CREATIVE INTELLIGENCE SYSTEM
          </motion.span>

          <motion.h1 variants={cardReveal}>
            Creative Strategy OP
          </motion.h1>

          <motion.p variants={cardReveal}>
            A complete operating system for turning market intelligence
            into scalable creative growth.
          </motion.p>
        </header>

        <motion.section
          className="creative-op-stage-grid"
          variants={pageReveal}
          initial="hidden"
          animate="visible"
        >
          {stages.map((stage) => (
            <StageCard
              key={stage.id}
              stage={stage}
              onOpen={onOpenStage}
            />
          ))}
        </motion.section>
      </section>
    </motion.main>
  );
}

/*
|--------------------------------------------------------------------------
| LOADING SCREEN
|--------------------------------------------------------------------------
*/

function StageLoading({ stage, onBack }) {
  return (
    <main className="creative-op-stage-screen">
      <button
        type="button"
        className="creative-op-back-button"
        onClick={onBack}
      >
        <span aria-hidden="true">←</span>
        Back to Creative Strategy OP
      </button>

      <section className="creative-op-stage-placeholder">
        <span className="creative-op-eyebrow">
          STAGE {stage.number}
        </span>

        <div
          className="creative-op-placeholder-icon"
          style={{
            '--stage-color': stage.color,
          }}
        >
          <CreativeStrategyOPIcon
            type={stage.icon}
            size={30}
          />
        </div>

        <h1>{stage.title}</h1>

        <p>Loading stage content...</p>
      </section>
    </main>
  );
}

/*
|--------------------------------------------------------------------------
| EMPTY-COMPONENT PLACEHOLDER
|--------------------------------------------------------------------------
|
| This appears while a stage JSX file is still empty.
|
*/

function EmptyStagePlaceholder({ stage, onBack }) {
  return (
    <motion.main
      key={stage.id}
      className="creative-op-stage-screen"
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        duration: 0.34,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        className="creative-op-back-button"
        onClick={onBack}
      >
        <span aria-hidden="true">←</span>
        Back to Creative Strategy OP
      </button>

      <section className="creative-op-stage-placeholder">
        <span className="creative-op-eyebrow">
          STAGE {stage.number}
        </span>

        <div
          className="creative-op-placeholder-icon"
          style={{
            '--stage-color': stage.color,
          }}
        >
          <CreativeStrategyOPIcon
            type={stage.icon}
            size={30}
          />
        </div>

        <h1>{stage.title}</h1>

        <p>
          The JSX component for this stage is ready to receive its content.
        </p>
      </section>
    </motion.main>
  );
}

/*
|--------------------------------------------------------------------------
| DYNAMIC STAGE RENDERER
|--------------------------------------------------------------------------
|
| This loads the JSX file connected to the clicked card.
|
| Every stage component will receive:
|
| onBack
| stage
|
*/

function DynamicStageRenderer({ stage, onBack }) {
  const modulePath = `./${stage.componentFile}`;
  const importedModule = stageModules[modulePath];
  const StageComponent = importedModule?.default;

  if (typeof StageComponent !== 'function') {
    return (
      <EmptyStagePlaceholder
        stage={stage}
        onBack={onBack}
      />
    );
  }

  return (
    <StageComponent
      stage={stage}
      onBack={onBack}
    />
  );
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function CreativeStrategyOP() {
  const [activeStageId, setActiveStageId] = useState(null);

  const activeStage = useMemo(
    () => (
      activeStageId
        ? stageById[activeStageId]
        : null
    ),
    [activeStageId],
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  };

  useEffect(() => {
    window.history.replaceState(
      {
        ...window.history.state,
        creativeStrategyView: 'map',
        creativeStrategyStageId: null,
      },
      document.title,
    );

    const handlePopState = (event) => {
      const stageId = event.state?.creativeStrategyStageId;

      setActiveStageId(
        stageId && stageById[stageId]
          ? stageId
          : null,
      );

      scrollToTop();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openStage = (stageId) => {
    if (!stageById[stageId]) {
      return;
    }

    window.history.pushState(
      {
        ...window.history.state,
        creativeStrategyView: 'stage',
        creativeStrategyStageId: stageId,
      },
      document.title,
    );

    setActiveStageId(stageId);
    scrollToTop();
  };

  const closeStage = () => {
    if (
      window.history.state?.creativeStrategyView === 'stage'
    ) {
      window.history.back();
      return;
    }

    setActiveStageId(null);
    scrollToTop();
  };

  return (
    <AnimatePresence mode="wait">
      {activeStage ? (
        <DynamicStageRenderer
          key={activeStage.id}
          stage={activeStage}
          onBack={closeStage}
        />
      ) : (
        <StageGrid
          key="creative-op-grid"
          onOpenStage={openStage}
        />
      )}
    </AnimatePresence>
  );
}