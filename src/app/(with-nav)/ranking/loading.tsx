import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className="h-[274px] bg-slate50 pt-24 pb-14 md:py-14">
				<div className="container mx-auto flex flex-col justify-center items-center">
					<Skelton props="h-[36px] w-[150px]  xl:h-[48px] xl:w-[200px]" />
					<div className="flex flex-wrap gap-4 pt-8 md:gap-12 justify-center xl:pt-12">
						<Skelton props="h-[54px] w-[152px]  xl:h-[58px] xl:w-[200px]" />
						<Skelton props="h-[54px] w-[152px] xl:h-[58px] xl:w-[200px]" />
					</div>
				</div>
			</div>
			<div className="flex-1 bg-slate50  sm:px-6 pb-12 lg:pb-20">
				<div className="container mx-auto lg:max-w-5xl xl:max-w-6xl">
					<Skelton props="rounded-3xl w-full h-[500px] " />
				</div>
			</div>
		</>
	)
}

export default loading
