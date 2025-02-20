import CourseSection from './_components/CourseSection'
import Header from './_components/Header'
import JoinUsSection from './_components/JoinUsSection'
import LearnInfoSection from './_components/LearnInfoSection'
import LearnSkill from './_components/LearnSkill'
import NumberSection from './_components/NumberSection'

export default async function Home() {
	return (
		<>
			<Header />
			<main className="pt-20  lg:pt-28 lg:pb-4 overflow-hidden bg-bg-white">
				<LearnInfoSection />
				<LearnSkill />
				<NumberSection />
				<CourseSection />
				<JoinUsSection />
			</main>
		</>
	)
}
