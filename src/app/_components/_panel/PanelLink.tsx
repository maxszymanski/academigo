import Link from 'next/link'

interface PanelLinkType {
    href: string
    children: React.ReactNode
    name: string
}

function PanelLink({ href, children, name }: PanelLinkType) {
    return (
        <Link
            href={href}
            className="flex h-36 w-36 flex-shrink-0 flex-col items-center justify-center gap-5 rounded-3xl border-[3px] border-transparent bg-primary p-3 shadow-md shadow-stone-200 outline-none transition-colors duration-300 hover:bg-primary/90 focus:bg-primary/80 sm:h-44 sm:w-44 xl:h-48 xl:w-48"
        >
            {children}
            <span className="text-sm text-white xl:text-sm">{name}</span>
        </Link>
    )
}

export default PanelLink
