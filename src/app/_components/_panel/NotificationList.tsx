import Link from 'next/link'
import { FaBell } from 'react-icons/fa'

const notifications = [
    {
        id: 1,
        emoji: '✅',
        link: '/kurs/2384728347',
        type: 'like',
        when: '16:30',
    },
    {
        id: 2,
        emoji: '💬',
        link: '/kurs/2384728347',
        type: 'comment',
        when: '16:30',
    },
    {
        id: 3,
        emoji: '⭐',
        link: '/kurs/2384728347',
        type: 'rating',
        when: '16:30',
    },
    {
        id: 4,
        emoji: '🔄',
        link: '/kurs/2384728347',
        type: 'sharing',
        when: '16:30',
    },
    {
        id: 6,
        emoji: '🔄',
        link: '/kurs/2384728347',
        type: 'sharing',
        when: '16:30',
    },
    {
        id: 5,
        emoji: '🔖',
        link: '/kurs/2384728347',
        type: 'tab',
        when: '16:30',
    },
    {
        id: 10,
        emoji: '💬',
        link: '/kurs/2384728347',
        type: 'comment',
        when: '16:30',
    },
    {
        id: 11,
        emoji: '💬',
        link: '/kurs/2384728347',
        type: 'comment',
        when: '16:30',
    },
]

function NotificationList() {
    return (
        <div className="mx-auto w-full max-w-[480px] sm:w-[480px] sm:max-w-full md:mx-0">
            <h2 className="flex items-center justify-center gap-3 pb-6 text-center text-xl font-bold text-primary lg:px-6 lg:pb-8 xl:pb-10 xl:text-2xl">
                <FaBell className="size-8 text-primary/90" /> Powiadomienia
            </h2>
            <ul className="border-3 my-4 h-96 w-full overflow-y-auto rounded-3xl border-primary bg-stone-50 shadow-md shadow-stone-200 outline-none transition-colors duration-300 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2 lg:scrollbar-none">
                {notifications.map((notification) => {
                    const { emoji, link, type, when, id } = notification

                    const typeOfNot =
                        type === 'like'
                            ? 'polubił'
                            : type === 'comment'
                              ? 'skomentował'
                              : type === 'rating'
                                ? 'ocenił'
                                : type === 'sharing'
                                  ? 'udostępnił'
                                  : type === 'tab'
                                    ? 'dodał do zakładek'
                                    : ''

                    return (
                        <li
                            className="w-full transition-colors duration-300 odd:bg-primary/60 even:bg-white odd:hover:bg-primary/80 even:hover:bg-stone-100"
                            key={id}
                        >
                            <Link
                                href={link}
                                className="inline-flex w-full items-center justify-between px-4 py-5 text-xs text-dark/90 md:text-sm"
                            >
                                <p>
                                    {emoji}{' '}
                                    {`Ktoś właśnie ${typeOfNot} twój kurs`}
                                </p>
                                <p className="text-xs text-dark/50"> {when}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NotificationList
