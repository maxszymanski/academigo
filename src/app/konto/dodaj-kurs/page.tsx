import AddCourseForm from '@/app/_components/_panel/AddCourseForm'

function AddCourse() {
	return (
		<section className="w-full px-4 lg:px-6 ">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12">Dodaj nowy kurs</h1>
			<AddCourseForm />
		</section>
	)
}

export default AddCourse
