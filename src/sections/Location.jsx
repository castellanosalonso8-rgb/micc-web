import siteConfig from '../config/siteConfig';
import { getDirectionsUrl, getMapEmbedUrl, isPending } from '../utils/links';
import { IconArrow, IconPin } from '../components/ui/Icons';
import { Button } from '../components/ui/Buttons';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import DevNote from '../components/ui/DevNote';
import { BigRing, Halftone } from '../components/ui/Decor';

export default function Location() {
  const { general } = siteConfig;
  const hasAddress = !isPending(general.address);
  const directions = getDirectionsUrl();
  const embed = getMapEmbedUrl();

  return (
    <section id="ubicacion" className="section location" aria-labelledby="ubicacion-title">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="bl" />
        <BigRing position="r" />
      </div>
      <div className="container">
        <SectionHead id="ubicacion-title" eyebrow="Dónde encontrarnos" title="Ubicación" />

        <div className="location__grid">
          <Reveal className="location__info">
            <span className="location__pin">
              <IconPin />
            </span>
            <p className="location__barrio">
              Barrio
              <strong>{general.neighborhood}</strong>
            </p>
            <p className="location__city">
              {general.city}, {general.province}
            </p>
            <p className={`location__address ${hasAddress ? '' : 'is-muted'}`}>
              {hasAddress ? general.address : 'Dirección exacta próximamente.'}
              {!hasAddress && <DevNote>general.address</DevNote>}
            </p>

            {directions ? (
              <Button href={directions} external>
                Cómo llegar
                <IconArrow className="btn__icon" />
              </Button>
            ) : (
              <Button href="#contacto" className="is-pending" variant="ghost" title="Se activa al completar la dirección en siteConfig.js">
                Cómo llegar · próximamente
              </Button>
            )}
          </Reveal>

          <Reveal className="location__map" delay={120}>
            {embed ? (
              <iframe
                title={`Mapa de MICC en ${general.neighborhood}, ${general.city}`}
                src={embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="map-placeholder">
                <span className="map-placeholder__rings" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <IconPin />
                </span>
                <p>El mapa va a aparecer acá cuando se cargue la dirección exacta.</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
