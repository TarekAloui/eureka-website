import React, { FC } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'

const Appbar: FC = () => {
	return (
		<nav className="flex items-center justify-between bg-red-200 p-6 text-white dark:bg-gray-800">
			<h1 className="text-4xl">Title</h1>
			<ThemeSwitcher />
		</nav>
	)
}

export default Appbar
