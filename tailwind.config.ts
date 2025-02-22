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
				primary2: '#CBACFA',

				second: '#FFF7DF',
				slate50: '#F1F4FB',
				stone400: '#5C5C5C',
				dark: '#1C1D21',
				lightdark: '#333437',
			},

			keyframes: {
				shine: {
					'0%': { backgroundPositionX: '200%' },
					'100%': { backgroundPositionX: '-200%' },
				},
			},
			animation: {
				shine: 'shine 2s linear infinite',
			},

			backgroundImage: ({ theme }) => ({
				'gradient-primary': `linear-gradient(to right, ${theme('colors.primary')}, ${theme(
					'colors.primary2'
				)})`,
				'gradient-stone': 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
			}),
		},
	},
	plugins: [],
} satisfies Config
