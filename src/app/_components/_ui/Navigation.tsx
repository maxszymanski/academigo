'use client'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationList from './NavigationList'
import AuthButton from './AuthButton'

function Navigation({ isUser = false, userAvatar }: { isUser?: boolean; userAvatar?: string }) {
	const pathname = usePathname()

	const blackNav = pathname.includes('/panel')
	const isAccount = pathname.includes('/konto')

	if (isAccount) return null

	return (
		<nav
			className={`z-40 flex w-full flex-col gap-2 xl:container md:flex-row md:items-center md:justify-between md:px-6 md:py-6 xl:mx-auto ${
				blackNav ? 'fixed bg-dark lg:hidden ' : 'fixed bg-white md:relative'
			}`}>
			<MobileNav blackNav={blackNav} pathname={pathname} />
			<Logo />
			<NavigationList blackNav={blackNav}>
				<AuthButton isUser={isUser} userAvatar={userAvatar} />
			</NavigationList>
		</nav>
	)
}

export default Navigation
