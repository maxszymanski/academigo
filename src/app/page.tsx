import CourseSection from './_components/CourseSection'
import Footer from './_components/Footer'
import Header from './_components/Header'
import JoinUsSection from './_components/JoinUsSection'
import LearnInfoSection from './_components/LearnInfoSection'
import LearnSkill from './_components/LearnSkill'
import Navigation from './_components/Navigation'
import NumberSection from './_components/NumberSection'

export default async function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<main className="pt-20  lg:pt-28 lg:pb-4 overflow-hidden bg-bg-white">
				<LearnInfoSection />
				<LearnSkill />
				<NumberSection />
				<CourseSection />
				<JoinUsSection />
			</main>
			<Footer />
		</>
	)
}
