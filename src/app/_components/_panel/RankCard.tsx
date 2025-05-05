import { CurrentUserType } from '@/app/_types/types'
import Link from 'next/link'
import Button from '../_ui/Button'
import UserImage from '../_ui/UserImage'

function RankCard({
	ranking = [],
	title,
	userRank,
	currentUser,
	userRankByPoints,
	pointsRank = false,
}: {
	ranking?: CurrentUserType[]
	title: string
	userRank?: number | undefined | null
	currentUser?: CurrentUserType
	userRankByPoints?: number | undefined | null
	pointsRank?: boolean
}) {
	return (
		<ul
			className="flex h-80 w-[340px] flex-shrink-0 flex-col  rounded-3xl border-[3px] border-transparent bg-white  py-8 text-dark2 shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
			tabIndex={1}>
			<h3 className="mb-5 text-center font-medium text-primary px-4">{title}</h3>
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
									<span>{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''} </span>
								</h4>
							</div>
							{pointsRank ? (
								<p className="text-xs text-dark/70 text-nowrap">({user.points} punktów)</p>
							) : (
								<p className="text-xs text-dark/70 text-nowrap">({user.created_courses} kursów)</p>
							)}
						</div>
					</Link>
				))}
			{userRank && currentUser && (
				<>
					<li className="mb-4 text-center font-semibold text-primary">
						<p className="mb-2.5">Najwięcej dodanych kursów</p>
						<p>
							#{userRank || ''}{' '}
							<span className="ml-5 text-sm font-normal text-dark/70">
								({currentUser.created_courses} kursów)
							</span>
						</p>
					</li>
					<li className="text-center font-semibold text-primary">
						<p className="mb-2.5">Najaktywniejsi użytkowicy</p>
						<p>
							#{userRankByPoints || ''}
							<span className="ml-5 text-sm font-normal text-dark/70">
								({currentUser.points} punktów)
							</span>
						</p>
					</li>
					<li className="px-4 mt-4">
						<Button
							href="/ranking"
							variant="white"
							restClass="px-6  xl:px-10 xl:py-5   flex border border-primary !py-2.5 mt-4 hover:!bg-slate50">
							Zobacz ranking
						</Button>
					</li>
				</>
			)}
		</ul>
	)
}

export default RankCard
