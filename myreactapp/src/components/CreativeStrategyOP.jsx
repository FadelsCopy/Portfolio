// src/components/CreativeStrategyOP.jsx

import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';
import ResearchDeepDive from './ResearchDeepDive';
import InsightsDeepDive from './InsightsDeepDive';
import PersonasDeepDive from './PersonasDeepDive';
import AnglesDeepDive from './AnglesDeepDive';
import ValidationDeepDive from './ValidationDeepDive';
import ConceptsDeepDive from './ConceptsDeepDive';
import MVPDeepDive from './MVPDeepDive';
import BriefingDeepDive from './BriefingDeepDive';
import ProductionDeepDive from './ProductionDeepDive';
import LaunchDeepDive from './LaunchDeepDive';
import AnalysisDeepDive from './AnalysisDeepDive';
import IterationDeepDive from './IterationDeepDive';
import ScalingDeepDive from './ScalingDeepDive';
import NewConceptsDeepDive from './NewConceptsDeepDive';
import OperationsDeepDive from './OperationsDeepDive';
import KnowledgeDeepDive from './KnowledgeDeepDive';

import {
  creativeStrategyOPStages,
  creativeStrategyOPCategories,
  getCreativeStrategyOPStage,
} from '../data/creativeStrategyOPData';

const pageReveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mapReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
};

const stageReveal = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.975,
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

const detailReveal = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function StageCard({
  stage,
  selectedStageId,
  onSelectStage,
  index,
}) {
  const isActive = selectedStageId === stage.id;

  const categoryColor =
    creativeStrategyOPCategories[stage.category]?.color ||
    '#00e5f2';

  const isEndOfRow = (index + 1) % 6 === 0;
  const isLastStage = index === creativeStrategyOPStages.length - 1;

  return (
    <motion.div
      className="creative-op-map-stage-wrapper"
      variants={stageReveal}
    >
      <button
        type="button"
        className={`creative-op-map-stage ${
          isActive ? 'is-active' : ''
        }`}
        onClick={() => onSelectStage(stage.id)}
        style={{
          '--stage-color': categoryColor,
        }}
      >
        <div className="creative-op-map-stage-top">
          <span className="creative-op-map-stage-number">
            {stage.number}
          </span>

          <span className="creative-op-map-stage-icon">
            <CreativeStrategyOPIcon
              type={stage.icon}
              size={20}
            />
          </span>
        </div>

        <div className="creative-op-map-stage-body">
          <span className="creative-op-map-stage-category">
            {stage.category}
          </span>

          <h3>{stage.shortTitle}</h3>

          <p>{stage.title}</p>
        </div>

        <div
          className="creative-op-map-stage-footer"
          aria-hidden="true"
        >
          <CreativeStrategyOPIcon
            type="arrowRight"
            size={16}
          />
        </div>
      </button>

      {!isEndOfRow && !isLastStage && (
        <span
          className="creative-op-horizontal-connector"
          aria-hidden="true"
        >
          <span className="creative-op-horizontal-line" />
          <CreativeStrategyOPIcon
            type="arrowRight"
            size={15}
          />
        </span>
      )}
    </motion.div>
  );
}

