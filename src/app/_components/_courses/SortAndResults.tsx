import { Category } from '@/app/_types/types'
import Categories from './Categories'
import CoursesResult from './CoursesResult'
import Sort from './Sort'
import View from './View'
import MobileFilter from './MobileFilter'
import Filters from './Filters'
import SubCategories from './SubCategories'
import Sorting from './Sorting'
import Specialization from './Specialization'

async function SortAndResults({
    categories,
    category,
    subCategory,
}: {
    categories: Category[]
    category: string
    subCategory: string
}) {
    return (
        <div className="w-full max-w-[6xl]">
            <div className="mx-auto flex w-full max-w-[328px] flex-wrap items-center justify-center gap-y-5 px-4 md:max-w-full md:flex-nowrap md:justify-between lg:justify-end lg:px-2">
                <Categories categories={categories} />
                <div className="relative flex w-full flex-wrap-reverse items-center justify-center gap-5 md:justify-end lg:gap-8">
                    <View />
                    <Sort />

                    <MobileFilter>
                        <Filters
                            mobile
                            secondChildren={
                                <Specialization
                                    category={category}
                                    subCategory={subCategory}
                                />
                            }
                        >
                            <SubCategories category={category} />
                        </Filters>
                    </MobileFilter>
                    <Sorting />
                </div>
            </div>
            <CoursesResult />
        </div>
    )
}

export default SortAndResults
