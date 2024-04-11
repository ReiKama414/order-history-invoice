/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#A10D1F",
				text: "#796E65",
				background: "#F2F0F0",
				customColor1: "#866768",
				customColor2: "#B78E6C",
			},
			height: {
				15: "3.75rem",
			},
			gap: {
				15: "3.75rem",
			},
		},
	},
	plugins: [],
};
