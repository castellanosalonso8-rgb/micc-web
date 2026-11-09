import Reveal from './Reveal';

/** Encabezado estándar de cada sección. */
export default function SectionHead({ eyebrow, title, lead, align = 'left', id }) {
  return (
    <Reveal as="header" className={`section-head section-head--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}
