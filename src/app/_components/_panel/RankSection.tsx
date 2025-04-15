import { FaTrophy } from 'react-icons/fa6'
import RankCard from './RankCard'
import { CurrentUserType } from '@/app/_types/types'

function RankSection({ users, user }: { users: CurrentUserType[]; user: CurrentUserType }) {
	const userRank = users.findIndex(cur => cur.id.toString() === user.id) + 1

	return (
		<div className="py-8">
			<h2 className="flex items-center justify-center gap-3 pb-6 text-center text-xl font-bold text-primary lg:px-6 lg:pb-8 xl:pb-10 xl:text-2xl">
				<FaTrophy className="size-8 text-yellow-400" /> Ranking użytkowników
			</h2>
			<div className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 py-6 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8">
				<RankCard ranking={users} title="Najwięcej dodanych kursów" />
				<RankCard title="Twój ranking" userRank={userRank} currentUser={user} />
				<RankCard ranking={users} title="Najaktywniejsi użytkownicy" />
			</div>
		</div>
	)
}

export default RankSection
