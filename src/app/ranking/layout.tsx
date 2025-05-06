import RankHeader from '../_components/_profile/RankHeader'

function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<RankHeader />
			{children}
		</>
	)
}

export default layout
