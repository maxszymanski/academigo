import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'bg-white': '#ffff',
				primary: '#925FE2',
				primary2: '#DFCFF7',
				primary3: '#925FE2',
				second: '#FFF7DF',
				slate50: '#FEFEFF',
				stone400: '#5C5C5C',
			},
			backgroundImage: theme => ({
				'gradient-primary': `linear-gradient(to right, ${theme('colors.primary')}, ${theme(
					'colors.primary2'
				)})`,
			}),
		},
	},
	plugins: [],
} satisfies Config
