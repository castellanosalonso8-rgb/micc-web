import images from '../../config/images';
import siteConfig from '../../config/siteConfig';
import useImageStatus from '../../hooks/useImageStatus';
import { SealIcon } from './Icons';

/**
 * Logo de MICC.
 * - Si existe public/images/logo.png, se usa ese archivo.
 * - Si no, se muestra una versión tipográfica provisoria (sello + MICC).
 */
export default function Logo({ size = 'md', showTagline = false, className = '' }) {
  const status = useImageStatus(images.logo.src);

  if (status === 'loaded') {
    return (
      <span className={`logo logo--image logo--${size} ${className}`}>
        <img src={images.logo.src} alt={siteConfig.general.name} />
      </span>
    );
  }

  return (
    <span className={`logo logo--${size} ${className}`}>
      <SealIcon className="logo__seal" />
      <span className="logo__text">
        <span className="logo__word">{siteConfig.general.name}</span>
        {showTagline && <span className="logo__tagline">{siteConfig.general.tagline}</span>}
      </span>
    </span>
  );
}
