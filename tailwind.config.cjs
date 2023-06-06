/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
// TEXT
      paleviolet: "hsl(276, 100%, 81%)",
      moderateviolet: "hsl(276, 55%, 52%)",
      desaturateddarkviolet: "hsl(271, 15%, 43%)",
      grayishblue: "hsl(206, 6%, 79%)",
      verydarkdesaturatedviolet : "hsl(271, 36%, 24%)",
      darkgreyishviolet: "hsl(270, 7%, 64%)",
// Gradients
				lightmagenta: "hsl(293, 100%, 63%)",
				lightviolet: "hsl(264, 100%, 61%)",
				lightgrayishviolet: "hsl(270, 20%, 96%)",
			},
		},
	},
	plugins: [],
}
