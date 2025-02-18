import CourseCard from './CourseCard'

function CourseSection() {
	return (
		<section className="bg-bg-white w-full relative z-20">
			<div className="lg:container mx-auto md:px-6  py-20 ">
				<div className="flex overflow-x-auto w-full px-6 gap-4 py-6 lg:overflow-x-hidden lg:flex-wrap lg:gap-x-4 lg:gap-y-6">
					{Array.from({ length: 12 }, (_, i) => (
						<CourseCard key={i} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CourseSection
