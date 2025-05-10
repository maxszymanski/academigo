import Image from 'next/image'
import Blog from '@/assets/blog.webp'

function BlogHeader() {
	return (
		<header className=" pt-12 md:pt-0 md:pb-8 lg:pb-0">
			<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
				<div className="flex h-full w-full flex-col justify-center gap-4 py-10 text-center text-primary/90 md:w-1/2 md:items-start md:py-0 md:text-left lg:py-20 lg:pl-6 2xl:gap-8">
					<h1 className="w-full text-xl font-extrabold leading-9 tracking-wide lg:text-3xl lg:leading-[50px] xl:text-4xl xl:leading-[65px] 2xl:text-[44px] 2xl:leading-[80px]">
						Zanurz się w świecie wiedzy <br />
						Rozszerzaj swoje horyzonty <br /> Rozwijaj się z nami!
					</h1>
					<p className="text-sm xl:text-base">Nasze artykuły to dawka inspiracji i praktycznych wskazówek!</p>
				</div>
				<div className="flex items-center justify-center md:w-1/2">
					<Image
						width={400}
						height={370}
						src={Blog}
						alt="student"
						priority
						quality={80}
						className="hidden h-auto max-w-80 md:block  lg:max-w-md xl:max-w-lg  w-auto"
					/>
				</div>
			</div>
		</header>
	)
}

export default BlogHeader
