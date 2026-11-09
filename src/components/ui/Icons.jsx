/* Íconos propios de MICC (SVG, trazo consistente). */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M7.5 12.5l3 3 6-7" />
  </svg>
);

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const IconInstagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const IconWhatsApp = (p) => (
  <svg {...base} {...p}>
    <path d="M3.5 20.5l1.3-4.4A8.5 8.5 0 1 1 8 19.3z" />
    <path d="M9 8.6c.2 2.7 2.5 5.1 5.3 5.6.7.1 1.5-.5 1.6-1.2l-1.8-1-.9.7c-1-.4-1.9-1.3-2.3-2.3l.7-.9-1-1.8c-.7.1-1.4.9-1.6 1.7z" />
  </svg>
);

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconCamera = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h3l1.6-2.4h6.8L17 8h3v11H4z" />
    <circle cx="12" cy="13" r="3.4" />
  </svg>
);

export const IconUser = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.8" />
    <path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

/* ---- Íconos de actividades ---- */
export const IconDumbbell = (p) => (
  <svg {...base} {...p}>
    <path d="M3 9.5v5M6 7v10M18 7v10M21 9.5v5M6 12h12" />
  </svg>
);

export const IconTarget = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

export const IconMusic = (p) => (
  <svg {...base} {...p}>
    <path d="M9 18V6l10-2v12" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
  </svg>
);

export const IconDrum = (p) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="7.5" rx="8" ry="3" />
    <path d="M4 7.5v8.5c0 1.7 3.6 3 8 3s8-1.3 8-3V7.5" />
    <path d="M6.5 10l3 7.5M17.5 10l-3 7.5M12 10.5v8" />
  </svg>
);

export const IconGroup = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="7.5" r="3" />
    <circle cx="5" cy="10" r="2.3" />
    <circle cx="19" cy="10" r="2.3" />
    <path d="M6.5 20c.4-3.6 2.6-5.5 5.5-5.5s5.1 1.9 5.5 5.5M1.8 18c.3-2.4 1.6-3.8 3.4-4M22.2 18c-.3-2.4-1.6-3.8-3.4-4" />
  </svg>
);

export const activityIcons = {
  musculacion: IconDumbbell,
  localizada: IconTarget,
  zumba: IconMusic,
  folklore: IconDrum,
  'clases-grupales': IconGroup,
};

/* ---- Sello turquesa de MICC: corazón + mancuerna ---- */
export const SealIcon = ({ className = '', title }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    role={title ? 'img' : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    focusable="false"
  >
    <circle cx="50" cy="50" r="50" fill="#40ACAE" />
    <path
      d="M50 79C19 57 12 38 25 27c10-8 21-2 25 7 4-9 15-15 25-7 13 11 6 30-25 52z"
      fill="none"
      stroke="#fff"
      strokeWidth="4.2"
      strokeLinejoin="round"
    />
    <g transform="rotate(-42 50 52)" fill="#fff">
      <rect x="29" y="49.2" width="42" height="3.6" rx="1.8" />
      <rect x="27" y="43" width="5" height="16" rx="2" />
      <rect x="33.5" y="45" width="4" height="12" rx="1.6" />
      <rect x="68" y="43" width="5" height="16" rx="2" />
      <rect x="62.5" y="45" width="4" height="12" rx="1.6" />
    </g>
  </svg>
);
