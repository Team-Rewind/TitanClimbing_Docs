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
			customCss: ['./src/styles/titan-theme.css'],
			components: {
				ThemeProvider: './src/components/FixedDarkTheme.astro',
				ThemeSelect: './src/components/NoThemeSelect.astro',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', slug: '' },
						{
							label: 'Setup Guide',
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
