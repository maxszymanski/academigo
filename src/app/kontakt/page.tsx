import ContactForm from '../_components/_contact/ContactForm'
import ContactInfo from '../_components/_contact/ContactInfo'

function page() {
	return (
		<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-evenly px-6 py-16 md:flex-row md:gap-4 lg:gap-8 xl:py-24 text-slate50">
			<ContactInfo />
			<ContactForm />
		</main>
	)
}

export default page
