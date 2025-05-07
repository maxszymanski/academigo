import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void) | undefined
	children: React.ReactNode
	restClass?: string
	href?: string | undefined
	isActive?: boolean | undefined
	disabled?: boolean | undefined
	id?: string | undefined
	value?: number | string | undefined
	isActiveClass?: string | undefined
	target?: string

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
		| 'transparentDark'
		| 'submit'
		| 'danger'
		| 'search'
}

const mainClass =
	'rounded-full flex  items-center text-nowrap transition-colors duration-300 outline-primary outline-offset-2 relative'

const variants = {
	purple: 'hover:bg-primary/80 bg-primary text-sm text-white md:text-xs lg:text-sm xl:px-6 xl:py-3.5 py-2 px-4 text-center justify-center  ',
	lightPurple: 'hover:bg-primary/80 bg-primary text-white px-4 justify-center ',
	white: 'bg-white text-primary font-semibold tracking-wide text-base hover:bg-slate50 px-4 py-3.5 justify-center ',
	search: 'bg-transparent text-primary font-medium tracking-wide text-sm sm:text-base hover:text-primary/80 p-2 justify-center lg:text-second lg:hover:text-white/85 lg:hover:bg-second/20 hover:bg-stale50',
	transparent: 'text-sm bg-transparent text-white/50 hover:text-white ',
	transparentDark: 'bg-transparent text-dark2 hover:text-dark2/80 ',
	arrow: 'text-primary  py-3 px-3 absolute z-40   mb-2 hover:text-primary/80 justify-center bg-slate-100 ',
	dark: 'text-white py-2 xl:py-3.5 px-6 text-sm bg-lightdark hover:bg-lightdark/70 justify-center  ',
	panel: 'text-white/70 hover:text-white w-full font-semibold p-3  ',
	filter: 'text-dark2 border  border-stone400 py-4 px-4 bg-transparent hover:border-primary hover:text-primary focus:border-primary text-sm xl:text-base xl:px-6 2xl:text-lg  ',
	view: `text-sm bg-transparent  hover:text-primary  rounded-none p-2   `,
	category: ' w-full   py-2.5 hover:text-primary hover:bg-slate50  mb-1   ',
	desktopCategory:
		'text-base w-fit px-10 py-5 hover:text-primary/80  hover:border-primary/70 border border-stone400 2xl:text-lg  ',
	submit: 'text-primary border  border-slate-200 py-4 px-12 bg-slate50 hover:border-primary focus:border-primary  xl:text-base font-medium lg:px-16 2xl:text-lg justify-center  ',
	danger: 'text-white/80 border  border-red-700 py-4 px-12 bg-red-600 hover:bg-red-700 focus:bg-red-700  xl:text-base font-medium lg:px-16 2xl:text-lg justify-center  ',
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
	target = '_self',

	...rest
}: ButtonProps) {
	const variantClass = variants[variant] || variants.purple

	if (href)
		return (
			<Link
				href={href}
				rel="noopener noreferrer"
				target={target}
				className={` ${mainClass} ${variantClass} ${restClass} ${isActive ? isActiveClass : ''}`}>
				{children}
			</Link>
		)
	else
		return (
			<button
				value={value}
				onClick={onClick}
				className={`${mainClass} ${restClass} ${variantClass} ${isActive ? isActiveClass : 'text-dark2'}`}
				disabled={disabled}
				id={id}
				{...rest}>
				{children}
			</button>
		)
}

export default Button
