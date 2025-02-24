import Link from 'next/link'

function NavigationLink({
	href,
	children,
	restClass = '',
	panelNav = false,
}: {
	href: string
	children: React.ReactNode
	restClass?: string | undefined
	panelNav?: boolean | undefined
}) {
	return (
		<li>
			<Link
				className={`p-3 font-medium transition-colors duration-300  md:text-base  text-nowrap xl:text-lg 2xl:text-xl flex items-center ${
					panelNav
						? 'text-white/70 hover:text-white w-full font-semibold text-lg '
						: 'text-primary hover:text-primary/80 md:py-1.5 md:px-2 text-2xl'
				} ${restClass}`}
				href={href}>
				{children}
			</Link>
		</li>
	)
}

export default NavigationLink
