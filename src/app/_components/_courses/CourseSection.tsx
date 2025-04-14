import { getNewestCourses, getPopularCourses, getSelectedByUsCourses } from '@/app/_lib/data-service'
import Button from '../_ui/Button'
import CoursesBox from './CoursesBox'

async function CourseSection() {
	const [newest, popular, selectedByUs] = await Promise.all([
		getNewestCourses(),
		getPopularCourses(),
		getSelectedByUsCourses(),
	])
	return (
		<section className="relative z-20 w-full bg-slate50 py-8 sm:py-12 lg:py-14 xl:z-0 xl:py-16 2xl:py-20">
			<div className="mx-auto 2xl:container">
				<h2 className="pb-8 text-center text-4xl font-semibold tracking-wide text-primary md:text-5xl xl:text-6xl">
					Kursy
				</h2>
				<CoursesBox category="Najnowsze" coursesList={newest} />
				<CoursesBox category="Najwyżej oceniane" coursesList={popular} />
				<CoursesBox category="Polecane przez nas" coursesList={selectedByUs} />
				<div className="container mx-auto my-4 flex w-full items-center justify-center">
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
