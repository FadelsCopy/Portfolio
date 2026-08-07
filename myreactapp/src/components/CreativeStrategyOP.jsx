// src/components/CreativeStrategyOP.jsx

import { useEffect, useMemo, useRef, useState } from 'react';
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
    y: 18,
    scale: 0.992,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const introReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

const introItemReveal = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/*
|--------------------------------------------------------------------------
| CREATIVE STRATEGY FLOW DIAGRAM
|--------------------------------------------------------------------------
|
| This section renders the roadmap as a flow/graph instead of a plain
| grid: a main spine, a qualification loop, an MVP decision gate, and a
| results fan-out (Iterate / Scaling / Kill), matching the requested
| structure while re-using the existing card visual language.
|
| Every node that maps to a real stage id stays fully clickable and opens
| the exact same existing deep-dive. "Need MVP?" and "Kill" are visual
| logic only and are intentionally not clickable.
|
*/

const flowLabels = {
  'business-context': 'Business Context',
  research: 'Research',
  'insight-synthesis': 'Insight Synthesis',
  'persona-mapping': 'Persona Mapping',
  'angle-development': 'Angle Development',
  'angle-qualification': 'Angle Qualification & Prioritization',
  'concept-development': 'Concept Development',
  'minimum-viable-creative': 'Minimum Viable Creative Test',
  'creative-briefing': 'Creative Briefing & Production Communication',
  'production-handoff': 'Production Handoff & Launch Alignment',
  'performance-analysis': 'Performance Analysis & Decision',
  'creative-iteration': 'Creative Iteration',
  'creative-scaling': 'Creative Scaling',
  'knowledge-learning': 'Knowledge & Learning System',
};

const GATE_COLOR = '#5c9bff';
const KILL_COLOR = '#ff5c5c';

// Fixed design-pixel canvas. The desktop diagram is drawn once at this
// size and centered — below the responsive breakpoint we swap to a
// simplified linear layout instead of trying to reflow the diagram.
const FLOW_CANVAS = { width: 980, height: 2510 };

const FLOW_NODES = [
  { id: 'business-context', shape: 'rect', x: 180, y: 30, w: 620, h: 118 },
  { id: 'research', shape: 'rect', x: 180, y: 188, w: 620, h: 118 },
  { id: 'insight-synthesis', shape: 'rect', x: 180, y: 346, w: 620, h: 118 },
  { id: 'persona-mapping', shape: 'rect', x: 180, y: 504, w: 620, h: 118 },
  { id: 'angle-development', shape: 'rect', x: 180, y: 662, w: 620, h: 118 },

  {
    id: 'angle-qualification',
    shape: 'diamond',
    x: 280,
    y: 838,
    w: 420,
    h: 260,
  },

  { id: 'concept-development', shape: 'rect', x: 180, y: 1160, w: 620, h: 118 },

  {
    key: 'need-mvp',
    id: null,
    shape: 'diamond',
    x: 370,
    y: 1334,
    w: 240,
    h: 168,
    label: 'Need MVP?',
    variant: 'gate',
  },

  {
    id: 'minimum-viable-creative',
    shape: 'rect',
    x: 150,
    y: 1593,
    w: 360,
    h: 104,
  },

  { id: 'creative-briefing', shape: 'rect', x: 180, y: 1812, w: 620, h: 118 },
  { id: 'production-handoff', shape: 'rect', x: 180, y: 1970, w: 620, h: 118 },

  {
    id: 'performance-analysis',
    shape: 'rect',
    x: 180,
    y: 2128,
    w: 620,
    h: 118,
  },

  { id: 'creative-iteration', shape: 'rect', x: 10, y: 2350, w: 300, h: 118 },
  { id: 'creative-scaling', shape: 'rect', x: 340, y: 2350, w: 300, h: 118 },

  {
    key: 'kill',
    id: null,
    shape: 'rect',
    x: 670,
    y: 2350,
    w: 300,
    h: 118,
    label: 'Kill',
    variant: 'kill',
  },
];

