import Image from 'next/image'
import Button from '../Button'
import { FaArrowLeftLong } from 'react-icons/fa6'

function PanelHeader() {
	return (
		<header className="pl-4 pr-6 py-4 flex justify-between text-dark items-center   lg:px-6  xl:max-w-[1440px] xl:mx-auto w-full">
			<div className="flex items-center gap-3 ">
				<Button variant="transparent">
					<Image
						priority
						src="/aga.png"
						width={44}
						height={44}
						className="rounded-full border-2 border-primary2 hover:border-primary tranistion-color duration-300 focus:border-primary object-cover  w-[42px] h-[42px] xl:w-11 xl:h-11"
						alt="zdjęcie użytkownika"
					/>
				</Button>
				<div className="text-sm">
					<p className="font-semibold">Aga</p>
					<p className="text-dark/50">1 rok</p>
				</div>
			</div>

			<Button href="/" restClass="rounded-xl">
				<FaArrowLeftLong className="size-4 mr-3" /> Wyjście
			</Button>
		</header>
	)
}

export default PanelHeader
