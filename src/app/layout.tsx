import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import '@smastrom/react-rating/style.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
	title: {
		template: '%s | Academigo',
		default: 'Academigo – wyszukiwarka i porównywarka kursów online',
	},
	description:
		'Academigo to platforma do wyszukiwania, oceniania i porównywania kursów online. Odkrywaj najlepsze kursy z różnych źródeł w jednym miejscu.',
	keywords:
		'kursy online, porównywarka kursów, edukacja online, platforma edukacyjna, ocena kursów, wyszukiwanie kursów, kursy zdalne, nauka online, ranking kursów, e-learning',
	openGraph: {
		title: 'Academigo – wyszukiwarka i porównywarka kursów online',
		description:
			'Academigo to platforma do wyszukiwania, oceniania i porównywania kursów online. Odkrywaj najlepsze kursy z różnych źródeł w jednym miejscu.',
		url: 'https://academigo.pl',

		images: [
			{
				url: 'https://academigo.pl/panel-logo.png',
				width: 600,
				height: 300,
				alt: 'Academigo – logo platformy edukacyjnej',
			},
		],
		type: 'website',
		siteName: 'Academigo',
		locale: 'pl_PL',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Academigo – wyszukiwarka i porównywarka kursów online',
		description:
			'Przeglądaj i oceniaj kursy z różnych platform. Zbieraj punkty, dodawaj kursy i odkrywaj najlepsze treści edukacyjne w jednym miejscu.',
		images: ['https://academigo.pl/panel-logo.png'],
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pl" className="overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
			<body className={`${poppins.className} relative h-full min-h-dvh lg:min-h-screen bg-white`}>
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
							loading: { duration: 3000 },

							style: {
								fontSize: '14px',
								padding: '12px 16px',
								backgroundColor: '#f1f5f9',
								color: '#2e4fbb',
								border: '1px solid #f3f4f6',
								WebkitBoxShadow: '0px 2px 12px 0px #bae6fd',
								MozBoxShadow: '0px 2px 12px 0px #bae6fd',
								boxShadow: '0px 2px 12px 0px #bae6fd',
								fontFamily: 'poppins',
								textAlign: 'center',
								width: '318px',
							},
						}}
					/>

					{children}
				</>
			</body>
		</html>
	)
}
