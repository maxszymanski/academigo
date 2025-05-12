'use client'
import { useRef, useTransition } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'
import { deleteAvatar } from '@/app/_actions/mutations'
import Spinner from '../_ui/Spinner'
import LoadingPortal from '../_ui/LoadingPortal'
import toast from 'react-hot-toast'

function DeleteAvatarModal({ setImage }: { setImage: React.Dispatch<React.SetStateAction<File | null | string>> }) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const [isPending, startTransition] = useTransition()

	if (openModal != 'delete-avatar') return null

	const handleDeleteAvatar = () => {
		startTransition(async () => {
			const res = await deleteAvatar()

			if (res?.error) {
				toast.error('Wystąpił problem podczas usuwania zdjęcia')
			} else {
				setImage(null)
				toast.success('Zdjęcie zostało usuniętę')
				closeModal()
			}
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Usuwanie zdjęcia" />}
			<Modal modalRef={modalRef} closeModal={closeModal} fullPageModal buttonId="deleteAvatar">
				<div className="p-8">
					<p className="text-dark2 md:text-lg pb-10">Czy jesteś pewny, że chcesz usunąć komentarz?</p>
					<div className="flex items-center flex-wrap justify-center gap-5 sm:gap-8">
						<Button
							variant="danger"
							id="delete-avatar"
							restClass="2xl:!text-base w-[177px]"
							disabled={isPending}
							onClick={handleDeleteAvatar}>
							Usuń zdjęcie
							{isPending && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
						</Button>
						<Button variant="submit" onClick={closeModal} restClass="2xl:!text-base min-w-[177px] ">
							Anuluj
						</Button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default DeleteAvatarModal
