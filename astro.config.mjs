import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://evandwatanabe.github.io',
  base: '/evanwatanabe.com',
  integrations: [tailwind()]
});
