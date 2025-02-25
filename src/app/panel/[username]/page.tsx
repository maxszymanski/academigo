// import { auth } from '@/app/_lib/auth'
// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import Notifications from '@/app/_components/_panel/Notifications'
import PanelHello from '@/app/_components/_panel/PanelHello'
import RankSection from '@/app/_components/_panel/RankSection'

async function AccountPage() {
	// const session = await auth()
	// console.log(session)

	return (
		<>
			<PanelHello />
			<DashboardStats />
			<section className="xl:flex w-full xl:justify-evenly xl:pt-16 xl:px-6 2xl:justify-between">
				<Notifications />
				<RankSection />
			</section>
		</>
	)
}

export default AccountPage
