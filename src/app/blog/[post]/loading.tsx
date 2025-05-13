import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className="bg-white pt-12 md:pt-0 h-[292px] md:h-[342px] lg:h-[427px] 2xl:h-[456px]">
				<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
					<div className="flex h-full w-full flex-col justify-center items-center gap-4 py-10  md:w-1/2 md:items-start md:py-0  lg:py-20 lg:pl-6 2xl:gap-8 ">
						<div className="flex flex-col items-center md:items-start w-full">
							<Skelton props="h-[25px] w-[220px] lg:h-[32px] mb-4 lg:mb-6 lg:w-full lg:max-w-[80%] xl:mb-7" />
							<Skelton props="h-[25px] w-[200px] lg:h-[32px] mb-4 lg:mb-6 lg:w-full lg:max-w-[80%] xl:mb-7" />
							<Skelton props="h-[25px] w-[240px] lg:h-[32px] mb-4 lg:mb-6 lg:w-full lg:max-w-[70%] xl:mb-7" />
						</div>
						<Skelton props="h-[25px] w-full max-w-[80%]" />
					</div>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center ">
				<div className="container lg:max-w-5xl mx-auto px-4  ">
					<div className=" pt-6 pb-16">
						<Skelton props="h-[500px] max-h-80 sm:max-h-full w-full max-w-5xl  !rounded-xl " />
						<div className="pt-12 w-full">
							{Array.from({ length: 30 }).map((_, index) => (
								<Skelton key={index} props="h-5 w-full mb-2.5" />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default loading
