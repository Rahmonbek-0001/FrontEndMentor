/** @type {import('tailwindcss').Config} */

const defaultColors = require("tailwindcss/colors");

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	
	theme: {
		extend: {
			colors: {
				primary: defaultColors.sky,
				secondary: defaultColors.purple,
				terciary: defaultColors.slate,
			},
			fontFamily: {
				sans: ["Josefin Sans", "sans-serif"],
			},
			screen: {
				xs: "375px",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
