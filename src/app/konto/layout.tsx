import PanelNavigation from '@/app/_components/_panel/PanelNavigation'
import PanelHeader from '../_components/_panel/PanelHeader'

async function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-dvh lg:h-screen flex-col-reverse bg-slate50 lg:flex-row relative">
			<PanelNavigation />
			<div className="w-full flex-1 overflow-y-auto lg:flex lg:flex-col scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
				<PanelHeader />

				<main className="w-full flex-1 py-6   xl:py-8 2xl:py-10">
					<div className="xl:container xl:mx-auto xl:max-w-[1440px]">{children}</div>
				</main>
			</div>
		</div>
	)
}

export default layout
