'use client'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import MobileNav from './MobileNav'
import NavigationList from './NavigationList'
import AuthButton from './AuthButton'

function Navigation({
	isUser = false,
	userAvatar,
	userId,
}: {
	isUser?: boolean
	userAvatar?: string
	userId?: string
}) {
	const pathname = usePathname()

	return (
		<nav
			className={`z-40 flex w-full flex-col gap-2 xl:container md:flex-row md:items-center md:justify-between md:px-6 md:py-6 xl:mx-auto fixed bg-white md:relative
			`}>
			<MobileNav pathname={pathname} userId={userId}>
				<AuthButton isUser={isUser} userAvatar={userAvatar} />
			</MobileNav>
			<Logo />
			<NavigationList userId={userId}>
				<div className="hidden md:flex">
					<AuthButton isUser={isUser} userAvatar={userAvatar} />
				</div>
			</NavigationList>
		</nav>
	)
}

export default Navigation
