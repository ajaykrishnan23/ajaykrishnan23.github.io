// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ajaykrishnan23.github.io',
  integrations: [mdx(), sitemap()],
  // keep the spaces between inline text and links
  compressHTML: false,
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
