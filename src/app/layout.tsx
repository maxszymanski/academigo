import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './_components/Navigation'
import Footer from './_components/Footer'

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
		<html lang="pl" className="overflow-x-hidden">
			<body className={`${poppins.className} bg-white relative overflow-x-hidden h-full min-h-screen`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
