import { CurrentUserType } from '@/app/_types/types'
import { BiBookAdd, BiHeart, BiStar } from 'react-icons/bi'
import { PiRanking } from 'react-icons/pi'

function UserStats({ user }: { user: CurrentUserType }) {
	return (
		<div className="flex flex-col gap-3 text-dark2/85">
			<p className="flex items-center gap-2 text-sm">
				<PiRanking className="size-5" /> <span>{user.points} punktów</span>
			</p>
			<p className="flex items-center gap-2 text-sm">
				<BiBookAdd className="size-5" /> <span>{user.created_courses} dodanych kursów</span>
			</p>
			<p className="flex items-center gap-2 text-sm">
				<BiStar className="size-5" /> <span>{user.rated_courses} recenzji</span>
			</p>
			<p className="flex items-center gap-2 text-sm">
				<BiHeart className="size-5" /> <span>{user.liked_courses} polubień</span>
			</p>
		</div>
	)
}

export default UserStats
