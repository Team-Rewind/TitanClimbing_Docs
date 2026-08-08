// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://team-rewind.github.io',
	base: '/TitanClimbing_Docs',
	integrations: [
		starlight({
			title: 'Titan Climbing',
			description: 'Documentation for the Titan Climbing Unreal Engine plugin.',
			sidebar: [
				{
					label: 'Overview',
					items: [
						{
							label: 'How to use',
							items: [{ autogenerate: { directory: 'get-started' } }],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'API',
							items: [
								{ label: 'Overview', slug: 'api' },
								{ autogenerate: { directory: 'api' } },
							],
						},
						{ label: 'FAQ', slug: 'faq' },
					],
				},
			],
		}),
	],
});
