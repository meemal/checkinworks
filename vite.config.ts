import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        programmes: resolve(__dirname, 'programmes.html'),
        'annual-reports': resolve(__dirname, 'annual-reports.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        accessibility: resolve(__dirname, 'accessibility.html'),
      },
    },
  },
});
