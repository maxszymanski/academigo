import { Category } from '@/app/_types/types'
import Categories from './Categories'

import Sort from './Sort'
import View from './View'
import MobileFilter from './MobileFilter'
import Filters from './Filters'
import SubCategories from './SubCategories'
import Sorting from './Sorting'
import Specialization from './Specialization'
import { ReactNode } from 'react'

async function SortAndResults({
	categories,
	category,
	subCategory,
	children,
	showCourses,
}: {
	categories: Category[]
	category: string
	subCategory: string
	children: ReactNode
	showCourses: ReactNode
}) {
	return (
		<div className="w-full max-w-6xl h-full flex flex-col">
			<div className="mx-auto flex w-full max-w-[328px] flex-wrap items-center justify-center gap-y-5 sm:px-4 md:max-w-full md:flex-nowrap md:justify-between lg:justify-end lg:px-2 md:gap-4">
				<Categories categories={categories} />
				<div className="flex flex-col items-center justify-between w-full md:flex-row-reverse gap-y-8 ">
					<div className="relative flex w-full flex-wrap-reverse items-center justify-center gap-5 md:justify-end lg:gap-8">
						<View />
						<Sort />

						<MobileFilter>
							<Filters
								mobile
								secondChildren={<Specialization category={category} subCategory={subCategory} />}>
								<SubCategories category={category} />
							</Filters>
						</MobileFilter>
						<Sorting />
					</div>
					{showCourses}
				</div>
			</div>
			{children}
		</div>
	)
}

export default SortAndResults
