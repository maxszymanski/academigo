import Image from 'next/image'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import StudentGirl from '../../../../public/student-girl.png'
import Student from '../../../../public/student.png'

function PanelHello() {
	const today = new Date()
	const formattedDate = format(today, 'd MMMM yyyy', { locale: pl })

	const userSex = 'female'

	return (
		<div className="bg-primary rounded-3xl text-white/75 pl-3.5 pt-6 mb-8 flex gap-1 overflow-hidden  justify-evenly sm:justify-between sm:px-14 mx-1 sm:mx-4 lg:mx-6 lg:px-12 xl:px-16 2xl:px-40 ">
			<div className="text-xs pb-6 sm:pb-0 sm:flex sm:flex-col sm:justify-between md:pt-4 ">
				<p className="md:text-sm">{formattedDate}</p>
				<div className="mt-8 sm:items-end sm:mb-8 md:mb-10 xl:mt-10 2xl:my-12">
					<p className="text-lg text-white font-semibold mb-2 sm:mb-3 sm:text-2xl lg:text-4xl md:text-3xl xl:text-5xl xl:mb-6 ">
						Witaj ponownie Aga!
					</p>
					<p className="max-w-52 sm:max-w-full xl:text-base">
						Zarządzaj swoim kontem i kursami w jednym miejscu
					</p>
				</div>
			</div>
			<Image
				priority
				src={userSex === 'female' ? StudentGirl : Student}
				alt="obraz studenta"
				width={200}
				height={200}
				className="self-end w-[120px] h-[120px] sm:h-[160px] sm:w-[160px] md:w-[200px] md:h-[200px]"
				loading="eager"
			/>
		</div>
	)
}

export default PanelHello
