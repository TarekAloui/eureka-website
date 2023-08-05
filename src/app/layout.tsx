import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import { Appbar } from '@/components'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Providers>
				<body className="flex h-screen flex-col bg-gradient-to-b from-bg-start bg-fixed bg-no-repeat scrollbar-thin scrollbar-track-bg-end scrollbar-thumb-accent scrollbar-thumb-rounded">
					<Appbar />
					<div className="flex-1">{children}</div>
				</body>
			</Providers>
		</html>
	)
}
