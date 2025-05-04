import { CurrentUserType } from '@/app/_types/types'
import Button from '../_ui/Button'

async function UserProfileRank({
	userRank,
	userRankByPoints,
	user,
}: {
	userRank: number | null
	userRankByPoints: number | null
	user: CurrentUserType
}) {
	return (
		<div className="pt-6 pb-8 mt-6 md:mt-0 bg-slate50 px-4 md:px-8 ">
			<h2 className="text-primary text-xl font-medium pb-6 md:text-2xl md:pb-4 xl:text-3xl xl:pb-6">Ranking</h2>
			<div className="mb-8 text-center md:text-start font-semibold text-primary">
				<p className="mb-3 md:text-lg">Dodanych kursów</p>
				<p className="flex items-center justify-center md:justify-start">
					<span className="text-3xl"># {userRank}</span>
					<span className="ml-5 text-sm font-normal text-dark/70 md:text-base">
						({user.created_courses} kursów)
					</span>
				</p>
			</div>
			<div className="text-center md:text-start font-semibold text-primary">
				<p className="mb-3 md:text-lg">Najaktywniejsi użytkowicy</p>
				<p className="flex items-center justify-center md:justify-start">
					<span className="text-3xl"># {userRankByPoints || ''}</span>
					<span className="ml-5 text-sm font-normal text-dark/70 md:text-base">({user.points} punktów)</span>
				</p>
			</div>
			<div className="flex justify-center mt-4 md:justify-start">
				<Button
					href="/ranking"
					variant="white"
					restClass="px-6 xl:text-xl xl:px-10 xl:py-5   flex border border-primary !py-2.5 mt-4 hover:!bg-slate50">
					Zobacz ranking
				</Button>
			</div>
		</div>
	)
}

export default UserProfileRank
