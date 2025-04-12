'use client'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'

function DeleteCourse() {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenDeleteModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		{
			if (openModal === 'delete') {
				closeModal()
			} else {
				setOpenModal('delete')
			}
		}
	}

	return (
		<Button variant="danger" restClass="relative" onClick={handleOpenDeleteModal}>
			Usuń kurs
		</Button>
	)
}

export default DeleteCourse
