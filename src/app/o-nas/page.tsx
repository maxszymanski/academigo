import AboutHeader from '../_components/_about/AboutHeader'
import AboutSection from '../_components/_about/AboutSection'
import WhyUsSection from '../_components/_about/WhyUsSection'
import Footer from '../_components/_footer/Footer'
import JoinUsSection from '../_components/_home/JoinUsSection'
import NumberSection from '../_components/_home/NumberSection'

function page() {
	return (
		<>
			<AboutHeader />
			<main className="flex-1 flex items-center justify-center ">
				<div className="w-full  pt-6 md:pt-0 lg:pt-10  text-dark2">
					<AboutSection />
					<NumberSection />
					<WhyUsSection />
					<JoinUsSection />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default page
