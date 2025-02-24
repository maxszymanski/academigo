import Image from 'next/image'
import Button from '../Button'

function PanelHeader() {
	return (
		<header className="pl-4 pr-6 py-4 flex justify-between text-dark items-center">
			<div className="flex items-center gap-3 ">
				<Button variant="transparent">
					<Image
						priority
						src="/aga.png"
						width={42}
						height={42}
						className="rounded-full border-2 border-primary2 hover:border-primary tranistion-color duration-300 focus:border-primary object-cover  w-[42px] h-[42px] "
						alt="zdjęcie użytkownika"
					/>
				</Button>
				<div className="text-sm">
					<p className="font-semibold">Aga</p>
					<p className="text-dark/50">1 rok</p>
				</div>
			</div>
			<h2 className="font-medium text-3xl text-primary">Panel</h2>
		</header>
	)
}

export default PanelHeader
