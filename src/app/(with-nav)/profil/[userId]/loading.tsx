import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className="relative  h-full  w-full  bg-white  ">
				<div className="w-full  flex flex-col      ">
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
									<Skelton props="h-[24px] w-[276px]" />
									<Skelton props="h-[24px] w-[256px]" />
									<Skelton props="h-[24px] w-[276px]" />
									<Skelton props="h-[24px] w-[266px]" />
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:bg-slate50 md:mt-6 xl:mt-8">
						<div className="lg:container 2xl:max-w-7xl mx-auto md:flex w-full md:justify-evenly xl:py-6">
							<div className="pt-6 pb-8 mt-6 md:mt-0  bg-slate50 px-4 md:px-8 ">
								<Skelton props="h-[20px] w-[120px] md:h-[24px] xl:h-[30px] mb-4" />

								<div className={`flex flex-col gap-3 md:gap-4`}>
									<Skelton props="h-[20px] w-[170px] md:h-[24px] md:w-[200px]" />
									<Skelton props="h-[20px] w-[180px] md:h-[24px] md:w-[200px]" />
									<Skelton props="h-[20px] w-[150px] md:h-[24px] md:w-[200px]" />
									<Skelton props="h-[20px] w-[150px] md:h-[24px] md:w-[200px]" />
									<Skelton props="h-[20px] w-[160px] md:h-[24px] md:w-[200px]" />
								</div>
							</div>

							<div className="pt-6 pb-8 mt-6 md:mt-0 bg-slate50 px-4 md:px-8 ">
								<Skelton props="h-[20px] w-[150px] md:h-[24px] xl:h-[30px] mb-7" />
								<div className="mb-8 flex w-full flex-col items-center  md:items-start">
									<Skelton props="h-[24px] w-[175px] md:h-[28px] md:w-[200px]" />
									<Skelton props="h-[24px] w-[200px] md:h-[28px] md:w-[200px] mt-3" />
								</div>
								<div className="flex w-full flex-col items-center md:items-start">
									<Skelton props="h-[24px] w-[230px] md:h-[28px] md:w-[250px]" />
									<Skelton props="h-[24px] w-[200px] md:h-[28px] md:w-[200px] mt-3" />
								</div>
								<div className="flex justify-center mt-4 md:justify-start">
									<Skelton props="h-[46px] w-[181px] md:h-[46px] xl:h-[50px] md:w-[200px] mt-3" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default loading
