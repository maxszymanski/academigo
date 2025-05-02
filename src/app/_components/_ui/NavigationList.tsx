'use client'

import useAppStore from '@/app/stores/store'
import NavigationLink from './NavigationLink'
import Button from './Button'
import AccountNavModal from './AccountNavModal'

function NavigationList({ blackNav = false, children }: { blackNav?: boolean; children?: React.ReactNode }) {
	const isNavOpen = useAppStore(state => state.isNavOpen)
	const openModal = useAppStore(state => state.openModal)

	return (
		<div
			className={`${
				isNavOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
			} absolute right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-evenly gap-12 overflow-y-auto py-12 transition-transform duration-500 md:relative md:h-full md:flex-row md:justify-end md:overflow-y-visible  md:p-0 xl:gap-20 2xl:gap-24 ${
				blackNav ? 'bg-dark' : 'bg-white'
			}`}>
			<ul className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:gap-3 md:pt-0 lg:gap-6 xl:gap-10">
				<NavigationLink href="/" restClass="md:hidden">
					Strona główna
				</NavigationLink>
				<NavigationLink href="/kursy">Kursy</NavigationLink>

				<NavigationLink href="/blog">Blog</NavigationLink>

				<NavigationLink href="/o-nas">O nas</NavigationLink>
				<NavigationLink href="/kontakt">Kontakt</NavigationLink>
			</ul>
			<div className="flex flex-col gap-5 md:flex-row lg:gap-4 xl:gap-6 items-center">
				<Button href="/wspolpraca" restClass=" xl:min-w-[160px] ">
					Zostań współtwórcą
				</Button>

				{children}
			</div>
			{openModal === 'account-nav' && <AccountNavModal />}
		</div>
	)
}

export default NavigationList
