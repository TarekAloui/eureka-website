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
				'bg-start': 'var(--bg-start)',
				'bg-end': 'var(--bg-end)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				't-primary': 'var(--t-primary)',
				't-secondary': 'var(--t-secondary)',
				't-inverse': 'var(--t-inverse)',
				link: 'var(--link)',
				'link-hover': 'var(--link-hover)',
				error: 'var(--error)',
				success: 'var(--success)',
				warning: 'var(--warning)',
				info: 'var(--info)',
				accent: 'var(--accent-primary)',
				'accent-primary': 'var(--accent-primary)',
				'accent-secondary': 'var(--accent-secondary)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
	darkMode: 'class',
}
