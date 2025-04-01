import DashboardStats from '@/app/_components/_panel/DashboardStats'

import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'
import { getCurrentUser } from '@/app/_actions/auth'

async function AccountPage() {
	const user = await getCurrentUser()

	return (
	
				<>
					<PanelHello gender={user?.gender} username={user?.username} />
					<DashboardStats />
					<section className="w-full lg:px-6">
						<RankSection />
						<QuickSecion />
					</section>
				</>
		
	)
}

export default AccountPage
