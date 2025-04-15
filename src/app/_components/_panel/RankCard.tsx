import { CurrentUserType } from '@/app/_types/types'
import UserAvatar from '../_ui/UserAvatar'

function RankCard({
	ranking = [],
	title,
	userRank,
	currentUser,
}: {
	ranking?: CurrentUserType[]
	title: string
	userRank?: string | number
	currentUser?: CurrentUserType
}) {
	return (
		<ul
			className="flex h-72 w-[340px] flex-shrink-0 flex-col gap-2.5 rounded-3xl border-[3px] border-transparent bg-white px-5 py-8 text-dark shadow-md shadow-stone-200 outline-none transition-colors duration-300 focus:border-primary xl:border-2"
			tabIndex={1}>
			<h3 className="mb-5 text-center font-medium text-primary">{title}</h3>
			{ranking.length > 0 &&
				ranking.map((user, index) => (
					<li key={user.id} className="flex items-center">
						<p className="mr-2 w-10 font-semibold text-primary">#{index + 1}</p>
						<div className="flex w-full items-center justify-between">
							<p className="font-medium flex items-center gap-1">
								<UserAvatar small avatar={user.avatar} />
								{user.username} {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}{' '}
							</p>

							<p className="text-sm text-dark/70">({user.created_courses} kursów)</p>

							{/* {user.points && <p className="text-sm text-dark/70">({user.points} punktów)</p>} */}
						</div>
					</li>
				))}
			{userRank && currentUser && (
				<>
					<li className="mb-4 text-center font-semibold text-primary">
						<p className="mb-2.5">Najwięcej dodanych kursów</p>
						<p>
							#{userRank}{' '}
							<span className="ml-5 text-sm font-normal text-dark/70">
								({currentUser.created_courses} kursów)
							</span>
						</p>
					</li>
					<li className="text-center font-semibold text-primary">
						<p className="mb-2.5">Najaktywniejsi użytkowicy</p>
						<p>
							{/* #{userRank.popularity.ranking}{' '} */} #1
							<span className="ml-5 text-sm font-normal text-dark/70">
								{/* ({userRank.popularity.points} punktów) */}
								(1000 punktów)
							</span>
						</p>
					</li>
				</>
			)}
		</ul>
	)
}

export default RankCard
