import Link from 'next/link'

function NavigationLink({ href, linkName }: { href: string; linkName: string }) {
	return (
		<li>
			<Link
				className="p-1.5 text-primary  font-medium transition-colors duration-300 hover:text-primary/80 text-nowrap xl:text-lg"
				href={href}>
				{linkName}
			</Link>
		</li>
	)
}

export default NavigationLink
