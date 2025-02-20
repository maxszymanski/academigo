interface Learn {
	src: string
	alt: string
	title: string
	description: string
	variant: 'dark' | 'light'
}

function LearnInfo({ src, alt, description, title, variant }: Learn) {
	return (
		<div className="flex flex-col justify-between items-center gap-5 text-center">
			<img src={src} alt={alt} />
			<div className="max-w-72 text-center mx-auto">
				<p
					className={`${
						variant === 'dark'
							? 'text-stone400 xl:text-lg mb-1.5'
							: variant === 'light'
							? 'text-white text-4xl mt-2 mb-3'
							: ''
					}  font-semibold  `}>
					{title}
				</p>
				<p
					className={`${
						variant === 'dark'
							? 'text-stone400'
							: variant === 'light'
							? 'text-white max-w-56 xl:max-w-72 xl:px-3'
							: ''
					} text-xs xl:text-sm `}>
					{description}
				</p>
			</div>
		</div>
	)
}

export default LearnInfo
