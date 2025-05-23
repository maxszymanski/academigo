import { FaTrophy } from 'react-icons/fa6'
import RankCard from './RankCard'
import { CurrentUserType } from '@/app/_types/types'
import { getUserRankByCourses, getUserRankByPoints } from '@/app/_lib/data-service'
import { getTopUsersByCreatedCourses, getTopUsersByPoints } from '@/app/_actions/auth'

async function RankSection({ user }: { user: CurrentUserType }) {
	const rangeStart = 0
	const rangeEnd = 4

	const [usersByCreatedCourses, usersByPoints, userRank, userRankByPoints] = await Promise.all([
		getTopUsersByCreatedCourses(rangeStart, rangeEnd),
		getTopUsersByPoints(rangeStart, rangeEnd),
		getUserRankByCourses(user.id),
		getUserRankByPoints(user.id),
	])

	return (
		<div className="py-8">
			<h2 className="flex items-center justify-center gap-3 pb-6 text-center text-xl font-bold text-primary lg:px-6 lg:pb-8 xl:pb-10 xl:text-2xl">
				<FaTrophy className="size-8 text-yellow-400" /> Ranking użytkowników
			</h2>
			<div className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 py-6 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8">
				<RankCard ranking={usersByCreatedCourses} title="Najwięcej dodanych kursów" />
				<RankCard
					title="Twój ranking"
					userRank={userRank}
					currentUser={user}
					userRankByPoints={userRankByPoints}
				/>
				<RankCard ranking={usersByPoints} title="Najaktywniejsi użytkownicy" pointsRank />
			</div>
		</div>
	)
}

export default RankSection
