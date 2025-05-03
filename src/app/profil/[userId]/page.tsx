import UserDescription from '@/app/_components/_profile/UserDescription'
import UserHeader from '@/app/_components/_profile/UserHeader'
import UserStats from '@/app/_components/_ui/UserStats'
import { getCourseModerator } from '@/app/_lib/data-service'

type Params = Promise<{ userId: string }>

async function page({ params }: { params: Params }) {
	const { userId } = await params

	const user = await getCourseModerator(userId)
	return (
		<div className="relative  h-full  w-full px-4 bg-slate50 pb-8">
			<div className="w-full container mx-auto  flex flex-col   pt-20   ">
				<UserHeader user={user} />
				<div className="py-8">
					{user.long_description && <UserDescription description={user.long_description} />}
					<div className="py-2">
						<h2 className="text-dark2 text-xl font-medium pb-4">Statystyki użytkownika</h2>
						<UserStats user={user} />
					</div>
				</div>
			</div>{' '}
		</div>
	)
}

export default page
