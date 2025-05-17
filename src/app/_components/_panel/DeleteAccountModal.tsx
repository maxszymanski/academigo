'use client'
import { useRef, useState, useTransition } from 'react'
import Modal from '../_ui/Modal'
import useAppStore from '@/app/stores/store'
import Button from '../_ui/Button'
import Spinner from '../_ui/Spinner'
import toast from 'react-hot-toast'
import { deleteAcountEmail } from '@/app/_actions/contact'
import { logout } from '@/app/_actions/auth'

function DeleteAccountModal({ userEmail }: { userEmail: string }) {
	const modalRef = useRef<HTMLDivElement | null>(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const [isPending, startTransition] = useTransition()
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

	if (openModal != 'delete-account') return null

	const handleDeleteAccount = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('email', userEmail)

		startTransition(async () => {
			const res = await deleteAcountEmail(formData)

			if (res?.status === 'success') {
				setStatus('success')
			} else {
				setStatus('error')
				toast.error('Wystąpił problem podczas usuwania konta. Proszę spróbować ponownie')
			}
		})
	}
	const handleLogout = async () => {
		startTransition(async () => {
			closeModal()
			await logout()
		})
	}

	const modalClose =
		status === 'success'
			? () => {
					return
				}
			: closeModal

	return (
		<>
			<Modal modalRef={modalRef} closeModal={modalClose} fullPageModal buttonId="delete-account">
				<div className="px-4 py-8 sm:px-8">
					{status != 'success' && (
						<form onSubmit={handleDeleteAccount}>
							<p className="text-dark2 md:text-lg pb-10">
								Czy jesteś pewny, że chcesz usunąć swoje konto?
							</p>
							<div className="flex items-center flex-wrap justify-center gap-8">
								<Button
									variant="danger"
									id="delete-account"
									restClass="2xl:!text-base min-w-[177px]"
									disabled={isPending}>
									Usuń konto
									{isPending && <Spinner restClass="ml-6 absolute right-3 md:right-4" />}
								</Button>
								<Button variant="submit" onClick={closeModal} restClass="2xl:!text-base min-w-[177px] ">
									Anuluj
								</Button>
							</div>
						</form>
					)}
					{status === 'success' && (
						<div className="w-full text-stone400">
							<div className=" flex flex-col items-center gap-5 ">
								<p className="text-xl md:text-2xl">Szkoda, że odchodzisz 💔</p>
								<p className="leading-6 text-sm md:text-base">
									Przykro nam, że zdecydowałeś się usunąć swoje konto. <br /> Mamy jednak nadzieję, że
									jeszcze do nas wrócisz!
								</p>
								<p className="leading-6 text-sm md:text-base">
									Twoja prośba o usunięcie konta została wysłana. <br />
									Konto zostanie zamknięte w najbliższym czasie.
								</p>
								<Button
									variant="submit"
									onClick={handleLogout}
									restClass="2xl:!text-base min-w-[177px] ">
									Wyloguj
								</Button>
							</div>
						</div>
					)}
				</div>
			</Modal>
		</>
	)
}

export default DeleteAccountModal