const FLOW_CONNECTORS = [
  /* Main spine — colorful */
  { points: [[490, 148], [490, 188]], color: '#00e5f2' },
  { points: [[490, 306], [490, 346]], color: '#20e9f5' },
  { points: [[490, 464], [490, 504]], color: '#7c83ff' },
  { points: [[490, 622], [490, 662]], color: '#ccff00' },
  { points: [[490, 780], [490, 838]], color: '#f4b84a' },

  /* Qualification decision */
  {
    points: [[490, 1098], [490, 1160]],
    color: '#ccff00',
    label: { text: 'APPROVED', x: 553, y: 1135 },
  },
  {
    points: [[280, 968], [95, 968], [95, 721], [180, 721]],
    color: '#ff5c72',
    label: { text: 'REJECTED', x: 95, y: 895 },
  },

  /* Concept → MVP gate */
  { points: [[490, 1278], [490, 1334]], color: '#5c9bff' },

  /* Symmetrical MVP split */
  {
    points: [[370, 1418], [330, 1418], [330, 1593]],
    color: '#7c83ff',
    label: { text: 'YES', x: 338, y: 1398 },
  },
  {
    points: [[610, 1418], [660, 1418], [660, 1768], [490, 1768], [490, 1812]],
    color: GATE_COLOR,
    label: { text: 'NO', x: 642, y: 1398 },
  },

  /* MVP Test → Briefing; balanced space above and below MVP Test */
  {
    points: [[330, 1697], [330, 1758], [490, 1758], [490, 1812]],
    color: '#7c83ff',
  },

  /* Briefing → Production → Analysis */
  { points: [[490, 1930], [490, 1970]], color: '#ff6b9e' },
  { points: [[490, 2088], [490, 2128]], color: '#00e5f2' },

  /* Analysis fan-out */
  {
    points: [[490, 2246], [490, 2298], [160, 2298], [160, 2350]],
    color: '#7c83ff',
  },
  {
    points: [[490, 2246], [490, 2350]],
    color: '#ccff00',
  },
  {
    points: [[490, 2246], [490, 2298], [820, 2298], [820, 2350]],
    color: KILL_COLOR,
  },

  /* Iteration return → left-center of Briefing */
  {
    points: [[10, 2409], [0, 2409], [0, 1871], [180, 1871]],
    color: '#7c83ff',
    dashed: true,
  },

  /* Kill return → right-center of Concept Development */
  {
    points: [[970, 2409], [980, 2409], [980, 1219], [800, 1219]],
    color: KILL_COLOR,
    dashed: true,
  },
];

const MOBILE_FLOW_SEQUENCE = [
  { id: 'business-context' },
  { id: 'research' },
  { id: 'insight-synthesis' },
  { id: 'persona-mapping' },
  { id: 'angle-development' },
  {
    id: 'angle-qualification',
    caption:
      'Approved → continues to Concept Development. Rejected → returns to Angle Development.',
  },
  { id: 'concept-development' },
  {
    key: 'need-mvp',
    label: 'Need MVP?',
    variant: 'gate',
    caption:
      'Yes → Minimum Viable Creative Test. No → goes straight to Briefing.',
  },
  { id: 'minimum-viable-creative' },
  { id: 'creative-briefing' },
  { id: 'production-handoff' },
  {
    id: 'performance-analysis',
    caption:
      'Iterate → Creative Iteration → returns to Briefing. Scale → Creative Scaling. Kill → returns to Concept Development.',
  },
  { id: 'creative-iteration' },
  { id: 'creative-scaling' },
  { key: 'kill', label: 'Kill', variant: 'kill' },
];

// Builds a rounded-corner orthogonal SVG path through a list of
// [x, y] waypoints, used for every connector/branch line in the diagram.
function roundedElbowPath(points, radius = 14) {
  if (!points || points.length < 2) {
    return '';
  }

  const [start, ...rest] = points;
  let d = `M ${start[0]} ${start[1]} `;

  rest.forEach((curr, index) => {
    const prev = index === 0 ? start : rest[index - 1];
    const next = rest[index + 1];

    if (!next) {
      d += `L ${curr[0]} ${curr[1]} `;
      return;
    }

    const dx1 = curr[0] - prev[0];
    const dy1 = curr[1] - prev[1];
    const len1 = Math.hypot(dx1, dy1) || 1;
    const r1 = Math.min(radius, len1 / 2);
    const p1x = curr[0] - (dx1 / len1) * r1;
    const p1y = curr[1] - (dy1 / len1) * r1;

    const dx2 = next[0] - curr[0];
    const dy2 = next[1] - curr[1];
    const len2 = Math.hypot(dx2, dy2) || 1;
    const r2 = Math.min(radius, len2 / 2);
    const p2x = curr[0] + (dx2 / len2) * r2;
    const p2y = curr[1] + (dy2 / len2) * r2;

    d += `L ${p1x} ${p1y} Q ${curr[0]} ${curr[1]} ${p2x} ${p2y} `;
  });

  return d.trim();
}

