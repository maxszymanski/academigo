import { CategoriesType } from '@/app/_types/types'
import Categories from './Categories'
import CoursesResult from './CoursesResult'
import Sort from './Sort'
import View from './View'

async function SortAndResults({ categories }: CategoriesType) {
    return (
        <div className="w-full max-w-[6xl]">
            <div className="mx-auto flex w-full max-w-[328px] flex-wrap items-center justify-center gap-y-5 md:max-w-full md:justify-between lg:justify-end lg:px-2">
                <Categories categories={categories} />
                <div className="flex flex-wrap-reverse items-center justify-center gap-5 lg:gap-8">
                    <View />
                    <Sort />
                </div>
            </div>
            <CoursesResult />
        </div>
    )
}

export default SortAndResults
