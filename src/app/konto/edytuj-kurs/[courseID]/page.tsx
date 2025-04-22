import DeleteModal from '@/app/_components/_panel/DeleteModal'
import EditCourseForm from '@/app/_components/_panel/EditCourseForm'
import { getCategories, getCourseById, getPlatforms } from '@/app/_lib/data-service'

type Params = Promise<{ courseID: string }>

async function page({ params }: { params: Params }) {
	const { courseID } = await params
	const [platforms, categories, course] = await Promise.all([
		getPlatforms(),
		getCategories(),
		getCourseById(courseID),
	])

	return (
		<>
			<DeleteModal courseID={courseID} />
			<section className="w-full px-4 lg:px-6 pb-8">
				<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Edytuj kurs</h1>

				<EditCourseForm platforms={platforms.value} categories={categories} courseData={course} />
			</section>
		</>
	)
}

export default page
