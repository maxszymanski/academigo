'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavigationLink({
	href = '/',
	children,
	restClass = '',
	panelNav = false,
	onClick,
}: {
	href?: string | undefined
	children: React.ReactNode
	restClass?: string | undefined
	panelNav?: boolean | undefined
	onClick?: () => void | undefined
	activeClass?: string
}) {
	const pathname = usePathname()
	const isActive = pathname.includes(href) && href != '/konto'

	console.log(pathname)

	return (
		<li className="list-none">
			{onClick ? (
				<button
					className={`flex items-center text-nowrap p-3 font-medium transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl outline-primary rounded-2xl ${
						panelNav
							? 'w-full text-lg font-semibold text-white/70 hover:text-white md:justify-start'
							: 'text-2xl text-primary hover:text-primary/80 md:px-2 md:py-1.5'
					} ${restClass}`}
					onClick={onClick}>
					{children}
				</button>
			) : (
				<Link
					className={`flex items-center text-nowrap p-3 font-medium transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl outline-primary rounded-2xl  ${
						panelNav
							? `w-full text-lg font-semibold  hover:text-white md:justify-start ${isActive ? 'text-white' : pathname === href ? 'text-white' : 'text-white/70'} `
							: `text-2xl  hover:text-primary/80 md:px-2 md:py-1.5 ${pathname === href ? 'text-slate-600' : 'text-primary'}`
					}     ${restClass}`}
					href={href}>
					{children}
				</Link>
			)}
		</li>
	)
}

export default NavigationLink
