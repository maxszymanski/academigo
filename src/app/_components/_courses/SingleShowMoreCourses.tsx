'use client'
import { FullCourseDataType } from '@/app/_types/types'
import CourseCardPanel from './CourseCardPanel'
import { useRef } from 'react'
import Button from '../_ui/Button'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

function SingleShowMoreCourses({ coursesList = [] }: { coursesList: FullCourseDataType[] }) {
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
		<div className="md:py-6 lg:py-8 lg:container lg:mx-auto 2xl:pl-4">
			<p className="relative z-10  mb-3 text-lg font-medium text-stone400  xl:mb-5 xl:text-xl 2xl:text-2xl">
				<span className="animate-pulse border-l-2 border-stone400 pr-1"></span> Więcej podobnych
			</p>
			<div className="group relative z-10">
				<div
					ref={containerRef}
					className="flex w-full items-center gap-8 overflow-x-auto scroll-smooth  py-6  relative z-20"
					style={{ scrollbarWidth: 'none' }}>
					{coursesList.length > 0 ? (
						coursesList.map((course, i) => (
							<CourseCardPanel row course={course} key={course.id} i={i} href={`/kursy/${course.id}`} />
						))
					) : (
						<p>Brak kursów do wyświtlenia</p>
					)}
				</div>
				<div className="absolute left-0 top-0 hidden h-full w-full items-center justify-between px-6 opacity-0 transition-opacity duration-100 group-hover:opacity-100 lg:flex ">
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

export default SingleShowMoreCourses
