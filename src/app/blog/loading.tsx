import Skelton from '../_components/_skeltons/Skelton'

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
					<div className="items-center justify-center md:w-1/2 hidden md:flex">
						<Skelton props="h-[200px] w-[320px] lg:h-[230px] lg:w-[420px]" />
					</div>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<div className="container mx-auto px-4  pt-6 pb-16 lg:pt-16 lg:pb-24">
					<div className="flex flex-col items-center gap-10 sm:gap-14">
						<div className="w-full max-w-3xl overflow-hidden  bg-white rounded-lg shadow-md border">
							<Skelton props="h-[425px] max-h-80 w-full max-w-3xl !rounded-none" />
							<div className="px-4 sm:px-10 py-6 text-xs max-w-[600px] sm:py-8 md:pr-0 xl:pb-10 xl:pl-14 ">
								<Skelton props="h-8 w-full  mb-3" />
								<Skelton props="h-8 w-full sm:hidden " />
								<Skelton props="h-3 w-full max-w-[30%] mt-3 mb-7" />
								<Skelton props="h-5 w-full  mt-2 " />
								<Skelton props="h-5 w-full  mt-2 sm:hidden" />
								<Skelton props="h-5 w-full  mt-2 mb-7 " />
								<Skelton props="h-10 w-full max-w-[160px]  mt-2 " />
							</div>
						</div>
						<div className="w-full max-w-3xl overflow-hidden  bg-white rounded-lg shadow-md border">
							<Skelton props="h-[425px] max-h-80 w-full max-w-3xl !rounded-none" />
							<div className="px-4 sm:px-10 py-6 text-xs max-w-[600px] sm:py-8 md:pr-0 xl:pb-10 xl:pl-14 ">
								<Skelton props="h-8 w-full  mb-3" />
								<Skelton props="h-8 w-full sm:hidden " />
								<Skelton props="h-3 w-full max-w-[30%] mt-3 mb-7" />
								<Skelton props="h-5 w-full  mt-2 " />
								<Skelton props="h-5 w-full  mt-2 sm:hidden" />
								<Skelton props="h-5 w-full  mt-2 mb-7 " />
								<Skelton props="h-10 w-full max-w-[160px]  mt-2 " />
							</div>
						</div>
						<div className="w-full max-w-3xl overflow-hidden  bg-white rounded-lg shadow-md border">
							<Skelton props="h-[425px] max-h-80 w-full max-w-3xl !rounded-none" />
							<div className="px-4 sm:px-10 py-6 text-xs max-w-[600px] sm:py-8 md:pr-0 xl:pb-10 xl:pl-14 ">
								<Skelton props="h-8 w-full  mb-3" />
								<Skelton props="h-8 w-full sm:hidden " />
								<Skelton props="h-3 w-full max-w-[30%] mt-3 mb-7" />
								<Skelton props="h-5 w-full  mt-2 " />
								<Skelton props="h-5 w-full  mt-2 sm:hidden" />
								<Skelton props="h-5 w-full  mt-2 mb-7 " />
								<Skelton props="h-10 w-full max-w-[160px]  mt-2 " />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default loading
