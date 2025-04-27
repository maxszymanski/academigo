import { getCurrentUser } from '@/app/_actions/auth'
import SingleHeader from '@/app/_components/_courses/SingleHeader'
import SingleDetails from '@/app/_components/_courses/SingleDetails'
import { getCourseById, getLikedCourses, getRatedCourse, getSavedCourses } from '@/app/_lib/data-service'
import CourseDescription from '@/app/_components/_courses/CourseDescription'
import { FullCourseDataType } from '@/app/_types/types'

type Params = Promise<{ singleCourse: string }>

async function page({ params }: { params: Params }) {
	const { singleCourse } = await params
	const likedCourses = await getLikedCourses()
	const savedCourses = await getSavedCourses()
	const course: FullCourseDataType = await getCourseById(singleCourse)
	const user = await getCurrentUser()
	const ratedCourse = await getRatedCourse(singleCourse)

	const isLikedCourse: boolean = likedCourses.some(course => course.id === singleCourse)
	const isSavedCourse: boolean = savedCourses.some(course => course.id === singleCourse)

	return (
		<>
			<SingleHeader course={course} />
			<main className="relative  h-full min-h-screen w-full px-4 bg-slate50">
				<div className="w-full container mx-auto relative flex flex-col items-center  xl:py-20  py-10 ">
					<CourseDescription description={course.long_description} />
					<SingleDetails
						course={course}
						userId={user?.id}
						isLiked={isLikedCourse}
						isSavedCourse={isSavedCourse}
						rate={ratedCourse?.rating}
					/>
				</div>
			</main>
		</>
	)
}

export default page
