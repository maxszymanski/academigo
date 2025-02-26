import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import NotificationList from './NotificationList'

function Notifications() {
    return (
        <div className="px-5 pt-12 md:pt-6 xl:rounded-3xl xl:bg-white xl:px-8 xl:py-8 2xl:px-20">
            <div className="xl:justify-betweens flex w-full flex-col items-center justify-center md:flex-row md:justify-evenly xl:flex-col 2xl:flex-row-reverse 2xl:gap-24">
                {/* <NotificationList /> */}
            </div>
        </div>
    )
}

export default Notifications
