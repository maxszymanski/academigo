import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import NotificationList from './NotificationList'

function Notifications() {
	return (
		<div className="pt-12 md:pt-6 px-5  xl:bg-white xl:rounded-3xl xl:py-8 xl:px-8 2xl:px-20 ">
			<div className="flex flex-col items-center justify-center  w-full md:flex-row xl:flex-col md:justify-evenly 2xl:flex-row-reverse xl:justify-betweens 2xl:gap-24">
				<NotificationList />

				<Link
					href="/panel/moje-kursy/dodaj-kurs"
					className="bg-primary w-44 h-44 p-3 flex flex-col items-center justify-center gap-5 rounded-3xl flex-shrink-0 my-6 shadow-md shadow-stone-200 border-[3px] border-transparent transition-colors duration-300 focus:bg-primary/80 outline-none xl:w-48 xl:h-48 xl:py-4 hover:bg-primary/90 ">
					<FaPlus className="size-20 text-white" />
					<span className="text-sm text-white xl:text-sm">Dodaj nowy kurs</span>
				</Link>
			</div>
		</div>
	)
}

export default Notifications
