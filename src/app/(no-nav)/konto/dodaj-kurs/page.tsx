import AddCourseForm from '@/app/_components/_panel/AddCourseForm'
import { getCategories, getPlatforms } from '@/app/_lib/data-service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dodaj nowy kurs | Academigo',
	description:
		'Dodaj swój kurs do platformy Academigo i pomóż społeczności odkrywać wartościowe materiały edukacyjne. Wypełnij formularz i podziel się wiedzą!',
	keywords:
		'dodaj kurs, formularz dodawania kursu, publikacja kursu, Academigo, edukacja online, kursy online, współpraca, platforma edukacyjna',
}

async function AddCourse() {
	const [platforms, categories] = await Promise.all([getPlatforms(), getCategories()])

	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Dodaj nowy kurs</h1>
			<AddCourseForm platforms={platforms.value} categories={categories} />
		</section>
	)
}

export default AddCourse
