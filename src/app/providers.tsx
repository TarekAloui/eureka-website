'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }: ProvidersProps) => {
	const [mounted, setMounted] = React.useState(false)

	// Effects
	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return <>{children}</>
	}
	return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers
