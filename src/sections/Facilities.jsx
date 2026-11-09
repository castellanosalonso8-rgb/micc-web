import images from '../config/images';
import PhotoSlot from '../components/ui/PhotoSlot';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Halftone } from '../components/ui/Decor';

export default function Facilities() {
  return (
    <section id="instalaciones" className="section facilities" aria-labelledby="instalaciones-title">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="tr" />
      </div>
      <div className="container">
        <SectionHead
          id="instalaciones-title"
          eyebrow="Nuestro espacio"
          title="Instalaciones"
          lead="Conocé el lugar donde entrenamos."
        />

        <div className="facilities__grid">
          {images.facilities.map((photo, i) => (
            <Reveal key={photo.file} delay={i * 100} className="facilities__item">
              <PhotoSlot photo={photo} alt={`Instalaciones de MICC, foto ${i + 1}`} className="facilities__photo" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
