import Link from 'next/link'

interface ButtonProps {
    onClick?: () => void | undefined
    children: React.ReactNode
    restClass?: string
    href?: string | undefined
    isActive?: boolean | undefined
    disabled?: boolean | undefined
    id?: string | undefined
    value?: number | string | undefined
    isActiveClass?: string | undefined

    variant?:
        | 'purple'
        | 'lightPurple'
        | 'white'
        | 'transparent'
        | 'arrow'
        | 'dark'
        | 'panel'
        | 'filter'
        | 'view'
        | 'category'
        | 'desktopCategory'
}

const mainClass =
    'rounded-full flex  items-center text-nowrap transition-colors duration-300 '

const variants = {
    purple: 'hover:bg-primary/80 bg-primary text-sm text-white md:text-xs lg:text-sm xl:px-6 xl:py-3.5 py-2 px-4 text-center justify-center',
    lightPurple:
        'hover:bg-primary/80 bg-primary text-white px-4 justify-center',
    white: 'bg-white text-primary font-semibold tracking-wide text-base hover:bg-white/85 px-4 py-3.5 justify-center ',
    transparent: 'text-sm bg-transparent text-white/50 hover:text-white ',
    arrow: 'text-primary  py-3 px-3 absolute z-40   mb-2 hover:text-primary/80 justify-center',
    dark: 'text-white py-2 xl:py-3.5 px-6 text-sm bg-lightdark hover:bg-lightdark/70 justify-center',
    panel: 'text-white/70 hover:text-white w-full font-semibold p-3',
    filter: 'text-dark2 border  border-stone400 py-4 px-4 bg-transparent hover:border-primary hover:text-primary focus:border-primary text-sm xl:text-base xl:px-6 2xl:text-lg',
    view: `text-sm bg-transparent  hover:text-primary  rounded-none p-2 `,
    category: ' w-full   py-2.5 hover:text-primary hover:bg-slate50  mb-1 ',
    desktopCategory:
        'text-base w-fit px-10 py-5 hover:text-primary/80  hover:border-primary/70 border border-stone400 2xl:text-lg',
}

function Button({
    onClick,
    children,
    restClass = '',
    href = undefined,
    variant = 'purple',
    isActive = false,
    value = undefined,
    id = undefined,
    disabled = false,
    isActiveClass = '',
}: ButtonProps) {
    const variantClass = variants[variant] || variants.purple

    if (href)
        return (
            <Link
                href={href}
                className={` ${mainClass} ${variantClass} ${restClass} `}
            >
                {children}
            </Link>
        )
    else
        return (
            <button
                value={value}
                onClick={onClick}
                className={`${mainClass} ${restClass} ${variantClass} ${isActive ? isActiveClass : 'text-stone400'}`}
                disabled={disabled}
                id={id}
            >
                {children}
            </button>
        )
}

export default Button
