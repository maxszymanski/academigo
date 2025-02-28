import Navigation from '../_components/_ui/Navigation'
import CourseHeader from '../_components/_courses/CourseHeader'
import Search from '../_components/_courses/Search'
import Footer from '../_components/_footer/Footer'
import Courses from '../_components/_courses/Courses'
import { getCategories } from '../_lib/data-service'

async function CoursePage() {
    const categories = await getCategories()

    return (
        <>
            <Navigation />
            <CourseHeader />
            <main className="mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
                <Search />
                <section className="px-4"></section>
                <Courses />
            </main>
            <Footer />
        </>
    )
}

export default CoursePage
