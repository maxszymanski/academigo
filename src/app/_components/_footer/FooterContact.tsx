const navLinks = [
    { name: '(+48) 887 123 456' },
    { name: 'info@academigo.pl' },
    { name: 'Krakowska 15 ' },
    { name: '32-050 Kraków' },
]

function FooterContact() {
    return (
        <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-lg font-semibold text-white sm:pl-2 sm:text-left">
                Kontakt
            </h4>
            <ul className="flex flex-col items-center sm:items-start">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <p className="mb-2 p-2">{link.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterContact
