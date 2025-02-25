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
		<div className="w-full max-w-[480px] sm:max-w-full sm:w-[480px]  mx-auto md:mx-0 ">
			<h2 className="text-xl font-bold text-primary text-center pb-6 flex items-center justify-center gap-3 lg:px-6 lg:pb-8 xl:text-2xl xl:pb-10">
				<FaBell className="text-primary/90 size-8" /> Powiadomienia
			</h2>
			<ul className="w-full  h-96  rounded-3xl  my-4 shadow-md shadow-stone-200 border-3 transition-colors duration-300 border-primary outline-none overflow-y-auto scrollbar-thin scrollbar-thumb-primary2 scrollbar-track-primary lg:scrollbar-none  bg-stone-50 ">
				{notifications.map(notification => {
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
							className="w-full odd:bg-primary/60 even:bg-white odd:hover:bg-primary/80 transition-colors duration-300 even:hover:bg-stone-100"
							key={id}>
							<Link
								href={link}
								className="text-xs text-dark/90 px-4 py-5 inline-flex justify-between w-full items-center md:text-sm">
								<p>
									{emoji} {`Ktoś właśnie ${typeOfNot} twój kurs`}
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
