/* ==========================================================================
   MICC · images.js
   --------------------------------------------------------------------------
   Acá están centralizadas TODAS las fotos de la web.

   CÓMO USARLO:
   1. Copiá tus fotos dentro de la carpeta  public/images/
   2. Ponéles EXACTAMENTE el nombre que figura abajo (en "file").
   3. Listo: se muestran solas. Mientras no exista el archivo, la web
      muestra un recuadro que indica qué foto colocar.

   Si querés usar otro nombre o formato (por ejemplo .png o .webp), cambiá
   solo el texto de "file" en la línea correspondiente.
   ========================================================================== */

const BASE = `${import.meta.env.BASE_URL}images/`;

const photo = (file, hint) => ({ file, src: `${BASE}${file}`, hint });

export const images = {
  // Logo de MICC (PNG con fondo transparente, ideal ancho). Si no existe,
  // se usa un logo tipográfico provisorio.
  logo: photo('logo.png', 'Logo de MICC (PNG transparente)'),

  // Portada: foto de Danila y Claudio (vertical o cuadrada, mejor si es con fondo limpio).
  hero: photo('hero.jpg', 'Foto principal de la portada'),

  // Profesores (la clave debe coincidir con el "id" de siteConfig.teachers).
  teachers: {
    danila: photo('profesora.jpg', 'Foto de la Profe Danila'),
    claudio: photo('profesor.jpg', 'Foto del Profe Claudio'),
  },

  // Instalaciones: podés sumar más líneas y aparecen solas en la galería.
  facilities: [
    photo('gimnasio-1.jpg', 'Foto del establecimiento'),
    photo('gimnasio-2.jpg', 'Foto del espacio de entrenamiento'),
    // photo('gimnasio-3.jpg', 'Otra foto del espacio'),
  ],

  // Actividades (la clave debe coincidir con el "id" de siteConfig.activities).
  activities: {
    musculacion: photo('musculacion.jpg', 'Foto de musculación'),
    localizada: photo('localizada.jpg', 'Foto de localizada'),
    zumba: photo('zumba.jpg', 'Foto de zumba'),
    folklore: photo('folklore.jpg', 'Foto de folklore'),
    'clases-grupales': photo('clases-grupales.jpg', 'Foto de clases grupales'),
  },
};

export default images;
