import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<div>
			<div className="relative h-full w-full bg-white">
				<div className="bg-slate50 lg:bg-white pt-20  pb-8 md:pt-8  xl:py-12 2xl:py-14">
					<div className="flex flex-col  md:flex-row md:gap-16   lg:container xl:max-w-6xl mx-auto  xl:gap-40 px-4 xl:px-8 md:items-center xl:justify-center ">
						<div className="md:flex md:flex-col md:items-center md:max-w-80 pb-1 w-full flex-shrink-0 mb:pb-0">
							<div className="flex  gap-4 md:gap-5  items-center  md:flex-col  ">
								<Skelton props="h-16 w-16 rounded-full md:h-72 md:w-72 md:flex-shrink-0 xl:h-80 xl:w-80" />

								<div className="flex flex-col md:hidden">
									<Skelton props="h-[28px] w-[110px] lg:h-[32px] xl:h-[40px] " />
									<Skelton props="h-[20px] w-[125px] mt-2 xl:h-[24px]" />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* userInformation */}
				<div className="flex flex-col  ">
					<div className="hidden flex-col md:flex mb-6">
						<Skelton props="h-[28px] w-[110px] lg:h-[32px] xl:h-[40px] " />
						<Skelton props="h-[20px] w-[125px] mt-2 xl:h-[24px]" />
					</div>
					<div className="flex flex-col gap-2.5 pt-5 ">
						<div className="flex items-center gap-10 text-sm pb-2 ">
							<Skelton props="h-[20px] w-[70px]  md:h-[24px]" />
							<Skelton props="h-[20px] w-[65px]  md:h-[24px]" />
						</div>
						<Skelton props="h-[24px] w-[76px]" />
						<Skelton props="h-[24px] w-[76px]" />
						<Skelton props="h-[24px] w-[176px]" />
						<Skelton props="h-[24px] w-[156px]" />
						<Skelton props="h-[24px] w-[176px]" />
						<Skelton props="h-[24px] w-[166px]" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default loading
