import UserAvatar from '../_ui/UserAvatar'
import { PiRanking } from 'react-icons/pi'
import { BiBookAdd, BiHeart, BiStar } from 'react-icons/bi'
import Button from '../_ui/Button'
import { CurrentUserType } from '@/app/_types/types'

function CreatedBy({ moderator }: { moderator: CurrentUserType }) {
	return (
		<div className="pt-12 w-fit text-dark2 pb-6 md:pb-2">
			<p className="mb-3 font-semibold text-2xl 2xl:text-3xl pl-2">Moderator</p>

			<div className="flex flex-col gap-5">
				<div>
					<Button
						href={`/profil/${moderator.id}`}
						variant="search"
						restClass="!text-primary hover:!text-primary2 !text-xl xl:!text-2xl !font-medium !pb-1 !w-fit">
						{moderator.username}
					</Button>
					{(moderator.role || moderator.profession) && (
						<p className=" text-dark2/75 text-sm pl-2">
							{moderator.profession && moderator.profession}{' '}
							{moderator.profession && moderator.role && '/'} {moderator.role && moderator.role}
						</p>
					)}
				</div>
				<div className="flex items-center gap-4 md:gap-5 ">
					<div className="w-fit flex-grow-0">
						<UserAvatar
							href={`/profil/${moderator.id}`}
							size="h-28 w-28 md:h-32 md:w-32"
							avatar={moderator.avatar}
						/>
					</div>

					<div className="flex flex-col gap-3 ">
						<p className="flex items-center gap-3 text-sm">
							<PiRanking className="size-5" /> <span>{moderator.points} punktów</span>
						</p>
						<p className="flex items-center gap-3 text-sm">
							<BiBookAdd className="size-5" /> <span>{moderator.created_courses} dodanych kursów</span>
						</p>
						<p className="flex items-center gap-3 text-sm">
							<BiStar className="size-5" /> <span>{moderator.rated_courses} recenzji</span>
						</p>
						<p className="flex items-center gap-3 text-sm">
							<BiHeart className="size-5" /> <span>{moderator.liked_courses} polubień</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatedBy
