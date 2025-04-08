import AddCourseForm from '@/app/_components/_panel/AddCourseForm'
import { getPlatforms } from '@/app/_lib/data-service'

async function AddCourse() {
	const platforms = await getPlatforms()

	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">Dodaj nowy kurs</h1>
			<AddCourseForm platforms={platforms[0].value} />
		</section>
	)
}

export default AddCourse
