import { CurrentUserType } from '@/app/_types/types'
import UserAvatar from '../_ui/UserAvatar'

import UserInformations from './UserInformations'

function UserHeader({ user }: { user: CurrentUserType }) {
	const isGender = user.gender === 'Kobieta' || user.gender === 'Mężczyzna'

	return (
		<header className="">
			<div className="flex flex-col gap-4">
				<div>
					<div className="flex  gap-4 md:gap-5  items-center">
						<UserAvatar
							href={user.avatar}
							size="h-16 w-16 md:h-72 md:w-72"
							avatar={user.avatar}
							target="_blanc"
						/>
						<div className="flex flex-col ">
							<h1 className="text-primary font-medium text-xl xl:text-4xl">{user.username}</h1>
							<p className="text-dark2/75 text-sm min-h-[20px]">
								{isGender ? user.gender : ''}
								{isGender && ','} {user?.age || ''} {user?.age && 'lat'}
							</p>
						</div>
					</div>
					<p className="text-dark2/95 py-2 text-base font-medium pr-2 max-w-[400px]">
						{user.short_description}
					</p>
				</div>
				<UserInformations user={user} />
			</div>
		</header>
	)
}

export default UserHeader
