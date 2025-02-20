import Link from 'next/link'

const navLinks = [
	{ href: '/', name: 'Strona główna' },
	{ href: '/kursy', name: 'Kursy' },
	{ href: '/blog', name: 'Blog' },
	{ href: '/o-nas', name: 'O nas' },
	{ href: '/kontak', name: 'Kontakt' },
	{ href: '/wspolpraca', name: 'Zostań współtwórcą' },
]

function FooterNav() {
	return (
		<div className="flex flex-col  items-center sm:items-start gap-6">
			<h4 className="text-lg font-semibold text-white sm:text-left sm:pl-2">Menu</h4>
			<ul className="flex flex-col  items-center sm:items-start">
				{navLinks.map(link => (
					<li key={link.name} className="mb-2">
						<Link
							href={link.href}
							className="p-2 text-nowrap inline-block hover:text-white duration-300 transition-colors">
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterNav
