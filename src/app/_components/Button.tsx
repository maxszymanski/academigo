import Link from 'next/link'

interface ButtonProps {
	onClick?: () => void | undefined
	text: string
	restClass?: string
	href?: string | undefined
	variant?: 'purple' | 'lightPurple' | 'white'
}

const mainClass =
	' text-sm rounded-full  px-6 py-3 inline-flex text-center justify-center items-center text-nowrap transition-colors duration-300 '

const variants = {
	purple: 'hover:bg-primary/80 bg-primary text-white',
	lightPurple: 'hover:bg-primary/80 bg-primary text-white',
	white: 'bg-white text-primary font-semibold tracking-wide text-base hover:bg-white/85 ',
}

function Button({ onClick = undefined, text, restClass = '', href = undefined, variant = 'purple' }: ButtonProps) {
	const variantClass = variants[variant] || variants.purple

	if (href)
		return (
			<Link href={href} className={`${mainClass} ${variantClass} ${restClass} `}>
				{text}
			</Link>
		)

	if (onClick)
		return (
			<button onClick={onClick} className={`${mainClass} ${restClass} `}>
				{text}
			</button>
		)
}

export default Button
