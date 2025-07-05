import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import relativeLinks from 'astro-relative-links';

export default defineConfig({
  base: '',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["9fda-191-104-198-143.ngrok-free.app"]
    }
  },
  integrations: [react(), relativeLinks()]
});