import CourseCardPanel from '@/app/_components/_courses/CourseCardPanel'
import NoCourseFound from '@/app/_components/_panel/NoCourseFound'
import { getRatedCourses } from '@/app/_lib/data-service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Moje ocenione kursy | Academigo',
	description:
		'Zobacz kursy, które oceniłeś na platformie Academigo. Pomagaj innym użytkownikom wybierać najlepsze materiały edukacyjne poprzez swoje opinie.',
	keywords: 'ocenione kursy, recenzje kursów, Academigo, opinie o kursach, platforma edukacyjna, kursy online',
}

async function page() {
	const courses = await getRatedCourses()

	return (
		<section className="w-full sm:px-4 lg:px-6 pb-8">
			<div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-evenly ">
				{courses && courses.length > 0 ? (
					courses?.map(course => (
						<CourseCardPanel key={course.id} course={course} href={`/kursy/${course.id}`} />
					))
				) : (
					<NoCourseFound info="Brak ocenionych kursów" />
				)}
			</div>
		</section>
	)
}

export default page
