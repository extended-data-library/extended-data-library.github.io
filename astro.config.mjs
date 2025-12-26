// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://extendeddata.dev',
  integrations: [
    starlight({
      title: 'Extended Data',
      tagline: 'Enterprise Python Infrastructure',
      customCss: ['./src/styles/custom.css'],
      logo: {
        src: './src/assets/houston.webp',
        alt: 'Extended Data',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/extended-data-library' },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Extended Data - Enterprise Python Infrastructure',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'Battle-tested Python utilities for serialization, input handling, logging, and vendor integrations.',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started' },
          ],
        },
        {
          label: 'Core Library',
          items: [
            { label: 'Extended Data Types', slug: 'core/data-types' },
          ],
        },
        {
          label: 'Packages',
          items: [
            { label: 'Overview', slug: 'packages' },
            { label: 'Directed Inputs', slug: 'packages/inputs' },
            { label: 'Lifecycle Logging', slug: 'packages/logging' },
          ],
        },
        {
          label: 'Vendor Connectors',
          items: [
            { label: 'API Reference', slug: 'api/vendor-connectors' },
          ],
        },
        {
          label: 'Enterprise',
          items: [
            { label: 'jbcom Hub', link: 'https://jbcom.github.io', attrs: { target: '_blank' } },
            { label: 'Agentic (AI)', link: 'https://agentic.dev', attrs: { target: '_blank' } },
            { label: 'Strata (Games)', link: 'https://strata.game', attrs: { target: '_blank' } },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/extended-data-library/extended-data-library.github.io/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
});
