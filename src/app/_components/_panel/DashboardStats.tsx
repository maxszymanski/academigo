import StatCard from './StatCard'
import { BiSolidBookmark, BiSolidBookAdd, BiSolidBookHeart, BiSolidStar } from 'react-icons/bi'
import { CurrentUserType } from '@/app/_types/types'

async function DashboardStats({ user }: { user: CurrentUserType }) {
	const { created_courses, liked_courses, saved_courses, rated_courses } = user

	return (
		<section className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8 md:py-6 lg:px-6">
			<StatCard
				number={!created_courses || created_courses < 1 ? '-' : created_courses.toString()}
				statType="Dodanych kursów"
				href="dodane">
				<BiSolidBookAdd className="size-20 text-primary/90" />
			</StatCard>
			<StatCard
				number={!liked_courses || liked_courses < 1 ? '-' : liked_courses.toString()}
				statType="Polubionych kursów"
				href="polubione">
				<BiSolidBookHeart className="size-20 text-primary/90" />
			</StatCard>
			<StatCard
				number={!saved_courses || saved_courses < 1 ? '-' : saved_courses.toString()}
				statType="Zapisanych kursów"
				href="zapisane">
				<BiSolidBookmark className="size-20 text-primary/90" />
			</StatCard>
			<StatCard
				number={!rated_courses || rated_courses < 1 ? '-' : rated_courses.toString()}
				statType="Ocenionych kursów"
				href="ocenione">
				<BiSolidStar className="size-20 text-primary/90" />
			</StatCard>
		</section>
	)
}

export default DashboardStats
