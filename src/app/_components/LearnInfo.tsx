interface Learn {
	src: string
	alt: string
	title: string
	description: string
}

function LearnInfo({ src, alt, description, title }: Learn) {
	return (
		<div className="flex flex-col items-center gap-5 text-center">
			<img src={src} alt={alt} />
			<div className="max-w-72 text-center mx-auto">
				<p className="text-stone400 font-semibold mb-1.5 xl:text-lg">{title}</p>
				<p className="text-stone400 text-xs xl:text-sm ">{description}</p>
			</div>
		</div>
	)
}

export default LearnInfo
