import { CurrentUserType } from '@/app/_types/types'
import UserAvatar from '../_ui/UserAvatar'
import Link from 'next/link'

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
			className="flex h-80 w-[340px] flex-shrink-0 flex-col gap-2.5 rounded-3xl border-[3px] border-transparent bg-white px-5 py-8 text-dark2 shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
			tabIndex={1}>
			<h3 className="mb-5 text-center font-medium text-primary">{title}</h3>
			{ranking.length > 0 &&
				ranking.map((user, index) => (
					<li key={user.id} className="flex items-center ">
						<p className="mr-0.5 w-10 font-semibold text-primary">#{index + 1}</p>
						<div className="flex w-full items-center justify-between gap-1.5">
							<p className="font-medium flex items-center gap-1.5">
								<UserAvatar size="h-6 w-6" avatar={user.avatar} href={`/profil/${user.id}`} />
								<Link
									href={`/profil/${user.id}`}
									className="text-dark2 hover:text-dark2/75 transition-colors duration-300 py-1 flex items-center gap-1.5">
									<span className="overflow-hidden overflow-ellipsis whitespace-normal line-clamp-1 ">
										{user.username}
									</span>{' '}
									<span>{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''} </span>
								</Link>
							</p>
							{pointsRank ? (
								<p className="text-sm text-dark/70 text-nowrap">({user.points} punktów)</p>
							) : (
								<p className="text-sm text-dark/70 text-nowrap">({user.created_courses} kursów)</p>
							)}
						</div>
					</li>
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
				</>
			)}
		</ul>
	)
}

export default RankCard
