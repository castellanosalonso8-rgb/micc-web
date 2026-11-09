/**
 * Etiqueta amarilla que SOLO aparece mientras trabajás con `npm run dev`.
 * Te marca qué dato falta completar y dónde. En la web publicada no se ve.
 */
export default function DevNote({ children }) {
  if (!import.meta.env.DEV) return null;
  return (
    <span className="dev-note" role="note">
      COMPLETAR · {children}
    </span>
  );
}
