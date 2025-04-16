import CourseCardPanel from '@/app/_components/_courses/CourseCardPanel'
import { getCoursesCreatedByUser, getLikedCourses } from '@/app/_lib/data-service'

async function page() {
	const courses = await getCoursesCreatedByUser()
	const likedCourses = await getLikedCourses()
	console.log(likedCourses)

	return (
		<section className="w-full px-4 lg:px-6 ">
			<div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-12 pt-12 md:gap-x-8 lg:justify-evenly ">
				{courses?.map(course => (
					<CourseCardPanel key={course.id} course={course} href={`/kursy/${course.id}`} />
				))}
			</div>
		</section>
	)
}

export default page
