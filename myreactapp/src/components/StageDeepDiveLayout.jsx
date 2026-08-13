// src/components/StageDeepDiveLayout.jsx

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import CreativeStrategyOPIcon from './CreativeStrategyOPIcon';

/*
|--------------------------------------------------------------------------
| SHARED CONTENT COMPONENTS
|--------------------------------------------------------------------------
*/

export function StageSection({
  number,
  title,
  navTitle,
  description,
  children,
  className = '',
}) {
  return (
    <motion.section
      className={`stage-workspace-section ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <header className="stage-workspace-section-header">
        <div>
          {number && (
            <span className="stage-workspace-section-number">
              {number}
            </span>
          )}

          <h2>{title}</h2>

          {description && <p>{description}</p>}
        </div>
      </header>

      <div className="stage-workspace-section-body">
        {children}
      </div>
    </motion.section>
  );
}

StageSection.displayName = 'StageSection';

export function StageCard({
  title,
  description,
  label,
  children,
  className = '',
}) {
  return (
    <article className={`stage-workspace-card ${className}`}>
      {(label || title || description) && (
        <header className="stage-workspace-card-header">
          {label && (
            <span className="stage-workspace-card-label">
              {label}
            </span>
          )}

          {title && <h3>{title}</h3>}

          {description && <p>{description}</p>}
        </header>
      )}

      {children && (
        <div className="stage-workspace-card-body">
          {children}
        </div>
      )}
    </article>
  );
}

export function StageGrid({
  children,
  columns = 2,
  className = '',
}) {
  return (
    <div
      className={`stage-workspace-grid stage-workspace-grid-${columns} ${className}`}
    >
      {children}
    </div>
  );
}

export function StageList({
  items = [],
  ordered = false,
  className = '',
}) {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={`stage-workspace-list ${className}`}>
      {items.map((item, index) => (
        <li key={`${String(item)}-${index}`}>
          <span className="stage-workspace-list-marker">
            {ordered
              ? String(index + 1).padStart(2, '0')
              : '→'}
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ListTag>
  );
}

export function StageFlow({
  items = [],
  className = '',
}) {
  return (
    <div className={`stage-workspace-flow ${className}`}>
      {items.map((item, index) => (
        <div
          className="stage-workspace-flow-step"
          key={`${item}-${index}`}
        >
          <span>{item}</span>

          {index < items.length - 1 && (
            <span
              className="stage-workspace-flow-arrow"
              aria-hidden="true"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function StageHighlight({
  title,
  children,
  type = 'default',
  className = '',
}) {
  return (
    <aside
      className={`stage-workspace-highlight is-${type} ${className}`}
    >
      {title && <h3>{title}</h3>}

      <div className="stage-workspace-highlight-content">
        {children}
      </div>
    </aside>
  );
}

/*
|--------------------------------------------------------------------------
| SOP PANEL
|--------------------------------------------------------------------------
*/

function StageSOPPanel({
  sops,
  outputs,
  outputTitle,
  sopDescription,
}) {
  return (
    <motion.section
      className="stage-workspace-section"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <header className="stage-workspace-section-header">
        <div>
          <span className="stage-workspace-section-number">
            SOP
          </span>

          <h2>SOP Library</h2>

          <p>
            {sopDescription ||
              'Execution documents supporting this stage.'}
          </p>
        </div>
      </header>

      <div className="stage-workspace-section-body">
        {sops.length > 0 ? (
          <div className="stage-workspace-sop-grid">
            {sops.map((sop, index) => (
              <article
                className="stage-workspace-sop-card"
                key={`${sop.title}-${index}`}
              >
                <div className="stage-workspace-sop-icon">
                  <CreativeStrategyOPIcon
                    type="research"
                    size={18}
                  />
                </div>

                <div className="stage-workspace-sop-copy">
                  <span>
                    SOP {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{sop.title}</h3>

                  {sop.description && (
                    <p>{sop.description}</p>
                  )}
                </div>

                <span className="stage-workspace-sop-status">
                  {sop.status || 'Planned'}
                </span>
              </article>
            ))}
          </div>
        ) : (
          <StageHighlight title="No SOPs added yet">
            <p>
              This stage does not currently have linked SOP
              documents.
            </p>
          </StageHighlight>
        )}

        {outputs.length > 0 && (
          <div className="stage-workspace-output">
            <span>FINAL STAGE OUTPUT</span>

            <h3>{outputTitle}</h3>

            <StageList items={outputs} />
          </div>
        )}
      </div>
    </motion.section>
  );
}

/*
|--------------------------------------------------------------------------
| SIDEBAR RESIZE CONSTANTS
|--------------------------------------------------------------------------
*/

const SIDEBAR_MIN_WIDTH = 286;
const SIDEBAR_DEFAULT_WIDTH = 320;
const SIDEBAR_MAX_WIDTH = 340;

/*
|--------------------------------------------------------------------------
| MAIN DASHBOARD LAYOUT
|--------------------------------------------------------------------------
*/

export default function StageDeepDiveLayout({
  stage,
  onBack,
  eyebrow,
  title,
  introduction,
  process = [],
  children,
  outputs = [],
  outputTitle = 'Final Output',
  sops = [],
  sopDescription,
  singlePage = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileNavigationOpen, setMobileNavigationOpen] =
    useState(false);

  const [sidebarWidth, setSidebarWidth] = useState(
    SIDEBAR_DEFAULT_WIDTH,
  );
  const [isSidebarResizing, setIsSidebarResizing] =
    useState(false);
  const sidebarResizeStartX = useRef(0);
  const sidebarResizeStartWidth = useRef(
    SIDEBAR_DEFAULT_WIDTH,
  );

  const stageSections = useMemo(() => {
    return Children.toArray(children).filter((child) => {
      return (
        isValidElement(child) &&
        child.type?.displayName === 'StageSection'
      );
    });
  }, [children]);

  const navigationItems = useMemo(() => {
    const sectionItems = stageSections.map(
      (section, index) => ({
        id: `section-${index}`,
        type: 'section',
        index,
        number:
          section.props.number ||
          String(index + 1).padStart(2, '0'),
        title:
          section.props.navTitle ||
          section.props.title ||
          `Section ${index + 1}`,
      }),
    );

    if (!singlePage && (sops.length > 0 || outputs.length > 0)) {
      sectionItems.push({
        id: 'sop-library',
        type: 'sop',
        index: stageSections.length,
        number: 'SOP',
        title: 'SOP Library',
      });
    }

    return sectionItems;
  }, [stageSections, sops, outputs, singlePage]);

  const activeNavigationItem =
    navigationItems[activeIndex] || navigationItems[0];

  const activeSection =
    activeNavigationItem?.type === 'section'
      ? stageSections[activeNavigationItem.index]
      : null;

  useEffect(() => {
    setActiveIndex(0);
    setMobileNavigationOpen(false);
  }, [stage?.number, stage?.title]);

  useEffect(() => {
    if (!isSidebarResizing) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const deltaX =
        event.clientX - sidebarResizeStartX.current;

      const nextWidth = Math.min(
        SIDEBAR_MAX_WIDTH,
        Math.max(
          SIDEBAR_MIN_WIDTH,
          sidebarResizeStartWidth.current + deltaX,
        ),
      );

      setSidebarWidth(nextWidth);
    };

    const stopResizing = () => {
      setIsSidebarResizing(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopResizing);
    window.addEventListener('pointercancel', stopResizing);

    document.body.classList.add('is-stage-sidebar-resizing');

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove,
      );
      window.removeEventListener('pointerup', stopResizing);
      window.removeEventListener(
        'pointercancel',
        stopResizing,
      );

      document.body.classList.remove(
        'is-stage-sidebar-resizing',
      );
    };
  }, [isSidebarResizing]);

  const handleSidebarResizeStart = (event) => {
    if (window.innerWidth <= 1100) {
      return;
    }

    event.preventDefault();

    sidebarResizeStartX.current = event.clientX;
    sidebarResizeStartWidth.current = sidebarWidth;

    setIsSidebarResizing(true);
  };

  const handleSidebarResizeKeyDown = (event) => {
    if (window.innerWidth <= 1100) {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();

      setSidebarWidth((current) =>
        Math.min(SIDEBAR_MAX_WIDTH, current + 8),
      );
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();

      setSidebarWidth((current) =>
        Math.max(SIDEBAR_MIN_WIDTH, current - 8),
      );
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setSidebarWidth(SIDEBAR_MIN_WIDTH);
    }

    if (event.key === 'End') {
      event.preventDefault();
      setSidebarWidth(SIDEBAR_MAX_WIDTH);
    }
  };

  const handleNavigation = (index) => {
    setActiveIndex(index);
    setMobileNavigationOpen(false);

    const contentPanel = document.querySelector(
      '.stage-workspace-main-scroll',
    );

    if (contentPanel) {
      contentPanel.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const stageNumber = stage?.number || '01';
  const stageTitle = title || stage?.title || '';
  const stageColor = stage?.color || '#00e5f2';
  const stageIcon = stage?.icon || 'research';

  return (
    <main
      className="stage-workspace-page"
      style={{
        '--stage-color': stageColor,
        '--stage-sidebar-width': `${sidebarWidth}px`,
      }}
    >
      <div className="stage-workspace-background" />

      <header className="stage-workspace-topbar">
        <div className="stage-workspace-topbar-left">
          <button
            type="button"
            className="stage-workspace-back"
            onClick={onBack}
          >
            <span aria-hidden="true">←</span>
            Back to Full System
          </button>

          <div className="stage-workspace-breadcrumb">
            <button
              type="button"
              className="stage-workspace-breadcrumb-link"
              onClick={onBack}
            >
              Creative Strategy OP
            </button>

            <span>/</span>
            <strong>{stageTitle}</strong>
          </div>
        </div>

        <div className="stage-workspace-title">
          <span>
            STAGE {stageNumber} / {eyebrow || 'SYSTEM'}
          </span>

          <h1>{stageTitle}</h1>
        </div>

        {!singlePage && (
          <div className="stage-workspace-count">
            <strong>{stageSections.length}</strong>
            <span>Systems</span>
          </div>
        )}
      </header>

      {!singlePage && (
        <div className="stage-workspace-mobile-navigation">
          <button
            type="button"
            onClick={() =>
              setMobileNavigationOpen((current) => !current)
            }
          >
            <span>
              {activeNavigationItem?.number}{' '}
              {activeNavigationItem?.title}
            </span>

            <span aria-hidden="true">
              {mobileNavigationOpen ? '−' : '+'}
            </span>
          </button>
        </div>
      )}

      <div className={`stage-workspace-layout ${singlePage ? 'is-single-page' : ''}`}>
        {!singlePage && (
          <>
        <aside
          className={`stage-workspace-sidebar ${
            mobileNavigationOpen ? 'is-open' : ''
          }`}
        >
          <div className="stage-workspace-sidebar-heading">
            <span>STAGE SYSTEMS</span>
            <h2>Choose a section</h2>
          </div>

          <nav className="stage-workspace-navigation">
            {navigationItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  type="button"
                  className={`stage-workspace-nav-item ${
                    isActive ? 'is-active' : ''
                  }`}
                  key={item.id}
                  onClick={() => handleNavigation(index)}
                >
                  <span className="stage-workspace-nav-number">
                    {item.number}
                  </span>

                  <span className="stage-workspace-nav-icon">
                    <CreativeStrategyOPIcon
                      type={
                        item.type === 'sop'
                          ? 'research'
                          : stageIcon
                      }
                      size={17}
                    />
                  </span>

                  <span className="stage-workspace-nav-title">
                    {item.title}
                  </span>

                  <span
                    className="stage-workspace-nav-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          {process.length > 0 && (
            <div className="stage-workspace-sidebar-process">
              <span>STAGE FLOW</span>

              <div>
                {process.map((item, index) => (
                  <p key={`${item}-${index}`}>
                    <strong>
                      {String(index + 1).padStart(2, '0')}
                    </strong>

                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </aside>

        <div
          className={`stage-workspace-sidebar-resizer ${
            isSidebarResizing ? 'is-resizing' : ''
          }`}
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize stage navigation"
          aria-valuemin={SIDEBAR_MIN_WIDTH}
          aria-valuemax={SIDEBAR_MAX_WIDTH}
          aria-valuenow={Math.round(sidebarWidth)}
          tabIndex={0}
          onPointerDown={handleSidebarResizeStart}
          onKeyDown={handleSidebarResizeKeyDown}
        >
          <span aria-hidden="true" />
        </div>

          </>
        )}

        <section className="stage-workspace-main">
          <div className="stage-workspace-main-scroll">
            {!singlePage && (
            <div className="stage-workspace-active-summary">
              <div className="stage-workspace-active-icon">
                <CreativeStrategyOPIcon
                  type={
                    activeNavigationItem?.type === 'sop'
                      ? 'research'
                      : stageIcon
                  }
                  size={22}
                />
              </div>

              <div>
                <span>
                  {activeNavigationItem?.number}
                </span>

                <h2>{activeNavigationItem?.title}</h2>
              </div>

              <div className="stage-workspace-progress">
                <span>
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <small>/</small>

                <span>
                  {String(navigationItems.length).padStart(
                    2,
                    '0',
                  )}
                </span>
              </div>
            </div>

            )}

            <AnimatePresence mode="wait">
              {activeNavigationItem?.type === 'sop' ? (
                <StageSOPPanel
                  key="sop-library"
                  sops={sops}
                  outputs={outputs}
                  outputTitle={outputTitle}
                  sopDescription={sopDescription}
                />
              ) : (
                activeSection &&
                cloneElement(activeSection, {
                  key: activeNavigationItem?.id,
                })
              )}
            </AnimatePresence>
          </div>

          {!singlePage && (
          <footer className="stage-workspace-controls">
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() =>
                handleNavigation(activeIndex - 1)
              }
            >
              ← Previous
            </button>

            <span>
              {activeNavigationItem?.title}
            </span>

            <button
              type="button"
              disabled={
                activeIndex === navigationItems.length - 1
              }
              onClick={() =>
                handleNavigation(activeIndex + 1)
              }
            >
              Next →
            </button>
          </footer>
          )}
        </section>
      </div>
    </main>
  );
}