function FlowConnector({ connector }) {
  const {
    points,
    color = 'rgba(255, 255, 255, 0.32)',
    dashed = false,
    noArrow = false,
    label,
  } = connector;

  const d = roundedElbowPath(points, 14);

  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={dashed ? 2 : 1.75}
        strokeDasharray={dashed ? '7 6' : undefined}
        strokeLinecap="round"
        markerEnd={noArrow ? undefined : 'url(#creative-op-flow-arrow)'}
        initial={
          dashed
            ? { opacity: 0 }
            : { pathLength: 0, opacity: 0 }
        }
        whileInView={
          dashed
            ? { opacity: 1 }
            : { pathLength: 1, opacity: 1 }
        }
        viewport={{
          once: true,
          amount: 0.18,
          margin: '0px 0px -8% 0px',
        }}
        transition={{
          pathLength: {
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: dashed ? 0.45 : 0.22,
          },
        }}
      />

      {label && (
        <motion.text
          x={label.x}
          y={label.y}
          fill={color}
          stroke="#08111d"
          strokeWidth="5"
          paintOrder="stroke"
          fontSize="11"
          fontWeight="800"
          textAnchor="middle"
          initial={{ opacity: 0, y: 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
            margin: '0px 0px -8% 0px',
          }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {label.text}
        </motion.text>
      )}
    </g>
  );
}

