'use client'
import { useEffect, useRef } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'
import Spinner from '../_ui/Spinner'
import LoadingPortal from '../_ui/LoadingPortal'
import PanelInput from '../_ui/PanelInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { feedbackSchema, FeedbackType } from '@/app/_lib/validators'
import { reportUser, sendFeedback } from '@/app/_actions/mutations'

function FeedbackModal({
	userReported,
	courseID,
	userID,
}: {
	userReported?: string
	courseID?: string
	userID?: string | null
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FeedbackType>({
		resolver: zodResolver(feedbackSchema),
	})

	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)

	useEffect(() => {
		if (openModal && modalRef.current) {
			modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}, [openModal])

	const onSubmitCourse: SubmitHandler<FeedbackType> = async data => {
		if (!courseID) return
		const result = await sendFeedback(data.message, courseID, userID || null)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Dziękujemy za wysłanie zgłoszenia. Postaramy się je rozwiązać jak najszybciej.')
		}
		reset()
		closeModal()
	}
	const onSubmitUser: SubmitHandler<FeedbackType> = async data => {
		if (!userReported) return
		const result = await reportUser(data.message, userReported)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Dziękujemy za wysłanie zgłoszenia. Postaramy się je rozwiązać jak najszybciej.')
		}
		reset()
		closeModal()
	}

	const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		reset()
		closeModal()
	}

	if (openModal != 'feedback-modal') return null

	return (
		<>
			{isSubmitting && <LoadingPortal information="Wysyłanie zgłoszenia" />}
			<Modal modalRef={modalRef} closeModal={closeModal} fullPageModal buttonId="feedback-button" reset={reset}>
				<div className="px-4 py-8 xl:min-w-[600px]">
					<form
						className="flex flex-col gap-4  w-full "
						onSubmit={handleSubmit(userReported ? onSubmitUser : onSubmitCourse)}>
						<PanelInput
							textArea
							label="Opisz problem lub sugestię"
							type="text"
							name="message"
							placeholder="Twoja wiadomość"
							formRegister={register('message')}
							error={errors?.message || null}
							message={errors?.message?.message || null}
						/>
						<div className="flex items-center flex-wrap justify-center gap-6 md:gap-8 pt-6">
							<Button
								variant="submit"
								id="send-feedback"
								restClass="2xl:!text-base w-[177px]"
								disabled={isSubmitting}
								type="submit">
								Wyślj
								{isSubmitting && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
							</Button>
							<Button
								variant="danger"
								onClick={handleCloseModal}
								restClass="2xl:!text-base w-[177px] "
								type="button">
								Anuluj
							</Button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}

export default FeedbackModal
