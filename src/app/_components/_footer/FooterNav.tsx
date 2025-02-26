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
        <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-lg font-semibold text-white sm:pl-2 sm:text-left">
                Menu
            </h4>
            <ul className="flex flex-col items-center sm:items-start">
                {navLinks.map((link) => (
                    <li key={link.name} className="mb-2">
                        <Link
                            href={link.href}
                            className="inline-block text-nowrap p-2 transition-colors duration-300 hover:text-white"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNav
