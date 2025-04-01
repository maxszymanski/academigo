import CourseSection from './_components/_courses/CourseSection'
import Footer from './_components/_footer/Footer'
import Header from './_components/_home/Header'
import JoinUsSection from './_components/_home/JoinUsSection'
import LearnInfoSection from './_components/_home/LearnInfoSection'
import LearnSkill from './_components/_home/LearnSkill'
import NumberSection from './_components/_home/NumberSection'

export default async function Home() {
	return (
		<>
			<Header />
			<main className="overflow-hidden bg-bg-white pt-20 lg:pb-4 lg:pt-28">
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
