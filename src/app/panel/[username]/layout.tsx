import PanelHeader from '@/app/_components/_panel/PanelHeader'
import PanelNavigation from '@/app/_components/_panel/PanelNavigation'

function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col-reverse  h-dvh bg-slate50">
			<PanelNavigation />
			<div className="flex-1 w-full overflow-y-auto">
				<PanelHeader />
				<main>{children}</main>
			</div>
		</div>
	)
}

export default layout
