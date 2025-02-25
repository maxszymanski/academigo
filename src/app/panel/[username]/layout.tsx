import PanelHeader from '@/app/_components/_panel/PanelHeader'
import PanelNavigation from '@/app/_components/_panel/PanelNavigation'

function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col-reverse lg:flex-row h-dvh bg-slate50">
			<PanelNavigation />
			<div className="flex-1 w-full overflow-y-auto lg:overflow-hidden lg:flex lg:flex-col">
				<PanelHeader />
				<main className="flex-1 w-full py-6 lg:overflow-y-auto">
					<div className="xl:container xl:max-w-[1440px] xl:mx-auto ">{children}</div>
				</main>
			</div>
		</div>
	)
}

export default layout
