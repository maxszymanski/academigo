import Button from '../_ui/Button'

function RankHeader() {
	return (
		<header className="bg-slate50 py-12">
			<div className="container mx-auto ">
				<h1 className="text-primary font-semibold text-center text-2xl xl:text-5xl">Ranking</h1>
				<div className="flex flex-wrap gap-4 pt-12 justify-center">
					<Button href="/ranking" variant="submit">
						Ilość dodanych kursów
					</Button>
					<Button href="/ranking?filter=punkty" variant="submit">
						Ilość punktów
					</Button>
				</div>
			</div>
		</header>
	)
}

export default RankHeader
