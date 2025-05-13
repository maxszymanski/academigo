import { CommentsType } from '@/app/_types/types'
import CommentCard from './CommentCard'

function PostComments({
	comments = [],
	totalCount = 0,
	userId,
}: {
	comments: CommentsType[]
	totalCount?: number
	userId: string | null
}) {
	const format =
		totalCount === 1
			? 'Komentarz'
			: totalCount === 2 || totalCount === 3 || totalCount === 4
				? 'Komentarze'
				: totalCount >= 5 && 'Komentarzy'

	return (
		<div>
			<h2 className="text-4xl pb-10 text-dark2/85 font-bold xl:pb-14">
				{totalCount > 0 ? `${totalCount} ${format}` : 'Komentarze'}
			</h2>
			{comments.length > 0 && totalCount > 0 ? (
				<div className="border border-slate-200 rounded-xl w-full flex flex-col  divide-y divide-slate-200 ">
					{comments.map(com => (
						<CommentCard key={com.id} comment={com} userId={userId || null} />
					))}
				</div>
			) : (
				<p className="text-dark2/80 mb-20">Ten post nie ma jeszcze komentarzy.</p>
			)}
		</div>
	)
}

export default PostComments
