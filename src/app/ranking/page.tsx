import Link from 'next/link'
import { getTopUsersByCreatedCourses, getTopUsersByPoints } from '../_actions/auth'
import UserImage from '../_components/_ui/UserImage'

async function page() {
	const rangeStart = 0
	const rangeEnd = 50
	const ranking = await getTopUsersByCreatedCourses(rangeStart, rangeEnd)
	const pointsRanking = await getTopUsersByPoints(rangeStart, rangeEnd)

	return (
		<main className="flex-1 bg-slate50">
			<div className="container mx-auto flex justify-between gap-14">
				<ul
					className="flex w-full  flex-col  rounded-3xl border-[3px] border-transparent bg-white  py-8 text-dark2 shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
					tabIndex={1}>
					<h3 className="mb-5 text-center font-medium text-primary px-4">Dodanych kursów</h3>
					{ranking.length > 0 &&
						ranking.map((user, index) => (
							<Link
								href={`/profil/${user.id}`}
								key={user.id}
								className="flex items-center py-1.5 px-4 hover:bg-slate50 rounded-xl transition-colors duration-300 group">
								<p className="mr-0.5 w-10 font-semibold text-primary">#{index + 1}</p>
								<div className="flex w-full items-center justify-between gap-1.5">
									<div className="font-medium flex items-center gap-1.5">
										<UserImage size="h-6 w-6" avatar={user.avatar} />
										<h4 className="text-dark2  py-1 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary">
											<span
												className={`overflow-hidden overflow-ellipsis whitespace-normal line-clamp-1 ${index < 2 ? 'max-w-[110px]' : 'max-w-[140px]'}`}>
												{user.username}
											</span>{' '}
											<span>
												{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}{' '}
											</span>
										</h4>
									</div>
									<p className="text-sm text-dark/85 text-nowrap">{user.short_description}</p>
									<p className="text-xs text-dark/70 text-nowrap">({user.created_courses} kursów)</p>
									{/* {pointsRank ? (
									<p className="text-xs text-dark/70 text-nowrap">({user.points} punktów)</p>
								) : (
									<p className="text-xs text-dark/70 text-nowrap">({user.created_courses} kursów)</p>
								)} */}
								</div>
							</Link>
						))}
				</ul>
				<ul
					className="flex w-full flex-col  rounded-3xl border-[3px] border-transparent bg-white  py-8 text-dark2 shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
					tabIndex={1}>
					<h3 className="mb-5 text-center font-medium text-primary px-4">Ilosć punktów</h3>
					{pointsRanking.length > 0 &&
						pointsRanking.map((user, index) => (
							<Link
								href={`/profil/${user.id}`}
								key={user.id}
								className="flex items-center py-1.5 px-4 hover:bg-slate50 rounded-xl transition-colors duration-300 group">
								<p className="mr-0.5 w-10 font-semibold text-primary">#{index + 1}</p>
								<div className="flex w-full items-center justify-between gap-1.5">
									<div className="font-medium flex items-center gap-1.5">
										<UserImage size="h-6 w-6" avatar={user.avatar} />
										<h4 className="text-dark2  py-1 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary">
											<span
												className={`overflow-hidden overflow-ellipsis whitespace-normal line-clamp-1 ${index < 2 ? 'max-w-[110px]' : 'max-w-[140px]'}`}>
												{user.username}
											</span>{' '}
											<span>
												{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}{' '}
											</span>
										</h4>
									</div>
									<p className="text-sm text-dark/85 text-nowrap">{user.short_description}</p>
									<p className="text-xs text-dark/70 text-nowrap">({user.points} punktów)</p>
									{/* {pointsRank ? (
									<p className="text-xs text-dark/70 text-nowrap">({user.points} punktów)</p>
								) : (
									<p className="text-xs text-dark/70 text-nowrap">({user.created_courses} kursów)</p>
								)} */}
								</div>
							</Link>
						))}
				</ul>
			</div>
		</main>
	)
}

export default page
