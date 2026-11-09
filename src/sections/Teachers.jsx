import siteConfig from '../config/siteConfig';
import images from '../config/images';
import { isPending } from '../utils/links';
import { IconUser } from '../components/ui/Icons';
import PhotoSlot from '../components/ui/PhotoSlot';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import DevNote from '../components/ui/DevNote';
import { ArcsCorner, BigRing, Halftone, SketchRings } from '../components/ui/Decor';

export default function Teachers() {
  const { teachers } = siteConfig;

  return (
    <section id="profesores" className="section teachers" aria-labelledby="profesores-title">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="bl" />
        <ArcsCorner position="tr" />
        <BigRing position="l" />
      </div>
      <div className="container">
        <SectionHead
          id="profesores-title"
          eyebrow="Quiénes están detrás de MICC"
          title="Conocé a los profes"
          lead="Dos profesores presentes en cada paso de tu entrenamiento."
          align="center"
        />

        <div className="teachers__grid">
          {teachers.map((teacher, i) => {
            const pending = isPending(teacher.description);
            return (
              <Reveal
                as="article"
                key={teacher.id}
                delay={i * 120}
                className={`teacher teacher--${i % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="ring-photo ring-photo--teacher">
                  <SketchRings />
                  <PhotoSlot
                    photo={images.teachers[teacher.id]}
                    alt={teacher.name}
                    icon={IconUser}
                    className="ring-photo__img"
                  />
                </div>
                <div className="teacher__tag">
                  <h3 className="teacher__name">{teacher.name}</h3>
                  <span className="teacher__line" aria-hidden="true" />
                </div>
                <p className={`teacher__text ${pending ? 'is-muted' : ''}`}>
                  {pending ? `Muy pronto vas a conocer más sobre ${teacher.name.replace(/^Profe\s+/i, '')}.` : teacher.description}
                  {pending && <DevNote>teachers → {teacher.id}</DevNote>}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
