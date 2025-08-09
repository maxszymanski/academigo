import LoadingCourseCard from '@/app/_components/_courses/LoadingCourseCard'

import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className="bg-gradient-primary pt-12 md:pt-0 h-[292px] md:h-[342px] lg:h-[427px] 2xl:h-[456px]">
				<div className="container mx-auto flex h-full w-full flex-col items-center justify-between px-4 text-center md:flex-row md:items-center lg:px-6 xl:px-8">
					<div className="flex h-full w-full flex-col justify-center items-center gap-4 py-10  md:w-1/2 md:items-start md:py-0  lg:py-20 lg:pl-6 2xl:gap-8 ">
						<div className="flex flex-col items-center md:items-start">
							<Skelton props="h-[25px] w-[220px] lg:h-[32px] mb-4" />
							<Skelton props="h-[25px] w-[200px] lg:h-[32px] mb-4" />
							<Skelton props="h-[25px] w-[240px] lg:h-[32px] mb-4" />
						</div>
						<Skelton props="h-[25px] w-full max-w-[80%]" />
					</div>
					<div className="items-center justify-center md:w-1/2 hidden md:flex">
						<Skelton props="h-[200px] w-[320px] lg:h-[230px] lg:w-[420px]" />
					</div>
				</div>
			</div>
			<div className="relative mx-auto h-full min-h-screen w-full px-4 py-10 lg:container xl:py-20">
				<Skelton props="h-[78px] 2xl:h-[92px] w-full rounded-xl" />
				<div className="mx-auto w-full max-w-5xl pt-10 2xl:max-w-6xl 2xl:pt-14 hidden lg:block">
					<div className=" w-full flex-wrap items-center justify-center gap-x-8 gap-y-8 flex">
						<Skelton props="h-[66px] w-[220px]  2xl:h-[69px] rounded-full" />
						<Skelton props="h-[66px] w-[200px] 2xl:h-[69px]  rounded-full" />
						<Skelton props="h-[66px] w-[240px] 2xl:h-[69px] rounded-full " />
						<Skelton props="h-[66px] w-[230px] 2xl:h-[69px]  rounded-full" />
						<Skelton props="h-[66px] w-[220px] 2xl:h-[69px]  rounded-full" />
						<Skelton props="h-[66px] w-[240px] 2xl:h-[69px]  rounded-full" />
						<Skelton props="h-[66px] w-[230px] 2xl:h-[69px]  rounded-full" />
						<Skelton props="h-[66px] w-[230px]  2xl:h-[69px] rounded-full" />
					</div>
				</div>
				<div className="relative h-full w-full pt-12 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 xl:gap-2 xl:pt-16 2xl:gap-16 ">
					<div className="mx-auto flex w-full max-w-[328px] flex-wrap items-center justify-center gap-y-5 sm:px-4 md:max-w-full md:flex-nowrap md:justify-between lg:hidden lg:px-2">
						<Skelton props="h-[54px] w-full md:w-[145px] rounded-full" />
						<div className="flex items-center justify-center w-full gap-3.5 md:justify-end">
							<Skelton props=" hidden md:block h-[40px] w-[40px] rounded-md " />
							<Skelton props=" hidden md:block h-[40px] w-[40px] rounded-md " />
							<Skelton props="h-[54px] w-[129px] rounded-full " />
							<Skelton props="h-[54px] w-[131px] rounded-full " />
						</div>
					</div>
					<div className="hidden min-w-72 lg:flex flex-col gap-8  pr-4  scrollbar-track-white  lg:top-6 xl:min-w-[340px]">
						<div className="h-[393px]">
							<Skelton props="h-8 w-[210px] mb-6" />
							<Skelton props="h-[18px] w-[170px] mb-6 " />
							<Skelton props="h-[18px] w-[230px] mb-6 " />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[150px]  mb-6" />
							<Skelton props="h-[18px] w-[160px]  mb-6" />
							<Skelton props="h-[18px] w-[220px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
						</div>
						<div className="">
							<Skelton props="h-8 w-[210px] mb-6" />
							<Skelton props="h-[18px] w-[170px] mb-6 " />
							<Skelton props="h-[18px] w-[230px] mb-6 " />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[150px]  mb-6" />
							<Skelton props="h-[18px] w-[160px]  mb-6" />
							<Skelton props="h-[18px] w-[220px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
							<Skelton props="h-[18px] w-[200px]  mb-6" />
						</div>
						<div className="">
							<Skelton props="h-8 w-[160px] mb-6" />
							<Skelton props="h-[18px] w-[170px] mb-6 " />
						</div>
						<Skelton props="h-[36px] w-[200px]  rounded-full" />
					</div>
					<div className="w-full max-w-6xl flex flex-col">
						<div className="hidden lg:flex items-center justify-center w-full gap-3.5 md:justify-end">
							<Skelton props=" hidden md:block h-[40px] w-[40px] rounded-md " />
							<Skelton props=" hidden md:block h-[40px] w-[40px] rounded-md " />
							<Skelton props="h-[54px] w-[129px] rounded-full " />
							<Skelton props="h-[54px] w-[131px] rounded-full " />
						</div>
						<div className="relative flex w-full flex-wrap justify-center gap-x-5 gap-y-6 pt-12 lg:justify-evenly xl:gap-x-2 2xl:justify-between 2xl:gap-y-10">
							{Array.from({ length: 9 }, (_, i) => (
								<LoadingCourseCard key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default loading
