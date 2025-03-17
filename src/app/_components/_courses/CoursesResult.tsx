'use client'

import useAppStore from '@/app/stores/store'
import CourseCard from './CourseCard'

function CoursesResult() {
    const cardView = useAppStore((state) => state.cardView)
    return (
        <div className="relative flex w-full flex-wrap justify-center gap-x-5 gap-y-6 pt-12 lg:justify-evenly xl:gap-x-2 2xl:justify-between 2xl:gap-y-10">
            {Array.from({ length: 15 }, (_, i) => (
                <CourseCard isList={cardView === 'list'} key={i} i={i} />
            ))}
        </div>
    )
}

export default CoursesResult
