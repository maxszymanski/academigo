'use client'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'

function Feedback() {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenFeedbackModal = () => {
		{
			if (openModal === 'feedback-modal') {
				closeModal()
			} else {
				setOpenModal('feedback-modal')
			}
		}
	}

	return (
		<div className="container mx-auto flex flex-col gap-5 items-center justify-center py-6 lg:py-8 xl:gap-6">
			<p className="text-center">Widzisz błąd, nieaktualne informacje lub nadużycie? Zgłoś to nam.</p>
			<Button variant="danger" restClass="!py-2" onClick={handleOpenFeedbackModal}>
				Zgłoś błąd
			</Button>
		</div>
	)
}

export default Feedback
