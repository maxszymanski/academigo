import { getCoursesCreatedByUser } from '@/app/_lib/data-service'
import StatCard from './StatCard'
import { BiSolidBookmark, BiSolidBookAdd, BiSolidBookHeart, BiSolidStar } from 'react-icons/bi'

async function DashboardStats() {
	const courses = await getCoursesCreatedByUser()

	return (
		<section className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8 md:py-6 lg:px-6">
			<StatCard
				number={!courses || courses.length < 1 ? '-' : courses.length.toString()}
				statType="Dodanych kursów">
				<BiSolidBookAdd className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="-" statType="Polubionych kursów">
				<BiSolidBookHeart className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="-" statType="Zapisanych kursów">
				<BiSolidBookmark className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="-" statType="Ocenionych kursów">
				<BiSolidStar className="size-20 text-primary/90" />
			</StatCard>
		</section>
	)
}

export default DashboardStats
