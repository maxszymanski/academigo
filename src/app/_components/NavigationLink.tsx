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
				className={`p-4 md:py-1.5 md:px-2 text-primary  font-medium transition-colors duration-300 text-2xl md:text-base hover:text-primary/80 text-nowrap xl:text-lg 2xl:text-xl ${restClass}`}
				href={href}>
				{linkName}
			</Link>
		</li>
	)
}

export default NavigationLink
