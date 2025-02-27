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
        <html
            lang="pl"
            className="overflow-x-hidden scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2"
        >
            <body
                className={`${poppins.className} relative h-full min-h-screen bg-white`}
            >
                {children}
            </body>
        </html>
    )
}
