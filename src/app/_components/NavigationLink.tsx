import Link from 'next/link'

function NavigationLink({
	href,
	linkName,
	restClass = '',
}: {
	href: string
	linkName: string
	restClass?: string | undefined
}) {
	return (
		<li>
			<Link
				className={`py-1.5 px-2 text-primary  font-medium transition-colors duration-300 text-base hover:text-primary/80 text-nowrap xl:text-lg 2xl:text-xl ${restClass}`}
				href={href}>
				{linkName}
			</Link>
		</li>
	)
}

export default NavigationLink