function InformationList({
  title,
  items = [],
  icon = 'arrowRight',
}) {
  if (!items.length) return null;

  return (
    <section className="creative-op-detail-section">
      <div className="creative-op-detail-section-heading">
        <span className="creative-op-detail-section-icon">
          <CreativeStrategyOPIcon
            type={icon}
            size={16}
          />
        </span>

        <h3>{title}</h3>

        <span className="creative-op-detail-count">
          {items.length}
        </span>
      </div>

      <ul className="creative-op-information-list">
        {items.map((item) => (
          <li key={item}>
            <span className="creative-op-list-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SourceGrid({ sources = [] }) {
  if (!sources.length) return null;

  return (
    <section className="creative-op-detail-section">
      <div className="creative-op-detail-section-heading">
        <span className="creative-op-detail-section-icon">
          <CreativeStrategyOPIcon
            type="research"
            size={16}
          />
        </span>

        <h3>Research Sources</h3>

        <span className="creative-op-detail-count">
          {sources.length}
        </span>
      </div>

      <div className="creative-op-source-grid">
        {sources.map((source) => (
          <div
            className="creative-op-source-card"
            key={source.name}
          >
            <span className="creative-op-source-icon">
              <CreativeStrategyOPIcon
                type={source.icon}
                size={19}
              />
            </span>

            <span className="creative-op-source-copy">
              <strong>{source.name}</strong>
              <small>{source.type}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolGrid({ tools = [] }) {
  if (!tools.length) return null;

  return (
    <section className="creative-op-detail-section">
      <div className="creative-op-detail-section-heading">
        <span className="creative-op-detail-section-icon">
          <CreativeStrategyOPIcon
            type="operations"
            size={16}
          />
        </span>

        <h3>Tools</h3>

        <span className="creative-op-detail-count">
          {tools.length}
        </span>
      </div>

      <div className="creative-op-tool-grid">
        {tools.map((tool) => (
          <span
            className="creative-op-tool-badge"
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function SOPList({ sops = [] }) {
  if (!sops.length) return null;

  return (
    <section className="creative-op-detail-section">
      <div className="creative-op-detail-section-heading">
        <span className="creative-op-detail-section-icon">
          <CreativeStrategyOPIcon
            type="knowledge"
            size={16}
          />
        </span>

        <h3>SOP Library</h3>

        <span className="creative-op-detail-count">
          {sops.length}
        </span>
      </div>

      <div className="creative-op-sop-list">
        {sops.map((sop) => {
          const hasLink = Boolean(sop.url);

          if (hasLink) {
            return (
              <a
                key={sop.label}
                href={sop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="creative-op-sop-item"
              >
                <span className="creative-op-sop-icon">
                  <CreativeStrategyOPIcon
                    type="knowledge"
                    size={17}
                  />
                </span>

                <span className="creative-op-sop-copy">
                  <strong>{sop.label}</strong>
                  <small>Open SOP</small>
                </span>

                <CreativeStrategyOPIcon
                  type="external"
                  size={15}
                />
              </a>
            );
          }

          return (
            <div
              key={sop.label}
              className="creative-op-sop-item is-planned"
            >
              <span className="creative-op-sop-icon">
                <CreativeStrategyOPIcon
                  type="knowledge"
                  size={17}
                />
              </span>

              <span className="creative-op-sop-copy">
                <strong>{sop.label}</strong>
                <small>Document coming soon</small>
              </span>

              <span className="creative-op-sop-status">
                PLANNED
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StageDetailPanel({ stage, onOpenDeepDive, onClose }) {
  const categoryColor =
    creativeStrategyOPCategories[stage.category]?.color ||
    '#00e5f2';

  const extendedInformation =
    stage.insightTypes || stage.metrics || [];

  const extendedTitle = stage.insightTypes
    ? 'Insight Types'
    : stage.metrics
      ? 'Performance Metrics'
      : '';

  return (
      <motion.aside
        key={stage.id}
        className="creative-op-detail-panel"
        variants={detailReveal}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          '--stage-color': categoryColor,
        }}
      >
        <button
          type="button"
          className="creative-op-detail-collapse-handle"
          onClick={onClose}
          aria-label="Collapse stage details"
          title="Collapse stage details"
        >
          <span aria-hidden="true" />
        </button>

        <div className="creative-op-detail-header">
          <div className="creative-op-detail-stage-identity">
            <span className="creative-op-detail-stage-icon">
              <CreativeStrategyOPIcon
                type={stage.icon}
                size={24}
              />
            </span>

            <div>
              <span className="creative-op-detail-number">
                STAGE {stage.number}
              </span>

              <h2>{stage.title}</h2>
            </div>
          </div>

          <span className="creative-op-detail-category">
            {stage.category}
          </span>
        </div>

        <div className="creative-op-detail-scroll">
          <section className="creative-op-purpose-card">
            <span>PURPOSE</span>
            <p>{stage.purpose}</p>
          </section>

            {stage.id === 'research' && (
            <button
                type="button"
                className="creative-op-open-stage-button"
                onClick={() => onOpenDeepDive('research')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="research"
                    size={18}
                />

                Open Research Engine
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'insights' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-insights-button"
                onClick={() => onOpenDeepDive('insights')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="insights"
                    size={18}
                />

                Open Insight Extraction
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'personas' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-personas-button"
                onClick={() => onOpenDeepDive('personas')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="personas"
                    size={18}
                />

                Open Persona Mapping
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'angles' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-angles-button"
                onClick={() => onOpenDeepDive('angles')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="angles"
                    size={18}
                />

                Open Angle Engine
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'validation' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-validation-button"
                onClick={() => onOpenDeepDive('validation')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="validation"
                    size={18}
                />

                Open Angle Validation
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'concepts' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-concepts-button"
                onClick={() => onOpenDeepDive('concepts')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="concepts"
                    size={18}
                />

                Open Concept Development
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'mvp' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-mvp-button"
                onClick={() => onOpenDeepDive('mvp')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="mvp"
                    size={18}
                />

                Open Minimum Viable Creative
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'briefing' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-briefing-button"
                onClick={() => onOpenDeepDive('briefing')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="briefing"
                    size={18}
                />

                Open Creative Briefing
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'production' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-production-button"
                onClick={() => onOpenDeepDive('production')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="production"
                    size={18}
                />

                Open Production & QA
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'launch' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-launch-button"
                onClick={() => onOpenDeepDive('launch')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="launch"
                    size={18}
                />

                Open Launch & Deployment
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'analysis' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-analysis-button"
                onClick={() => onOpenDeepDive('analysis')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="analysis"
                    size={18}
                />

                Open Performance Analysis
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'iteration' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-iteration-button"
                onClick={() => onOpenDeepDive('iteration')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="iteration"
                    size={18}
                />

                Open Creative Iteration
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'scaling' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-scaling-button"
                onClick={() => onOpenDeepDive('scaling')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="scaling"
                    size={18}
                />

                Open Scaling & Expansion
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'new-concepts' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-new-concepts-button"
                onClick={() => onOpenDeepDive('new-concepts')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="newConcepts"
                    size={18}
                />

                Open New Concept Pipeline
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'operations' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-operations-button"
                onClick={() => onOpenDeepDive('operations')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="operations"
                    size={18}
                />

                Open Creative Operations
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

            {stage.id === 'knowledge' && (
            <button
                type="button"
                className="creative-op-open-stage-button creative-op-open-knowledge-button"
                onClick={() => onOpenDeepDive('knowledge')}
            >
                <span>
                <CreativeStrategyOPIcon
                    type="knowledge"
                    size={18}
                />

                Open Knowledge Library
                </span>

                <CreativeStrategyOPIcon
                type="arrowRight"
                size={17}
                />
            </button>
            )}

          <InformationList
            title="Inputs"
            items={stage.inputs}
            icon="arrowRight"
          />

          <InformationList
            title="Systems"
            items={stage.systems}
            icon={stage.icon}
          />

          <SourceGrid sources={stage.sources} />

          {extendedInformation.length > 0 && (
            <InformationList
              title={extendedTitle}
              items={extendedInformation}
              icon={
                stage.metrics
                  ? 'analysis'
                  : 'insights'
              }
            />
          )}

          <InformationList
            title="Outputs"
            items={stage.outputs}
            icon="validation"
          />

          <ToolGrid tools={stage.tools} />

          <SOPList sops={stage.sops} />
        </div>
      </motion.aside>
  );
}

function DecisionLoops({ onSelectStage }) {
  const loops = [
    {
      label: 'FAILED HYPOTHESIS',
      title: 'Return to Angle Engine',
      description:
        'Document the learning, kill the failed execution, and develop a stronger hypothesis.',
      target: 'angles',
      icon: 'angles',
      className: 'is-failure',
    },
    {
      label: 'MIXED SIGNALS',
      title: 'Controlled Iteration',
      description:
        'Protect the winning component, replace the weak component, and relaunch.',
      target: 'iteration',
      icon: 'iteration',
      className: 'is-iteration',
    },
    {
      label: 'VALIDATED WINNER',
      title: 'Expand & Scale',
      description:
        'Create new hooks, creators, formats, offers, placements, and variations.',
      target: 'scaling',
      icon: 'scaling',
      className: 'is-winner',
    },
    {
      label: 'ALWAYS RUNNING',
      title: 'New Concept Pipeline',
      description:
        'Continue discovering and testing fresh concepts while winners scale.',
      target: 'new-concepts',
      icon: 'newConcepts',
      className: 'is-parallel',
    },
  ];

  return (
    <section className="creative-op-feedback-section">
      <div className="creative-op-feedback-heading">
        <div>
          <span className="creative-op-section-eyebrow">
            PERFORMANCE FEEDBACK LOOPS
          </span>

          <h2>
            Every test creates a clear next action.
          </h2>
        </div>

        <p>
          The operating system is not linear. Analysis continuously
          feeds iteration, scaling, new concepts, and the knowledge
          library.
        </p>
      </div>

      <div className="creative-op-feedback-grid">
        {loops.map((loop) => (
          <button
            key={loop.target}
            type="button"
            className={`creative-op-feedback-card ${loop.className}`}
            onClick={() => onSelectStage(loop.target)}
          >
            <span className="creative-op-feedback-icon">
              <CreativeStrategyOPIcon
                type={loop.icon}
                size={22}
              />
            </span>

            <span className="creative-op-feedback-copy">
              <small>{loop.label}</small>
              <strong>{loop.title}</strong>
              <p>{loop.description}</p>
            </span>

            <CreativeStrategyOPIcon
              type="arrowRight"
              size={17}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function SmallScreenMessage() {
  return (
    <section className="creative-op-small-screen-message">
      <div className="creative-op-small-screen-card">
        <span
          className="creative-op-small-screen-icon"
          aria-hidden="true"
        >
          ◫
        </span>

        <span className="creative-op-small-screen-label">
          DESKTOP EXPERIENCE
        </span>

        <h1>
          Open Creative Strategy OP on a larger screen.
        </h1>

        <p>
          This interactive operating system was designed for desktop
          and laptop navigation. Please use a device with a wider
          display.
        </p>

        <Link
          to="/"
          className="creative-op-mobile-back-button"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}

const DETAIL_PANEL_MIN_WIDTH = 370;
const DETAIL_PANEL_MAX_WIDTH = 555;
const DETAIL_PANEL_DEFAULT_WIDTH = 370;

export default function CreativeStrategyOP() {
  const [selectedStageId, setSelectedStageId] =
    useState(null);
  const [isDetailPanelOpen, setIsDetailPanelOpen] =
    useState(false);
  const [isDetailLayoutOpen, setIsDetailLayoutOpen] =
    useState(false);
  const [activeDeepDive, setActiveDeepDive] =
    useState(null);
  const [detailPanelWidth, setDetailPanelWidth] =
    useState(DETAIL_PANEL_DEFAULT_WIDTH);

  const resizeStartXRef = useRef(0);
  const resizeStartWidthRef = useRef(DETAIL_PANEL_DEFAULT_WIDTH);

  const selectedStage = useMemo(
    () =>
      selectedStageId
        ? getCreativeStrategyOPStage(selectedStageId)
        : null,
    [selectedStageId]
  );

  const handleSelectStage = (stageId) => {
    setSelectedStageId(stageId);
    setIsDetailLayoutOpen(true);
    requestAnimationFrame(() => {
      setIsDetailPanelOpen(true);
    });
  };

  const handleCloseDetailPanel = () => {
    setIsDetailPanelOpen(false);
  };

  const handleDetailExitComplete = () => {
    if (!isDetailPanelOpen) {
      setIsDetailLayoutOpen(false);
      setSelectedStageId(null);
    }
  };

  const clampDetailPanelWidth = (width) =>
    Math.min(
      DETAIL_PANEL_MAX_WIDTH,
      Math.max(DETAIL_PANEL_MIN_WIDTH, width)
    );

  const handleResizePointerDown = (event) => {
    event.preventDefault();

    resizeStartXRef.current = event.clientX;
    resizeStartWidthRef.current = detailPanelWidth;

    const handlePointerMove = (moveEvent) => {
      const horizontalMovement =
        resizeStartXRef.current - moveEvent.clientX;

      setDetailPanelWidth(
        clampDetailPanelWidth(
          resizeStartWidthRef.current + horizontalMovement
        )
      );
    };

    const handlePointerUp = () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      );
      window.removeEventListener(
        'pointerup',
        handlePointerUp
      );

      document.body.classList.remove(
        'creative-op-is-resizing'
      );
    };

    document.body.classList.add('creative-op-is-resizing');

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handleResizeKeyDown = (event) => {
    const resizeStep = event.shiftKey ? 40 : 20;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setDetailPanelWidth((currentWidth) =>
        clampDetailPanelWidth(currentWidth + resizeStep)
      );
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setDetailPanelWidth((currentWidth) =>
        clampDetailPanelWidth(currentWidth - resizeStep)
      );
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setDetailPanelWidth(DETAIL_PANEL_MIN_WIDTH);
    }

    if (event.key === 'End') {
      event.preventDefault();
      setDetailPanelWidth(DETAIL_PANEL_MAX_WIDTH);
    }
  };

  return (
    <motion.main
      className="creative-op-page"
      variants={pageReveal}
      initial="hidden"
      animate="visible"
    >
      <div className="creative-op-background-grid" />
      <div className="creative-op-glow creative-op-glow-one" />
      <div className="creative-op-glow creative-op-glow-two" />



     <section className="creative-op-desktop-experience">
        <AnimatePresence mode="wait">
            {activeDeepDive === 'research' ? (
            <ResearchDeepDive
                key="research-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'insights' ? (
            <InsightsDeepDive
                key="insights-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'personas' ? (
            <PersonasDeepDive
                key="personas-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'angles' ? (
            <AnglesDeepDive
                key="angles-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'validation' ? (
                <ValidationDeepDive
                key="validation-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'concepts' ? (
            <ConceptsDeepDive
                key="concepts-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'mvp' ? (
            <MVPDeepDive
                key="mvp-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'briefing' ? (
            <BriefingDeepDive
                key="briefing-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'production' ? (
            <ProductionDeepDive
                key="production-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'launch' ? (
            <LaunchDeepDive
                key="launch-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'analysis' ? (
            <AnalysisDeepDive
                key="analysis-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'iteration' ? (
            <IterationDeepDive
                key="iteration-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'scaling' ? (
            <ScalingDeepDive
                key="scaling-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'new-concepts' ? (
            <NewConceptsDeepDive
                key="new-concepts-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'operations' ? (
            <OperationsDeepDive
                key="operations-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : activeDeepDive === 'knowledge' ? (
            <KnowledgeDeepDive
                key="knowledge-deep-dive"
                onBack={() => setActiveDeepDive(null)}
            />
            ) : (
            <motion.div
                key="full-system"
                className={`creative-op-app-shell ${
                  isDetailLayoutOpen
                    ? 'is-detail-open'
                    : 'is-detail-closed'
                }`}
                style={{
                  '--creative-op-detail-width': `${detailPanelWidth}px`,
                }}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
                }}
            >
                <main className="creative-op-main-map">
                <section className="creative-op-map-introduction">
                    <div>
                    <Link
                        to="/"
                        className="creative-op-home-logo"
                        aria-label="Go to homepage"
                    >
                        <span className="creative-op-home-logo-text">
                        Fadel<span className="creative-op-home-logo-dot">.</span>
                        </span>
                    </Link>

                    <span className="creative-op-section-eyebrow">
                        CREATIVE INTELLIGENCE SYSTEM
                    </span>

                    <h1>Creative Strategy OP</h1>

                    <p>
                        A complete system for researching, developing,
                        testing, analyzing, iterating, and scaling
                        performance creative.
                    </p>
                    </div>

                    <div className="creative-op-system-stats">
                    <div>
                        <strong>
                        {creativeStrategyOPStages.length}
                        </strong>
                        <span>Operating stages</span>
                    </div>

                    <div>
                        <strong>01</strong>
                        <span>Continuous system</span>
                    </div>

                    <div>
                        <strong>∞</strong>
                        <span>Learning cycles</span>
                    </div>
                    </div>
                </section>

                <motion.section
                    className="creative-op-map-grid"
                    variants={mapReveal}
                    initial="hidden"
                    animate="visible"
                >
                    {creativeStrategyOPStages.map(
                    (stage, index) => (
                        <StageCard
                        key={stage.id}
                        stage={stage}
                        selectedStageId={selectedStageId}
                        onSelectStage={handleSelectStage}
                        index={index}
                        />
                    )
                    )}
                </motion.section>

                <DecisionLoops
                    onSelectStage={handleSelectStage}
                />

                <section className="creative-op-continuous-system">
                    <div className="creative-op-continuous-icon">
                    <CreativeStrategyOPIcon
                        type="knowledge"
                        size={25}
                    />
                    </div>

                    <div>
                    <span>CONTINUOUS INTELLIGENCE LAYER</span>

                    <h2>
                        Knowledge is captured at every stage.
                    </h2>

                    <p>
                        Research findings, test results, winning patterns,
                        failures, scripts, hooks, personas, and SOPs are
                        stored in the Knowledge Library and reused across
                        the full system.
                    </p>
                    </div>

                    <button
                    type="button"
                    onClick={() =>
                        handleSelectStage('knowledge')
                    }
                    >
                    Open Knowledge Library

                    <CreativeStrategyOPIcon
                        type="arrowRight"
                        size={16}
                    />
                    </button>
                </section>
                </main>

                <AnimatePresence
                  initial={false}
                  onExitComplete={handleDetailExitComplete}
                >
                  {isDetailPanelOpen && selectedStage && (
                    <>
                      <motion.div
                        key="detail-resizer"
                        className="creative-op-detail-resizer"
                        role="separator"
                        aria-label="Resize stage details panel"
                        aria-orientation="vertical"
                        aria-valuemin={DETAIL_PANEL_MIN_WIDTH}
                        aria-valuemax={DETAIL_PANEL_MAX_WIDTH}
                        aria-valuenow={detailPanelWidth}
                        tabIndex={0}
                        onPointerDown={handleResizePointerDown}
                        onKeyDown={handleResizeKeyDown}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span aria-hidden="true" />
                      </motion.div>

                      <StageDetailPanel
                        key={`detail-${selectedStage.id}`}
                        stage={selectedStage}
                        onOpenDeepDive={setActiveDeepDive}
                        onClose={handleCloseDetailPanel}
                      />
                    </>
                  )}
                </AnimatePresence>
            </motion.div>
            )}
        </AnimatePresence>
        </section>
      <SmallScreenMessage />
    </motion.main>
  );
}