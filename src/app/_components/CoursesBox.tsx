'use client'
import { useRef } from 'react'
import CourseCard from './CourseCard'

function CoursesBox({ category }: { category: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	// Funkcja przewijania w lewo
	// const scrollLeft = () => {
	// 	if (containerRef.current) {
	// 		containerRef.current.scrollLeft -= 300 // Zmieniaj wartość w zależności od tego, ile chcesz przewijać
	// 	}
	// }

	// // Funkcja przewijania w prawo
	// const scrollRight = () => {
	// 	if (containerRef.current) {
	// 		containerRef.current.scrollLeft += 300 // Zmieniaj wartość w zależności od tego, ile chcesz przewijać
	// 	}
	// }

	return (
		<div className="py-4 md:py-6 lg:py-8">
			<p className=" text-stone400 text-lg mx-5 font-medium border-l-2 pl-1  border-stone400 mb-3 lg:mx-7 xl:text-xl 2xl:text-2xl xl:mb-5">
				{category}
			</p>
			<div
				ref={containerRef}
				className="flex overflow-x-auto w-full px-6  gap-4 py-6  2xl:overflow-x-hidden 2xl:flex-wrap 2xl:gap-x-4 md:gap-y-8 items-center 2xl:justify-between cursor-grab scroll-smooth"
				style={{ scrollbarWidth: 'none' }}>
				{Array.from({ length: 12 }, (_, i) => (
					<CourseCard key={i} i={i} />
				))}
			</div>
		</div>
	)
}

export default CoursesBox
