function RankHeader({ children }: { children: React.ReactNode }) {
	return (
		<header className="bg-slate50 pt-24 pb-14 md:py-14">
			<div className="container mx-auto ">
				<h1 className="text-primary font-semibold text-center text-3xl xl:text-5xl">Ranking</h1>
				{children}
			</div>
		</header>
	)
}

export default RankHeader
