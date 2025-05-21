import Feedback from '@/app/_components/_courses/Feedback'
import FeedbackModal from '@/app/_components/_courses/FeedbackModal'
import SingleShowMoreCourses from '@/app/_components/_courses/SingleShowMoreCourses'
import UserDescription from '@/app/_components/_profile/UserDescription'
import UserHeader from '@/app/_components/_profile/UserHeader'
import UserProfileRank from '@/app/_components/_profile/UserProfileRank'
import UserStats from '@/app/_components/_ui/UserStats'
import {
	getCourseModerator,
	getUserCoursesByID,
	getUserRankByCourses,
	getUserRankByPoints,
} from '@/app/_lib/data-service'

type Params = Promise<{ userId: string }>

export async function generateMetadata({ params }: { params: Params }) {
	const { userId } = await params
	const { username, points, created_course, avatar } = await getCourseModerator(userId)

	if (!username) {
		return {
			title: 'Nie znaleziono użytkownika | Academigo',
			description: 'Ten profil użytkownika nie istnieje lub został usunięty.',
		}
	}

	return {
		siteName: 'Academigo',
		title: `${username} – profil użytkownika`,
		description: `${username} to aktywny użytkownik platformy Academigo. Zdobył ${points} punktów i dodał ${created_course} kursów edukacyjnych.`,
		openGraph: {
			title: `${username} – profil użytkownika`,
			description: `${username} to aktywny użytkownik platformy Academigo. Zdobył ${points} punktów i dodał ${created_course} kursów edukacyjnych.`,
			url: `https://academigo.pl/profil/${userId}`,
			images: [
				{
					url:
						avatar ||
						'https://staekcbwplnzsgcpuggb.supabase.co/storage/v1/object/public/avatars/default-user.webp',
					alt: `Avatar użytkownika ${username}`,
				},
			],
			type: 'profile',
		},
		twitter: {
			card: 'summary_large_image',
			title: `${username} – profil użytkownika`,
			description: `${username} zdobył ${points} pkt na Academigo.`,
			images: [
				{
					url:
						avatar ||
						'https://staekcbwplnzsgcpuggb.supabase.co/storage/v1/object/public/avatars/default-user.webp',
					alt: `Avatar użytkownika ${username}`,
				},
			],
		},
	}
}

async function page({ params }: { params: Params }) {
	const { userId } = await params
	const [user, userCourses, userRank, userRankByPoints] = await Promise.all([
		getCourseModerator(userId),
		getUserCoursesByID(userId),
		getUserRankByCourses(userId),
		getUserRankByPoints(userId),
	])

	return (
		<>
			<FeedbackModal userReported={user.id} />
			<div className="relative  h-full  w-full  bg-white  ">
				<div className="w-full  flex flex-col      ">
					<UserHeader user={user} />

					<div className="w-full md:bg-slate50 md:mt-6 xl:mt-8">
						<div className="lg:container 2xl:max-w-7xl mx-auto md:flex w-full md:justify-evenly xl:py-6">
							<div className="pt-6 pb-8 mt-6 md:mt-0  bg-slate50 px-4 md:px-8 ">
								<h2 className="text-primary text-xl font-medium pb-4 md:text-2xl xl:text-3xl xl:pb-6">
									Statystyki
								</h2>
								<UserStats user={user} userProfile />
							</div>

							<UserProfileRank user={user} userRank={userRank} userRankByPoints={userRankByPoints} />
						</div>
					</div>
					{user.long_description && <UserDescription description={user.long_description} />}
					<div className="py-6 mt-6 xl:mt-8  bg-slate50  md:pb-0 xl:pt-12 xl:pb-4">
						<div className="lg:container 2xl:max-w-7xl mx-auto px-4 md:px-8">
							<h2 className="text-primary text-xl font-medium md:text-2xl xl:text-3xl md:text-center">
								Dodane kursy
							</h2>
							{userCourses.length > 0 ? (
								<SingleShowMoreCourses coursesList={userCourses} isTitle={false} />
							) : (
								<p className="pb-4 pt-8 text-center text-sm sm:text-base md:py-14 md:text-lg ">
									Użytkownik nie dodał jeszcze żadnego kursu
								</p>
							)}
						</div>
					</div>
					<div className="py-2 mt-6 xl:mt-8 bg-slate50 lg:bg-white px-4 xl:p">
						<Feedback
							btnText="Zgłoś użytkownika"
							title="Ten użytkownik łamie zasady lub publikuje nieodpowiednie treści? Zgłoś to."
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default page
