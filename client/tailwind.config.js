/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,sass}'],
	theme: {
		extend: {
			colors: {
				'retro-backdrop': '#E1EACD',
				'retro-border': '#86A788',
				'retro-shadow': '#BAD8B6',
				'retro-darker': '#384D39',
			},
		},
	},
	plugins: [],
};
