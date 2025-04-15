import DashboardStats from '@/app/_components/_panel/DashboardStats'

import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'
import { getCurrentUser, getUsers } from '@/app/_actions/auth'
import { Suspense } from 'react'
import DashboardSkelton from '@/app/_components/_skeltons/DashboardSkelton'

async function AccountPage() {
	const user = await getCurrentUser()
	const users = await getUsers()

	return (
		<>
			<Suspense fallback={<DashboardSkelton />}>
				<PanelHello gender={user?.gender} username={user?.username} />
				<DashboardStats user={user} />
			</Suspense>
			<section className="w-full lg:px-6">
				<RankSection users={users} user={user} />
				<QuickSecion />
			</section>
		</>
	)
}

export default AccountPage
