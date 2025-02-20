'use client'
import { useRef } from 'react'
import CourseCard from './CourseCard'
import Button from './Button'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

function CoursesBox({ category }: { category: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	// Funkcja przewijania w lewo
	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= 1000 // Zmieniaj wartość w zależności od tego, ile chcesz przewijać
		}
	}

	// Funkcja przewijania w prawo
	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += 1000 // Zmieniaj wartość w zależności od tego, ile chcesz przewijać
		}
	}

	return (
		<div className="py-4 md:py-6 lg:py-8">
			<p className=" text-stone400 text-lg mx-5 font-medium border-l-2 pl-1  border-stone400 mb-3 lg:mx-7 xl:text-xl 2xl:text-2xl xl:mb-5 relative z-10">
				{category}
			</p>
			<div className="relative z-10">
				<div
					ref={containerRef}
					className="flex overflow-x-auto w-full px-6  gap-4 py-6  2xl:overflow-x-hidden 2xl:flex-wrap 2xl:gap-x-4 md:gap-y-8 items-center 2xl:justify-between scroll-smooth relative z-20"
					style={{ scrollbarWidth: 'none' }}>
					{Array.from({ length: 12 }, (_, i) => (
						<CourseCard key={i} i={i} />
					))}
				</div>
				<div className="absolute w-full h-full top-0 left-0 flex items-center justify-between  px-6">
					<Button onClick={scrollLeft} restClass="text-primary  py-3 px-3 absolute z-40  left-1  mb-2">
						<FaChevronLeft className="size-12" />
					</Button>
					<Button onClick={scrollRight} restClass="text-primary  py-3 px-3 absolute z-40  right-1  mb-2">
						<FaChevronRight className="size-12" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CoursesBox
