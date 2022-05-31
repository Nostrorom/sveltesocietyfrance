const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: 'Overpass'
				// 'sans': ['Inter', ...defaultTheme.fontFamily.sans],
			}
		},
		colors: {
			svelte: {
				50: '#FEF2EB',
				100: '#FEE7DC',
				200: '#FECBB4',
				300: '#FDAC87',
				400: '#FA7F52',
				500: '#F55C29',
				600: '#FF3E00',
				700: '#BE2F13',
				800: '#982916',
				900: '#7E2616'
			},
			white: colors.white,
			black: colors.black,
			red: colors.red,
			blue: colors.blue,
			cyan: colors.cyan,
			sky: colors.sky,
			teal: colors.teal,
			zinc: colors.zinc,
			neutral: colors.neutral
		}
	},
	plugins: []
};
