import Image from 'next/image'
import StudentGirl from '@/assets/student-girl.webp'
import Student from '@/assets//student-sm.webp'
import { formattedDate } from '@/app/utils/helpers'

function PanelHello({ gender, username }: { gender: string | null; username: string }) {
	const today = new Date()
	const formatted = formattedDate(today.toString())

	return (
		<div className="mx-1 mb-8 flex justify-evenly gap-1 overflow-hidden rounded-3xl bg-primary pl-3.5 pt-6 text-white/75 sm:mx-4 sm:justify-between sm:px-14 lg:mx-6 lg:px-12 xl:px-16 2xl:px-40">
			<div className="pb-6 text-xs sm:flex sm:flex-col sm:justify-between sm:pb-0 md:pt-4">
				<p className="md:text-sm">{formatted}</p>
				<div className="mt-8 sm:mb-8 sm:items-end md:mb-10 xl:mt-10 2xl:my-12">
					<p className="mb-2 text-lg font-semibold text-white sm:mb-3 sm:text-2xl md:text-3xl lg:text-4xl xl:mb-6 xl:text-5xl">
						Witaj ponownie {username}!
					</p>
					<p className="max-w-52 sm:max-w-full xl:text-base">
						Zarządzaj swoim kontem i kursami w jednym miejscu
					</p>
				</div>
			</div>
			<Image
				priority
				src={gender === 'Kobieta' ? StudentGirl : Student}
				alt="obraz studenta"
				width={200}
				height={200}
				className="h-[120px] w-[120px] self-end sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px]"
				loading="eager"
			/>
		</div>
	)
}

export default PanelHello
