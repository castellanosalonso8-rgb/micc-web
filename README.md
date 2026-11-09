# MICC · Musculación Integral con Cardio

Landing page hecha con React + Vite.

## Cómo verla en tu computadora

```bash
npm install
npm run dev      # abre la web en http://localhost:5173 (con etiquetas "COMPLETAR")
npm run build    # genera la carpeta dist/ lista para publicar
```

## Qué completar

| Qué | Dónde |
| --- | --- |
| Textos, dirección, Instagram, WhatsApp, profes, actividades, horarios | `src/config/siteConfig.js` |
| Fotos | carpeta `public/images/` (nombres en `src/config/images.js`) |
| Colores | `src/styles/tokens.css` |

Todo lo que dice `[COMPLETAR]` está pendiente: la web muestra un aviso amable y no inventa nada.

## Estructura

```
src/
  config/      siteConfig.js · images.js · sections.js
  sections/    Header, Hero, Activities, Teachers, Facilities, Schedule, Location, Contact, Footer
  components/ui/  Logo, PhotoSlot, Buttons, Decor, Reveal...
  styles/      tokens.css · base.css · ui.css · sections.css
```
