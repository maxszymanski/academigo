import { formattedDateWithHour } from '@/app/utils/helpers'
import UserAvatar from '../_ui/UserAvatar'
import { CommentsType } from '@/app/_types/types'
import EditDeleteComent from './EditDeleteComent'

function CommentCard({ comment, userId }: { comment: CommentsType; userId: string | null }) {
	const commentAdded = formattedDateWithHour(comment.created_at)
	const commentLastEdit = formattedDateWithHour(comment.updated_at)

	const itsUserComment = userId && userId === comment.user_id

	return (
		<div className="flex flex-col sm:flex-row gap-3 sm:gap-7 py-7 sm:py-10 md:px-10 md:gap-12 px-4 xl:py-11">
			<div className="w-fit flex-shrink-0 flex sm:flex-col gap-3 items-center">
				<UserAvatar
					href={`/profil/${comment.full_user_data.id}`}
					avatar={comment.full_user_data.avatar}
					size="h-12 w-12 sm:h-24 sm:w-24 "
				/>
				<p className=" font-medium text-primary">{comment.full_user_data.username}</p>
			</div>
			<div className="flex flex-col justify-between gap-6 sm:gap-10   sm:mt-5">
				<p className="text-dark2/85 text-sm leading-[170%] sm:leading-[170%] xl:text-base lg:max-w-xl">
					{comment.comment}
				</p>
				<div className="flex flex-wrap gap-5 items-center md:gap-7 xl:gap-10 relative w-full">
					<p className="text-xs xs:text-sm text-dark2/75 ">
						{commentAdded}{' '}
						{commentLastEdit != commentAdded && (
							<span className="ml-2 text-xs">( edytowano {commentLastEdit} )</span>
						)}
					</p>
					{itsUserComment && userId && (
						<EditDeleteComent
							postSlug={comment.post_slug}
							commentId={comment.id}
							defaultValue={comment.comment}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default CommentCard
