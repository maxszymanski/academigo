import HelloSkelton from './HelloSkelton'
import Skelton from './Skelton'

function DashboardSkelton() {
	return (
		<>
			<HelloSkelton />
			<section className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-5 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 sm:gap-8 md:py-12 lg:px-6 py-6">
				<Skelton />
				<Skelton />
				<Skelton />
				<Skelton />
			</section>
		</>
	)
}

export default DashboardSkelton
