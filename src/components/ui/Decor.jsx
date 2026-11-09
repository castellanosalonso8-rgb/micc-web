/* Capas decorativas inspiradas en el flyer: puntos halftone, arcos concéntricos,
   anillos trazados a mano y un aro grande segmentado. Todas son SVG/CSS livianas. */

export const Halftone = ({ position = 'tl', className = '' }) => (
  <span className={`decor decor-halftone decor-halftone--${position} ${className}`} aria-hidden="true" />
);

export const ArcsCorner = ({ position = 'tl', className = '' }) => (
  <svg
    className={`decor decor-arcs decor-arcs--${position} ${className}`}
    viewBox="0 0 160 160"
    aria-hidden="true"
    focusable="false"
  >
    {[28, 46, 64, 82, 100, 118].map((r, i) => (
      <circle
        key={r}
        cx="0"
        cy="0"
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={i % 2 ? 1.4 : 2.2}
        strokeDasharray={i % 3 === 2 ? '120 14 40 14' : undefined}
      />
    ))}
  </svg>
);

export const BigRing = ({ position = 'r', className = '' }) => (
  <svg
    className={`decor decor-ring decor-ring--${position} ${className}`}
    viewBox="0 0 400 400"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="300 26 120 26 210 26 90 26" />
    <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="200" cy="200" r="132" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
  </svg>
);

/* Anillos blancos "trazados a mano" que rodean a los profes (como en el flyer). */
export const SketchRings = ({ className = '' }) => (
  <svg className={`sketch-rings ${className}`} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
    <ellipse className="sketch-rings__a" cx="200" cy="200" rx="188" ry="185" transform="rotate(-8 200 200)" />
    <ellipse className="sketch-rings__b" cx="200" cy="200" rx="181" ry="190" transform="rotate(14 200 200)" />
    <ellipse className="sketch-rings__c" cx="200" cy="200" rx="192" ry="178" transform="rotate(42 200 200)" />
  </svg>
);
