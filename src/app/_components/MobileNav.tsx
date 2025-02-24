'use client'

import { useEffect } from 'react'
import useAppStore from '../stores/store'
import Button from './Button'
import Logo from './Logo'
import { IoMenu, IoClose } from 'react-icons/io5'

function MobileNav({ blackNav = false, pathname }: { blackNav?: boolean; pathname: string }) {
	const { isNavOpen, toggleNavigation, closeNavigation } = useAppStore()

	useEffect(() => {
		closeNavigation()
	}, [pathname, closeNavigation])

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflowY = 'hidden'
			document.body.style.height = '100vh'
		} else {
			document.body.style.overflowY = 'auto'
			document.body.style.height = '100%'
		}
	})

	return (
		<div
			className={` px-4 py-1 flex justify-between items-center top-0 left-0 w-full  md:hidden border-b  ${
				blackNav ? 'bg-dark border-transparent' : 'bg-white border-slate50'
			}`}>
			<Logo isMobile />
			<Button
				restClass="relative z-50"
				variant="transparent"
				onClick={() => {
					toggleNavigation()
				}}>
				{isNavOpen ? (
					<IoClose className={`size-12 text-primary font-semibold ${blackNav ? 'bg-dark' : 'bg-white'}`} />
				) : (
					<IoMenu className={`size-12 ${blackNav ? 'bg-dark' : 'bg-white'} text-primary font-semibold `} />
				)}
			</Button>
		</div>
	)
}

export default MobileNav
