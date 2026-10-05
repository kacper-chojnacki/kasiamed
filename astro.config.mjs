// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './site.config.mjs';

export default defineConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  // Astro's HTML compression drops whitespace between text and inline tags on a new line.
  compressHTML: false,
  markdown: { syntaxHighlight: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/dziekujemy/') })],
  vite: {
    plugins: [tailwindcss()],
    // Never inline assets as data: URIs, so the strict CSP (font-src 'self') holds.
    build: { assetsInlineLimit: 0 },
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.web3forms.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
