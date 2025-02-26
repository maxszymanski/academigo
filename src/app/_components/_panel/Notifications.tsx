import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import NotificationList from './NotificationList'

function Notifications() {
    return (
        <div className="px-5 pt-12 md:pt-6 xl:rounded-3xl xl:bg-white xl:px-8 xl:py-8 2xl:px-20">
            <div className="xl:justify-betweens flex w-full flex-col items-center justify-center md:flex-row md:justify-evenly xl:flex-col 2xl:flex-row-reverse 2xl:gap-24">
                <NotificationList />

                <Link
                    href="/panel/moje-kursy/dodaj-kurs"
                    className="my-6 flex h-44 w-44 flex-shrink-0 flex-col items-center justify-center gap-5 rounded-3xl border-[3px] border-transparent bg-primary p-3 shadow-md shadow-stone-200 outline-none transition-colors duration-300 hover:bg-primary/90 focus:bg-primary/80 xl:h-48 xl:w-48 xl:py-4"
                >
                    <FaPlus className="size-20 text-white" />
                    <span className="text-sm text-white xl:text-sm">
                        Dodaj nowy kurs
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Notifications
