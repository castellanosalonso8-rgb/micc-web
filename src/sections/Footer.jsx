import siteConfig from '../config/siteConfig';
import sections from '../config/sections';
import { getInstagramUrl, getWhatsAppUrl, isPending } from '../utils/links';
import Logo from '../components/ui/Logo';
import { IconInstagram, IconPin, IconWhatsApp } from '../components/ui/Icons';
import { Halftone } from '../components/ui/Decor';

export default function Footer() {
  const { general, instagram } = siteConfig;
  const wa = getWhatsAppUrl();
  const ig = getInstagramUrl();
  const external = { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <footer className="footer">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="tr" />
      </div>
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size="lg" showTagline />
        </div>

        <nav className="footer__col" aria-label="Pie de página">
          <h4>Secciones</h4>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href={wa || '#contacto'} {...(wa ? external : {})}>
                <IconWhatsApp /> WhatsApp
              </a>
            </li>
            <li>
              <a href={ig || '#contacto'} {...(ig ? external : {})}>
                <IconInstagram /> {instagram.username}
              </a>
            </li>
            <li>
              <a href="#ubicacion">
                <IconPin /> {general.neighborhood}
              </a>
            </li>
            <li className="footer__muted">
              {general.city}, {general.province}
              {!isPending(general.address) && ` · ${general.address}`}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {general.name} · {general.tagline}
        </span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
