'use client'

import useAppStore from '@/app/stores/store'
import NavigationLink from './NavigationLink'
import Button from './Button'
import AccountNavModal from './AccountNavModal'

function NavigationList({
	blackNav = false,
	children,
	userId,
}: {
	blackNav?: boolean
	children?: React.ReactNode
	userId?: string
}) {
	const isNavOpen = useAppStore(state => state.isNavOpen)
	const openModal = useAppStore(state => state.openModal)

	return (
		<div
			className={`${
				isNavOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
			} absolute right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-evenly gap-12 overflow-y-auto py-12 transition-transform duration-500 md:relative md:h-full md:flex-row md:justify-end md:overflow-y-visible  md:p-0 xl:gap-20 2xl:gap-24 ${
				blackNav ? 'bg-dark' : 'bg-white'
			}`}>
			<ul className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:gap-3 md:pt-0 lg:gap-2 xl:gap-4">
				<NavigationLink href="/" restClass="md:hidden text-xl">
					Strona główna
				</NavigationLink>
				<NavigationLink href="/kursy" restClass="text-xl">
					Kursy
				</NavigationLink>

				<NavigationLink href="/blog" restClass="text-xl">
					Blog
				</NavigationLink>

				<NavigationLink href="/o-nas" restClass="text-xl">
					O nas
				</NavigationLink>
				<NavigationLink href="/wspolpraca" restClass="text-xl md:hidden">
					Współpraca
				</NavigationLink>
				<NavigationLink href="/kontakt" restClass="text-xl">
					Kontakt
				</NavigationLink>
			</ul>
			<div className="md:flex flex-col gap-5 md:flex-row lg:gap-4 xl:gap-6 items-center hidden ">
				<Button href="/wspolpraca" restClass=" xl:min-w-[160px] ">
					Zostań współtwórcą
				</Button>

				{children}
			</div>
			{openModal === 'account-nav' && <AccountNavModal userId={userId} />}
		</div>
	)
}

export default NavigationList
