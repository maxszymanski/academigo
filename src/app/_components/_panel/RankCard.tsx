interface RankRow {
	user_id: number
	name: string
	total_courses?: number | null
	points?: number | null
}
interface userInfo {
	courses: {
		added: number
		ranking: number
	}
	popularity: { points: number; ranking: number }
}

function RankCard({
	ranking = [],
	title,
	userRank = undefined,
}: {
	ranking?: RankRow[]
	title: string
	userRank?: userInfo | undefined
}) {
	return (
		<ul
			className="flex-shrink-0 w-80 px-5 py-8 flex flex-col gap-2.5 bg-white text-dark rounded-3xl shadow-md shadow-stone-200 border-[3px] border-transparent transition-colors duration-300 focus:border-primary outline-none  h-72"
			tabIndex={1}>
			<h3 className="text-primary text-center mb-5 font-medium">{title}</h3>
			{ranking.length > 0 &&
				ranking.map((user, index) => (
					<li key={user.user_id} className="flex items-center ">
						<p className="font-semibold w-10 mr-2 text-primary">#{index + 1}</p>
						<div className="w-full flex items-center justify-between">
							<p className="font-medium">
								{user.name} {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}{' '}
							</p>
							{user.total_courses && (
								<p className="text-dark/70 text-sm">({user.total_courses} kursów)</p>
							)}
							{user.points && <p className="text-dark/70 text-sm">({user.points} punktów)</p>}
						</div>
					</li>
				))}
			{userRank && (
				<>
					<li className="mb-4 text-center text-primary font-semibold">
						<p className="mb-2.5">Najwięcej dodanych kursów</p>
						<p>
							#{userRank.courses.ranking}{' '}
							<span className="text-dark/70 text-sm font-normal ml-5">
								({userRank.courses.added} kursów)
							</span>
						</p>
					</li>
					<li className=" text-center text-primary font-semibold">
						<p className="mb-2.5">Najaktywniejsi użytkowicy</p>
						<p>
							#{userRank.popularity.ranking}{' '}
							<span className="text-dark/70 text-sm font-normal ml-5">
								({userRank.popularity.points} punktów)
							</span>
						</p>
					</li>
				</>
			)}
		</ul>
	)
}

export default RankCard
