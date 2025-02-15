'use client'

import Button from './Button'
import Logo from './Logo'
import { IoMenu } from 'react-icons/io5'

function MobileNav() {
	return (
		<div className=" px-4 py-1 flex justify-between items-center fixed bottom-0 left-0 w-full bg-white md:hidden z-50">
			<Logo />
			<Button onClick={() => console.log('siem')}>
				<IoMenu className="size-12 bg-white text-primary font-semibold " />
			</Button>
		</div>
	)
}

export default MobileNav
