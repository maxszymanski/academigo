import UserHeader from '@/app/_components/_profile/UserHeader'
import { getCourseModerator } from '@/app/_lib/data-service'

type Params = Promise<{ userId: string }>

async function page({ params }: { params: Params }) {
	const { userId } = await params

	const user = await getCourseModerator(userId)
	return (
		<main className="relative  h-full  w-full px-4 bg-slate50 pb-8">
			<div className="w-full container mx-auto  flex flex-col items-center  xl:py-14  py-10 ">
				<UserHeader user={user} />
			</div>{' '}
		</main>
	)
}

export default page
