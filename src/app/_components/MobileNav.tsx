'use client'

import { useEffect } from 'react'
import useAppStore from '../stores/store'
import Button from './Button'
import Logo from './Logo'
import { IoMenu, IoClose } from 'react-icons/io5'

function MobileNav() {
	const { isNavOpen, toggleNavigation } = useAppStore()

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
			className={` px-4 py-1 flex justify-between items-center top-0 left-0 w-full bg-white md:hidden border-b border-slate50`}>
			<Logo isMobile />
			<Button
				restClass="relative z-50"
				onClick={() => {
					toggleNavigation()
					console.log(isNavOpen)
				}}>
				{isNavOpen ? (
					<IoClose className="size-12 bg-white text-primary font-semibold " />
				) : (
					<IoMenu className="size-12 bg-white text-primary font-semibold " />
				)}
			</Button>
		</div>
	)
}

export default MobileNav
