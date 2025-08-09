import { Metadata } from 'next'
import ContactForm from '@/app/_components/_contact/ContactForm'
import ContactInfo from '@/app/_components/_contact/ContactInfo'

export const metadata: Metadata = {
	title: 'Wyszukiwarka kursów',
	description:
		'Znajdź najlepsze kursy online dzięki zaawansowanej wyszukiwarce Academigo. Filtruj według kategorii, poziomu, specjalizacji i typu kursu, aby szybko znaleźć to, czego potrzebujesz.',
	keywords:
		'wyszukiwarka kursów, znajdź kurs, filtruj kursy, szukaj kursów, kursy online, edukacja, academigo, kursy zdalne, sortowanie kursów, kategorie kursów',
}

function page() {
	return (
		<>
			<main className=" w-full flex-1 bg-slate50 pt-10 pb-4">
				<div className="mx-auto flex w-full max-w-7xl flex-col justify-evenly px-6 py-16 md:flex-row md:gap-4 lg:gap-8 xl:py-24">
					<ContactInfo />
					<ContactForm />
				</div>
			</main>
		</>
	)
}

export default page
