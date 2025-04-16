import Search from '../_components/_courses/Search'
import Filters from '../_components/_courses/Filters'
import SortAndResults from '../_components/_courses/SortAndResults'
import { getCategories, getCoursesByFilter } from '../_lib/data-service'
import CategoriesDesktop from '../_components/_courses/CategoriesDesktop'
import SubCategories from '../_components/_courses/SubCategories'
import Specialization from '../_components/_courses/Specialization'
import CourseHeader from '../_components/_courses/CourseHeader'
import CoursesResult from '../_components/_courses/CoursesResult'
import { Suspense } from 'react'
import LoadingSkelton from '../_components/_courses/LoadingSkelton'

type Params = Promise<{ category: string; subcategory: string; specialization: string; type: string; search: string }>

async function CoursePage({ searchParams }: { searchParams: Params }) {
	const { category, subcategory, specialization, type, search } = await searchParams
	const categories = await getCategories()
	const courses = await getCoursesByFilter(type, category, subcategory, specialization, search)

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
					<Suspense fallback={<LoadingSkelton />}>
						<SortAndResults categories={categories} category={category} subCategory={subcategory}>
							<CoursesResult courses={courses} />
						</SortAndResults>
					</Suspense>
				</section>
			</main>
		</>
	)
}

export default CoursePage
