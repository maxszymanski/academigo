'use client'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationList from './NavigationList'

function Navigation() {
	const pathname = usePathname()

	const blackNav = pathname.includes('/konto')

	return (
		<>
			<nav
				className={` w-full    xl:container xl:mx-auto md:py-6  md:px-6 flex flex-col md:flex-row md:items-center   md:justify-between gap-2  z-40 ${
					blackNav ? 'lg:hidden bg-dark absolute' : 'bg-white fixed md:relative'
				}`}>
				<MobileNav blackNav={blackNav} pathname={pathname} />
				<Logo />
				<NavigationList blackNav={blackNav} />
			</nav>
		</>
	)
}

export default Navigation
