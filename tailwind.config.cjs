/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				lightmagenta: "hsl(293, 100%, 63%)",
				lightviolet: "hsl(264, 100%, 61%)",
				lightgrayishviolet: "hsl(270, 20%, 96%)",
			},
		},
	},
	plugins: [],
}
