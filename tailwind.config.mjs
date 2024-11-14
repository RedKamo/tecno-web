/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['"Onest Variable"', 'sans-serif'],
      },
			transitionProperty: {
        filter: 'filter',
      },
			animation: {
				"infinite-slider": "infinite-slider 60s linear infinite",
			},
			keyframes: {
				"infinite-slider": {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [],
}
