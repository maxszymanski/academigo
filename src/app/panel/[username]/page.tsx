// import { auth } from '@/app/_lib/auth'
// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import PanelHello from '@/app/_components/_panel/PanelHello'
import RankSection from '@/app/_components/_panel/RankSection'

async function AccountPage() {
	// const session = await auth()
	// console.log(session)

	return (
		<>
			<PanelHello />
			<DashboardStats />
			<RankSection />
		</>
	)
}

export default AccountPage
