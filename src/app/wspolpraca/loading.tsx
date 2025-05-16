import Skelton from '../_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className=" pt-12 md:pb-8 md:pt-8 lg:py-8 bg-[#FBFDFD]">
				<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
					<div className="flex h-full w-full flex-col justify-center gap-4 py-10 text-center text-primary/90 md:w-1/2 md:items-start md:py-0 md:text-left lg:py-20 xl:pl-6 2xl:gap-8">
						<div className="flex flex-col items-center md:items-start">
							<Skelton props="h-[25px] w-[220px] lg:h-[32px] mb-4 lg:w-[400px] xl:w-[550px] 2xl:mb-6" />
							<Skelton props="h-[25px] w-[200px] lg:h-[32px] mb-4 lg:w-[370px] xl:w-[520px] 2xl:mb-6" />
							<Skelton props="h-[25px] w-[240px] lg:h-[32px] mb-4 lg:w-[350px] xl:w-[500px] 2xl:mb-6" />
							<Skelton props="h-[25px] w-full max-w-[80%]" />
						</div>
					</div>
					<div className="items-center justify-center md:w-1/2 flex w-full">
						<Skelton props="h-[200px] w-[320px] lg:h-[230px] lg:w-[420px]" />
					</div>
				</div>
			</div>
			<div className="w-full  pt-6 md:pt-0 lg:pt-10  text-stone400 overflow-hidden">
				<div className="w-full container mx-auto px-4 pb-6 lg:pb-7 xl:py-10 2xl:pb-12 flex flex-col items-center ">
					<Skelton props="h-[28px] w-[150px]" />

					<div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col  gap-10 lg:gap-16 xl:gap-20 w-full">
						<div className="flex flex-wrap gap-x-5 justify-evenly gap-y-7 w-full">
							<Skelton props="h-[105px] w-full max-w-[384px] !rounded-xl" />
							<Skelton props="h-[105px] w-full max-w-[384px] !rounded-xl" />
							<Skelton props="h-[105px] w-full max-w-[384px] !rounded-xl" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full  px-4 pt-6 md:lg:pt-12 xl:pt-16  pb-6 lg:pb-7 xl:pb-10 2xl:pb-12 "></div>
		</>
	)
}

export default loading
