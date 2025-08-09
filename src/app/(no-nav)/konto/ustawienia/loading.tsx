import Skelton from '@/app/_components/_skeltons/Skelton'

function loading() {
	return (
		<div className="w-full px-4 lg:px-6 pb-8">
			<p className="text-primary text-3xl text-center font-semibold mb-12 xl:mb-20">Ustawienia</p>
			<div className="flex flex-wrap justify-evenly gap-7">
				<Skelton props="h-[330px] w-full rounded-lg max-w-[512px]" />
			</div>
		</div>
	)
}

export default loading
