import React, { FC } from 'react'
import styles from './Appbar.module.css'
import ThemeSwitcher from '../ThemeSwitcher'

const Appbar: FC = () => {
	console.log(styles['app-bar-container'])
	return (
		<nav className={styles['app-bar-container']}>
			<h1 className={styles['app-bar-logo']}>Title</h1>
			<ThemeSwitcher />
		</nav>
	)
}

export default Appbar
