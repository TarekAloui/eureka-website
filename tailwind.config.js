/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				foreground: 'var(--foreground)',
				'bg-start': 'var(--background-start)',
				'bg-end': 'var(--background-end)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				't-primary': 'var(--text-primary)',
				't-secondary': 'var(--text-secondary)',
				't-inverse': 'var(--text-inverse)',
				link: 'var(--text-link)',
				'link-hover': 'var(--text-link-hover)',
				error: 'var(--error)',
				success: 'var(--success)',
				warning: 'var(--warning)',
				info: 'var(--info)',
				'accent-primary': 'var(--accent-primary)',
				'accent-secondary': 'var(--accent-secondary)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
