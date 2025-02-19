import CourseCard from './CourseCard'

function CoursesBox({ category }: { category: string }) {
	return (
		<div className="py-4 md:py-6 lg:py-8">
			<p className=" text-stone400 text-lg mx-5 font-medium border-l-2 pl-1  border-stone400 mb-3 lg:mx-7 xl:text-xl 2xl:text-2xl xl:mb-5">
				{category}
			</p>
			<div className="flex overflow-x-auto w-full px-6  gap-4 py-6  2xl:overflow-x-hidden 2xl:flex-wrap 2xl:gap-x-4 md:gap-y-8 items-center 2xl:justify-between">
				{Array.from({ length: 12 }, (_, i) => (
					<CourseCard key={i} i={i} />
				))}
			</div>
		</div>
	)
}

export default CoursesBox
