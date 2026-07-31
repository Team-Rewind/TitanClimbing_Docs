// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Titan Climbing',
			description: 'Documentation for the Titan Climbing Unreal Engine plugin.',
			sidebar: [
				{
					label: 'Overview',
					items: [
						{
							label: 'Get Started',
							items: [{ autogenerate: { directory: 'get-started' } }],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API', slug: 'api' },
						{ label: 'FAQ', slug: 'faq' },
					],
				},
			],
		}),
	],
});
