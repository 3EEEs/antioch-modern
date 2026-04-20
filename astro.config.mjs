import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  adapter: netlify(),
  
  // ADDED: Instant redirect from /admin to the CMS
  redirects: {
    '/admin': '/keystatic'
  }
});