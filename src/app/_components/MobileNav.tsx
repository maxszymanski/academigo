'use client'

import useAppStore from '../stores/store'
import Button from './Button'
import Logo from './Logo'
import { IoMenu } from 'react-icons/io5'

function MobileNav() {
	const { isNavOpen } = useAppStore()

	return (
		<div
			className={` px-4 py-1 flex justify-between items-center top-0 left-0 w-full bg-white md:hidden z-40 ${
				isNavOpen ? 'absolute ' : 'fixed'
			} `}>
			<Logo isMobile />
			<Button onClick={() => console.log('siem')}>
				<IoMenu className="size-12 bg-white text-primary font-semibold " />
			</Button>
		</div>
	)
}

export default MobileNav
