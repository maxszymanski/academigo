import Image from 'next/image'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

function PanelHello() {
	const today = new Date()
	const formattedDate = format(today, 'd MMMM yyyy', { locale: pl })

	return (
		<div className="bg-primary rounded-3xl text-white/75 pl-3.5 pt-6 mb-8 flex gap-1 overflow-hidden justify-evenly">
			<div className="text-xs pb-6 justify-self-start">
				<p>{formattedDate}</p>
				<div className="mt-8">
					<p className="text-lg text-white font-semibold mb-2">Witaj ponownie Aga!</p>
					<p className="max-w-52">Zarządzaj swoim kontem i kursami w jednym miejscu</p>
				</div>
			</div>
			<Image src="/student-girl.png" alt="obraz studenta" width={110} height={110} className="self-end" />
			<Image src="/student-girl.png" alt="obraz studenta" width={274} height={274} className="self-end hidden" />
		</div>
	)
}

export default PanelHello
