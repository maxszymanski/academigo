import LoadingCourseCard from '@/app/_components/_courses/LoadingCourseCard'
import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<>
			<div className="lg:bg-gradient-primary pt-12 md:pt-0  lg:min-h-[492px]  lg:pt-4 w-full overflow-hidden ">
				<div className="lg:container mx-auto w-full pt-8">
					<div className="flex flex-row items-center justify-between sm:justify-center gap-3 overflow-x-auto  w-full  pb-2  px-2 pt-4 scrollbar-none lg:justify-start ">
						<Skelton props="h-[24px] w-[140px] rounded-full " />
						<Skelton props="h-[24px] w-[140px] rounded-full " />
						<Skelton props="h-[24px] w-[200px] rounded-full " />
					</div>
					<div className="w-full flex items-center justify-center">
						<Skelton props="h-[220px] sm:h-[300px] w-full relative  lg:hidden max-w-[400px] sm:max-w-[600px] mt-2" />
					</div>
				</div>
				<div className="container mx-auto flex h-full w-full flex-col items-center lg:items-start  px-4  lg:flex-row  lg:px-6 xl:px-8 py-10 gap-12 lg:justify-evenly xl:justify-between ">
					<div className="flex h-full w-full flex-col items-center justify-center gap-4   lg:w-1/2 lg:items-start  ">
						<Skelton props="h-[72px] w-full lg:h-[100px] 2xl:h-[140px]" />
						<Skelton props="h-[60px] w-full xl:my-2" />
						<Skelton props="h-[20px] mt-6 w-[150px] lg:h-[40px]" />
					</div>
					<div className=" flex flex-col gap-8 w-full md:max-w-80 xl:max-w-md md:gap-12 2xl:pt-2 lg:pb-20">
						<div className="flex items-end justify-evenly gap-10 lg:gap-16  w-full ">
							<Skelton props="h-[72px] w-[50px] rounded-xl xl:h-[90px] xl:w-[60px] " />
							<Skelton props="h-[72px] w-[50px] rounded-xl xl:h-[90px] xl:w-[60px]" />
							<Skelton props="h-[72px] w-[50px] rounded-xl xl:h-[90px] xl:w-[60px]" />
						</div>
						<div className="w-full flex items-center justify-center lg:block">
							<Skelton props="h-[44px] w-full xl:h-[68px]" />
						</div>
					</div>
				</div>
			</div>
			<div className="relative  h-full min-h-screen w-full px-4  pb-8 bg-slate50">
				<div className="w-full container mx-auto  flex flex-col items-center lg:flex-row-reverse  xl:py-14  py-10 lg:items-start  lg:justify-between">
					<div className="lg:sticky lg:right-5 lg:top-8 lg:-mt-32  flex-shrink-0 flex-grow-0 rounded-lg  w-full max-w-[360px]     flex flex-col  overflow-hidden z-20  pb-12 lg:pb-0 lg:bg-white">
						<Skelton props="h-[220px] hidden lg:block rounded-lg" />
						<div className=" w-full lg:px-4 lg:pt-8 pb-2  flex flex-col gap-5">
							<Skelton props="h-[48px] w-[120px]" />
							<Skelton props="h-[40px] w-full" />
							<div className="flex flex-col gap-3 ">
								<Skelton props="h-[24px] w-[120px]" />
								<Skelton props="h-[24px] w-[140px]" />
								<Skelton props="h-[24px] w-[160px]" />
								<Skelton props="h-[24px] w-[180px]" />
							</div>
							<Skelton props="h-[50px] w-full px-6 xl:px-10 mt-4 " />
						</div>
						<div className="w-full flex flex-col gap-6 pt-3 pb-1 mt-4 px-6">
							<div>
								<Skelton props="h-[16px] w-[100px] mb-4" />
								<Skelton props="h-[35px] w-[280px]" />
								<Skelton props="h-[16px] w-[100px] my-4" />
								<Skelton props="h-[35px] w-full mb-4" />
							</div>
						</div>
					</div>
					<div className="lg:max-w-[60%] xl:max-w-[70%] xl:pr-2 2xl:px-4 w-full">
						<Skelton props="h-[40px] w-[80px] mb-6" />
						<Skelton props="h-[70px] w-[90%] mb-4" />
						<Skelton props="h-[70px] w-[90%] mb-10" />
						<Skelton props="h-[40px] w-[80%] md:w-[500px] mb-6" />
						<div>
							<Skelton props="h-[30px] w-[90%] xl:w-[600px] mb-3" />
							<Skelton props="h-[30px] w-[90%] xl:w-[600px] mb-3" />
							<Skelton props="h-[30px] w-[90%] xl:w-[600px] mb-3" />
							<Skelton props="h-[30px] w-[90%] xl:w-[600px] mb-3" />
							<Skelton props="h-[30px] w-[90%] xl:w-[600px] mb-3" />
						</div>
						<Skelton props="h-[40px] w-[90%] mb-6" />
						<Skelton props="h-[40px] w-[90%] mb-6" />
						<Skelton props="h-[40px] w-[90%] mb-6" />
						<div>
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
						</div>
						<div className="mt-8">
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-4" />
							<Skelton props="h-[30px] w-[40%] xl:w-[300px] mb-3" />
							<div className="flex items-center  gap-3 mt-8">
								<Skelton props="h-[128px] w-[128px] rounded-full" />
								<div>
									<Skelton props="h-[20px] w-[110px] mb-3" />
									<Skelton props="h-[20px] w-[120px] mb-3" />
									<Skelton props="h-[20px] w-[130px] mb-3" />
									<Skelton props="h-[20px] w-[140px] mb-3" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:py-6 lg:py-8 lg:container lg:mx-auto 2xl:pl-4">
					<Skelton props="h-[30px] w-[170px] rounded-full mb-3" />
					<div className="flex w-full items-center gap-8 overflow-hidden py-6 relative z-20">
						{Array.from({ length: 6 }, (_, i) => (
							<LoadingCourseCard key={i} />
						))}
					</div>
				</div>
				<div className="container mx-auto flex flex-col gap-5 items-center justify-center py-6 lg:py-8 xl:gap-6">
					<Skelton props="h-[30px] w-full max-w-[400px] " />
					<Skelton props="h-[41px] w-[182px] rounded-full " />
				</div>
			</div>
		</>
	)
}

export default loading
