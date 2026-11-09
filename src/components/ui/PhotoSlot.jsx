import useImageStatus from '../../hooks/useImageStatus';
import { IconCamera } from './Icons';

/**
 * Espacio para una fotografía.
 * - Si la foto existe en public/images/, se muestra automáticamente.
 * - Si no, se ve un recuadro con la identidad de MICC que indica
 *   qué archivo hay que colocar.
 */
export default function PhotoSlot({
  photo,
  alt = '',
  className = '',
  compact = false,
  icon: Icon = IconCamera,
  children,
}) {
  const status = useImageStatus(photo?.src);
  const loaded = status === 'loaded';

  return (
    <div className={`photo-slot ${loaded ? 'has-image' : 'is-empty'} ${compact ? 'is-compact' : ''} ${className}`}>
      {loaded ? (
        <img src={photo.src} alt={alt} decoding="async" />
      ) : (
        <div className="photo-slot__placeholder">
          <Icon className="photo-slot__icon" />
          <span className="photo-slot__label">Foto pendiente</span>
          <code className="photo-slot__file">{photo?.file}</code>
          {!compact && photo?.hint && <span className="photo-slot__hint">{photo.hint}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
