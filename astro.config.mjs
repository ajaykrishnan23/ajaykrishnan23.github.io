// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real GitHub Pages URL (https://<username>.github.io)
export default defineConfig({
  site: 'https://ajaykrish.github.io',
  integrations: [mdx(), sitemap()],
  // keep the spaces between inline text and links
  compressHTML: false,
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
