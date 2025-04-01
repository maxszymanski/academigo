import PanelNavigation from '@/app/_components/_panel/PanelNavigation'
import PanelHeader from '../_components/_panel/PanelHeader'
import { getCurrentUser } from '../_actions/auth'

async function layout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser()
	return (
		<div className="flex h-dvh flex-col-reverse bg-slate50 lg:flex-row">
			<PanelNavigation />
			<div className="w-full flex-1 overflow-y-auto lg:flex lg:flex-col scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
				<PanelHeader username={user?.username} createdAt={user?.created_at} />
				<main className="w-full flex-1 py-6   xl:py-8 2xl:py-10">
					<div className="xl:container xl:mx-auto xl:max-w-[1440px]">{children}</div>
				</main>
			</div>
		</div>
	)
}

export default layout
