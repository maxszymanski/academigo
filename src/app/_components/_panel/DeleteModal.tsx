'use client'
import { useRef, useTransition } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'
import { deleteCourse } from '@/app/_actions/mutations'
import Spinner from '../_ui/Spinner'
import LoadingPortal from '../_ui/LoadingPortal'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function DeleteModal({ courseID }: { courseID: string }) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	if (openModal != 'delete') return null

	const handleDeleteCourse = () => {
		startTransition(async () => {
			const res = await deleteCourse(courseID)

			if (res?.error) {
				toast.error(res.error)
			} else {
				toast.success('Kurs został usunięty')
				router.push('/konto/moje-kursy')
				closeModal()
			}
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Usuwanie kursu" />}
			<Modal modalRef={modalRef} closeModal={closeModal} fullPageModal buttonId="delete">
				<div className="p-8">
					<p className="text-dark2 md:text-lg pb-10">Czy jesteś pewny, że chcesz usunąć kurs?</p>
					<div className="flex items-center flex-wrap justify-center gap-8">
						<Button variant="submit" onClick={closeModal} restClass="2xl:!text-base min-w-[177px] ">
							Anuluj
						</Button>
						<Button
							variant="danger"
							id="delete-course"
							restClass="2xl:!text-base min-w-[177px]"
							disabled={isPending}
							onClick={handleDeleteCourse}>
							Usuń kurs
							{isPending && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
						</Button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default DeleteModal
