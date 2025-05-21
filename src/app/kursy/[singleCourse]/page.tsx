import { getCurrentUser } from '@/app/_actions/auth'
import SingleHeader from '@/app/_components/_courses/SingleHeader'
import SingleDetails from '@/app/_components/_courses/SingleDetails'
import {
	getCourseById,
	getCourseModerator,
	getLikedCourses,
	getRatedCourse,
	getRecommendedCourses,
	getSavedCourses,
} from '@/app/_lib/data-service'
import CourseDescription from '@/app/_components/_courses/CourseDescription'
import SingleShowMoreCourses from '@/app/_components/_courses/SingleShowMoreCourses'
import CreatedBy from '@/app/_components/_courses/CreatedBy'
import Feedback from '@/app/_components/_courses/Feedback'
import FeedbackModal from '@/app/_components/_courses/FeedbackModal'

type Params = Promise<{ singleCourse: string }>

export async function generateMetadata({ params }: { params: Params }) {
	const { singleCourse } = await params
	const { title, short_description, category_name, sub_category_name, specialization_name, picture } =
		await getCourseById(singleCourse)

	if (!title) {
		return {
			title: 'Nie znaleziono kursu | Academigo',
			description: 'Ten kurs nie istnieje lub został usunięty z platformy.',
		}
	}

	const fullUrl = `https://academigo.pl/kursy/${singleCourse}`
	const imageUrl =
		picture || 'https://staekcbwplnzsgcpuggb.supabase.co/storage/v1/object/public/pictures//default_course.webp'

	return {
		title: `${title} – kurs online`,
		description:
			short_description ||
			`${title} to kurs z kategorii ${category_name}${sub_category_name ? ` / ${sub_category_name}` : ''}${specialization_name ? ` / ${specialization_name}` : ''}. Oceniaj, porównuj i zapisuj najlepsze kursy online na Academigo.`,
		openGraph: {
			title: `${title} – kurs online`,
			description:
				short_description ||
				`${title} to kurs z kategorii ${category_name}${sub_category_name ? ` / ${sub_category_name}` : ''}${specialization_name ? ` / ${specialization_name}` : ''}.`,
			url: fullUrl,
			type: 'article',
			images: [
				{
					url: imageUrl,
					alt: `Miniatura kursu ${title}`,
					width: 360,
					height: 220,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} – kurs online`,
			description: short_description || `Sprawdź kurs "${title}" na Academigo.`,
			images: [
				{
					url: imageUrl,
					alt: `Miniatura kursu ${title}`,
				},
			],
		},
		keywords: [
			title,
			category_name,
			sub_category_name,
			specialization_name,
			'kursy online',
			'edukacja online',
			'nauka online',
			'porównywarka kursów',
		].filter(Boolean),
	}
}

async function page({ params }: { params: Params }) {
	const { singleCourse } = await params

	const user = await getCurrentUser()

	const [course, ratedCourse] = await Promise.all([getCourseById(singleCourse), getRatedCourse(singleCourse)])

	const [likedCourses, savedCourses] = user ? await Promise.all([getLikedCourses(), getSavedCourses()]) : [[], []]

	const [moreCourses, moderator] = await Promise.all([
		getRecommendedCourses(course.id, course.specialization, course.sub_categories, course.categories),
		getCourseModerator(course.created_by),
	])

	const isLikedCourse = likedCourses.some(c => c.id === singleCourse)
	const isSavedCourse = savedCourses.some(c => c.id === singleCourse)

	return (
		<>
			<FeedbackModal courseID={singleCourse} userID={user?.id} />
			<SingleHeader course={course} />
			<main className="relative  h-full min-h-screen w-full px-4 bg-slate50 pb-8">
				<div className="w-full container mx-auto  flex flex-col items-center lg:flex-row-reverse  xl:py-14  py-10 lg:items-start  lg:justify-between">
					<SingleDetails
						course={course}
						userId={user?.id}
						isLiked={isLikedCourse}
						isSavedCourse={isSavedCourse}
						rate={ratedCourse?.rating}
					/>
					<div className="lg:max-w-[60%] xl:max-w-[70%] xl:pr-2 2xl:px-4">
						<CourseDescription description={course.long_description} />
						<CreatedBy user={moderator} />
					</div>
				</div>
				<SingleShowMoreCourses coursesList={moreCourses} />
				<Feedback
					btnText="Zgłoś błąd"
					title="Widzisz błąd, nieaktualne informacje lub nadużycie? Zgłoś to nam."
				/>
			</main>
		</>
	)
}

export default page
