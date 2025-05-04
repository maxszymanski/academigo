import { CurrentUserType } from '@/app/_types/types'
import UserAvatar from '../_ui/UserAvatar'

import UserInformations from './UserInformations'

function UserHeader({ user }: { user: CurrentUserType }) {
	const isGender = user.gender === 'Kobieta' || user.gender === 'Mężczyzna'

	return (
		<header className="bg-slate50 pt-20  pb-8 md:pt-8  xl:py-12 2xl:py-14">
			<div className="flex flex-col  md:flex-row md:gap-16 md:items-start  lg:container 2xl:max-w-7xl mx-auto  xl:gap-32 px-4 xl:px-8">
				<div className="md:flex md:flex-col md:items-center md:max-w-80 pb-1 w-full flex-shrink-0 mb:pb-0">
					<div className="flex  gap-4 md:gap-5  items-center  md:flex-col  ">
						<UserAvatar
							href={user.avatar}
							size="h-16 w-16 md:h-72 md:w-72 md:flex-shrink-0 xl:h-80 xl:w-80"
							avatar={user.avatar}
							target="_blanc"
						/>
						<div className="flex flex-col md:items-center">
							<h1 className="text-primary font-medium text-xl md:text-2xl xl:text-4xl">
								{user.username}
							</h1>
							<p className="text-dark2/75 text-sm min-h-[20px] md:text-base xl:text-lg xl:mt-2">
								{isGender ? user.gender : ''}
								{isGender && ','} {user?.age || ''} {user?.age && 'lat'}
							</p>
						</div>
					</div>
				</div>
				<UserInformations user={user} />
			</div>
		</header>
	)
}

export default UserHeader
