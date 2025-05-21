import { Metadata } from 'next'
import AboutHeader from '../_components/_about/AboutHeader'
import AboutSection from '../_components/_about/AboutSection'
import WhyUsSection from '../_components/_about/WhyUsSection'
import Footer from '../_components/_footer/Footer'
import JoinUsSection from '../_components/_home/JoinUsSection'
import NumberSection from '../_components/_home/NumberSection'

export const metadata: Metadata = {
	title: 'O nas',
	description:
		'Poznaj zespół stojący za Academigo – platformą do wyszukiwania i porównywania kursów online. Dowiedz się, dlaczego stworzyliśmy to narzędzie i jakie mamy cele.',
	keywords:
		'o nas, academigo, zespół, twórcy platformy, kursy online, edukacja, misja, cel projektu, platforma edukacyjna, porównywarka kursów',
}

function page() {
	return (
		<>
			<AboutHeader />
			<main className="flex-1 flex items-center justify-center ">
				<div className="w-full  pt-6 md:pt-0 lg:pt-10  text-stone400 overflow-hidden">
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
