import CourseSection from './_components/CourseSection'
import Header from './_components/Header'
import LearnInfoSection from './_components/LearnInfoSection'
import LearnSkill from './_components/LearnSkill'

export default async function Home() {
	return (
		<>
			<Header />
			<main className="py-20 bg-slate50 lg:py-28 overflow-hidden">
				<LearnInfoSection />
				<LearnSkill />
				<CourseSection />
			</main>
		</>
	)
}
