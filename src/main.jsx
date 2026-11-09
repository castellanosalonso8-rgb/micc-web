import React from 'react';
import { createRoot } from 'react-dom/client';

// Tipografías deportivas (instaladas localmente, no dependen de Google Fonts)
import '@fontsource/barlow-condensed/700-italic.css';
import '@fontsource/barlow-condensed/800-italic.css';
import '@fontsource/barlow-condensed/900-italic.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';
import '@fontsource/orbitron/500.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/800.css';

import './styles/tokens.css';
import './styles/base.css';
import './styles/ui.css';
import './styles/sections.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
