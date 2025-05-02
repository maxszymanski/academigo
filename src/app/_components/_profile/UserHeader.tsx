import { CurrentUserType } from '@/app/_types/types'
import UserAvatar from '../_ui/UserAvatar'

function UserHeader({ user }: { user: CurrentUserType }) {
	return (
		<header className="w-fit flex-grow-0">
			<h1 className="text-primary text-2xl xl:text-4xl">{user.username}</h1>
			<UserAvatar href={user.avatar} size="h-28 w-28 md:h-72 md:w-72" avatar={user.avatar} target="_blanc" />
		</header>
	)
}

export default UserHeader
