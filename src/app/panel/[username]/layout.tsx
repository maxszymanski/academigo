import PanelHeader from '@/app/_components/_panel/PanelHeader'
import PanelNavigation from '@/app/_components/_panel/PanelNavigation'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-dvh flex-col-reverse bg-slate50 lg:flex-row">
            <PanelNavigation />
            <div className="w-full flex-1 overflow-y-auto lg:flex lg:flex-col lg:overflow-hidden">
                <PanelHeader />
                <main className="w-full flex-1 py-6 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 lg:overflow-y-auto xl:py-8 2xl:py-10">
                    <div className="xl:container xl:mx-auto xl:max-w-[1440px]">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default layout
