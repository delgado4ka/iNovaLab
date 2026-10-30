// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH is set by the GitHub Pages workflow (site served under /iNovaLab/).
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  base,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});