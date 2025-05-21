import CourseCardPanel from '@/app/_components/_courses/CourseCardPanel'
import NoCourseFound from '@/app/_components/_panel/NoCourseFound'

import { getCoursesCreatedByUser } from '@/app/_lib/data-service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Moje dodane kursy | Academigo',
	description:
		'Przeglądaj kursy, które dodałeś do platformy Academigo. Zarządzaj swoimi materiałami edukacyjnymi i rozwijaj społeczność nauki online.',
	keywords: 'moje kursy, dodane kursy, zarządzanie kursami, Academigo, kursy online, platforma edukacyjna',
}

async function page() {
	const courses = await getCoursesCreatedByUser()

	return (
		<section className="w-full sm:px-4 lg:px-6 pb-8">
			<div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-evenly">
				{courses && courses.length > 0 ? (
					courses?.map(course => (
						<CourseCardPanel
							course={course}
							href={`/kursy/${course.id}`}
							key={course.id}
							hrefEdit={`/konto/edytuj-kurs/${course.id}`}
						/>
					))
				) : (
					<NoCourseFound info="Brak dodanych kursów" />
				)}
			</div>
		</section>
	)
}

export default page
