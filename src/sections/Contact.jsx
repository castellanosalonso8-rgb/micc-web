import siteConfig from '../config/siteConfig';
import { getInstagramUrl, getWhatsAppUrl, isPending } from '../utils/links';
import { IconInstagram, IconPin, IconWhatsApp } from '../components/ui/Icons';
import { InstagramButton, WhatsAppButton } from '../components/ui/Buttons';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import DevNote from '../components/ui/DevNote';
import { ArcsCorner, BigRing, Halftone } from '../components/ui/Decor';

export default function Contact() {
  const { general, instagram } = siteConfig;
  const hasWhatsApp = Boolean(getWhatsAppUrl());
  const hasInstagram = Boolean(getInstagramUrl());

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-title">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="tr" />
        <ArcsCorner position="bl" />
        <BigRing position="l" />
      </div>
      <div className="container">
        <SectionHead
          id="contacto-title"
          eyebrow="Escribinos"
          title="Reservá tu turno"
          lead="Consultanos por las actividades y reservá tu lugar."
          align="center"
        />

        <div className="contact__grid">
          <Reveal className="contact-card contact-card--main">
            <span className="contact-card__icon">
              <IconWhatsApp />
            </span>
            <h3>WhatsApp</h3>
            <p>
              {hasWhatsApp
                ? 'Tocá el botón y se abre el chat con el mensaje listo para enviar.'
                : 'El botón de WhatsApp se activa cuando se cargue el número.'}
              {!hasWhatsApp && <DevNote>whatsapp.number</DevNote>}
            </p>
            <WhatsAppButton label="Reservar turno" size="lg" />
          </Reveal>

          <Reveal className="contact-card" delay={100}>
            <span className="contact-card__icon">
              <IconInstagram />
            </span>
            <h3>Instagram</h3>
            <p>
              {instagram.username}
              {!hasInstagram && <DevNote>instagram.url</DevNote>}
            </p>
            <InstagramButton label="Ver perfil" />
          </Reveal>

          <Reveal className="contact-card" delay={200}>
            <span className="contact-card__icon">
              <IconPin />
            </span>
            <h3>Ubicación</h3>
            <p>
              Barrio {general.neighborhood}
              <br />
              {general.city}, {general.province}
              {!isPending(general.address) && (
                <>
                  <br />
                  {general.address}
                </>
              )}
            </p>
            <a className="contact-card__link" href="#ubicacion">
              Ver en el mapa →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
