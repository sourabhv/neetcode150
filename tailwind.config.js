/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				hue: {
					'0%': {
						filter: 'hue-rotate(0deg)'
					},
					'100%': {
						filter: 'hue-rotate(360deg)'
					}
				}
			},
			animation: {
				hue: 'hue 4s infinite linear'
			}
		}
	},
	plugins: []
};
