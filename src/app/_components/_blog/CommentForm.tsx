'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../_ui/Button'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema, CommentType } from '@/app/_lib/validators'
import LoadingPortal from '../_ui/LoadingPortal'
import { addPostComment } from '@/app/_actions/mutations'

function CommentForm({ userId, postSlug }: { userId: string | null; postSlug: string }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<CommentType>({
		resolver: zodResolver(commentSchema),
	})

	const onSubmit: SubmitHandler<CommentType> = async data => {
		const result = await addPostComment(postSlug, data.comment)
		if (result?.error) {
			toast.error(result.error)
		} else {
			reset()
			toast.success('Twój komentarz został dodany')
		}
	}

	return (
		<div className="pt-14 pb-6 md:pt-20 xl:pt-24 xl:pb-20">
			{isSubmitting && <LoadingPortal information="Trwa dodawanie komentarza" />}
			<h2 className="text-3xl sm:text-4xl pb-8 md:pb-10 text-dark2/85 font-bold ">Zostaw Komentarz</h2>
			{userId ? (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<textarea
							placeholder="Twój komentarz"
							className={`peer block max-h-32 min-h-32 w-full max-w-3xl  resize-y appearance-none border  text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300  placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 px-5 py-3.5 rounded-lg  bg-white border-slate-200 hover:border-slate-300`}
							lang="pl"
							{...register('comment')}
						/>
						{errors.comment && (
							<span className="text-sm  text-red-500 mt-2 pl-1">{errors.comment.message}</span>
						)}
					</div>
					<Button
						variant="white"
						restClass="mt-4 xl:mt-6 border border-slate-200 !py-3.5 !px-12 !text-dark2/90 !rounded-xl">
						Wyślij
					</Button>
				</form>
			) : (
				<p className="text-dark2/85">Tylko zalogowani użytkownicy mogą dodawać komentarze.</p>
			)}
		</div>
	)
}

export default CommentForm
