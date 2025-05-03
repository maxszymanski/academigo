'use client'

import useAppStore from '@/app/stores/store'
import { useEffect } from 'react'

import { IoMenu, IoClose } from 'react-icons/io5'
import Button from './Button'
import Logo from './Logo'
import AccountNavModal from './AccountNavModal'

function MobileNav({
	blackNav = false,
	pathname,
	children,
	userId,
}: {
	blackNav?: boolean
	pathname: string | null | undefined
	children?: React.ReactNode
	userId?: string
}) {
	const { isNavOpen, toggleNavigation, closeNavigation, openModal } = useAppStore()

	useEffect(() => {
		closeNavigation()
	}, [pathname, closeNavigation])

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflowY = 'hidden'
			document.body.style.height = '100vh'
		} else {
			document.body.style.overflowY = 'visible'
			document.body.style.height = '100%'
		}
	})

	return (
		<div
			className={`left-0 top-0 flex w-full items-center justify-between border-b px-2 py-1.5 relative md:hidden ${
				blackNav ? 'border-transparent bg-dark' : 'border-slate50 bg-white'
			}`}>
			<Logo isMobile />
			<div className="flex items-center gap-3">
				{!blackNav && children}
				<Button
					restClass="relative z-50"
					variant="transparent"
					onClick={() => {
						toggleNavigation()
					}}>
					{isNavOpen ? (
						<IoClose
							className={`size-12 font-semibold text-primary ${blackNav ? 'bg-dark' : 'bg-white'}`}
						/>
					) : (
						<IoMenu className={`size-12 ${blackNav ? 'bg-dark' : 'bg-white'} font-semibold text-primary`} />
					)}
				</Button>
			</div>
			{openModal === 'account-nav' && <AccountNavModal userId={userId} />}
		</div>
	)
}

export default MobileNav
