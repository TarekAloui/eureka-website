'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
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
			<label className="relative mr-5 inline-flex cursor-pointer items-center">
				<input
					type="checkbox"
					value={theme}
					className="peer sr-only"
					onChange={onChangeThemeToggle}
					checked={theme === 'dark'}
				/>
				<div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-yellow-800"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					{theme}
				</span>
			</label>
		</div>
	)
}

export default ThemeSwitcher
