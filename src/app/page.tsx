import CourseSection from './_components/CourseSection'
import Header from './_components/Header'
import LearnInfoSection from './_components/LearnInfoSection'
import LearnSkill from './_components/LearnSkill'
import NumberSection from './_components/NumberSection'

export default async function Home() {
	return (
		<>
			<Header />
			<main className="py-20  lg:py-28 overflow-hidden bg-bg-white">
				<LearnInfoSection />
				<LearnSkill />
				<CourseSection />
				<NumberSection />
			</main>
		</>
	)
}
