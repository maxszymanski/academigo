import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<div className="w-full px-4 lg:px-6 pb-8">
			<p className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">O mnie</p>
			<div className="w-full flex flex-wrap gap-14 justify-evenly items-start">
				<div className="w-full flex flex-col gap-14 items-center lg:gap-20 2xl:gap-28 md:max-w-md 2xl:max-w-lg">
					<Skelton props="h-[627px] w-full rounded-lg" />
					<Skelton props="h-[610px] w-full rounded-lg" />
				</div>
				<div className="w-full flex flex-col gap-14 items-center lg:gap-20 2xl:gap-28 md:max-w-md 2xl:max-w-lg">
					<Skelton props="h-[711px] w-full rounded-lg" />
					<Skelton props="h-[406px] w-full rounded-lg" />
				</div>
			</div>
		</div>
	)
}

export default loading
