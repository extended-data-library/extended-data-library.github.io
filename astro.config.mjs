// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Extended Data',
			tagline: 'Data infrastructure that scales',
			customCss: ['./src/styles/custom.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/extended-data-library/extended-data-library.github.io',
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ label: 'Guide', slug: 'getting-started' }],
				},
				{
					label: 'Vendor Connectors API',
					autogenerate: { directory: 'api' },
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'usage' },
				},
				{
					label: 'Core',
					autogenerate: { directory: 'core' },
				},
				{
					label: 'Packages',
					autogenerate: { directory: 'packages' },
				},
			],
		}),
	],
});
