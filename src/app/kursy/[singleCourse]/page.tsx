import SingleHeader from '@/app/_components/_courses/SingleHeader'
import { getCourseById } from '@/app/_lib/data-service'

type Params = Promise<{ singleCourse: string }>

async function page({ params }: { params: Params }) {
	const { singleCourse } = await params

	const course = await getCourseById(singleCourse)

	return (
		<>
			<SingleHeader course={course} />
		</>
	)
}

export default page
