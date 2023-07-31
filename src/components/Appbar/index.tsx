import React, { FC } from 'react'
import ThemeSwitcher from '../ThemeSwitcher'

const Appbar: FC = () => {
	return (
		<nav className="flex items-center justify-between bg-primary p-6 text-t-primary">
			<h1 className="text-4xl">Title</h1>
			<ThemeSwitcher />
		</nav>
	)
}

export default Appbar
