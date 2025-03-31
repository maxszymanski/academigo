// import Image from 'next/image'

import DashboardStats from '@/app/_components/_panel/DashboardStats'
import PanelHeader from '@/app/_components/_panel/PanelHeader'
import PanelHello from '@/app/_components/_panel/PanelHello'
import QuickSecion from '@/app/_components/_panel/QuickSecion'
import RankSection from '@/app/_components/_panel/RankSection'
import { createClient } from '@/app/utils/supabase/server'

async function AccountPage() {
	const supabase = await createClient()
	const { data } = await supabase.auth.getUser()
	const user = data.user

	return (
		<>
			<PanelHeader username={user?.user_metadata.username} createdAt={user?.created_at} />
			<main className="w-full flex-1 py-6 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 lg:overflow-y-auto xl:py-8 2xl:py-10">
				<div className="xl:container xl:mx-auto xl:max-w-[1440px]">
					<PanelHello gender={user?.user_metadata.gender} username={user?.user_metadata.username} />
					<DashboardStats />
					<section className="w-full lg:px-6">
						<RankSection />
						<QuickSecion />
					</section>
				</div>
			</main>
		</>
	)
}

export default AccountPage
