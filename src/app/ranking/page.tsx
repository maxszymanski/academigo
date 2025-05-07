import { getRankUser } from '../_actions/auth'

import RankHeader from '../_components/_profile/RankHeader'
import RankFilter from '../_components/_profile/RankFilter'

import RankList from '../_components/_profile/RankList'
import LoadMoreUsers from '../_components/_profile/LoadMoreUsers'

async function page({ searchParams }: { searchParams: Promise<{ limit?: string; filter: string }> }) {
	const { limit = '50', filter = 'kursy' } = await searchParams
	const limitNumber = Number(limit) - 1
	const filterName = filter === 'kursy' ? 'created_courses' : 'points'

	const { allUsers: ranking = [], count: usersLength = 0 } = await getRankUser(limitNumber, filterName)

	return (
		<>
			{' '}
			<RankHeader>
				<RankFilter filter={filter} />
			</RankHeader>
			<main className="flex-1 bg-slate50  sm:px-6 pb-12 lg:pb-20">
				<div className="h-full">
					{ranking && usersLength ? (
						<RankList filter={filter} ranking={ranking}>
							<LoadMoreUsers
								limit={limitNumber}
								filter={filter}
								resultNumber={ranking.length}
								usersLength={usersLength}
							/>
						</RankList>
					) : (
						<p className="text-center">Wystapił problem podczas pobierania danych</p>
					)}
				</div>
			</main>
		</>
	)
}

export default page
