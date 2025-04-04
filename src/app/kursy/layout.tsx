import Footer from '../_components/_footer/Footer'

function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			{children}
			<Footer />
		</>
	)
}

export default layout
