'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import { FC } from 'react'

const AppBarLogo: FC = () => {
	const { theme, setTheme } = useTheme()
	return (
		<Image
			className="h-10 w-auto object-contain"
			src={
				theme === 'light'
					? '/images/eureka_logo_blue.png'
					: '/images/eureka_logo_white.png'
			}
			alt="Eureka Logo"
			width={150}
			height={48}
		/>
	)
}

export default AppBarLogo
