import siteConfig from '../config/siteConfig';
import images from '../config/images';
import { isPending } from '../utils/links';
import { SealIcon, IconCheck, IconArrow, IconUser } from '../components/ui/Icons';
import { WhatsAppButton, Button } from '../components/ui/Buttons';
import PhotoSlot from '../components/ui/PhotoSlot';
import Reveal from '../components/ui/Reveal';
import DevNote from '../components/ui/DevNote';
import { ArcsCorner, BigRing, Halftone, SketchRings } from '../components/ui/Decor';

export default function Hero() {
  const { general, suggestedTexts, activities } = siteConfig;
  const mainPhrase = isPending(general.mainPhrase) ? suggestedTexts.mainPhrase : general.mainPhrase;
  const description = isPending(general.description) ? suggestedTexts.description : general.description;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <Halftone position="tl" />
        <Halftone position="br" />
        <ArcsCorner position="tl" />
        <ArcsCorner position="bl" />
        <BigRing position="r" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="hero__kicker">
            {mainPhrase}
            {isPending(general.mainPhrase) && <DevNote>general.mainPhrase</DevNote>}
          </Reveal>

          <Reveal as="h1" id="hero-title" className="hero__title" delay={80}>
            <span className="hero__brand-row">
              <span className="hero__brand">{general.name}</span>
              <SealIcon className="hero__seal" />
            </span>
            <span className="hero__sub">
              <span>Musculación</span>
              <span>Integral con</span>
              <span>Cardio</span>
            </span>
          </Reveal>

          <Reveal as="p" className="hero__intro" delay={160}>
            {description}
            {isPending(general.description) && <DevNote>general.description</DevNote>}
          </Reveal>

          <Reveal className="hero__actions" delay={240}>
            <WhatsAppButton label="Reservar turno" />
            <Button href="#actividades" variant="ghost">
              Conocé las actividades
              <IconArrow className="btn__icon" />
            </Button>
          </Reveal>

          <Reveal as="ul" className="hero__list" delay={320} aria-label="Actividades">
            {activities.map((a) => (
              <li key={a.id}>
                <IconCheck />
                <a href="#actividades">{a.name}</a>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={140}>
          <div className="ring-photo">
            <SketchRings />
            <PhotoSlot
              photo={images.hero}
              alt="Profe Danila y Profe Claudio, de MICC"
              icon={IconUser}
              className="ring-photo__img"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
