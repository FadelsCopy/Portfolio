// src/components/CreativeStrategyOPIcon.jsx

export default function CreativeStrategyOPIcon({
  type,
  size = 20,
  className = '',
}) {
  const sharedProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  const icons = {
    foundation: (
      <svg {...sharedProps}>
        <path d="M4 20h16" />
        <path d="M6 20V9l6-5 6 5v11" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),

    research: (
      <svg {...sharedProps}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5" />
        <path d="M8 10.5h5" />
        <path d="M10.5 8v5" />
      </svg>
    ),

    insights: (
      <svg {...sharedProps}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.2 14 16 14 17h-4c0-1-.5-1.8-1.5-2.5Z" />
      </svg>
    ),

    personas: (
      <svg {...sharedProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.4-4 2.3-6 5.5-6s5.1 2 5.5 6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M15.5 14.5c3.2.2 4.8 2 5 5.5" />
      </svg>
    ),

    angles: (
      <svg {...sharedProps}>
        <path d="M4 19 19 4" />
        <path d="M10 4h9v9" />
        <path d="M4 10v9h9" />
      </svg>
    ),

    validation: (
      <svg {...sharedProps}>
        <path d="M5 12.5 9.2 17 19 7" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),

    concepts: (
      <svg {...sharedProps}>
        <path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" />
      </svg>
    ),

    mvp: (
      <svg {...sharedProps}>
        <path d="m5 19 3-7 4 4 3-8 4 11" />
        <path d="M4 20h16" />
      </svg>
    ),

    briefing: (
      <svg {...sharedProps}>
        <path d="M7 3h10v4H7z" />
        <path d="M5 5h14v16H5z" />
        <path d="M8 11h8" />
        <path d="M8 15h6" />
      </svg>
    ),

    production: (
      <svg {...sharedProps}>
        <path d="m14 4 6 6-10 10H4v-6Z" />
        <path d="m13 5 6 6" />
      </svg>
    ),

    launch: (
      <svg {...sharedProps}>
        <path d="M14 4c3 0 5-1 6-2 0 5-1 8-4 11l-4 4-5-5 4-4c1-1 2-2 3-4Z" />
        <path d="M8 13 4 14l-2 4 6-1" />
        <path d="m11 16-1 6 4-2 1-4" />
        <circle cx="15" cy="7" r="1.5" />
      </svg>
    ),

    analysis: (
      <svg {...sharedProps}>
        <path d="M4 19h16" />
        <path d="m6 16 4-5 3 3 5-7" />
        <path d="M18 7h-4" />
        <path d="M18 7v4" />
      </svg>
    ),

    decision: (
      <svg {...sharedProps}>
        <path d="M12 3v5" />
        <path d="M12 8 6 14" />
        <path d="M12 8l6 6" />
        <path d="M6 14v7" />
        <path d="M18 14v7" />
      </svg>
    ),

    iteration: (
      <svg {...sharedProps}>
        <path d="M20 7h-6V1" />
        <path d="M20 7a8 8 0 1 0 1 8" />
      </svg>
    ),

    scaling: (
      <svg {...sharedProps}>
        <path d="M4 20V10" />
        <path d="M10 20V6" />
        <path d="M16 20V3" />
        <path d="M3 20h18" />
      </svg>
    ),

    newConcepts: (
      <svg {...sharedProps}>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.9 4.9 7.7 7.7" />
        <path d="m16.3 16.3 2.8 2.8" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.9 19.1 2.8-2.8" />
        <path d="m16.3 7.7 2.8-2.8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),

    operations: (
      <svg {...sharedProps}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="m8.3 7.2 2.8 7.8" />
        <path d="m15.7 7.2-2.8 7.8" />
        <path d="M8.5 6h7" />
      </svg>
    ),

    knowledge: (
      <svg {...sharedProps}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z" />
      </svg>
    ),

    reddit: (
      <svg {...sharedProps}>
        <circle cx="12" cy="13" r="7" />
        <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
        <path d="M9 15c1.7 1.2 4.3 1.2 6 0" />
        <path d="m14 6 1-3 3 1" />
        <circle cx="19" cy="7" r="1.5" />
        <circle cx="5" cy="7" r="1.5" />
      </svg>
    ),

    amazon: (
      <svg {...sharedProps}>
        <path d="M7 9c0-3 2-4 5-4 3.5 0 5 1.6 5 4v8" />
        <path d="M17 13c-3.5 0-7 .5-7 3 0 1.3 1 2 2.4 2 2 0 3.6-1.4 4.6-3" />
        <path d="M5 20c4.5 2 9.5 2 14 0" />
      </svg>
    ),

    trustpilot: (
      <svg {...sharedProps}>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9Z" />
      </svg>
    ),

    meta: (
      <svg {...sharedProps}>
        <path d="M3 16c2-8 4-10 6-10 3 0 4 12 7 12 2 0 3-3 5-10" />
        <path d="M21 16c-2-8-4-10-6-10-3 0-4 12-7 12-2 0-3-3-5-10" />
      </svg>
    ),

    tiktok: (
      <svg {...sharedProps}>
        <path d="M14 3v11.5a4.5 4.5 0 1 1-4-4.47" />
        <path d="M14 3c1 3 3 4 6 4" />
      </svg>
    ),

    youtube: (
      <svg {...sharedProps}>
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="m10 9 5 3-5 3Z" />
      </svg>
    ),

    instagram: (
      <svg {...sharedProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),

    foreplay: (
      <svg {...sharedProps}>
        <path d="M5 4h14v16H5z" />
        <path d="m9 9 6 3-6 3Z" />
      </svg>
    ),

    arrowRight: (
      <svg {...sharedProps}>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),

    close: (
      <svg {...sharedProps}>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </svg>
    ),

    external: (
      <svg {...sharedProps}>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v6H4V4h6" />
      </svg>
    ),
  };

  return icons[type] || icons.foundation;
}