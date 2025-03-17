import Search from '../_components/_courses/Search'

import Filters from '../_components/_courses/Filters'
import SortAndResults from '../_components/_courses/SortAndResults'
import { getCategories, getSubCategories } from '../_lib/data-service'
import CategoriesDesktop from '../_components/_courses/CategoriesDesktop'
import SubCategories from '../_components/_courses/SubCategories'
import { Suspense } from 'react'
import Spinner from '../_components/_ui/Spinner'

async function CoursePage({
    searchParams,
}: {
    searchParams: { category?: string }
}) {
    const categories = await getCategories()
    console.log(searchParams.category)
    // const subCategories = await getSubCategories(searchParams.category || null)

    return (
        <main className="mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
            <Search />
            <CategoriesDesktop categories={categories} />
            <section className="relative h-full w-full pt-12 lg:flex lg:items-start lg:justify-between lg:gap-4 xl:gap-2 xl:pt-16 2xl:gap-16">
                <Filters>
                    <Suspense fallback={<Spinner />}>
                        <SubCategories />
                    </Suspense>
                </Filters>
                <SortAndResults categories={categories} />
            </section>
        </main>
    )
}

export default CoursePage
