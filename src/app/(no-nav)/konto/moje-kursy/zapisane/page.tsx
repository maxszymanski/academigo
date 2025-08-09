import CourseCardPanel from '@/app/_components/_courses/CourseCardPanel'
import NoCourseFound from '@/app/_components/_panel/NoCourseFound'
import { getSavedCourses } from '@/app/_lib/data-service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Moje zapisane kursy | Academigo',
	description:
		'Przeglądaj i zarządzaj kursami, które zapisałeś na platformie Academigo, aby wygodnie kontynuować naukę i organizować swoje materiały edukacyjne.',
	keywords: 'zapisane kursy, kursy do nauki, Academigo, platforma edukacyjna, kursy online, organizacja nauki',
}

async function page() {
	const courses = await getSavedCourses()

	return (
		<section className="w-full sm:px-4 lg:px-6 pb-8">
			<div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-evenly ">
				{courses && courses.length > 0 ? (
					courses?.map(course => (
						<CourseCardPanel key={course.id} course={course} href={`/kursy/${course.id}`} />
					))
				) : (
					<NoCourseFound info="Brak zapisanych kursów" />
				)}
			</div>
		</section>
	)
}

export default page
