'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FC } from 'react'

export const LightMoonIcon: FC = () => {
	const lightMoonSVGPath =
		'M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z'
	return (
		<div>
			<svg
				className="h-6 w-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 20"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={lightMoonSVGPath}
				/>
			</svg>
		</div>
	)
}

export const DarkMoonIcon: FC = () => {
	const darkMoonSVGPath =
		'M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z'

	return (
		<div>
			<svg
				className="h-6 w-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 18 20"
			>
				<path d={darkMoonSVGPath} />
			</svg>
		</div>
	)
}

const ThemeSwitcher = () => {
	// States
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	// Effects
	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	// On Click Handlers
	const onChangeThemeToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<div>
			<button onClick={onChangeThemeToggle}>
				{theme == 'light' ? <LightMoonIcon /> : <DarkMoonIcon />}
			</button>
		</div>
	)
}

export default ThemeSwitcher
