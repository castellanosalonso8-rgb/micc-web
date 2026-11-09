import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' hace que el sitio funcione en cualquier hosting (raíz o subcarpeta).
export default defineConfig({
  base: './',
  plugins: [react()],
});
