import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './_components/_ui/Navigation'
import { getCurrentUser } from './_actions/auth'
import { Toaster } from 'react-hot-toast'
import '@smastrom/react-rating/style.css'

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
					<Toaster
						position={'top-right'}
						gutter={12}
						containerStyle={{
							marginTop: '14px',
							marginRight: '12px',
						}}
						toastOptions={{
							success: {
								duration: 3000,
							},
							error: {
								duration: 3000,
								style: {
									color: '#ef4444',
								},
							},
							style: {
								fontSize: '16px',
								padding: '16px 20px',
								backgroundColor: '#f1f5f9',
								color: '#2e4fbb',
								border: '1px solid #f3f4f6',
								WebkitBoxShadow: '0px 2px 12px 0px #bae6fd',
								MozBoxShadow: '0px 2px 12px 0px #bae6fd',
								boxShadow: '0px 2px 12px 0px #bae6fd',
								fontFamily: 'poppins',
								textAlign: 'center',
							},
						}}
					/>
					<Navigation isUser={isUser} />
					{children}
				</>
			</body>
		</html>
	)
}
