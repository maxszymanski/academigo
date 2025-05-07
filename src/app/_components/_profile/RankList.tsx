import Link from 'next/link'
import UserImage from '../_ui/UserImage'
import { RankType } from '@/app/_types/types'

function RankList({ ranking, filter, children }: { ranking: RankType[]; filter: string; children: React.ReactNode }) {
	return (
		<div className="container mx-auto lg:max-w-5xl xl:max-w-6xl">
			<ul className="flex w-full  flex-col  rounded-3xl  border-transparent bg-white  py-6 text-dark2 shadow-md shadow-stone-200 outline-none md:px-6">
				<h3 className="mb-5 text-center font-medium text-primary px-4">
					{filter === 'kursy' ? 'Dodanych kursów' : 'Najwięcej punktów'}
				</h3>
				{ranking.length > 0 &&
					ranking.map((user, index) => (
						<Link
							href={`/profil/${user.id}`}
							key={user.id}
							className="flex items-center py-1.5 xl:py-2.5 px-4 hover:bg-slate50 rounded-xl transition-colors duration-300 group ">
							<p className="mr-0.5 w-10 font-semibold text-primary">#{index + 1}</p>
							<div className="flex w-full items-center justify-between gap-1.5">
								<div className="font-medium flex items-center gap-1.5">
									<UserImage size="h-6 w-6 xl:h-10 xl:w-10" avatar={user.avatar} />
									<h4 className="text-dark2  py-1 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-primary">
										<span
											className={`overflow-hidden overflow-ellipsis whitespace-normal line-clamp-1 ${index < 2 ? 'max-w-[110px] sm:max-w-full' : 'max-w-[140px] sm:max-w-full'}`}>
											{user.username}
										</span>{' '}
										<span>
											{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}{' '}
										</span>
									</h4>
								</div>
								<p className="text-sm xl:text-base text-dark/85 text-nowrap hidden lg:block">
									{user.short_description || ''}
								</p>
								{filter === 'punkty' ? (
									<p className="text-xs sm:text-sm xl:text-base text-dark/70 text-nowrap">
										({user.points} punktów)
									</p>
								) : (
									<p className="text-xs sm:text-sm xl:text-base text-dark/70 text-nowrap">
										({user.created_courses} kursów)
									</p>
								)}
							</div>
						</Link>
					))}
				{children}
			</ul>
		</div>
	)
}

export default RankList
