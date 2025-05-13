import Search from '../_components/_courses/Search'
import Filters from '../_components/_courses/Filters'
import SortAndResults from '../_components/_courses/SortAndResults'
import { getCategories, getCoursesByFilter } from '../_lib/data-service'
import CategoriesDesktop from '../_components/_courses/CategoriesDesktop'
import SubCategories from '../_components/_courses/SubCategories'
import Specialization from '../_components/_courses/Specialization'
import CourseHeader from '../_components/_courses/CourseHeader'
import CoursesResult from '../_components/_courses/CoursesResult'
import SelectedFilters from '../_components/_courses/SelectedFilters'
import ShowedCourses from '../_components/_courses/ShowedCourses'

type Params = Promise<{
	page: string
	category: string
	subcategory: string
	specialization: string
	type: string
	search: string
	sort: string
}>

async function CoursePage({ searchParams }: { searchParams: Params }) {
	const {
		page = '1',
		category,
		subcategory,
		specialization,
		type,
		search,
		sort = 'najpopularniejsze',
	} = await searchParams

	const categories = await getCategories()

	const sortBy =
		sort === 'najpopularniejsze'
			? 'views_count'
			: sort === 'najwyzej-oceniane'
				? 'average_rating'
				: sort === 'najnowsze'
					? 'created_at'
					: sort === 'najwiecej-ocen'
						? 'ratings_count'
						: sort === 'najwiecej-polubien'
							? 'likes_count'
							: null

	const { courses, count } = await getCoursesByFilter(
		Number(page),
		type,
		category,
		subcategory,
		specialization,
		search,
		sortBy
	)

	const perPage: number = 15
	const startItem = (Number(page) - 1) * perPage + 1
	const endItem = Math.min(Number(page) * perPage, count || 0)
	const info = count && count > 0 ? `${startItem}–${endItem} z ${count}` : '0'

	const isEnd = endItem === count
	const isMoreThanOnePage = (count || 0) > perPage

	return (
		<>
			<CourseHeader />

			<main className="relative mx-auto h-full flex-1 w-full px-4 py-10 lg:container xl:py-20">
				<Search />
				<CategoriesDesktop categories={categories} />
				<SelectedFilters />
				<section className="relative h-full w-full  lg:flex  lg:justify-between lg:gap-4 xl:gap-2 2xl:gap-16 lg:items-start">
					<Filters secondChildren={<Specialization category={category} subCategory={subcategory} />}>
						<SubCategories category={category} />
					</Filters>
					<SortAndResults
						categories={categories}
						category={category}
						subCategory={subcategory}
						showCourses={<ShowedCourses info={info} />}>
						<CoursesResult
							courses={courses || []}
							page={page}
							isEnd={isEnd}
							isMoreThanOnePage={isMoreThanOnePage}
						/>
					</SortAndResults>
				</section>
			</main>
		</>
	)
}

export default CoursePage
