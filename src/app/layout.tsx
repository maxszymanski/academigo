import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './_components/Navigation'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | Academigo',
		default: 'Academigo',
	},
	description: 'Portal z kursami online',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pl">
			<body className={`${poppins.className} bg-white`}>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
