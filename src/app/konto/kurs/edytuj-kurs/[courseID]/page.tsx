import EditCourseForm from '@/app/_components/_panel/EditCourseForm'
import { getCategories, getPlatforms } from '@/app/_lib/data-service'

async function page({ params }: { params: { courseID: string } }) {
	const cabinId = await params.courseID
	const [platforms, categories] = await Promise.all([getPlatforms(), getCategories()])

	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">Edytuj kurs</h1>
			<p>{cabinId}</p>
			<EditCourseForm platforms={platforms[0].value} categories={categories} />
		</section>
	)
}

export default page
