import Navigation from '../_components/_ui/Navigation'
import CourseHeader from '../_components/_courses/CourseHeader'
import Search from '../_components/_courses/Search'
import Footer from '../_components/_footer/Footer'
import Filters from '../_components/_courses/Filters'
import SortAndResults from '../_components/_courses/SortAndResults'
import { getCategories, getSubCategories } from '../_lib/data-service'
import CategoriesDesktop from '../_components/_courses/CategoriesDesktop'
import SubCategories from '../_components/_courses/SubCategories'

async function CoursePage({
    searchParams,
}: {
    searchParams: { category?: string }
}) {
    const categories = await getCategories()
    const subCategories = await getSubCategories(searchParams.category)

    return (
        <>
            <Navigation />
            <CourseHeader />
            <main className="mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
                <Search />
                <CategoriesDesktop categories={categories} />
                <section className="relative h-full w-full pt-12 lg:flex lg:items-start lg:justify-between lg:gap-4 xl:gap-2 xl:pt-16 2xl:gap-16">
                    <Filters>
                        <SubCategories subCategories={subCategories} />
                    </Filters>
                    <SortAndResults categories={categories} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CoursePage
