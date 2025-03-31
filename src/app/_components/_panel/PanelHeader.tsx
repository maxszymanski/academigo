import Image from 'next/image'
import Button from '../_ui/Button'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { differenceInYears } from 'date-fns'

function PanelHeader({ username = 'Gość', createdAt }: { username?: string; createdAt?: string }) {
	const years = createdAt ? differenceInYears(new Date(), new Date(createdAt)) : 0
	const displayYear = years < 1 ? '1 rok' : `${years + 1} rok`

	return (
		<header className="flex w-full items-center justify-between py-4 pl-4 pr-6 text-dark lg:px-6 xl:mx-auto xl:max-w-[1440px]">
			<div className="relative flex items-center gap-3">
				<Image
					priority
					src="/aga.png"
					width={44}
					height={44}
					className="tranistion-color h-[42px] w-[42px] rounded-full border-2 border-primary2 object-cover duration-300 focus:border-primary xl:h-11 xl:w-11"
					alt="zdjęcie użytkownika"
				/>

				<div className="text-sm">
					<p className="font-semibold">{username}</p>
					<p className="text-dark/50">{displayYear}</p>
				</div>
			</div>

			<Button href="/" restClass="rounded-xl">
				<FaArrowLeftLong className="mr-3 size-4" /> Wyjście
			</Button>
		</header>
	)
}

export default PanelHeader
