import { FaSearch } from 'react-icons/fa'
import Input from '../_components/_ui/Input'
import Navigation from '../_components/_ui/Navigation'

import CourseHeader from '../_components/_courses/CourseHeader'

function CoursePage() {
    return (
        <>
            <Navigation />
            <CourseHeader />
            <main className="container mx-auto w-full px-4 py-20">
                <Input
                    wrapperClass="bg-primary pb-5 pt-4 rounded-xl sm:px-12 "
                    restClass="pl-10 !placeholder-white/90 !text-white !border-white !border-b-2  sm:text-base placeholder:text-sm sm:pb-1"
                    name="search"
                    type="search"
                    placeholder="Szukaj"
                >
                    <FaSearch className="size-5 text-white/90" />
                </Input>
            </main>
        </>
    )
}

export default CoursePage
