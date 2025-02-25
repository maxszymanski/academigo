import StatCard from './StatCard'
import { BiSolidBookmark, BiSolidBookAdd, BiSolidBookHeart, BiSolidStar } from 'react-icons/bi'

function DashboardStats() {
	return (
		<section className="flex items-center  w-full overflow-x-auto gap-5 px-5 sm:gap-8 justify-evenly md:py-6 lg:px-6">
			<StatCard number="7" statType="Dodanych kursów">
				<BiSolidBookAdd className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="15" statType="Polubionych kursów">
				<BiSolidBookHeart className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="38" statType="Zapisanych kursów">
				<BiSolidBookmark className="size-20 text-primary/90" />
			</StatCard>
			<StatCard number="38" statType="Ocenionych kursów">
				<BiSolidStar className="size-20 text-primary/90" />
			</StatCard>
		</section>
	)
}

export default DashboardStats
