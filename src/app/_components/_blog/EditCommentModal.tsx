'use client'

import { updatePostComment } from '@/app/_actions/mutations'
import useAppStore from '@/app/stores/store'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import Button from '../_ui/Button'
import Modal from '../_ui/Modal'
import LoadingPortal from '../_ui/LoadingPortal'
import Spinner from '../_ui/Spinner'
import { commentSchema, CommentType } from '@/app/_lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

function EditCommentModal({
	postSlug,
	commentId,
	defaultValue,
}: {
	postSlug: string
	commentId: string
	defaultValue?: string
}) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const {
		register,
		handleSubmit,

		formState: { errors, isSubmitting },
	} = useForm<CommentType>({
		resolver: zodResolver(commentSchema),
	})

	useEffect(() => {
		if (openModal && modalRef.current) {
			modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}, [openModal])

	const onSubmit: SubmitHandler<CommentType> = async data => {
		const result = await updatePostComment(postSlug, data.comment, commentId)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Twój komentarz został edytowany')
			closeModal()
		}
	}

	if (openModal != 'edit-comment') return null

	return (
		<>
			{isSubmitting && <LoadingPortal information="Edytowanie komentarza" />}
			<Modal
				modalRef={modalRef}
				closeModal={closeModal}
				buttonId="delete-comment"
				position="top-[130%] left-0 xl:px-12">
				<div className="p-8 xl:px-12">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h3 className="text-base text-dark2/85 mb-4 font-semibold">Edytuj Komentarz</h3>
						<div>
							<textarea
								placeholder="Twój komentarz"
								className={`peer block max-h-32 min-h-32 w-full max-w-3xl  resize-y appearance-none border  text-sm outline-none focus:ring-1 focus:ring-slate-300 transition-colors duration-300  placeholder:select-none placeholder:dark2/90 text-dark2 disabled:cursor-not-allowed disabled:bg-slate-500 px-5 py-3.5 rounded-lg  bg-white border-slate-200 hover:border-slate-300`}
								lang="pl"
								{...register('comment')}
								defaultValue={defaultValue}
							/>
							{errors.comment && (
								<span className="text-sm  text-red-500 mt-2 pl-1">{errors.comment.message}</span>
							)}
						</div>
						<div className="flex items-center flex-wrap justify-center gap-5 sm:gap-8 md:flex-nowrap mt-7">
							<Button
								variant="submit"
								id="delete-comment"
								restClass=" w-[177px] !text-sm"
								disabled={isSubmitting}
								type="submit">
								Edytuj
								{isSubmitting && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
							</Button>
							<Button
								variant="danger"
								onClick={e => {
									e.preventDefault()
									closeModal()
								}}
								type="button"
								restClass=" min-w-[177px] !text-sm">
								Anuluj
							</Button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}

export default EditCommentModal
