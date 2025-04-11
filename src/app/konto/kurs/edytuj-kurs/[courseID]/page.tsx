import EditCourseForm from '@/app/_components/_panel/EditCourseForm'
import { getCategories, getCourseById, getPlatforms } from '@/app/_lib/data-service'

async function page({ params }: { params: { courseID: string } }) {
	const { courseID } = await params
	const [platforms, categories, course] = await Promise.all([
		getPlatforms(),
		getCategories(),
		getCourseById(courseID),
	])

	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">Edytuj kurs</h1>

			<EditCourseForm platforms={platforms[0].value} categories={categories} courseData={course} />
		</section>
	)
}

export default page
