'use client'

import { deletePostComment } from '@/app/_actions/mutations'
import useAppStore from '@/app/stores/store'
import { useEffect, useRef, useTransition } from 'react'
import toast from 'react-hot-toast'
import Button from '../_ui/Button'
import Modal from '../_ui/Modal'
import LoadingPortal from '../_ui/LoadingPortal'
import Spinner from '../_ui/Spinner'

function DeleteCommentModal({ postSlug, commentId }: { postSlug: string; commentId: string }) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		if (openModal && modalRef.current) {
			modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}, [openModal])

	if (openModal != `delete-${commentId}`) return null

	const handleDeleteComment = () => {
		startTransition(async () => {
			const res = await deletePostComment(postSlug, commentId)

			if (res?.error) {
				toast.error('Wystąpił problem podczas usuwania komentarza')
			} else {
				toast.success('Komentarz został usunięty')
				closeModal()
			}
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Usuwanie komentarza" />}
			<Modal
				modalRef={modalRef}
				closeModal={closeModal}
				buttonId={`delete-${commentId}`}
				position="top-[130%] left-0 ">
				<div className="p-8">
					<p className="text-dark2 md:text-lg pb-10">Czy jesteś pewny, że chcesz usunąć komentarz?</p>
					<div className="flex items-center flex-wrap justify-center gap-5 sm:gap-8 md:flex-nowrap">
						<Button
							variant="danger"
							id="delete-comment"
							restClass="2xl:!text-base w-[177px] !text-sm !py-2.5"
							disabled={isPending}
							onClick={handleDeleteComment}>
							Usuń
							{isPending && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
						</Button>
						<Button
							variant="submit"
							onClick={closeModal}
							restClass="2xl:!text-base min-w-[177px] !text-sm !py-2.5">
							Anuluj
						</Button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default DeleteCommentModal
