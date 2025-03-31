import PanelNavigation from '@/app/_components/_panel/PanelNavigation'

async function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-dvh flex-col-reverse bg-slate50 lg:flex-row">
			<PanelNavigation />
			<div className="w-full flex-1 overflow-y-auto lg:flex lg:flex-col lg:overflow-hidden">{children}</div>
		</div>
	)
}

export default layout
