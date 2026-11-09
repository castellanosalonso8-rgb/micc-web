import siteConfig from '../config/siteConfig';

/** Un dato está "pendiente" si está vacío o entre corchetes, ej. '[COMPLETAR]'. */
export const isPending = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && (value.trim() === '' || /^\[.*\]$/.test(value.trim())));

/** Devuelve el valor real o el texto alternativo si está pendiente. */
export const valueOr = (value, fallback = null) => (isPending(value) ? fallback : value);

const { general, whatsapp, instagram, map } = siteConfig;

/** Enlace de WhatsApp armado con el número y el mensaje de siteConfig. null si falta el número. */
export function getWhatsAppUrl(message = whatsapp.message) {
  if (isPending(whatsapp.number)) return null;
  const digits = String(whatsapp.number).replace(/\D/g, '');
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Enlace del perfil de Instagram. null si falta pegar el link. */
export function getInstagramUrl() {
  return isPending(instagram.url) ? null : instagram.url.trim();
}

/** Dirección completa para buscar en mapas. null si falta la dirección exacta. */
export function getFullAddress() {
  if (isPending(general.address)) return null;
  return [general.address, general.neighborhood, general.city, general.province]
    .filter(Boolean)
    .join(', ');
}

/** Botón "Cómo llegar". */
export function getDirectionsUrl() {
  if (!isPending(map.directionsUrl)) return map.directionsUrl.trim();
  const full = getFullAddress();
  return full
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(full)}`
    : null;
}

/** Mapa incrustado. */
export function getMapEmbedUrl() {
  if (!isPending(map.embedUrl)) return map.embedUrl.trim();
  const full = getFullAddress();
  return full ? `https://www.google.com/maps?q=${encodeURIComponent(full)}&output=embed` : null;
}
