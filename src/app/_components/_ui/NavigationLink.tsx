import Link from 'next/link'

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
}) {
    return (
        <li className="list-none">
            {onClick ? (
                <button
                    className={`flex items-center text-nowrap p-3 font-medium transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl ${
                        panelNav
                            ? 'w-full text-lg font-semibold text-white/70 hover:text-white md:justify-start'
                            : 'text-2xl text-primary hover:text-primary/80 md:px-2 md:py-1.5'
                    } ${restClass}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            ) : (
                <Link
                    className={`flex items-center text-nowrap p-3 font-medium transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl ${
                        panelNav
                            ? 'w-full text-lg font-semibold text-white/70 hover:text-white md:justify-start'
                            : 'text-2xl text-primary hover:text-primary/80 md:px-2 md:py-1.5'
                    } ${restClass}`}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </li>
    )
}

export default NavigationLink
