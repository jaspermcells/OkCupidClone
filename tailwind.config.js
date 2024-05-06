/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			xs: "475px",

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1080px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			textShadow: {
				DEFAULT: "0 2px 4px #000",
				sm: "0 2px 2px #000",
				lg: "0 4px 10px #000",
			},
			fontFamily: {
				Okcupid: ["Okcupid", "sans-serif"],
				PublicSans: ["Public Sans", "sans-serif"],
				SignikaNegative: ["Signika Negative", "sans-serif"],
			},
			backgroundImage: {
				bgimg: "url('/src/components/assets/pictures/bgmdscreensize.png')",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
