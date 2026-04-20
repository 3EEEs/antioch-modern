import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  // React and Keystatic are standard Astro integrations
  integrations: [react(), keystatic()],
  
  // Tailwind v4 runs as a Vite plugin
  vite: {
    plugins: [tailwindcss()]
  },
  
  output: 'static',
});