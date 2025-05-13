'use client'
import { FaEdit } from 'react-icons/fa'
import Button from '../_ui/Button'
import { FaTrash } from 'react-icons/fa6'
import useAppStore from '@/app/stores/store'
import DeleteCommentModal from './DeleteCommentModal'
import EditCommentModal from './EditCommentModal'

function EditDeleteComent({
	postSlug,
	commentId,
	defaultValue,
}: {
	postSlug: string
	commentId: string
	defaultValue: string
}) {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenDeleteModal = () => {
		{
			if (openModal === `delete-${commentId}`) {
				closeModal()
			} else {
				setOpenModal(`delete-${commentId}`)
			}
		}
	}
	const handleOpenEditModal = () => {
		{
			if (openModal === `edit-${commentId}`) {
				closeModal()
			} else {
				setOpenModal(`edit-${commentId}`)
			}
		}
	}

	return (
		<>
			{openModal === `delete-${commentId}` && <DeleteCommentModal postSlug={postSlug} commentId={commentId} />}
			{openModal === `edit-${commentId}` && (
				<EditCommentModal postSlug={postSlug} commentId={commentId} defaultValue={defaultValue} />
			)}
			<div className="w-fit flex gap-5 md:gap-7 items-center">
				<Button
					variant="transparentDark"
					restClass="!text-dark2 hover:!text-dark2/75 px-4 py-2 rounded-xl border border-transparent !bg-slate50 hover:!border-slate-300 !text-sm md:!text-base items-center"
					title="Edytuj komentarz"
					onClick={handleOpenEditModal}
					id={`edit-${commentId}`}>
					<FaEdit className="mr-2 size-4 pointer-events-none" /> Edytuj
				</Button>{' '}
				<Button
					variant="transparentDark"
					restClass="!text-red-500 hover:!text-red-600 px-4 py-2 rounded-xl !bg-slate50 hover:!border-red-600 border border-transparent !text-sm md:!text-base items-center"
					title="Usuń komentarz"
					onClick={handleOpenDeleteModal}
					id={`delete-${commentId}`}>
					<FaTrash className="mr-2 size-3 md:size-4 pointer-events-none" /> Usuń
				</Button>
			</div>
		</>
	)
}

export default EditDeleteComent
