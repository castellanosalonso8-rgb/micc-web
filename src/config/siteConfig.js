/* ==========================================================================
   MICC · siteConfig.js
   --------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO DONDE TENÉS QUE COMPLETAR TUS DATOS.

   - Todo lo que dice '[COMPLETAR]' (o cualquier texto entre corchetes) está
     pendiente. Mientras siga entre corchetes, la web muestra un mensaje
     amable ("próximamente") y NO inventa nada.
   - Cuando lo reemplaces por tu dato real, aparece solo en toda la web.
   - Las fotos NO van acá: se ponen en la carpeta public/images/
     (los nombres de archivo están en src/config/images.js).
   - Mientras trabajás con `npm run dev` ves etiquetas amarillas
     "COMPLETAR" que te indican qué falta. En la versión publicada
     (`npm run build`) esas etiquetas no aparecen.
   ========================================================================== */

const siteConfig = {
  /* ------------------------------------------------------------------------
     1) INFORMACIÓN GENERAL
     ------------------------------------------------------------------------ */
  general: {
    name: 'MICC',
    tagline: 'Musculación Integral con Cardio',

    // Descripción del emprendimiento (se muestra en la portada).
    description: 'MICC es un espacio dedicado a la actividad física y el bienestar. Ofrecemos diferentes propuestas de entrenamiento y actividades para que cada persona pueda mantenerse activa, desarrollar su fuerza y disfrutar del movimiento. Contamos con musculación, localizada, zumba, folklore y clases grupales, en un ambiente donde el entrenamiento y la comunidad se encuentran.',

    // Frase principal / lema corto (se muestra arriba del título en la portada).
    mainPhrase: 'MOVIMIENTO, FUERZA Y BIENESTAR.',

    // Dirección exacta (calle y número). Cuando la completes, el mapa y el
    // botón "Cómo llegar" se activan automáticamente.
    address: 'Av. Jacinto Peralta Ramos 2143, Mar del Plata',

    neighborhood: 'Mirador de Peralta Ramos',
    city: 'Mar del Plata',
    province: 'Buenos Aires',
  },

  /* Textos que se usan SOLO mientras description / mainPhrase estén pendientes.
     Son los sugeridos en tu brief. Podés editarlos o ignorarlos. */
  suggestedTexts: {
    mainPhrase: 'Entrená, movete y superate.',
    description:
      'Encontrá tu espacio para mantenerte activo, desarrollar tu fuerza y disfrutar de la actividad física.',
  },

  /* ------------------------------------------------------------------------
     2) INSTAGRAM
     ------------------------------------------------------------------------ */
  instagram: {
    username: '@MICC.MDP',
    // Pegá acá el link completo del perfil, por ejemplo:
    // 'https://www.instagram.com/tu_usuario/'
    url: 'https://www.instagram.com/micc.mdp/?hl=es%2F',
  },

  /* ------------------------------------------------------------------------
     3) WHATSAPP
     ------------------------------------------------------------------------ */
  whatsapp: {
    // Número con código de país y característica, SOLO NÚMEROS, sin +, sin
    // espacios, sin guiones y sin el 15.
    // Ejemplo para Mar del Plata: '5492235123456'
    //   54 = Argentina · 9 = celular · 223 = característica · 5123456 = número
    number: '5492235719285',

    // Mensaje que se escribe solo cuando la persona toca el botón.
    message: '¡Hola! Quería consultar por las actividades y reservar un turno en MICC',
  },

  /* ------------------------------------------------------------------------
     4) MAPA (opcional)
     ------------------------------------------------------------------------
     Si completás general.address, el mapa y "Cómo llegar" se generan solos.
     Estos campos solo sirven si querés pegar tus propios enlaces de Google Maps. */
  map: {
    // Link de "Insertar un mapa" de Google Maps (solo la URL del src del iframe).
    embedUrl: 'https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1794180973586!5m2!1ses!2sar!6m8!1m7!1sh0fyi2lvHDeH9mtDlLqu_A!2m2!1d-38.03363945070232!2d-57.58898763754572!3f325.7825642414774!4f-7.685824506896566!5f0.7820865974627469',
    // Link de "Compartir" de Google Maps para el botón "Cómo llegar".
    directionsUrl: 'https://maps.app.goo.gl/XSqxEQ7xdTQUWqBf8',
  },

  /* ------------------------------------------------------------------------
     5) PROFESORES
     ------------------------------------------------------------------------
     La foto de cada profe va en public/images/ (profesora.jpg y profesor.jpg). */
  teachers: [
    {
      id: 'danila', // no cambiar: conecta con la foto en images.js
      name: 'Profe Danila',
      description: 'Forma parte del equipo MICC, acompañando a cada persona en su entrenamiento con compromiso, dedicación y buena energía.',
    },
    {
      id: 'claudio', // no cambiar: conecta con la foto en images.js
      name: 'Profe Claudio',
      description: 'Forma parte del equipo MICC, acompañando a cada persona en su entrenamiento con compromiso, dedicación y motivación. Promueve un ambiente donde la actividad física y el bienestar son protagonistas.',
    },
  ],

  /* ------------------------------------------------------------------------
     6) ACTIVIDADES
     ------------------------------------------------------------------------
     Cambiá solo el texto de "description" de cada una. */
  activities: [
    { id: 'musculacion', name: 'Musculación', description: 'Entrenamiento orientado al desarrollo de la fuerza, la resistencia y la masa muscular. Trabajá tu cuerpo, mejorá tu condición física y avanzá hacia tus objetivos a tu propio ritmo.'},
    { id: 'localizada', name: 'Localizada', description: 'Ejercicios específicos para trabajar diferentes grupos musculares mediante rutinas dinámicas. Mejorá tu fuerza, resistencia y control corporal.' },
    { id: 'zumba', name: 'Zumba', description: 'Una actividad que combina música, baile y ejercicio en clases llenas de energía. Movete, disfrutá de diferentes ritmos y mantenete activo mientras te divertís.' },
    { id: 'folklore', name: 'Folklore', description: 'Un espacio para disfrutar de nuestras danzas tradicionales, aprender sus pasos y expresarse a través de la música y el movimiento. Cultura, ritmo y encuentro en cada clase.' },
    { id: 'clases-grupales', name: 'Clases grupales', description: 'Entrenamientos compartidos en un ambiente dinámico y motivador. Disfrutá de la actividad física en grupo, compartí experiencias y encontrá motivación en cada encuentro.' },
  ],

  /* ------------------------------------------------------------------------
     7) HORARIOS
     ------------------------------------------------------------------------
     Agregá una línea por cada clase o turno. Copiá este modelo (sin las //):

       { day: 'Lunes', time: '18:00 a 19:00', activity: 'Zumba', teacher: 'Profe Danila' },

     - day: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo
     - time: el horario como quieras mostrarlo
     - activity: el nombre de la actividad
     - teacher: quién la da (podés dejarlo vacío: '')

     Se ordenan solos por día. Mientras la lista esté vacía, la web muestra
     el cuadro de horarios con el aviso "próximamente". */
  schedule: [
    // { day: 'Lunes', time: '[COMPLETAR]', activity: '[COMPLETAR]', teacher: '[COMPLETAR]' },

  { day: 'Lunes', time: '19:30', activity: 'MICC', teacher: '' },

  { day: 'Martes', time: '17:30', activity: 'MICC', teacher: '' },
  { day: 'Martes', time: '18:30', activity: 'AMRAP', teacher: '' },

  { day: 'Miércoles', time: '18:00', activity: 'RITMOS', teacher: '' },
  { day: 'Miércoles', time: '19:00', activity: 'FIT BALL', teacher: '' },

  { day: 'Jueves', time: '17:30', activity: 'MICC', teacher: '' },
  { day: 'Jueves', time: '18:30', activity: 'HIIT', teacher: '' },

  { day: 'Viernes', time: '19:30', activity: 'MICC', teacher: '' },

  ],
};

export default siteConfig;
