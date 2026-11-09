import { getWhatsAppUrl } from '../utils/links';
import { IconWhatsApp } from '../components/ui/Icons';

/** Botón flotante de WhatsApp, siempre al alcance del pulgar en el celular. */
export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl();
  return (
    <a
      className="fab"
      href={url || '#contacto'}
      {...(url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label="Reservar turno por WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
