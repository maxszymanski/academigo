import Link from 'next/link'

interface ButtonProps {
	onClick?: () => void | undefined
	children: React.ReactNode
	restClass?: string
	href?: string | undefined
	variant?: 'purple' | 'lightPurple' | 'white'
}

const mainClass =
	'  rounded-full px-4    inline-flex text-center justify-center items-center text-nowrap transition-colors duration-300 '

const variants = {
	purple: 'hover:bg-primary/80 bg-primary text-white text-xs lg:text-sm xl:px-6 xl:py-3 py-2',
	lightPurple: 'hover:bg-primary/80 bg-primary text-white',
	white: 'bg-white text-primary font-semibold tracking-wide text-base hover:bg-white/85 ',
}

function Button({ onClick = undefined, children, restClass = '', href = undefined, variant = 'purple' }: ButtonProps) {
	const variantClass = variants[variant] || variants.purple

	if (href)
		return (
			<Link href={href} className={`${mainClass} ${variantClass} ${restClass} `}>
				{children}
			</Link>
		)

	if (onClick)
		return (
			<button onClick={onClick} className={`${mainClass} ${restClass} `}>
				{children}
			</button>
		)
}

export default Button
