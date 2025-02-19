import CoursesBox from './CoursesBox'

function CourseSection() {
	return (
		<section className="bg-slate50 w-full relative z-20 py-8 sm:py-12 lg:py-14 xl:py-16 2xl:py-20">
			<div className="2xl:container mx-auto   ">
				<h2 className="text-primary text-center font-semibold tracking-wide text-4xl pb-8 md:text-5xl xl:text-6xl">
					Kursy
				</h2>
				<CoursesBox category="Najnowsze" />
				<CoursesBox category="Najwyżej oceniane" />
				<CoursesBox category="Polecane przez nas" />
			</div>
		</section>
	)
}

export default CourseSection