function FlowNode({ node, stage, onOpen, index }) {
  const isDiamond = node.shape === 'diamond';
  const isInteractive = Boolean(node.id);
  const label = node.label || flowLabels[node.id] || stage?.title;

  const color =
    node.variant === 'kill'
      ? KILL_COLOR
      : node.variant === 'gate'
        ? GATE_COLOR
        : stage?.color || '#00e5f2';

  const style = {
    left: node.x,
    top: node.y,
    width: node.w,
    height: node.h,
    '--stage-color': color,
  };


  const content = isDiamond && stage ? (
    <>
      <span className="creative-op-flow-node-icon">
        <CreativeStrategyOPIcon
          type={stage.icon}
          size={18}
        />
      </span>

      <span className="creative-op-flow-node-copy">
        <span className="creative-op-flow-node-diamond-meta">
          <span className="creative-op-flow-node-number">
            {stage.number}
          </span>

          <span className="creative-op-flow-node-eyebrow">
            {stage.label}
          </span>
        </span>

        <span className="creative-op-flow-node-label">
          {label}
        </span>
      </span>

      <span
        className="creative-op-flow-node-arrow"
        aria-hidden="true"
      >
        <CreativeStrategyOPIcon
          type="arrowRight"
          size={13}
        />
      </span>
    </>
  ) : (
    <>
      {stage && (
        <span className="creative-op-flow-node-number">
          {stage.number}
        </span>
      )}

      {stage && (
        <span className="creative-op-flow-node-icon">
          <CreativeStrategyOPIcon
            type={stage.icon}
            size={17}
          />
        </span>
      )}

      <span className="creative-op-flow-node-copy">
        {stage && (
          <span className="creative-op-flow-node-eyebrow">
            {stage.label}
          </span>
        )}

        <span className="creative-op-flow-node-label">
          {label}
        </span>
      </span>

      {isInteractive && (
        <span
          className="creative-op-flow-node-arrow"
          aria-hidden="true"
        >
          <CreativeStrategyOPIcon
            type="arrowRight"
            size={13}
          />
        </span>
      )}
    </>
  );

  if (isInteractive) {
    return (
      <motion.button
        type="button"
        className={`creative-op-flow-node ${
          isDiamond ? 'is-diamond' : 'is-rect'
        }`}
        style={style}
        onClick={() => onOpen(node.id)}
        aria-label={`Open ${stage?.title || label}`}
        initial={{
          opacity: 0,
          y: 22,
          scale: 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.42,
          margin: '0px 0px -7% 0px',
        }}
        transition={{
          duration: 0.62,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div
      className={`creative-op-flow-node is-static ${
        isDiamond ? 'is-diamond' : 'is-rect'
      } ${node.variant === 'gate' ? 'is-gate' : ''} ${
        node.variant === 'kill' ? 'is-kill' : ''
      }`}
      style={style}
      role="presentation"
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.42,
        margin: '0px 0px -7% 0px',
      }}
      transition={{
        duration: 0.62,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {content}
    </motion.div>
  );
}

function CreativeStrategyFlowCanvas({ onOpenStage }) {
  return (
    <div
      className="creative-op-flow-canvas"
      style={{
        width: FLOW_CANVAS.width,
        height: FLOW_CANVAS.height,
      }}
    >
      <svg
        className="creative-op-flow-svg"
        viewBox={`0 0 ${FLOW_CANVAS.width} ${FLOW_CANVAS.height}`}
        width={FLOW_CANVAS.width}
        height={FLOW_CANVAS.height}
        aria-hidden="true"
      >
        <defs>
          <marker
            id="creative-op-flow-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L10,5 L0,10 z"
              fill="context-stroke"
            />
          </marker>
        </defs>

        {FLOW_CONNECTORS.map((connector, index) => (
          <FlowConnector
            key={index}
            connector={connector}
          />
        ))}
      </svg>

      {FLOW_NODES.map((node, index) => (
        <FlowNode
          key={node.key || node.id}
          node={node}
          stage={node.id ? stageById[node.id] : null}
          onOpen={onOpenStage}
          index={index}
        />
      ))}
    </div>
  );
}

function CreativeStrategyFlowMobile({ onOpenStage }) {
  return (
    <ol className="creative-op-flow-mobile">
      {MOBILE_FLOW_SEQUENCE.map((item, index) => {
        const stage = item.id ? stageById[item.id] : null;
        const label = item.label || flowLabels[item.id];
        const clickable = Boolean(item.id);

        const color =
          item.variant === 'kill'
            ? KILL_COLOR
            : item.variant === 'gate'
              ? GATE_COLOR
              : stage?.color || '#00e5f2';

        return (
          <li
            key={item.key || item.id}
            className="creative-op-flow-mobile-item"
          >
            {index > 0 && (
              <span
                className="creative-op-flow-mobile-connector"
                aria-hidden="true"
              />
            )}

            {clickable ? (
              <button
                type="button"
                className="creative-op-flow-mobile-node"
                style={{ '--stage-color': color }}
                onClick={() => onOpenStage(item.id)}
                aria-label={`Open ${stage?.title || label}`}
              >
                {stage && (
                  <span className="creative-op-flow-mobile-number">
                    {stage.number}
                  </span>
                )}

                {stage && (
                  <span className="creative-op-flow-mobile-icon">
                    <CreativeStrategyOPIcon
                      type={stage.icon}
                      size={16}
                    />
                  </span>
                )}

                <span className="creative-op-flow-mobile-label">
                  {label}
                </span>

                <CreativeStrategyOPIcon
                  type="arrowRight"
                  size={13}
                />
              </button>
            ) : (
              <div
                className={`creative-op-flow-mobile-node is-static ${
                  item.variant === 'kill' ? 'is-kill' : 'is-gate'
                }`}
                style={{ '--stage-color': color }}
                role="presentation"
              >
                <span className="creative-op-flow-mobile-label">
                  {label}
                </span>
              </div>
            )}

            {item.caption && (
              <p className="creative-op-flow-mobile-caption">
                {item.caption}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function CreativeStrategyFlow({ onOpenStage }) {
  return (
    <motion.div
      className="creative-op-flow"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <CreativeStrategyFlowCanvas
        onOpenStage={onOpenStage}
      />
      <CreativeStrategyFlowMobile onOpenStage={onOpenStage} />
    </motion.div>
  );
}

function KnowledgeLearningCard({ onOpenStage }) {
  const stage = stageById['knowledge-learning'];

  return (
    <motion.div
      className="creative-op-knowledge-block"
      initial={{
        opacity: 0,
        y: 22,
        scale: 0.99,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
        margin: '0px 0px -6% 0px',
      }}
      transition={{
        duration: 0.68,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="creative-op-knowledge-divider">
        <span>SYSTEM MEMORY</span>
      </div>

      <button
        type="button"
        className="creative-op-knowledge-card"
        style={{ '--stage-color': stage.color }}
        onClick={() => onOpenStage(stage.id)}
        aria-label={`Open ${stage.title}`}
      >
        <span className="creative-op-knowledge-icon">
          <CreativeStrategyOPIcon
            type={stage.icon}
            size={22}
          />
        </span>

        <span className="creative-op-knowledge-copy">
          <small>{stage.label}</small>
          <strong>{stage.title}</strong>
          <p>
            Sits apart from the main flow — it collects what every stage
            learns and feeds it back into future runs of the system.
          </p>
        </span>

        <span className="creative-op-knowledge-footer">
          <span>Open system</span>
          <CreativeStrategyOPIcon
            type="arrowRight"
            size={15}
          />
        </span>
      </button>
    </motion.div>
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
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit="exit"
    >
      <div className="creative-op-desktop-only-message">
        <div className="creative-op-desktop-only-card">
          <span className="creative-op-desktop-only-kicker">
            WIDE SCREEN REQUIRED
          </span>
          <h2>Creative Strategy OP is built for desktop.</h2>
          <p>
            Please open this system on a laptop, desktop, or another wide-screen device
            to view the full interactive roadmap.
          </p>
        </div>
      </div>

      <motion.div
        className="creative-op-logo-row"
        initial={{
          opacity: 0,
          x: -12,
          y: -6,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: 0.58,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          to="/"
          className="creative-op-logo-link"
          aria-label="Return to homepage"
        >
          <span className="creative-op-logo">
            Fadel<span>.</span>
          </span>
        </Link>
      </motion.div>

      <section className="creative-op-content">
        <motion.header
          className="creative-op-intro"
          variants={introReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.55,
          }}
        >
          <motion.span
            className="creative-op-eyebrow"
            variants={introItemReveal}
          >
            CREATIVE INTELLIGENCE SYSTEM
          </motion.span>

          <motion.h1 variants={introItemReveal}>
            Creative Strategy OP
          </motion.h1>

          <motion.p variants={introItemReveal}>
            A complete operating system for turning market intelligence
            into scalable creative growth.
          </motion.p>
        </motion.header>

        <motion.section
          className="creative-op-flow-section"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <CreativeStrategyFlow
            onOpenStage={onOpenStage}
          />

          <KnowledgeLearningCard
            onOpenStage={onOpenStage}
          />
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

  const pendingMapScrollY = useRef(null);
  const previousScrollRestoration = useRef(null);

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
    previousScrollRestoration.current = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    window.history.replaceState(
      {
        ...window.history.state,
        creativeStrategyView: 'map',
        creativeStrategyStageId: null,
        creativeStrategyMapScrollY:
          window.history.state?.creativeStrategyMapScrollY ?? window.scrollY,
      },
      document.title,
    );

    const handlePopState = (event) => {
      const stageId = event.state?.creativeStrategyStageId;

      if (stageId && stageById[stageId]) {
        pendingMapScrollY.current = null;
        setActiveStageId(stageId);
        scrollToTop();
        return;
      }

      pendingMapScrollY.current =
        typeof event.state?.creativeStrategyMapScrollY === 'number'
          ? event.state.creativeStrategyMapScrollY
          : 0;

      setActiveStageId(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);

      if (previousScrollRestoration.current) {
        window.history.scrollRestoration =
          previousScrollRestoration.current;
      }
    };
  }, []);

  useEffect(() => {
    if (activeStageId !== null || pendingMapScrollY.current === null) {
      return;
    }

    const scrollYToRestore = pendingMapScrollY.current;
    pendingMapScrollY.current = null;

    let frameOne;
    let frameTwo;

    frameOne = window.requestAnimationFrame(() => {
      frameTwo = window.requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollYToRestore,
          left: 0,
          behavior: 'instant',
        });
      });
    });

    return () => {
      if (frameOne) {
        window.cancelAnimationFrame(frameOne);
      }

      if (frameTwo) {
        window.cancelAnimationFrame(frameTwo);
      }
    };
  }, [activeStageId]);

  const openStage = (stageId) => {
    if (!stageById[stageId]) {
      return;
    }

    const mapScrollY = window.scrollY;

    window.history.replaceState(
      {
        ...window.history.state,
        creativeStrategyView: 'map',
        creativeStrategyStageId: null,
        creativeStrategyMapScrollY: mapScrollY,
      },
      document.title,
    );

    window.history.pushState(
      {
        ...window.history.state,
        creativeStrategyView: 'stage',
        creativeStrategyStageId: stageId,
        creativeStrategyMapScrollY: mapScrollY,
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

    pendingMapScrollY.current =
      typeof window.history.state?.creativeStrategyMapScrollY === 'number'
        ? window.history.state.creativeStrategyMapScrollY
        : 0;

    setActiveStageId(null);
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