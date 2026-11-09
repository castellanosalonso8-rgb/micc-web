import { getInstagramUrl, getWhatsAppUrl } from '../../utils/links';
import siteConfig from '../../config/siteConfig';
import { IconArrow, IconInstagram, IconWhatsApp } from './Icons';

/** Botón genérico con forma "deportiva" (paralelogramo). */
export function Button({ href, variant = 'primary', size = 'md', external = false, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={cls} href={href} {...props} {...rest}>
      <span className="btn__inner">{children}</span>
    </a>
  );
}

/**
 * Botón de WhatsApp. Arma el enlace con el número y el mensaje de siteConfig.js.
 * Si todavía no cargaste el número, lleva a la sección de contacto.
 */
export function WhatsAppButton({
  label = 'Reservar turno por WhatsApp',
  message,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const url = getWhatsAppUrl(message);
  return (
    <Button
      href={url || '#contacto'}
      external={Boolean(url)}
      variant={variant}
      size={size}
      className={`${url ? '' : 'is-pending'} ${className}`}
      data-cta="whatsapp"
      title={url ? undefined : 'Falta cargar el número de WhatsApp en siteConfig.js'}
    >
      <IconWhatsApp className="btn__icon" />
      {label}
    </Button>
  );
}

/** Botón de Instagram. Abre el perfil en una pestaña nueva. */
export function InstagramButton({ label, variant = 'ghost', size = 'md', className = '' }) {
  const url = getInstagramUrl();
  const text = label || siteConfig.instagram.username;
  return (
    <Button
      href={url || '#contacto'}
      external={Boolean(url)}
      variant={variant}
      size={size}
      className={`${url ? '' : 'is-pending'} ${className}`}
      data-cta="instagram"
      title={url ? undefined : 'Falta pegar el link de Instagram en siteConfig.js'}
    >
      <IconInstagram className="btn__icon" />
      {text}
    </Button>
  );
}

export { IconArrow };
