import Search from '../_components/_courses/Search'
import Filters from '../_components/_courses/Filters'
import SortAndResults from '../_components/_courses/SortAndResults'
import { getCategories } from '../_lib/data-service'
import CategoriesDesktop from '../_components/_courses/CategoriesDesktop'
import SubCategories from '../_components/_courses/SubCategories'
import Specialization from '../_components/_courses/Specialization'
import CourseHeader from '../_components/_courses/CourseHeader'

async function CoursePage({ searchParams }: { searchParams: { category: string; subcategory: string } }) {
	const { category, subcategory } = await searchParams
	const categories = await getCategories()

	return (
		<>
			<CourseHeader />
			<main className="relative mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
				<Search />
				<CategoriesDesktop categories={categories} />
				<section className="relative h-full w-full pt-12 lg:flex lg:items-start lg:justify-between lg:gap-4 xl:gap-2 xl:pt-16 2xl:gap-16">
					<Filters secondChildren={<Specialization category={category} subCategory={subcategory} />}>
						<SubCategories category={category} />
					</Filters>
					<SortAndResults categories={categories} category={category} subCategory={subcategory} />
				</section>
			</main>
		</>
	)
}

export default CoursePage
