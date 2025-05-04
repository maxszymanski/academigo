import { CurrentUserType } from '@/app/_types/types'
import { BiBookAdd, BiBookmark, BiHeart, BiStar } from 'react-icons/bi'
import { PiRanking } from 'react-icons/pi'

function UserStats({ user, userProfile = false }: { user: CurrentUserType; userProfile?: boolean }) {
	return (
		<div className={`flex flex-col gap-3 text-dark2/85 text-sm ${userProfile ? 'md:text-lg md:gap-4' : ''}`}>
			<p className="flex items-center gap-2 ">
				<PiRanking className={`size-5 ${userProfile ? 'md:size-6' : ''}`} />
				<span>{user.points} punktów</span>
			</p>
			<p className="flex items-center gap-2 ">
				<BiBookAdd className={`size-5 ${userProfile ? 'md:size-6' : ''}`} />{' '}
				<span>{user.created_courses} dodanych kursów</span>
			</p>
			<p className="flex items-center gap-2 ">
				<BiStar className={`size-5 ${userProfile ? 'md:size-6' : ''}`} />{' '}
				<span>{user.rated_courses} recenzji</span>
			</p>
			<p className="flex items-center gap-2 ">
				<BiHeart className={`size-5 ${userProfile ? 'md:size-6' : ''}`} />{' '}
				<span>{user.liked_courses} polubień</span>
			</p>
			{userProfile && (
				<p className="flex items-center gap-2 ">
					<BiBookmark className={`size-5 ${userProfile ? 'md:size-6' : ''}`} />{' '}
					<span>{user.saved_courses} zapisanych</span>
				</p>
			)}
		</div>
	)
}

export default UserStats
