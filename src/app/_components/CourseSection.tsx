import Button from './Button'
import CoursesBox from './CoursesBox'

function CourseSection() {
	return (
		<section className="bg-slate50 w-full relative z-20 py-8 sm:py-12 lg:py-14 xl:py-16 2xl:py-20 xl:z-0">
			<div className="2xl:container mx-auto   ">
				<h2 className="text-primary text-center font-semibold tracking-wide text-4xl pb-8 md:text-5xl xl:text-6xl">
					Kursy
				</h2>
				<CoursesBox category="Najnowsze" />
				<CoursesBox category="Najwyżej oceniane" />
				<CoursesBox category="Polecane przez nas" />
				<div className="w-full container mx-auto flex items-center justify-center my-4">
					<Button
						href="/kursy"
						restClass="min-w-[160px] py-4 px-10 text-lg xl:text-lg xl:py-5 xl:px-12 md:text-lg lg:text-lg ">
						Zobacz wszystkie
					</Button>
				</div>
			</div>
		</section>
	)
}

export default CourseSection
