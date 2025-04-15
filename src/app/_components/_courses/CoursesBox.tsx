'use client'
import { useRef } from 'react'
import Button from '../_ui/Button'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { ExtendedCourseType } from '../_panel/EditCourseForm'
import CourseCardPanel from './CourseCardPanel'

function CoursesBox({ category, coursesList }: { category: string; coursesList: ExtendedCourseType[] }) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= 1000
		}
	}

	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += 1000
		}
	}

	return (
		<div className="py-4 md:py-6 lg:py-8">
			<p className="relative z-10 mx-5 mb-3 text-lg font-medium text-stone400 lg:mx-7 xl:mb-5 xl:text-xl 2xl:text-2xl">
				<span className="animate-pulse border-l-2 border-stone400 pr-1"></span> {category}
			</p>
			<div className="group relative z-10">
				<div
					ref={containerRef}
					className="relative z-20 flex w-full items-center gap-4 overflow-x-auto scroll-smooth px-6 py-6 md:gap-y-8 2xl:flex-wrap 2xl:justify-between 2xl:gap-x-4 2xl:overflow-x-hidden"
					style={{ scrollbarWidth: 'none' }}>
					{coursesList.map((course, i) => (
						<CourseCardPanel
							course={course}
							key={course.id}
							isMainPage
							i={i}
							href={`/kursy/${course.id}`}
						/>
					))}
				</div>
				<div className="absolute left-0 top-0 hidden h-full w-full items-center justify-between px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex 2xl:hidden">
					<Button onClick={scrollLeft} restClass="left-1" variant="arrow">
						<FaChevronLeft className="size-12" />
					</Button>
					<Button onClick={scrollRight} restClass="right-1" variant="arrow">
						<FaChevronRight className="size-12" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CoursesBox
