import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './_components/_ui/Navigation'
import { getCurrentUser } from './_actions/auth'

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const user = await getCurrentUser()

	const isUser = !!user?.id

	return (
		<html lang="pl" className="overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
			<body className={`${poppins.className} relative h-full min-h-screen bg-white`}>
				<>
					<Navigation isUser={isUser} />
					{children}
				</>
			</body>
		</html>
	)
}
