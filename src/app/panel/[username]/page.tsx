// import { auth } from '@/app/_lib/auth'
// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import PanelHello from '@/app/_components/_panel/PanelHello'

async function AccountPage() {
	// const session = await auth()
	// console.log(session)

	return (
		<main className="flex-1 w-full py-6 px-1 ">
			<PanelHello />
			<DashboardStats />
		</main>
	)
}

export default AccountPage
