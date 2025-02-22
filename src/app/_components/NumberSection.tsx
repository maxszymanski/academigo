import LearnInfo from './LearnInfo'

const aboutNumberInfo = [
	{
		title: '1000+',
		description: 'Ponad 1000 aktywnych użytkowników online',
		src: '/students.svg',
	},
	{
		title: '2000+',
		description: 'Ponad 2000 najlepszych kursów online',
		src: '/courses.svg',
	},
	{
		title: '10000+',
		description: 'Ponad 10 000 wejść na stronę miesięcznie',
		src: '/visit.svg',
	},
	{
		title: '#1',
		description: 'Nr 1 wśród platform do wyszukiwania kursów online!',
		src: '/first.svg',
	},
]

function NumberSection() {
	return (
		<section className=" px-6 bg-gradient-primary py-16">
			<div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-12 gap-y-20 lg:gap-x-2 xl:gap-x-6  xl:container mx-auto">
				{aboutNumberInfo.map(info => (
					<LearnInfo
						variant="light"
						src={info.src}
						alt="ikona"
						title={info.title}
						description={info.description}
						key={info.src}
					/>
				))}
			</div>
		</section>
	)
}

export default NumberSection
