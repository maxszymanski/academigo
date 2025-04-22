'use client'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'

function DeleteCourse({ modalName, text }: { modalName: string; text: string }) {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenDeleteModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		{
			if (openModal ===  modalName ) {
				closeModal()
			} else {
				setOpenModal(modalName )
			}
		}
	}

	return (
		<Button variant="danger" restClass="relative" onClick={handleOpenDeleteModal}>
			{text}
		</Button>
	)
}

export default DeleteCourse
