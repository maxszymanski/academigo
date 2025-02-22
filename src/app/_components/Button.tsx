import Link from 'next/link'

interface ButtonProps {
	onClick?: () => void | undefined
	children: React.ReactNode
	restClass?: string
	href?: string | undefined
	variant?: 'purple' | 'lightPurple' | 'white' | 'transparent' | 'arrow' | 'dark'
}

const mainClass =
	'  rounded-full    inline-flex text-center justify-center items-center text-nowrap transition-colors duration-300 '

const variants = {
	purple: 'hover:bg-primary/80 bg-primary text-sm text-white md:text-xs lg:text-sm xl:px-6 xl:py-3.5 py-2 px-4',
	lightPurple: 'hover:bg-primary/80 bg-primary text-white px-4 ',
	white: 'bg-white text-primary font-semibold tracking-wide text-base hover:bg-white/85 px-4 py-3.5  ',
	transparent: 'text-sm bg-transparent text-white/50 hover:text-white ',
	arrow: 'text-primary  py-3 px-3 absolute z-40   mb-2 hover:text-primary/80 ',
	dark: 'text-white py-2 xl:py-3.5 px-6 text-sm bg-lightdark hover:bg-lightdark/70 ',
}

function Button({ onClick, children, restClass = '', href = undefined, variant = 'purple' }: ButtonProps) {
	const variantClass = variants[variant] || variants.purple

	if (href)
		return (
			<Link href={href} className={`${mainClass} ${variantClass} ${restClass} `}>
				{children}
			</Link>
		)
	else
		return (
			<button onClick={onClick} className={`${mainClass} ${restClass} ${variantClass}`}>
				{children}
			</button>
		)
}

export default Button
