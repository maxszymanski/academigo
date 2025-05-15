import Image, { StaticImageData } from 'next/image'

function SingleJob({
	title,
	description,
	job,
	odd = false,
}: {
	title: string
	description: string
	job: StaticImageData
	odd?: boolean
}) {
	return (
		<div className={`  md:pb-8 md:pt-8 lg:py-8 xl:py-16 2xl:py-20 ${odd ? 'bg-[#FBFDFD]' : ''} `}>
			<div
				className={`container 2xl:max-w-[1450px] mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8  ${odd ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
				<div className="flex h-full w-full flex-col justify-center gap-4 md:gap-8  xl:gap-10 py-10 text-center  md:w-1/2 md:items-start md:py-0 md:text-left lg:py-20 xl:pl-6 2xl:gap-12">
					<h1 className="w-full text-xl font-extrabold leading-9 tracking-wide md:text-2xl lg:text-3xl  xl:text-4xl 2xl:text-[44px] text-primary/90">
						{title}
					</h1>
					<p className="text-base  xl:text-lg leading-[180%] xl:leading-[200%] font-medium">{description}</p>
				</div>
				<div className="flex items-center justify-center md:w-1/2">
					<Image
						width={400}
						height={350}
						src={job}
						alt="Animowane zdjęcie przedstawiające pracownika"
						priority
						quality={80}
						className="h-auto max-w-80 md:block  xl:max-w-[400px]  w-auto rounded-2xl "
					/>
				</div>
			</div>
		</div>
	)
}

export default SingleJob
