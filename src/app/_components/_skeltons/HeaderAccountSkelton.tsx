import { FaArrowLeftLong } from 'react-icons/fa6'
import Button from '../_ui/Button'
import Skelton from './Skelton'

function HeaderAccountSkelton() {
	return (
		<header className="flex w-full items-center justify-between py-4 pl-4 pr-6 text-dark lg:px-6 xl:mx-auto xl:max-w-[1440px]">
			<div className="relative flex items-center gap-3">
				<Skelton props=" h-[42px] w-[42px] rounded-full  object-cover   xl:h-11 xl:w-11 rounded-full" />

				<div className="w-[92px]">
					<Skelton props="h-[20px] w-full" />
					<Skelton props="h-[20px] w-[30px]" />
				</div>
			</div>
			<Button href="/" restClass="rounded-xl">
				<FaArrowLeftLong className="mr-3 size-4" /> Wyjście
			</Button>
		</header>
	)
}

export default HeaderAccountSkelton
