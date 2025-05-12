import CommentCard from './CommentCard'

function PostComments() {
	return (
		<div>
			<h2 className="text-4xl pb-10 text-dark2/85 font-bold ">12 Komentarzy</h2>
			<div className="border border-slate-200 rounded-xl w-full flex flex-col  divide-y divide-slate-200 ">
				<CommentCard />
				<CommentCard />
				<CommentCard />
				<CommentCard />
			</div>
		</div>
	)
}

export default PostComments
