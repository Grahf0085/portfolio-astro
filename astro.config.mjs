// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  server: {port: 3000, host: true},
  adapter: netlify({
    edgeMiddleware: true
  })
});
