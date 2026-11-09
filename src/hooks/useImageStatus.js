import { useEffect, useState } from 'react';

/**
 * Verifica si una imagen existe y se puede mostrar.
 * Devuelve 'loading' | 'loaded' | 'error'.
 * Así, al copiar una foto a public/images/ aparece sola, sin tocar el código.
 */
export default function useImageStatus(src) {
  const [status, setStatus] = useState(src ? 'loading' : 'error');

  useEffect(() => {
    if (!src) {
      setStatus('error');
      return undefined;
    }
    let alive = true;
    setStatus('loading');
    const img = new Image();
    img.onload = () => alive && setStatus('loaded');
    img.onerror = () => alive && setStatus('error');
    img.src = src;
    return () => {
      alive = false;
    };
  }, [src]);

  return status;
}
