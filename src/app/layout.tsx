import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
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
		<html lang="pl" className="overflow-x-hidden scrollbar-thin scrollbar-thumb-primary2 scrollbar-track-primary">
			<body className={`${poppins.className} bg-white relative overflow-x-hidden h-full min-h-screen `}>
				{children}
			</body>
		</html>
	)
}
