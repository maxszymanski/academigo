import Image from 'next/image'
import Work from '@/assets/work.webp'

function WorkHeader() {
	return (
		<header className=" pt-12 md:pb-8 md:pt-8 lg:py-8 bg-[#FBFDFD]">
			<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
				<div className="flex h-full w-full flex-col justify-center gap-4 py-10 text-center text-primary/90 md:w-1/2 md:items-start md:py-0 md:text-left lg:py-20 xl:pl-6 2xl:gap-8">
					<h1 className="w-full text-xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
						Pomóż nam rozwijać
						<br />
						Społecznościowy projekt <br /> Szukamy właśnie Ciebie!
					</h1>
					<p className="text-sm xl:text-base">
						Dołącz do nas i pomóż tworzyć największą platformę z kursami w Polsce
					</p>
				</div>
				<div className="flex items-center justify-center md:w-1/2">
					<Image
						width={400}
						height={350}
						src={Work}
						alt="Uśmiechnięci studenci"
						priority
						quality={80}
						className="w-full h-auto max-w-80 md:block  xl:max-w-[400px]  md:w-auto"
					/>
				</div>
			</div>
		</header>
	)
}

export default WorkHeader
