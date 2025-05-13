import ContactForm from '../_components/_contact/ContactForm'
import ContactInfo from '../_components/_contact/ContactInfo'
import Footer from '../_components/_footer/Footer'

function page() {
	return (
		<>
			<main className=" w-full flex-1 bg-slate50">
				<div className="mx-auto flex w-full max-w-7xl flex-col justify-evenly px-6 py-16 md:flex-row md:gap-4 lg:gap-8 xl:py-24">
					<ContactInfo />
					<ContactForm />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default page
