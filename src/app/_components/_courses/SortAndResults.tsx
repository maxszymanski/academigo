import { getCategories } from '@/app/_lib/data-service'
import Categories from './Categories'
import CoursesResult from './CoursesResult'
import Sort from './Sort'
import View from './View'

async function SortAndResults() {
    const categories = (await getCategories()) || []

    return (
        <div className="w-full max-w-[6xl]">
            <div className="mx-auto flex w-full max-w-[328px] flex-wrap items-center justify-center gap-y-5 md:max-w-full md:justify-between lg:px-2">
                <Categories categories={categories} />
                <div className="flex flex-wrap-reverse items-center justify-center gap-5">
                    <View />
                    <Sort />
                </div>
            </div>
            <CoursesResult />
        </div>
    )
}

export default SortAndResults
