import Header from './_components/Header'
import LearnInfo from './_components/LearnInfo'
import LearnSkill from './_components/LearnSkill'

const aboutInfo = [
	{
		title: 'Nieograniczony dostęp',
		description: 'Linki do najlepszych zasobów w jednym miejscu!',
		src: '/access.svg',
	},
	{
		title: 'Eksperccy nauczyciele',
		description: 'Ucz się od ekspertów branżowych, którzy dzielą się swoją wiedzą i pasją',
		src: '/teacher.svg',
	},
	{
		title: 'Nauka w dowolnym miejscu',
		description: 'Korzystaj z kursów na komputerze, tablecie lub telefonie',
		src: '/learn.svg',
	},
]

export default async function Home() {
	return (
		<>
			<Header />
			<main className="py-20 bg-slate50 lg:p-28 overflow-hidden">
				<div className="flex flex-wrap items-center justify-center gap-20 lg:gap-10 xl:gap-36 2xl:gap-48 container mx-auto px-6 ">
					{aboutInfo.map(info => (
						<LearnInfo
							src={info.src}
							alt="ikona"
							title={info.title}
							description={info.description}
							key={info.src}
						/>
					))}
				</div>
				<LearnSkill />
			</main>
		</>
	)
}
