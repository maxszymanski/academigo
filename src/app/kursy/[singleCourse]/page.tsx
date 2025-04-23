import { getCurrentUser } from '@/app/_actions/auth'
import SingleHeader from '@/app/_components/_courses/SingleHeader'
import SingleDetails from '@/app/_components/_panel/SingleDetails'
import { getCourseById, getLikedCourses } from '@/app/_lib/data-service'

type Params = Promise<{ singleCourse: string }>

async function page({ params }: { params: Params }) {
	const { singleCourse } = await params
	const likedCourses = await getLikedCourses()
	const course = await getCourseById(singleCourse)
	const user = await getCurrentUser()

	const isLikedCourse: boolean = likedCourses.some(course => course.id === singleCourse)
	console.log(isLikedCourse)

	return (
		<>
			<SingleHeader course={course} />
			<main className="relative  h-full min-h-screen w-full px-4   bg-slate50">
				<div className="w-full lg:container mx-auto relative  xl:py-20 px-4 py-10">
					<SingleDetails course={course} userId={user.id} isLiked={isLikedCourse} />
				</div>
			</main>
		</>
	)
}

export default page
