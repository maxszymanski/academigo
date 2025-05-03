import UserAvatar from '../_ui/UserAvatar'

import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'
import UserStats from '../_ui/UserStats'

function CreatedBy({ user }: { user: CurrentUserType }) {
	return (
		<div className="pt-8 w-fit text-dark2 pb-6 md:pb-2">
			<p className="mb-3 font-semibold text-2xl 2xl:text-3xl pl-2">Moderator</p>

			<div className="flex flex-col gap-5">
				<div>
					<Button
						href={`/profil/${user.id}`}
						variant="search"
						restClass="!text-primary hover:!text-primary2 !text-xl xl:!text-2xl !font-medium !pb-1 !w-fit">
						{user.username}
					</Button>
					{(user.role || user.profession) && (
						<p className=" text-dark2/75 text-sm pl-2">
							{user.profession && user.profession} {user.profession && user.role && '/'}{' '}
							{user.role && user.role}
						</p>
					)}
				</div>
				<div className="flex items-center gap-4 md:gap-5 ">
					<div className="w-fit flex-grow-0">
						<UserAvatar href={`/profil/${user.id}`} size="h-28 w-28 md:h-32 md:w-32" avatar={user.avatar} />
					</div>

					<UserStats user={user} />
				</div>
			</div>
		</div>
	)
}

export default CreatedBy
